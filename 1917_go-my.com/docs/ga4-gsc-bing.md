# Runbook — GA4, Search Console & Bing (go-my.com)

## 1. GA4 — remplacer le placeholder

Le site embarque déjà le snippet conditionné au consentement (clé `gomy_cookie_consent`) avec l'ID `G-XXXXXXXXXX`.

1. `analytics.google.com` → Administrateur → Créer une propriété → **GoMy** (site web), fuseau `Europe/Paris`.
2. Données de flux → vérifier `go-my.com` + `www.go-my.com`.
3. Copier l'ID mesurer (`G-…`) et le remplacer **dans les 13 fichiers HTML** (12 pages + le root n'en a pas) :
   - `sed -i 's/G-XXXXXXXXXX/G-REEL/g' fr/*.html en/*.html` (après sauvegarde du repo).
4. Commit + déploiement. Vérifier dans **Admin → Diagnostic de données** que les événements arrivent (uniquement pour les visiteurs ayant accepté la bannière — comportement par design RGPD).
5. Recommandé : événements `trial_start`, `form_submit` une fois l'app reliée (futures étapes).

## 2. Google Search Console

1. `search.google.com/search-console` → Propriété → **Préfixe d'URL** `https://go-my.com/`.
2. Vérification par **DNS TXT** (recommandé, survit aux changements) ou par fichier.
3. Soumettre `sitemap.xml` (12 URLs) — les hreflang fr/en/x-default sont déjà déclarés.
4. Après 24–72 h : vérifier le rapport *Pages* ; le root noindex doit apparaître comme tel.
5. À surveiller : couverture des pages FR (x-default → FR, donc le FR est la langue de référence pour GSC).

## 3. Bing Webmaster Tools

1. `bing.com/webmasters` → Ajouter un site `https://go-my.com/` → vérification DNS.
2. Importer depuis Google Search Console (Bing permet l'import direct de la propriété GSC).
3. Soumettre le sitemap.
4. Le rapport Bing est moins riche que GSC ; s'appuyer sur GSC pour le diagnostic, Bing pour la couverture supplémentaire.

## Check-list

- [ ] GA4 : ID réel dans les 12 pages, événements visibles après consentement.
- [ ] GSC : propriété vérifiée, sitemap soumis, 0 erreur de couverture.
- [ ] Bing : site importé, sitemap soumis.
