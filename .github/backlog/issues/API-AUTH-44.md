> **API-AUTH-44** · Internationalisation · Priorité **P1** · Taille **M** · Phase 1 — MVP

## 🎯 Contexte

`src/i18n` est vide et les messages d'erreur sont en français en dur. Les écrans affichent des textes localisés (B-07 « Adresse e-mail invalide », B-17 « Identifiants incorrects », A-04 avec « Code d'incident : UB-5C21-8F3A », WA-09 « Identifiant de corrélation : trace-9f3a21c8 »).

## ✅ Objectif

Localiser chaque `code` d'erreur selon la langue de l'utilisateur et exposer l'identifiant d'incident.

## 🖼️ Maquettes de référence

Toutes les captures ci-dessous sont les maquettes validées (clair / sombre, mobile / tablette ou bureau). Le comportement visuel, les espacements, états et libellés doivent être reproduits à l'identique ; les tokens du design system s'appliquent (aucune couleur en dur).

#### `B-07` — Inscription — erreurs de validation
_Module : Onboarding et authentification_

<table><tr><th align='center'>Mobile · Clair</th><th align='center'>Mobile · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/B/B-07_inscription-erreurs-de-validation__phone_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/B/B-07_inscription-erreurs-de-validation__phone_light.webp?raw=true' width='230' alt='B-07 Mobile Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/B/B-07_inscription-erreurs-de-validation__phone_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/B/B-07_inscription-erreurs-de-validation__phone_dark.webp?raw=true' width='230' alt='B-07 Mobile Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/B/B-07_inscription-erreurs-de-validation__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/B/B-07_inscription-erreurs-de-validation__tablet_light.webp?raw=true' width='330' alt='B-07 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/B/B-07_inscription-erreurs-de-validation__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/B/B-07_inscription-erreurs-de-validation__tablet_dark.webp?raw=true' width='330' alt='B-07 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Univers » · « Barça » · « Ton compagnon » · « culé, au quotidien. » · « Assistant IA, jeux quotidiens, histoire du club et communauté de supporters, au même endroit. » · « Application communautaire non officielle · fan-made » · « 1/4 » · « Crée ton compte » · « Quelques secondes suffisent. » · « Pseudo » · « bo » · « 3 caractères minimum » · « E-mail » · « boris@exemple » · « Adresse e-mail invalide » · « Mot de passe » · « •••••• » · « Force : » · « moyenne » · « · ajoute un chiffre et un symbole » · « Continuer »

**Composants repérés** : `btn`, `input`

</details>

**Issues liées sur ce même écran :** [API-AUTH-05](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-AUTH-05%5D%22) · [API-AUTH-06](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-AUTH-06%5D%22) · [MOB-B-10](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-B-10%5D%22) · [MOB-B-11](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-B-11%5D%22) · [MOB-B-28](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-B-28%5D%22) · [MOB-B-29](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-B-29%5D%22)

#### `B-17` — Connexion — erreur et chargement
_Module : Onboarding et authentification_

<table><tr><th align='center'>Mobile · Clair</th><th align='center'>Mobile · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/B/B-17_connexion-erreur-et-chargement__phone_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/B/B-17_connexion-erreur-et-chargement__phone_light.webp?raw=true' width='230' alt='B-17 Mobile Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/B/B-17_connexion-erreur-et-chargement__phone_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/B/B-17_connexion-erreur-et-chargement__phone_dark.webp?raw=true' width='230' alt='B-17 Mobile Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/B/B-17_connexion-erreur-et-chargement__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/B/B-17_connexion-erreur-et-chargement__tablet_light.webp?raw=true' width='330' alt='B-17 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/B/B-17_connexion-erreur-et-chargement__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/B/B-17_connexion-erreur-et-chargement__tablet_dark.webp?raw=true' width='330' alt='B-17 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Univers » · « Barça » · « Ton compagnon » · « culé, au quotidien. » · « Assistant IA, jeux quotidiens, histoire du club et communauté de supporters, au même endroit. » · « Application communautaire non officielle · fan-made » · « Content de te revoir » · « Identifiants incorrects » · « Vérifie ton e-mail et ton mot de passe. Il te reste 3 essais. » · « E-mail » · « boris@exemple.com » · « Mot de passe » · « •••••••••• » · « Connexion… » · « Créer un compte »

