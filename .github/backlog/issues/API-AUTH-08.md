> **API-AUTH-08** · Fonctionnel · Priorité **P0** · Taille **M** · Phase 1 — MVP

## 🎯 Contexte

A-09 « Compte suspendu » affiche la date de fin (« 22 octobre 2026 »), le motif (« Propos inappropriés dans le groupe « Culés Paris » ») et « dans 7 jours », avec « Lire la charte » et « Contester la décision ». A-10 « Accès retiré » affiche « Ton compte a été banni définitivement… » avec « Contacter le support ». Aujourd'hui `login` renvoie seulement 403 `ACCOUNT_SUSPENDED` / `ACCOUNT_DISABLED` sans données, et un suspendu dont `suspendedUntil` est passé reste bloqué (status jamais remis à `active`).

## ✅ Objectif

Fournir au mobile toutes les données pour A-09/A-10, lever automatiquement les suspensions échues et bloquer les tokens existants.

## 🖼️ Maquettes de référence

Toutes les captures ci-dessous sont les maquettes validées (clair / sombre, mobile / tablette ou bureau). Le comportement visuel, les espacements, états et libellés doivent être reproduits à l'identique ; les tokens du design system s'appliquent (aucune couleur en dur).

#### `A-09` — Compte suspendu
_Module : Lancement et système_

<table><tr><th align='center'>Mobile · Clair</th><th align='center'>Mobile · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/A/A-09_compte-suspendu__phone_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/A/A-09_compte-suspendu__phone_light.webp?raw=true' width='230' alt='A-09 Mobile Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/A/A-09_compte-suspendu__phone_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/A/A-09_compte-suspendu__phone_dark.webp?raw=true' width='230' alt='A-09 Mobile Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/A/A-09_compte-suspendu__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/A/A-09_compte-suspendu__tablet_light.webp?raw=true' width='330' alt='A-09 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/A/A-09_compte-suspendu__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/A/A-09_compte-suspendu__tablet_dark.webp?raw=true' width='330' alt='A-09 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Compte suspendu » · « Ton compte est suspendu jusqu'au » · « 22 octobre 2026 » · « suite à un manquement à la charte de la communauté. » · « Motif » · « Propos inappropriés dans le groupe « Culés Paris ». » · « Fin de la suspension » · « dans 7 jours » · « Lire la charte » · « Contester la décision »

**Composants repérés** : `btn`, `card`

</details>

**Issues liées sur ce même écran :** [API-AUTH-44](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-AUTH-44%5D%22) · [API-AUTH-45](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-AUTH-45%5D%22) · [MOB-A-01](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-A-01%5D%22) · [MOB-A-13](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-A-13%5D%22) · [MOB-A-14](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-A-14%5D%22) · [MOB-A-18](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-A-18%5D%22) · [MOB-A-19](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-A-19%5D%22)

#### `A-10` — Compte banni
_Module : Lancement et système_

<table><tr><th align='center'>Mobile · Clair</th><th align='center'>Mobile · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/A/A-10_compte-banni__phone_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/A/A-10_compte-banni__phone_light.webp?raw=true' width='230' alt='A-10 Mobile Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/A/A-10_compte-banni__phone_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/A/A-10_compte-banni__phone_dark.webp?raw=true' width='230' alt='A-10 Mobile Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/A/A-10_compte-banni__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/A/A-10_compte-banni__tablet_light.webp?raw=true' width='330' alt='A-10 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/A/A-10_compte-banni__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/A/A-10_compte-banni__tablet_dark.webp?raw=true' width='330' alt='A-10 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Accès retiré » · « Ton compte a été banni définitivement pour non-respect répété de la charte de la communauté. » · « Contacter le support » · « Se déconnecter »

**Composants repérés** : `btn`

</details>

**Issues liées sur ce même écran :** [API-AUTH-44](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-AUTH-44%5D%22) · [API-AUTH-45](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-AUTH-45%5D%22) · [MOB-A-01](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-A-01%5D%22) · [MOB-A-13](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-A-13%5D%22) · [MOB-A-15](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-A-15%5D%22) · [MOB-A-18](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-A-18%5D%22) · [MOB-A-19](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-A-19%5D%22)

#### `B-16` — Connexion
_Module : Onboarding et authentification_

