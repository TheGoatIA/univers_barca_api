> **API-PLAT-50** · Infrastructure · Priorité **P1** · Taille **M** · Phase 1 — MVP

## 🎯 Contexte

docs/DISASTER_RECOVERY.md fixe RPO 24 h et RTO 2 h et un test de restauration trimestriel, mais il est manuel et non mesuré. CDC Backend §9.6 : restauration à blanc sur staging pour valider l'intégrité des sauvegardes.

## ✅ Objectif

Prouver régulièrement que les sauvegardes sont restaurables et mesurer RTO/RPO réels.

## 📐 Règles de gestion

- Workflow planifié (1er du mois) : télécharge la dernière sauvegarde production chiffrée, la restaure sur une instance MongoDB éphémère, exécute migrate:status, un jeu de requêtes d'intégrité (comptes de collections, index, TTL) et les smoke tests API.
- Mesures consignées : durée de restauration (RTO), âge de la sauvegarde (RPO), taille, résultat ; tendance dans un fichier docs/dr-journal.md.
- Données production restaurées uniquement dans un environnement isolé sans accès Internet sortant ni e-mail/FCM actifs (RGPD) puis détruit ; aucun log de contenu.
- Scénario complet « perte du VPS » (nouveau VPS via setup-vps.sh, restauration, bascule DNS) joué une fois avant la production, objectif RTO 2 h.
- Echec du test = issue GitHub automatique P0.

## 🛠️ Tâches

- [ ] Écrire scripts/restore-drill.sh et le workflow monthly-restore-drill.yml (runner auto-hébergé ou VPS staging).
- [ ] Requêtes d'intégrité scripts/integrity-check.ts.
- [ ] Désactiver les intégrations sortantes en mode DR (DR_MODE=true : pas d'e-mail, FCM, football sync).
- [ ] Ouverture automatique d'issue en cas d'échec.
- [ ] Rédiger le scénario « perte du VPS » étape par étape avec durées cibles.
- [ ] Mettre à jour le journal dr-journal.md.

## ✔️ Critères d'acceptation

- [ ] Étant donné la dernière sauvegarde, alors le drill restaure et les smoke tests passent.
- [ ] Étant donné DR_MODE=true, alors aucun e-mail ni notification ne part.
- [ ] Étant donné un échec de restauration, alors une issue P0 est créée.
- [ ] Étant donné le test annuel de perte du VPS, alors le RTO mesuré est inférieur à 2 h.

## 🧪 Tests à écrire

- [ ] Drill sur sauvegarde de staging.
- [ ] Unitaire: DR_MODE bloque les envois.
- [ ] Script: integrity-check détecte une collection vide.
- [ ] Revue: journal mis à jour.

## 🔗 Dépendances

À réaliser après : `API-PLAT-49` (rechercher le code entre crochets dans le titre des issues).

## 📚 Références

- CDC Backend §9.6
- docs/DISASTER_RECOVERY.md

## 📦 Définition de terminé

`npm run lint`, `format:check`, `typecheck`, tests unitaires/intégration/sécurité verts ; Swagger (`npm run export:swagger`) à jour ; migration si schéma modifié ; PR vers `dev` ; CI verte.
