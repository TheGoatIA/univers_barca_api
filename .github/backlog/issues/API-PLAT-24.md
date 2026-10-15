> **API-PLAT-24** · Infrastructure · Priorité **P1** · Taille **M** · Phase 1 — MVP

## 🎯 Contexte

src/tracing.ts initialise le SDK mais la corrélation logs/traces et l'instrumentation BullMQ ne sont pas garanties (CDC Backend §6.2, §6.5). Le traceId doit apparaître dans X-Trace-Id, les logs Winston et les appels sortants.

## ✅ Objectif

Obtenir une trace complète requête → Mongo/Redis → fournisseur externe → job BullMQ.

## 🖼️ Maquettes de référence

Toutes les captures ci-dessous sont les maquettes validées (clair / sombre, mobile / tablette ou bureau). Le comportement visuel, les espacements, états et libellés doivent être reproduits à l'identique ; les tokens du design system s'appliquent (aucune couleur en dur).

#### `A-04` — Erreur serveur 5xx
_Module : Lancement et système_

<table><tr><th align='center'>Mobile · Clair</th><th align='center'>Mobile · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/A/A-04_erreur-serveur-5xx__phone_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/A/A-04_erreur-serveur-5xx__phone_light.webp?raw=true' width='230' alt='A-04 Mobile Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/A/A-04_erreur-serveur-5xx__phone_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/A/A-04_erreur-serveur-5xx__phone_dark.webp?raw=true' width='230' alt='A-04 Mobile Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/A/A-04_erreur-serveur-5xx__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/A/A-04_erreur-serveur-5xx__tablet_light.webp?raw=true' width='330' alt='A-04 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/A/A-04_erreur-serveur-5xx__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/A/A-04_erreur-serveur-5xx__tablet_dark.webp?raw=true' width='330' alt='A-04 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Quiz » · « Petit souci de notre côté » · « Le service est momentanément indisponible. Notre équipe est déjà dessus. Réessaie dans quelques instants. » · « Réessayer » · « Code d'incident : UB-5C21-8F3A »

**Composants repérés** : `btn`

</details>

**Issues liées sur ce même écran :** [API-AUTH-44](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-AUTH-44%5D%22) · [API-PLAT-05](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-PLAT-05%5D%22) · [API-PLAT-07](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-PLAT-07%5D%22) · [API-PLAT-33](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-PLAT-33%5D%22) · [API-PLAT-34](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-PLAT-34%5D%22) · [API-PLAT-40](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-PLAT-40%5D%22) · [API-PLAT-41](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-PLAT-41%5D%22) · [API-PLAT-55](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-PLAT-55%5D%22) · [MOB-A-05](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-A-05%5D%22) · [MOB-A-06](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-A-06%5D%22) · [MOB-A-17](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-A-17%5D%22) · [MOB-A-18](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-A-18%5D%22) · [MOB-A-19](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-A-19%5D%22)

#### `WH-03` — Explorateur de logs
_Module : Supervision technique_

<table><tr><th align='center'>Bureau · Clair</th><th align='center'>Bureau · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WH/WH-03_explorateur-de-logs__desktop_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WH/WH-03_explorateur-de-logs__desktop_light.webp?raw=true' width='330' alt='WH-03 Bureau Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WH/WH-03_explorateur-de-logs__desktop_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WH/WH-03_explorateur-de-logs__desktop_dark.webp?raw=true' width='330' alt='WH-03 Bureau Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WH/WH-03_explorateur-de-logs__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WH/WH-03_explorateur-de-logs__tablet_light.webp?raw=true' width='330' alt='WH-03 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WH/WH-03_explorateur-de-logs__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WH/WH-03_explorateur-de-logs__tablet_dark.webp?raw=true' width='330' alt='WH-03 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Logs » · « Explorateur de logs » · « Données personnelles masquées · conservation 90 jours » · « Ouvrir dans Graylog » · « Rechercher… » · « Service : api » · « Niveau : ≥ warn » · « Dernières 24 h » · « traceId: 9f3a21c8… » · « Horodatage » · « Niveau »

**Composants repérés** : `avatar`, `btn`, `chip`, `input`

</details>

**Issues liées sur ce même écran :** [ADM-WH-01](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WH-01%5D%22) · [ADM-WH-02](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WH-02%5D%22) · [ADM-WH-08](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WH-08%5D%22) · [ADM-WH-09](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WH-09%5D%22) · [ADM-WH-15](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WH-15%5D%22) · [API-PLAT-16](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-PLAT-16%5D%22) · [API-PLAT-25](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-PLAT-25%5D%22) · [API-PLAT-54](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-PLAT-54%5D%22) · [API-PLAT-55](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-PLAT-55%5D%22)

## 📐 Règles de gestion

- Export OTLP vers otel-collector (OTEL_EXPORTER_OTLP_ENDPOINT) ; rétention des traces détaillées 14 jours (Tempo/Jaeger), métriques agrégées plus longtemps.
- Échantillonnage : 100 % des erreurs et requêtes > 1 s, 10 % du reste en production, 100 % en staging (ParentBased + TraceIdRatio).
- Propagation W3C traceparent sur les appels sortants et dans les jobs BullMQ (job.data._trace) pour relier requête et worker.
- Spans personnalisés pour les étapes IA (récupération de contexte, appel modèle, modération sortie) conformément à l'exemple CDC §6.5.
- Aucun attribut ne contient de donnée personnelle (pas d'e-mail, pas de corps de requête).

## 🛠️ Tâches

- [ ] Compléter src/tracing.ts (resource service.name, deployment.environment, sampler).
- [ ] Ajouter l'instrumentation BullMQ (@appsignal ou manuelle) et ioredis/mongodb.
- [ ] Injecter/extraire traceparent dans enqueue() et registerWorker().
- [ ] Winston format ajoutant trace_id/span_id depuis le contexte actif.
- [ ] Ajouter otel-collector et Tempo à docker-compose.observability.yml.
- [ ] Configurer la rétention 14 jours.
- [ ] Documenter la procédure « du X-Trace-Id à la trace Grafana ».

## ✔️ Critères d'acceptation

- [ ] Étant donné une requête GET /matches, alors la trace contient un span HTTP et au moins un span mongodb.
- [ ] Étant donné un job enfilé depuis une requête, alors le span du worker a le même traceId.
- [ ] Étant donné une erreur 500, alors la trace est échantillonnée même à 10 %.
- [ ] Étant donné un log émis pendant la requête, alors il contient trace_id égal au X-Trace-Id.

## 🧪 Tests à écrire

- [ ] Intégration : trace en mémoire (InMemorySpanExporter) pour GET /matches.
- [ ] Intégration : propagation traceparent dans un job.
- [ ] Unitaire : sampler garde les erreurs.
- [ ] Unitaire : absence de PII dans les attributs.
- [ ] Intégration : X-Trace-Id = trace_id des logs.

## 🔗 Dépendances

À réaliser après : `API-PLAT-21` (rechercher le code entre crochets dans le titre des issues).

## 📚 Références

- CDC Backend §6.2
- CDC Backend §6.5
- CDC Backend §5.7

## 📦 Définition de terminé

`npm run lint`, `format:check`, `typecheck`, tests unitaires/intégration/sécurité verts ; Swagger (`npm run export:swagger`) à jour ; migration si schéma modifié ; PR vers `dev` ; CI verte.
