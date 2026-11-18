# 1906 · j7w.org — RECON (no rebuild)

**Verdict: live production app — NOT rebuilt.** Replacing this domain would destroy a working, invitation-only congregation portal. This folder documents the app, its architecture, and hardening recommendations instead of shipping a new site.

## What j7w.org is
A **private multi-app portal** (React/Vite SPA) for a Jehovah's Witnesses congregation ("JW" + 7-digit congregation numbers). Access is **invite-only**:

### Auth flow (from bundle analysis, 2026-11-09)
1. **Login**: email + password (min 6 chars), Google OAuth, "remember me", forgot-password reset link.
2. **Registration**: WhatsApp number → **5-digit code** sent to the number → set password → profile (name) → **admin approval required** ("Please wait for admin approval before logging in").
3. **Admin panel**: pending / approved / rejected invites, total users per congregation, "Mail the Admin", fetch admin email + send notification.

### Congregation model
- Congregation **number = exactly 7 digits** (JW convention), name, **language**, illustration.
- "Checking congregation info…", "Congregation Not Found", "No admin found for this congregation."

### Portal home (post-login)
App cards ("Launch" / "Main Application"):
| Card | Target |
|---|---|
| APP1 — **PropertyScope** | https://gpsapp1.vercel.app/ (React SPA) |
| APP2 | https://gp-sapp2.vercel.app (Next.js, "Create Next App" title — appears to be an early build) |
| APP3 | (string "APP3 - DESC" present; target not resolved in probe) |

Plus a "Global Connectivity" section and `/auth/google` redirect endpoint.

### Backend
- API: `https://loginpage-1.vercel.app/api` (axios, baseURL; a `http://localhost` fallback string remains in the production bundle).
- Tokens: session/login tokens validated server-side ("Failed to decode token", "Login token not received from server.").

## Current state of the domain (2026-11-09)
- ✅ Live SPA on j7w.org (apex), 200 OK.
- ❌ No `robots.txt`, no `sitemap.xml` (SPA falls back to index.html for all paths).
- ❌ No analytics (no GA4/gtag in the bundle).
- ⚠️ Title "Login Application" — no SEO value (fine for a private app, but a descriptive title is better).
- ⚠️ API origin + app targets are exposed in the client bundle (inherent to SPAs; see hardening).

## Why no rebuild
1. The portal is the **only entry point** to the congregation's apps — destructive migration risks locking out users with invite-only access.
2. No source repo access found in the VR2 ecosystem for this app; rebuilding the auth/invite system from scratch would duplicate the backend (loginpage-1.vercel.app) without the data (invites, users, congregations).
3. The WSF pipeline value here = **governance + hardening**, delivered in `docs/`.

## Files
- `docs/hardening.md` — security & quality recommendations (priority-ordered).
- `docs/pipeline.md` — WSF steps 2–10 adapted to a private production app (what applies, what doesn't, and why).
