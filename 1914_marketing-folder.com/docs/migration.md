# Migration — pochette-plastique-personnalisee.com → consolidated v2

**Nothing here modifies the live site.** All steps are read/export or happen on the shared Vercel deployment (the 1913 v2).

## 1. Content export (read-only from Joomla)

| Asset | v2 target |
|---|---|
| 7-language page text (ES/IT/PT/DE/CZ not in v2 yet) | translation source for phase 2 |
| Template files (PDF/CDR) + videos/tutorials | `assets/templates/`, `assets/videos/` (same as 1913 migration) |
| Client logos (corim, TOEI, eydo, in-edit, laurenceperrin, loti2a, messermedical, foxten) | `assets/img/clients/` (WebP) |
| Anti-RFID product photos | `assets/img/` |

Method: Joomla Media Manager → zip download. No DB writes.

## 2. Content mapping (live → v2)

| Live (FR) | v2 | Phase |
|---|---|---|
| `/fr/tarifs` | prices page gains **EUR table + 0.25mm tier** | 1 |
| `/fr/home-fr/pochettes-notaires` | `/fr/notaires.html` (+EN) | 1 |
| `/fr/home-fr/pochettes-sante` | `/fr/sante.html` (+EN) | 1 |
| `/fr/gabarits-videos-tutos/protection-...-anti-rfid` | `/fr/anti-rfid.html` (+EN) | 1 |
| `/fr/qualite-eco/encres-impression` | merged into quality-eco (already covered) | 1 |
| `/fr/demandez-un-devis` | quote page — add `info@pochette-plastique-personnalisee.com` as second target + Calendly embed (consent-gated) | 1 |
| ES/IT/PT/DE/CZ homes + pages | new lang folders, same page set | 2 |
| CGV / conditions per language | owner: port or keep on Joomla | — |

## 3. Domain wiring (Vercel, at cutover)

1. 1913 v2 deployment already on `plasticfolder.in`
2. Add domains (Vercel UI, 1-click each): `pochette-plastique-personnalisee.com`, `www.pochette-plastique-personnalisee.com`, `marketing-folder.com`, `www.marketing-folder.com`
3. Per-domain default path: serve the same v2 (language redirect by Accept-Language as today)
4. 301 map from `upgrade-plan.md` as Vercel redirects (applied at cutover)

## 4. Analytics

- One GA4 property for the whole business (all 3 domains) — replace `G-XXXXXXXXXX` once
- GSC: verify all 3 domains; submit the single shared sitemap
- Consent gate (`pf_cookie_consent`) already covers all domains (same origin scope per domain — fine)

## 5. Form backend

Same as 1913 (`docs/migration.md` there): mailto now (target `info@pochette-plastique-personnalisee.com` for EU traffic, `info@plasticfolder.in` for IN), real endpoint (Vercel function) at cutover.
