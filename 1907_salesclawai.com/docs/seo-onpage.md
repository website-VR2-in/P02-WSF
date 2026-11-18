# 1907 salesclawai.com — on-page SEO & backlinks (step 9)

## On-page (shipped)
- Unique `<title>` + meta description per page (EN/FR).
- Canonical per page + hreflang (en/fr/x-default) in head **and** sitemap.
- JSON-LD: Organization + SoftwareApplication + WebSite (EN/FR), ContactPage (EN/FR).
- Semantic HTML: one `<h1>` per page, section `aria-labelledby`, landmarks.
- Internal links: nav + footer cross-link all pages in both languages.
- Performance: single CSS file, no external fonts, inline SVG favicon, no build step → LCP < 1.5 s expected.
- `llms.txt` for AI-search crawlers.

## On-page (to do)
- OG image `assets/og-cover.jpg` (1200×630) + per-page `og:image`.
- GA4 real ID (see README).

## Backlinks plan
1. **Directories** (week 1): Product Hunt, SaaSHub, AlternativeTo, G2 (free listing), Capterra.
2. **Founder network**: the Claw AI family sites (1908–1912) cross-link in footers once shipped — internal-ish but real referring domains.
3. **Guest posts** (month 1–2): 2–3 on sales/revops blogs ("What we learned building an AI SDR").
4. **Digital PR**: publish the pilot-results benchmark ("AI SDR reply-rate benchmark, 2026") once 3+ pilots exist — linkable asset.

## GSC/Bing (step 4)
- Add property `salesclawai.com`, verify via DNS TXT, submit `sitemap.xml`.
- Bing: submit via Bing Webmaster (accepts the same sitemap).
