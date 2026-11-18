# 1916 — go-hrm.com (Go HRM)

Marketing site for **Go HRM**, an HR-management SaaS (headcount & employee records, time & leave, payroll, recruitment/ATS, performance, employee self-service). FR-first with a full EN mirror. Built from scratch — the live domain was a GoDaddy parking page (no existing site to preserve).

## Status
- ✅ Site built (12 pages: 6 FR + 6 EN), tested locally, committed.
- ⏸ Push to GitHub pending `gh auth login` (see `push_all.sh` at repo root).
- ⏸ Vercel import: 1-click manual step by the owner (no Vercel token available).

## Structure
```
index.html            root redirect stub (fr* → /fr/, else /en/), noindex
fr/                   index, fonctionnalites, tarifs, a-propos, contact, confidentialite
en/                   index, features, pricing, about, contact, privacy
css/style.css         theme: teal #0d9488 / navy #101b2d / amber #f59e0b / coral #ef6351
js/main.js            year, consent-gated GA4, mailto contact form
sitemap.xml           12 URLs, hreflang fr/en/x-default, lastmod 2026-11-09
robots.txt            allow all + sitemap pointer
llms.txt              AI-search summary (FR)
vercel.json           security headers (nosniff, DENY, referrer, permissions-policy)
docs/                 runbooks: deployment, DNS, GA4/GSC/Bing, social, agents, SEO
```

## Conventions
- GA4 placeholder `G-XXXXXXXXXX` in every page, **consent-gated** (script `disabled` until "Accept"); analytics key `ghrm_cookie_consent` in localStorage.
- JSON-LD: Organization + SoftwareApplication + WebSite + FAQPage (home), Product/AggregateOffer (pricing), AboutPage, ContactPage.
- Contact form is a **mailto fallback** (`hello@go-hrm.com`) — no backend; swap for Formspree/Netlify later if desired.
- Design: sans-serif display, "people dots" motif (teal person + amber + coral dots on navy rounded square), teal primary CTA.

## ⚠️ Placeholders to confirm before launch
1. **hello@go-hrm.com** — used in contact page, JSON-LD, llms.txt. Confirm the mailbox exists or replace.
2. **Pricing is PROPOSED** (Starter 29 €/u/mo annual, Growth 59 €/u/mo annual, Scale custom; monthly +15 %). Validate against real pricing before public launch; pages already say "indicative — to be confirmed".
3. **OG cover** — `assets/og-cover.jpg` (1200×630) referenced in og:image tags; add a branded image before launch.
4. Company legal name / address not stated (parked domain, no entity info found) — add to footer/privacy if a legal entity will own the brand.

## Deployment (owner actions)
1. `gh auth login` → run `push_all.sh` from repo root (creates `su1-hue/1916_go-hrm.com` + pushes).
2. Vercel → Import `su1-hue/1916_go-hrm.com` (no framework; `vercel.json` applies security headers).
3. Point `go-hrm.com` DNS to Vercel (see `docs/dns-email.md`).
4. Replace GA4 `G-XXXXXXXXXX` with a real property ID (see `docs/ga4-gsc-bing.md`).
