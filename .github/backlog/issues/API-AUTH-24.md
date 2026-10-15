> **API-AUTH-24** · RGPD · Priorité **P0** · Taille **L** · Phase 1 — MVP

## 🎯 Contexte

`GET /users/me/export` renvoie aujourd'hui un JSON synchrone de 3 collections (user, consents, sessions) : inutilisable pour Q-11 (profil, progression/badges/historique de jeu, conversations Barça AI, Fantasy et La Masia, wallpapers) qui annonce « Demander mon export » puis Q-12 « Ton archive est prête ».

## ✅ Objectif

Transformer l'export en traitement asynchrone suivi par un état.

## 🖼️ Maquettes de référence

Toutes les captures ci-dessous sont les maquettes validées (clair / sombre, mobile / tablette ou bureau). Le comportement visuel, les espacements, états et libellés doivent être reproduits à l'identique ; les tokens du design system s'appliquent (aucune couleur en dur).

#### `Q-11` — Exporter mes données
_Module : Paramètres et compte_

<table><tr><th align='center'>Mobile · Clair</th><th align='center'>Mobile · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/Q/Q-11_exporter-mes-donnees__phone_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/Q/Q-11_exporter-mes-donnees__phone_light.webp?raw=true' width='230' alt='Q-11 Mobile Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/Q/Q-11_exporter-mes-donnees__phone_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/Q/Q-11_exporter-mes-donnees__phone_dark.webp?raw=true' width='230' alt='Q-11 Mobile Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/Q/Q-11_exporter-mes-donnees__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/Q/Q-11_exporter-mes-donnees__tablet_light.webp?raw=true' width='330' alt='Q-11 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/Q/Q-11_exporter-mes-donnees__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/Q/Q-11_exporter-mes-donnees__tablet_dark.webp?raw=true' width='330' alt='Q-11 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Export des données » · « Exporte tes données » · « Reçois une archive de toutes les données associées à ton compte (RGPD). » · « Profil et préférences » · « Progression, badges, historique de jeu » · « Conversations avec Barça AI » · « Équipe Fantasy et La Masia » · « Wallpapers générés » · « Demander mon export »

**Composants repérés** : `btn`, `card`

</details>

**Issues liées sur ce même écran :** [API-AUTH-25](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-AUTH-25%5D%22) · [API-AUTH-45](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-AUTH-45%5D%22)

#### `Q-07` — Gérer mon compte
_Module : Paramètres et compte_

<table><tr><th align='center'>Mobile · Clair</th><th align='center'>Mobile · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/Q/Q-07_gerer-mon-compte__phone_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/Q/Q-07_gerer-mon-compte__phone_light.webp?raw=true' width='230' alt='Q-07 Mobile Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/Q/Q-07_gerer-mon-compte__phone_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/Q/Q-07_gerer-mon-compte__phone_dark.webp?raw=true' width='230' alt='Q-07 Mobile Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/Q/Q-07_gerer-mon-compte__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/Q/Q-07_gerer-mon-compte__tablet_light.webp?raw=true' width='330' alt='Q-07 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/Q/Q-07_gerer-mon-compte__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/Q/Q-07_gerer-mon-compte__tablet_dark.webp?raw=true' width='330' alt='Q-07 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Mon compte » · « Adresse e-mail » · « boris@exemple.com » · « Mot de passe » · « Modifié il y a 3 mois » · « Appareils connectés » · « 3 appareils » · « Mes données » · « Exporter mes données » · « Archive au format JSON » · « Zone sensible » · « Supprimer mon compte » · « Action définitive »

</details>

**Issues liées sur ce même écran :** [API-AUTH-12](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-AUTH-12%5D%22) · [API-AUTH-15](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-AUTH-15%5D%22) · [API-AUTH-19](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-AUTH-19%5D%22) · [API-AUTH-26](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-AUTH-26%5D%22) · [API-AUTH-31](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-AUTH-31%5D%22)

#### `Q-12` — Export prêt
_Module : Paramètres et compte_

