# DNS & email runbook — plasticfolder.in

**The live site's DNS and email are NOT touched by this project.** This is the runbook for the owner at cutover time.

## Current (live) DNS — do not change without owner sign-off

- `plasticfolder.in` + `www` → current Joomla host (A/CNAME) — **leave as-is until cutover**
- MX records → current mail host for `@plasticfolder.in` — **never change** (sale@ and info@ live here)
- SPF/DKIM/DMARC — keep exactly as-is

## Cutover DNS (owner action)

1. Create the Vercel deployment → note the `cname` / `a` record Vercel provides
2. **Staging first:** add a subdomain `v2.plasticfolder.in` (CNAME → Vercel) and run both in parallel
3. After sign-off, point the apex + `www` to Vercel
4. Rollback = revert the two records to the Joomla host (5 min)

## Email (unchanged)

- `sale@plasticfolder.in` (sales) and `info@plasticfolder.in` (quote form) stay on the existing MX
- The v2 quote form targets `info@plasticfolder.in` — same as live
- If a Vercel function is added for the form, send via a transactional provider (Resend/SES) **from the same domain** — requires the domain's DNS TXT/SPF to be updated by the owner (add the provider's include). Until then, the mailto fallback works with no DNS change.

## Verification checklist (post-cutover)

- [ ] `dig +short plasticfolder.in` → Vercel IP
- [ ] `dig +short v2.plasticfolder.in` → Vercel (staging) or removed
- [ ] `dig MX plasticfolder.in` → **unchanged**
- [ ] `dig TXT plasticfolder.in` → SPF/DMARC unchanged (plus transactional-provider include only if a form backend is enabled)
- [ ] Test send to `info@plasticfolder.in` from a new mailbox
- [ ] GA4 receiving (only after consent accept)
- [ ] GSC + Bing sitemap 200 and submitted