**Composants repérés** : `btn`, `card`, `input`, `spinner`

</details>

**Issues liées sur ce même écran :** [API-AUTH-07](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-AUTH-07%5D%22) · [API-AUTH-08](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-AUTH-08%5D%22) · [API-AUTH-41](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-AUTH-41%5D%22) · [API-AUTH-42](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-AUTH-42%5D%22) · [MOB-B-07](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-B-07%5D%22) · [MOB-B-22](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-B-22%5D%22) · [MOB-B-28](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-B-28%5D%22) · [MOB-B-29](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-B-29%5D%22)

#### `A-04` — Erreur serveur 5xx
_Module : Lancement et système_

<table><tr><th align='center'>Mobile · Clair</th><th align='center'>Mobile · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/A/A-04_erreur-serveur-5xx__phone_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/A/A-04_erreur-serveur-5xx__phone_light.webp?raw=true' width='230' alt='A-04 Mobile Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/A/A-04_erreur-serveur-5xx__phone_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/A/A-04_erreur-serveur-5xx__phone_dark.webp?raw=true' width='230' alt='A-04 Mobile Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/A/A-04_erreur-serveur-5xx__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/A/A-04_erreur-serveur-5xx__tablet_light.webp?raw=true' width='330' alt='A-04 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/A/A-04_erreur-serveur-5xx__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/A/A-04_erreur-serveur-5xx__tablet_dark.webp?raw=true' width='330' alt='A-04 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Quiz » · « Petit souci de notre côté » · « Le service est momentanément indisponible. Notre équipe est déjà dessus. Réessaie dans quelques instants. » · « Réessayer » · « Code d'incident : UB-5C21-8F3A »

**Composants repérés** : `btn`

</details>

**Issues liées sur ce même écran :** [MOB-A-05](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-A-05%5D%22) · [MOB-A-06](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-A-06%5D%22) · [MOB-A-17](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-A-17%5D%22) · [MOB-A-18](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-A-18%5D%22) · [MOB-A-19](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-A-19%5D%22)

#### `A-08` — Session expirée
_Module : Lancement et système_

<table><tr><th align='center'>Mobile · Clair</th><th align='center'>Mobile · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/A/A-08_session-expiree__phone_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/A/A-08_session-expiree__phone_light.webp?raw=true' width='230' alt='A-08 Mobile Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/A/A-08_session-expiree__phone_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/A/A-08_session-expiree__phone_dark.webp?raw=true' width='230' alt='A-08 Mobile Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/A/A-08_session-expiree__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/A/A-08_session-expiree__tablet_light.webp?raw=true' width='330' alt='A-08 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/A/A-08_session-expiree__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/A/A-08_session-expiree__tablet_dark.webp?raw=true' width='330' alt='A-08 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Session expirée » · « Pour ta sécurité, reconnecte-toi pour continuer. » · « Me reconnecter » · « Changer de compte »

**Composants repérés** : `btn`

</details>

**Issues liées sur ce même écran :** [API-AUTH-09](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-AUTH-09%5D%22) · [API-AUTH-13](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-AUTH-13%5D%22) · [API-AUTH-16](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-AUTH-16%5D%22) · [API-AUTH-45](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-AUTH-45%5D%22) · [MOB-A-01](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-A-01%5D%22) · [MOB-A-05](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-A-05%5D%22) · [MOB-A-11](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-A-11%5D%22) · [MOB-A-12](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-A-12%5D%22) · [MOB-A-18](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-A-18%5D%22) · [MOB-A-19](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-A-19%5D%22)

