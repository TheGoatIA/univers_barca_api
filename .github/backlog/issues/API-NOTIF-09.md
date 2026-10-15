> **API-NOTIF-09** · Performance · Priorité **P0** · Taille **M** · Phase 1 — MVP

## 🎯 Contexte

Un rappel de match concerne potentiellement tous les utilisateurs (12 480 appareils dans la maquette WI-08). CDC §11.4 : envoi par lots avec limitation de débit conforme aux quotas du fournisseur.

## ✅ Objectif

Découper le fan-out en lots et lisser le débit.

## 🖼️ Maquettes de référence

Toutes les captures ci-dessous sont les maquettes validées (clair / sombre, mobile / tablette ou bureau). Le comportement visuel, les espacements, états et libellés doivent être reproduits à l'identique ; les tokens du design system s'appliquent (aucune couleur en dur).

#### `O-08` — Écran verrouillé — rappel de match
_Module : Notifications_

<table><tr><th align='center'>Mobile · Clair</th><th align='center'>Mobile · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/O/O-08_ecran-verrouille-rappel-de-match__phone_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/O/O-08_ecran-verrouille-rappel-de-match__phone_light.webp?raw=true' width='230' alt='O-08 Mobile Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/O/O-08_ecran-verrouille-rappel-de-match__phone_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/O/O-08_ecran-verrouille-rappel-de-match__phone_dark.webp?raw=true' width='230' alt='O-08 Mobile Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/O/O-08_ecran-verrouille-rappel-de-match__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/O/O-08_ecran-verrouille-rappel-de-match__tablet_light.webp?raw=true' width='330' alt='O-08 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/O/O-08_ecran-verrouille-rappel-de-match__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/O/O-08_ecran-verrouille-rappel-de-match__tablet_dark.webp?raw=true' width='330' alt='O-08 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Jeudi 15 octobre » · « Match dans 1 h ⚽ » · « maintenant » · « FC Barcelone – Real Madrid · Liga · 20:00 WAT »

</details>

**Issues liées sur ce même écran :** [API-NOTIF-07](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-NOTIF-07%5D%22) · [API-NOTIF-08](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-NOTIF-08%5D%22) · [API-NOTIF-12](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-NOTIF-12%5D%22) · [API-NOTIF-13](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-NOTIF-13%5D%22) · [API-NOTIF-29](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-NOTIF-29%5D%22) · [API-NOTIF-30](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-NOTIF-30%5D%22) · [MOB-O-11](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-O-11%5D%22) · [MOB-O-18](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-O-18%5D%22) · [MOB-O-19](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-O-19%5D%22) · [MOB-O-20](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-O-20%5D%22) · [MOB-O-25](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-O-25%5D%22) · [MOB-O-27](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-O-27%5D%22) · [MOB-O-28](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-O-28%5D%22)

## 📐 Règles de gestion

- Lot maximal : 500 jetons par appel multicast (limite FCM sendEachForMulticast).
- Débit : au plus 600 000 messages/minute côté FCM par défaut, mais le worker limite à `NOTIFICATIONS_MAX_RATE` (défaut 3 000 messages/s) via le `limiter` de BullMQ ({max:6, duration:1000} sur lots de 500).
- Itération des destinataires par curseur Mongo (`_id` croissant, pas de skip) pour tenir en mémoire ; 12 480 utilisateurs ⇒ 25 lots.
- Tri des jetons par plateforme pour regrouper iOS/Android (payloads différents).
- Résultat par jeton collecté pour invalider les jetons morts (notif-invalidation-jetons-morts) et alimenter NotificationLog.fcmMessageIds.

## 🔄 Comportement et états

- Un lot échoué en partie ne relance que les jetons en erreur temporaire.
- Pic > 100 000 destinataires : le job parent devient `waiting-children` (flow BullMQ).

## 🛠️ Tâches

- [ ] Créer src/jobs/workers/notifications.fanout.ts : streamRecipients(filter) avec cursor().
- [ ] Créer BatchSender dans src/services/push/batch-sender.ts.
- [ ] Configurer le limiter BullMQ du worker deliver.
- [ ] Ajouter NOTIFICATIONS_MAX_RATE et NOTIFICATIONS_BATCH_SIZE à src/config/env.ts.
- [ ] Utiliser un BullMQ FlowProducer pour parent/enfants.
- [ ] Mesurer la durée par lot (histogramme).
- [ ] Tests avec 2 000 tokens factices.
- [ ] Documenter dans docs/NOTIFICATIONS.md.

## ✔️ Critères d'acceptation

- [ ] Étant donné 12 480 destinataires, alors 25 lots de 500 maximum sont envoyés.
- [ ] Étant donné NOTIFICATIONS_MAX_RATE=1000, alors le débit mesuré ne le dépasse pas.
- [ ] Étant donné 3 jetons en erreur temporaire dans un lot, alors seuls ces jetons sont relancés.
- [ ] Étant donné 100 000 destinataires, alors la mémoire du worker reste stable.

## 🧪 Tests à écrire

- [ ] unit: découpage en lots
- [ ] integration: limiteur de débit
- [ ] integration: relance partielle
- [ ] load: 100 000 destinataires FakeProvider

## 🔗 Dépendances

À réaliser après : `API-NOTIF-08` (rechercher le code entre crochets dans le titre des issues).

## 📚 Références

- CDC Backend §11.4

## 📦 Définition de terminé

`npm run lint`, `format:check`, `typecheck`, tests unitaires/intégration/sécurité verts ; Swagger (`npm run export:swagger`) à jour ; migration si schéma modifié ; PR vers `dev` ; CI verte.
