> **API-PLAT-06** · Fonctionnel · Priorité **P0** · Taille **M** · Phase 1 — MVP

## 🎯 Contexte

A-05 « Doucement, champion ! » affiche un compte à rebours (00:42) avant que l'utilisateur puisse écrire à nouveau à l'assistant. Le handler actuel de src/middleware/rateLimiter.ts renvoie 429 RATE_LIMITED sans Retry-After exploitable ni distinction entre limite de débit et quota métier.

## ✅ Objectif

Uniformiser les réponses 429 (limite de débit et quotas IA) avec Retry-After en secondes et un contexte permettant l'écran A-05.

## 🖼️ Maquettes de référence

Toutes les captures ci-dessous sont les maquettes validées (clair / sombre, mobile / tablette ou bureau). Le comportement visuel, les espacements, états et libellés doivent être reproduits à l'identique ; les tokens du design system s'appliquent (aucune couleur en dur).

#### `A-05` — Trop de requêtes 429
_Module : Lancement et système_

<table><tr><th align='center'>Mobile · Clair</th><th align='center'>Mobile · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/A/A-05_trop-de-requetes-429__phone_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/A/A-05_trop-de-requetes-429__phone_light.webp?raw=true' width='230' alt='A-05 Mobile Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/A/A-05_trop-de-requetes-429__phone_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/A/A-05_trop-de-requetes-429__phone_dark.webp?raw=true' width='230' alt='A-05 Mobile Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/A/A-05_trop-de-requetes-429__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/A/A-05_trop-de-requetes-429__tablet_light.webp?raw=true' width='330' alt='A-05 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/A/A-05_trop-de-requetes-429__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/A/A-05_trop-de-requetes-429__tablet_dark.webp?raw=true' width='330' alt='A-05 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Assistant » · « Doucement, champion ! » · « Tu as atteint la limite de messages pour le moment. Tu pourras écrire de nouveau dans : » · « Réessayer »

**Composants repérés** : `btn`

</details>

**Issues liées sur ce même écran :** [API-AUTH-41](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-AUTH-41%5D%22) · [API-PLAT-07](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-PLAT-07%5D%22) · [API-PLAT-41](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-PLAT-41%5D%22) · [API-PLAT-55](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-PLAT-55%5D%22) · [MOB-A-05](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-A-05%5D%22) · [MOB-A-07](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-A-07%5D%22) · [MOB-A-17](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-A-17%5D%22) · [MOB-A-18](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-A-18%5D%22) · [MOB-A-19](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-A-19%5D%22)

## 📐 Règles de gestion

- Deux codes distincts : RATE_LIMITED (fenêtre glissante, ex. 120 req/min/utilisateur lecture, 60/min/IP publics) et QUOTA_EXCEEDED (quota métier journalier : assistant 30 messages/jour, wallpapers 5/jour, configurables WI-06).
- Retry-After = secondes avant réinitialisation (ex. 42), entier >= 1 ; pour un quota journalier, secondes jusqu'à minuit UTC du fuseau de référence.
- Corps : error.details:{ scope:'assistant'|'wallpaper'|'quiz'|'global', limit, remaining:0, retryAfterSeconds, resetAt }.
- En-têtes RateLimit-Limit / RateLimit-Remaining / RateLimit-Reset (draft-7, déjà activés) conservés.
- Les limites sont lues dans la config (WI-06) et plus codées en dur ; valeurs par défaut du CDC §10.2 : auth 10/15 min/IP, lecture 120/min, public 60/min.
- Chaque 429 incrémente ub_rate_limited_total{scope} (alerte sécurité du tableau de bord).

## 🛠️ Tâches

- [ ] Refactorer make() dans src/middleware/rateLimiter.ts : handler commun buildRateLimitResponse(scope, resetAt).
- [ ] Créer src/services/quota.service.ts (consume/peek par userId+scope, compteur Redis avec TTL jusqu'à resetAt).
- [ ] Ajouter le middleware quotaGuard(scope) réutilisable par les futures routes assistant/wallpaper/quiz.
- [ ] Aligner les valeurs : authLimiter 10/15 min (aujourd'hui 20), globalLimiter par utilisateur authentifié 120/min (clé userId sinon IP).
- [ ] Compteur Prometheus ub_rate_limited_total.
- [ ] Ajouter les messages localisés (fr/en/es) pour RATE_LIMITED et QUOTA_EXCEEDED.
- [ ] Documenter le contrat dans Swagger (429 avec en-têtes).
- [ ] Mettre à jour tests/security pour vérifier Retry-After.

## ✔️ Critères d'acceptation

- [ ] Étant donné 31 messages assistant dans la journée, quand le 31e est envoyé, alors 429 QUOTA_EXCEEDED, details.scope='assistant', Retry-After > 0.
- [ ] Étant donné 121 lectures en une minute pour un utilisateur, alors 429 RATE_LIMITED avec retryAfterSeconds <= 60.
- [ ] Étant donné Redis indisponible, alors le limiteur retombe en mémoire locale (pas de 500).
- [ ] Étant donné un quota modifié à 40 via WI-06, alors la limite effective passe à 40 sans redéploiement.
- [ ] Étant donné un 429, alors le corps contient resetAt ISO UTC.

## 🧪 Tests à écrire

- [ ] Unitaire : calcul retryAfterSeconds.
- [ ] Intégration : franchissement de limite → 429 + Retry-After.
- [ ] Intégration : quota journalier remis à zéro après resetAt (horloge simulée).
- [ ] Intégration : prise en compte d'un quota modifié.
- [ ] Sécurité : contournement par changement d'en-tête X-Forwarded-For (trust proxy correct).
- [ ] Unitaire : compteur ub_rate_limited_total.

## ♿ Accessibilité et i18n

- Messages 429 localisés fr/en/es ; le mobile affiche le compte à rebours à partir de retryAfterSeconds.

## 🔗 Dépendances

À réaliser après : `API-PLAT-05` (rechercher le code entre crochets dans le titre des issues).

## 📚 Références

- CDC Backend §10.2
- CDC Backend §11.6
- CDC Global §12.1 (maîtrise des coûts IA)

## 📦 Définition de terminé

`npm run lint`, `format:check`, `typecheck`, tests unitaires/intégration/sécurité verts ; Swagger (`npm run export:swagger`) à jour ; migration si schéma modifié ; PR vers `dev` ; CI verte.
