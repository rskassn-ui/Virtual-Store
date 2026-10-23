// Public facts copied from the Ryukyu Shorinji-Ryu Karate Association
// website on 2026-10-23. The live site is the authority if they differ.
// This file is the record stored with the agent. It is not discovered.

export const RECORD_NOTE =
  "Local record copied from public RSKA pages on 2026-10-23. The association website is the authority if this record and the site differ. Class schedules, tuition, street address, phone, and email are not in this record.";

export const CONTACT_URL =
  "https://www.ryukyu-shorinji-ryu-karate-association.com/home/contact-us";

export const HOME_URL = "https://www.ryukyu-shorinji-ryu-karate-association.com/home";

export const INFO_URL =
  "https://www.ryukyu-shorinji-ryu-karate-association.com/home/rska-information";

export const LINEAGE_URL =
  "https://www.ryukyu-shorinji-ryu-karate-association.com/home/rank-lineage-directory";

export const SITE_URL = "https://www.ryukyu-shorinji-ryu-karate-association.com/";

export type Topic = {
  id: string;
  title: string;
  keywords: string[];
  summary: string;
  source: string;
};

export type Instructor = {
  name: string;
  rank: string;
  rankReading: string;
  shogo: string | null;
  roles: string[];
  certificate: string | null;
  lineage: string[];
  school: string;
  status: "verified";
  source: string;
};

export type LineageBranch = {
  id: string;
  label: string;
  people: string[];
  note: string;
  source: string;
};

const GAP =
  "This record does not include class days, times, tuition, a street address, a phone number, or an email address. Questions about those go to the contact form.";

