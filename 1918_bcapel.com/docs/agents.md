# Runbook — Agents IA (B.CAPEL)

## 1. Agent réponses devis (post-mise en place boîte mail)

- Boîte : `contact@bcapel-agencement.fr` (à créer — voir dns-email.md).
- Triage des emails entrants :
  - **Demande de devis** → répondre sous 24 h avec 3 questions (type de commerce, surface, délai) + lien vers la page métier correspondante.
  - **Question métier** (pharmacie, bijouterie…) → renvoyer la page dédiée + proposer un appel.
  - **Avis / remerciement** → remercier + demander l'avis Google.
  - **Autre** → brouillon + file humaine.
- Règle dure : aucun chiffrage, aucun engagement de délai sans validation humaine.

## 2. Agent de veille locale

- Veille hebdomadaire (lundi 09:00) : nouveaux commerces du pays de Montbéliard (ouvertures, déménagements, rénovations) — sources : presse locale (L'Est Républicain, Montbéliard info), fiches SIRENE/annuaires.
- Sortie : 5 opportunités/semaine (nouveaux commerces = prospects) + signaux concurrents.

## 3. Agent avis clients

- Après chaque chantier : SMS/WhatsApp avec lien Google Business Profile (relance 1 seule).
- Collecter l'avis, le publier sur `/avis-clients-…` (avec accord) et dans le feed social.

## 4. Agent contenu social

- Consomme les photos de chantiers → 3 posts/semaine (Facebook + Instagram) avec légende locale (ville + métier).
- Publication auto **uniquement** après validation humaine (file d'approbation).

## Sécurité & limites

- Aucun agent n'accède aux données de chantiers au-delà des photos fournies.
- Aucun agent ne modifie le site Simplebo (côté propriétaire, champ header uniquement pour le JSON-LD).
- Journal des actions dans `logs/agents/` (à créer).