<table><tr><th align='center'>Mobile · Clair</th><th align='center'>Mobile · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/Q/Q-12_export-pret__phone_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/Q/Q-12_export-pret__phone_light.webp?raw=true' width='230' alt='Q-12 Mobile Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/Q/Q-12_export-pret__phone_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/Q/Q-12_export-pret__phone_dark.webp?raw=true' width='230' alt='Q-12 Mobile Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/Q/Q-12_export-pret__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/Q/Q-12_export-pret__tablet_light.webp?raw=true' width='330' alt='Q-12 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/Q/Q-12_export-pret__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/Q/Q-12_export-pret__tablet_dark.webp?raw=true' width='330' alt='Q-12 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Export des données » · « Ton archive est prête » · « Elle a été envoyée à boris@exemple.com. Le lien est valable 7 jours. » · « Télécharger (4,2 Mo) » · « Renvoyer l’e-mail »

**Composants repérés** : `btn`

</details>

**Issues liées sur ce même écran :** [API-AUTH-01](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-AUTH-01%5D%22) · [API-AUTH-02](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-AUTH-02%5D%22) · [API-AUTH-03](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-AUTH-03%5D%22) · [API-AUTH-25](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-AUTH-25%5D%22)

## 📐 Règles de gestion

- `POST /users/me/export` crée un `DataExport {userId,status:'pending'|'processing'|'ready'|'failed'|'expired',requestedAt,readyAt,expiresAt,sizeBytes}` et enfile `rgpd:export-user-data` ; 202 avec `exportId`.
- Une seule demande active par utilisateur ; nouvelle demande autorisée 1 fois / 24 h (429 `EXPORT_TOO_SOON`) ; mot de passe ou connexion récente (< 10 min) exigé.
- `GET /users/me/export` renvoie le dernier export `{id,status,requestedAt,readyAt,expiresAt,sizeBytes}` (le mobile interroge toutes les 5 s jusqu'à `ready`, puis passe à Q-12).
- Le job : 5 tentatives, backoff exponentiel, timeout 5 min ; échec définitif → statut `failed` + e-mail d'excuse.
- Compatibilité : l'ancien `GET /users/me/export` synchrone est remplacé (changement documenté dans le changelog API).

## 🔌 Contrats d'API

| Méthode | Chemin | Description | Requête | Réponse |
| --- | --- | --- | --- | --- |
| `POST` | `/api/v1/users/me/export` | Demande un export | (Bearer, connexion récente) | 202 {exportId,status:'pending'} |
| `GET` | `/api/v1/users/me/export` | Dernier export | — | {status:'ready',sizeBytes:4404019,expiresAt} |

## 🗄️ Données

- dataexports (nouveau)

## 🛠️ Tâches

- [ ] Modèle `src/models/data-export.model.ts` (index `{userId:1,requestedAt:-1}`, TTL sur `expiresAt + 1 j`).
- [ ] Service `src/services/rgpd/export.service.ts` (`requestExport`, `getLatest`).
- [ ] Processor `rgpd.processor.ts` : routage par `job.name`.
- [ ] Routes `POST/GET /users/me/export` ; middleware `requireRecentAuth`.
- [ ] Limiteur par utilisateur (Redis 1/24 h).
- [ ] Métriques `rgpd_export_duration_seconds`, `rgpd_export_total{status}`.
- [ ] Swagger + tests.

## ✔️ Critères d'acceptation

- [ ] Étant donné une demande valide, quand `POST /users/me/export`, alors 202 et un job `rgpd` est en file.
- [ ] Étant donné un export `processing`, quand on redemande, alors 409 `EXPORT_IN_PROGRESS`.
- [ ] Étant donné une demande à moins de 24 h de la précédente, alors 429 `EXPORT_TOO_SOON`.
- [ ] Étant donné un job échoué 5 fois, alors statut `failed` et e-mail envoyé.

## 🧪 Tests à écrire

- [ ] Intégration : cycle pending→ready.
- [ ] Intégration : limite 24 h.
- [ ] Unit : machine d'états.
- [ ] Intégration : échec définitif.
- [ ] Sécurité : un export d'un autre utilisateur est inaccessible.

## 🔗 Dépendances

À réaliser après : `API-AUTH-02` · `API-AUTH-16` (rechercher le code entre crochets dans le titre des issues).

## 📚 Références

- CDC Global §10.2
- CDC Backend §3.1, §7

## 📦 Définition de terminé

`npm run lint`, `format:check`, `typecheck`, tests unitaires/intégration/sécurité verts ; Swagger (`npm run export:swagger`) à jour ; migration si schéma modifié ; PR vers `dev` ; CI verte.
