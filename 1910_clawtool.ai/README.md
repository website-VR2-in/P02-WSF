# 1910 — clawtool.ai (ClawTool AI)

**What it is:** the single-product tool of the Claw AI family — paste any email/meeting/doc → AI claws out the action items (task, owner, deadline, priority) → sync to Todoist/Notion/Slack/email. Built from scratch (domain empty, no DNS). Static bilingual (EN/FR) marketing site; the product itself ships as a Vercel app later.

**Theme:** dark orange product — bg `#0b0f19`, orange `#f97316`, violet `#a78bfa`. Cookie-gated GA4 (consent key `ct_cookie_consent`).

## Pages
| Path | Purpose |
|---|---|
| `/` | noindex redirect → /fr/ or /en/ |
| `/en/`, `/fr/` | landing: hero + mock, 6 features, 3-step how, 3 plans, FAQ, CTA |
| `/en/contact.html`, `/fr/contact.html` | mailto form (hello@clawtool.ai) |
| `/en/privacy.html`, `/fr/privacy.html` | GDPR policy (site + zero-retention product) |

## Founder to-dos before launch
1. **Create hello@clawtool.ai** (Google Workspace).
2. **Replace `G-XXXXXXXXXX`** in all 7 HTML pages.
3. **Add `assets/og-cover.jpg`** (1200×630) + per-page `og:image`.
4. **Confirm pricing** (€0 / €19 / €49) before publishing.
5. **Vercel import** — after push, import `su1-hue/1910_clawtool.ai`, domain + DNS per `docs/dns-email.md`.
6. **Product** — the actual extraction app is a separate Vercel project (React + API); this repo is the marketing site only.

## Tests (all passed 2026-11-09)
- 12/12 URLs served 200 via local http.server
- `node --check js/main.js`, `vercel.json` + `sitemap.xml` parse clean
- Structural checker: tag balance, relative links, anchors, dup ids, JSON-LD — all pages pass
