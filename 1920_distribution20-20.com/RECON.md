# RECON — distribution20-20.com (WSF 1920)

**Verdict : SITE E-COMMERCE DE PRODUCTION EN LIGNE — RECON ONLY, AUCUNE RECONSTRUCTION** (pattern 1906/1913/1914/1918).

## 1. Situation des domaines

| Domaine | Statut | Rôle |
|---|---|---|
| `distribution20-20.com` (WSF 1920) | **NXDOMAIN** — non enregistré (confirmé 1.1.1.1 + 8.8.8.8, pas de NS/SOA) | Variante orthographique probable du nom « Distribution 2020 » ; rien à construire ici |
| `distribution-20-20.com` (nom affiché sur le portail WSF au 2026-11-12) | **NXDOMAIN** — non enregistré (confirmé 1.1.1.1) | Autre variante du même nom ; même conclusion |
| `2020richelieu.com` | **LIVE** — Shopify (CNAME shops.myshopify.com + A 23.227.38.74) | Site e-commerce de production |
| `distribution2020.com` | **À FINALISER** — lié au même store Shopify (www → www.2020richelieu.com → shops.myshopify.com) mais **vérification incomplète** : HTTP 409, échec TLS (certat non émis) | Domaine secondaire en cours de mise en service |

> ⚠️ Action propriétaire n°1 : compléter la vérification du domaine `distribution2020.com` dans l'admin Shopify (Settings → Domains) — les enregistrements requis sont listés dans `docs/shopify-domain-checklist.md`.

## 2. L'entreprise

| Champ | Valeur |
|---|---|
| Nom commercial | **Distribution 2020** |
| Positionnement | « Quincaillerie affiliée à Richelieu » (réseau franchise Richelieu) |
| Localisation | **Québec (Québec), G1P 2J9, Canada** |
| Langue / devise | **FR / CAD** |
| Clientèle | Pro et bricoleurs (« vaste choix pour pros et bricoleurs ») |
| Livraison | Seuil de livraison offerte : **commandes en ligne de 99 $** (QC) |
| Avis | Widget d'avis produits actif (email vérification, review_widget) |

## 3. Stack technique

- **Shopify** (thème Dawn/dark-ish, `myshopify.com.js?v=1794417892&shop=2020richelieu.com`).
- Page d'accueil : **991 KB de HTML** (lourd — à surveiller sur mobile).
- Checkout Shopify natif, shipping configuré (requiredShippingContactFields postalAddress/email/phone).
- Pages : contact, FAQ, terms-of-service, privacy-policy (toutes 200).
- **Pas de JSON-LD LocalBusiness** détecté (gap n°1 — Shopify le génère parfois seulement pour les stores avec adresse ; à ajouter).

## 4. Architecture du catalogue (extraits)

**Collections (20+ vues) :** abrasif, accessoires-blanco, accessoires-datelier, accessoires-declairage, accessoires-de-cuisine, accessoires-de-rangement/garde-robe, accessoires-salle-de-bain, accessoires-pour-bureau, accessoires-pour-coulisses, accessoires-pour-outils-pneumatiques, aerosols, agrafeuses, amenagement-dinterieur, amortisseurs, antimicrobiens-antibacterien, applicateurs, appliques, armoires-de-coin, armoires-du-bas, moulures, quincaillerie-de-batiment (+ ADA), quincaillerie-de-meuble, quincaillerie-de-roulement, liquidation-quincaillerie, quebec-laque…

**Produits (extraits) :** éviers Blanco (Inteos 45, Oovalon 30), crépines Blanco, accessoires Bellwood (miroir, porte-serviettes, sèche-serviettes), moulures PROVA (T aluminium anodisé), paniers de douche Flex (adhésifs), bac adhésif Flex, sèche-linge Udry Ultra, boîte aux lettres PRO DF…

→ Catalogue large : **quincaillerie de bâtiment + de meuble + de roulement + salle de bain (Blanco, Bellwood, Flex) + moulures (PROVA) + éclairage + liquideur/lacquerie**.

## 5. SEO / gaps

| # | Problème | Impact | Correctif |
|---|---|---|---|
| 1 | Pas de JSON-LD LocalBusiness (adresse 2020richelieu.com) | Pas de rich results « store local » | Ajouter via le thème Shopify (snippets) — `docs/seo-storefront.md` |
| 2 | `distribution2020.com` non vérifié (409/TLS) | 2e domaine non servi, risque de confusion | Checklist domaine Shopify |
| 3 | `distribution20-20.com` non enregistré | Le nom WSF pointe vers le vide | Décision propriétaire : enregistrer (301 vers le store) ou corriger le nom dans WSF |
| 4 | HTML 991 Ko sur l'accueil | LCP mobile dégradé possible | Audit PageSpeed ; réduire les sections/reviews inline |
| 5 | Pas de sitemap confirmé visible | Indexation collections/produits à vérifier | GSC → vérifier le sitemap Shopify auto (`/sitemap.xml`) |
| 6 | Annuaires : fiche Google Business Profile à confirmer (QC, G1P) | Visibilité locale | `docs/social-plan.md` |

## 6. Recommandation

1. **Le store 2020richelieu.com reste en place** — aucune reconstruction.
2. **Compléter la vérification distribution2020.com** (1 action Shopify, ~30 min) + décider du sort de distribution20-20.com.
3. **Upgrades en place** : JSON-LD LocalBusiness, GSC + sitemap, PageSpeed, fiche Google Business Profile (runbooks dans `docs/`).
4. Si un jour un site vitrine séparé (hors e-commerce) est demandé : nouveau dossier dédié, pattern 1913.

## 7. Décision WSF

- **1920 distribution20-20.com = 🟦 recon only.** Aucun site ne sera construit dans ce projet.
- Pipeline 10 étapes : N/A (store live Shopify), runbooks « upgrade en place » livrés dans `docs/`.
- **Fin de l'inventaire WSF** : 1901–1920 traités (1919 absent de l'inventaire ; 1902 vr2.in = site company live Google Site, hors périmètre build).
