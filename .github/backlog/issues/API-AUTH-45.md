> **API-AUTH-45** · Documentation · Priorité **P1** · Taille **M** · Phase 1 — MVP

## 🎯 Contexte

Seules quelques routes ont un bloc `@swagger` (register, login, refresh, logout, /users/me, /players). CDC Backend §10 : chaque endpoint documente 400/401/403/404/409/422/429/500, avec schéma d'erreur uniforme, `/api-docs` protégé en production.

## ✅ Objectif

Rendre l'OpenAPI exhaustif et exploitable pour générer les clients Chopper et axios.

## 🖼️ Maquettes de référence

Toutes les captures ci-dessous sont les maquettes validées (clair / sombre, mobile / tablette ou bureau). Le comportement visuel, les espacements, états et libellés doivent être reproduits à l'identique ; les tokens du design system s'appliquent (aucune couleur en dur).

#### `A-08` — Session expirée
_Module : Lancement et système_

<table><tr><th align='center'>Mobile · Clair</th><th align='center'>Mobile · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/A/A-08_session-expiree__phone_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/A/A-08_session-expiree__phone_light.webp?raw=true' width='230' alt='A-08 Mobile Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/A/A-08_session-expiree__phone_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/A/A-08_session-expiree__phone_dark.webp?raw=true' width='230' alt='A-08 Mobile Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/A/A-08_session-expiree__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/A/A-08_session-expiree__tablet_light.webp?raw=true' width='330' alt='A-08 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/A/A-08_session-expiree__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/A/A-08_session-expiree__tablet_dark.webp?raw=true' width='330' alt='A-08 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Session expirée » · « Pour ta sécurité, reconnecte-toi pour continuer. » · « Me reconnecter » · « Changer de compte »

**Composants repérés** : `btn`

</details>

**Issues liées sur ce même écran :** [API-AUTH-09](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-AUTH-09%5D%22) · [API-AUTH-13](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-AUTH-13%5D%22) · [API-AUTH-16](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-AUTH-16%5D%22) · [API-AUTH-44](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-AUTH-44%5D%22) · [MOB-A-01](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-A-01%5D%22) · [MOB-A-05](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-A-05%5D%22) · [MOB-A-11](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-A-11%5D%22) · [MOB-A-12](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-A-12%5D%22) · [MOB-A-18](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-A-18%5D%22) · [MOB-A-19](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-A-19%5D%22)

#### `A-09` — Compte suspendu
_Module : Lancement et système_

<table><tr><th align='center'>Mobile · Clair</th><th align='center'>Mobile · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/A/A-09_compte-suspendu__phone_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/A/A-09_compte-suspendu__phone_light.webp?raw=true' width='230' alt='A-09 Mobile Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/A/A-09_compte-suspendu__phone_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/A/A-09_compte-suspendu__phone_dark.webp?raw=true' width='230' alt='A-09 Mobile Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/A/A-09_compte-suspendu__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/A/A-09_compte-suspendu__tablet_light.webp?raw=true' width='330' alt='A-09 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/A/A-09_compte-suspendu__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/A/A-09_compte-suspendu__tablet_dark.webp?raw=true' width='330' alt='A-09 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Compte suspendu » · « Ton compte est suspendu jusqu'au » · « 22 octobre 2026 » · « suite à un manquement à la charte de la communauté. » · « Motif » · « Propos inappropriés dans le groupe « Culés Paris ». » · « Fin de la suspension » · « dans 7 jours » · « Lire la charte » · « Contester la décision »

**Composants repérés** : `btn`, `card`

</details>

**Issues liées sur ce même écran :** [API-AUTH-08](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-AUTH-08%5D%22) · [API-AUTH-44](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-AUTH-44%5D%22) · [MOB-A-01](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-A-01%5D%22) · [MOB-A-13](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-A-13%5D%22) · [MOB-A-14](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-A-14%5D%22) · [MOB-A-18](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-A-18%5D%22) · [MOB-A-19](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-A-19%5D%22)

