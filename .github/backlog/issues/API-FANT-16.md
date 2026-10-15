> **API-FANT-16** · Données · Priorité **P1** · Taille **M** · Phase 2 — Communautaire & compétitif

## 🎯 Contexte

FantasyLeague existe (name, ownerId, inviteCode unique, memberIds) mais sans visibilité, plafond, historique d'adhésion ni index. Le mobile propose « Créer une ligue » (« Génère un code à partager ») et « Rejoindre avec un code » (BARCA-) en H-15. Les endpoints de ligue ne figurent pas au CDC §3.5 : les contrats ci-dessous sont des propositions à confirmer, cohérentes avec le classement « entre amis via code d'invitation » du CDC.

## ✅ Objectif

Un modèle de ligue complet avec membres, visibilité privée/publique et code unique.

## 🖼️ Maquettes de référence

Toutes les captures ci-dessous sont les maquettes validées (clair / sombre, mobile / tablette ou bureau). Le comportement visuel, les espacements, états et libellés doivent être reproduits à l'identique ; les tokens du design system s'appliquent (aucune couleur en dur).

#### `H-12` — Classement entre amis
_Module : Fantasy Barça_

<table><tr><th align='center'>Mobile · Clair</th><th align='center'>Mobile · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/H/H-12_classement-entre-amis__phone_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/H/H-12_classement-entre-amis__phone_light.webp?raw=true' width='230' alt='H-12 Mobile Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/H/H-12_classement-entre-amis__phone_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/H/H-12_classement-entre-amis__phone_dark.webp?raw=true' width='230' alt='H-12 Mobile Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/H/H-12_classement-entre-amis__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/H/H-12_classement-entre-amis__tablet_light.webp?raw=true' width='330' alt='H-12 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/H/H-12_classement-entre-amis__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/H/H-12_classement-entre-amis__tablet_dark.webp?raw=true' width='330' alt='H-12 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Journée 11 » · « Mon équipe » · « Classement » · « Règles » · « Aïcha Ngono » · « 812 pts · J11 : +78 » · « Mamadou Diallo » · « 790 pts · J11 : +64 » · « Boris T. » · « Toi » · « 774 pts · J11 : +70 » · « Lucía Fernández » · « 751 pts · J11 : +55 » · « Kevin Mballa » · « 702 pts · J11 : +61 » · « Inviter des amis » · « Créer une ligue »

**Composants repérés** : `avatar`, `btn`, `card`

</details>

**Issues liées sur ce même écran :** [API-FANT-14](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FANT-14%5D%22) · [API-FANT-15](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FANT-15%5D%22) · [API-FANT-17](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FANT-17%5D%22) · [API-FANT-18](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FANT-18%5D%22) · [API-FANT-22](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FANT-22%5D%22) · [API-FANT-24](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FANT-24%5D%22) · [API-FANT-33](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FANT-33%5D%22) · [MOB-H-01](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-H-01%5D%22) · [MOB-H-02](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-H-02%5D%22) · [MOB-H-03](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-H-03%5D%22) · [MOB-H-04](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-H-04%5D%22) · [MOB-H-07](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-H-07%5D%22) · [MOB-H-22](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-H-22%5D%22) · [MOB-H-25](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-H-25%5D%22) · [MOB-H-32](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-H-32%5D%22) · [MOB-H-34](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-H-34%5D%22)

#### `H-15` — Créer ou rejoindre une ligue
_Module : Fantasy Barça_

<table><tr><th align='center'>Mobile · Clair</th><th align='center'>Mobile · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/H/H-15_creer-ou-rejoindre-une-ligue__phone_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/H/H-15_creer-ou-rejoindre-une-ligue__phone_light.webp?raw=true' width='230' alt='H-15 Mobile Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/H/H-15_creer-ou-rejoindre-une-ligue__phone_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/H/H-15_creer-ou-rejoindre-une-ligue__phone_dark.webp?raw=true' width='230' alt='H-15 Mobile Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/H/H-15_creer-ou-rejoindre-une-ligue__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/H/H-15_creer-ou-rejoindre-une-ligue__tablet_light.webp?raw=true' width='330' alt='H-15 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/H/H-15_creer-ou-rejoindre-une-ligue__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/H/H-15_creer-ou-rejoindre-une-ligue__tablet_dark.webp?raw=true' width='330' alt='H-15 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Journée 11 » · « Mon équipe » · « Classement » · « Règles » · « Aïcha Ngono » · « 812 pts · J11 : +78 » · « Mamadou Diallo » · « 790 pts · J11 : +64 » · « Boris T. » · « Toi » · « 774 pts · J11 : +70 » · « Lucía Fernández » · « 751 pts · J11 : +55 » · « Kevin Mballa » · « 702 pts · J11 : +61 » · « Ligue entre amis » · « Créer une ligue » · « Génère un code à partager » · « Rejoindre avec un code » · « Saisis le code d'un ami » · « Code » · « BARCA- »

