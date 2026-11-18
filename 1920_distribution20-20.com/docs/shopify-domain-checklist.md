# Runbook — Checklist domaines Shopify (Distribution 2020)

## 1. Finaliser `distribution2020.com` (action n°1, ~30 min)

État actuel : le domaine est **lié au store** dans l'admin Shopify (www pointe déjà vers www.2020richelieu.com → shops.myshopify.com), mais la **vérification n'est pas complète** : HTTP renvoie 409 et le certificat TLS n'est pas émis (handshake failure).

1. Admin Shopify → **Settings → Domains** → `distribution2020.com`.
2. Vérifier les enregistrements demandés par Shopify au registrar :
   - `@` (root) : **A** → `23.227.38.74` (déjà présent) + **CNAME** → `shops.myshopify.com`.
   - `www` : **CNAME** → `www.2020richelieu.com` (ou `shops.myshopify.com` selon l'affichage Shopify).
3. Si un enregistrement manque ou est erroné : le corriger chez le registrar (dnsmadeeasy actuellement).
4. Dans l'admin Shopify : **Connect domain** → attendre la vérification (5 min – 24 h de propagation).
5. Shopify émet alors le certificat TLS ; vérifier :
   - `curl -I https://distribution2020.com/` → 200 + en-têtes `server: Shopify`.
   - `curl -I https://www.distribution2020.com/` → 200.
6. Marquer **2020richelieu.com** comme domaine par défaut (le .com sert de 2e URL) — ou l'inverse si le fondateur préfère le .com principal ; **ne pas basculer sans décision** (les URLs produits/partagées utilisent le domaine par défaut).

## 2. Décision sur `distribution20-20.com` / `distribution-20-20.com` (WSF 1920)

Les deux variantes orthographiques (celle de l'inventaire WSF et celle affichée sur le portail au 2026-11-12) sont **non enregistrées** (NXDOMAIN). Deux options, à trancher par le fondateur :

- **Option A (recommandée si le nom « 20-20 » est utilisé commercialement)** : l'enregistrer puis le pointer **301** vers `https://2020richelieu.com/` (redirect simple, comme bcapel.com → .fr) pour consolider le nom de marque.
- **Option B** : ne pas l'enregistrer et corriger le nom du site dans l'inventaire WSF (remplacer « distribution20-20.com » par « distribution2020.com »).

Jusqu'à la décision : rien à faire, le domaine est mort et le store est sain.

## 3. Vérification finale

- [ ] `curl -I https://distribution2020.com/` → 200.
- [ ] GSC : ajouter la propriété `https://distribution2020.com/` + soumettre `/sitemap.xml` (Shopify sert un sitemap auto).
- [ ] Le domaine par défaut du store reste `2020richelieu.com` tant que le fondateur ne décide pas autrement.
