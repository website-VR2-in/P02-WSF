# Runbook — DNS & Email (go-my.com)

## DNS (chez le registrar, après import Vercel)

| Type | Nom | Valeur | Notes |
|---|---|---|---|
| A | `@` | `76.76.21.21` | IP Vercel |
| CNAME | `www` | `cname.vercel-dns.com` | |

- Supprimer/tolérer les enregistrements existants du parking GoDaddy si le registrar les garde (le parking openresty/S3 est en HTTP uniquement, HTTPS non servi).
- Propagation : 5 min – 24 h selon les résolveurs ; vérifier avec `dig +short A go-my.com` et `dig +short CNAME www.go-my.com`.
- HSTS : Vercel le met en place après vérification du domaine ; prévoir la précharge plus tard seulement si l'ensemble du domaine est fiable.

## Email — hello@go-my.com

Boite de réception **à créer avant le go-live** (placeholder aujourd'hui).

Option A — Vercel Email (si disponible sur le plan) :
1. Domain → Create Email → `hello@go-my.com`.
2. Ajouter les enregistrements SPF/DKIM/DMARC affichés (voir plus bas).

Option B — fournisseur d'email professionnel (Google Workspace / Zoho / Proton) :
1. Souscrire sur `go-my.com`.
2. Ajouter les enregistrements fournis par le fournisseur.

## Enregistrements email (à finaliser selon le fournisseur)

| Type | Nom | Valeur |
|---|---|---|
| TXT | `@` | `v=spf1 include:... ~all` (selon fournisseur) |
| TXT | `selector1._domainkey` | clé DKIM du fournisseur |
| TXT | `_dmarc` | `v=DMARC1; p=none; rua=mailto:dmarc@go-my.com` (à durcir en `p=quarantine`) |
| MX | `@` | MX du fournisseur |

## Check-list go-live email

- [ ] Test d'envoi d'un mail de `hello@go-my.com` vers une boîte externe (score délivrabilité OK).
- [ ] Réponse au formulaire contact de la page /fr/contact.html (mailto pré-rempli).
- [ ] DMARC en `p=none` avec reporting, puis durcissement après 30 jours de logs.
