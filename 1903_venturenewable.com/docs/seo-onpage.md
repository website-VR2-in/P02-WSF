# 1903 · venturenewable.com — On-page SEO & backlinks (WSF step 9)

## On-page checklist (state at build time 2026-11-08)
- [x] Unique title (≤60 chars, primary keyword) + meta description (≤160 chars, CTA)
- [x] Single H1, logical H2/H3 hierarchy
- [x] Canonical URL (https://www.venturenewable.com/)
- [x] Open Graph + Twitter cards
- [x] JSON-LD: Organization, WebSite, FAQPage (rich results)
- [x] robots.txt + sitemap.xml (2 URLs, will grow with content pages)
- [x] Semantic HTML, ARIA labels, keyboard-focusable, reduced-motion support
- [x] Favicon inlined (zero extra request); no render-blocking JS; CSS ~7KB
- [x] Mobile viewport + responsive breakpoints (tested ≤820px)
- [x] llms.txt published (step 10)
- [ ] GA4 real ID — replace `G-XXXXXXXXXX` placeholder once property is created (step 3)
- [ ] og-cover.jpg image — add a 1200×630 export (brand assets pending from founder)

## Backlink plan (outreach list)
| Target | Angle |
|---|---|
| VR2 (vr2.in) — "Our businesses" page | Sister-company link (already exists as text; make it a real hyperlink) |
| VR2 LinkedIn/website footer | Ecosystem link |
| India renewable directories (REWA, SolarQuarter, Renewable-India) | Company listing |
| Local business journals (city of HQ) | "European founders set up solar EaaS in India" story |
| Startup India / MSME registry | Standard registration listing |
| Guest posts: solar blogs, fintech blogs (EaaS model) | 2–3 per quarter |

## Post-launch monitoring
- GSC: coverage, queries, CTR — first 4-week review after indexing.
- Lighthouse (PageSpeed) on mobile — target ≥90 performance (static site should score high out of the box).
- Uptime: Vercel built-in + optional uptime check.
