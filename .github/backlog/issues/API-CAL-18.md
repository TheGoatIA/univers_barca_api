> **API-CAL-18** · Performance · Priorité **P1** · Taille **M** · Phase 1 — MVP

## 🎯 Contexte

CDC Backend §5.6 : calendrier des matchs à venir mis en cache 15 minutes avec invalidation anticipée sur changement d'horaire. Les clients agenda interrogent le flux toutes les 8-24 h par utilisateur : les requêtes conditionnelles évitent de retransférer le fichier.

## ✅ Objectif

Mettre en place cache applicatif et validation HTTP.

## 🖼️ Maquettes de référence

Toutes les captures ci-dessous sont les maquettes validées (clair / sombre, mobile / tablette ou bureau). Le comportement visuel, les espacements, états et libellés doivent être reproduits à l'identique ; les tokens du design system s'appliquent (aucune couleur en dur).

#### `L-01` — Liste des matchs à venir
_Module : Calendrier et export agenda_

<table><tr><th align='center'>Mobile · Clair</th><th align='center'>Mobile · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/L/L-01_liste-des-matchs-a-venir__phone_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/L/L-01_liste-des-matchs-a-venir__phone_light.webp?raw=true' width='230' alt='L-01 Mobile Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/L/L-01_liste-des-matchs-a-venir__phone_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/L/L-01_liste-des-matchs-a-venir__phone_dark.webp?raw=true' width='230' alt='L-01 Mobile Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/L/L-01_liste-des-matchs-a-venir__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/L/L-01_liste-des-matchs-a-venir__tablet_light.webp?raw=true' width='330' alt='L-01 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/L/L-01_liste-des-matchs-a-venir__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/L/L-01_liste-des-matchs-a-venir__tablet_dark.webp?raw=true' width='330' alt='L-01 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Calendrier » · « Toutes » · « Liga » · « Ligue des champions » · « Coupe du Roi » · « Amicaux » · « Octobre – novembre 2026 » · « oct. » · « FC Barcelone » · « Real Madrid » · « Exporté » · « Bayern Munich » · « nov. » · « Atlético Madrid » · « Villarreal » · « Non inclus » · « Séville »

**Composants repérés** : `card`, `chip`

</details>

**Issues liées sur ce même écran :** [API-CAL-01](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-CAL-01%5D%22) · [API-CAL-04](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-CAL-04%5D%22) · [API-CAL-22](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-CAL-22%5D%22) · [API-CAL-23](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-CAL-23%5D%22) · [API-FOOT-02](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FOOT-02%5D%22) · [API-FOOT-06](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FOOT-06%5D%22) · [API-FOOT-07](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FOOT-07%5D%22) · [API-FOOT-13](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FOOT-13%5D%22) · [API-FOOT-21](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FOOT-21%5D%22) · [API-FOOT-30](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FOOT-30%5D%22) · [API-FOOT-50](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FOOT-50%5D%22) · [API-FOOT-53](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FOOT-53%5D%22) · [MOB-L-01](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-L-01%5D%22) · [MOB-L-02](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-L-02%5D%22) · [MOB-L-03](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-L-03%5D%22) · [MOB-L-04](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-L-04%5D%22) · [MOB-L-05](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-L-05%5D%22) · [MOB-L-06](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-L-06%5D%22) · [MOB-L-07](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-L-07%5D%22) · [MOB-L-11](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-L-11%5D%22) · [MOB-L-27](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-L-27%5D%22) · [MOB-L-28](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-L-28%5D%22) · [MOB-L-29](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-L-29%5D%22)

#### `L-02` — Vue mensuelle
_Module : Calendrier et export agenda_

