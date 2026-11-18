# 1906 j7w.org — Hardening & quality recommendations

Ordered by priority. None of these require downtime; all are incremental.

## P0 — auth & data
1. **5-digit code brute-force protection**: a 5-digit SMS/WhatsApp code = 100 000 combos. Add per-phone rate limiting (max ~3 sends/hour, max 5 verifications/15 min) and lockout on repeated failure. Verify server-side; don't rely on client.
2. **Password policy**: min 6 chars is weak. Move to 10–12 minimum (or NIST-style: length ≥ 8 + breach-list check). Keep the Google OAuth path as the "strong" route.
3. **Session hardening**: confirm tokens are httpOnly + Secure + SameSite=Strict cookies (or short-lived bearer with refresh rotation). Add absolute session timeout + idle timeout for admin sessions.
4. **Admin panel authorization**: every admin endpoint must re-check the caller's admin role server-side (not just token validity). Log admin actions (invite approve/reject, user list) with actor + timestamp.
5. **WhatsApp code privacy**: the code should be sent with the user's own phone number as sender context; never include it in a URL or log line.

## P1 — hygiene (visible in the public bundle)
6. **Remove `http://localhost` fallback** from the production build (axios baseURL fallback) — it leaks dev config and can misroute requests in edge cases.
7. **Descriptive title**: "Login Application" → e.g. "Congregation Portal — Secure Login".
8. **Security headers** (on the Vercel project hosting the SPA): `Strict-Transport-Security`, `X-Content-Type-Options: nosniff`, `Referrer-Policy: strict-origin-when-cross-origin`, `Content-Security-Policy` (start report-only: default-src 'self'; connect-src 'self' https://loginpage-1.vercel.app https://accounts.google.com; frame-src https://accounts.google.com; style-src 'self' https://fonts.googleapis.com 'unsafe-inline'; font-src https://fonts.gstatic.com; img-src 'self' data:).
9. **robots.txt**: `User-agent: * Disallow: /` + no sitemap — a private portal should be explicitly noindexed (also add `<meta name="robots" content="noindex">` in the SPA head).

## P2 — resilience & ops
10. **Backend redundancy**: the whole portal hangs on `loginpage-1.vercel.app`. Add a health endpoint + uptime check (UptimeRobot, alert to su1@vr2.in) and document the rebuild path (source repo location, env vars, DB).
11. **APP2 (gp-sapp2.vercel.app)** still carries the default "Create Next App" title/description — finish or retire it to avoid confusion with APP1.
12. **Data export**: admin should be able to export congregation user lists (GDPR-style right, even for a private community — good hygiene if any EU members).
13. **Rate limiting on login** (per IP + per account) and CAPTCHA after N failures.
14. **Dependency audit**: `npm audit` in the SPA repo; the bundle ships React 18-era + axios — keep patched.

## Monitoring (WSF step 1 adjunct)
- Uptime: j7w.org, loginpage-1.vercel.app/api/health, gpsapp1.vercel.app.
- Alerting: su1@vr2.in (email + WhatsApp via the portal's own channel if available).
