# Migration — Joomla → v2 static

Scope: what to export from the live Joomla site and where it lands in v2. **Nothing in this doc modifies the live site; all steps are read/export or happen on the new Vercel deployment.**

## 1. Media export (read-only from Joomla)

| Asset | Joomla location (typical) | v2 target |
|---|---|---|
| Template files (PDF/CDR) per reference C00…D01, G00/H01 | `media/com_sppagebuilder/` or `images/` | `assets/templates/<ref>.pdf` |
| Video tutorials (mp4/webm) | same | `assets/videos/` (or YouTube embeds) |
| Product photos (CMYK samples, transparency finishes) | `images/` | `assets/img/` (optimize to WebP) |
| OG/social images | — | `assets/og-cover.jpg` (1200×630) |

Method: Joomla admin → Media Manager → select → Download (zip). No DB writes.

## 2. Content mapping

| Live page | v2 page | Notes |
|---|---|---|
| Home | `fr/index.html`, `en/index.html` | hero + 6 capabilities + formats + clients + CTA (already faithful) |
| Prices | `fr/prices.html`, `en/prices.html` | real price table copied verbatim |
| Templates (+ tips/videos/design/tutorials/anti-RFID) | `fr/templates.html`, `en/templates.html` | full reference list; videos section = anchor after media export |
| Quality & Eco (+ inks & printing) | `fr/quality-eco.html`, `en/quality-eco.html` | AGEC/decree facts copied |
| Ask for a quote | `fr/quote.html`, `en/quote.html` | same 10 fields; target `info@plasticfolder.in` |
| CGV / Terms of use | owner decision: port to `fr/cgv.html` or keep on Joomla | flagged in README |

## 3. Form backend

- **Now (v2 as-is):** `js/main.js` builds a `mailto:info@plasticfolder.in` link from the 10 fields — zero server dependency, works on any static host
- **At cutover (pick one):**
  - **Vercel function** `/api/quote` — POST JSON → forward to `info@` + `sale@` via SMTP (Resend/SES); keep the mailto as fallback
  - **Existing Joomla contact** — call its component API if one is exposed (usually not; prefer function)
  - **Third-party** (Formspree/Web3Forms) — fastest, external dependency
- Spam protection at cutover: Cloudflare Turnstile (static, cookie-free)

## 4. Calendly

Live site embeds Calendly ("Schedule time with me"). v2 ships without it to stay cookie-free; at cutover re-embed via the official widget **after consent** (same gate as GA4 in `js/main.js`).

## 5. DNS & analytics cutover

See `upgrade-plan.md` (301 map, staging subdomain) and `dns-email.md` (DNS records, MX unchanged).
