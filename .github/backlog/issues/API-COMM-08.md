> **API-COMM-08** · Fonctionnel · Priorité **P0** · Taille **L** · Phase 2 — Communautaire & compétitif

## 🎯 Contexte

Les compteurs affichés (« 12 480 culés dans 96 pays », « Espagne 5 210 », « Yaoundé ≈ 720 ») viennent d'agrégats précalculés, recalculés toutes les 10 minutes (CDC Backend §5.6) dans un worker BullMQ.

## ✅ Objectif

Implémenter le worker 'community' / 'recompute-aggregates' et son cron.

## 🖼️ Maquettes de référence

Toutes les captures ci-dessous sont les maquettes validées (clair / sombre, mobile / tablette ou bureau). Le comportement visuel, les espacements, états et libellés doivent être reproduits à l'identique ; les tokens du design system s'appliquent (aucune couleur en dur).

#### `J-01` — Carte du monde
_Module : Carte communautaire_

<table><tr><th align='center'>Mobile · Clair</th><th align='center'>Mobile · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/J/J-01_carte-du-monde__phone_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/J/J-01_carte-du-monde__phone_light.webp?raw=true' width='230' alt='J-01 Mobile Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/J/J-01_carte-du-monde__phone_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/J/J-01_carte-du-monde__phone_dark.webp?raw=true' width='230' alt='J-01 Mobile Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/J/J-01_carte-du-monde__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/J/J-01_carte-du-monde__tablet_light.webp?raw=true' width='330' alt='J-01 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/J/J-01_carte-du-monde__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/J/J-01_carte-du-monde__tablet_dark.webp?raw=true' width='330' alt='J-01 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « 12 480 culés dans 96 pays » · « Rechercher un pays ou une ville » · « Tous » · « Groupes » · « Watch parties » · « Près de moi » · « Dans le monde » · « 12 480 culés » · « 96 pays » · « 🇪🇸 » · « Espagne » · « 5 210 » · « 🇫🇷 » · « France » · « 2 140 » · « 🇨🇲 » · « Cameroun » · « 1 240 »

**Composants repérés** : `avatar`, `chip`, `map`

</details>

**Issues liées sur ce même écran :** [API-COMM-07](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-COMM-07%5D%22) · [API-COMM-09](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-COMM-09%5D%22) · [API-COMM-10](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-COMM-10%5D%22) · [API-COMM-30](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-COMM-30%5D%22) · [API-COMM-32](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-COMM-32%5D%22) · [API-COMM-33](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-COMM-33%5D%22) · [MOB-J-01](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-J-01%5D%22) · [MOB-J-02](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-J-02%5D%22) · [MOB-J-04](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-J-04%5D%22) · [MOB-J-05](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-J-05%5D%22) · [MOB-J-06](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-J-06%5D%22) · [MOB-J-07](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-J-07%5D%22) · [MOB-J-08](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-J-08%5D%22) · [MOB-J-09](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-J-09%5D%22) · [MOB-J-23](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-J-23%5D%22) · [MOB-J-24](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-J-24%5D%22) · [MOB-J-25](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-J-25%5D%22) · [MOB-J-26](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-J-26%5D%22) · [MOB-J-27](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-J-27%5D%22)

#### `J-03` — Zoom ville — Yaoundé
_Module : Carte communautaire_

<table><tr><th align='center'>Mobile · Clair</th><th align='center'>Mobile · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/J/J-03_zoom-ville-yaounde__phone_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/J/J-03_zoom-ville-yaounde__phone_light.webp?raw=true' width='230' alt='J-03 Mobile Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/J/J-03_zoom-ville-yaounde__phone_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/J/J-03_zoom-ville-yaounde__phone_dark.webp?raw=true' width='230' alt='J-03 Mobile Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/J/J-03_zoom-ville-yaounde__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/J/J-03_zoom-ville-yaounde__tablet_light.webp?raw=true' width='330' alt='J-03 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/J/J-03_zoom-ville-yaounde__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/J/J-03_zoom-ville-yaounde__tablet_dark.webp?raw=true' width='330' alt='J-03 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « 12 480 culés dans 96 pays » · « Rechercher un pays ou une ville » · « Tous » · « Groupes » · « Watch parties » · « Près de moi » · « Yaoundé · ≈ 720 culés » · « Autour de toi » · « Zone approximative » · « Aucune position exacte n'est affichée : seuls des compteurs par zone et les groupes publics apparaissent. » · « Culés Cameroun » · « Yaoundé · Bastos · 721 membres · » · « Watch party sam. » · « Rejoindre »

**Composants repérés** : `avatar`, `btn`, `card`, `chip`, `map`

</details>

**Issues liées sur ce même écran :** [API-COMM-02](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-COMM-02%5D%22) · [API-COMM-07](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-COMM-07%5D%22) · [API-COMM-09](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-COMM-09%5D%22) · [API-COMM-11](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-COMM-11%5D%22) · [API-COMM-13](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-COMM-13%5D%22) · [API-COMM-32](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-COMM-32%5D%22) · [MOB-J-01](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-J-01%5D%22) · [MOB-J-02](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-J-02%5D%22) · [MOB-J-04](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-J-04%5D%22) · [MOB-J-07](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-J-07%5D%22) · [MOB-J-08](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-J-08%5D%22) · [MOB-J-09](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-J-09%5D%22) · [MOB-J-11](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-J-11%5D%22) · [MOB-J-23](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-J-23%5D%22) · [MOB-J-24](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-J-24%5D%22) · [MOB-J-25](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-J-25%5D%22) · [MOB-J-26](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-J-26%5D%22) · [MOB-J-27](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-J-27%5D%22)

