# Runbook — Agents IA & automatisation (go-my.com)

## Ce qui est déjà en place

- **Formulaire de contact** : mailto pur (`hello@go-my.com`), aucune donnée envoyée à un serveur — pas de bot à gérer pour l'instant.
- **Bannière de consentement** : clé `gomy_cookie_consent`, conditionne GA4 — conforme RGPD, pas de bot d'analytics.
- **llms.txt** : décrit le produit pour les assistants IA (contenu, tarifs, contact).

## Agents à mettre en place au lancement

### 1. Agent de réponse email (post-lancement)
- Boîte : `hello@go-my.com` (créer d'abord — voir dns-email.md).
- Agent : triage des emails entrants →
  - « essai » → répondre avec le lien d'essai + 3 questions de qualification.
  - « données / export / suppression » → réponse RGPD standard + escalade humaine sous 48 h.
  - « tarifs » → renvoyer la page tarifs + proposer une démo.
  - autre → brouillon de réponse + file d'attente humaine.
- Règle dure : l'agent n'envoie jamais un email de réponse RGPD sans relecture humaine.

### 2. Agent de veille produit
- Veille quotidienne (08:00 Europe/Paris) : nouvelles apps de productivité, features (Notion, Todoist, TickTick, Sunsama, Akiflow), tendances time-blocking.
- Sortie : 5 signaux/jour avec l'impact potentiel pour GoMy (feature à suivre ? menace ? opportunité de contenu ?).

### 3. Agent de contenu social (étape 8 du pipeline)
- Consomme le digest de veille (social-plan.md) → 3 posts/jour FR + EN.
- Publication auto **seulement** sur X après validation humaine (file d'approbation).
- Ne publie JAMAIS de tarif, de délai ou de promesse de support sans validation.

## Sécurité & limites

- Aucun agent n'a d'accès aux données utilisateur GoMy (l'app n'est pas dans ce repo).
- Les agents n'ont pas le droit de modifier le site sans commit humain.
- Journaliser toutes les actions des agents dans un dossier `logs/agents/` (à créer).