export const topics: Topic[] = [
  {
    id: "overview",
    title: "What RSKA is",
    keywords: [
      "rska",
      "association",
      "overview",
      "purpose",
      "tradition",
      "preserve",
      "karate",
      "shorinji",
      "ryukyu",
      "jutsu",
      "karte",
    ],
    summary:
      "The Ryukyu Shorinji-Ryu Karate Association (RSKA) preserves, maintains, and develops Ryukyu Shorinji-Ryu Karate Jutsu: its art, lineage, standards, discipline, and traditions. It supports students, instructors, schools, and affiliated practitioners. Its stated pillars are tradition, lineage, and development. The public motto is “Preserve the Tradition. Practice the Art.”",
    source: HOME_URL,
  },
  {
    id: "head-school",
    title: "Head school",
    keywords: [
      "head",
      "school",
      "dojo",
      "hombo",
      "humbō",
      "humbo",
      "hombu",
      "appalachian",
      "williamsport",
      "pennsylvania",
      "location",
      "where",
      "class",
      "classes",
      "train",
      "training",
      "begin",
      "start",
      "visit",
    ],
    summary: `Humbō Dōjō — Appalachian Martial Arts School is the head school and physical training location of RSKA, in Williamsport, Pennsylvania. The information page also writes the name Hombu Dōjō. Students study fundamentals, technique, the traditional curriculum, and instructor-level development there. The association’s broader role is lineage, standards, traditions, and organizational development. ${GAP}`,
    source: HOME_URL,
  },
  {
    id: "values",
    title: "Values",
    keywords: [
      "values",
      "discipline",
      "respect",
      "strength",
      "leadership",
      "character",
      "etiquette",
      "spirit",
    ],
    summary:
      "RSKA describes training as developing character, responsibility, discipline, and respect. The five published values are discipline (consistency, focus, self-control, dedication), respect (for instructors, fellow practitioners, tradition, and carrying the art forward), strength (physical, technical, and mental), leadership (responsibility and character to guide others), and tradition (honoring the people, teachers, practices, and principles that came before).",
    source: HOME_URL,
  },
  {
    id: "divisions",
    title: "Two divisions",
    keywords: ["division", "divisions", "supply", "store", "shop", "gear", "uniform", "equipment"],
    summary:
      "The public site presents two divisions. RSKA Association covers karate, training, tradition, lineage, schools, membership, and rank. RSKA Martial Arts Supply offers uniforms, protective equipment, training supplies, and association essentials for schools and individual practitioners, described as useful products at reasonable prices. This record does not list product names or prices.",
    source: SITE_URL,
  },
  {
    id: "programs",
    title: "Training and school programs",
    keywords: [
      "program",
      "programs",
      "remote",
      "charter",
      "membership",
      "member",
      "associated",
      "affiliate",
      "curriculum",
      "kata",
      "private",
      "seminar",
    ],
    summary:
      "Published training opportunities are traditional karate training, remote training, the school charter program, and school association membership. Associated schools may affiliate while keeping their own identity, curriculum, rank structure, and operations. Charter schools follow RSKA charter guidelines and develop students in Ryukyu Shorinji-Ryu Karate Jutsu. Traditional kata is listed as part of training and tradition. This record does not name individual kata or describe remote-training logistics. Instructors and experienced black belts ask about the charter program through the contact form.",
    source: INFO_URL,
  },
  {
    id: "leadership",
    title: "Leadership named on the information page",
    keywords: ["president", "leadership", "balliet", "kenneth", "crispin", "boop", "natosha", "christopher"],
    summary:
      "The information page names Sensei Michael Davies as president and head instructor. Its leadership and lineage directory also names Grandmaster Kenneth H. Balliet, Sensei Christopher Crispin, and Sensei Natosha Boop. Ranks, certificates, and schools for verified instructors are in the lineage record, not this topic.",
    source: INFO_URL,
  },
  {
    id: "contact",
    title: "Contact",
    keywords: ["contact", "email", "phone", "call", "form", "reach", "question", "inquiry", "join", "sign"],
    summary: `Questions about classes, training, membership, programs, lineage, or the association go through the contact form at ${CONTACT_URL}. The form groups are class information, training questions, association membership, the school charter program, rank and lineage, and general questions. For classes, the site suggests saying whether you are new, returning, or practicing another art. For membership, lineage, or charter, it suggests including martial arts background and the reason for writing. ${GAP}`,
    source: CONTACT_URL,
  },
  {
    id: "not-in-record",
    title: "What this record does not contain",
    keywords: [
      "schedule",
      "time",
      "times",
      "hours",
      "fee",
      "fees",
      "cost",
      "price",
      "prices",
      "tuition",
      "dues",
      "payment",
      "address",
      "street",
      "phone",
      "email",
      "map",
    ],
    summary: `${GAP} Use ${CONTACT_URL}. Do not guess these details.`,
    source: CONTACT_URL,
  },
  {
    id: "rank-titles",
    title: "Rank-title readings",
    keywords: [
      "judan",
      "rokudan",
      "yondan",
      "dan",
      "shogo",
      "hanshi",
      "rank",
      "title",
      "reading",
      "10th",
      "6th",
      "4th",
    ],
    summary:
      "Standard readings of titles that appear in the RSKA directory: Judan is 10th dan, Rokudan is 6th dan, and Yondan is 4th dan. The information page states Sensei Michael Davies’s title as 10th dan, Judan, Hanshi. Hanshi is a shogo (instructor title), separate from dan rank. The association says rank and lineage are separate: rank is the recognized level of training, and lineage is the documented teacher-to-student transmission. A person’s rank in this project comes only from the lineage record.",
    source: `${INFO_URL} and ${LINEAGE_URL}`,
  },
  {
    id: "verification",
    title: "Rank and lineage verification",
    keywords: [
      "verification",
      "verify",
      "submit",
      "submission",
      "certificate",
      "diploma",
      "recognition",
      "registry",
    ],
    summary:
      "Instructors may submit current rank, school, lineage, and supporting documentation for review. Submission does not automatically create recognition, certification, promotion, or a listing in the Official Black Belt and Shogo Directory or the Verified Direct Lineage Registry. Verification can include rank certificates, historical documentation, instructor records, and lineage records. Its purpose is historical accuracy, not a claim that one school or instructor is superior.",
    source: LINEAGE_URL,
  },
  {
    id: "member-resources",
    title: "Member resources mentioned publicly",
    keywords: ["portal", "elite", "club", "blackbelt", "resources", "materials"],
    summary:
      "The information page mentions an Elite Black Belt Club (“You Have Earned This”) and an RSKA Member Portal for member resources, information, training materials, and association resources. This record does not describe eligibility, contents, or how to sign in.",
    source: INFO_URL,
  },
  {
    id: "okinawa-section",
    title: "Okinawa and Japan section",
    keywords: ["okinawa", "okinawan", "japan", "japanese", "comparison", "history"],
    summary:
      "The association home page has a section titled “Okinawa vs. Japan Karate.” This local record does not include that section’s text. Read it on the home page rather than accepting a paraphrase from memory.",
    source: HOME_URL,
  },
];

