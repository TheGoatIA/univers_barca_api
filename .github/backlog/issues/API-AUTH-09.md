> **API-AUTH-09** · API · Priorité **P0** · Taille **S** · Phase 1 — MVP

## 🎯 Contexte

A-08 « Session expirée — Pour ta sécurité, reconnecte-toi pour continuer » avec « Me reconnecter » / « Changer de compte » ne doit s'afficher que si le refresh a échoué ; l'expiration normale de l'access token (15 min) doit rester silencieuse. L'API a `TOKEN_EXPIRED`, `TOKEN_INVALID`, `TOKEN_REVOKED`, `REFRESH_INVALID|EXPIRED|REUSED` mais ces codes ne sont pas documentés ni testés ensemble.

## ✅ Objectif

Garantir un contrat 401 stable et documenté pour que Chopper distingue refresh à tenter et reconnexion obligatoire.

## 🖼️ Maquettes de référence

Toutes les captures ci-dessous sont les maquettes validées (clair / sombre, mobile / tablette ou bureau). Le comportement visuel, les espacements, états et libellés doivent être reproduits à l'identique ; les tokens du design system s'appliquent (aucune couleur en dur).

#### `A-08` — Session expirée
_Module : Lancement et système_

<table><tr><th align='center'>Mobile · Clair</th><th align='center'>Mobile · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/A/A-08_session-expiree__phone_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/A/A-08_session-expiree__phone_light.webp?raw=true' width='230' alt='A-08 Mobile Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/A/A-08_session-expiree__phone_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/A/A-08_session-expiree__phone_dark.webp?raw=true' width='230' alt='A-08 Mobile Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/A/A-08_session-expiree__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/A/A-08_session-expiree__tablet_light.webp?raw=true' width='330' alt='A-08 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/A/A-08_session-expiree__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/A/A-08_session-expiree__tablet_dark.webp?raw=true' width='330' alt='A-08 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Session expirée » · « Pour ta sécurité, reconnecte-toi pour continuer. » · « Me reconnecter » · « Changer de compte »

**Composants repérés** : `btn`

</details>

**Issues liées sur ce même écran :** [API-AUTH-13](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-AUTH-13%5D%22) · [API-AUTH-16](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-AUTH-16%5D%22) · [API-AUTH-44](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-AUTH-44%5D%22) · [API-AUTH-45](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-AUTH-45%5D%22) · [API-PLAT-07](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-PLAT-07%5D%22) · [API-PLAT-55](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-PLAT-55%5D%22) · [MOB-A-01](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-A-01%5D%22) · [MOB-A-05](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-A-05%5D%22) · [MOB-A-11](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-A-11%5D%22) · [MOB-A-12](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-A-12%5D%22) · [MOB-A-18](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-A-18%5D%22) · [MOB-A-19](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-A-19%5D%22)

#### `B-16` — Connexion
_Module : Onboarding et authentification_

<table><tr><th align='center'>Mobile · Clair</th><th align='center'>Mobile · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/B/B-16_connexion__phone_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/B/B-16_connexion__phone_light.webp?raw=true' width='230' alt='B-16 Mobile Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/B/B-16_connexion__phone_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/B/B-16_connexion__phone_dark.webp?raw=true' width='230' alt='B-16 Mobile Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/B/B-16_connexion__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/B/B-16_connexion__tablet_light.webp?raw=true' width='330' alt='B-16 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/B/B-16_connexion__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/B/B-16_connexion__tablet_dark.webp?raw=true' width='330' alt='B-16 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Univers » · « Barça » · « Ton compagnon » · « culé, au quotidien. » · « Assistant IA, jeux quotidiens, histoire du club et communauté de supporters, au même endroit. » · « Application communautaire non officielle · fan-made » · « Content de te revoir » · « Connecte-toi pour retrouver ta série. » · « E-mail » · « boris@exemple.com » · « Mot de passe » · « •••••••••• » · « Rester connecté » · « Mot de passe oublié ? » · « Se connecter » · « ou » · « Apple » · « Google » · « Pas encore de compte ? » · « Créer un compte »

**Composants repérés** : `btn`, `input`

