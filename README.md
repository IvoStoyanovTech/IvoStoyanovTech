<h1 align="center">Ivaylo — Full-Stack & Applied-AI Engineer</h1>

<p align="center">
  I build production AI systems end-to-end — real-time voice agents, multi-tenant CRMs, and the infra that runs them.
</p>

<p align="center">
  <img src="https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=white">
  <img src="https://img.shields.io/badge/Node.js-5FA04E?logo=node.js&logoColor=white">
  <img src="https://img.shields.io/badge/Fastify-000000?logo=fastify&logoColor=white">
  <img src="https://img.shields.io/badge/React-149ECA?logo=react&logoColor=white">
  <img src="https://img.shields.io/badge/Vite-646CFF?logo=vite&logoColor=white">
  <img src="https://img.shields.io/badge/PostgreSQL-4169E1?logo=postgresql&logoColor=white">
  <img src="https://img.shields.io/badge/Prisma-2D3748?logo=prisma&logoColor=white">
</p>
<p align="center">
  <img src="https://img.shields.io/badge/Gemini-8E75B2?logo=googlegemini&logoColor=white">
  <img src="https://img.shields.io/badge/Whisper_(Groq)-F55036?logo=openai&logoColor=white">
  <img src="https://img.shields.io/badge/Twilio-F22F46?logo=twilio&logoColor=white">
  <img src="https://img.shields.io/badge/Asterisk_/_SIP-FF5500?logo=asterisk&logoColor=white">
  <img src="https://img.shields.io/badge/Linux_/_systemd-FCC624?logo=linux&logoColor=black">
</p>

---

## 🎙️ Featured — AI Voice Receptionist

A real-time AI phone agent for UK insurance brokers: it answers live calls, understands the caller, and either resolves the query or routes to a human — running across **both cloud (Twilio) and on-prem SIP** telephony.

```mermaid
flowchart LR
    Caller([📞 Caller]) --> Edge{Telephony}
    Edge -->|Cloud| TW[Twilio<br/>signed webhook]
    Edge -->|SIP trunk| AST[Asterisk<br/>SIP registrar]

    TW --> API[Fastify API<br/>route + match DID]
    AST --> API

    API --> V{Known FAQ?}
    V -->|yes ≥0.88| VB[Verbatim reply<br/>0 tokens · instant]
    V -->|no| BRAIN[Gemini LLM<br/>compose turn]

    subgraph Voice
      STT[Groq Whisper<br/>speech → text] --> BRAIN
      BRAIN --> TTS[Piper → Edge → Say<br/>text → speech]
    end

    VB --> Caller
    TTS --> Caller
    API --> POST[Lead · summary email<br/>recording · analysis]
```

**What I engineered**
- **Dual telephony engine** — one turn loop serving both Twilio (cloud webhooks) and SIP (Asterisk registration), abstracted as provider *capabilities* rather than brand branches
- **A provider framework** to onboard new VoIP providers (3CX, Gamma, 8x8, BT Cloud Voice, RingCentral, Vonage) behind feature flags, with a versioned desired-state feed for the SIP worker
- **Sub-second "verbatim" tier** — high-confidence FAQ answers served deterministically, **0 LLM tokens**, before the model is ever called
- **Layered TTS fallback** (self-hosted Piper → Edge → carrier `<Say>`) so a synth timeout never drops a live call
- **Security-first webhooks** — per-tenant HMAC signature verification, credentials encrypted at rest, tenant-scoped call lookups

---

## 🧰 Also in the stack
`zod` · JWT auth · secretbox (tweetnacl) encryption · snapshot persistence to Postgres JSONB · Vitest (~2.9k tests) · nginx + systemd on a self-managed VPS · one-command deploy pipeline

## 📫 Reach me
<!-- add your links: LinkedIn / email / site -->
