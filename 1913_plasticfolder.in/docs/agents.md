# AI agents — plasticfolder.in (WSF steps 7 & 8)

Two scheduled agents. Both read-only against the web; write only to the owner's own channels.

## Agent 1 — Daily news digest (step 7)

**Purpose:** brief the owner daily on market signals relevant to custom plastic-folder / PP-packaging printing.

**Schedule:** daily 08:00 Europe/Paris (aligns to the FR primary market).

**Sources (search, last 24h):**
- Flexible/PP packaging industry news (Euromonitor, Packaging Europe, Flexibles Europe)
- Printing tech: UV-cure offset, lenticular, metallic inks
- EU sustainability regulation: AGEC, PPWR (Packaging & Packaging Waste Regulation), MOAH/MOSH limits
- India export/logistics: Chennai port, UPS/TNT rate changes, GST updates
- Competitor moves: custom plastic folder makers in EU/IN

**Output (to owner, email/chat):**
- 5–8 bullets, each: headline + one-line "why it matters to plasticfolder.in"
- 1 "action suggestion" (e.g. "PPWR timeline → add a compliance note to quality-eco page")
- Flag any price/lead-time-relevant logistics change

**Guardrails:** read-only; no posting; no external data collection beyond public web.

## Agent 2 — Auto-post X/LinkedIn/blog (step 8)

**Purpose:** turn the social-plan content into scheduled posts without daily manual effort.

**Inputs:**
- The 30-post starter list in `social-plan.md` + any new product/case-study the owner adds
- `llms.txt` (single source of truth for business facts — prices, formats, contacts)

**Behavior:**
- **LinkedIn (primary):** post 2×/week from the queue; FR-first, EN secondary (alternate days). Each post: hook line + 3–5 bullets + CTA to `/quote.html` + 3 hashtags.
- **X:** syndicate the top LinkedIn post of the day (shortened to 280 chars, EN).
- **Blog:** (optional, post-cutover) publish 1/week as a `/blog/` entry; until then, skip blog and keep posts on social only.

**Guardrails:**
- **Owner approval mode by default** — agent drafts, owner approves (one-tap) before publish. Switch to auto after 2 weeks of clean drafts.
- Never invent prices/clients/claims — only use facts present in `llms.txt` / `RECON.md`.
- No hashtags beyond the approved set; no competitor naming.
- Respect each platform's rate limits; stop and notify owner on any API error.

## Setup (owner)

1. Create LinkedIn Company Page + X account (or use existing)
2. Provide API/app access (LinkedIn Marketing API for the page; X API v2 write scope)
3. Point both agents at the WSF daily digest + auto-post pipelines
4. Start Agent 2 in approval mode