#### `J-05` — Résultats pour un pays
_Module : Carte communautaire_

<table><tr><th align='center'>Mobile · Clair</th><th align='center'>Mobile · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/J/J-05_resultats-pour-un-pays__phone_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/J/J-05_resultats-pour-un-pays__phone_light.webp?raw=true' width='230' alt='J-05 Mobile Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/J/J-05_resultats-pour-un-pays__phone_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/J/J-05_resultats-pour-un-pays__phone_dark.webp?raw=true' width='230' alt='J-05 Mobile Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/J/J-05_resultats-pour-un-pays__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/J/J-05_resultats-pour-un-pays__tablet_light.webp?raw=true' width='330' alt='J-05 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/J/J-05_resultats-pour-un-pays__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/J/J-05_resultats-pour-un-pays__tablet_dark.webp?raw=true' width='330' alt='J-05 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « 12 480 culés dans 96 pays » · « Cameroun » · « 🇨🇲 » · « 1 240 culés · 6 groupes locaux · 2 watch parties » · « 1 240 » · « Culés » · « Groupes » · « Événements » · « Culés Cameroun » · « Yaoundé · 721 membres · » · « Watch party sam. » · « Rejoindre »

**Composants repérés** : `avatar`, `btn`, `card`, `map`

</details>

**Issues liées sur ce même écran :** [API-COMM-11](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-COMM-11%5D%22) · [API-COMM-12](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-COMM-12%5D%22) · [API-COMM-14](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-COMM-14%5D%22) · [API-COMM-32](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-COMM-32%5D%22) · [MOB-J-03](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-J-03%5D%22) · [MOB-J-13](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-J-13%5D%22) · [MOB-J-24](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-J-24%5D%22) · [MOB-J-26](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-J-26%5D%22)

## 📐 Règles de gestion

- Seuls les comptes status='active', mapVisibility≠'hidden' avec zone renseignée sont comptés ; 'country' compte uniquement au niveau pays/région, 'city' à tous les niveaux.
- Seuil de confidentialité : une ville n'est publiée que si count ≥ COMMUNITY_MIN_CITY_COUNT (défaut 5, variable d'env à valider) pour empêcher l'identification ; en dessous, le compte remonte au niveau pays.
- displayCount : villes ≥ 100 arrondies à la dizaine (≈ 720), sinon valeur exacte ; pays exacts.
- Calcul via aggregation $group sur users (countryCode, cityId) puis bulkWrite upsert ; documents obsolètes (count=0) supprimés ; computedAt mis à jour.
- Idempotent, verrou Redis 'lock:community:aggregates' (TTL 9 min) pour éviter les exécutions concurrentes ; en cas d'échec : 5 tentatives backoff exponentiel puis dead-letter.

## 🗄️ Données

- locationaggregates
- users

## 🛠️ Tâches

- [ ] Ajouter 'community' à QUEUE_NAMES dans src/jobs/queues.ts.
- [ ] Créer src/jobs/workers/community-aggregates.worker.ts et l'enregistrer via registerWorker.
- [ ] Ajouter le cron '*/10 * * * *' dans src/jobs/scheduler.ts.
- [ ] Créer services/location-aggregate.service.ts (computeAll, computeForUser incrémental).
- [ ] Invalider les clés Redis 'map:*' en fin de job.
- [ ] Exposer une métrique Prometheus community_aggregate_duration_seconds et community_aggregate_last_success_timestamp.
- [ ] Gérer le mode incrémental scope=user (revocation, changement de zone).
- [ ] Documenter la file dans docs/ARCHITECTURE.md.

## ✔️ Critères d'acceptation

- [ ] Étant donné 720 comptes 'city' à Yaoundé, quand le job tourne, alors l'agrégat city Yaoundé a displayCount 720 arrondi à la dizaine.
- [ ] Étant donné 3 comptes dans une petite ville (< seuil), quand le job tourne, alors ils sont comptés au niveau pays seulement.
- [ ] Étant donné un compte 'hidden', quand le job tourne, alors il n'est compté nulle part.
- [ ] Étant donné deux jobs simultanés, quand le deuxième démarre, alors il est ignoré grâce au verrou.

## 🧪 Tests à écrire

- [ ] Test d'intégration : agrégats pays/ville avec fixtures.
- [ ] Test unitaire : arrondi displayCount.
- [ ] Test unitaire : seuil de confidentialité.
- [ ] Test d'intégration : verrou concurrent.
- [ ] Test unitaire : compte suspendu/banni exclu.

## 🔗 Dépendances

À réaliser après : `API-COMM-07` · `API-COMM-06` (rechercher le code entre crochets dans le titre des issues).

## 📚 Références

- CDC Backend §5.6
- CDC Global §2.16.2

## 📦 Définition de terminé

`npm run lint`, `format:check`, `typecheck`, tests unitaires/intégration/sécurité verts ; Swagger (`npm run export:swagger`) à jour ; migration si schéma modifié ; PR vers `dev` ; CI verte.
