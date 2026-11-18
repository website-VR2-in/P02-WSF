# 1903 · venturenewable.com — AI agent specs (WSF steps 7 & 8)

Two agents are specified here; both run on the VR2 stack (Google Workspace + Apps Script / n8n / cron jobs on the VR2 box), writing to the site's CMS-free static pipeline or to social channels.

## Agent A — Daily news digest (step 7)
- **Purpose:** daily brief on Indian renewable-energy news that affects VREW's positioning.
- **Inputs (sources):**
  - MNRE (ministry of new & renewable energy) releases,
  - India solar PV tenders (IREDA, state DISCOMs),
  - Net-metering / open-access policy changes by state,
  - Solar module price index,
  - Competitor moves (Tata Power Solar, Waaree, Loomsolar, SunCulture).
- **Output:** 5-bullet digest, 150 words max, delivered to `su1@vr2.in` + founder email at 08:00 IST, with a one-line "action needed?" verdict.
- **Cadence:** daily 08:00 Asia/Kolkata (skip if no material news).
- **Implementation sketch:** cron → LLM call with fetched RSS/HTML → Gmail send (Apps Script or n8n node).

## Agent B — Auto-poster (step 8)
- **Purpose:** publish a 2–3x/week post to X + LinkedIn + (future) blog, consistently on-brand.
- **Inputs:** keyword set from docs/keyword-research.md, content pillars from docs/social-plan.md, last 7 days of news (Agent A output), site changelog.
- **Guardrails:**
  - No fabricated numbers; ROI figures must cite the 8% target as a target.
  - Compliance: no SEBI-regulated investment promises — always "target", "asset-backed", "compliance note".
  - English posts; optional Mandarin version for the HK investor audience (mission video precedent).
- **Flow:** draft → (optional) founder approval via email reply for the first 4 weeks → schedule via channel APIs → log to sheet.
- **Cadence:** Mon/Wed/Fri 10:00 IST.

## Shared
- Both agents log every run (timestamp, source URLs, output hash) to a Google Sheet for audit.
- Kill switch: a single cell in the sheet ("AGENT_STATUS: ON/OFF") stops publishing.
