> **API-PLAT-05** · Fonctionnel · Priorité **P0** · Taille **S** · Phase 1 — MVP

## 🎯 Contexte

A-04 affiche « Petit souci de notre côté… Code d'incident : UB-5C21-8F3A ». Ce code doit permettre au support de retrouver la trace dans Graylog/Grafana (CDC Backend §6.5 : traceId renvoyé en X-Trace-Id).

## ✅ Objectif

Garantir que toute réponse 5xx porte un code d'incident court dérivé du traceId et que le détail technique ne fuite jamais.

## 🖼️ Maquettes de référence

Toutes les captures ci-dessous sont les maquettes validées (clair / sombre, mobile / tablette ou bureau). Le comportement visuel, les espacements, états et libellés doivent être reproduits à l'identique ; les tokens du design system s'appliquent (aucune couleur en dur).

#### `A-04` — Erreur serveur 5xx
_Module : Lancement et système_

<table><tr><th align='center'>Mobile · Clair</th><th align='center'>Mobile · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/A/A-04_erreur-serveur-5xx__phone_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/A/A-04_erreur-serveur-5xx__phone_light.webp?raw=true' width='230' alt='A-04 Mobile Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/A/A-04_erreur-serveur-5xx__phone_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/A/A-04_erreur-serveur-5xx__phone_dark.webp?raw=true' width='230' alt='A-04 Mobile Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/A/A-04_erreur-serveur-5xx__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/A/A-04_erreur-serveur-5xx__tablet_light.webp?raw=true' width='330' alt='A-04 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/A/A-04_erreur-serveur-5xx__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/A/A-04_erreur-serveur-5xx__tablet_dark.webp?raw=true' width='330' alt='A-04 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Quiz » · « Petit souci de notre côté » · « Le service est momentanément indisponible. Notre équipe est déjà dessus. Réessaie dans quelques instants. » · « Réessayer » · « Code d'incident : UB-5C21-8F3A »

**Composants repérés** : `btn`

</details>

**Issues liées sur ce même écran :** [API-AUTH-44](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-AUTH-44%5D%22) · [API-PLAT-07](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-PLAT-07%5D%22) · [API-PLAT-24](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-PLAT-24%5D%22) · [API-PLAT-33](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-PLAT-33%5D%22) · [API-PLAT-34](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-PLAT-34%5D%22) · [API-PLAT-40](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-PLAT-40%5D%22) · [API-PLAT-41](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-PLAT-41%5D%22) · [API-PLAT-55](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-PLAT-55%5D%22) · [MOB-A-05](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-A-05%5D%22) · [MOB-A-06](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-A-06%5D%22) · [MOB-A-17](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-A-17%5D%22) · [MOB-A-18](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-A-18%5D%22) · [MOB-A-19](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-A-19%5D%22)

## 📐 Règles de gestion

- Format incidentId : 'UB-' + 4 puis 4 caractères hexadécimaux majuscules dérivés du traceId (ex. UB-5C21-8F3A) ; table de correspondance non nécessaire (préfixe de traceId recherchable dans Graylog).
- Corps 5xx : { success:false, error:{ code:'INTERNAL_ERROR' | 'SERVICE_UNAVAILABLE' | 'BAD_GATEWAY', message générique localisé, details:{ incidentId }, traceId } } ; jamais de stack ni de message d'exception en production.
- En-tête X-Trace-Id sur toutes les réponses (2xx comme 4xx/5xx) ; X-Request-Id accepté en entrée (UUID) sinon généré.
- 503 dépendance externe indisponible (CDC Backend §11.6) : code SERVICE_UNAVAILABLE + Retry-After: 30.
- Toute 5xx est loguée niveau error avec traceId, route, userId pseudonymisé et incrémente ub_http_5xx_total{route}.

## 🛠️ Tâches

- [ ] Compléter src/middleware/errorHandler.ts : génération incidentId et normalisation des codes 5xx.
- [ ] Compléter src/middleware/requestContext.ts : X-Trace-Id sur toutes les réponses (y compris 404 et 429).
- [ ] Mapper les erreurs Mongoose/ioredis/timeouts vers 503 SERVICE_UNAVAILABLE.
- [ ] Ajouter le compteur ub_http_5xx_total dans src/config/metrics.ts.
- [ ] Catalogue de messages 5xx localisés (fr/en/es) dans src/i18n.
- [ ] Test de non-fuite : message d'exception interne absent de la réponse en NODE_ENV=production.
- [ ] Documenter le format dans Swagger (schéma ErrorResponse, exemples 500/503).
- [ ] Page runbook « retrouver un incident à partir d'un code UB-xxxx-xxxx ».

## ✔️ Critères d'acceptation

- [ ] Étant donné une exception inattendue, quand la route répond, alors 500 avec details.incidentId au format ^UB-[0-9A-F]{4}-[0-9A-F]{4}$.
- [ ] Étant donné la production, alors le corps ne contient ni stack ni message interne.
- [ ] Étant donné une réponse 200, alors X-Trace-Id est présent.
- [ ] Étant donné MongoDB injoignable, alors 503 SERVICE_UNAVAILABLE avec Retry-After.
- [ ] Étant donné l'incidentId, alors il est retrouvable dans les logs par traceId.

## 🧪 Tests à écrire

- [ ] Unitaire : dérivation incidentId stable pour un traceId.
- [ ] Intégration : route qui lève Error → 500 normalisé.
- [ ] Intégration : X-Trace-Id sur 404/429.
- [ ] Sécurité : pas de fuite de stack en production.
- [ ] Intégration : timeout Mongo → 503.
- [ ] Unitaire : compteur ub_http_5xx_total.

## 📚 Références

- CDC Backend §6.5
- CDC Backend §10 (contrat d'erreur)
- CDC Backend §11.6

## 📦 Définition de terminé

`npm run lint`, `format:check`, `typecheck`, tests unitaires/intégration/sécurité verts ; Swagger (`npm run export:swagger`) à jour ; migration si schéma modifié ; PR vers `dev` ; CI verte.
