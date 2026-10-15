> **API-CAL-25** · Performance · Priorité **P1** · Taille **S** · Phase 1 — MVP

## 🎯 Contexte

Le flux est interrogé automatiquement par des milliers d'agendas ; la liste est l'une des pages les plus visitées. Le dépôt dispose de k6 (tests/load).

## ✅ Objectif

Vérifier les SLO du module sous charge.

## 🖼️ Maquettes de référence

Toutes les captures ci-dessous sont les maquettes validées (clair / sombre, mobile / tablette ou bureau). Le comportement visuel, les espacements, états et libellés doivent être reproduits à l'identique ; les tokens du design system s'appliquent (aucune couleur en dur).

#### `L-01` — Liste des matchs à venir
_Module : Calendrier et export agenda_

<table><tr><th align='center'>Mobile · Clair</th><th align='center'>Mobile · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/L/L-01_liste-des-matchs-a-venir__phone_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/L/L-01_liste-des-matchs-a-venir__phone_light.webp?raw=true' width='230' alt='L-01 Mobile Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/L/L-01_liste-des-matchs-a-venir__phone_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/L/L-01_liste-des-matchs-a-venir__phone_dark.webp?raw=true' width='230' alt='L-01 Mobile Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/L/L-01_liste-des-matchs-a-venir__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/L/L-01_liste-des-matchs-a-venir__tablet_light.webp?raw=true' width='330' alt='L-01 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/L/L-01_liste-des-matchs-a-venir__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/L/L-01_liste-des-matchs-a-venir__tablet_dark.webp?raw=true' width='330' alt='L-01 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Calendrier » · « Toutes » · « Liga » · « Ligue des champions » · « Coupe du Roi » · « Amicaux » · « Octobre – novembre 2026 » · « oct. » · « FC Barcelone » · « Real Madrid » · « Exporté » · « Bayern Munich » · « nov. » · « Atlético Madrid » · « Villarreal » · « Non inclus » · « Séville »

**Composants repérés** : `card`, `chip`

</details>

**Issues liées sur ce même écran :** [API-CAL-01](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-CAL-01%5D%22) · [API-CAL-04](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-CAL-04%5D%22) · [API-CAL-18](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-CAL-18%5D%22) · [API-CAL-23](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-CAL-23%5D%22) · [API-FOOT-02](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FOOT-02%5D%22) · [API-FOOT-06](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FOOT-06%5D%22) · [API-FOOT-07](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FOOT-07%5D%22) · [API-FOOT-13](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FOOT-13%5D%22) · [API-FOOT-21](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FOOT-21%5D%22) · [API-FOOT-30](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FOOT-30%5D%22) · [API-FOOT-50](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FOOT-50%5D%22) · [API-FOOT-53](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FOOT-53%5D%22) · [MOB-L-01](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-L-01%5D%22) · [MOB-L-02](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-L-02%5D%22) · [MOB-L-03](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-L-03%5D%22) · [MOB-L-04](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-L-04%5D%22) · [MOB-L-05](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-L-05%5D%22) · [MOB-L-06](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-L-06%5D%22) · [MOB-L-07](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-L-07%5D%22) · [MOB-L-11](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-L-11%5D%22) · [MOB-L-27](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-L-27%5D%22) · [MOB-L-28](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-L-28%5D%22) · [MOB-L-29](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-L-29%5D%22)

#### `L-09` — Abonnement — confirmation
_Module : Calendrier et export agenda_