**Composants repérés** : `avatar`, `card`, `input`, `sheet`

</details>

**Issues liées sur ce même écran :** [API-FANT-15](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FANT-15%5D%22) · [API-FANT-17](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FANT-17%5D%22) · [API-FANT-18](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FANT-18%5D%22) · [MOB-H-25](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-H-25%5D%22) · [MOB-H-26](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-H-26%5D%22)

## 📐 Règles de gestion

- Visibilité : 'private' (défaut, accès par code uniquement) ou 'public' (listée et rejoignable sans code) ; la visibilité publique est une extension à confirmer (le CDC ne mentionne que le code d'invitation).
- Code d'invitation : format BARCA-XXXXXX, 6 caractères majuscules sans ambiguïté (alphabet 23456789ABCDEFGHJKMNPQRSTUVWXYZ), unique, généré cryptographiquement (crypto.randomInt) avec 5 tentatives de collision.
- Plafond de membres : 50 par ligue (FANTASY_LEAGUE_MAX_MEMBERS, à confirmer) ; ligues par utilisateur : 10 maximum (à confirmer) ; nom 3 à 30 caractères nettoyé (sanitize), filtré par la liste de modération des pseudos.
- Le propriétaire est membre d'office ; les memberIds sont uniques ; un utilisateur supprimé est retiré des ligues (cf. rgpd).
- Membership détaillé dans FantasyLeagueMember {leagueId, userId, role: owner|member, joinedAt} (unique {leagueId,userId}) pour l'historique ; memberIds reste dénormalisé pour le compteur.
- Nom par défaut si absent : « Ligue de {displayName} ».

## 🛠️ Tâches

- [ ] Modifier FantasyLeague dans src/models/fantasy.model.ts : visibility, maxMembers, memberCount, status ('active'|'archived'), description (max 120), ownerId required, index {ownerId:1}, {visibility:1, memberCount:-1}.
- [ ] Créer le modèle FantasyLeagueMember avec index unique {leagueId:1, userId:1} et {userId:1, joinedAt:-1}.
- [ ] Créer src/services/fantasy/league-code.ts : generateLeagueCode() avec alphabet sûr et retry.
- [ ] Script de migration : ligues existantes -> visibility 'private', memberCount = memberIds.length, création des FantasyLeagueMember.
- [ ] Typer FantasyLeagueDoc, exporter dans models/index.ts.
- [ ] Ajouter les constantes de limites dans config/env.ts (Joi) avec valeurs par défaut.
- [ ] Ajouter les schémas Swagger League, LeagueMember.
- [ ] Seed de dev : 3 ligues (Aïcha, Mamadou, Boris) correspondant à la maquette H-12.

## ✔️ Critères d'acceptation

- [ ] Étant donné 10 000 codes générés, alors aucun doublon et tous respectent ^BARCA-[2-9A-HJKMNP-Z]{6}$.
- [ ] Étant donné une ligue de 50 membres, quand un 51e rejoint, alors refus LEAGUE_FULL.
- [ ] Étant donné un nom de 2 caractères, alors 422.
- [ ] Étant donné la migration rejouée, alors aucun doublon de membership.
- [ ] Étant donné un propriétaire, alors il est présent dans FantasyLeagueMember avec role owner.

## 🧪 Tests à écrire

- [ ] Unitaire : generateLeagueCode (format, entropie).
- [ ] Unitaire : retry sur collision simulée.
- [ ] Intégration : index unique inviteCode.
- [ ] Intégration : migration idempotente.
- [ ] Intégration : plafond de membres.

## 📚 Références

- CDC Backend §3.5
- CDC Backend §4.4
- CDC Global §2.7

## 📦 Définition de terminé

`npm run lint`, `format:check`, `typecheck`, tests unitaires/intégration/sécurité verts ; Swagger (`npm run export:swagger`) à jour ; migration si schéma modifié ; PR vers `dev` ; CI verte.