export const instructors: Instructor[] = [
  {
    name: "Michael Davies",
    rank: "Judan",
    rankReading: "10th dan",
    shogo: "Hanshi",
    roles: ["President", "Head instructor"],
    certificate: "PAWM017",
    lineage: ["Grandmaster Kenneth Balliet"],
    school: "Ryukyu Shorinji Ryu Karate Association - Appalachian Martial Arts",
    status: "verified",
    source: `${INFO_URL} and ${LINEAGE_URL}`,
  },
  {
    name: "Therold Davenport",
    rank: "Judan",
    rankReading: "10th dan",
    shogo: null,
    roles: [],
    certificate: "PA-021",
    lineage: ["Grandmaster Kenneth Balliet", "Grandmaster Michael Reed", "Sensei Tony Jackson"],
    school: "Davenport Karate School",
    status: "verified",
    source: LINEAGE_URL,
  },
  {
    name: "Gerald Davies",
    rank: "Rokudan",
    rankReading: "6th dan",
    shogo: null,
    roles: [],
    certificate: null,
    lineage: ["Grandmaster Kenneth Balliet", "Grandmaster Michael Reed"],
    school: "Ryukyu Shorinji Ryu Karate Association - Appalachian Martial Arts",
    status: "verified",
    source: LINEAGE_URL,
  },
  {
    name: "Christopher Crispin",
    rank: "Yondan",
    rankReading: "4th dan",
    shogo: null,
    roles: [],
    certificate: "PAWM013",
    lineage: ["Grandmaster Kenneth Balliet", "Grandmaster Michael Davies"],
    school: "Ryukyu Shorinji Ryu Karate Association - Appalachian Martial Arts",
    status: "verified",
    source: `${INFO_URL} and ${LINEAGE_URL}`,
  },
  {
    name: "Natosha Boop",
    rank: "Yondan",
    rankReading: "4th dan",
    shogo: null,
    roles: [],
    certificate: "PAWM014",
    lineage: ["Grandmaster Kenneth Balliet", "Grandmaster Michael Davies"],
    school: "Ryukyu Shorinji Ryu Karate Association - Appalachian Martial Arts",
    status: "verified",
    source: `${INFO_URL} and ${LINEAGE_URL}`,
  },
];

export const branches: LineageBranch[] = [
  {
    id: "kyan",
    label: "Chotoku Kyan",
    people: ["Chotoku Kyan"],
    note: "The lineage directory lists Chotoku Kyan as an Okinawan karate master at the head of the published transmission chart.",
    source: LINEAGE_URL,
  },
  {
    id: "branch-i",
    label: "Branch I",
    people: ["Michael Broadman"],
    note: "Branch I on the published chart is Michael Broadman.",
    source: LINEAGE_URL,
  },
  {
    id: "branch-ii",
    label: "Branch II",
    people: ["Seisei Yokoda"],
    note: "Branch II on the published chart is Seisei Yokoda.",
    source: LINEAGE_URL,
  },
  {
    id: "branch-iii",
    label: "Branch III",
    people: ["Seifuku Nitta"],
    note: "Branch III on the published chart is Seifuku Nitta.",
    source: LINEAGE_URL,
  },
  {
    id: "balliet",
    label: "Grandmaster Kenneth H. Balliet",
    people: ["Kenneth H. Balliet"],
    note: "The directory says the documented branches converge at Grandmaster Kenneth Balliet. He is named the senior source of the verified RSKA lineage. The registry states the transmission as Chōtoku Kyan → Okinawan Shorin traditions → Kenneth H. Balliet → verified instructors → future generations. Lineage is the teacher-to-student transmission of the art, not a claim of superiority.",
    source: LINEAGE_URL,
  },
];
