# 1906 j7w.org — WSF pipeline (steps 2–10), adapted

j7w.org is a **private production app**, not a marketing site. Pipeline steps apply selectively:

| Step | Status | Note |
|---|---|---|
| 1 · Infrastructure (Vercel) | ✅ already live | SPA on j7w.org, API on loginpage-1.vercel.app, apps on gpsapp1 / gp-sapp2. Add uptime checks (hardening #10). |
| 2 · Email/DNS | ✅ domain in use | j7w.org apex live; no public email needed (portal has "Mail the Admin" flow). Keep registrar + Vercel DNS as-is; **do not migrate DNS**. |
| 3 · Analytics (GA4) | ⚠️ recommend against on the auth pages | A login portal with GA4 = PII-adjacent exposure + consent complexity. If product analytics are wanted: use a **privacy-first** tool (Plausible/Umami self-hosted) **only on the post-login portal home**, or skip entirely. |
| 4 · SEO (GSC/Bing) | ❌ not applicable | Private app → robots Disallow all + noindex (hardening #9). No GSC property needed. |
| 5 · Keyword research | ❌ not applicable | No public acquisition goal. |
| 6 · Social channels | ❌ not applicable | Invite-only community; no public social presence. |
| 7 · AI agent — daily digest | ⚠️ optional | If the congregation wants a weekly digest of app news (APP2 launch, new features), it can reuse the 1905 agent pattern with a WhatsApp delivery channel. Not started. |
| 8 · AI agent — auto-post | ❌ not applicable | No public channels. |
| 9 · Backlinks | ❌ not applicable | Noindex by design. |
| 10 · AI search (llms.txt) | ❌ not applicable | Private app; AI crawlers should be blocked (robots Disallow covers it). |

**Net:** steps 1–2 verified in place; 3–10 deliberately out of scope by design (privacy). The value for this site is the hardening program in `hardening.md`.