#### `A-09` — Compte suspendu
_Module : Lancement et système_

<table><tr><th align='center'>Mobile · Clair</th><th align='center'>Mobile · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/A/A-09_compte-suspendu__phone_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/A/A-09_compte-suspendu__phone_light.webp?raw=true' width='230' alt='A-09 Mobile Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/A/A-09_compte-suspendu__phone_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/A/A-09_compte-suspendu__phone_dark.webp?raw=true' width='230' alt='A-09 Mobile Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/A/A-09_compte-suspendu__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/A/A-09_compte-suspendu__tablet_light.webp?raw=true' width='330' alt='A-09 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/A/A-09_compte-suspendu__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/A/A-09_compte-suspendu__tablet_dark.webp?raw=true' width='330' alt='A-09 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Compte suspendu » · « Ton compte est suspendu jusqu'au » · « 22 octobre 2026 » · « suite à un manquement à la charte de la communauté. » · « Motif » · « Propos inappropriés dans le groupe « Culés Paris ». » · « Fin de la suspension » · « dans 7 jours » · « Lire la charte » · « Contester la décision »

**Composants repérés** : `btn`, `card`

</details>

**Issues liées sur ce même écran :** [API-AUTH-08](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-AUTH-08%5D%22) · [API-AUTH-45](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-AUTH-45%5D%22) · [MOB-A-01](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-A-01%5D%22) · [MOB-A-13](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-A-13%5D%22) · [MOB-A-14](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-A-14%5D%22) · [MOB-A-18](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-A-18%5D%22) · [MOB-A-19](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-A-19%5D%22)

#### `A-10` — Compte banni
_Module : Lancement et système_

<table><tr><th align='center'>Mobile · Clair</th><th align='center'>Mobile · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/A/A-10_compte-banni__phone_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/A/A-10_compte-banni__phone_light.webp?raw=true' width='230' alt='A-10 Mobile Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/A/A-10_compte-banni__phone_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/A/A-10_compte-banni__phone_dark.webp?raw=true' width='230' alt='A-10 Mobile Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/A/A-10_compte-banni__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/A/A-10_compte-banni__tablet_light.webp?raw=true' width='330' alt='A-10 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/A/A-10_compte-banni__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/A/A-10_compte-banni__tablet_dark.webp?raw=true' width='330' alt='A-10 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Accès retiré » · « Ton compte a été banni définitivement pour non-respect répété de la charte de la communauté. » · « Contacter le support » · « Se déconnecter »

**Composants repérés** : `btn`

</details>

**Issues liées sur ce même écran :** [API-AUTH-08](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-AUTH-08%5D%22) · [API-AUTH-45](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-AUTH-45%5D%22) · [MOB-A-01](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-A-01%5D%22) · [MOB-A-13](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-A-13%5D%22) · [MOB-A-15](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-A-15%5D%22) · [MOB-A-18](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-A-18%5D%22) · [MOB-A-19](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-A-19%5D%22)

#### `WA-09` — Page introuvable (404) et erreur
_Module : Authentification et erreurs_

<table><tr><th align='center'>Bureau · Clair</th><th align='center'>Bureau · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WA/WA-09_page-introuvable-404-et-erreur__desktop_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WA/WA-09_page-introuvable-404-et-erreur__desktop_light.webp?raw=true' width='330' alt='WA-09 Bureau Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WA/WA-09_page-introuvable-404-et-erreur__desktop_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WA/WA-09_page-introuvable-404-et-erreur__desktop_dark.webp?raw=true' width='330' alt='WA-09 Bureau Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WA/WA-09_page-introuvable-404-et-erreur__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WA/WA-09_page-introuvable-404-et-erreur__tablet_light.webp?raw=true' width='330' alt='WA-09 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WA/WA-09_page-introuvable-404-et-erreur__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WA/WA-09_page-introuvable-404-et-erreur__tablet_dark.webp?raw=true' width='330' alt='WA-09 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Introuvable » · « Page introuvable » · « Cette fiche n'existe pas ou a été archivée. Vérifie le lien ou utilise la recherche globale. » · « Voir la liste des joueurs » · « Erreur serveur » · « Une erreur est survenue. Identifiant de corrélation : » · « trace-9f3a21c8 » · « Réessayer »

