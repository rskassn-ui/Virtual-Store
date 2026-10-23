import { defineAgent } from "@grok/agent-sdk";

export default defineAgent({
  name: "RSKA Assistant",
  description:
    "Local assistant for the Ryukyu Shorinji-Ryu Karate Association. Answers from the record stored with this project.",
  model: {
    id: "grok-4.5",
    params: [
      { id: "effort", value: "high" },
      { id: "fast", value: "true" },
    ],
  },
  local: {
    sandbox: true,
  },
});