<table><tr><th align='center'>Mobile · Clair</th><th align='center'>Mobile · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/L/L-09_abonnement-confirmation__phone_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/L/L-09_abonnement-confirmation__phone_light.webp?raw=true' width='230' alt='L-09 Mobile Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/L/L-09_abonnement-confirmation__phone_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/L/L-09_abonnement-confirmation__phone_dark.webp?raw=true' width='230' alt='L-09 Mobile Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/L/L-09_abonnement-confirmation__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/L/L-09_abonnement-confirmation__tablet_light.webp?raw=true' width='330' alt='L-09 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/L/L-09_abonnement-confirmation__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/L/L-09_abonnement-confirmation__tablet_dark.webp?raw=true' width='330' alt='L-09 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Ajouter à mon agenda » · « S’abonner » · « Mise à jour automatique » · « Recommandé » · « Ton agenda se met à jour tout seul en cas de report ou de changement d'horaire (sous 24 h). Lien webcal:// personnel. » · « S’abonner (mise à jour automatique) » · « Télécharger » · « Fichier .ics ponctuel » · « Un fichier téléchargé n'est pas mis à jour automatiquement. Préfère l'abonnement pour un suivi continu. » · « Télécharger ce calendrier » · « S’abonner au calendrier » · « Choisis l'application d'agenda qui recevra les matchs du Barça. » · « Agenda de l’appareil » · « Google Agenda » · « Outlook » · « webcal://api.univers-barca.app/calendar/feed/••••••.ics » · « Ouvrir l’agenda »

**Composants repérés** : `btn`, `card`, `sheet`

</details>

**Issues liées sur ce même écran :** [API-CAL-11](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-CAL-11%5D%22) · [API-CAL-13](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-CAL-13%5D%22) · [API-CAL-14](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-CAL-14%5D%22) · [API-CAL-15](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-CAL-15%5D%22) · [API-CAL-17](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-CAL-17%5D%22) · [API-CAL-18](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-CAL-18%5D%22) · [API-CAL-21](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-CAL-21%5D%22) · [API-CAL-23](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-CAL-23%5D%22) · [API-CAL-26](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-CAL-26%5D%22) · [MOB-L-02](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-L-02%5D%22) · [MOB-L-03](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-L-03%5D%22) · [MOB-L-17](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-L-17%5D%22) · [MOB-L-25](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-L-25%5D%22) · [MOB-L-26](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-L-26%5D%22) · [MOB-L-29](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-L-29%5D%22)

## 📐 Règles de gestion

- Scénario liste : 100 VU, 5 min, 95e centile < 300 ms (cache chaud), taux d'erreur < 0,5 %.
- Scénario flux : 200 VU sur 500 jetons, ratio 70 % requêtes conditionnelles (304), p95 < 200 ms, génération froide < 800 ms.
- Scénario pic « report de match » : invalidation + 1000 requêtes en 10 s, une seule régénération par abonnement.
- Respect du rate limit 60 req/min/IP : le script répartit les IP via X-Forwarded-For simulé (trust proxy configuré en test).

## 🔄 Comportement et états

- Les seuils échouent le job CI nocturne, pas la PR.

## 🛠️ Tâches

- [ ] Créer tests/load/calendar.js à partir de tests/load/lib.js.
- [ ] Seed de 500 abonnements (script tests/load/seed-calendar.ts).
- [ ] Seuils k6 (thresholds) dans le script.
- [ ] Ajouter au workflow de charge nocturne.
- [ ] Mettre à jour tests/load/baseline.json.
- [ ] Documenter dans docs/LOAD_TESTING.md.
- [ ] Exporter le résumé JSON dans tests/load/results.
- [ ] Alerte Slack (SLACK_WEBHOOK_URL) en cas de régression.

## ✔️ Critères d'acceptation

- [ ] Étant donné 100 VU, alors p95 liste < 300 ms.
- [ ] Étant donné 70 % de requêtes conditionnelles, alors le taux de 304 ≥ 65 %.
- [ ] Étant donné un report simultané, alors une seule régénération par flux.
- [ ] Étant donné le taux d'erreur, alors < 0,5 %.

## 🧪 Tests à écrire

- [ ] load: liste p95
- [ ] load: flux conditionnel
- [ ] load: pic report
- [ ] load: seuils baseline

## 🔗 Dépendances

À réaliser après : `API-CAL-18` · `API-CAL-17` (rechercher le code entre crochets dans le titre des issues).

## 📚 Références

- CDC Backend §10.2, §8

## 📦 Définition de terminé

`npm run lint`, `format:check`, `typecheck`, tests unitaires/intégration/sécurité verts ; Swagger (`npm run export:swagger`) à jour ; migration si schéma modifié ; PR vers `dev` ; CI verte.