<table><tr><th align='center'>Mobile · Clair</th><th align='center'>Mobile · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/L/L-02_vue-mensuelle__phone_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/L/L-02_vue-mensuelle__phone_light.webp?raw=true' width='230' alt='L-02 Mobile Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/L/L-02_vue-mensuelle__phone_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/L/L-02_vue-mensuelle__phone_dark.webp?raw=true' width='230' alt='L-02 Mobile Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/L/L-02_vue-mensuelle__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/L/L-02_vue-mensuelle__tablet_light.webp?raw=true' width='330' alt='L-02 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/L/L-02_vue-mensuelle__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/L/L-02_vue-mensuelle__tablet_dark.webp?raw=true' width='330' alt='L-02 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Calendrier » · « Octobre 2026 » · « Samedi 24 octobre » · « oct. » · « FC Barcelone » · « Real Madrid » · « Liga »

**Composants repérés** : `card`

</details>

**Issues liées sur ce même écran :** [API-CAL-05](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-CAL-05%5D%22) · [API-CAL-22](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-CAL-22%5D%22) · [API-FOOT-13](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FOOT-13%5D%22) · [MOB-L-04](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-L-04%5D%22) · [MOB-L-05](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-L-05%5D%22) · [MOB-L-08](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-L-08%5D%22) · [MOB-L-28](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-L-28%5D%22) · [MOB-L-29](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-L-29%5D%22)

#### `L-03` — Liste — chargement
_Module : Calendrier et export agenda_

<table><tr><th align='center'>Mobile · Clair</th><th align='center'>Mobile · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/L/L-03_liste-chargement__phone_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/L/L-03_liste-chargement__phone_light.webp?raw=true' width='230' alt='L-03 Mobile Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/L/L-03_liste-chargement__phone_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/L/L-03_liste-chargement__phone_dark.webp?raw=true' width='230' alt='L-03 Mobile Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/L/L-03_liste-chargement__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/L/L-03_liste-chargement__tablet_light.webp?raw=true' width='330' alt='L-03 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/L/L-03_liste-chargement__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/L/L-03_liste-chargement__tablet_dark.webp?raw=true' width='330' alt='L-03 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Calendrier » · « Toutes » · « Liga » · « Ligue des champions » · « Coupe du Roi » · « Amicaux »

**Composants repérés** : `card`, `chip`

</details>

**Issues liées sur ce même écran :** [API-CAL-04](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-CAL-04%5D%22) · [API-FOOT-13](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FOOT-13%5D%22) · [MOB-L-05](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-L-05%5D%22) · [MOB-L-09](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-L-09%5D%22) · [MOB-L-29](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-L-29%5D%22)

#### `L-09` — Abonnement — confirmation
_Module : Calendrier et export agenda_

<table><tr><th align='center'>Mobile · Clair</th><th align='center'>Mobile · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/L/L-09_abonnement-confirmation__phone_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/L/L-09_abonnement-confirmation__phone_light.webp?raw=true' width='230' alt='L-09 Mobile Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/L/L-09_abonnement-confirmation__phone_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/L/L-09_abonnement-confirmation__phone_dark.webp?raw=true' width='230' alt='L-09 Mobile Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/L/L-09_abonnement-confirmation__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/L/L-09_abonnement-confirmation__tablet_light.webp?raw=true' width='330' alt='L-09 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/L/L-09_abonnement-confirmation__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/L/L-09_abonnement-confirmation__tablet_dark.webp?raw=true' width='330' alt='L-09 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Ajouter à mon agenda » · « S’abonner » · « Mise à jour automatique » · « Recommandé » · « Ton agenda se met à jour tout seul en cas de report ou de changement d'horaire (sous 24 h). Lien webcal:// personnel. » · « S’abonner (mise à jour automatique) » · « Télécharger » · « Fichier .ics ponctuel » · « Un fichier téléchargé n'est pas mis à jour automatiquement. Préfère l'abonnement pour un suivi continu. » · « Télécharger ce calendrier » · « S’abonner au calendrier » · « Choisis l'application d'agenda qui recevra les matchs du Barça. » · « Agenda de l’appareil » · « Google Agenda » · « Outlook » · « webcal://api.univers-barca.app/calendar/feed/••••••.ics » · « Ouvrir l’agenda »

**Composants repérés** : `btn`, `card`, `sheet`

