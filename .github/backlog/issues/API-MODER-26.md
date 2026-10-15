> **API-MODER-26** · API · Priorité **P1** · Taille **M** · Phase 2 — Communautaire & compétitif

## 🎯 Contexte

Les dictionnaires, seuils de flood, cibles SLA et domaines autorisés doivent évoluer sans redéploiement ; toute modification est auditée.

## ✅ Objectif

Exposer une configuration versionnée et auditée de la modération.

## 🖼️ Maquettes de référence

Toutes les captures ci-dessous sont les maquettes validées (clair / sombre, mobile / tablette ou bureau). Le comportement visuel, les espacements, états et libellés doivent être reproduits à l'identique ; les tokens du design system s'appliquent (aucune couleur en dur).

#### `WG-06` — Barème de sanctions
_Module : Modération communautaire_

<table><tr><th align='center'>Bureau · Clair</th><th align='center'>Bureau · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WG/WG-06_bareme-de-sanctions__desktop_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WG/WG-06_bareme-de-sanctions__desktop_light.webp?raw=true' width='330' alt='WG-06 Bureau Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WG/WG-06_bareme-de-sanctions__desktop_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WG/WG-06_bareme-de-sanctions__desktop_dark.webp?raw=true' width='330' alt='WG-06 Bureau Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WG/WG-06_bareme-de-sanctions__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WG/WG-06_bareme-de-sanctions__tablet_light.webp?raw=true' width='330' alt='WG-06 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WG/WG-06_bareme-de-sanctions__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WG/WG-06_bareme-de-sanctions__tablet_dark.webp?raw=true' width='330' alt='WG-06 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Karim Benali » · « Modérateur » · « Barème de sanctions » · « Cadre de cohérence indicatif — la décision reste celle du modérateur » · « Gravité » · « Exemple » · « 1re occurrence » · « Récidive » · « Faible » · « Propos déplacés isolés » · « Avertissement » · « Suspension 7 jours » · « Moyenne » · « Harcèlement, contenu discriminatoire » · « Suspension 7 à 30 jours » · « Bannissement définitif » · « Élevée » · « Menace, contenu illégal » · « Bannissement immédiat » · « N/A » · « Traçabilité » · « Chaque action enregistre le type de sanction, la gravité retenue et le rang de récidive, pour auditer la cohérence entre modérateurs. » · « Notification de l’utilisateur » · « Toute sanction déclenche une notification explicative (motif général), sans révéler l’identité du rapporteur. »

**Composants repérés** : `avatar`, `card`

</details>

**Issues liées sur ce même écran :** [API-MODER-11](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-MODER-11%5D%22) · [API-MODER-23](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-MODER-23%5D%22) · [API-MODER-32](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-MODER-32%5D%22)

#### `WG-01` — File de signalements
_Module : Modération communautaire_

<table><tr><th align='center'>Bureau · Clair</th><th align='center'>Bureau · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WG/WG-01_file-de-signalements__desktop_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WG/WG-01_file-de-signalements__desktop_light.webp?raw=true' width='330' alt='WG-01 Bureau Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WG/WG-01_file-de-signalements__desktop_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WG/WG-01_file-de-signalements__desktop_dark.webp?raw=true' width='330' alt='WG-01 Bureau Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WG/WG-01_file-de-signalements__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WG/WG-01_file-de-signalements__tablet_light.webp?raw=true' width='330' alt='WG-01 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WG/WG-01_file-de-signalements__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WG/WG-01_file-de-signalements__tablet_dark.webp?raw=true' width='330' alt='WG-01 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Karim Benali » · « Modérateur » · « File de signalements » · « 18 en attente · 6 urgents · tri par gravité automatique » · « Raccourcis clavier » · « Historique » · « En attente » · « En cours » · « Traités » · « Ignorés » · « Rechercher… » · « Type de contenu » · « Gravité » · « Période » · « Auto-évaluation indicative · décision finale humaine » · « Gravité auto » · « Type » · « Origine » · « Contenu signalé » · « Auteur » · « Motif » · « Il y a » · « Urgent »

**Composants repérés** : `avatar`, `btn`, `chip`, `input`

</details>

**Issues liées sur ce même écran :** [API-MODER-01](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-MODER-01%5D%22) · [API-MODER-06](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-MODER-06%5D%22) · [API-MODER-07](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-MODER-07%5D%22) · [API-MODER-08](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-MODER-08%5D%22) · [API-MODER-09](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-MODER-09%5D%22) · [API-MODER-21](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-MODER-21%5D%22) · [API-MODER-23](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-MODER-23%5D%22) · [API-MODER-24](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-MODER-24%5D%22) · [API-MODER-27](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-MODER-27%5D%22) · [API-MODER-29](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-MODER-29%5D%22) · [API-MODER-32](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-MODER-32%5D%22)

## 📐 Règles de gestion

- GET/PUT /admin/moderation/settings : slaTargets, floodThresholds, allowedDomains, suspensionMaxDays (30), appealWindowDays (14).
- CRUD /admin/moderation/terms (term, lang, category, severity, mode) avec import CSV (max 5 000 lignes) ; super-admin uniquement, moderator en lecture.
- Validation Joi des bornes (ex. suspensionMaxDays 1-90) ; versionnage et rollback.
- Chaque modification : AuditLog CONFIG_UPDATED avec before/after ; invalidation du cache dictionnaire via pub/sub Redis.

## 🛠️ Tâches

- [ ] Créer endpoints settings et terms.
- [ ] Créer le modèle ModerationSettings (singleton versionné).
- [ ] Import CSV avec rapport d'erreurs par ligne.
- [ ] Publier l'invalidation Redis.
- [ ] Journaliser avant/après.
- [ ] Annoter Swagger.

## ✔️ Critères d'acceptation

- [ ] Étant donné un PUT SLA urgent=2h, alors le prochain signalement urgent a slaDueAt +2 h.
- [ ] Étant donné un moderator, quand il modifie un terme, alors 403.
- [ ] Étant donné un CSV invalide, alors rapport d'erreurs ligne par ligne sans import partiel.
- [ ] Étant donné une mise à jour, alors le dictionnaire est rechargé en < 60 s.

## 🧪 Tests à écrire

- [ ] Test d'intégration : PUT settings.
- [ ] Test d'intégration : import CSV.
- [ ] Test d'intégration : invalidation de cache.
- [ ] Test d'intégration : audit before/after.

## 🔗 Dépendances

À réaliser après : `API-MODER-06` · `API-MODER-21` · `API-MODER-23` (rechercher le code entre crochets dans le titre des issues).

## 📚 Références

- CDC Admin §4.8
- CDC Admin §6.4

## 📦 Définition de terminé

`npm run lint`, `format:check`, `typecheck`, tests unitaires/intégration/sécurité verts ; Swagger (`npm run export:swagger`) à jour ; migration si schéma modifié ; PR vers `dev` ; CI verte.