<table><tr><th align='center'>Mobile · Clair</th><th align='center'>Mobile · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/B/B-16_connexion__phone_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/B/B-16_connexion__phone_light.webp?raw=true' width='230' alt='B-16 Mobile Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/B/B-16_connexion__phone_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/B/B-16_connexion__phone_dark.webp?raw=true' width='230' alt='B-16 Mobile Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/B/B-16_connexion__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/B/B-16_connexion__tablet_light.webp?raw=true' width='330' alt='B-16 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/B/B-16_connexion__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/B/B-16_connexion__tablet_dark.webp?raw=true' width='330' alt='B-16 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Univers » · « Barça » · « Ton compagnon » · « culé, au quotidien. » · « Assistant IA, jeux quotidiens, histoire du club et communauté de supporters, au même endroit. » · « Application communautaire non officielle · fan-made » · « Content de te revoir » · « Connecte-toi pour retrouver ta série. » · « E-mail » · « boris@exemple.com » · « Mot de passe » · « •••••••••• » · « Rester connecté » · « Mot de passe oublié ? » · « Se connecter » · « ou » · « Apple » · « Google » · « Pas encore de compte ? » · « Créer un compte »

**Composants repérés** : `btn`, `input`

</details>

**Issues liées sur ce même écran :** [API-AUTH-07](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-AUTH-07%5D%22) · [API-AUTH-09](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-AUTH-09%5D%22) · [API-AUTH-10](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-AUTH-10%5D%22) · [API-AUTH-11](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-AUTH-11%5D%22) · [API-AUTH-12](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-AUTH-12%5D%22) · [API-AUTH-14](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-AUTH-14%5D%22) · [API-AUTH-17](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-AUTH-17%5D%22) · [API-AUTH-42](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-AUTH-42%5D%22) · [API-AUTH-43](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-AUTH-43%5D%22) · [API-AUTH-45](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-AUTH-45%5D%22) · [MOB-B-06](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-B-06%5D%22) · [MOB-B-07](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-B-07%5D%22) · [MOB-B-08](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-B-08%5D%22) · [MOB-B-21](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-B-21%5D%22) · [MOB-B-23](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-B-23%5D%22) · [MOB-B-27](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-B-27%5D%22) · [MOB-B-28](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-B-28%5D%22) · [MOB-B-29](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-B-29%5D%22)

#### `B-17` — Connexion — erreur et chargement
_Module : Onboarding et authentification_

<table><tr><th align='center'>Mobile · Clair</th><th align='center'>Mobile · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/B/B-17_connexion-erreur-et-chargement__phone_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/B/B-17_connexion-erreur-et-chargement__phone_light.webp?raw=true' width='230' alt='B-17 Mobile Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/B/B-17_connexion-erreur-et-chargement__phone_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/B/B-17_connexion-erreur-et-chargement__phone_dark.webp?raw=true' width='230' alt='B-17 Mobile Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/B/B-17_connexion-erreur-et-chargement__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/B/B-17_connexion-erreur-et-chargement__tablet_light.webp?raw=true' width='330' alt='B-17 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/B/B-17_connexion-erreur-et-chargement__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/B/B-17_connexion-erreur-et-chargement__tablet_dark.webp?raw=true' width='330' alt='B-17 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Univers » · « Barça » · « Ton compagnon » · « culé, au quotidien. » · « Assistant IA, jeux quotidiens, histoire du club et communauté de supporters, au même endroit. » · « Application communautaire non officielle · fan-made » · « Content de te revoir » · « Identifiants incorrects » · « Vérifie ton e-mail et ton mot de passe. Il te reste 3 essais. » · « E-mail » · « boris@exemple.com » · « Mot de passe » · « •••••••••• » · « Connexion… » · « Créer un compte »

**Composants repérés** : `btn`, `card`, `input`, `spinner`

</details>

**Issues liées sur ce même écran :** [API-AUTH-07](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-AUTH-07%5D%22) · [API-AUTH-41](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-AUTH-41%5D%22) · [API-AUTH-42](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-AUTH-42%5D%22) · [API-AUTH-44](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-AUTH-44%5D%22) · [MOB-B-07](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-B-07%5D%22) · [MOB-B-22](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-B-22%5D%22) · [MOB-B-28](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-B-28%5D%22) · [MOB-B-29](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-B-29%5D%22)

