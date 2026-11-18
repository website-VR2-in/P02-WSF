# Analytics & Search Consoles — go-hrm.com

## GA4
1. Create property **Go HRM** (EU data residency if desired: analytics.google.com → Admin → Data Settings → Data residency).
2. Web stream for `go-hrm.com`.
3. Replace `G-XXXXXXXXXX` in all 13 pages (root stub has no GA4) — single find/replace:
   `grep -rl "G-XXXXXXXXXX" . | xargs sed -i 's/G-XXXXXXXXXX/G-REALSENSEDID/g'`
4. Consent model is already wired: the gtag script stays `disabled` until the user accepts (`ghrm_cookie_consent` in localStorage). No consent-mode API needed for this simple gating.
5. Suggested events to add later (in main.js): `demo_request` on contact form submit, `trial_start` on CTA clicks.

## Google Search Console
1. search.google.com/search-console → add **Domain** property `go-hrm.com`.
2. Verify with the provided **DNS TXT** record (add at GoDaddy).
3. Submit `https://go-hrm.com/sitemap.xml`.
4. Watch *Pages* report: ensure all 12 URLs are indexed and hreflang alternates are detected.

## Bing Webmaster
1. bing.com/webmasters → add site → "Import from Google Search Console" (OAuth) is fastest.
2. Submit the same sitemap.

## KPIs to watch (first 30 days)
- Impressions/clicks on FR vs EN.
- Bounce on `/fr/` and `/en/` (target < 60 %).
- Contact form opens (mailto clicks) — proxy for demo requests.
