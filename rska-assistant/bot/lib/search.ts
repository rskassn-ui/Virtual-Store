import {
  RECORD_NOTE,
  branches,
  instructors,
  topics,
  type Instructor,
  type LineageBranch,
  type Topic,
} from "./catalog.js";

const STOP = new Set([
  "a",
  "an",
  "the",
  "of",
  "and",
  "or",
  "to",
  "for",
  "in",
  "on",
  "at",
  "is",
  "are",
  "was",
  "be",
  "do",
  "does",
  "did",
  "how",
  "me",
  "my",
  "your",
  "our",
  "with",
  "from",
  "about",
  "please",
  "tell",
  "this",
  "that",
  "what",
  "who",
  "where",
  "when",
  "which",
  "why",
]);

const LIST_LINEAGE = new Set([
  "all",
  "directory",
  "registry",
  "instructors",
  "everyone",
  "list",
  "verified",
  "black",
  "belts",
  "belt",
  "lineage",
]);

export type TopicMatch = {
  id: string;
  title: string;
  summary: string;
  source: string;
};

export type AssociationLookup = {
  query: string;
  matchCount: number;
  matches: TopicMatch[];
  recordNote: string;
};

export type LineageLookup = {
  query: string;
  matchCount: number;
  instructors: Instructor[];
  branches: LineageBranch[];
  recordNote: string;
};

function normalize(value: string): string {
  return value
    .toLowerCase()
    .normalize("NFD")
    .replace(/\p{M}/gu, "")
    .replace(/[^a-z0-9]+/g, " ")
    .trim();
}

export function contentTokens(query: string): string[] {
  const tokens = normalize(query)
    .split(" ")
    .filter((token) => token.length > 1 && !STOP.has(token));
  return [...new Set(tokens)];
}

function hasWord(haystack: string, token: string): boolean {
  return ` ${haystack} `.includes(` ${token} `);
}

function tokenIn(fields: { keywords: string; title: string; body: string }, token: string): boolean {
  return hasWord(fields.keywords, token) || hasWord(fields.title, token) || hasWord(fields.body, token);
}

function scoreText(tokens: string[], fields: { keywords: string; title: string; body: string }): number {
  let score = 0;
  for (const token of tokens) {
    if (hasWord(fields.keywords, token)) score += 4;
    else if (hasWord(fields.title, token)) score += 2;
    else if (hasWord(fields.body, token)) score += 1;
  }
  return score;
}

function topicFields(topic: Topic): { keywords: string; title: string; body: string } {
  return {
    keywords: normalize(topic.keywords.join(" ")),
    title: normalize(topic.title),
    body: normalize(topic.summary),
  };
}

export function lookupAssociation(query: string, limit = 3): AssociationLookup {
  const tokens = contentTokens(query);
  const cap = Math.min(Math.max(limit, 1), 5);
  const ranked = topics
    .map((topic) => {
      const fields = topicFields(topic);
      const keywordHits = tokens.filter((token) => hasWord(fields.keywords, token) || hasWord(fields.title, token));
      return { topic, score: keywordHits.length === 0 ? 0 : scoreText(tokens, fields) };
    })
    .filter((row) => row.score > 0)
    .sort((a, b) => b.score - a.score || a.topic.title.localeCompare(b.topic.title))
    .slice(0, cap);

  const chosen = ranked.length > 0 ? ranked.map((row) => row.topic) : tokens.length === 0 ? topics.slice(0, 1) : [];

  return {
    query,
    matchCount: chosen.length,
    matches: chosen.map((topic) => ({
      id: topic.id,
      title: topic.title,
      summary: topic.summary,
      source: topic.source,
    })),
    recordNote:
      chosen.length === 0
        ? `${RECORD_NOTE} No topic matched. Try head school, programs, contact, values, or rank titles.`
        : RECORD_NOTE,
  };
}

