# Mila Vale Control Center

A deployable React control center for **Mila Vale**, a clearly disclosed fictional adult virtual creator. The application implements the operating loop from content planning through approval and scheduling preparation, while deliberately keeping Fanvue publishing disabled until a verified integration is added.

## What works today

- Interactive Overview, Today’s Queue, Content Library, Character Bible, Analytics, and Settings sections.
- Clickable content cards and detail modal with media preview, generation brief, pillar, provider/model, cost, tags, dates, publish state, and performance state.
- Local approval-first actions: approve, reject, request regeneration, edit caption, and schedule. State persists in the browser’s local storage for the demo.
- Library search plus status and content-pillar filters.
- Higgsfield metadata import form for generation URLs/IDs and local prompt metadata. Imports enter `awaiting_approval` and do not call a provider or publish anything.
- Explicit demo/empty analytics and connection placeholders. No fabricated revenue or subscriber metrics.

## Run locally

Prerequisite: current Node.js LTS (Node 20+ recommended).

```powershell
npm install
npm run dev
```

Open the local URL printed by Vite (normally `http://localhost:5173`). For a deployable production bundle:

```powershell
npm run build
npm run preview
```

`dist/` is the static deployment output. It can be served by a static host now; live provider integrations should be added through a secure server/API layer before enabling them in production.

## Configuration and secrets

Copy `.env.example` to `.env` locally and fill in only server-side secret stores or server environment variables. `.env` is ignored by Git. Never expose Fanvue, Higgsfield, or Hugging Face credentials in browser code, commits, or logs.

## Architecture

```text
React UI
  ├─ local demo store (browser persistence for v0.2)
  ├─ domain types and provider interfaces
  │    ├─ ImageGenerator
  │    ├─ Publisher
  │    └─ Analytics
  └─ safe placeholder adapters

Future server/API layer
  ├─ database + asset storage (operational source of truth)
  ├─ Higgsfield adapter
  ├─ Fanvue publisher / analytics adapters
  └─ Hugging Face adapter
```

The UI uses provider-neutral fields on every asset: provider, model, generation ID/URL, prompt/brief, cost, metadata, approval state, scheduled/publish state, and performance fields. The placeholder adapters in `src/providers.ts` intentionally throw instead of silently publishing or reporting fake data.

## Demo vs. live

All seeded assets and visual previews are demo records/visual proxies. Mila’s final canonical identity and reference pack are not yet locked. Fanvue, Higgsfield, and Hugging Face connection states are placeholders. Approval actions, caption edits, scheduling, search, filters, and imports are functional locally, but they do not reach third-party services.

## Next integration steps

1. Create a server-side persistence layer (for example, Postgres plus object storage) and migrate the browser demo store.
2. Complete the canonical Mila candidate/reference workflow in Higgsfield, then import the approved generation IDs, URLs, briefs, costs, and reference metadata.
3. Implement the server-side `ImageGenerator` adapter using Higgsfield’s verified API/connector capability; keep all credentials in deployment secrets.
4. Verify Fanvue’s actual API permissions and supported scheduling/publishing endpoints. Implement a server-side `Publisher` adapter with idempotency, audit logs, approval enforcement, and safe retry behavior.
5. Implement Fanvue account/performance synchronization through the `Analytics` adapter. Label data as live only after source verification; retain empty states for unavailable measures.
6. Add application authentication, role-based approval controls, automated QC, and scheduled jobs before any production publishing enablement.

## Safety boundaries

Mila is fictional, 24, clearly adult, and disclosed as AI/virtual. The application is intended for general-purpose, non-explicit adult creator media workflows only. It does not provide explicit-content generation, real-person impersonation, or autonomous publishing.
