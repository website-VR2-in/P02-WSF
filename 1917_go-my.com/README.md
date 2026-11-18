# GoMy — go-my.com (WSF 1917)

Site marketing bilingue (FR-first + EN) pour **GoMy**, le centre de commandement personnel : tâches & projets, planification hebdo (time-blocking), objectifs trimestriels, habitudes, notes & capture, rappels & calendrier. Hébergement 100 % UE, RGPD by design, zéro pub.

## Structure

```
1917_go-my.com/
├── index.html          # noindex, redirection JS fr/en selon la langue du navigateur
├── fr/                 # 6 pages : index, fonctionnalites, tarifs, a-propos, contact, confidentialite
├── en/                 # 6 pages : index, features, pricing, about, contact, privacy
├── css/style.css       # thème indigo/ambre, motif « go-arrow »
├── js/main.js          # année, GA4 conditionné au consentement, formulaire mailto
├── sitemap.xml         # 12 URLs + hreflang
├── robots.txt
├── llms.txt
├── vercel.json         # en-têtes de sécurité
└── docs/               # 6 runbooks de lancement
```

## Stack

HTML/CSS/JS statiques, zéro dépendance. Déploiement Vercel (import du repo, 1 clic).

## Avant le lancement — à confirmer

| Élément | Valeur actuelle | Statut |
|---|---|---|
| Email de contact | `hello@go-my.com` | ⚠️ placeholder — créer la boîte avant le go-live |
| Tarifs | Free / Pro 4,99 €/mois / Unlimited 9,99 €/mois | ⚠️ PROPOSED — valider avant publication |
| GA4 | `G-XXXXXXXXXX` | ⚠️ placeholder — remplacer après création de la propriété (docs/ga4-gsc-bing.md) |
| Image OG | `assets/og-cover.jpg` (1200×630) | ⚠️ placeholder — produire et déposer dans `assets/` |
| Raison sociale / entité légale | mentionnée « à l'ouverture » dans la page confidentialité | ⚠️ compléter fr/confidentialite.html + en/privacy.html |
| App elle-même | site marketing uniquement — l'app GoMy n'est pas dans ce repo | ℹ️ à créer séparément (web + iOS/Android) |

## Liens

- Sitemap : `sitemap.xml` · robots : `robots.txt` · llms : `llms.txt`
- Runbooks : `docs/deployment-vercel.md`, `docs/dns-email.md`, `docs/ga4-gsc-bing.md`, `docs/social-plan.md`, `docs/agents.md`, `docs/seo-keyword-research.md`
