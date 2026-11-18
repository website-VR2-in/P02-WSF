# 1905 hcea.asia — DNS & email (step 2)

## Domaine
- hcea.asia (apex) — actuellement hébergé sur l'ancien hébergeur (site HTML 4.01 de 2008).
- Migration → Vercel : apex via CNAME flattening (`hcea.asia CNAME cname.vercel-dns.com`), `www` via CNAME `cname.vercel-dns.com`.

## ⚠️ Cutover — rollback 1 semaine
L'ancien site est en production sur le même domaine.
1. Avant le cutover : sauvegarder les fichiers du site legacy (téléchargés dans `backup-legacy/` — fait le 2026-11-09 : homepage, sitemap, flyer mort).
2. Basculer le DNS sur Vercel.
3. Garder l'hébergement legacy actif **7 jours** : en cas de problème, re-pointer le CNAME/NS en retour.
4. Après 7 jours : archiver le legacy.

## Email (Google Workspace)
- Boîte à créer : `contact@hcea.asia` (placeholder dans le site — confirmer).
- Alias conseillés : `info@hcea.asia`, `gaetan@hcea.asia` (CEO), `marketing@hcea.asia` (division Strategic Marketing).
- Enregistrements (à ajouter chez le registrar .asia après bascule Workspace) :
  - MX : `1 ASPMX.L.GOOGLE.COM`, `2 ALT1.ASPMX.L.GOOGLE.COM`, `3-5 ALT2..5`, `6 ASPMX2.L.GOOGLE.COM`
  - TXT SPF : `v=spf1 include:_spf.google.com ~all`
  - DKIM : clé 2048 `google._domainkey.hcea.asia` (console Workspace)
  - DMARC : `_dmarc.hcea.asia` → `v=DMARC1; p=quarantine; rua=mailto:dmarc@hcea.asia; pct=100`
  - CNAME `asiax.eu` → `asiax.l.google.com` (Google Workspace)
- Test deliverability : mail-tester.com / MXToolbox après configuration (score ≥ 9/10).

## Uptime (step 1)
- Pingdom / UptimeRobot sur https://hcea.asia/ (root) et /fr/ — alerte su1@vr2.in.
