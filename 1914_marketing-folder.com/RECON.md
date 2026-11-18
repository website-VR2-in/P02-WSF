# RECON — marketing-folder.com → pochette-plastique-personnalisee.com

Captured 2026-11-09/10 via direct HTTP (no WSF needed — public site).

## Identity

- **marketing-folder.com** (A + www → `15.197.162.184`) **301-redirects to `https://pochette-plastique-personnalisee.com`**
- **Same business as 1913 (plasticfolder.in)** — proof:
  - FR footer links directly to `https://plasticfolder.in`
  - Same product (custom CMYK printed polypropylene folders/sleeves), same template (Joomla + shaper_macro), same client set (TOEI Animation, Messer Medical appear on both)
  - Prices are consistent across currencies (see below)
- **Brand hint:** Calendly handle = `pochette-luxcomb` ("Luxcomb" appears to be the operating brand)

## Live stack

| Layer | Value |
|---|---|
| CMS | **Joomla!** (same generation as plasticfolder.in) |
| Template | shaper_macro (bootstrap, font-awesome) — identical to 1913 |
| Scheduling | Calendly `pochette-luxcomb/15min` (15-min slot) |
| Sitemap | ✅ **present** — `/sitemap.xml` with 134 URLs (better than 1913, which 404s) |
| robots.txt | present (default Joomla boilerplate) |
| Footer | **© 2017** (stale, same as 1913) |

## Languages (all live, 200)

`/cz/` `/de/` `/en/` `/es/` `/fr/` `/it/` `/pt/` — **7 languages** (1913 has only FR/EN)
- hreflang declared on pages (FR/EN/ES/IT/PT seen on EN home)
- Note: `/cz/` exists but is not in the hreflang set seen on EN home — verify per-language alternate coverage

## Site structure (FR canonical paths)

| Path | Content |
|---|---|
| `/fr/` | Home — hero, product CTAs, clients, sector pages |
| `/fr/home-fr/pochettes-notaires` | Sector landing: lawyer folders (Ordre des Notaires) |
| `/fr/home-fr/pochettes-sante` | Sector landing: medical folders |
| `/fr/gabarits` | Templates overview |
| `/fr/gabarits-videos-tutos/gabarits` | Template references (anchors #gabC #gabE #gabFD #gabG) |
| `/fr/gabarits-videos-tutos/videos` | Videos |
| `/fr/gabarits-videos-tutos/templates-design` | Template & design |
| `/fr/gabarits-videos-tutos/design-creation` | Design & creation |
| `/fr/gabarits-videos-tutos/tutoriels` | Tutorials |
| `/fr/gabarits-videos-tutos/protection-personnalisee-pour-carte-bancaire-sans-contact-anti-rfid` | **Anti-RFID product page** |
| `/fr/tarifs` | Prices (2026/01) |
| `/fr/qualite-eco` | Quality & eco |
| `/fr/qualite-eco/encres-impression` | Inks & printing |
| `/fr/demandez-un-devis` | Quote request → **info@pochette-plastique-personnalisee.com** |
| `/fr/c-g-v` | CGV |
| `/fr/conditions-d-utilisation` | Terms of use |
| `/fr/plan-du-site` | Sitemap (HTML) |

(Same set replicated per language: `/en/`, `/es/` terms-of-use/cgv-en/mapa-del-sitio/terminos-de-uso, etc. — 134 URLs total in sitemap.)

## Real business data (2026/01 pricing, EUR HT)

**0.2 mm PP (200 microns):**

| Qty | /unit HT | Total HT |
|---|---|---|
| 500 | €1.0800 | €540.00 |
| 1000 | €0.9280 | €928.00 |
| 2000 | €0.8410 | €1682.00 |
| >2000 | quote | — |

**0.25 mm PP (250 microns):**

| Qty | /unit HT | Total HT |
|---|---|---|
| 500 | €1.6645 | €832.25 |
| 1000 | €1.3530 | €1,353.00 |
| 2000 | €1.1860 | €2,372.00 |
| >2000 | quote | — |

**Cross-check vs 1913 (plasticfolder.in INR):** ₹99/₹93/₹89 vs €1.08/€0.928/€0.841 → ratio ≈ ₹100 ≈ €1 across all tiers → **same business, domestic-INR vs European-EUR price lists**. 1914 adds a 0.25mm tier absent from the 1913 capture.

## Contacts (real, verified)

- Email: **info@pochette-plastique-personnalisee.com** (quote form target)
- Booking: Calendly `https://calendly.com/pochette-luxcomb/15min`
- Phone: not visible in captured HTML (likely in footer JS or omitted)

## Clients (linked from FR home)

corim-promotion.com · corp.toei-anim.co.jp · eydo.com · in-edit.ch · laurenceperrin-conseil.fr · loti2a.com · messermedical.fr · foxten.fr · (plus plasticfolder.in cross-link)

## SEO inventory

**Strengths:** sitemap present (134 URLs), hreflang declared, 7-language coverage, per-sector landing pages (notaires/sante), anti-RFID product page, CGV + terms per language.

**Gaps:**
1. © 2017 stale copyright (both domains)
2. No JSON-LD (Org/Product/FAQ) — loses rich results
3. No llms.txt / AI-search presence
4. Heavy template (bootstrap + FA + Calendly) — CWV risk
5. No security headers
6. No consent-gated analytics pattern visible
7. `/cz/` hreflang coverage inconsistent
8. Default Joomla robots.txt boilerplate (harmless but unpolished)

## Recommendation (NO rebuild of this domain)

This is the **same business as 1913**. Do NOT build a second v2. Instead:

1. **Extend the 1913 v2** to serve as the single modern site for the whole business:
   - Add `pochette-plastique-personnalisee.com` + `marketing-folder.com` as additional domains on the same Vercel deployment (Vercel multi-domain, 1-click each)
   - Add the **0.25mm PP EUR price tier** + EUR price table to the v2 prices page (FR = EUR, EN can show both)
   - Add the 5 missing languages (ES/IT/PT/DE/CZ) as a **phase 2** — the v2's i18n structure (per-lang folders) extends cleanly
   - Add the 2 sector landing pages (notaires, sante) + anti-RFID product page to the v2
2. **301 map at cutover:** every pochette-plastique-personnalisee.com path → v2 equivalent (see docs/upgrade-plan.md)
3. **Live site stays untouched** until the owner signs off — same 1905/1913 cutover discipline
