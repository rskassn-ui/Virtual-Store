# RSKA Assistant

Local Grok agent for the Ryukyu Shorinji-Ryu Karate Association. The association record lives in this project (`bot/lib/catalog.ts`). Playground and HTTP are the surfaces. Nothing is posted to Slack or GitHub.

From this directory:

```bash
npm install
npx @grok/agent-sdk validate
npx @grok/agent-sdk dev
```

Playground: [http://127.0.0.1:3000/playground](http://127.0.0.1:3000/playground)

A model turn needs a Cursor credential on this computer (`npx @grok/agent-sdk login`). `validate`, `info`, and `tool call` do not.

In the playground it talks with you, searches the web, reads and writes files on this computer, and writes and runs code. The shared working directory is your home folder. Association facts still come from `bot/lib/catalog.ts` first. A schedule, fee, address, phone, or email that is missing there is looked up on the web; if that search is empty, it points to the public contact form.

The file and shell tools are not sandboxed. A person using the playground can ask the agent to read or change files on this computer and to run commands.
