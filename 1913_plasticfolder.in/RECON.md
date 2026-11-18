# RECON — plasticfolder.in (live site)

Captured 2026-11-09 via WSF Apps Script bearer read (`/tmp/pf_*.html` snapshots: home 79,626 b; prices; quality-eco 131,493 b; ask-for-a-quote; inks-printing; templates).

## Business

- **What:** custom CMYK-printed plastic (polypropylene) folders, sleeves, pockets, bags — anti-RFID product line
- **Where:** Chennai, India (production); ships Europe + islands/worldwide (UPS, TNT)
- **Market:** FR-primary (Europe), EN secondary; clients incl. Fujifilm, SoftBank Robotics, TOEI Animation, Ordre des Notaires (France), Messer Medical, Doki-Doki, Eurodye CTC, ILL
- **Contacts (real, verified from live site):**
  - Phone: **+91 900 310 7128** (`tel:+919003107128`)
  - Email: **sale@plasticfolder.in** (nav) · **info@plasticfolder.in** (quote form target)
  - Response promise: "same day or next day"
- **Booking:** Calendly widget ("Schedule time with me")

## Live stack

| Layer | Value |
|---|---|
| CMS | **Joomla!** |
| Page builder | com_sppagebuilder (shaper_macro template) |
| Carousel | owl.carousel |
| Icons | Font Awesome 6 + v4 shims |
| Fonts | Google Fonts: Arvo + Raleway |
| Scheduling | Calendly embed |
| Footer | © 2017 (stale) |

## Site structure (live nav)

- Home
- **Quote** (Ask for a quote) — fields: email, first name, last name, phone, company, address, postal code, city, country, message; hidden base64 email template inside the form; target `info@plasticfolder.in`
- **Templates** — "Templates & tips" section: Videos, Templates & design, Design & creation, Tutorials & Tips, anti-RFID
- **Prices** — real price tables (see below)
- **Quality & Eco** — incl. "Inks and printing" sub-page
- **CGV** (terms & conditions)
- **Terms of use**

## Real business data (used verbatim in v2)

### Prices (0.2 mm PP, excl. GST)

| Qty | /unit | Total |
|---|---|---|
| 500 | ₹99 | ₹49,500 |
| 1000 | ₹93 | ₹93,000 |
| 2000 | ₹89 | ₹178,000 |
| >2000 | quote | — |

- Design services: Basic ₹5,000 · Advanced ₹10,000 · Additional → quote
- Delivery: 2–4 weeks; 50 per polybag standard; Europe + islands; UPS/TNT; shipping in quotes

### Template references (live "Templates" page)

| Ref | Size (mm) | Notes |
|---|---|---|
| C00 | 309×220 | rounded 4mm, no thumb tab |
| C01 | 309×220 | rounded 4mm, thumb tab |
| C01-1 | 309×220 | triangular thumb tab |
| C01-E | 309×220 | C01 + label holder welded inside |
| C00b | 305×220 | tab welded on back |
| C01 | 305×220 | tab welded on back |
| C01b-1 | 305×220 | triangular tab welded on back |
| C01b-E | 305×220 | triangular tab + label inside, welded back |
| C20 | 310×240 | rounded 5mm, 100+ pages (or C01 pocket) |
| C21 | 310×240 | rounded 5mm + small pocket, 100+ pages (or C01 pocket) |
| B01 | 378×259 | 250µ bag, die-cut corner pocket |
| B02 | 222×158 | small-format pocket |
| D00 / D01 | 330×220 | wide format, no/with tab |
| G00 / H01 | on request | other standard refs |
| Sur-mesure | custom | any dimension, pockets, button, velcro, anti-RFID |

### Options

Matte/glossy · 50/polybag standard · selective UV · Pantone & metallic (gold, silver) · 3D lenticular · PP business-card pocket · custom polybag · labeling · inks free of mineral/vegetable oils (UV-cure offset)

### Home page CTAs (live)

"100% Transparent / Selective Transparency / Opaque Finish — Buy Now" (3 product CTAs) + videos/tutorials section + Calendly

### Eco/quality page key facts

- Reusable indefinitely; premium; recyclable; neutral & easy to sanitize (medical use)
- 1 tonne recycled PP saves up to 830 L oil
- Recycled PP used; inks free of mineral/vegetable oils
- AGEC law n° 2020-105 / decree n° 2020-1725: MOAH/MOSH thresholds 1% → 0.1% (2024/2025)

## SEO gaps found (live)

1. **No sitemap.xml** — request 404s
2. **© 2017** — stale copyright
3. Old Joomla template (shaper_macro) — no modern responsive/consent patterns
4. No visible hreflang or JSON-LD
5. Calendly + base64 email template — heavy, opaque form pipeline
6. No llms.txt / AI-search presence

## v2 decisions (this folder)

- Build **faithful modernized v2** as upgrade proposal in `1913_plasticfolder.in/`
- **Do NOT touch/replace the live site** — cutover is the owner's decision (1905-style cutover note in `docs/upgrade-plan.md`)
- All prices/contacts/formats are real (copied from live) — only GA4 ID + OG image + form backend are placeholders
- FR kept as primary language (primary market = Europe), EN as secondary — mirrors live FR/EN split
