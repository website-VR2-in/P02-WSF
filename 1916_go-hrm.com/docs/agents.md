# AI Agents — Go HRM (WSF pipeline steps 7–8)

## Agent 1 — Daily HR-tech news digest
- **Goal:** 1 morning digest of HR-tech / HRM news (France + EU) to feed content and stay on top of competitors.
- **Sources:** LinkedIn HR-tech pages (PayFit, Altema, HRM, 6WAG), French press (Les Echos RH), EU GDPR news (EDPS), competitor changelogs.
- **Schedule:** daily 08:00 Europe/Paris, delivered to the founder's channel.
- **Format:** 5 items max — headline, one-line summary, why it matters for Go HRM.
- **Build:** WSF pipeline step 7 (Apps Script + LLM summarisation), or a cron + LLM job; output posted to the founder chat.

## Agent 2 — Auto-post (X / LinkedIn / blog)
- **Goal:** turn each digest item + each product change into a ready-to-publish post.
- **Inputs:** daily digest (Agent 1), product changelog, pricing updates.
- **Outputs:**
  - X post (≤280 chars, 1 link max).
  - LinkedIn post (2–4 short paragraphs, 1 CTA).
  - Optional: weekly blog post draft (500 words) for a future blog section.
- **Guardrails:**
  - Human approval before publish (no auto-publish at launch).
  - Never invent features, numbers or customer names.
  - Tone: professional French first; EN variant for X.
- **Schedule:** Mon–Fri 09:00 after digest; batch Friday posts on Thursday.

## Later
- Comment-reply assistant for LinkedIn (drafts only).
- Support triage agent on hello@go-hrm.com (once a backend exists).
