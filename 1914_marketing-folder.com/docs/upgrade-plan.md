# Upgrade plan — marketing-folder.com / pochette-plastique-personnalisee.com

**Principle: live site is never touched by this project.** No separate v2 for this domain — it **consolidates into the 1913 v2** (same business). Cutover is an owner decision with full rollback.

## Why consolidate instead of rebuild

- Same business, same Joomla template, cross-linked in footer (`plasticfolder.in` link on FR home)
- Prices are the same business in two currencies: ₹99/93/89 (INR, 1913) ≈ €1.08/0.928/0.841 (EUR, 1914) at 500/1000/2000
- Two modern codebases = duplicated maintenance, split SEO equity, inconsistent content
- Vercel supports multiple custom domains per deployment → one site, three domains

## Consolidation plan

### Phase 1 — extend the 1913 v2 (small, high-value)
1. **EUR price table** on the v2 prices page:
   - 0.2mm PP: €1.0800 (500) / €0.9280 (1000) / €0.8410 (2000) / quote (HT)
   - **0.25mm PP (new tier, absent from 1913):** €1.6645 (500) / €1.3530 (1000) / €1.1860 (2000) / quote (HT)
   - FR pages show EUR first; EN shows both EUR + INR
2. **Sector landing pages** (2 new pages × FR/EN): `pochettes-notaires` (lawyer folders), `pochettes-sante` (medical folders) — strong local-SEO + E-E-A-T pages
3. **Anti-RFID product page** (1 × FR/EN) — the live site has a dedicated page; v2 only mentions it in options
4. **Contacts**: add `info@pochette-plastique-personnalisee.com` + Calendly `pochette-luxcomb/15min` (consent-gated embed) alongside the 1913 contacts
5. **Vercel multi-domain**: attach `pochette-plastique-personnalisee.com` + `www.` + `marketing-folder.com` + `www.` to the 1913 deployment (1-click each in Vercel UI)

### Phase 2 — languages (owner-prioritized)
- Add `/es/`, `/it/`, `/pt/`, `/de/`, `/cz/` to the v2 (per-language folders, same page set)
- Update `sitemap.xml` hreflang to 7 alternates + x-default
- Translate from the live site's existing 7-language content (read-only export)

## 301 map (live → v2, applied at cutover only)

| Live path (per-lang, e.g. /fr/) | v2 target |
|---|---|
| `/fr/`, `/en/` | `/fr/`, `/en/` (301) |
| `/fr/tarifs` | `/fr/prices.html` |
| `/fr/gabarits` + `/fr/gabarits-videos-tutos/*` | `/fr/templates.html` (+ `#videos`, `#design`, `#tutoriels` anchors) |
| `/fr/gabarits-videos-tutos/protection-...-anti-rfid` | `/fr/anti-rfid.html` (phase 1) |
| `/fr/qualite-eco` (+ `/encres-impression`) | `/fr/quality-eco.html` |
| `/fr/demandez-un-devis` | `/fr/quote.html` |
| `/fr/home-fr/pochettes-notaires` | `/fr/notaires.html` (phase 1) |
| `/fr/home-fr/pochettes-sante` | `/fr/sante.html` (phase 1) |
| `/fr/c-g-v`, `/fr/conditions-d-utilisation` | keep on Joomla or port (owner) |
| `/fr/plan-du-site` | `/sitemap.xml` |
| ES/IT/PT/DE/CZ equivalents | same mapping under their lang folders (phase 2) |
| `marketing-folder.com/*` | `pochette-plastique-personnalisee.com` 301 chain already exists; after cutover, point marketing-folder.com directly at the v2 (same map) |

## Rollback

- DNS revert to current host (5 min); `marketing-folder.com` reverts to the 301 → pochette chain
- Live Joomla untouched throughout
- Keep the 1913 v2 GA4 + GSC properties separate from legacy during transition
