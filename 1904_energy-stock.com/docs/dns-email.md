# 1904 · energy-stock.com — Email & DNS runbook (WSF step 2)

Domain: energy-stock.com (Joomla site currently live — confirm registrar owner before touching DNS).

## 1. Google Workspace (or keep existing provider)
- [ ] Decide: Workspace for `energy-stock.com` (recommended for EU data residency) or keep current host mail.
- [ ] Create/verify: `contact@energy-stock.com` (already in use), plus aliases `info@`, `hello@`, `gaetan@` (CEO).
- [ ] MFA on all accounts.

## 2. DNS records
```
MX   energy-stock.com   10   ASPMX.L.GOOGLE.COM.
MX   energy-stock.com   20   ALT1.ASPMX.L.GOOGLE.COM.
MX   energy-stock.com   30   ALT2.ASPMX.L.GOOGLE.COM.
MX   energy-stock.com   30   ALT3.ASPMX.L.GOOGLE.COM.
MX   energy-stock.com   30   ALT4.ASPMX.L.GOOGLE.COM.
TXT  default            "v=spf1 include:_spf.google.com ~all"
TXT  dmarc._domainkey   "v=DKIM1; k=rsa; p=<public key>"
TXT  _dmarc             "v=DMARC1; p=quarantine; rua=mailto:dmarc@energy-stock.com"
TXT  google-site-verification <code>
```

## 3. Website DNS (after Vercel import — step 1)
```
A      energy-stock.com    76.76.21.21
A      www.energy-stock.com 76.76.21.21
```
⚠️ **Migration cutover:** the Joomla site lives on the same domain. Cut over only after Vercel deployment is verified (all 8 pages + sitemap + robots return 200). Keep the old hosting's DNS as a rollback plan for 1 week.

## 4. Deliverability
- [ ] mail-tester.com ≥ 9/10
- [ ] MXToolbox: MX/SPF/DKIM/DMARC green
- [ ] Google Postmaster Tools
