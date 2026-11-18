# 1904 · energy-stock.com — On-page SEO & backlinks (WSF step 9)

## On-page checklist (state at build time 2026-11-08)
- [x] Bilingual FR/EN with correct `lang` attribute per page
- [x] hreflang alternates (fr, en, x-default) in every head + sitemap hreflang groups
- [x] Root `/` = language auto-redirect (noindex, follow) → `/fr/` default, EN if browser English
- [x] Unique title + meta description per page (FR/EN pairs, keyword-targeted)
- [x] Canonical URLs per page
- [x] Open Graph + locale per language
- [x] JSON-LD: Organization (Andorra address, phone, CEO, foundingDate) + WebSite (inLanguage) on homepages; ContactPage on contact pages
- [x] Semantic HTML, ARIA labels, keyboard-accessible, reduced-motion support
- [x] Favicon inlined; CSS ~8KB; no render-blocking JS; cookie-gated GA4 (GDPR, Andorra=EEA)
- [x] robots.txt + sitemap.xml (8 URLs, hreflang)
- [x] llms.txt (step 10)
- [ ] GA4 real ID — replace `G-XXXXXXXXXX` in all 8 pages once property exists (step 3)
- [ ] `assets/og-cover.jpg` 1200×630 export (brand assets pending)

## Backlink plan (outreach)
| Target | Angle |
|---|---|
| HCEA Consulting (hcea.asia, site 1905) — sister-company cross-links | "ESA & HCEA: same CEO, two missions" |
| VR2 (vr2.in) — businesses page | Ecosystem link |
| Andorra business directories (Cambra d' Comerç d' Andorra, andorra.ad) | Company listing |
| EU battery/energy directories (ENTSO-E members, storage associations) | RENEW SCORE listing |
| SolarQuarter / Energy-Storage.news / Battery Design | Guest posts: battery rating methodology, EU sourcing |
| LUXCOMB brand (if a site exists) | Historical brand link |

## Post-launch monitoring
- GSC: coverage + hreflang report (check for alternate-page issues), FR vs EN query split.
- Lighthouse mobile ≥90 (static, should be high out of the box).
- Uptime: Vercel built-in.
- Migration watch: after Joomla→Vercel cutover, monitor 404s in GSC for 2 weeks (old `/fr/offre` → new `/fr/offre.html` etc. — add 301s in Vercel config if old URLs matter for existing backlinks).

## ⚠️ Migration note (important)
The current live Joomla URLs are `/fr/`, `/en/`, `/fr/offre`, `/fr/contact-fr`. The new static URLs are `/fr/offre.html`, `/fr/contact.html`. To preserve any existing backlinks/crawls, add Vercel rewrites/redirects:
```json
{ "rewrites": [
  { "source": "/fr/offre",     "destination": "/fr/offre.html" },
  { "source": "/fr/contact-fr","destination": "/fr/contact.html" },
  { "source": "/en/offre",     "destination": "/en/offer.html" },
  { "source": "/en/contact",   "destination": "/en/contact.html" }
]}
```
Add to `vercel.json` at cutover.
