> **API-PLAT-33** · Performance · Priorité **P1** · Taille **S** · Phase 1 — MVP

## 🎯 Contexte

Sans timeouts explicites une requête lente ou un fournisseur bloqué occupe des connexions et provoque des 5xx en cascade, surtout en soirée de match (docs/LOAD_TESTING.md : goulots maxPoolSize).

## ✅ Objectif

Poser des délais bornés à chaque couche et dimensionner les pools selon les mesures k6.

## 🖼️ Maquettes de référence

Toutes les captures ci-dessous sont les maquettes validées (clair / sombre, mobile / tablette ou bureau). Le comportement visuel, les espacements, états et libellés doivent être reproduits à l'identique ; les tokens du design system s'appliquent (aucune couleur en dur).

#### `A-04` — Erreur serveur 5xx
_Module : Lancement et système_

<table><tr><th align='center'>Mobile · Clair</th><th align='center'>Mobile · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/A/A-04_erreur-serveur-5xx__phone_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/A/A-04_erreur-serveur-5xx__phone_light.webp?raw=true' width='230' alt='A-04 Mobile Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/A/A-04_erreur-serveur-5xx__phone_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/A/A-04_erreur-serveur-5xx__phone_dark.webp?raw=true' width='230' alt='A-04 Mobile Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/A/A-04_erreur-serveur-5xx__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/A/A-04_erreur-serveur-5xx__tablet_light.webp?raw=true' width='330' alt='A-04 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/A/A-04_erreur-serveur-5xx__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/A/A-04_erreur-serveur-5xx__tablet_dark.webp?raw=true' width='330' alt='A-04 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Quiz » · « Petit souci de notre côté » · « Le service est momentanément indisponible. Notre équipe est déjà dessus. Réessaie dans quelques instants. » · « Réessayer » · « Code d'incident : UB-5C21-8F3A »

**Composants repérés** : `btn`

</details>

**Issues liées sur ce même écran :** [API-AUTH-44](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-AUTH-44%5D%22) · [API-PLAT-05](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-PLAT-05%5D%22) · [API-PLAT-07](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-PLAT-07%5D%22) · [API-PLAT-24](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-PLAT-24%5D%22) · [API-PLAT-34](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-PLAT-34%5D%22) · [API-PLAT-40](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-PLAT-40%5D%22) · [API-PLAT-41](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-PLAT-41%5D%22) · [API-PLAT-55](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-PLAT-55%5D%22) · [MOB-A-05](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-A-05%5D%22) · [MOB-A-06](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-A-06%5D%22) · [MOB-A-17](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-A-17%5D%22) · [MOB-A-18](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-A-18%5D%22) · [MOB-A-19](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-A-19%5D%22)

## 📐 Règles de gestion

- Serveur HTTP : requestTimeout 30 s, headersTimeout 66 s, keepAliveTimeout 65 s (déjà), middleware de timeout applicatif 15 s → 503 REQUEST_TIMEOUT (sauf uploads et exports).
- Mongoose : maxPoolSize 50 par instance PM2 (à confirmer par k6 : 2 instances × 50 < limite serveur), minPoolSize 5, serverSelectionTimeoutMS 5000, socketTimeoutMS 30000, maxTimeMS 5000 par défaut sur find/aggregate.
- ioredis : connectTimeout 5 s, commandTimeout 2 s, maxRetriesPerRequest 2, retryStrategy plafonnée à 2 s.
- Appels sortants : football 8 s, IA texte 30 s (streaming exempté), IA image 60 s, FCM 10 s.
- Taille de corps : JSON 100 kb, uploads 5 Mo ; trop gros → 413.

## 🛠️ Tâches

- [ ] Créer src/middleware/timeout.ts.
- [ ] Centraliser les valeurs dans src/config/timeouts.ts (surchargeables par env).
- [ ] Appliquer options Mongoose dans src/config/database.ts et ioredis dans redis.ts.
- [ ] Ajouter maxTimeMS via plugin Mongoose global.
- [ ] Métrique ub_request_timeouts_total.
- [ ] Documenter la règle de calcul du pool dans docs/LOAD_TESTING.md.

## ✔️ Critères d'acceptation

- [ ] Étant donné une requête dépassant 15 s, alors 503 REQUEST_TIMEOUT et connexion libérée.
- [ ] Étant donné une requête Mongo > 5 s, alors elle est interrompue (maxTimeMS).
- [ ] Étant donné un corps JSON de 200 kb, alors 413.
- [ ] Étant donné Redis lent, alors l'API répond sans attendre au-delà de 2 s.

## 🧪 Tests à écrire

- [ ] Intégration : route lente simulée.
- [ ] Intégration : maxTimeMS.
- [ ] Intégration : 413.
- [ ] Unitaire : parsing des durées d'env.
- [ ] Charge k6 : pas de fuite de connexions après stress.

## 📚 Références

- CDC Backend §11.6
- docs/LOAD_TESTING.md

## 📦 Définition de terminé

`npm run lint`, `format:check`, `typecheck`, tests unitaires/intégration/sécurité verts ; Swagger (`npm run export:swagger`) à jour ; migration si schéma modifié ; PR vers `dev` ; CI verte.