#### `A-10` — Compte banni
_Module : Lancement et système_

<table><tr><th align='center'>Mobile · Clair</th><th align='center'>Mobile · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/A/A-10_compte-banni__phone_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/A/A-10_compte-banni__phone_light.webp?raw=true' width='230' alt='A-10 Mobile Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/A/A-10_compte-banni__phone_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/A/A-10_compte-banni__phone_dark.webp?raw=true' width='230' alt='A-10 Mobile Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/A/A-10_compte-banni__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/A/A-10_compte-banni__tablet_light.webp?raw=true' width='330' alt='A-10 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/A/A-10_compte-banni__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/A/A-10_compte-banni__tablet_dark.webp?raw=true' width='330' alt='A-10 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Accès retiré » · « Ton compte a été banni définitivement pour non-respect répété de la charte de la communauté. » · « Contacter le support » · « Se déconnecter »

**Composants repérés** : `btn`

</details>

**Issues liées sur ce même écran :** [API-AUTH-08](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-AUTH-08%5D%22) · [API-AUTH-44](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-AUTH-44%5D%22) · [MOB-A-01](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-A-01%5D%22) · [MOB-A-13](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-A-13%5D%22) · [MOB-A-15](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-A-15%5D%22) · [MOB-A-18](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-A-18%5D%22) · [MOB-A-19](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-A-19%5D%22)

#### `B-16` — Connexion
_Module : Onboarding et authentification_

<table><tr><th align='center'>Mobile · Clair</th><th align='center'>Mobile · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/B/B-16_connexion__phone_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/B/B-16_connexion__phone_light.webp?raw=true' width='230' alt='B-16 Mobile Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/B/B-16_connexion__phone_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/B/B-16_connexion__phone_dark.webp?raw=true' width='230' alt='B-16 Mobile Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/B/B-16_connexion__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/B/B-16_connexion__tablet_light.webp?raw=true' width='330' alt='B-16 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/B/B-16_connexion__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/B/B-16_connexion__tablet_dark.webp?raw=true' width='330' alt='B-16 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Univers » · « Barça » · « Ton compagnon » · « culé, au quotidien. » · « Assistant IA, jeux quotidiens, histoire du club et communauté de supporters, au même endroit. » · « Application communautaire non officielle · fan-made » · « Content de te revoir » · « Connecte-toi pour retrouver ta série. » · « E-mail » · « boris@exemple.com » · « Mot de passe » · « •••••••••• » · « Rester connecté » · « Mot de passe oublié ? » · « Se connecter » · « ou » · « Apple » · « Google » · « Pas encore de compte ? » · « Créer un compte »

**Composants repérés** : `btn`, `input`

</details>

**Issues liées sur ce même écran :** [API-AUTH-07](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-AUTH-07%5D%22) · [API-AUTH-08](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-AUTH-08%5D%22) · [API-AUTH-09](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-AUTH-09%5D%22) · [API-AUTH-10](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-AUTH-10%5D%22) · [API-AUTH-11](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-AUTH-11%5D%22) · [API-AUTH-12](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-AUTH-12%5D%22) · [API-AUTH-14](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-AUTH-14%5D%22) · [API-AUTH-17](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-AUTH-17%5D%22) · [API-AUTH-42](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-AUTH-42%5D%22) · [API-AUTH-43](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-AUTH-43%5D%22) · [MOB-B-06](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-B-06%5D%22) · [MOB-B-07](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-B-07%5D%22) · [MOB-B-08](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-B-08%5D%22) · [MOB-B-21](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-B-21%5D%22) · [MOB-B-23](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-B-23%5D%22) · [MOB-B-27](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-B-27%5D%22) · [MOB-B-28](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-B-28%5D%22) · [MOB-B-29](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-B-29%5D%22)

#### `Q-10` — Appareils connectés
_Module : Paramètres et compte_

