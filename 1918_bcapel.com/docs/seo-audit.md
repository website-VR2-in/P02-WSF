# Audit SEO — bcapel-agencement.fr (recon 2026-11-11)

## Points forts

1. **301 propre** bcapel.com → www.bcapel-agencement.fr (signal de consolidation de domaine correct).
2. **LocalBusiness JSON-LD** sur la page contact (adresse, ville, code postal, téléphone).
3. Titres et pages alignés sur l'intention locale (« agencement … pays de Montbéliard », « … Sochaux 25600 »).
4. Présence annuaires pro (4 annuaires locaux actifs).
5. Page d'avis clients dédiée + bannière review.

## Faiblesses (par priorité)

| # | Problème | Impact | Correctif |
|---|---|---|---|
| 1 | Sitemap.xml non confirmé (builder Simplebo) | Indexation des 60 pages incomplète | Demander au support Simplebo ou servir le sitemap via sous-domaine |
| 2 | 42 pages citées probablement dupliquées (thin-content) | Risque de non-indexation / pénalisation | Différencier par ville (voir upgrade-plan.md §2) |
| 3 | Pas de canonical visible sur pages citées | Duplication inter-villes | Ajouter canonical par page |
| 4 | JSON-LD limité (LocalBusiness seul, 1 page) | Rich results partiels | Service + FAQPage sur les 5 pages métier, LocalBusiness aussi sur l'accueil |
| 5 | GA4/GSC non confirmés | Zéro mesure | Runbook upgrade-plan.md §1 |
| 6 | `/actualites` probablement vide | Aucune preuve de fraîcheur | 1 article/mois (chantier réalisé) |
| 7 | Pas de blog de fond (normes pharmacie, sécurité bijouterie…) | Manque la longue traîne | 2 articles/trim. |

## Technique

- HTML : généré Simplebo, 158 Ko sur la page d'accueil (lourd pour mobile — vérifier le LCP) ; images servies depuis `files.sbcdnsb.com` (multi-redevances de CDN OK).
- Mobile : thème visitor mobile dédié (séparation desktop/mobile) — vérifier les CLS.
- `tel:` links présents (conversion mobile OK).
- Pas de trace de bannière cookies (GA4 absent → pas de cookies tiers majeurs ; **à confirmer**).

## Suivi mensuel (après correctifs)

- GSC : requêtes, pages indexées (cible : 55-60 pages indexées sur 60), avis (cible : +1 avis/mois).
- GA4 : sessions, formulaires devis soumis (cible : ≥ 10 devis/mois en local).
