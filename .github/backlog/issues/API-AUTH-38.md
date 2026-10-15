> **API-AUTH-38** · Sécurité · Priorité **P1** · Taille **M** · Phase 1 — MVP

## 🎯 Contexte

WA-07 « Session expirée — Tu as été déconnecté(e) après 8 h d'inactivité. Ton travail non enregistré… sera restauré. » ; WA-01 « Rester connecté 8 h ». `AdminSession` dure 8 h absolues depuis le login (SESSION_MS) sans glissement : `refreshAdmin` met à jour `lastActivityAt` mais ne prolonge pas. CDC Admin §6.6 : un super-admin liste et révoque les sessions.

## ✅ Objectif

Implémenter l'inactivité de 8 h et l'administration des sessions.

## 🖼️ Maquettes de référence

Toutes les captures ci-dessous sont les maquettes validées (clair / sombre, mobile / tablette ou bureau). Le comportement visuel, les espacements, états et libellés doivent être reproduits à l'identique ; les tokens du design system s'appliquent (aucune couleur en dur).

#### `WA-07` — Session expirée — inactivité
_Module : Authentification et erreurs_

<table><tr><th align='center'>Bureau · Clair</th><th align='center'>Bureau · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WA/WA-07_session-expiree-inactivite__desktop_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WA/WA-07_session-expiree-inactivite__desktop_light.webp?raw=true' width='330' alt='WA-07 Bureau Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WA/WA-07_session-expiree-inactivite__desktop_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WA/WA-07_session-expiree-inactivite__desktop_dark.webp?raw=true' width='330' alt='WA-07 Bureau Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WA/WA-07_session-expiree-inactivite__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WA/WA-07_session-expiree-inactivite__tablet_light.webp?raw=true' width='330' alt='WA-07 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WA/WA-07_session-expiree-inactivite__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WA/WA-07_session-expiree-inactivite__tablet_dark.webp?raw=true' width='330' alt='WA-07 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Back-office » · « Gérer l'univers » · « des culés. » · « Contenu, modération et supervision de l'écosystème Univers Barça — réservé à l'équipe. » · « Accès restreint · connexion chiffrée · actions journalisées » · « Session expirée » · « Tu as été déconnecté(e) après 8 h d’inactivité. Ton travail non enregistré n’a pas été perdu : il sera restauré. » · « E-mail » · « camille.durand@univers-barca.app » · « Mot de passe » · « Se reconnecter »

**Composants repérés** : `btn`, `input`

</details>

**Issues liées sur ce même écran :** [ADM-WA-01](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WA-01%5D%22) · [ADM-WA-02](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WA-02%5D%22) · [ADM-WA-11](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WA-11%5D%22) · [ADM-WA-12](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WA-12%5D%22) · [ADM-WA-17](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WA-17%5D%22) · [ADM-WA-18](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WA-18%5D%22)

#### `WA-01` — Connexion administrateur
_Module : Authentification et erreurs_

<table><tr><th align='center'>Bureau · Clair</th><th align='center'>Bureau · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WA/WA-01_connexion-administrateur__desktop_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WA/WA-01_connexion-administrateur__desktop_light.webp?raw=true' width='330' alt='WA-01 Bureau Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WA/WA-01_connexion-administrateur__desktop_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WA/WA-01_connexion-administrateur__desktop_dark.webp?raw=true' width='330' alt='WA-01 Bureau Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WA/WA-01_connexion-administrateur__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WA/WA-01_connexion-administrateur__tablet_light.webp?raw=true' width='330' alt='WA-01 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WA/WA-01_connexion-administrateur__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WA/WA-01_connexion-administrateur__tablet_dark.webp?raw=true' width='330' alt='WA-01 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Back-office » · « Gérer l'univers » · « des culés. » · « Contenu, modération et supervision de l'écosystème Univers Barça — réservé à l'équipe. » · « Accès restreint · connexion chiffrée · actions journalisées » · « Connexion » · « Accède à ton espace d’administration. » · « E-mail professionnel » · « camille.durand@univers-barca.app » · « Mot de passe » · « •••••••••••• » · « Rester connecté 8 h » · « Mot de passe oublié ? » · « Se connecter » · « Authentification à deux facteurs requise pour les super-admins. »

**Composants repérés** : `btn`, `input`

</details>

