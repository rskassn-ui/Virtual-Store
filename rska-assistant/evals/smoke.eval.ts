import { defineEval, includes } from "@grok/agent-sdk/evals";

export default defineEval({
  tags: ["smoke"],
  cases: [
    {
      id: "head-instructor",
      description: "The head instructor comes from the lineage record.",
      async test(t) {
        await t.send(
          "Who is the head instructor of the Ryukyu Shorinji-Ryu Karate Association, and what rank does the local record list?",
        );
        t.succeeded();
        t.calledTool("lookup_lineage");
        t.check(t.reply, includes(/Michael Davies/));
        t.check(t.reply, includes(/Judan|10th/));
      },
    },
    {
      id: "head-school",
      description: "The head school comes from the association record.",
      async test(t) {
        await t.send("Where is the RSKA head school, and do you have the class schedule?");
        t.succeeded();
        t.calledTool("lookup_association");
        t.notCalledTool("lookup_lineage");
        t.check(t.reply, includes(/Williamsport|Appalachian/));
        t.check(t.reply, includes(/contact|https?:\/\//i));
      },
    },
  ],
});
