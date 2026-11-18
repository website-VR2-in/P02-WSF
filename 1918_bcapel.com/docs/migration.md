# Runbook — Migration hors Simplebo (seulement si le propriétaire le décide)

Aucune migration n'est planifiée aujourd'hui. Ce document est le plan d'exécution **si** un site v2 est construit ailleurs (ex. dossier WSF dédié) et que le fondateur veut basculer.

## Règle d'or

Chaque URL en ligne doit avoir un 301 vers sa correspondante v2. Jamais de suppression sans redirect. Le domaine `bcapel-agencement.fr` reste la cible du 301 de `bcapel.com`.

## Map 301 des URLs (60)

### Pages cœur (13)

| De (bcapel-agencement.fr) | Vers (v2) |
|---|---|
| `/` | `/` |
| `/presentation-eurl-capel-architecture-et-renovation-de-commerces-pays-de-montbeliard` | `/a-propos/` |
| `/realisations-photos-capel-architecture-et-renovation-de-commerces-pays-de-montbeliard` | `/realisations/` |
| `/avis-clients-eurl-capel-architecte-agenceur-de-commerces-pays-de-montbeliard` | `/avis-clients/` |
| `/contact-devis-gratuit-architecte-agenceur-de-commerces-pays-de-montbeliard` | `/contact/` |
| `/actualites` | `/actualites/` |
| `/autres-amenagements-pays-de-montbeliard` | `/amenagements/autres/` |
| `/protegeons-la-nature` | `/engagement-environnemental/` |
| `/mentions-legales` | `/mentions-legales/` |
| `/plan-du-site` | (supprimer, sitemap à la place) |

### Pages métier (5)

| De | Vers |
|---|---|
| `/amenagement-renovation-bijouterie-pays-de-montbeliard` | `/amenagements/bijouterie/` |
| `/amenagement-renovation-boulangerie-patisserie-pays-montbeliard` | `/amenagements/boulangerie-patisserie/` |
| `/amenagement-renovation-pharmacie-pays-de-montbeliard` | `/amenagements/pharmacie/` |
| `/amenagement-renovation-tabac-presse-pays-de-montbeliard` | `/amenagements/tabac-presse/` |
| `/autres-amenagements-pays-de-montbeliard` | `/amenagements/autres/` |

### Pages service × ville (42) — pattern

Services : `agrandissement-et-extensions`, `amenagement-au-handicap`, `amenagement-interieur-decorateur-d-interieur`, `bureau-d-etudes`, `fabrication-mobiliers-sur-mesure`, `maitrise-d-oeuvre-tout-corps-d-etats`.
Villes : `bethoncourt-25200`, `etupes-25460`, `grand-charmont-25200`, `mandeure-25350`, `seloncourt-25230`, `sochaux-25600`, `voujeaucourt-25420`.

| De | Vers |
|---|---|
| `/<service>-<ville>` | `/<service>/` + paramètre local `?ville=<ville>` **ou** `/<service>/<ville>/` (à décider selon volume de contenu local) |

> Recommandation : si le contenu local par ville reste faible, regrouper en pages service seules + section villes (évite le thin-content) et mettre le 301 des 42 pages citées sur la page service correspondante.

## Procédure de cutover

1. v2 en place sur domaine temporaire (`preview.bcapel.com` ou Vercel preview), contenu + 301 mappés vérifiés par crawl.
2. Bascule DNS de `www.bcapel-agencement.fr` (A/CNAME) vers le nouvel hébergement.
3. Vérifier : crawl complet, 0 page 404, 301 corrects, JSON-LD servi, GSC → « demander l'indexation » sur les 10 principales URLs.
4. Simplebo : **ne pas résilier avant 30 jours** (backup des photos/contenu).
5. bcapel.com : le redirect urlredirect reste tel quel (il pointe sur le .fr, pas sur l'hébergement).

## Rollback

Rétablir le DNS Simplebo ; le site v2 reste disponible sur son domaine temporaire. Fenêtre de rollback : illimitée tant que Simplebo est actif.
