# Runbook — Agents IA (Distribution 2020)

## 1. Agent support client (post-mise en place boîte mail)

- Boîte : à créer (voir shopify-domain-checklist.md — le store n'expose pas d'email visible sur les pages testées).
- Triage des emails entrants (Shopify Flow ou agent sur la boîte) :
  - **Commande / suivi** → répondre avec le lien de suivi + délais livraison (seuil 99 $ offert QC).
  - **Question produit** (moulures, éviers, quincaillerie) → renvoyer le lien produit/collection + proposition d'alternative.
  - **Commande pro / volume** → escalade humaine + brouillon de réponse commerciale.
  - **Retour / réclamation** → brouillon + file humaine (règle dure : aucun geste commercial sans validation).

## 2. Agent avis produits

- Post-livraison : email/SMS de demande d'avis (le widget d'avis est déjà actif — l'agent alimente la demande, pas la collecte).
- Relance unique à J+7 si pas de réponse.
- Objectif : ≥ 1 avis / 20 commandes ; mettre en avant les avis « pro » sur les collections.

## 3. Agent de veille catalogue

- Veille hebdomadaire (lundi 09:00) :
  - Nouveautés fournisseurs (Blanco, Bellwood, PROVA, Flex) → propositions d'ajout catalogue avec photos/descriptions.
  - Prix concurrents (autres quincailleries Richelieu du Québec) sur les 30 produits les plus vendus.
- Sortie : 5 signaux/semaine (ajouts catalogue, alertes prix, ruptures à surveiller).

## 4. Agent contenu social

- Consomme les nouveautés catalogue + photos produits → 3 posts/sem. (Facebook + Instagram) avec légende locale (Québec, usage pro/brico).
- Publication auto **uniquement** après validation humaine (file d'approbation).
- Ne publie jamais de prix de liquidation sans validation (risque de guerre des prix locale).

## Sécurité & limites

- Aucun agent n'accède au catalogue Shopify en écriture (lectures via l'API uniquement si accord du fondateur).
- Aucun agent ne modifie le thème ni les politiques (terms/privacy) sans validation humaine.
- Journal des actions dans `logs/agents/` (à créer).
