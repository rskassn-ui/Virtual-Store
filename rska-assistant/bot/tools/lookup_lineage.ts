import { defineTool } from "@grok/agent-sdk/tools";
import * as z from "zod/v4";
import { lookupLineage } from "../lib/search.js";

export default defineTool({
  description:
    "Look up the local RSKA lineage record: verified instructors (rank, certificate, school, teachers), and the published branches leading to Grandmaster Kenneth H. Balliet. Use this for any named instructor, rank, certificate, or lineage question. Pass words like directory or verified to list the whole registry.",
  effect: "read",
  inputSchema: z.object({
    query: z.string().min(1).describe("A name, certificate, rank, or lineage question."),
  }),
  execute({ query }) {
    return lookupLineage(query);
  },
});
