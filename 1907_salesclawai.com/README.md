# 1907 · salesclawai.com — SalesClaw AI

Static bilingual (EN/FR) SaaS landing site for **SalesClaw AI** — the AI sales agent (prospecting → personalized outreach → 24/7 follow-up → meetings in your calendar). Built from scratch (domain was empty, 0/10 in WSF).

## Structure
```
index.html            root: noindex, lang-redirect (fr* → /fr/ else /en/, EN default)
en/                   index (features/how/pricing/FAQ/CTA) · contact · privacy
fr/                   same 3 pages in French
css/style.css         dark SaaS theme (lime/cyan on deep navy)
js/main.js            year, cookie consent (gates GA4), lang-redirect, mailto form
sitemap.xml           6 URLs, hreflang groups
robots.txt            allow all + sitemap
llms.txt              AI-search summary
vercel.json           security headers
docs/                 keyword research, DNS/email, social plan, agents, SEO on-page
```

## Founder to-dos before launch
1. **Email**: create `hello@salesclawai.com` (placeholder — mailto form points at it).
2. **GA4**: replace `G-XXXXXXXXXX` in all 7 HTML pages (one occurrence each) with the real measurement ID.
3. **OG image**: add `assets/og-cover.jpg` (1200×630) and set `og:image` per page if you want share cards.
4. **Pricing**: figures (99 / 299 EUR) are proposed — confirm real pricing before launch.
5. **Vercel**: import the GitHub repo (created by `push_all.sh` after `gh auth login`) → project name `salesclawai` → domain `salesclawai.com`.

## Product positioning note
Part of the **Claw AI family** (salesclawai · secureclawai · clawexperts.ai · clawtool.ai · deploymyclaw.ai · enterpriseclawai). Brand voice: dark, confident, "claw your next deal". Cross-linking with the family can be added in the footer once the other sites ship.
