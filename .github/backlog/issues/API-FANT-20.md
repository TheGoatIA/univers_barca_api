> **API-FANT-20** · Fonctionnel · Priorité **P1** · Taille **M** · Phase 2 — Communautaire & compétitif

## 🎯 Contexte

Les écrans H-17 (« Le Fantasy Barça sera activé prochainement ») et I-13 (« La Masia Academy arrive très bientôt ») sont affichés lorsque le module est désactivé. Le modèle FeatureFlag {key, enabled, rolloutPercent} existe. La roadmap CDC place Fantasy en phase 2 et La Masia en phase 3.

## ✅ Objectif

Un middleware requireModule et un mécanisme d'intention de notification « Me prévenir ».

## 🖼️ Maquettes de référence

Toutes les captures ci-dessous sont les maquettes validées (clair / sombre, mobile / tablette ou bureau). Le comportement visuel, les espacements, états et libellés doivent être reproduits à l'identique ; les tokens du design system s'appliquent (aucune couleur en dur).

#### `H-17` — Fantasy — module désactivé
_Module : Fantasy Barça_

<table><tr><th align='center'>Mobile · Clair</th><th align='center'>Mobile · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/H/H-17_fantasy-module-desactive__phone_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/H/H-17_fantasy-module-desactive__phone_light.webp?raw=true' width='230' alt='H-17 Mobile Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/H/H-17_fantasy-module-desactive__phone_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/H/H-17_fantasy-module-desactive__phone_dark.webp?raw=true' width='230' alt='H-17 Mobile Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/H/H-17_fantasy-module-desactive__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/H/H-17_fantasy-module-desactive__tablet_light.webp?raw=true' width='330' alt='H-17 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/H/H-17_fantasy-module-desactive__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/H/H-17_fantasy-module-desactive__tablet_dark.webp?raw=true' width='330' alt='H-17 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Journée 11 » · « Bientôt disponible » · « Le Fantasy Barça sera activé prochainement. Active les notifications pour être averti(e) de l’ouverture. » · « Me prévenir »

**Composants repérés** : `avatar`, `btn`

</details>

**Issues liées sur ce même écran :** [API-FANT-19](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FANT-19%5D%22) · [MOB-H-28](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-H-28%5D%22)

#### `I-13` — Module désactivé
_Module : La Masia Academy_

<table><tr><th align='center'>Mobile · Clair</th><th align='center'>Mobile · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/I/I-13_module-desactive__phone_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/I/I-13_module-desactive__phone_light.webp?raw=true' width='230' alt='I-13 Mobile Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/I/I-13_module-desactive__phone_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/I/I-13_module-desactive__phone_dark.webp?raw=true' width='230' alt='I-13 Mobile Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/I/I-13_module-desactive__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/I/I-13_module-desactive__tablet_light.webp?raw=true' width='330' alt='I-13 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/I/I-13_module-desactive__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/I/I-13_module-desactive__tablet_dark.webp?raw=true' width='330' alt='I-13 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « La Masia Academy » · « Bientôt disponible » · « La Masia Academy arrive très bientôt. Reste à l’écoute ! » · « Me prévenir »

**Composants repérés** : `btn`

</details>

**Issues liées sur ce même écran :** [MOB-I-19](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-I-19%5D%22)

## 📐 Règles de gestion

- Clés : 'module.fantasy' et 'module.academy' (FeatureFlag) ; rolloutPercent déterministe par utilisateur (hash(userId) % 100 < rolloutPercent).
- Module désactivé : toute route /fantasy/* et /academy/* répond 403 {error:{code:'MODULE_DISABLED', details:{module:'fantasy'}}} ; les routes admin ne sont pas concernées.
- POST /modules/:key/notify-me (key ∈ fantasy|academy) enregistre l'intention (une par utilisateur et module, idempotent) ; une ouverture du module déclenche une notification via la file notifications (respect des préférences, issue NOTIF).
- GET /config/modules -> {fantasy:boolean, academy:boolean} (cache 60 s) pour éviter des appels inutiles au mobile.
- L'intention est supprimée après envoi de la notification ou sur retrait de consentement notification.
- Données minimales : userId, module, createdAt.

## 🔌 Contrats d'API

| Méthode | Chemin | Description | Requête | Réponse |
| --- | --- | --- | --- | --- |
| `GET` | `/api/v1/config/modules` | Modules actifs pour l'utilisateur | — | {success:true,data:{fantasy:false,academy:false}} |
| `POST` | `/api/v1/modules/:key/notify-me` | Demander à être prévenu à l'ouverture | — | {success:true,data:{key:'fantasy',registered:true}} |

## 🗄️ Données

- featureflags
- modulenotifyintents (nouvelle)

## 🛠️ Tâches

- [ ] Créer src/middleware/requireModule.ts utilisant FeatureFlag + cache Redis 60 s.
- [ ] Créer le modèle ModuleNotifyIntent {userId, module, createdAt, notifiedAt} unique {userId, module}.
- [ ] Routes GET /config/modules et POST /modules/:key/notify-me.
- [ ] Job 'notify-module-open' dans la file notifications (batch 500) déclenché quand le flag passe à enabled.
- [ ] Seed des flags : module.fantasy (enabled=false en prod jusqu'à la phase 2), module.academy (false).
- [ ] Appliquer requireModule sur les routers fantasy et academy.
- [ ] Swagger : réponse 403 documentée.
- [ ] Tests.

## ✔️ Critères d'acceptation

- [ ] Étant donné module.fantasy désactivé, quand GET /fantasy/team, alors 403 MODULE_DISABLED.
- [ ] Étant donné rollout 50 %, alors le même utilisateur obtient toujours le même résultat.
- [ ] Étant donné notify-me appelé deux fois, alors une seule intention.
- [ ] Étant donné l'ouverture du module, alors une notification par intention est enfilée.
- [ ] Étant donné un admin, alors les routes admin restent accessibles.

## 🧪 Tests à écrire

- [ ] Unitaire : hash de rollout stable.
- [ ] Intégration : 403 sur toutes les routes du module.
- [ ] Intégration : idempotence notify-me.
- [ ] Intégration : job de notification d'ouverture.
- [ ] Intégration : cache 60 s invalidé à la bascule.

## 📚 Références

- CDC Global §2.7
- CDC Global §6 (roadmap)
- CDC Backend §3.10

## 📦 Définition de terminé

`npm run lint`, `format:check`, `typecheck`, tests unitaires/intégration/sécurité verts ; Swagger (`npm run export:swagger`) à jour ; migration si schéma modifié ; PR vers `dev` ; CI verte.
