# 1903 · venturenewable.com — Email & DNS runbook (WSF step 2)

Domain: venturenewable.com (verify registrar — currently resolving; confirm owner account before touching DNS).

## 1. Google Workspace
- [ ] Purchase Workspace Business Starter for domain `venturenewable.com` (admin.google.com → setup).
- [ ] Primary alias to create:
  - `contact@venturenewable.com` → forward to `contact@vrew.com` (keep vrew.com as brand mailbox) OR create both as real mailboxes.
  - `info@venturenewable.com`, `investors@venturenewable.com`, `hello@venturenewable.com` (aliases → contact).
- [ ] Set up MFA on the admin account.

## 2. DNS records (replace existing MX/mail records — keep existing A/CNAME for website)
```
MX   venturenewable.com   10   ASPMX.L.GOOGLE.COM.
MX   venturenewable.com   20   ALT1.ASPMX.L.GOOGLE.COM.
MX   venturenewable.com   30   ALT2.ASPMX.L.GOOGLE.COM.
MX   venturenewable.com   30   ALT3.ASPMX.L.GOOGLE.COM.
MX   venturenewable.com   30   ALT4.ASPMX.L.GOOGLE.COM.
TXT  google-site-verification   <code from Workspace setup>
TXT  default                    "v=spf1 include:_spf.google.com ~all"
TXT  dmarc._domainkey           "v=DKIM1; k=rsa; p=<public key>"   (from Workspace → Email → Authenticate sending domain)
TXT  _dmarc                     "v=DMARC1; p=quarantine; rua=mailto:dmarc@venturenewable.com"
```

## 3. Website DNS (point to Vercel after import — step 1)
```
A      venturenewable.com        76.76.21.21
A      www.venturenewable.com    76.76.21.21
CNAME  www → cname.vercel-dns.com   (alternative)
```

## 4. Deliverability test (after records propagate, ~24h)
- [ ] mail-tester.com → send from contact@venturenewable.com → target ≥ 9/10
- [ ] Check MXToolbox: MX, SPF, DKIM, DMARC all green
- [ ] Verify with Google Postmaster Tools

## 5. Update site
- [ ] Switch `mailto:contact@vrew.com` → `mailto:contact@venturenewable.com` in index.html + privacy-policy.html once the mailbox is live (or keep vrew.com if brand mailbox stays primary — decision for founder).
