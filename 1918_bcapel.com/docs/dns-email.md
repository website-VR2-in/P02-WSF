# Runbook — DNS & Email (bcapel.com)

## DNS — bcapel.com

Le domaine est actuellement sur le service **urlredirect** (301 vers www.bcapel-agencement.fr).

**Ne pas toucher le redirect** : c'est le seul lien entre le domaine .com et le site en ligne.

| Type | Nom | Valeur |
|---|---|---|
| A / CNAME | `@` | géré par urlredirect (à ne pas modifier) |

Si le registrar change : recréer le redirect urlredirect `bcapel.com → https://www.bcapel-agencement.fr/` immédiatement après (le service fournit l'ID `z-urlredirect-redirected-for: 2092872200` comme référence).

## DNS — www.bcapel-agencement.fr (site en ligne)

- Hébergé par Simplebo : les enregistrements sont gérés par le service. Ne pas modifier.
- En cas de migration future : voir `migration.md`.

## Email professionnel

Le site affiche le téléphone `03 81 95 15 55` et l'adresse postale (6 impasse Edouard Belin, 25400 Exincourt) ; **pas d'email visible sur le site** (contact = formulaire de devis).

Recommandation : créer une adresse professionnelle visible :

- Option A : `contact@bcapel-agencement.fr` (boîte chez un fournisseur local ou Workspace) + l'afficher sur la page contact + footer.
- Option B : alias `contact@bcapel.com` (si le registrar le permet) — à éviter, le .com est un simple redirect.

Enregistrements à ajouter (selon fournisseur) : SPF, DKIM, MX, DMARC (`p=none` en premier) sur le domaine `.fr`.

## Check-list

- [ ] Redirect bcapel.com intact après toute opération registrar.
- [ ] Boîte `contact@bcapel-agencement.fr` créée + affichée sur le site.
- [ ] SPF/DKIM/DMARC en place sur le domaine `.fr`.
- [ ] Test d'envoi/réception de l'adresse.
