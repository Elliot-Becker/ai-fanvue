# Mila Vale Control Center

A deployable React control center for **Mila Vale**, a clearly disclosed fictional adult virtual creator. The application implements the operating loop from content planning through approval and scheduling preparation, while deliberately keeping Fanvue publishing disabled until a verified integration is added.

## What works today

- Interactive Overview, Today’s Queue, Content Library, Character Bible, Analytics, and Settings sections.
- Clickable content cards and detail modal with media preview, generation brief, pillar, provider/model, cost, tags, dates, publish state, and performance state.
- Local approval-first actions: approve, reject, request regeneration, edit caption, and schedule. State persists in browser local storage.
- Library search plus status and content-pillar filters.
- Real Higgsfield media ingestion: 18 known Mila generations (one canonical anchor, 11 references, and six launch assets) load from `character/mila-vale.json`. Cards and asset details use the real CloudFront media URLs rather than gradients.
- Settings includes **Sync Higgsfield assets**, a duplicate-safe bulk import by Higgsfield generation ID, plus a one-generation manual import form.
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

## Higgsfield ingestion today

`character/mila-vale.json` is the checked-in, structured manifest for Mila Vale v1. `src/services/higgsfield.ts` normalizes it into provider-neutral asset records; the browser-local asset store then merges only records whose generation IDs are not already present. The real raw media URL is also used as the thumbnail URL when no separate thumbnail exists.

To import the known reference and launch assets, open **Settings** and select **Sync Higgsfield assets**. A first visit also initializes the browser-local store from that manifest. Repeating the action is safe; it does not duplicate generations.

To add a new generation manually, add its generation ID and direct raw-media URL in **Settings**. Add a thumbnail URL only when Higgsfield provides a separate one. Unknown prompt, model, cost, analytics, schedule, and Fanvue post fields deliberately remain unknown rather than being invented. The new record enters `awaiting_approval`.

Current persistence is browser `localStorage` (`mila-vale-assets-v2`), so imports and approval actions survive a normal development reload in the same browser/profile. It is not shared between browsers, machines, or deployed users, and it is not a production database.

## Architecture

```text
React UI
  ├─ local asset store (browser persistence for v0.3)
  ├─ domain types and provider interfaces
  │    ├─ ImageGenerator
  │    ├─ Publisher
  │    └─ Analytics
  └─ manifest-backed Higgsfield import service + safe adapters

Future server/API layer
  ├─ database + asset storage (operational source of truth)
  ├─ Higgsfield adapter
  ├─ Fanvue publisher / analytics adapters
  └─ Hugging Face adapter
```

The UI uses provider-neutral fields on every asset: provider, model, generation ID/URL, prompt/brief, cost, metadata, approval state, scheduled/publish state, and performance fields. The placeholder adapters in `src/providers.ts` intentionally throw instead of silently publishing or reporting fake data.

## Current limits and future live sync

Mila Vale v1 and its reusable Higgsfield element are recorded and imported as real media records. Fanvue, a live Higgsfield API, and Hugging Face remain unconnected. Approval actions, caption edits, scheduling, and regeneration requests are local workflow state only. Regeneration records a request; it never claims to have called Higgsfield. Fanvue publishing remains disabled.

Live Higgsfield sync later requires verified provider API capabilities, a server-side Higgsfield adapter, secure server-only credentials (`HIGGSFIELD_API_KEY` is only a placeholder in `.env.example`), a production database/object store, and webhooks or a safe polling job. Browser code must never receive a Higgsfield token.

## Next integration steps

1. Create a server-side persistence layer (for example, Postgres plus object storage) and migrate the browser-local asset store.
2. Complete source-level QC of the imported media and record verified per-job prompts, models, and costs when Higgsfield exposes them.
3. Implement the server-side `ImageGenerator` adapter using Higgsfield’s verified API/connector capability; keep all credentials in deployment secrets.
4. Verify Fanvue’s actual API permissions and supported scheduling/publishing endpoints. Implement a server-side `Publisher` adapter with idempotency, audit logs, approval enforcement, and safe retry behavior.
5. Implement Fanvue account/performance synchronization through the `Analytics` adapter. Label data as live only after source verification; retain empty states for unavailable measures.
6. Add application authentication, role-based approval controls, automated QC, and scheduled jobs before any production publishing enablement.

## Safety boundaries

Mila is fictional, 24, clearly adult, and disclosed as AI/virtual. The application is intended for general-purpose, non-explicit adult creator media workflows only. It does not provide explicit-content generation, real-person impersonation, or autonomous publishing.
