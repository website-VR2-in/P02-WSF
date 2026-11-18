# DNS & Email — go-hrm.com

## DNS records (at the registrar, GoDaddy)
| Type | Name | Value | Notes |
|---|---|---|---|
| A | `@` | Vercel gives you (typically `76.76.21.21`) | or use CNAME flattening |
| A | `www` | same | optional www |
| CNAME | `cname` (for www) | `cname.vercel-dns.com` | if using CNAME for www |

Vercel → Domains shows the exact values after you add `go-hrm.com`.

TTL: leave default (3600 s) while switching.

## MX / email
The domain is currently parked; before launch set up the sending mailbox:

| Type | Name | Value |
|---|---|---|
| A | `@` | Vercel (site) |
| MX | `@` | e.g. `mx00.ionstore.com` … (Mailgun / Google Workspace / Zoho) |
| TXT | `@` | SPF: `v=spf1 include:_spf.google.com ~all` (or provider's include) |
| TXT | `@` | DKIM: provider's key |
| TXT | `@` | DMARC: `v=DMARC1; p=none; rua=mailto:dmarc@go-hrm.com` (start none) |

**Action required:** decide the email stack (Google Workspace is the usual pick) and create `hello@go-hrm.com` — it is referenced in the contact page, JSON-LD and llms.txt.

## Verification for search consoles
- GSC: DNS TXT token for `go-hrm.com` (see ga4-gsc-bing.md).
- Bing: same token works, or use the GSC "import" shortcut.
