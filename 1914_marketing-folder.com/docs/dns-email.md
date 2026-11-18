# DNS & email runbook — marketing-folder.com / pochette-plastique-personnalisee.com

**The live site's DNS and email are NOT touched by this project.** This is the owner's runbook at cutover time.

## Current (live) DNS — do not change without owner sign-off

- `marketing-folder.com` + `www` → `15.197.162.184` (A) → 301 → `pochette-plastique-personnalisee.com`
- `pochette-plastique-personnalisee.com` + `www` → current Joomla host
- MX → current mail host for `@pochette-plastique-personnalisee.com` (info@ lives here) — **never change**
- SPF/DKIM/DMARC — keep as-is

## Cutover DNS (owner action)

1. 1913 v2 deployment → note the Vercel `cname`/`a` record
2. **Staging first:** `v2.pochette-plastique-personnalisee.com` (CNAME → Vercel), run both in parallel
3. After sign-off:
   - `pochette-plastique-personnalisee.com` + `www` → Vercel
   - `marketing-folder.com` + `www` → Vercel directly (drop the 301 hop to shorten the chain)
4. Rollback = revert records to current host (5 min); `marketing-folder.com` reverts to the 301 → pochette chain

## Email (unchanged)

- `info@pochette-plastique-personnalisee.com` (EU quote target) stays on existing MX
- `info@plasticfolder.in` + `sale@plasticfolder.in` (1913) unchanged
- v2 quote form: EU visitors → `info@pochette-plastique-personnalisee.com`; IN visitors → `info@plasticfolder.in` (branch by detected lang/region or show both)
- If a Vercel function backend is added, send via a transactional provider **from the same domain** — owner must add the provider's SPF include. Until then, mailto works with no DNS change.

## Verification checklist (post-cutover)

- [ ] `dig +short pochette-plastique-personnalisee.com` → Vercel
- [ ] `dig +short marketing-folder.com` → Vercel (direct, no 301 hop)
- [ ] `dig MX pochette-plastique-personnalisee.com` → **unchanged**
- [ ] `dig TXT` → SPF/DMARC unchanged (plus provider include only if form backend enabled)
- [ ] Test send to `info@pochette-plastique-personnalisee.com`
- [ ] GA4 receiving (only after consent accept), all 3 domains in one property
- [ ] GSC + Bing: all 3 domains verified, shared sitemap 200 + submitted
- [ ] 301 map spot-checked (10 legacy paths)
