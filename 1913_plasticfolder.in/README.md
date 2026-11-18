# 1913 — plasticfolder.in

**Status: v2 modernized upgrade proposal — NOT deployed. The live Joomla site stays untouched (owner decision).**

Custom CMYK-printed plastic (polypropylene) folders & sleeves — produced in Chennai, India, delivered across Europe and worldwide. Bilingual FR (primary market) / EN.

## What this folder is

A **faithful modernized v2** of the live site at https://plasticfolder.in (Joomla + com_sppagebuilder + shaper_macro template, © 2017) — rebuilt as a static, fast, consent-aware, SEO-complete site. It is an **upgrade proposal**: the live site is not modified, replaced, or redirected from. Cutover is an owner decision (see `docs/upgrade-plan.md` for the cutover checklist and rollback).

- **NOT deployed** — no DNS change, no Vercel project created here
- Live site remains fully operational at plasticfolder.in
- All business data (prices, formats, contacts, clients) is **real**, copied from the live site — see [RECON.md](RECON.md)

## Structure

```
index.html          → language redirect stub (noindex): fr* → /fr/, else /en/
en/                 → 6 pages: index, prices, templates, quality-eco, quote, privacy
fr/                 → 6 pages (primary market): index, prices, templates, quality-eco, quote, privacy
css/style.css       → print/CMYK design system (navy/cyan/magenta/yellow, Georgia display serif)
js/main.js          → year, consent-gated GA4 (pf_cookie_consent), mailto quote form
sitemap.xml         → 12 URLs with hreflang alternates + x-default
robots.txt          → allow all, sitemap declared
llms.txt            → AI-search summary of the business
vercel.json         → security headers (nosniff / DENY / strict-origin / Permissions-Policy)
RECON.md            → live-site inventory (structure, stack, content, SEO gaps)
docs/               → upgrade-plan, migration, seo-audit, keyword-research, dns-email, social-plan, agents
```

## Founder to-dos before any cutover

1. **GA4**: replace `G-XXXXXXXXXX` (all 12 pages + `js/main.js`) with the real measurement ID
2. **OG image**: add `assets/og-cover.jpg` (1200×630) — referenced as placeholder
3. **Form backend**: quote form currently builds a `mailto:` to `info@plasticfolder.in`; for production, wire a real endpoint (Vercel function / Formspree / existing Joomla contact) — see `docs/migration.md`
4. **Media**: export downloadable template files (PDF/CDR) + video tutorials from the Joomla media library — the v2 keeps the same file paths (see `docs/migration.md`)
5. **Cutover decision (owner)**: import this repo into Vercel, then point a staging subdomain (e.g. v2.plasticfolder.in) for comparison. Only after sign-off: DNS cutover with 301 map from old Joomla URLs → new URLs. Rollback = revert DNS. Details + 301 map: `docs/upgrade-plan.md`, `docs/dns-email.md`
6. **CGV / terms**: the live site has CGV + terms-of-use pages; port them (or link to the Joomla copies) if required by local law

## Local test

```bash
cd 1913_plasticfolder.in && python3 -m http.server 8910
# open http://localhost:8910/ → redirects to /fr/ or /en/
```

## Pipeline status (WSF 10-step)

| Step | Status |
|---|---|
| 1 Deploy (GitHub→Vercel) | ⏸ local commit ready; push blocked (gh auth); Vercel import = owner's 1-click |
| 2 Email/DNS | ✅ real contacts in use (sale@/info@plasticfolder.in, +91 900 310 7128); runbook: `docs/dns-email.md` |
| 3 GA4 | placeholder gated behind consent — replace ID at cutover |
| 4 GSC/Bing | runbook: `docs/seo-audit.md` |
| 5 Keywords | `docs/keyword-research.md` |
| 6 Social | `docs/social-plan.md` |
| 7 Daily digest agent | `docs/agents.md` |
| 8 Auto-post agent | `docs/agents.md` |
| 9 On-page + backlinks | done in build (JSON-LD, hreflang, llms.txt); backlinks: `docs/seo-audit.md` |
| 10 llms.txt | ✅ present |
