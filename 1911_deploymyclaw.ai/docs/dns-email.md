# 1911 deploymyclaw.ai — DNS & email (step 2)

## DNS records (Vercel)
| Type | Host | Value | TTL |
|---|---|---|---|
| A | @ | 76.76.21.21 | 300 |
| AAAA | @ | 2606:4700:3030::6815:1515 | 300 |
| CNAME | www | cname.vercel-dns.com | 300 |

## Email — Google Workspace (recommended)
- Domain: deploymyclaw.ai
- Seats: 1–2 (hello@deploymyclaw.ai; support@ alias when the platform is live)
- After purchase: MX + TXT from the Workspace wizard; verify SPF/DKIM propagation.

## Verification
- `dig deploymyclaw.ai A +short` → Vercel IP
- `curl -sI https://deploymyclaw.ai/` → 200 after import
- MX: `dig deploymyclaw.ai MX +short`

## Rollback
- Static site: Vercel deployment history.
- DNS: previous records noted here for 2 weeks.
