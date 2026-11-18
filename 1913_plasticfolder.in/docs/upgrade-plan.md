# Upgrade plan — plasticfolder.in v2

**Principle: the live Joomla site is never touched by this project.** v2 is an upgrade proposal in this folder; cutover is an owner decision with full rollback.

## Why upgrade

| Live gap | v2 fix |
|---|---|
| Joomla 3-era template (shaper_macro), © 2017 | Static, dependency-free, ~15KB pages, Lighthouse-ready |
| No sitemap.xml (404) | `sitemap.xml` with hreflang + x-default |
| No JSON-LD / hreflang | Org + Product/AggregateOffer + WebSite + ContactPage schema; full FR/EN alternates |
| Opaque base64 form pipeline | Transparent form; mailto today, real backend at cutover |
| No consent handling | GA4 loaded only after explicit accept (`pf_cookie_consent`) |
| No AI-search presence | `llms.txt` with real business data |
| No security headers | `vercel.json`: nosniff, DENY, strict-origin-when-cross-origin, Permissions-Policy |

## Cutover checklist (owner sign-off required)

1. Import this repo to Vercel (1-click) → gets a `*.vercel.app` URL
2. Replace `G-XXXXXXXXXX` with real GA4 ID; add `assets/og-cover.jpg` (1200×630)
3. Wire quote form backend (Vercel function or existing Joomla contact component via API)
4. Export Joomla media (template PDFs/CDR, videos) → `assets/` with same filenames
5. Point a **staging subdomain** (e.g. `v2.plasticfolder.in`) at the Vercel deployment; A/B against live
6. After owner sign-off: update DNS A/CNAME for `plasticfolder.in` + `www`
7. Verify 301 map (below) + GSC/Bing resubmission + old-site backup snapshot

## 301 map (live Joomla URLs → v2)

| Live path (Joomla) | v2 target |
|---|---|
| `/` | `/fr/` (301; root serves redirect stub pre-cutover) |
| `/fr` or `/fr/` | `/fr/` |
| `/en` or `/en/` | `/en/` |
| `/ask-for-a-quote` | `/fr/quote.html` (301; EN variant for `/en/ask-for-a-quote`) |
| `/templates` (+ tips sub-pages) | `/fr/templates.html` |
| `/prices` | `/fr/prices.html` |
| `/quality-eco` (+ inks sub-page) | `/fr/quality-eco.html` |
| CGV / terms | keep on Joomla or port as `fr/cgv.html` (owner decision) |
| video/tutorial pages | `/fr/templates.html#videos` after media export |

Implement as Vercel rewrites/redirects in `vercel.json` **at cutover time only** — the current `vercel.json` ships clean.

## Rollback

- DNS revert (A/CNAME back to Joomla host) — 5-minute rollback
- Joomla site untouched throughout, so no data rollback needed
- GA4 + GSC retain both v2 and legacy properties during transition
