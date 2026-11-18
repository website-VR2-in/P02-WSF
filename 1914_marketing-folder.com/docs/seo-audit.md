# SEO audit & search ops — marketing-folder.com / pochette-plastique-personnalisee.com

## Live-site audit (2026-11-10)

**Strengths (vs 1913):**
1. `sitemap.xml` present — 134 URLs
2. hreflang declared (FR/EN/ES/IT/PT)
3. 7-language coverage
4. Sector landing pages (notaires, sante)
5. Dedicated anti-RFID product page
6. Per-language CGV + terms

**Gaps:**
1. `© 2017` stale copyright
2. No JSON-LD (Org/Product/FAQ) — no rich results
3. No llms.txt — invisible to AI-answer engines
4. Heavy template (bootstrap + FA + Calendly) — Core Web Vitals risk
5. No security headers
6. No consent-gated analytics pattern
7. `/cz/` hreflang coverage inconsistent (not in EN home's alternate set)
8. Default Joomla robots.txt boilerplate
9. Two separate domains (marketing-folder.com → pochette-…) split SEO equity across the same business

## v2 fixes (via 1913 consolidation)

- Single sitemap with hreflang alternates (12 URLs now → grows with phases)
- JSON-LD (Org/WebSite/Product AggregateOffer/ContactPage/FAQPage)
- llms.txt with real business data (EUR + INR prices)
- Security headers via vercel.json
- Consent-gated GA4
- One domain cluster (3 domains, 1 site) → consolidated equity

## Post-cutover search ops

### Google Search Console
1. Verify all 3 domains (plasticfolder.in, pochette-plastique-personnalisee.com, marketing-folder.com) — DNS TXT
2. Submit the shared sitemap once (per property)
3. International targeting: FR/EN (+ ES/IT/PT/DE/CZ at phase 2)
4. Monitor legacy 404s from the 301 map; fix or map residual paths

### Bing Webmaster Tools
- Import from GSC per domain; submit sitemap

### GA4
- One property for all 3 domains (domain filter)
- Consent defaults: `ad_storage: denied`, `analytics_storage: denied` until accept

## On-page (shipped in v2)

- Unique title + meta per page
- Canonical + hreflang per page
- One H1 per page; descriptive anchors
- Internal linking: home → prices/templates/quality/quote/sectors; quote → privacy
- SVG favicon inline; OG placeholder `assets/og-cover.jpg`

## Backlink plan (manual, owner-side)

| Target | Why | Effort |
|---|---|---|
| French packaging/print directories (PagesJaunes, Societe.com, Kompass) | local + industry | 1h |
| Notaire/medical supplier directories (French) | matches sector pages | 1h |
| Client co-branding (TOEI, Messer, corim, foxten) | high-DA | ask |
| EU eco/PPWR-compliant supplier lists | matches quality-eco | 1h |
| India B2B (IndiaMART, TradeIndia) | supplier credibility (1913 side) | 1h |
| Chennai CCI | local trust | 30m |

Anchor mix: brand, naked domain, partial ("custom plastic folders") — never exact-match over-optimized.

## AI-search (llms.txt)

- v2 llms.txt carries both EUR + INR price tables + 7-language note
- Keep updated when tariffs change (live shows a `2026/01` revision stamp — track it)
