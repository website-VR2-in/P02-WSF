# 1908 — secureclawai.com (SecureClaw AI)

**What it is:** the security product of the Claw AI family — an AI security copilot for SMBs. Built from scratch (domain was empty, no DNS). Static bilingual (EN/FR) site, same pipeline pattern as 1907.

**Theme:** dark shield — bg `#060a14`, emerald `#2dd4a7`, amber accent. Cookie-gated GA4 (consent key `scw_cookie_consent`).

## Pages
| Path | Purpose |
|---|---|
| `/` | noindex redirect → /fr/ or /en/ |
| `/en/`, `/fr/` | landing: hero, 6 features, 3 steps, 3-tier pricing, FAQ, CTA |
| `/en/contact.html`, `/fr/contact.html` | mailto form (hello@secureclawai.com) |
| `/en/privacy.html`, `/fr/privacy.html` | GDPR policy (site + product) |

## Founder to-dos before launch
1. **Create hello@secureclawai.com** (Google Workspace) — contact form is mailto.
2. **Replace `G-XXXXXXXXXX`** in all 7 HTML pages (search/replace) once GA4 property exists.
3. **Add `assets/og-cover.jpg`** (1200×630) + per-page `og:image` tags if you want social cards.
4. **Confirm pricing** (€149 / €399 / Custom) before publishing.
5. **Vercel import** — after the repo is pushed (see push_all.sh), import `su1-hue/1908_secureclawai.com` on Vercel, add the domain, DNS per `docs/dns-email.md`.

## Tests (all passed 2026-11-09)
- 12/12 URLs served 200 via local http.server
- `node --check js/main.js`, `vercel.json` + `sitemap.xml` parse clean
- Structural checker: tag balance, relative links, anchors, dup ids, JSON-LD — all pages pass
