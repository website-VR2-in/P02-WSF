# 1907 salesclawai.com — DNS & email (step 2)

## DNS records (add at the registrar / move to Google Cloud DNS)
| Type | Host | Value | TTL |
|---|---|---|---|
| A | @ | 76.76.21.21 | 300 |
| AAAA | @ | 2606:4700:3030::6815:1515 | 300 |
| CNAME | www | cname.vercel-dns.com | 300 |

(Standard Vercel A/AAAA + www CNAME.)

## Email — Google Workspace (optional but recommended)
- Domain: salesclawai.com
- Seats: 1 (hello@salesclawai.com)
- After purchase: MX + 2 TXT records from the Workspace setup wizard; wait for SPF/DKIM propagation (up to 24 h).
- The site's contact form is mailto → hello@salesclawai.com; **create this mailbox before launch**.

## Verification
- `dig salesclawai.com A +short` → Vercel IP
- MX check: `dig salesclawai.com MX +short`
- `curl -sI https://salesclawai.com/` → 200 after Vercel import

## Rollback
- Static site on Vercel: rollback = previous deployment (Vercel keeps deployment history).
- DNS: keep the previous NS/A records noted here for 2 weeks post-cutover.
