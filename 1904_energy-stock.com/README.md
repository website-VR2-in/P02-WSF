# 1904 · energy-stock.com — Energy Stock Alliance (ESA)

Bilingual (FR/EN) static site for **Energy Stock Alliance** — Andorra-based renewable-energy consultant: RENEW SCORE battery rating + energy storage sourcing for Europe. Part of the P02-WSF pipeline, site ID **1904**.

## What's in the repo
```
index.html              Language auto-redirect (FR default, EN if browser is English)
fr/  index.html offre.html contact.html privacy.html
en/  index.html offer.html contact.html privacy.html
css/style.css           Shared design (navy + amber, ~8KB, no framework)
js/main.js              Cookie consent (GDPR), GA4 gated behind consent, mailto form, year
sitemap.xml             8 URLs with hreflang alternates
robots.txt
llms.txt                AI-search visibility page (WSF step 10), bilingual
docs/                   Pipeline runbooks
README.md
```

## Key business facts (from the live Joomla site, preserved)
- CEO Gaetan Capou; founded ESA 2021; 15+ years PV/LED OEM since 2008; LUXCOMB brand
- RENEW SCORE = "Yuka for batteries" (independent non-governmental rating)
- Sourcing: two teams (Europe + Asia), group purchasing, quality control, logistics
- Sister company: HCEA Consulting (site 1905, same CEO)
- Address: C/ Prat de la Creu, 8, local 5, AD500 Andorra la Vella · +376 812 696
- GDPR applies (Andorra = EEA) → cookie banner implemented; GA4 loads only after consent

## Deploy (WSF step 1)
1. GitHub repo `su1-hue/1904_energy-stock.com` (push pending gh re-auth — see STATUS.md).
2. Vercel → import repo (framework: None).
3. Domains `energy-stock.com` + `www.energy-stock.com` → Vercel DNS (runbook: `docs/dns-email.md`).

## Before launch (owner actions)
- [ ] Replace GA4 `G-XXXXXXXXXX` placeholder (all 8 pages) once property exists (step 3).
- [ ] Add `assets/og-cover.jpg` (1200×630).
- [ ] Founder review of FR/EN copy.

## WSF step status
| Step | Status |
|---|---|
| 1 Infrastructure | 🟩 code complete; Vercel import pending |
| 2 Email/DNS | 📄 runbook `docs/dns-email.md` |
| 3 Analytics | 🟩 GA4 tag with consent gate + placeholder |
| 4 SEO register | 📄 sitemap (hreflang) ready; needs GSC + Bing |
| 5 Keywords | ✅ `docs/keyword-research.md` |
| 6 Social | ✅ `docs/social-plan.md` |
| 7 News agent | ✅ spec `docs/agents.md` |
| 8 Auto-post | ✅ spec `docs/agents.md` |
| 9 On-page/backlinks | ✅ `docs/seo-onpage.md` |
| 10 llms.txt | ✅ `llms.txt` |
