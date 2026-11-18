# 1904 · energy-stock.com — AI agent specs (WSF steps 7 & 8)

Two agents, run on the VR2 stack (Workspace + Apps Script / n8n / cron on the VR2 box).

## Agent A — Daily news digest (step 7)
- **Purpose:** daily brief on energy-storage & battery news relevant to ESA's positioning.
- **Sources:**
  - Battery/lithium-ion price indices (e.g. Argus, SMM, Fastmarkets headlines),
  - EU energy-storage & grid policy (EU Commission, ENTSO-E, national tenders),
  - Shortage / supply-chain signals (lithium, nickel, cells, inverters),
  - Competitor rating/sustainability moves (Recycled Battery, Ecoinvent, battery-passport regulation),
  - EV/storage market news.
- **Output:** 5-bullet digest, ≤150 words, to `su1@vr2.in` + CEO at 07:30 CET, with one-line "action?" verdict.
- **Cadence:** daily 07:30 Europe/Andorra (skip if no material news).

## Agent B — Auto-poster (step 8)
- **Purpose:** publish 2×/week to LinkedIn + X (FR primary, EN secondary), consistently on-brand.
- **Inputs:** keyword set (`docs/keyword-research.md`), content pillars (`docs/social-plan.md`), Agent A news, RENEW SCORE updates, site changelog.
- **Guardrails:**
  - No fabricated ratings or numbers; RENEW SCORE must only cite published scores.
  - No regulated-investment claims (the investment fund is mentioned descriptively only).
  - FR primary, EN secondary; CEO tone — expert, sober, sustainability-first.
- **Flow:** draft → founder approval via email reply (first 4 weeks) → schedule via channel APIs → log to sheet.
- **Cadence:** Tue/Fri 09:00 Europe/Andorra.

## Shared
- Both agents log every run (timestamp, source URLs, output hash) to a Google Sheet.
- Kill switch: a single cell ("AGENT_STATUS: ON/OFF") stops publishing.