<table><tr><th align='center'>Mobile · Clair</th><th align='center'>Mobile · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/Q/Q-10_appareils-connectes__phone_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/Q/Q-10_appareils-connectes__phone_light.webp?raw=true' width='230' alt='Q-10 Mobile Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/Q/Q-10_appareils-connectes__phone_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/Q/Q-10_appareils-connectes__phone_dark.webp?raw=true' width='230' alt='Q-10 Mobile Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/Q/Q-10_appareils-connectes__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/Q/Q-10_appareils-connectes__tablet_light.webp?raw=true' width='330' alt='Q-10 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/Q/Q-10_appareils-connectes__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/Q/Q-10_appareils-connectes__tablet_dark.webp?raw=true' width='330' alt='Q-10 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Appareils » · « Tu es connecté(e) sur ces appareils. Déconnecte ceux que tu ne reconnais pas. » · « iPhone 15 · Yaoundé » · « Cet appareil · actif maintenant » · « Actuel » · « iPad Air · Yaoundé » · « Dernière activité il y a 2 j » · « Retirer » · « Pixel 8 · Paris » · « Dernière activité il y a 3 sem. » · « Se déconnecter de tous les appareils »

**Composants repérés** : `btn`

</details>

**Issues liées sur ce même écran :** [API-AUTH-15](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-AUTH-15%5D%22) · [API-AUTH-16](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-AUTH-16%5D%22) · [API-AUTH-43](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-AUTH-43%5D%22)

#### `Q-11` — Exporter mes données
_Module : Paramètres et compte_

<table><tr><th align='center'>Mobile · Clair</th><th align='center'>Mobile · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/Q/Q-11_exporter-mes-donnees__phone_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/Q/Q-11_exporter-mes-donnees__phone_light.webp?raw=true' width='230' alt='Q-11 Mobile Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/Q/Q-11_exporter-mes-donnees__phone_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/Q/Q-11_exporter-mes-donnees__phone_dark.webp?raw=true' width='230' alt='Q-11 Mobile Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/Q/Q-11_exporter-mes-donnees__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/Q/Q-11_exporter-mes-donnees__tablet_light.webp?raw=true' width='330' alt='Q-11 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/Q/Q-11_exporter-mes-donnees__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/Q/Q-11_exporter-mes-donnees__tablet_dark.webp?raw=true' width='330' alt='Q-11 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Export des données » · « Exporte tes données » · « Reçois une archive de toutes les données associées à ton compte (RGPD). » · « Profil et préférences » · « Progression, badges, historique de jeu » · « Conversations avec Barça AI » · « Équipe Fantasy et La Masia » · « Wallpapers générés » · « Demander mon export »

**Composants repérés** : `btn`, `card`

</details>

**Issues liées sur ce même écran :** [API-AUTH-24](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-AUTH-24%5D%22) · [API-AUTH-25](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-AUTH-25%5D%22)

#### `WA-01` — Connexion administrateur
_Module : Authentification et erreurs_

<table><tr><th align='center'>Bureau · Clair</th><th align='center'>Bureau · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WA/WA-01_connexion-administrateur__desktop_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WA/WA-01_connexion-administrateur__desktop_light.webp?raw=true' width='330' alt='WA-01 Bureau Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WA/WA-01_connexion-administrateur__desktop_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WA/WA-01_connexion-administrateur__desktop_dark.webp?raw=true' width='330' alt='WA-01 Bureau Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WA/WA-01_connexion-administrateur__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WA/WA-01_connexion-administrateur__tablet_light.webp?raw=true' width='330' alt='WA-01 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WA/WA-01_connexion-administrateur__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WA/WA-01_connexion-administrateur__tablet_dark.webp?raw=true' width='330' alt='WA-01 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Back-office » · « Gérer l'univers » · « des culés. » · « Contenu, modération et supervision de l'écosystème Univers Barça — réservé à l'équipe. » · « Accès restreint · connexion chiffrée · actions journalisées » · « Connexion » · « Accède à ton espace d’administration. » · « E-mail professionnel » · « camille.durand@univers-barca.app » · « Mot de passe » · « •••••••••••• » · « Rester connecté 8 h » · « Mot de passe oublié ? » · « Se connecter » · « Authentification à deux facteurs requise pour les super-admins. »

