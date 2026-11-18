# 1911 — deploymyclaw.ai (DeployMyClaw)

**What it is:** the deployment platform of the Claw AI family — connect an AI agent (code, ClawTool export, or any OpenAI-compatible endpoint) → live EU endpoint with REST/WhatsApp/Slack/webhooks, monitoring, versioning/rollback and per-run cost control. Built from scratch (domain empty, no DNS). Static bilingual (EN/FR) marketing site; the platform is a separate future Vercel project.

**Theme:** terminal/deploy dark — bg `#0d1117`, blue `#58a6ff`, green `#3fb950`, monospace accents + terminal mock in the hero. Cookie-gated GA4 (consent key `dmc_cookie_consent`).

## Pages
| Path | Purpose |
|---|---|
| `/` | noindex redirect → /fr/ or /en/ |
| `/en/`, `/fr/` | landing: hero + terminal mock, 6 features, 3-step how, 3 plans, FAQ, CTA |
| `/en/contact.html`, `/fr/contact.html` | mailto form (hello@deploymyclaw.ai) |
| `/en/privacy.html`, `/fr/privacy.html` | GDPR policy (site + EU-hosted platform) |

## Founder to-dos before launch
1. **Create hello@deploymyclaw.ai** (Google Workspace).
2. **Replace `G-XXXXXXXXXX`** in all 7 HTML pages.
3. **Add `assets/og-cover.jpg`** (1200×630) + per-page `og:image`.
4. **Confirm pricing** (€0 / €29 / €99) before publishing.
5. **Vercel import** — after push, import `su1-hue/1911_deploymyclaw.ai`, domain + DNS per `docs/dns-email.md`.
6. **Platform** — the actual runtime (deploy API, monitoring, endpoints) is a separate Vercel project; this repo is the marketing site only.

## Tests (all passed 2026-11-09)
- 12/12 URLs served 200 via local http.server
- `node --check js/main.js`, `vercel.json` + `sitemap.xml` parse clean
- Structural checker: tag balance, relative links, anchors, dup ids, JSON-LD — all pages pass
