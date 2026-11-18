# 1908 secureclawai.com — DNS & email (step 2)

## DNS records (Vercel)
| Type | Host | Value | TTL |
|---|---|---|---|
| A | @ | 76.76.21.21 | 300 |
| AAAA | @ | 2606:4700:3030::6815:1515 | 300 |
| CNAME | www | cname.vercel-dns.com | 300 |

## Email — Google Workspace (recommended)
- Domain: secureclawai.com
- Seats: 1–2 (hello@secureclawai.com; optionally a security@ alias for the "report a security concern" topic)
- After purchase: MX + TXT from the Workspace wizard; verify SPF/DKIM propagation.
- A public security contact (security@ or hello@) also serves as the responsible-disclosure endpoint — put it in the README once real.

## Verification
- `dig secureclawai.com A +short` → Vercel IP
- `curl -sI https://secureclawai.com/` → 200 after import
- MX: `dig secureclawai.com MX +short`

## Rollback
- Static site: Vercel deployment history.
- DNS: previous records noted here for 2 weeks.

## Security note (product-side, post-launch)
- The product itself needs: TLS everywhere, per-tenant isolation, break-glass human access logging, SOC 2 Type I by month 6 — these are Enterprise-plan selling points, so the roadmap should match.
