# 1909 — clawexperts.ai (Claw Experts AI)

**What it is:** the done-for-you AI services arm of the Claw AI family — audit → build → train → scale. Built from scratch (domain empty, no DNS). Static bilingual (EN/FR) site, same pipeline pattern as 1907/1908.

**Theme:** light agency — ivory `#faf9f6`, indigo `#3b4a9f`, coral `#ff6b4a`. Cookie-gated GA4 (consent key `cx_cookie_consent`).

## Pages
| Path | Purpose |
|---|---|
| `/` | noindex redirect → /fr/ or /en/ |
| `/en/`, `/fr/` | landing: hero, 6 services, 4-step process, 3 packages, FAQ, CTA |
| `/en/contact.html`, `/fr/contact.html` | mailto form (hello@clawexperts.ai) |
| `/en/privacy.html`, `/fr/privacy.html` | GDPR policy (site + engagements) |

## Founder to-dos before launch
1. **Create hello@clawexperts.ai** (Google Workspace) — contact form is mailto.
2. **Replace `G-XXXXXXXXXX`** in all 7 HTML pages once the GA4 property exists.
3. **Add `assets/og-cover.jpg`** (1200×630) + per-page `og:image` tags.
4. **Confirm package pricing** (€1,900 audit / €4,900 build / €2,900/mo partner) before publishing.
5. **Vercel import** — after the repo is pushed (push_all.sh), import `su1-hue/1909_clawexperts.ai`, add the domain, DNS per `docs/dns-email.md`.

## Tests (all passed 2026-11-09)
- 12/12 URLs served 200 via local http.server
- `node --check js/main.js`, `vercel.json` + `sitemap.xml` parse clean
- Structural checker: tag balance, relative links, anchors, dup ids, JSON-LD — all pages pass
