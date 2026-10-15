> **API-PLAT-03** · Fonctionnel · Priorité **P0** · Taille **M** · Phase 1 — MVP

## 🎯 Contexte

L'écran A-06 affiche « Maintenance en cours — retour prévu aujourd'hui vers 23:30 ». Le middleware actuel (src/middleware/maintenance.ts) dépend de la variable MAINTENANCE_MODE (redémarrage nécessaire), ne porte aucune heure de retour et ne pose pas Retry-After.

## ✅ Objectif

Rendre la maintenance pilotable à chaud (fenêtre planifiée datée) avec un contrat 503 exploitable par le mobile et l'admin.

## 🖼️ Maquettes de référence

Toutes les captures ci-dessous sont les maquettes validées (clair / sombre, mobile / tablette ou bureau). Le comportement visuel, les espacements, états et libellés doivent être reproduits à l'identique ; les tokens du design system s'appliquent (aucune couleur en dur).

#### `A-06` — Maintenance planifiée
_Module : Lancement et système_

<table><tr><th align='center'>Mobile · Clair</th><th align='center'>Mobile · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/A/A-06_maintenance-planifiee__phone_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/A/A-06_maintenance-planifiee__phone_light.webp?raw=true' width='230' alt='A-06 Mobile Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/A/A-06_maintenance-planifiee__phone_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/A/A-06_maintenance-planifiee__phone_dark.webp?raw=true' width='230' alt='A-06 Mobile Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/A/A-06_maintenance-planifiee__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/A/A-06_maintenance-planifiee__tablet_light.webp?raw=true' width='330' alt='A-06 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/A/A-06_maintenance-planifiee__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/A/A-06_maintenance-planifiee__tablet_dark.webp?raw=true' width='330' alt='A-06 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Maintenance en cours » · « Univers Barça fait une petite révision pour revenir plus fort. Retour prévu aujourd'hui vers » · « Active les notifications pour être prévenu(e) du retour. » · « Suivre le statut »

**Composants repérés** : `btn`, `card`

</details>

**Issues liées sur ce même écran :** [API-PLAT-01](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-PLAT-01%5D%22) · [API-PLAT-07](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-PLAT-07%5D%22) · [API-PLAT-48](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-PLAT-48%5D%22) · [API-PLAT-55](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-PLAT-55%5D%22) · [MOB-A-01](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-A-01%5D%22) · [MOB-A-08](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-A-08%5D%22) · [MOB-A-09](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-A-09%5D%22) · [MOB-A-17](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-A-17%5D%22) · [MOB-A-18](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-A-18%5D%22) · [MOB-A-19](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-A-19%5D%22)

#### `WH-01` — Santé technique
_Module : Supervision technique_

<table><tr><th align='center'>Bureau · Clair</th><th align='center'>Bureau · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WH/WH-01_sante-technique__desktop_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WH/WH-01_sante-technique__desktop_light.webp?raw=true' width='330' alt='WH-01 Bureau Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WH/WH-01_sante-technique__desktop_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WH/WH-01_sante-technique__desktop_dark.webp?raw=true' width='330' alt='WH-01 Bureau Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WH/WH-01_sante-technique__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WH/WH-01_sante-technique__tablet_light.webp?raw=true' width='330' alt='WH-01 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WH/WH-01_sante-technique__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WH/WH-01_sante-technique__tablet_dark.webp?raw=true' width='330' alt='WH-01 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Santé technique » · « Données Prometheus / OpenTelemetry · actualisation toutes les 30 s » · « 1 h » · « 24 h » · « 7 j » · « Ouvrir Grafana » · « 1 alerte active » · « · File « wallpapers » : 14 jobs en attente depuis 12 min (seuil : 10). » · « Voir la file » · « Statut global » · « Dégradé »

**Composants repérés** : `avatar`, `btn`, `card`

</details>

**Issues liées sur ce même écran :** [ADM-WH-01](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WH-01%5D%22) · [ADM-WH-02](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WH-02%5D%22) · [ADM-WH-03](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WH-03%5D%22) · [ADM-WH-04](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WH-04%5D%22) · [ADM-WH-05](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WH-05%5D%22) · [ADM-WH-13](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WH-13%5D%22) · [ADM-WH-14](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WH-14%5D%22) · [ADM-WH-15](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WH-15%5D%22) · [API-IA-30](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-IA-30%5D%22) · [API-PLAT-12](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-PLAT-12%5D%22) · [API-PLAT-13](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-PLAT-13%5D%22) · [API-PLAT-21](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-PLAT-21%5D%22) · [API-PLAT-22](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-PLAT-22%5D%22) · [API-PLAT-23](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-PLAT-23%5D%22) · [API-PLAT-34](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-PLAT-34%5D%22) · [API-PLAT-48](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-PLAT-48%5D%22) · [API-PLAT-49](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-PLAT-49%5D%22) · [API-PLAT-55](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-PLAT-55%5D%22)

