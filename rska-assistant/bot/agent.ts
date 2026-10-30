import { homedir } from "node:os";
import { defineAgent } from "@grok/agent-sdk";

export default defineAgent({
  name: "RSKA Assistant",
  description:
    "Local assistant for the Ryukyu Shorinji-Ryu Karate Association. Talks with the user, searches the web, reads and writes files on this computer, and writes code.",
  model: {
    id: "grok-4.5",
    params: [
      { id: "effort", value: "high" },
      { id: "fast", value: "true" },
    ],
  },
  // One shared working tree on this computer. Sandbox stays off so file
  // tools can reach the rest of the drive and Shell can run code.
  local: {
    workspaceDir: homedir(),
  },
});
