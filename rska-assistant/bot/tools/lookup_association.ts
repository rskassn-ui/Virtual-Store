import { defineTool } from "@grok/agent-sdk/tools";
import * as z from "zod/v4";
import { lookupAssociation } from "../lib/search.js";

export default defineTool({
  description:
    "Look up Ryukyu Shorinji-Ryu Karate Association facts stored on this computer: purpose, head school, values, programs, the supply division, contact, rank-title readings, and details the record does not contain. Use this before answering an association question. For a named person's rank, certificate, or lineage, use lookup_lineage instead.",
  effect: "read",
  inputSchema: z.object({
    query: z.string().min(1).describe("The visitor's question, in their words."),
    limit: z
      .number()
      .int()
      .min(1)
      .max(5)
      .optional()
      .describe("Maximum topics to return. Defaults to 3."),
  }),
  execute({ query, limit }) {
    return lookupAssociation(query, limit ?? 3);
  },
});
