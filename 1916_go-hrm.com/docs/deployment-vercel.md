# Deployment — Vercel (go-hrm.com)

## 1. Push the repo
```bash
gh auth login          # one-time
cd /home/realmont/workspace/P02-WSF
bash push_all.sh       # creates su1-hue/1916_go-hrm.com + pushes main
```

## 2. Import on Vercel (owner, 1 click)
1. vercel.com → **Add New… → Project** → import `su1-hue/1916_go-hrm.com`.
2. Framework preset: **Other** (static). Build command: none; output dir: root.
3. Deploy. Vercel reads `vercel.json` (security headers) automatically.
4. Add the production domain `go-hrm.com` (and `www.go-hrm.com` if desired) under Project → Settings → Domains. Vercel issues the cert.

## 3. Verify
- `curl -sI https://go-hrm.com/fr/` → 200, `x-vercel-id` header.
- Security headers present: `X-Content-Type-Options: nosniff`, `X-Frame-Options: DENY`.
- Root `/` redirects to `/fr/` (or `/en/` for English browsers).
- `https://go-hrm.com/sitemap.xml` and `/robots.txt` reachable.

## 4. Rollback
Static site: redeploy previous commit from Vercel → Deployments. No data, no DB.
