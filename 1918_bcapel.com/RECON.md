# RECON — bcapel.com (WSF 1918)

**Verdict : SITE DE PRODUCTION EN LIGNE — RECON ONLY, AUCUNE RECONSTRUCTION** (pattern 1906/1913/1914). Le site vit sur `www.bcapel-agencement.fr` ; `bcapel.com` n'est qu'un redirect.

## 1. Ce que fait bcapel.com

- `bcapel.com` → **301** (service `urlredirect`, en-tête `z-urlredirect-redirected-for: 2092872200`) → `https://www.bcapel-agencement.fr/`.
- Aucune page propre à bcapel.com : tout le contenu est sur le domaine `.fr`.

## 2. Entreprise (données réelles, issues du site)

| Champ | Valeur |
|---|---|
| Nom commercial | B.CAPEL |
| Entité | **EURL CAPEL** |
| Activité | Agencement d'intérieur de commerces — architecte-agenceur, depuis **1991** |
| Zone | Pays de Montbéliard (Doubs, 25) |
| Adresse | 6 impasse Edouard Belin, 25400 Exincourt |
| Téléphone | 03 81 95 15 55 |
| Maps | https://goo.gl/maps/NykZqn9wZWNVJbLo8 |
| Annuaires | bonjour-artisan.net, bonjour-les-pros.fr, renovation-service.fr, travaux-a-la-pelle.fr |

## 3. Stack technique

- **Hébergement/builder : Simplebo** (simplebo.net / assets.sbcdnsb.com / files.sbcdnsb.com) — site « géré » français pour TPE.
- CMS managé : aucune main sur le HTML, pas de déploiement possible côté propriétaire sans passer par Simplebo.
- Thèmes visitor desktop + mobile servés depuis `assets.sbcdnsb.com`.
- JSON-LD **LocalBusiness** présent sur la page contact (adresse, ville 25400, téléphone) — c'est le seul structured data visible.
- `tel:` links, bannière avis-clients (review_display), slider, map (Google Maps embed).

## 4. Architecture du site (~60 pages)

**Pages cœur (13) :** `/`, `/presentation-eurl-capel-…`, `/realisations-photos-…`, `/avis-clients-…`, `/contact-devis-gratuit-…`, `/actualites`, `/autres-amenagements-pays-de-montbeliard`, `/protegeons-la-nature`, `/mentions-legales`, `/plan-du-site`.

**Pages métier (5) :** agencement-renovation × { **bijouterie**, **boulangerie-patisserie**, **pharmacie**, **tabac-presse** }, + autres-amenagements.

**Pages service × ville (42) :** 6 services × 7 villes :
- Services : `agrandissement-et-extensions`, `amenagement-au-handicap`, `amenagement-interieur-decorateur-d-interieur`, `bureau-d-etudes`, `fabrication-mobiliers-sur-mesure`, `maitrise-d-oeuvre-tout-corps-d-etats`.
- Villes : Béthancourt 25200, Étaples 25460, Grand-Charmont 25200, Mandeure 25350, Selencourt 25230, Sochaux 25600, Voujeaucourt 25420.

C'est une **stratégie local-SEO classique** (pages citées générées par le builder) : forte couverture requête « service + ville », mais contenu probablement dupliqué entre villes.

## 5. SEO — ce qui marche / ce qui manque

**Ce qui marche :**
- 301 propre bcapel.com → .fr (pas de duplication de domaine).
- LocalBusiness JSON-LD sur la page contact.
- Titres/pages ciblant « service + pays de Montbéliard / ville ».
- Présence annuaires professionnels (4+).

**Gaps identifiés :**
- **Pas de sitemap.xml** visible (à confirmer sur le serveur Simplebo) ; pas de robots.txt visible.
- **Pas de hreflang** (pas besoin, monolingue FR — OK), mais **pas de canonical** confirmé sur les pages citées → risque de contenu dupliqué inter-villes.
- JSON-LD limité à LocalBusiness : pas de `Service`, `FAQPage`, `ImageObject` sur les réalisations.
- Pages citées probablement **faiblement différenciées** (même texte, ville changée) — risque thin-content.
- Pas de GA4/GSC visibles (à confirmer par le propriétaire).
- Pas de blog/actualités exploité (page `/actualites` existe mais à vérifier le remplissage).

## 6. Recommandation (pas de rebuild)

1. **Le site en ligne reste en place.** bcapel.com continue de rediriger vers bcapel-agencement.fr.
2. **Upgrade en place (si le propriétaire le souhaite) :**
   - Vérifier sitemap/robots chez Simplebo ; si absents, demander l'ajout ou servir via CNAME secondaire.
   - Différencier les pages villes (1-2 paragraphes locaux par ville : code postal, communes voisines, exemples de chantiers).
   - Ajouter JSON-LD `Service` + `FAQPage` sur les 5 pages métier.
   - GSC + GA4 (runbooks dans `docs/`).
3. **Si migration hors Simplebo un jour** : plan de migration avec 301 par page dans `docs/migration.md` (60 URLs mappées).

## 7. Décision WSF

- **1918 bcapel.com = 🟦 recon only.** Aucun site ne sera construit dans ce projet.
- Le pipeline 10 étapes : étapes 1-10 = **N/A (site live géré Simplebo)**, sauf runbooks « upgrade en place » livrés dans `docs/`.
- Si le fondateur demande un site v2 moderne : le faire dans un **nouveau dossier dédié** avec cutover par le propriétaire (pattern 1913).
