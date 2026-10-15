> **API-AUTH-13** · Sécurité · Priorité **P0** · Taille **M** · Phase 1 — MVP

## 🎯 Contexte

`rotateRefreshToken` fait un `findOne` puis un `save` : deux refresh concurrents (mobile qui relance une requête, double tap) peuvent émettre deux successeurs, et un rejeu légitime juste après la rotation (réseau coupé avant réception) révoque toute la famille. Il faut sécuriser sans affaiblir la détection de vol (CDC : rejeu = révocation immédiate de la famille).

## ✅ Objectif

Rendre la rotation atomique, tolérer une fenêtre de 10 s pour la réponse perdue, et couvrir tous les cas par des tests.

## 🖼️ Maquettes de référence

Toutes les captures ci-dessous sont les maquettes validées (clair / sombre, mobile / tablette ou bureau). Le comportement visuel, les espacements, états et libellés doivent être reproduits à l'identique ; les tokens du design system s'appliquent (aucune couleur en dur).

#### `A-08` — Session expirée
_Module : Lancement et système_

<table><tr><th align='center'>Mobile · Clair</th><th align='center'>Mobile · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/A/A-08_session-expiree__phone_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/A/A-08_session-expiree__phone_light.webp?raw=true' width='230' alt='A-08 Mobile Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/A/A-08_session-expiree__phone_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/A/A-08_session-expiree__phone_dark.webp?raw=true' width='230' alt='A-08 Mobile Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/A/A-08_session-expiree__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/A/A-08_session-expiree__tablet_light.webp?raw=true' width='330' alt='A-08 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/A/A-08_session-expiree__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/A/A-08_session-expiree__tablet_dark.webp?raw=true' width='330' alt='A-08 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Session expirée » · « Pour ta sécurité, reconnecte-toi pour continuer. » · « Me reconnecter » · « Changer de compte »

**Composants repérés** : `btn`

</details>

**Issues liées sur ce même écran :** [API-AUTH-09](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-AUTH-09%5D%22) · [API-AUTH-16](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-AUTH-16%5D%22) · [API-AUTH-44](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-AUTH-44%5D%22) · [API-AUTH-45](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-AUTH-45%5D%22) · [API-PLAT-07](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-PLAT-07%5D%22) · [API-PLAT-55](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-PLAT-55%5D%22) · [MOB-A-01](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-A-01%5D%22) · [MOB-A-05](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-A-05%5D%22) · [MOB-A-11](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-A-11%5D%22) · [MOB-A-12](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-A-12%5D%22) · [MOB-A-18](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-A-18%5D%22) · [MOB-A-19](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-A-19%5D%22)

## 📐 Règles de gestion

- Rotation par `findOneAndUpdate({tokenHash, revokedAt:{$exists:false}, expiresAt:{$gt:now}},{revokedAt:now})` : un seul appelant gagne.
- Fenêtre de grâce 10 s (`REFRESH_GRACE_SECONDS`) : si le token vient d'être remplacé (revokedAt < 10 s) ET même `deviceId`, on renvoie le successeur déjà émis (stocké chiffré `replacedByToken` en Redis 10 s) au lieu de révoquer la famille.
- Hors fenêtre ou deviceId différent ⇒ `REFRESH_REUSED`, révocation de toute la famille, alerte e-mail `security-alert`, métrique `refresh_reuse_total`.
- Durée de vie absolue d'une famille : 90 jours (le TTL 30 j est glissant : chaque rotation prolonge `expiresAt` de 30 j, borné par `familyCreatedAt + 90 j`).
- Les tokens révoqués sont purgés après 90 jours (CDC §5.7 ; le cron actuel purge à 30 jours — à corriger).

## 🗄️ Données

- refreshtokens.familyCreatedAt

## 🛠️ Tâches

- [ ] Réécrire `rotateRefreshToken` dans `token.service.ts` avec opération atomique + grâce Redis.
- [ ] Ajouter `familyCreatedAt` au modèle `refresh-token.model.ts`.
- [ ] Corriger la purge dans `jobs/scheduler.ts` (90 jours) et ajouter un index TTL sur `revokedAt` + 90 j.
- [ ] Ajouter `REFRESH_GRACE_SECONDS`, `REFRESH_FAMILY_MAX_DAYS` dans `env.ts`.
- [ ] Envoyer l'alerte e-mail sur rejeu (enqueue).
- [ ] Écrire une suite `tests/security/refresh-rotation.test.ts`.
- [ ] Documenter la machine d'états dans `docs/ARCHITECTURE.md`.

## ✔️ Critères d'acceptation

- [ ] Étant donné 2 refresh simultanés avec le même token, quand ils sont exécutés, alors un seul succède et l'autre reçoit le même successeur (grâce) ou 401, jamais deux successeurs distincts.
- [ ] Étant donné un rejeu après 11 s, alors la famille entière est révoquée et le successeur est inutilisable.
- [ ] Étant donné une famille de 90 jours, alors le refresh renvoie `REFRESH_EXPIRED`.
- [ ] Étant donné un rejeu depuis un autre deviceId, alors pas de grâce, famille révoquée.
- [ ] Étant donné un token révoqué depuis 91 jours, alors le document a été purgé.

## 🧪 Tests à écrire

- [ ] Sécurité : course 20 refresh parallèles.
- [ ] Sécurité : rejeu T+5 s même appareil, T+15 s, autre appareil.
- [ ] Unit : prolongation glissante bornée à 90 j.
- [ ] Intégration : alerte e-mail en file après rejeu.
- [ ] Unit : purge à 90 j.

## 📚 Références

- CDC Backend §5.1, §5.7

## 📦 Définition de terminé

`npm run lint`, `format:check`, `typecheck`, tests unitaires/intégration/sécurité verts ; Swagger (`npm run export:swagger`) à jour ; migration si schéma modifié ; PR vers `dev` ; CI verte.
