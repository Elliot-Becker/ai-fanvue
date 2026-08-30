# AI Fanvue — Project Context

## Executive Summary

AI Fanvue is an entrepreneurial project owned by Elliot Becker. Its purpose is to launch and operate **Mila Vale**, a clearly disclosed fictional AI creator, initially on Fanvue, while automating as much of the creator-business workflow as practical. This is intended to become a real revenue-generating business, not merely a technical demo.

The target state is heavy automation of content planning, media production, metadata, captions, scheduling, analytics, and optimization, with Elliot reviewing exceptions, approving important content, and making business decisions.

## Working Environments

### ChatGPT Cloud Project

Name: `AI Fanvue`

Used for strategy, planning, character/business decisions, content strategy, connected-service coordination, screenshots/reviews, and high-level analytics discussions. Its chat history is not automatically available locally.

### Local Codex Project

Path: `C:\Users\Elliot Becker\Projects\ai-fanvue`

Used for application development, repository editing, code execution, package installation, tests, debugging, Git, and deployment. Repository documentation is the durable bridge between environments.

## Repository and Prototype Status

The intended personal GitHub repository is `ai-fanvue`, which should become the technical source of truth. An earlier MVP was made in a temporary ChatGPT project directory rather than this checkout. It showed useful views—Overview, Today's Queue, Content Library, Character Bible, Analytics, and Settings—but was static HTML/CSS/JavaScript with colored gradient placeholders and non-functional controls. It is not the production source of truth.

## Product Vision

`AI Creator Business → Content Strategy → Daily Content Plan → Image/Video/Audio Production → QC → Approval → Fanvue Publishing → Audience/Revenue Data → Performance Analysis → Improved Future Content`

The Control Center is the operational control plane for this loop.

## Character: Mila Vale

Mila is a fictional virtual creator, age 24. She must be clearly adult-looking, disclosed as AI, and must not resemble a known real person.

### Visual Direction

- long rich dark brunette hair with soft natural waves
- hazel-green eyes
- warm/lightly sun-kissed complexion
- attractive but believable facial structure and athletic healthy adult build
- natural/polished makeup and subtle gold jewelry
- premium contemporary, photorealistic creator aesthetic rather than an obviously synthetic look

### Personality and Positioning

Mila is playful, confident, warm, conversational, slightly nerdy, interested in technology/gaming, and socially natural rather than robotic.

Initial positioning: **virtual gamer / tech / lifestyle creator**.

Pillars: gaming/PC technology, fitness/wellness, lifestyle, fashion/night out, travel/hotel, casual/selfie, glamorous swimwear/non-explicit creator content, and social-safe acquisition content.

## Mila Creation Status

Mila's brand direction is established, but her final canonical visual identity is not. A prior Higgsfield connector attempt produced generations Elliot could not find in ChatGPT or the visible Higgsfield profile; treat those generations as unavailable.

Restart Mila v1 cleanly:

1. Generate 6–8 candidate portraits.
2. Select the top candidates and refine the winner.
3. Lock canonical Mila and produce a reference pack.
4. Create/configure a reusable Higgsfield character/reference element if supported.
5. Record generation IDs, URLs, and metadata.
6. Store canonical character data in the repository/application.
7. Create an intentional seed-content library.

The future reference pack should include front, three-quarter and profile portraits; full-body standing; seated casual; smiling and neutral portraits; and gaming-room, fitness/athleisure, coffee-shop lifestyle, and elevated evening/fashion looks.

## Seed Content Direction

Avoid dozens of disconnected images. Build intentional campaign/shoot groups across gaming/PC, casual lifestyle, fitness, fashion/night-out, travel/hotel, pool/beach/swimwear non-explicit, casual selfie, vertical video, social-safe teaser, and welcome/onboarding content.

A concept may yield a Fanvue hero asset, alternate crop, social teaser, thumbnail, story/vertical format, video derivative, and caption/tag package.

## Providers and Accounts

Elliot has created/connected accounts for Fanvue, Higgsfield, and Hugging Face. A Fanvue MCP server was added in ChatGPT via the Fanvue endpoint; this does **not** mean local application credentials exist. Application API authentication must be separately configured and secured.

- **Fanvue**: desired publishing/scheduling, post IDs, account/subscriber/earnings/performance data, and permitted messaging. Do not assume an API capability without verifying actual account/API permission.
- **Higgsfield**: preferred initial provider for Mila references, character-consistent images/video/image-to-video, appropriate audio/voice, and generation metadata. Results should eventually sync into the Content Library.
- **Hugging Face**: connected secondary/modular provider; do not tightly couple the business to it.

## Dashboard and Operations

The Mila Vale Control Center must be a deployable web application, not a static ChatGPT Site. It needs persistence, APIs, authentication, scheduled jobs, provider integrations, asset storage, and analytics. ChatGPT and Codex are building/operating tools, not the runtime.

Initial approval mode is `APPROVAL_REQUIRED`; no automatic Fanvue publishing at launch.

## Near-Term Business Success

Efficiently reach launch and real feedback: canonical Mila, launch-quality content, a working Control Center, configured Fanvue profile, functioning publishing workflow, acquisition, and real subscriber/revenue signals. Avoid endless architecture work.
