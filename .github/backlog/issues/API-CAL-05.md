> **API-CAL-05** · API · Priorité **P1** · Taille **S** · Phase 1 — MVP

## 🎯 Contexte

L-02 montre le mois « Octobre 2026 », un jour sélectionné (« Samedi 24 octobre ») et la carte du match du jour (20:00 · Liga). La grille a besoin des jours contenant un match et du détail pour un jour donné, sans télécharger toute la saison.

## ✅ Objectif

Exposer les matchs d'un mois groupés par jour dans le fuseau de l'utilisateur.

## 🖼️ Maquettes de référence

Toutes les captures ci-dessous sont les maquettes validées (clair / sombre, mobile / tablette ou bureau). Le comportement visuel, les espacements, états et libellés doivent être reproduits à l'identique ; les tokens du design system s'appliquent (aucune couleur en dur).

#### `L-02` — Vue mensuelle
_Module : Calendrier et export agenda_

<table><tr><th align='center'>Mobile · Clair</th><th align='center'>Mobile · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/L/L-02_vue-mensuelle__phone_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/L/L-02_vue-mensuelle__phone_light.webp?raw=true' width='230' alt='L-02 Mobile Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/L/L-02_vue-mensuelle__phone_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/L/L-02_vue-mensuelle__phone_dark.webp?raw=true' width='230' alt='L-02 Mobile Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/L/L-02_vue-mensuelle__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/L/L-02_vue-mensuelle__tablet_light.webp?raw=true' width='330' alt='L-02 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/L/L-02_vue-mensuelle__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/L/L-02_vue-mensuelle__tablet_dark.webp?raw=true' width='330' alt='L-02 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Calendrier » · « Octobre 2026 » · « Samedi 24 octobre » · « oct. » · « FC Barcelone » · « Real Madrid » · « Liga »

**Composants repérés** : `card`

</details>

**Issues liées sur ce même écran :** [API-CAL-18](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-CAL-18%5D%22) · [API-CAL-22](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-CAL-22%5D%22) · [API-FOOT-13](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FOOT-13%5D%22) · [MOB-L-04](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-L-04%5D%22) · [MOB-L-05](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-L-05%5D%22) · [MOB-L-08](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-L-08%5D%22) · [MOB-L-28](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-L-28%5D%22) · [MOB-L-29](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-L-29%5D%22)

## 📐 Règles de gestion

- Query : `month` (YYYY-MM, obligatoire, entre -12 et +18 mois), mêmes filtres competitions/squads.
- Le groupement par jour se fait dans le fuseau de l'utilisateur (un match à 23:30 UTC peut tomber le lendemain en WAT).
- Réponse : `{month, timezone, days:[{date:'2026-10-24', matches:[…]}], matchDays:['2026-10-24',…]}` ; 62 matchs max par mois (borne de sécurité).
- Cache identique à la liste (15 min) avec clé incluant month+filtres+timezone.

## 🔄 Comportement et états

- Mois sans match : days [] et matchDays [] (200).
- Mois hors bornes : 422.

## 🔌 Contrats d'API

| Méthode | Chemin | Description | Requête | Réponse |
| --- | --- | --- | --- | --- |
| `GET` | `/api/v1/calendar/matches/month` | Matchs d'un mois groupés par jour | ?month=2026-10 | {success:true,data:{month,timezone,days:[{date,matches:[…]}],matchDays:[…]}} |

## 🛠️ Tâches

- [ ] Ajouter monthQuery à src/validators/calendar.validator.ts.
- [ ] Implémenter groupByLocalDay() dans src/utils/timezone.ts.
- [ ] Ajouter calendar.service.listMonth() avec bornes UTC du mois local.
- [ ] Route r.get('/calendar/matches/month', …).
- [ ] Clé de cache cal:month:{hash}.
- [ ] Annotations Swagger.
- [ ] Index { kickoffAt:1, status:1 } vérifié via explain().
- [ ] Test de non-régression sur un match à 23:30Z.

## ✔️ Critères d'acceptation

- [ ] Étant donné un match le 24/10 à 18:00Z, quand month=2026-10 en Africa/Douala, alors il apparaît dans days[date='2026-10-24'].
- [ ] Étant donné un match à 23:30Z, quand le fuseau est Africa/Douala, alors il est groupé au 25/10.
- [ ] Étant donné month=2030-01, alors la réponse est 422.
- [ ] Étant donné un mois vide, alors days est un tableau vide.

## 🧪 Tests à écrire

- [ ] unit: groupByLocalDay à minuit local
- [ ] integration: month valide
- [ ] integration: month hors bornes → 422
- [ ] integration: cache hit sur 2e appel

## 🔗 Dépendances

À réaliser après : `API-CAL-04` (rechercher le code entre crochets dans le titre des issues).

## 📚 Références

- CDC Global §2.9

## 📦 Définition de terminé

`npm run lint`, `format:check`, `typecheck`, tests unitaires/intégration/sécurité verts ; Swagger (`npm run export:swagger`) à jour ; migration si schéma modifié ; PR vers `dev` ; CI verte.
