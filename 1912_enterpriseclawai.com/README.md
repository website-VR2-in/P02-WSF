# 1912 — enterpriseclawai.com (EnterpriseClaw AI)

**What it is:** the enterprise tier of the Claw AI family — same product suite (sales, security, services, tools, deployment) with regulated-org controls: EU-only hosting, SSO/SAML, exportable audit logs, custom models, governance and 99.9% SLA. Built from scratch (domain empty, no DNS). Static bilingual (EN/FR) marketing site.

**Theme:** premium light enterprise — warm white bg `#f7f8fa`, navy `#1e3a5f`, gold `#c99a3c`, green `#2e7d5b`. Cookie-gated GA4 (consent key `ec_cookie_consent`).

## Pages
| Path | Purpose |
|---|---|
| `/` | noindex redirect → /fr/ or /en/ |
| `/en/`, `/fr/` | landing: hero + badge row, 6 capabilities, 3-step process, 3 plans, FAQ, CTA |
| `/en/contact.html`, `/fr/contact.html` | mailto form (hello@enterpriseclawai.com) |
| `/en/privacy.html`, `/fr/privacy.html` | GDPR policy (site + EU-only platform) |

## Founder to-dos before launch
1. **Create hello@enterpriseclawai.com** (Google Workspace).
2. **Replace `G-XXXXXXXXXX`** in all 7 HTML pages.
3. **Add `assets/og-cover.jpg`** (1200×630) + per-page `og:image`.
4. **Confirm pricing** (€490 / €1,490 / Custom) and the SOC 2 / ISO 27001 status-pill claims before publishing.
5. **Vercel import** — after push, import `su1-hue/1912_enterpriseclawai.com`, domain + DNS per `docs/dns-email.md`.
6. **SOC 2 Type II** — the hero pill says "in progress"; align copy with the actual audit timeline.

## Tests (all passed 2026-11-09)
- 12/12 URLs served 200 via local http.server
- `node --check js/main.js`, `vercel.json` + `sitemap.xml` parse clean
- Structural checker: tag balance, relative links, anchors, dup ids, JSON-LD — all pages pass
