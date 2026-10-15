> **API-IA-28** · RGPD · Priorité **P1** · Taille **M** · Phase 1 — MVP

## 🎯 Contexte

Le droit à l'effacement (CDC Global §10.2) et la stratégie d'anonymisation du CDC Backend §4.8 imposent de supprimer définitivement l'historique de l'assistant avec le compte. Le job cron RGPD existe sans handler métier.

## ✅ Objectif

Suppression immédiate à la demande, cascade lors de la suppression de compte et purge automatique selon la durée de conservation.

## 🖼️ Maquettes de référence

Toutes les captures ci-dessous sont les maquettes validées (clair / sombre, mobile / tablette ou bureau). Le comportement visuel, les espacements, états et libellés doivent être reproduits à l'identique ; les tokens du design system s'appliquent (aucune couleur en dur).

#### `N-15` — Historique des conversations
_Module : Assistant IA Barça AI_

<table><tr><th align='center'>Mobile · Clair</th><th align='center'>Mobile · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/N/N-15_historique-des-conversations__phone_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/N/N-15_historique-des-conversations__phone_light.webp?raw=true' width='230' alt='N-15 Mobile Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/N/N-15_historique-des-conversations__phone_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/N/N-15_historique-des-conversations__phone_dark.webp?raw=true' width='230' alt='N-15 Mobile Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/N/N-15_historique-des-conversations__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/N/N-15_historique-des-conversations__tablet_light.webp?raw=true' width='330' alt='N-15 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/N/N-15_historique-des-conversations__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/N/N-15_historique-des-conversations__tablet_dark.webp?raw=true' width='330' alt='N-15 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Conversations » · « Nouvelle » · « Rechercher » · « Wembley 2011 » · « Raconte-moi la finale… » · « Aujourd'hui » · « Stats Lewandowski » · « 11 buts en 14 matchs » · « Hier » · « Messi ou Xavi ? » · « Voici la comparaison… » · « 12 oct. » · « Calendrier novembre » · « Le prochain match est… » · « 10 oct. »

**Composants repérés** : `avatar`, `btn`, `card`, `search`, `sheet`

</details>

**Issues liées sur ce même écran :** [API-IA-01](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-IA-01%5D%22) · [API-IA-16](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-IA-16%5D%22) · [API-IA-26](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-IA-26%5D%22) · [API-IA-27](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-IA-27%5D%22) · [API-IA-32](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-IA-32%5D%22) · [API-IA-34](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-IA-34%5D%22) · [MOB-N-01](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-N-01%5D%22) · [MOB-N-02](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-N-02%5D%22) · [MOB-N-04](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-N-04%5D%22) · [MOB-N-21](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-N-21%5D%22) · [MOB-N-22](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-N-22%5D%22) · [MOB-N-23](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-N-23%5D%22) · [MOB-N-27](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-N-27%5D%22) · [MOB-N-28](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-N-28%5D%22) · [MOB-N-29](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-N-29%5D%22) · [MOB-N-31](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-N-31%5D%22)

## 📐 Règles de gestion

- Suppression d'une conversation ou de toutes (endpoints du CRUD) : suppression physique immédiate des ChatMessage et de la conversation ; les AiCallLog (sans contenu, userHash) sont conservés pour la comptabilité des coûts.
- Suppression de compte : le handler rgpd supprime toutes les conversations/messages de l'utilisateur dans les 30 jours au plus tard (immédiat dans la pratique), ainsi que ses compteurs AiUsage ; les ModerationReport liés à un chat_message conservent un snapshot du message signalé anonymisé (userId remplacé par identifiant technique dissocié).
- Rétention : conversations inactives depuis 12 mois supprimées automatiquement (job quotidien 03:30, par lots de 500, notification préalable non requise) ; messages `moderated` purgés après 30 jours ; logs applicatifs de l'assistant masquent le contenu (conservation 90 jours).
- Retrait du consentement : si le consentement `ai_processing` (s'il existe dans les ConsentRecord) est retiré, l'envoi de messages est refusé 403 CONSENT_REQUIRED sans suppression automatique.

## 🛠️ Tâches

- [ ] Ajouter `AssistantErasureContributor` dans le pipeline de suppression (src/jobs/handlers/rgpd-delete.job.ts).
- [ ] Créer le job cron `assistant-retention` dans src/jobs/scheduler.ts (0 30 3 * * *) et son handler.
- [ ] Implémenter la purge par lots avec reprise et métrique `rgpd_purged_total{type}`.
- [ ] Ajouter l'anonymisation des snapshots de ModerationReport.
- [ ] Vérifier la présence du consentement dans le middleware de l'assistant (si défini par le groupe AUTH).
- [ ] Écrire la documentation de rétention dans docs/DATABASE.md.
- [ ] Écrire des tests de purge sur 2000 conversations.

## ✔️ Critères d'acceptation

- [ ] Étant donné la suppression du compte, quand le handler s'exécute, alors aucun ChatMessage ni AiUsage de l'utilisateur ne subsiste.
- [ ] Étant donné une conversation inactive depuis 13 mois, alors elle est supprimée par le job de rétention.
- [ ] Étant donné un message moderated de 31 jours, alors il est purgé.
- [ ] Étant donné un ModerationReport lié, alors son snapshot ne contient plus l'identifiant de l'utilisateur.

## 🧪 Tests à écrire

- [ ] Intégration : cascade suppression compte.
- [ ] Intégration : job de rétention par lots.
- [ ] Intégration : anonymisation snapshot.
- [ ] Unitaire : sélection par ancienneté.

## 🔗 Dépendances

À réaliser après : `API-IA-16` · `API-IA-27` (rechercher le code entre crochets dans le titre des issues).

## 📚 Références

- CDC Global §10.2
- CDC Backend §4.8

## 📦 Définition de terminé

`npm run lint`, `format:check`, `typecheck`, tests unitaires/intégration/sécurité verts ; Swagger (`npm run export:swagger`) à jour ; migration si schéma modifié ; PR vers `dev` ; CI verte.
