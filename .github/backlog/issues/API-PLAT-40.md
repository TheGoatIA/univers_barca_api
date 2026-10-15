> **API-PLAT-40** · Tests · Priorité **P0** · Taille **M** · Phase 0 — Socle technique

## 🎯 Contexte

Les seuils actuels sont globaux (P95_MS 1500, P99_MS 3000, P95_BROWSE_MS 800, ERROR_RATE 0,01). Le CDC Global §3.1 vise p95 < 300 ms hors IA ; chaque endpoint doit avoir son propre budget pour repérer une régression locale.

## ✅ Objectif

Définir un fichier de budgets par endpoint appliqué automatiquement comme thresholds k6.

## 🖼️ Maquettes de référence

Toutes les captures ci-dessous sont les maquettes validées (clair / sombre, mobile / tablette ou bureau). Le comportement visuel, les espacements, états et libellés doivent être reproduits à l'identique ; les tokens du design system s'appliquent (aucune couleur en dur).

#### `A-04` — Erreur serveur 5xx
_Module : Lancement et système_

<table><tr><th align='center'>Mobile · Clair</th><th align='center'>Mobile · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/A/A-04_erreur-serveur-5xx__phone_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/A/A-04_erreur-serveur-5xx__phone_light.webp?raw=true' width='230' alt='A-04 Mobile Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/A/A-04_erreur-serveur-5xx__phone_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/A/A-04_erreur-serveur-5xx__phone_dark.webp?raw=true' width='230' alt='A-04 Mobile Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/A/A-04_erreur-serveur-5xx__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/A/A-04_erreur-serveur-5xx__tablet_light.webp?raw=true' width='330' alt='A-04 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/A/A-04_erreur-serveur-5xx__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/A/A-04_erreur-serveur-5xx__tablet_dark.webp?raw=true' width='330' alt='A-04 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Quiz » · « Petit souci de notre côté » · « Le service est momentanément indisponible. Notre équipe est déjà dessus. Réessaie dans quelques instants. » · « Réessayer » · « Code d'incident : UB-5C21-8F3A »

**Composants repérés** : `btn`

</details>

**Issues liées sur ce même écran :** [API-AUTH-44](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-AUTH-44%5D%22) · [API-PLAT-05](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-PLAT-05%5D%22) · [API-PLAT-07](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-PLAT-07%5D%22) · [API-PLAT-24](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-PLAT-24%5D%22) · [API-PLAT-33](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-PLAT-33%5D%22) · [API-PLAT-34](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-PLAT-34%5D%22) · [API-PLAT-41](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-PLAT-41%5D%22) · [API-PLAT-55](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-PLAT-55%5D%22) · [MOB-A-05](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-A-05%5D%22) · [MOB-A-06](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-A-06%5D%22) · [MOB-A-17](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-A-17%5D%22) · [MOB-A-18](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-A-18%5D%22) · [MOB-A-19](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-A-19%5D%22)

## 📐 Règles de gestion

- tests/load/thresholds.json : par endpoint { p95_ms, p99_ms, errorRate, minRps? } ; défauts : lecture catalogue p95 300 ms / p99 800 ms ; /config et /version p95 100 ms ; login (Argon2id) p95 800 ms ; routes admin p95 500 ms ; export/IA exemptés avec budget spécifique (premier token < 2 s, wallpaper < 15 s).
- Taux d'erreur < 1 % global, 0 % de 5xx hors stress ; les 429 attendus sont exclus des erreurs via tags expected_response.
- Seuils CI plus larges (×2) pour les runners bruités ; seuils stricts sur staging (profil load).
- Génération des thresholds k6 { 'http_req_duration{endpoint:GET /players/:id}': ['p(95)<300'] } depuis le JSON.
- Toute modification d'un budget doit être justifiée dans la PR (diff lisible).

## 🛠️ Tâches

- [ ] Créer tests/load/thresholds.json et tests/load/lib/thresholds.js (générateur).
- [ ] Taguer chaque requête avec endpoint normalisé.
- [ ] Ajouter les Trends manquantes (config, version, flags).
- [ ] Mettre à jour scripts/load-compare.mjs pour comparer par endpoint.
- [ ] Documenter le tableau des budgets dans docs/LOAD_TESTING.md.
- [ ] Sortie du résumé: tableau Markdown endpoint × p95 × seuil × statut.

## ✔️ Critères d'acceptation

- [ ] Étant donné /players/:id avec p95 à 450 ms (> 300), alors k6 sort en échec pour ce seuil précis.
- [ ] Étant donné des 429 attendus lors du test spike, alors ils ne comptent pas comme erreurs.
- [ ] Étant donné un endpoint sans budget, alors check:load-coverage le signale.
- [ ] Étant donné le profil CI, alors les seuils sont doublés.

## 🧪 Tests à écrire

- [ ] Unitaire : générateur de thresholds.
- [ ] Exécution k6 smoke avec seuils.
- [ ] Unitaire : load-compare par endpoint.
- [ ] CI : échec simulé sur dégradation 40 %.

## 🔗 Dépendances

À réaliser après : `API-PLAT-39` (rechercher le code entre crochets dans le titre des issues).

## 📚 Références

- CDC Global §3.1
- docs/LOAD_TESTING.md

## 📦 Définition de terminé

`npm run lint`, `format:check`, `typecheck`, tests unitaires/intégration/sécurité verts ; Swagger (`npm run export:swagger`) à jour ; migration si schéma modifié ; PR vers `dev` ; CI verte.
