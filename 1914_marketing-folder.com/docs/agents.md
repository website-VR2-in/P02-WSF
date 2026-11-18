# AI agents — marketing-folder.com / pochette-plastique-personnalisee.com (WSF steps 7 & 8)

**Shares the 1913 agent pair** (same business, one brand). This doc adds the European/EUR + sector layer to each agent's inputs.

## Agent 1 — Daily news digest (step 7)

**Purpose:** brief the owner daily on EU-market signals for custom plastic-folder / PP-packaging printing.

**Schedule:** daily 08:00 Europe/Paris (FR primary market).

**Sources (search, last 24h) — EU-focused (supplements 1913's list):**
- EU packaging regulation: **PPWR** (Packaging & Packaging Waste Regulation) timeline, AGEC enforcement, MOAH/MOSH limits
- French legal/medical sector news (Ordre des Notaires, hospital procurement) — feeds sector pages
- EU flexible/PP packaging news (Packaging Europe, Flexibles Europe)
- Anti-RFID / contactless-payment security news (feeds anti-RFID product page)
- Printing tech: UV-cure offset, lenticular, metallic inks
- India→Europe logistics: Chennai port, UPS/TNT rates, customs/GST

**Output (to owner, email/chat):**
- 5–8 bullets: headline + one-line "why it matters"
- 1 action suggestion (e.g. "PPWR date confirmed → update quality-eco page + social post")
- Flag any price/lead-time-relevant logistics change

**Guardrails:** read-only; no posting; public web only.

## Agent 2 — Auto-post X/LinkedIn/blog (step 8)

**Purpose:** run the merged social queue (1913 + 1914 EU/sector posts) without daily manual effort.

**Inputs:**
- Merged 60-post queue (1913's 30 + 1914's 30 EU/sector posts)
- `llms.txt` (single source of truth: EUR + INR prices, formats, contacts, 7 languages)

**Behavior:**
- **LinkedIn (primary):** 2×/week from the merged queue; FR-first (EU market), EN alternate. Hook + 3–5 bullets + CTA to `/quote.html` + 3 hashtags.
- **X:** syndicate the top LinkedIn post of the day (280 chars, EN).
- **Blog:** optional post-cutover; otherwise social-only.
- **Sector rotation:** ensure notaires/sante/anti-RFID each appear ≥1×/week when in queue.

**Guardrails:**
- **Owner approval mode by default** — agent drafts, owner one-tap approves. Auto after 2 clean weeks.
- Never invent prices/clients/claims — only facts in `llms.txt` / `RECON.md`
- Approved hashtags only; no competitor naming
- Respect rate limits; notify owner on any API error

## Setup (owner)

1. LinkedIn Company Page + X account (or existing)
2. API access (LinkedIn Marketing API page-level; X API v2 write)
3. Point both agents at the WSF digest + auto-post pipelines
4. Start Agent 2 in approval mode