## 📐 Règles de gestion

- `ACCOUNT_SUSPENDED` (403) : `details:{until: ISO, reason, reasonCode, daysLeft, appealUrl, charterUrl}` ; `ACCOUNT_BANNED` (403) : `details:{reason, supportUrl}` ; le message ne cite jamais l'identité du modérateur.
- Le motif provient de la dernière `ModerationAction` (`actionType` suspend|ban, `justification`, `suspendedUntil`) du `targetUserId` ; stocker `suspension:{reason,until,actionId}` sur le User à l'application de la sanction.
- Levée automatique : au login/refresh si `suspendedUntil <= now` alors `status='active'` + purge du bloc suspension ; un job cron horaire (`rgpd`/`maintenance`) traite les échus et envoie une notification.
- `protect` (middleware) refuse un access token valide si le compte est devenu `suspended`/`banned` : contrôle en cache Redis `user:status:<id>` TTL 60 s invalidé à l'application d'une sanction ; la réponse reste 403 avec le même contrat (l'app route vers A-09/A-10).
- Utilisateur `deleted` : 401 `BAD_CREDENTIALS` (indiscernable d'un compte inexistant) ; le statut `deleted` n'est jamais divulgué.

## 🔌 Contrats d'API

| Méthode | Chemin | Description | Requête | Réponse |
| --- | --- | --- | --- | --- |
| `GET` | `/api/v1/users/me/status` | Statut du compte même si suspendu | (Bearer) | {status:'suspended',until,reason,daysLeft} |

## 🗄️ Données

- users.suspension, users.banReason, moderationactions

## 🛠️ Tâches

- [ ] Ajouter `suspension` et `banReason` au schéma User (`src/models/user.model.ts`).
- [ ] Créer `src/services/account-status.service.ts` : `assertCanAuthenticate(user)`, `liftExpiredSuspension(user)`, `applySanction()` (appelée par le module modération).
- [ ] Modifier `login`, `refresh` et `middleware/auth.ts` pour utiliser le service + cache Redis.
- [ ] Étendre `AppError` : `accountSuspended(details)`, `accountBanned(details)` et le handler d'erreurs (inclusion de `details`).
- [ ] Exposer `GET /users/me/status` (autorisé même suspendu via exception `allowSuspended`) pour que A-09 se rafraîchisse.
- [ ] Job cron `0 * * * *` : `liftExpiredSuspensions`.
- [ ] Documenter les deux erreurs dans Swagger + `docs/ERRORS.md`.

## ✔️ Critères d'acceptation

- [ ] Étant donné un compte suspendu jusqu'au 22/10/2026, quand il se connecte, alors 403 `ACCOUNT_SUSPENDED` avec `until`, `reason`, `daysLeft`.
- [ ] Étant donné une suspension échue, quand l'utilisateur se connecte, alors la connexion réussit et `status='active'`.
- [ ] Étant donné un utilisateur banni disposant d'un access token valide, quand il appelle `/users/me`, alors 403 `ACCOUNT_BANNED` (≤ 60 s après le bannissement).
- [ ] Étant donné un compte supprimé, alors la réponse est identique à des identifiants incorrects.
- [ ] Étant donné une sanction appliquée, alors tous ses refresh tokens sont révoqués.

## 🧪 Tests à écrire

- [ ] Intégration : login suspendu / banni / échu / supprimé.
- [ ] Intégration : invalidation du cache après sanction.
- [ ] Unit : calcul `daysLeft` (arrondi supérieur).
- [ ] Unit : cron de levée.
- [ ] Sécurité : aucun champ modérateur dans la réponse.

## 🔗 Dépendances

À réaliser après : `API-AUTH-07` (rechercher le code entre crochets dans le titre des issues).

## 📚 Références

- CDC Global §11
- CDC Backend §3.11
- CDC Global §10.3

## 📦 Définition de terminé

`npm run lint`, `format:check`, `typecheck`, tests unitaires/intégration/sécurité verts ; Swagger (`npm run export:swagger`) à jour ; migration si schéma modifié ; PR vers `dev` ; CI verte.
