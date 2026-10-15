> **API-CAL-21** · Tests · Priorité **P0** · Taille **M** · Phase 1 — MVP

## 🎯 Contexte

RG-CAL-01 : le flux .ics doit être validé par au moins un outil automatisé avant chaque mise en production. Il faut donc une étape CI bloquante.

## ✅ Objectif

Valider structurellement des flux générés sur un jeu de données représentatif.

## 🖼️ Maquettes de référence

Toutes les captures ci-dessous sont les maquettes validées (clair / sombre, mobile / tablette ou bureau). Le comportement visuel, les espacements, états et libellés doivent être reproduits à l'identique ; les tokens du design system s'appliquent (aucune couleur en dur).

#### `L-10` — Fichier .ics téléchargé
_Module : Calendrier et export agenda_

<table><tr><th align='center'>Mobile · Clair</th><th align='center'>Mobile · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/L/L-10_fichier-ics-telecharge__phone_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/L/L-10_fichier-ics-telecharge__phone_light.webp?raw=true' width='230' alt='L-10 Mobile Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/L/L-10_fichier-ics-telecharge__phone_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/L/L-10_fichier-ics-telecharge__phone_dark.webp?raw=true' width='230' alt='L-10 Mobile Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/L/L-10_fichier-ics-telecharge__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/L/L-10_fichier-ics-telecharge__tablet_light.webp?raw=true' width='330' alt='L-10 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/L/L-10_fichier-ics-telecharge__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/L/L-10_fichier-ics-telecharge__tablet_dark.webp?raw=true' width='330' alt='L-10 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Ajouter à mon agenda » · « S’abonner » · « Mise à jour automatique » · « Recommandé » · « Ton agenda se met à jour tout seul en cas de report ou de changement d'horaire (sous 24 h). Lien webcal:// personnel. » · « S’abonner (mise à jour automatique) » · « Télécharger » · « Fichier .ics ponctuel » · « Un fichier téléchargé n'est pas mis à jour automatiquement. Préfère l'abonnement pour un suivi continu. » · « Télécharger ce calendrier » · « Calendrier téléchargé » · « univers-barca-2026-27.ics · 24 matchs » · « Ce fichier ne se met pas à jour automatiquement. Utilise l'abonnement pour suivre les reports. » · « Ouvrir dans l’agenda » · « S’abonner plutôt »

**Composants repérés** : `btn`, `card`, `modal`

</details>

**Issues liées sur ce même écran :** [API-CAL-08](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-CAL-08%5D%22) · [API-CAL-12](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-CAL-12%5D%22) · [API-CAL-22](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-CAL-22%5D%22) · [MOB-L-02](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-L-02%5D%22) · [MOB-L-03](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-L-03%5D%22) · [MOB-L-19](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-L-19%5D%22) · [MOB-L-25](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-L-25%5D%22) · [MOB-L-29](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-L-29%5D%22)

## 📐 Règles de gestion

- Outil principal : parseur ical.js (jcal) strict ; outil secondaire : validateur icalendar.org via script optionnel manuel (documenté).
- Jeux de test : 24 matchs, match reporté, match annulé, caractères accentués, lieu absent, 400 événements, liste vide.
- Règles vérifiées : CRLF, lignes ≤ 75 octets, propriétés obligatoires (UID, DTSTAMP, DTSTART), UID uniques, DTEND > DTSTART, VALARM avec ACTION/TRIGGER/DESCRIPTION.
- Étape CI `npm run test:ics` ajoutée au workflow et bloquante pour la branche principale.

## 🔄 Comportement et états

- Une régression de pliage de ligne fait échouer le job.

## 🛠️ Tâches

- [ ] Ajouter ical.js en devDependency.
- [ ] Créer tests/unit/ics-rfc5545.test.ts avec helper assertValidIcs().
- [ ] Fixtures dans tests/helpers/fixtures/.
- [ ] Script npm `test:ics` dans package.json.
- [ ] Étape dans .github/workflows/ci.yml (needs: lint).
- [ ] Documenter la procédure de validation manuelle (Google/Apple/Outlook) dans docs/CALENDAR_QA.md.
- [ ] Archiver un .ics d'exemple comme artefact CI.

## ✔️ Critères d'acceptation

- [ ] Étant donné les 7 jeux de test, alors assertValidIcs passe pour chacun.
- [ ] Étant donné un VEVENT sans UID, alors le test échoue.
- [ ] Étant donné un fichier avec LF au lieu de CRLF, alors le test échoue.
- [ ] Étant donné la CI, alors l'étape ics est requise pour merge.

## 🧪 Tests à écrire

- [ ] unit: assertValidIcs détecte un UID manquant
- [ ] unit: détecte une ligne > 75 octets
- [ ] unit: 400 événements valides
- [ ] unit: calendrier vide valide
- [ ] unit: UID uniques

## 🔗 Dépendances

À réaliser après : `API-CAL-10` · `API-CAL-11` (rechercher le code entre crochets dans le titre des issues).

## 📚 Références

- CDC Global §2.16.1 RG-CAL-01

## 📦 Définition de terminé

`npm run lint`, `format:check`, `typecheck`, tests unitaires/intégration/sécurité verts ; Swagger (`npm run export:swagger`) à jour ; migration si schéma modifié ; PR vers `dev` ; CI verte.