</details>

**Issues liées sur ce même écran :** [API-CAL-11](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-CAL-11%5D%22) · [API-CAL-13](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-CAL-13%5D%22) · [API-CAL-14](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-CAL-14%5D%22) · [API-CAL-15](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-CAL-15%5D%22) · [API-CAL-17](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-CAL-17%5D%22) · [API-CAL-20](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-CAL-20%5D%22) · [API-CAL-22](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-CAL-22%5D%22) · [API-CAL-23](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-CAL-23%5D%22) · [API-CAL-24](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-CAL-24%5D%22) · [MOB-L-02](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-L-02%5D%22) · [MOB-L-03](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-L-03%5D%22) · [MOB-L-17](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-L-17%5D%22) · [MOB-L-25](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-L-25%5D%22) · [MOB-L-26](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-L-26%5D%22) · [MOB-L-29](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-L-29%5D%22)

## 📐 Règles de gestion

- Cache Redis : clé `cal:list:{hash(filters,tz,lang)}` et `cal:feed:{tokenHash}`, TTL 900 s ; la liste est partagée, le flux est par abonnement.
- ETag fort = SHA-1 du contenu généré (ou `W/"{maxIcsSequence}-{count}-{filtersHash}"` calculé sans générer le fichier, cf. Match.updatedAtSchedule) ; `If-None-Match` correspondant → 304 sans corps.
- `Last-Modified` = max(updatedAtSchedule) des matchs du flux ; `If-Modified-Since` supporté.
- Invalidation anticipée : événement `match.schedule.changed` → suppression des clés par préfixe via set d'index `cal:keys:{matchId}`.
- Stampede : verrou court (SET NX 10 s) pour éviter N régénérations simultanées.
- Redis indisponible : dégradation gracieuse (génération directe, log warn), jamais d'erreur 500.

## 🔄 Comportement et états

- Deux clients avec le même abonnement : même ETag.
- Changement d'horaire : tous les caches de liste concernés invalidés ; le prochain GET régénère.

## 🛠️ Tâches

- [ ] Créer src/services/calendar-cache.service.ts : get/set/invalidateByMatch().
- [ ] Générer l'ETag dans calendar.service (computeFeedEtag).
- [ ] Middleware conditional-get (src/middleware/conditionalGet.ts) pour If-None-Match / If-Modified-Since.
- [ ] Verrou anti-stampede avec Redis SET NX PX.
- [ ] Métriques cache_hit_total / cache_miss_total {cache='calendar'} dans src/config/metrics.ts.
- [ ] Dégradation sans Redis (getRedis() null).
- [ ] Tests d'invalidation.
- [ ] Documenter les TTL dans docs/ARCHITECTURE.md.

## ✔️ Critères d'acceptation

- [ ] Étant donné un 2e appel identique en < 15 min, alors la réponse vient du cache (métrique hit +1).
- [ ] Étant donné If-None-Match avec le bon ETag, alors 304 sans corps.
- [ ] Étant donné un changement d'horaire, alors le prochain appel retourne un nouvel ETag.
- [ ] Étant donné Redis coupé, alors 200 et warning loggé.
- [ ] Étant donné 50 requêtes simultanées après invalidation, alors une seule génération.

## 🧪 Tests à écrire

- [ ] integration: cache hit/miss
- [ ] integration: 304 avec If-None-Match
- [ ] integration: invalidation par match
- [ ] integration: Redis absent
- [ ] unit: computeFeedEtag stable

## 🔗 Dépendances

À réaliser après : `API-CAL-17` · `API-CAL-04` (rechercher le code entre crochets dans le titre des issues).

## 📚 Références

- CDC Backend §5.6, §11.1
- CDC Global §2.16.1 RG-CAL-03

## 📦 Définition de terminé

`npm run lint`, `format:check`, `typecheck`, tests unitaires/intégration/sécurité verts ; Swagger (`npm run export:swagger`) à jour ; migration si schéma modifié ; PR vers `dev` ; CI verte.
