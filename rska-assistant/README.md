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

Ask it about the association, the head school, programs, or a verified instructor. It will say when a schedule, fee, address, phone, or email is not in the local record, and point to the public contact form.
