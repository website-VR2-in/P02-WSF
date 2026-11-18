# Runbook — Plan d'amélioration en place (bcapel-agencement.fr, sans migration)

Le site est hébergé sur **Simplebo** (builder managé). Tout ce qui suit se fait **depuis l'espace client Simplebo** du propriétaire, sans toucher l'hébergement.

## Priorité 1 — Confiance & indexation (semaine 1)

1. **GSC** : créer la propriété `https://www.bcapel-agencement.fr/`, vérifier par DNS, soumettre le sitemap (si Simplebo en génère un à `/sitemap.xml` ; sinon le demander au support Simplebo — c'est le point bloquant n°1).
2. **GA4** : créer la propriété, insérer le code sur les pages (Simplebo dispose d'un champ « code à ajouter dans le header » sur chaque page) ; événement `form_submit` sur le formulaire de devis.
3. **Bing** : importer depuis GSC.

## Priorité 2 — Contenu des pages citées (semaines 2-3)

Les 42 pages « service × ville » sont générées ; risque de contenu dupliqué.

- Pour **chaque ville** : ajouter 2-3 paragraphes uniques — code postal, communes voisines servies, 1 exemple de chantier local réel, délai d'intervention local.
- Objectif : ≥ 400 mots uniques par page, ≥ 70 % de différence de texte entre deux villes du même service.
- Ordre : commencer par **Sochaux + Mandeure** (zones les plus peuplées), puis Étaples, Béthancourt, Selencourt, Voujeaucourt, Grand-Charmont.

## Priorité 3 — Structured data (semaine 3)

Simplebo ne gère pas nativement le JSON-LD avancé ; le champ header permet d'insérer du code.

- Pages métier (5) : ajouter `Service` (nom du service, zone desservie) + `FAQPage` (3-4 questions types : délai, devis gratuit, travaux pendant l'exploitation du commerce).
- Page réalisations : `ImageObject` par photo avec caption (avant/après).
- LocalBusiness déjà présent sur contact → le dupliquer sur la page d'accueil (meilleure couverture).

## Priorité 4 — Avis clients (continu)

- La bannière `review_display` existe : brancher la source réelle (Google Business Profile) si disponible.
- Demander un avis Google après chaque chantier (SMS avec lien) ; objectif 1 avis/mois.
- `/avis-clients-…` : ajouter des citations nommées (initiale + ville + type de commerce) — alimente la E-E-A-T locale.

## Priorité 5 — Pages métier (semaine 4)

- Chacune des 5 pages métier (bijouterie, boulangerie-pâtisserie, pharmacie, tabac-presse, autres) : 3 réalisations photo, contraintes réglementaires propres au métier (ex. pharmacie : normes d'implantation ; bijouterie : sécurisation), process en 4 étapes.

## Ce qu'on ne fait PAS

- Pas de changement d'hébergement, pas de nouveau site, pas de nouvelle URL sans 301.
- Pas de suppression de page citée existante (elles ont peut-être des backlinks annuaires).
