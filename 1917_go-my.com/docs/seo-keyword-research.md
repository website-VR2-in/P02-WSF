# Runbook — Recherche de mots-clés & SEO (go-my.com)

## Intention de recherche cible

Le produit est une app de productivité **personnelle** (pas d'équipe). Les requêtes cibles sont donc « outil pour MOI » :

| Cluster | Requêtes FR (volume estimé bas) | Requêtes EN |
|---|---|---|
| Planification | planifier sa semaine, organiser sa semaine, template planning hebdo | plan my week, weekly planning template |
| Time-blocking | time blocking, time blocking template | time blocking, time blocking app |
| App de tâches | application de tâches gratuite, meilleure app to do | to do app, task app |
| Objectifs | app objectifs, tracker objectifs mensuels | goal tracker app, habit tracker |
| Vie privée (différenciateur) | app productivité RGPD, to do app sans pub, app qui respecte la vie privée | privacy focused task app, no ads to do app |

## Mots-clés déjà couverts sur le site

- **fr/** : « planification hebdo », « time-blocking », « objectifs trimestriels », « habitudes », « notes », « rappels », « RGPD », « vie privée », « gratuit », « tarifs ».
- **en/** : « weekly planning », « time-blocking », « goals », « habits », « notes », « reminders », « GDPR », « privacy », « free ».

## Pages à créer dans le blog (ordre prioritaire)

1. « Comment planifier sa semaine en 10 minutes » (FR + EN) — pille : planifier sa semaine / plan my week.
2. « Time-blocking : le guide complet » (FR + EN) — pille : time blocking.
3. « Les 5 meilleures apps de productivité respectueuses de la vie privée » (FR + EN) — pille : app productivité RGPD / privacy focused task app.
4. « Habitudes : comment tenir ses objectifs » (FR + EN) — pille : tracker habitudes.

Chaque article doit pointer vers `/fr/fonctionnalites.html` ou `/en/features.html` (interne) et le lien d'essai.

## Technique — déjà en place

- hreflang fr / en / x-default (x-default → FR, site FR-first) sur les 12 pages + sitemap.
- JSON-LD : Organization + SoftwareApplication + WebSite + FAQPage (index), Product + AggregateOffer (tarifs), ContactPage, AboutPage, WebPage.
- Sitemap (12 URLs) + robots.txt + llms.txt.
- Root `/` en noindex (redirection JS) — ne pas indexer.

## Backlinks (étape 9 du pipeline)

1. Annuaire indie : Product Hunt (lancement de l'app, pas du site), AlternativeTo, Hacker News Show HN.
2. Blogs de productivité FR : guest posts sur « planifier sa semaine », « time-blocking ».
3. Réponse à des requêtes existantes sur le cluster « vie privée » (Reddit r/productivity, r/GetHelpWithGmail… non — r/GoogleApps, forums RGPD).
4. Presse tech FR (Le Monde, 01net, Silicon.fr) au lancement de l'app — kit de presse à préparer dans `docs/press-kit/`.

## Suivi

- GSC : rapports *Requêtes* + *Pages* hebdomadaires.
- Position cible à 90 jours : top 20 sur 3 requêtes du cluster principal.