**Composants repérés** : `btn`, `input`

</details>

**Issues liées sur ce même écran :** [ADM-WA-01](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WA-01%5D%22) · [ADM-WA-02](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WA-02%5D%22) · [ADM-WA-03](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WA-03%5D%22) · [ADM-WA-17](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WA-17%5D%22) · [ADM-WA-18](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WA-18%5D%22) · [ADM-WA-19](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WA-19%5D%22) · [API-AUTH-32](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-AUTH-32%5D%22) · [API-AUTH-33](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-AUTH-33%5D%22) · [API-AUTH-34](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-AUTH-34%5D%22) · [API-AUTH-38](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-AUTH-38%5D%22) · [API-AUTH-39](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-AUTH-39%5D%22) · [API-AUTH-40](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-AUTH-40%5D%22) · [API-AUTH-42](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-AUTH-42%5D%22)

## 📐 Règles de gestion

- Documenter 100 % des routes auth, sessions, consentements, légal, préférences, export, suppression, avatar, admin auth/accounts/audit, avec exemples de requête/réponse et tous les codes d'erreur métier.
- Composants réutilisables : `ErrorResponse {success:false,error:{code,message,details,traceId,incidentId}}`, `FieldError`, `Page<T>`, `UserPrivate`, `UserPublic`, `Session`, `ConsentCurrent`, `AuthError`.
- Sécurité : schémas `bearerAuth` (JWT) et `adminCookie` ; tags `Auth`, `Utilisateurs`, `RGPD`, `Admin-Auth`, `Admin-Comptes`.
- Export `openapi.json` à chaque build (`npm run docs:export`) versionné dans `docs/openapi/` ; vérification `swagger-cli validate` en CI ; diff de breaking changes (`oasdiff`).
- `/api-docs` reste protégé par basic auth en production (SWAGGER_USER/PASSWORD déjà en place).

## 🛠️ Tâches

- [ ] Ajouter les blocs `@swagger` manquants dans `routes/index.ts` (ou fichiers `routes/*.docs.ts`).
- [ ] Compléter `src/docs/swagger.ts` (composants, schémas, tags).
- [ ] Script `scripts/export-openapi.ts` et étape CI.
- [ ] Ajouter exemples d'erreurs A-08/A-09/A-10 (codes + details).
- [ ] Lien vers le tableau code → écran (docs/api/auth-errors.md).
- [ ] Test : toutes les routes montées sont présentes dans l'OpenAPI (comparaison avec `app._router`).

## ✔️ Critères d'acceptation

- [ ] Étant donné l'OpenAPI généré, alors `swagger-cli validate` passe.
- [ ] Étant donné chaque route auth, alors ses codes d'erreur métier figurent dans `responses`.
- [ ] Étant donné une route ajoutée sans doc, alors le test de couverture échoue.
- [ ] Étant donné un breaking change, alors `oasdiff` le signale en CI.

## 🧪 Tests à écrire

- [ ] Test : couverture des routes dans OpenAPI.
- [ ] CI : validation du schéma.
- [ ] Test : exemples conformes au schéma (ajv).
- [ ] CI : diff de breaking changes.

## 🔗 Dépendances

À réaliser après : `API-AUTH-44` (rechercher le code entre crochets dans le titre des issues).

## 📚 Références

- CDC Backend §10, §10.1

## 📦 Définition de terminé

`npm run lint`, `format:check`, `typecheck`, tests unitaires/intégration/sécurité verts ; Swagger (`npm run export:swagger`) à jour ; migration si schéma modifié ; PR vers `dev` ; CI verte.
