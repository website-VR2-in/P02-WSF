# Runbook — Déploiement Vercel (go-my.com)

## 1. Importer le repo

1. `vercel.com/new` → importer `su1-hue/1917_go-my.com`.
2. Framework preset : **Other** (site statique). Build command : laisser vide. Output directory : laisser vide (racine).
3. Le repo contient `vercel.json` avec les en-têtes de sécurité (nosniff, DENY, strict-origin, Permissions-Policy) — pas d'action requise.

## 2. Relier le domaine

1. Project → Settings → **Domains** → `go-my.com` (et `www.go-my.com`).
2. Vercel affiche les enregistrements DNS à créer (voir `dns-email.md`).
3. Attendre la propagation ; le badge du domaine passe à **Verified**.
4. Le redirect `http → https` est actif par défaut sur Vercel.

## 3. Vérifier après déploiement

- `curl -I https://go-my.com/` → 200, en-têtes de sécurité présents.
- `curl -s https://go-my.com/sitemap.xml | grep -c "<loc>"` → 12.
- Root `/` : redirection JS vers `/fr/` (ou `/en/` si navigateur anglophone). Le root est `noindex` par design.
- Bannière cookies : accept → le script `ga4-snippet` reçoit son `data-src` ; refuse → reste `about:blank`.
- Formulaire contact : `hello@go-my.com` + subject « Demande — go-my.com » (FR) / « Request — go-my.com » (EN) — ouvrir le mailto depuis un vrai client email de test.

## 4. Environnements

Aucun env var requis (site statique, formulaire mailto). Si un backend d'essai est ajouté plus tard, créer un env var **distinct** entre Preview et Production.

## 5. Cutover / rollback

- Le domaine go-my.com est actuellement un parking GoDaddy : aucun contenu à préserver.
- Rollback = redéployer une version antérieure dans Vercel (Deployments → ⋯ → Promote).
- Le repo est la source de vérité ; tout changement passe par un commit.
