> **API-AUTH-14** · Fonctionnel · Priorité **P2** · Taille **S** · Phase 1 — MVP

## 🎯 Contexte

B-16 propose une case « Rester connecté ». L'API émet toujours un refresh de 30 jours (`JWT_REFRESH_TTL_DAYS`).

## ✅ Objectif

Prendre en compte `rememberMe` dans le login pour la durée de la famille.

## 🖼️ Maquettes de référence

Toutes les captures ci-dessous sont les maquettes validées (clair / sombre, mobile / tablette ou bureau). Le comportement visuel, les espacements, états et libellés doivent être reproduits à l'identique ; les tokens du design system s'appliquent (aucune couleur en dur).

#### `B-16` — Connexion
_Module : Onboarding et authentification_

<table><tr><th align='center'>Mobile · Clair</th><th align='center'>Mobile · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/B/B-16_connexion__phone_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/B/B-16_connexion__phone_light.webp?raw=true' width='230' alt='B-16 Mobile Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/B/B-16_connexion__phone_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/B/B-16_connexion__phone_dark.webp?raw=true' width='230' alt='B-16 Mobile Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/B/B-16_connexion__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/B/B-16_connexion__tablet_light.webp?raw=true' width='330' alt='B-16 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/B/B-16_connexion__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/B/B-16_connexion__tablet_dark.webp?raw=true' width='330' alt='B-16 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Univers » · « Barça » · « Ton compagnon » · « culé, au quotidien. » · « Assistant IA, jeux quotidiens, histoire du club et communauté de supporters, au même endroit. » · « Application communautaire non officielle · fan-made » · « Content de te revoir » · « Connecte-toi pour retrouver ta série. » · « E-mail » · « boris@exemple.com » · « Mot de passe » · « •••••••••• » · « Rester connecté » · « Mot de passe oublié ? » · « Se connecter » · « ou » · « Apple » · « Google » · « Pas encore de compte ? » · « Créer un compte »

**Composants repérés** : `btn`, `input`

</details>

**Issues liées sur ce même écran :** [API-AUTH-07](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-AUTH-07%5D%22) · [API-AUTH-08](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-AUTH-08%5D%22) · [API-AUTH-09](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-AUTH-09%5D%22) · [API-AUTH-10](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-AUTH-10%5D%22) · [API-AUTH-11](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-AUTH-11%5D%22) · [API-AUTH-12](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-AUTH-12%5D%22) · [API-AUTH-17](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-AUTH-17%5D%22) · [API-AUTH-42](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-AUTH-42%5D%22) · [API-AUTH-43](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-AUTH-43%5D%22) · [API-AUTH-45](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-AUTH-45%5D%22) · [MOB-B-06](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-B-06%5D%22) · [MOB-B-07](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-B-07%5D%22) · [MOB-B-08](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-B-08%5D%22) · [MOB-B-21](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-B-21%5D%22) · [MOB-B-23](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-B-23%5D%22) · [MOB-B-27](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-B-27%5D%22) · [MOB-B-28](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-B-28%5D%22) · [MOB-B-29](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-B-29%5D%22)

## 📐 Règles de gestion

- `rememberMe=true` (défaut mobile) : TTL glissant 30 jours, famille max 90 jours ; `false` : TTL 24 h non glissant, famille max 24 h.
- Stocker `persistent:boolean` sur le RefreshToken, conservé de rotation en rotation.
- Sur web (`X-Platform: web`), `rememberMe` ignoré : 24 h maximum.
- Les durées apparaissent dans la liste des appareils (champ `expiresAt`).

## 🛠️ Tâches

- [ ] Ajouter `rememberMe` au `loginSchema` (booléen, défaut true).
- [ ] Paramétrer `issueRefreshToken(userId, device, familyId, {persistent})`.
- [ ] Adapter `rotateRefreshToken` pour réutiliser `persistent`.
- [ ] Mettre à jour Swagger et tests.
- [ ] Persister `persistent` sur le document `RefreshToken` (champ booléen) et l'inclure dans l'index TTL logique (durée 30 j si persistant, 24 h sinon).
- [ ] Documenter le champ `rememberMe` dans `docs/swagger.ts` et dans les exemples de requête.

## ✔️ Critères d'acceptation

- [ ] Étant donné `rememberMe=false`, quand le token a 25 h, alors refresh refusé `REFRESH_EXPIRED`.
- [ ] Étant donné `rememberMe=true`, alors `expiresAt` ≈ +30 j.
- [ ] Étant donné une rotation, alors `persistent` est conservé.

## 🧪 Tests à écrire

- [ ] Intégration : deux modes.
- [ ] Unit : calcul des expirations.
- [ ] Intégration : plateforme web.

## 🔗 Dépendances

À réaliser après : `API-AUTH-13` (rechercher le code entre crochets dans le titre des issues).

## 📚 Références

- CDC Backend §5.1

## 📦 Définition de terminé

`npm run lint`, `format:check`, `typecheck`, tests unitaires/intégration/sécurité verts ; Swagger (`npm run export:swagger`) à jour ; migration si schéma modifié ; PR vers `dev` ; CI verte.