function instructorFields(instructor: Instructor): { keywords: string; title: string; body: string } {
  const extra = [
    instructor.name,
    instructor.rank,
    instructor.rankReading,
    instructor.shogo ?? "",
    instructor.certificate ?? "",
    (instructor.certificate ?? "").replace(/[^a-z0-9]/gi, ""),
    ...instructor.roles,
    ...instructor.lineage,
    instructor.school,
    instructor.status,
  ];
  return {
    keywords: normalize(extra.join(" ")),
    title: normalize(instructor.name),
    body: normalize([...instructor.roles, instructor.school, ...instructor.lineage].join(" ")),
  };
}

function branchFields(branch: LineageBranch): { keywords: string; title: string; body: string } {
  return {
    keywords: normalize([branch.label, branch.id, ...branch.people].join(" ")),
    title: normalize(branch.label),
    body: normalize(branch.note),
  };
}

const CHART_WORDS = new Set(["lineage", "branch", "branches", "transmission", "history", "chart"]);
const BRANCH_PEOPLE = new Set([
  "kyan",
  "chotoku",
  "broadman",
  "yokoda",
  "seisei",
  "seifuku",
  "nitta",
  "balliet",
  "kenneth",
]);

function isListQuery(tokens: string[]): boolean {
  return tokens.length === 0 || tokens.every((token) => LIST_LINEAGE.has(token));
}

function namedInstructors(query: string): Instructor[] {
  const phrase = normalize(query);
  return instructors.filter((instructor) => {
    const name = normalize(instructor.name);
    return phrase === name || phrase.includes(name) || (phrase.length > 2 && name.includes(phrase));
  });
}

function peopleFor(query: string, tokens: string[]): Instructor[] {
  const named = namedInstructors(query);
  if (named.length > 0) return named;
  if (isListQuery(tokens)) return instructors;

  const scored = instructors
    .map((instructor) => ({ instructor, score: scoreText(tokens, instructorFields(instructor)) }))
    .filter((row) => row.score > 0);
  const allTokens = scored.filter((row) => tokens.every((token) => tokenIn(instructorFields(row.instructor), token)));
  const pool = allTokens.length > 0 ? allTokens : scored;
  const top = pool.reduce((max, row) => Math.max(max, row.score), 0);
  return pool
    .filter((row) => row.score === top)
    .map((row) => row.instructor)
    .sort((a, b) => a.name.localeCompare(b.name));
}

function specificBranch(query: string): LineageBranch[] | null {
  const compact = normalize(query).replace(/ /g, "");
  for (const id of ["branch-iii", "branch-ii", "branch-i"]) {
    if (compact.includes(id.replace("-", ""))) {
      return branches.filter((branch) => branch.id === id);
    }
  }
  return null;
}

function branchesFor(query: string, tokens: string[], namedPerson: boolean): LineageBranch[] {
  const pinned = specificBranch(query);
  if (pinned) return pinned;
  if (namedPerson) return [];

  const listAll = isListQuery(tokens);
  const chartQuery = tokens.some((token) => CHART_WORDS.has(token));
  const namesABranch = tokens.some((token) => BRANCH_PEOPLE.has(token));
  if (listAll || (chartQuery && !namesABranch)) return branches;

  const scored = branches
    .map((branch) => {
      const fields = branchFields(branch);
      let score = 0;
      for (const token of tokens) {
        if (hasWord(fields.keywords, token)) score += 4;
        else if (hasWord(fields.title, token)) score += 2;
      }
      return { branch, score };
    })
    .filter((row) => row.score > 0);
  const top = scored.reduce((max, row) => Math.max(max, row.score), 0);
  return scored.filter((row) => row.score === top).map((row) => row.branch);
}

export function lookupLineage(query: string): LineageLookup {
  const tokens = contentTokens(query);
  const named = namedInstructors(query);
  const people = peopleFor(query, tokens);
  const matchedBranches = branchesFor(query, tokens, named.length > 0);

  return {
    query,
    matchCount: people.length + matchedBranches.length,
    instructors: people,
    branches: matchedBranches,
    recordNote:
      people.length === 0 && matchedBranches.length === 0
        ? `${RECORD_NOTE} No instructor or branch matched. Verified names in this record: ${instructors.map((instructor) => instructor.name).join(", ")}.`
        : RECORD_NOTE,
  };
}
