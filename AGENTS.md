# AI Fanvue — Agent Instructions

## Mission

This repository powers an AI creator business and its internal control center built around Mila Vale: a fictional, clearly disclosed adult virtual creator. The product is the **Mila Vale Control Center**.

The intended operating loop is:

`content planning → media generation → QC → human approval → scheduling → Fanvue publishing → analytics → revenue attribution → performance feedback → future planning`

The long-term goal is for Elliot Becker to work principally as an approver and business operator, rather than manually producing and publishing each item.

## Source of Truth and Session Procedure

This repository (`ai-fanvue`) is the durable technical source of truth shared by the ChatGPT cloud project **AI Fanvue**, local Codex sessions, future automation sessions, and the eventual production application. Cloud and local conversation history are not assumed to synchronize.

Before substantial work, read:

1. `AGENTS.md`
2. `docs/PROJECT_CONTEXT.md`
3. `docs/DECISIONS.md`
4. `docs/ROADMAP.md`
5. the latest entries in `docs/WORK_LOG.md`
6. relevant application code and configuration

If repository state conflicts with documentation, investigate; do not silently choose one version.

After substantial implementation work, update the work log and any durable facts, decisions, roadmap priorities, or setup documentation that changed. Work-log entries should record the date/time when known, objective, completed work, changed files/components, validation, decisions, blockers, and next recommended action. Record durable facts, not chat transcripts.

## Product and Character

- Owner: **Elliot Becker** (the control center may address him as Elliot).
- Initial creator platform: **Fanvue**.
- Mila Vale is entirely fictional, age 24, clearly adult, clearly disclosed as AI/virtual, and not based on or intended to impersonate any real person.
- Core appearance: long dark brunette hair, hazel-green eyes, warm/lightly sun-kissed complexion, athletic healthy adult build, polished natural makeup, subtle gold jewelry, and a premium contemporary creator aesthetic.
- Personality: playful, confident, warm, conversational, slightly nerdy, and technology/gaming-aware.
- Content pillars: gaming/technology, lifestyle, fitness/wellness, fashion, travel, and glamorous non-explicit creator content. Common settings include a premium gaming setup, minimalist apartment/bedroom, gym, coffee shop, hotel/travel, pool/beach, and city/nightlife.
- Character consistency is a high priority.

## Architecture and Providers

Use a modular pipeline:

`Content Planner → Generation Provider → Asset Store → QC → Approval Queue → Publisher → Analytics → Optimization`

The application database/storage is the operational source of truth; Fanvue is a distribution and revenue platform, not the only database. Meaningful assets should support metadata for identity, character, campaign/pillar, generation/provider/model/prompt/reference/job/cost, media location, QC/approval, caption/tags/schedule/publication IDs/status, and measurable performance/revenue/conversions.

Avoid provider-specific code scattered throughout the app. Prefer adapter interfaces such as `imageGenerator.generate()`, `videoGenerator.generate()`, `voiceGenerator.generate()`, `publisher.publish()`, and `analytics.sync()`.

- Fanvue: publishing, scheduling where supported, creator/account data, subscribers/followers, earnings, performance, and permitted messaging/creator functionality.
- Higgsfield: preferred primary production provider for images, reusable character/reference consistency, image-to-video/video, and appropriate synthetic voice/audio.
- Hugging Face: secondary, modular ML provider.

Do not tightly couple the product to a provider.

## Security and Data Integrity

Never commit or expose API keys, access/refresh/bearer tokens, cookies, passwords, OAuth secrets, or private credentials. Use local `.env`, environment variables, `.env.example` placeholders only, and deployment secret stores. Keep secret-bearing files ignored. If credentials are found in tracked files, stop and flag the issue; never echo secrets into logs.

Never present fabricated metrics as real. Until Fanvue analytics is connected, use explicit **Demo** labels or empty states. Do not invent attribution precision that does not exist.

## Publishing and Media Safety

Initial publishing mode is **APPROVAL REQUIRED**:

`Generate → automated QC → Awaiting Approval → Elliot approves/rejects/regenerates/edits → Schedule → Publish`

Do not enable autonomous publishing without a later, explicit decision after demonstrated reliability.

Agents must support general-purpose, non-explicit adult creator media workflows only. Do not implement explicit/pornographic content-generation pipelines, real-person impersonation, or deepfake workflows. Mila must always be clearly adult and fictional.

## Product Expectations

The preferred UI direction is a light, minimal, premium dashboard with a left sidebar and visible automation state. Expected areas: Overview, Today's Queue, Content Library, Character Bible, Analytics, and Settings. The earlier prototype was static with colored placeholders; the production application needs real/clickable previews, details, queue actions, filtering/search, responsive loading/error/empty states, and real provider/data architecture.

Key capabilities:

- Overview: revenue, subscribers, ROI, approvals, recent performance, queue, and provider/automation health.
- Today's Queue: preview, approve/reject/regenerate, edit caption, schedule.
- Content Library: real thumbnails, media, filters/search, metadata, detail view.
- Character Bible: canonical references, identity, voice/tone, pillars, consistency rules.
- Analytics: revenue, growth/churn, cost, ROI/conversion, content/provider performance where measurable.
- Settings: provider states, automation, and approval mode—never secrets.

Optimize eventually for business outcomes such as `content ROI = attributable value / production cost`, including costs, attributed revenue, conversion, retention/LTV impact where measurable, pillar, provider/model, and acquisition source—not merely likes.

## Engineering Philosophy

Prefer maintainable, typed, validated, modular, testable, accessible implementations with useful error handling and deterministic configuration. Avoid unnecessary enterprise complexity before product-market validation.

Build iteratively in this order:

1. compelling, consistent character
2. working content pipeline
3. approval workflow
4. Fanvue publishing
5. analytics
6. revenue validation
7. progressively greater automation

Do not spend weeks optimizing infrastructure before the creator launches.