**Composants repérés** : `avatar`, `btn`

</details>

**Issues liées sur ce même écran :** [ADM-WA-15](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WA-15%5D%22) · [ADM-WA-16](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WA-16%5D%22) · [ADM-WA-19](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WA-19%5D%22)

## 📐 Règles de gestion

- Résolution de langue : `user.locale` (si authentifié) > header `Accept-Language` (fr, en, es, q-values) > `fr` ; réponse avec `Content-Language`.
- Catalogue `src/i18n/{fr,en,es}.json` indexé par `code` d'erreur (≥ 60 codes auth : BAD_CREDENTIALS, ACCOUNT_LOCKED, ACCOUNT_SUSPENDED, ACCOUNT_BANNED, TOKEN_EXPIRED, SESSION_REVOKED, REFRESH_REUSED, EMAIL_TAKEN, VERIFY_INVALID, RESET_INVALID, EXPORT_TOO_SOON, REACCEPT_REQUIRED, FORBIDDEN_ROLE, etc.) avec interpolation `{n}`, `{minutes}`.
- Le `code` reste la source de vérité côté clients ; `message` est localisé ; `details` ne contient jamais de texte localisé (valeurs brutes).
- `traceId` toujours renvoyé (déjà dans errorHandler) et ajouté en en-tête `X-Trace-Id` ; format court d'incident `UB-XXXX-XXXX` dérivé du traceId pour A-04.
- Test de complétude : tout `code` déclaré dans `errorCodes.ts` possède une entrée dans les 3 langues (échec CI sinon).

## 🛠️ Tâches

- [ ] Implémenter `src/i18n/index.ts` (i18next ou résolveur maison) et middleware `locale` (ajoute `req.locale`).
- [ ] Modifier `errorHandler.ts` et `validate.ts` pour traduire message et erreurs de champ.
- [ ] Créer les trois catalogues ; relecture par un natif ES/EN.
- [ ] Générer `incidentId` (`UB-` + 4+4 hex du traceId) ajouté à `error`.
- [ ] Test de complétude des catalogues.
- [ ] Mettre à jour Swagger (header Accept-Language, exemples).

## ✔️ Critères d'acceptation

- [ ] Étant donné `Accept-Language: es`, quand un login échoue, alors `message` est en espagnol et `code='BAD_CREDENTIALS'`.
- [ ] Étant donné un utilisateur `locale='en'` et un header `fr`, alors la réponse est en anglais.
- [ ] Étant donné une erreur 500, alors `incidentId` au format `UB-XXXX-XXXX` est renvoyé.
- [ ] Étant donné un nouveau code sans traduction, alors la CI échoue.

## 🧪 Tests à écrire

- [ ] Unit : résolution de langue (q-values).
- [ ] Unit : complétude des catalogues.
- [ ] Intégration : message traduit login/validation.
- [ ] Intégration : incidentId stable pour un traceId.
- [ ] Contrat : `details` non localisés.

## ♿ Accessibilité et i18n

- Messages orientés utilisateur sans jargon, tutoiement cohérent avec l'app (« Vérifie ton e-mail… »)

## 🔗 Dépendances

À réaliser après : `API-AUTH-09` (rechercher le code entre crochets dans le titre des issues).

## 📚 Références

- CDC Backend §10, §11.6
- CDC Global §3.3

## 📦 Définition de terminé

`npm run lint`, `format:check`, `typecheck`, tests unitaires/intégration/sécurité verts ; Swagger (`npm run export:swagger`) à jour ; migration si schéma modifié ; PR vers `dev` ; CI verte.
