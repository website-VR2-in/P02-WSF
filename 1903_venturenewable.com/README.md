# 1903 · venturenewable.com — VREW (Ventura Renewable)

Static marketing site for VREW — zero-upfront solar + battery Energy-as-a-Service in India (customer plan: fixed monthly, 12-year term, ownership transfer; investor program: 8% asset-backed ROI target). Built as part of the P02-WSF (WebSite Factory) pipeline, site ID **1903**.

## What's in the repo
```
index.html            Main landing page (single page, semantic HTML5)
privacy-policy.html   Privacy policy
css/style.css         Design (no framework, ~7KB, dark energy theme)
js/main.js            Nav year, contact form validation + mailto handoff, GA4 lead event
sitemap.xml           2 URLs
robots.txt            Allow all + sitemap pointer
llms.txt              AI-search visibility page (WSF step 10)
docs/                 Pipeline runbooks
  keyword-research.md  step 5 — keyword set + content gaps
  dns-email.md         step 2 — Workspace + exact DNS records
  social-plan.md       step 6 — channel selection + cadence
  agents.md            steps 7–8 — news digest + auto-post agent specs
  seo-onpage.md        step 9 — on-page checklist + backlink plan
```

## Deploy (WSF step 1 — one click)
1. Repo is pushed to GitHub: `su1-hue/1903_venturenewable.com` (public — Vercel free tier requires public).
2. vercel.com → Add New → Project → import `su1-hue/1903_venturenewable.com` (framework: None / static).
3. Add domain `venturenewable.com` + `www.venturenewable.com` in Vercel → DNS (see `docs/dns-email.md` §3).
4. HTTPS is automatic.

## Before launch (owner actions)
- [ ] Replace GA4 placeholder `G-XXXXXXXXXX` in `index.html` (and privacy-policy mentions stay as-is) once the GA4 property exists (WSF step 3).
- [ ] Add `assets/og-cover.jpg` (1200×630) for social sharing cards.
- [ ] Decide primary mailbox: keep `contact@vrew.com` or move to `contact@venturenewable.com` (runbook: `docs/dns-email.md`).
- [ ] Founder review of all copy (financial claims: 8% is a *target*, compliance wording kept).

## WSF step status
| Step | Status |
|---|---|
| 1 Infrastructure | 🟩 code complete, GitHub pushed; Vercel import pending (no Vercel token on box) |
| 2 Email/DNS | 📄 runbook ready (`docs/dns-email.md`), needs Workspace purchase |
| 3 Analytics | 🟩 GA4 tag in place with placeholder ID; needs GA4 property |
| 4 SEO register | 📄 sitemap/robots ready; needs GSC + Bing account |
| 5 Keywords | ✅ `docs/keyword-research.md` |
| 6 Social | ✅ `docs/social-plan.md` (accounts need founder identity) |
| 7 News agent | ✅ spec `docs/agents.md` (build on VR2 stack) |
| 8 Auto-post | ✅ spec `docs/agents.md` |
| 9 On-page/backlinks | ✅ `docs/seo-onpage.md` |
| 10 llms.txt | ✅ `llms.txt` |
