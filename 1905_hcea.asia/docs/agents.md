# 1905 hcea.asia — AI agents (steps 7 & 8)

## Agent A — Daily news digest (step 7)
- **Quand** : chaque jour à 07:30 (Asia/Hong_Kong).
- **Sources** : presse énergie/PV (PV Magazine, SolarPower Europe), presse économie Asie (SCMP, Nikkei Asia), marchés matières premières, régulation PPRD/Chine, énergie.
- **Livrable** : 5–8 bullets FR+EN envoyés à su1@vr2.in (email) — section « énergie & stockage » croisée avec ESA.
- **Stack** : script Python + LLM (récupération RSS/web, synthèse, envoi SMTP Workspace).

## Agent B — Auto-posting (step 8)
- **Quand** : mar. + ven. 09:00 (Asia/Hong_Kong).
- **Flux** : choisir 1 article du blog/site ou 1 insight du digest → rédiger 1 post LinkedIn + 1 post X (tone : expert, sobre, FR 50% / EN 50%).
- **Approval** : **4 premières semaines = approval manuelle du fondateur** (post soumis par email avec bouton approuver/retour) ; ensuite autopostage avec kill-switch.
- **Kill-switch** : cellule `AGENTS` du sheet de pilotage — si `stop` → l'agent ne poste plus (vérification à chaque run).
- **Lien croisé** : 1 post/15j mentionne ESA (energy-stock.com) et inversement.

## Garde-fous
- Jamais de prix/taux de change sans source datée.
- Pas de mention de clients nommés sans accord écrit.
- Toute publication archivée dans `docs/posts-log.md` (créé au 1er post).