</details>

**Issues liées sur ce même écran :** [API-AUTH-07](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-AUTH-07%5D%22) · [API-AUTH-08](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-AUTH-08%5D%22) · [API-AUTH-10](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-AUTH-10%5D%22) · [API-AUTH-11](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-AUTH-11%5D%22) · [API-AUTH-12](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-AUTH-12%5D%22) · [API-AUTH-14](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-AUTH-14%5D%22) · [API-AUTH-17](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-AUTH-17%5D%22) · [API-AUTH-42](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-AUTH-42%5D%22) · [API-AUTH-43](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-AUTH-43%5D%22) · [API-AUTH-45](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-AUTH-45%5D%22) · [MOB-B-06](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-B-06%5D%22) · [MOB-B-07](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-B-07%5D%22) · [MOB-B-08](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-B-08%5D%22) · [MOB-B-21](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-B-21%5D%22) · [MOB-B-23](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-B-23%5D%22) · [MOB-B-27](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-B-27%5D%22) · [MOB-B-28](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-B-28%5D%22) · [MOB-B-29](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-B-29%5D%22)

## 📐 Règles de gestion

- `401 TOKEN_EXPIRED` ⇒ le client tente `POST /auth/refresh` une seule fois (file d'attente des requêtes concurrentes côté mobile).
- `401 REFRESH_EXPIRED|REFRESH_INVALID|REFRESH_REUSED|TOKEN_REVOKED|SESSION_REVOKED` ⇒ affichage A-08 ; `REFRESH_REUSED` ajoute `details:{securityAlert:true}`.
- Ajouter `SESSION_REVOKED` quand la session a été retirée depuis un autre appareil (Q-10 « Retirer ») : l'access token portant le `sid` de la session est refusé immédiatement via un set Redis `session:revoked:<sid>`.
- Header `WWW-Authenticate: Bearer error="invalid_token"` sur tous les 401 d'auth.
- Le champ `traceId` est toujours présent pour le support.

## 🛠️ Tâches

- [ ] Ajouter le claim `sid` (familyId) à `signAccessToken` et à `AccessPayload` ; adapter `verifyAccessToken` (vérifie `session:revoked:<sid>`).
- [ ] Poser le flag Redis lors de `revokeAllForUser`, `revokeSession` et détection de rejeu (TTL = durée de vie d'un access token, 15 min).
- [ ] Centraliser les codes dans `src/utils/errorCodes.ts` (enum + statut HTTP + clé i18n).
- [ ] Ajouter le header WWW-Authenticate dans `errorHandler.ts`.
- [ ] Mettre à jour `docs/api/auth-errors.md` + Swagger (composant `AuthError`).
- [ ] Écrire le tableau code → écran mobile (A-08, A-09, A-10, B-16) dans la doc.

## ✔️ Critères d'acceptation

- [ ] Étant donné un access token expiré, quand on appelle une route protégée, alors 401 `TOKEN_EXPIRED`.
- [ ] Étant donné une session retirée depuis un autre appareil, quand l'ancien access token (encore valide 10 min) est utilisé, alors 401 `SESSION_REVOKED`.
- [ ] Étant donné un refresh réutilisé, alors 401 `REFRESH_REUSED` avec `securityAlert=true`.
- [ ] Étant donné toute 401 d'auth, alors le header `WWW-Authenticate` est présent.

## 🧪 Tests à écrire

- [ ] Intégration : un test par code.
- [ ] Unit : `sid` dans le payload JWT.
- [ ] Intégration : révocation de session invalide l'access en < 1 s.
- [ ] Unit : mapping codes → statuts.
- [ ] Contrat : snapshot des réponses 401.

## 🔗 Dépendances

À réaliser après : `API-AUTH-08` (rechercher le code entre crochets dans le titre des issues).

## 📚 Références

- CDC Backend §5.1, §11.6

## 📦 Définition de terminé

`npm run lint`, `format:check`, `typecheck`, tests unitaires/intégration/sécurité verts ; Swagger (`npm run export:swagger`) à jour ; migration si schéma modifié ; PR vers `dev` ; CI verte.
