# 1914 — marketing-folder.com

**Status: RECON ONLY — live production site, NO rebuild (same business as 1913). Live site untouched.**

`marketing-folder.com` 301-redirects to **pochette-plastique-personnalisee.com** — a live Joomla site that is the **sister domain of 1913 plasticfolder.in** (same business, same template, cross-linked in footer). It is the **European/EUR-facing** domain: 7 languages (FR/EN/ES/IT/PT/DE/CZ), EUR price list (2026/01), sector landings (notaires/sante), anti-RFID product page, Calendly (`pochette-luxcomb`).

## Why no rebuild here

Building a second v2 would duplicate the 1913 v2 and split the business across two modern codebases. The correct move (see [RECON.md](RECON.md)):

1. **One modern site (the 1913 v2) serves all three domains** — plasticfolder.in (India/INR), pochette-plastique-personnalisee.com + marketing-folder.com (Europe/EUR)
2. Add the **0.25mm PP EUR tier** + EUR price table to the v2
3. Phase 2: the 5 extra languages (ES/IT/PT/DE/CZ) — the v2's per-language folder structure extends cleanly
4. Phase 2: sector landings (notaires/sante) + anti-RFID page
5. Cutover = owner decision, with 301 map + rollback (docs/upgrade-plan.md)

## Contents

- [RECON.md](RECON.md) — full live-site inventory: stack, 7-language structure, 2026/01 EUR price tables (0.2mm + 0.25mm), contacts, clients, SEO gaps, cross-check vs 1913 INR prices
- `docs/` — upgrade-plan (consolidation + 301 map), migration, seo-audit, keyword-research, dns-email, social-plan, agents

## Pipeline status (WSF 10-step)

| Step | Status |
|---|---|
| 1 Deploy | ⏸ N/A by design — no separate deployment; folds into 1913 v2 |
| 2 Email/DNS | real contact captured (info@pochette-plastique-personnalisee.com); runbook: `docs/dns-email.md` |
| 3–10 | consolidated into 1913 v2 plan (see `docs/` for this domain's specifics) |
