> **API-AUTH-27** · RGPD · Priorité **P0** · Taille **L** · Phase 1 — MVP

## 🎯 Contexte

Le cron actuel `purgeDeletedAccounts` ne fait qu'un `User.deleteMany` à 03:00 : aucune cascade (jetons, consentements, gamification, Fantasy, chats IA, wallpapers…) et aucune anonymisation des contenus communautaires. Q-13 promet : « progression/badges/série effacés », « Fantasy et La Masia supprimés », « messages de groupe visibles, anonymisés ».

## ✅ Objectif

Appliquer la stratégie du CDC §4.8 par job `rgpd:purge-user`, idempotent et audité.

## 🖼️ Maquettes de référence

Toutes les captures ci-dessous sont les maquettes validées (clair / sombre, mobile / tablette ou bureau). Le comportement visuel, les espacements, états et libellés doivent être reproduits à l'identique ; les tokens du design system s'appliquent (aucune couleur en dur).

#### `Q-15` — Compte supprimé
_Module : Paramètres et compte_

<table><tr><th align='center'>Mobile · Clair</th><th align='center'>Mobile · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/Q/Q-15_compte-supprime__phone_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/Q/Q-15_compte-supprime__phone_light.webp?raw=true' width='230' alt='Q-15 Mobile Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/Q/Q-15_compte-supprime__phone_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/Q/Q-15_compte-supprime__phone_dark.webp?raw=true' width='230' alt='Q-15 Mobile Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/Q/Q-15_compte-supprime__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/Q/Q-15_compte-supprime__tablet_light.webp?raw=true' width='330' alt='Q-15 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/Q/Q-15_compte-supprime__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/Q/Q-15_compte-supprime__tablet_dark.webp?raw=true' width='330' alt='Q-15 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Univers » · « Barça » · « Ton compagnon » · « culé, au quotidien. » · « Assistant IA, jeux quotidiens, histoire du club et communauté de supporters, au même endroit. » · « Application communautaire non officielle · fan-made » · « Compte supprimé » · « Tes données ont été effacées. Merci d'avoir fait partie de la communauté. À bientôt, culé ! » · « Retour à l’accueil »

**Composants repérés** : `btn`

</details>

**Issues liées sur ce même écran :** [API-AUTH-26](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-AUTH-26%5D%22)

#### `Q-13` — Suppression du compte — conséquences
_Module : Paramètres et compte_

<table><tr><th align='center'>Mobile · Clair</th><th align='center'>Mobile · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/Q/Q-13_suppression-du-compte-consequences__phone_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/Q/Q-13_suppression-du-compte-consequences__phone_light.webp?raw=true' width='230' alt='Q-13 Mobile Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/Q/Q-13_suppression-du-compte-consequences__phone_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/Q/Q-13_suppression-du-compte-consequences__phone_dark.webp?raw=true' width='230' alt='Q-13 Mobile Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/Q/Q-13_suppression-du-compte-consequences__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/Q/Q-13_suppression-du-compte-consequences__tablet_light.webp?raw=true' width='330' alt='Q-13 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/Q/Q-13_suppression-du-compte-consequences__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/Q/Q-13_suppression-du-compte-consequences__tablet_dark.webp?raw=true' width='330' alt='Q-13 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Supprimer le compte » · « 1/3 » · « Supprimer mon compte » · « Ta progression, tes badges et ta série seront effacés » · « Ton équipe Fantasy et ton joueur La Masia seront supprimés » · « Tes messages de groupe resteront visibles, anonymisés » · « Cette action est définitive » · « Pense à exporter tes données avant de continuer. » · « Exporter » · « Continuer la suppression » · « Annuler »

**Composants repérés** : `btn`, `card`

</details>

**Issues liées sur ce même écran :** [API-AUTH-26](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-AUTH-26%5D%22)

## 📐 Règles de gestion

- Sélection quotidienne 03:00 (Europe/Madrid) des comptes `status='deleted' AND purgeAt <= now` par lots de 100 ; un job `rgpd:purge-user {userId}` par compte.
- Suppression définitive : profil, préférences, jetons, sessions, DeviceToken, historique Guess the Player/Quiz, progression/badges/streaks, équipes Fantasy et joueurs Masia, conversations et wallpapers (fichiers objet inclus), exports.
- Conservation anonymisée : contenus de groupe (auteur → référence neutre « Utilisateur supprimé », `authorId=null`), journal de modération (ID technique dissocié, aucune donnée directement identifiante), compteurs agrégés.
- Consentements : conservés 5 ans mais dissociés (`userId` remplacé par un pseudonyme HMAC irréversible) pour preuve.
- Rapport d'exécution par compte stocké dans `PurgeReport {userId hash, counts par collection, durationMs}` ; échec partiel → retry, jamais de purge à moitié silencieuse (alerte Slack via webhook existant).

## 🗄️ Données

- Toutes les collections liées à users

## 🛠️ Tâches

- [ ] Remplacer `purgeDeletedAccounts` par un planificateur qui enfile des jobs `rgpd`.
- [ ] Créer `src/services/rgpd/purge.service.ts` avec un registre de « purgeurs » par domaine (interface `Purger {name, run(userId)}`).
- [ ] Implémenter les purgeurs pour les modèles existants (user, refresh-token, consent, gamification, fantasy, community, moderation, platform).
- [ ] Suppression des objets S3 liés (avatar, wallpapers, exports).
- [ ] Modèle `PurgeReport` (TTL 1 an, sans PII).
- [ ] Alerte en cas d'échec (`SLACK_WEBHOOK_URL`).
- [ ] Tests d'intégration multi-collections et mise à jour de `tests/integration/rgpd.test.ts`.

## ✔️ Critères d'acceptation

- [ ] Étant donné un compte supprimé depuis 31 jours, quand le job tourne, alors plus aucun document n'existe pour ce `userId` hors données anonymisées prévues.
- [ ] Étant donné ses messages de groupe, alors ils restent visibles avec auteur « Utilisateur supprimé » et sans lien vers l'identité.
- [ ] Étant donné un compte supprimé depuis 29 jours, alors rien n'est purgé.
- [ ] Étant donné une interruption au milieu de la purge, alors le rejeu termine sans doublon ni erreur.
- [ ] Étant donné les consentements, alors ils sont conservés avec `userId` pseudonymisé.

## 🧪 Tests à écrire

- [ ] Intégration : purge complète sur jeu de données seedé.
- [ ] Intégration : idempotence (2 exécutions).
- [ ] Unit : pseudonymisation HMAC.
- [ ] Intégration : fichiers S3 supprimés (MinIO).
- [ ] Unit : sélection J+30 exacte (horloge fake).

## 🔗 Dépendances

À réaliser après : `API-AUTH-26` · `API-AUTH-25` (rechercher le code entre crochets dans le titre des issues).

## 📚 Références

- CDC Backend §4.8, §5.7
- CDC Global §10.2

## 📦 Définition de terminé

`npm run lint`, `format:check`, `typecheck`, tests unitaires/intégration/sécurité verts ; Swagger (`npm run export:swagger`) à jour ; migration si schéma modifié ; PR vers `dev` ; CI verte.
