# AI Fanvue — Decision Log

This file records durable decisions. Do not rewrite history when decisions change; append a new decision/change and mark the older decision superseded where appropriate.

---

## D001 — Fanvue is the initial creator platform

Status: ACTIVE

Launch Mila Vale primarily on Fanvue. Fanvue is currently aligned with disclosed AI/virtual creators and offers creator automation/integration possibilities.

## D002 — Mila Vale is clearly disclosed as AI

Status: ACTIVE

Mila will not be presented as a real human. Her AI/virtual nature will be disclosed as required and naturally incorporated into the brand.

## D003 — Mila is a fictional adult age 24

Status: ACTIVE

Mila Vale is 24, clearly adult-looking, fictional, and not based on a real person's likeness.

## D004 — Core Mila positioning

Status: ACTIVE

Primary positioning is virtual gamer / tech / lifestyle creator, with gaming, technology, fitness, lifestyle, fashion, travel, and glamorous/non-explicit creator content.

## D005 — GitHub repository is the technical source of truth

Status: ACTIVE

The `ai-fanvue` Git repository is the durable bridge between the ChatGPT cloud project and local Codex. Cloud/local chat histories are not shared memory; durable context belongs in repository documentation.

## D006 — Do not use ChatGPT Sites as the production application

Status: ACTIVE

The Control Center will be a proper independently deployable web application. ChatGPT/Codex can build and operate it but are not its primary production runtime.

## D007 — Approval-first publishing

Status: ACTIVE

Initial publishing requires human approval: `Generate → QC → Awaiting Approval → Approve/Reject/Regenerate/Edit → Schedule → Publish`. Autonomous publication is deferred until proven reliable.

## D008 — Modular provider architecture

Status: ACTIVE

Fanvue, Higgsfield, Hugging Face, and future providers must be behind modular adapters/interfaces; avoid pervasive provider coupling.

## D009 — Higgsfield is preferred initial media provider

Status: ACTIVE

Use Higgsfield as the primary initial provider for canonical Mila work and general image/video/voice production where appropriate. Hugging Face remains secondary/modular.

## D010 — Application maintains its own operational data

Status: ACTIVE

Fanvue is not the sole application database. The Control Center should maintain assets, prompts, generation metadata/costs, QC, approvals, captions, schedules, publication IDs, and performance data.

## D011 — Never disguise demo metrics as real metrics

Status: ACTIVE

Until Fanvue data is live, analytics must use explicit Demo labels or empty states. Fake production-looking revenue/subscriber data is unacceptable.

## D012 — Optimize for business outcomes

Status: ACTIVE

Optimization should eventually consider revenue and subscriber economics, including generation cost, attributed revenue, conversion, retention/LTV impact where measurable, acquisition source, content pillar, and provider/model—not merely likes/views.

## D013 — Build character consistency before large-scale seed generation

Status: ACTIVE

Order: candidate Mila → canonical Mila → reference pack → reusable consistency mechanism → intentional seed campaigns. Do not generate a large random launch library first.

## D014 — Initial explicit-generation implementation is out of scope for agents

Status: ACTIVE

Agent work will not implement an explicit/pornographic media-generation pipeline. Broader permitted business infrastructure may manage permitted content/assets independently.

## D015 — Progressive automation

Status: ACTIVE

Phase A: generate → Elliot approves → publish. Phase B: automated QC with Elliot handling approvals/exceptions → schedule. Phase C: analytics influences allocation. Phase D: increase autonomy only after demonstrated reliability.
