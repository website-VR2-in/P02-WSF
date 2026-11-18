# SEO audit & search ops — plasticfolder.in

## Live-site audit (2026-11-09)

**Gaps found:**
1. No `sitemap.xml` — request 404s (big discoverability loss)
2. `© 2017` stale copyright — trust signal
3. No hreflang on FR/EN pages (two-language site, no alternates)
4. No JSON-LD (Org, Product, FAQ) — loses rich results
5. No llms.txt — invisible to AI-answer engines
6. Heavy page weight (owl.carousel, FA 6 + v4 shims, 2 Google Fonts, Calendly) — Core Web Vitals risk
7. No security headers
8. Base64 hidden form template — opaque, fragile pipeline

**v2 fixes shipped in this folder:** sitemap (12 URLs + hreflang + x-default), JSON-LD (Org/WebSite/Product AggregateOffer/ContactPage), full hreflang alternates, llms.txt, security headers, consent-gated GA4, zero JS frameworks.

## Post-cutover search ops

### Google Search Console
1. Verify `plasticfolder.in` (DNS TXT) — keep the existing property if one exists; add v2 property or migrate ownership
2. Submit `https://plasticfolder.in/sitemap.xml`
3. Monitor: International targeting → FR/EN split; Coverage for the 12 URLs; Legacy 404s from old Joomla URLs (expect some → covered by 301 map)

### Bing Webmaster Tools
1. Verify via GSC import (one-click "Import from Google")
2. Submit the same sitemap

### GA4
- Replace `G-XXXXXXXXXX` at cutover (all 12 pages + main.js)
- Consent mode already wired: GA4 fires only after accept (`pf_cookie_consent`) — set up consent defaults (`ad_storage: denied`, `analytics_storage: denied`) in GTM config at cutover for EU compliance

## On-page (shipped)

- Unique title + meta description per page (FR/EN)
- Canonical + hreflang on every page
- One H1 per page; descriptive anchor text
- Internal linking: home → prices/templates/quality/quote; quote → privacy; footer full nav
- Image: SVG favicon inline (no extra request); OG image placeholder `assets/og-cover.jpg`

## Backlink plan (manual, owner-side)

| Target | Why | Effort |
|---|---|---|
| French print/packaging directories (PagesJaunes, Societe.com, Kompass) | local + industry authority | 1h |
| Chennai/India B2B directories (IndiaMART, TradeIndia) | supplier-side credibility | 1h |
| Packaging/eco newsletters (link-in-bio, guest post) | niche relevance | ongoing |
| Client co-branding (Fujifilm, TOEI, Messer…) | high-DA links | ask clients |
| Local Chamber of Commerce (Chennai CCI) | local trust | 30m |
| Eco/recycling directories (AGEC-compliant supplier lists) | matches quality-eco page | 1h |

Anchor mix: brand (plasticfolder.in), naked domain, partial ("custom plastic folders"), never exact-match over-optimized.

## AI-search (llms.txt)

- `llms.txt` shipped with real business data (prices, formats, contacts, clients)
- Keep it updated when prices/formats change
- Ensure `https://plasticfolder.in/llms.txt` returns 200 (static, always)
