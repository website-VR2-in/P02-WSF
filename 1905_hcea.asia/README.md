# 1905 · hcea.asia — HCEA Limited (Hong-Kong Consulting Engineering Asia)

Rebuild of the legacy 2008 site (HTML 4.01, single page + dead menu) into a modern bilingual **FR-first / EN** static site. All business facts are preserved from the original (title, tagline, services, address, phone, vision text, Strategic Marketing division, PPRD positioning).

## Structure
```
index.html            → root: language auto-redirect (FR default, EN if navigator.language is en*)
fr/  index.html       → Accueil (FR) — hero, 3 domaines + Strategic Marketing, risques, stats, HK/PPRD, sister ESA
fr/  services.html    → Services (FR) — 4 pôles détaillés + méthode 3 étapes
fr/  contact.html     → Contact (FR) — formulaire mailto + coordonnées
fr/  privacy.html     → Confidentialité (FR) — PDPO Hong Kong + RGPD
en/  index.html       → Home (EN)
en/  services.html    → Services (EN)
en/  contact.html     → Contact (EN)
en/  privacy.html     → Privacy (EN)
css/style.css         → design (navy/jade/gold, responsive ≤860px, reduced-motion)
js/main.js            → year, cookie consent (gates GA4), lang redirect, mailto form
sitemap.xml           → 8 URLs, hreflang fr/en/x-default
robots.txt
llms.txt              → AI-search summary
vercel.json           → rewrite /UPLOAD/Flyer_HCEA_sourcing.pdf → /assets/flyer.pdf + security headers
docs/                 → pipeline runbooks (steps 2-9)
```

## Business facts (preserved from the 2008 site)
- **HCEA Limited** — Hong-Kong Consulting Engineering Asia, established in Hong Kong (2008)
- Tagline: *« Une ingénierie au cœur de l'Asie pour conforter vos investissements »* / "Engineering support in CHINA"
- 3 domaines : ① énergie solaire & PV, IT (PHP/MySQL/Documentum/Java), matières premières · ② ingénierie industrielle (mécanique, oil & gas) · ③ immobilier & implantation industrielle
- Division **HCEA Strategic Marketing** (stratégie, branding, publicité, SEO/SEM, campagnes)
- Base : 14/F, 185 Wanchai Road, Wan Chai, Hong Kong · +852 2571 3313
- Positionnement : PPRD (8 provinces du Guangdong, 490 M d'habitants), assistance sur site 1–12 h, services sur mesure & confidentiels
- Société sœur : **Energy Stock Alliance** (energy-stock.com, Andorre) — cross-lien présent sur toutes les pages

## To do before go-live (founder)
1. **Email**: `contact@hcea.asia` est un placeholder standard — confirmer/créer la boîte (Workspace, voir `docs/dns-email.md`) avant cutover.
2. **Brochure**: l'ancien PDF `UPLOAD/Flyer_HCEA_sourcing.pdf` est mort (301). Ré-uploader le fichier dans `assets/flyer.pdf` — la rewrite vercel.json préserve l'ancienne URL.
3. **GA4** : remplacer `G-XXXXXXXXXX` (placeholder) par le vrai ID après création de la propriété (step 3).
4. **OG image** : générer `assets/og-cover.jpg` (1200×630) et l'ajouter en `og:image` sur les pages d'accueil.
5. **Cutover** : l'ancien site vit sur le même domaine — prévoir le rollback pendant 1 semaine (voir `docs/dns-email.md`).

## Deploy (step 1)
1. `gh auth login` (token actuel expiré) puis `bash ../push_all.sh` — pousse ce repo avec 1903/1904.
2. Vercel → Import repo `1905_hcea.asia` → Framework: Other → Domain: hcea.asia (apex) — le root `index.html` gère la redirection de langue.
3. DNS : pointer l'apex vers Vercel (CNAME flattening) — **après** avoir préparé le rollback (l'ancien site est hébergé ailleurs).

## Tests effectués
- Serveur local : toutes les URLs répondent 200.
- HTML : balisage équilibré, ancres internes OK, ids uniques, JSON-LD valide, JS valide, sitemap XML valide, vercel.json JSON valide.