**Issues liées sur ce même écran :** [ADM-WA-01](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WA-01%5D%22) · [ADM-WA-02](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WA-02%5D%22) · [ADM-WA-03](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WA-03%5D%22) · [ADM-WA-17](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WA-17%5D%22) · [ADM-WA-18](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WA-18%5D%22) · [ADM-WA-19](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WA-19%5D%22) · [API-AUTH-32](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-AUTH-32%5D%22) · [API-AUTH-33](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-AUTH-33%5D%22) · [API-AUTH-34](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-AUTH-34%5D%22) · [API-AUTH-39](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-AUTH-39%5D%22) · [API-AUTH-40](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-AUTH-40%5D%22) · [API-AUTH-42](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-AUTH-42%5D%22) · [API-AUTH-45](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-AUTH-45%5D%22)

## 📐 Règles de gestion

- Expiration glissante : chaque refresh prolonge `expiresAt` à `now+8h` tant que `lastActivityAt` est récent ; au-delà de 8 h sans activité : 401 `SESSION_EXPIRED_INACTIVITY` (code distinct pour afficher WA-07) ; plafond absolu 24 h.
- Access token admin 15 min ; le cookie `refresh` httpOnly, `SameSite=Strict`, `Secure`, `Path=/api/v1/admin/auth` reste (déjà en place) ; ajout d'un jeton CSRF double-submit pour les mutations (header `X-CSRF-Token`).
- `GET /admin/accounts/:id/sessions` (super-admin) → `[{id, createdAt, lastActivityAt, userAgent (navigateur/OS), approxCity, current}]` ; `DELETE /admin/accounts/:id/sessions/:sessionId` et `DELETE …/sessions` (toutes) révoquent et blacklistent immédiatement (Redis).
- Rotation du refresh admin à chaque usage avec détection de rejeu (même logique que les utilisateurs).
- Chaque révocation à distance est auditée (`ADMIN_SESSION_REVOKED`) et l'intéressé est notifié par e-mail.

## 🔌 Contrats d'API

| Méthode | Chemin | Description | Requête | Réponse |
| --- | --- | --- | --- | --- |
| `GET` | `/api/v1/admin/accounts/:id/sessions` | Sessions actives | — | {items:[{id,lastActivityAt,userAgent}]} |
| `DELETE` | `/api/v1/admin/accounts/:id/sessions/:sessionId` | Révoque une session | — | 204 |

## 🛠️ Tâches

- [ ] Réécrire `refreshAdmin` (rotation + glissement + plafond).
- [ ] Ajouter `familyId`, `approxCity` à `AdminSession` ; claim `sid` dans l'access token admin.
- [ ] Middleware CSRF `csrfProtect` pour `/admin/*` en mutation (cookie `XSRF-TOKEN` lisible, comparaison header).
- [ ] Routes sessions + permissions `accounts:manage` (ou soi-même pour sa liste).
- [ ] Job de purge des sessions expirées > 30 jours.
- [ ] Tests (horloge fake) + Swagger.

## ✔️ Critères d'acceptation

- [ ] Étant donné 8 h 01 d'inactivité, quand le refresh est appelé, alors 401 `SESSION_EXPIRED_INACTIVITY`.
- [ ] Étant donné une activité toutes les 7 h, alors la session reste valide jusqu'au plafond de 24 h.
- [ ] Étant donné une révocation à distance, alors l'access token de la session est refusé immédiatement.
- [ ] Étant donné une mutation sans en-tête CSRF, alors 403 `CSRF_INVALID`.
- [ ] Étant donné un refresh rejoué, alors toute la famille est révoquée.

## 🧪 Tests à écrire

- [ ] Intégration : inactivité 8 h (fake timers).
- [ ] Sécurité : CSRF.
- [ ] Intégration : liste/révocation.
- [ ] Sécurité : rejeu refresh admin.
- [ ] Unit : plafond 24 h.

## 🔗 Dépendances

À réaliser après : `API-AUTH-37` · `API-AUTH-09` (rechercher le code entre crochets dans le titre des issues).

## 📚 Références

- CDC Admin §6.1, §6.2, §6.6

## 📦 Définition de terminé

`npm run lint`, `format:check`, `typecheck`, tests unitaires/intégration/sécurité verts ; Swagger (`npm run export:swagger`) à jour ; migration si schéma modifié ; PR vers `dev` ; CI verte.
