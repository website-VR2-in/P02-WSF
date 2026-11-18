# Runbook — SEO du store Shopify (2020richelieu.com)

## Priorité 1 — LocalBusiness JSON-LD

Le store n'expose pas de structured data de commerce local. À ajouter dans le thème (section header ou snippet `meta-tags.liquid`), une fois l'adresse exacte confirmée par le fondateur :

```json
{
  "@context": "https://schema.org",
  "@type": "HardwareStore",
  "name": "Distribution 2020",
  "description": "Quincaillerie affiliée à Richelieu — pros et bricoleurs",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Québec",
    "addressRegion": "QC",
    "postalCode": "G1P 2J9",
    "addressCountry": "CA"
  },
  "telephone": "+1-XXX-XXX-XXXX",
  "openingHours": "Lu-Ve 08:00-17:00, Sa 08:00-12:00"
}
```

(à compléter : rue exacte, téléphone, horaires réels — non visibles sur les pages publicitaires testées).

## Priorité 2 — Sitemap & indexation

1. Vérifier que `https://2020richelieu.com/sitemap.xml` est servi (Shopify le génère automatiquement : produits, collections, pages, blogs).
2. GSC : propriété `https://2020richelieu.com/` + propriété `https://distribution2020.com/` (après vérification du domaine — voir shopify-domain-checklist.md).
3. Soumettre les 2 sitemaps ; surveiller les pages produits indexées (cible : 90 % du catalogue visible).

## Priorité 3 — Performance (page d'accueil 991 Ko)

- Audit PageSpeed Insights (mobile) : cibler LCP < 2,5 s.
- Causes probables : HTML monolithique, widget d'avis inline, sections multiples.
- Actions Shopify natives :
  - Réduire le nombre de produits par collection affichée sur l'accueil.
  - Différer le widget d'avis (lazy-load) via le thème.
  - Compresser les images (WebP) — vérifier les formats servies depuis les CDN Shopify.

## Priorité 4 — Contenu & longue traîne

- **FAQ** déjà présente : la compléter avec les questions réelles de l'atelier (livraison Québec 99 $, retours, commandes pro).
- **Blog Shopify** : 2 articles/trim. — guides d'installation (moulures PROVA, éviers Blanco), conseils pro vs bricoleur, nouveautés catalogue.
- **Pages collections** : 2-3 phrases uniques par collection (pas de meta description vide) ; cibler « quincaillerie Québec », « quincaillerie Richelieu Québec », « moulures aluminium Québec ».

## Priorité 5 — Avis & E-E-A-T

- Widget d'avis actif : viser ≥ 1 avis produit/20 commandes (email de demande post-livraison).
- Les avis « pros » (artisans) pèsent plus sur la confiance locale — les mettre en avant sur les pages collections.

## Suivi mensuel

- GSC : requêtes top 20, pages indexées, requêtes locales (« quincaillerie québec »).
- Shopify Analytics : sessions, conversion, panier moyen ; corréler avec les pages indexées.