## 📐 Règles de gestion

- Collection platform_settings clé 'maintenance' : { enabled, startsAt, endsAt, messageI18n:{fr,en,es}, notifyOnReturn } ; la maintenance est active si enabled OU (startsAt <= now < endsAt).
- Réponse pendant maintenance : 503, en-tête Retry-After (secondes jusqu'à endsAt, sinon 300), corps { success:false, error:{ code:'MAINTENANCE', message, details:{ endsAt, startsAt }, traceId } }.
- Exemptions : /health*, /config, /version, /metrics, et les routes /admin/* d'un super-admin authentifié (pour pouvoir lever la maintenance).
- Annonce anticipée : GET /config renvoie maintenance.startsAt jusqu'à 24 h avant la fenêtre afin que le mobile puisse afficher un bandeau.
- L'ancienne variable MAINTENANCE_MODE=true reste un interrupteur d'urgence prioritaire (utilisé par docs/DISASTER_RECOVERY.md).
- Toute activation/désactivation est écrite dans le journal d'audit (MAINTENANCE_TOGGLED).

## 🔌 Contrats d'API

| Méthode | Chemin | Description | Requête | Réponse |
| --- | --- | --- | --- | --- |
| `PUT` | `/api/v1/admin/config/maintenance` | Planifie / active / lève la maintenance | {enabled,startsAt,endsAt,messageI18n:{fr,en,es},notifyOnReturn} | {success:true,data:{active:true,endsAt:'2026-10-15T23:30:00Z'}} |

## 🗄️ Données

- platform_settings{key:'maintenance'}

## 🛠️ Tâches

- [ ] Créer le modèle PlatformSetting (key unique, value Mixed, updatedBy) dans src/models/platform.model.ts + index.
- [ ] Créer src/services/maintenance.service.ts avec cache mémoire 5 s + invalidation Redis pub/sub.
- [ ] Réécrire src/middleware/maintenance.ts pour consulter le service, ajouter Retry-After et les exemptions.
- [ ] Ajouter PUT /admin/config/maintenance (super-admin, 2FA) avec validation Joi (endsAt > startsAt, message FR obligatoire).
- [ ] Poser le job BullMQ 'maintenance-reminder' (notification de retour si notifyOnReturn, via NOTIF).
- [ ] Exposer maintenance dans GET /config.
- [ ] Gauge Prometheus ub_maintenance_active (0/1) + alerte si > 2 h.
- [ ] Mettre à jour docs/DEPLOYMENT.md (séquence de déploiement avec maintenance).

## ✔️ Critères d'acceptation

- [ ] Étant donné une fenêtre 22:00-23:30 en cours, quand une route métier est appelée, alors 503 MAINTENANCE avec Retry-After et details.endsAt.
- [ ] Étant donné la maintenance active, quand /health est appelé, alors 200.
- [ ] Étant donné un super-admin authentifié, quand PUT /admin/config/maintenance est appelé en maintenance, alors 200.
- [ ] Étant donné endsAt <= startsAt, alors 422 VALIDATION_ERROR.
- [ ] Étant donné MAINTENANCE_MODE=true dans l'environnement, alors la maintenance est active même si la fenêtre est vide.

## 🧪 Tests à écrire

- [ ] Unitaire : calcul actif/inactif selon horloge simulée.
- [ ] Unitaire : Retry-After arrondi à la seconde.
- [ ] Intégration : exemptions /health /config /version /metrics.
- [ ] Intégration : RBAC sur PUT /admin/config/maintenance.
- [ ] Intégration : entrée d'audit MAINTENANCE_TOGGLED.
- [ ] Sécurité : un utilisateur non admin ne peut pas lever la maintenance.

## ♿ Accessibilité et i18n

- Message de maintenance saisi en FR/EN/ES ; repli sur FR si langue absente.

## 🔗 Dépendances

À réaliser après : `API-PLAT-01` (rechercher le code entre crochets dans le titre des issues).

## 📚 Références

- CDC Global §3.1
- CDC Backend §9.5
- CDC Admin §6.4

## 📦 Définition de terminé

`npm run lint`, `format:check`, `typecheck`, tests unitaires/intégration/sécurité verts ; Swagger (`npm run export:swagger`) à jour ; migration si schéma modifié ; PR vers `dev` ; CI verte.
