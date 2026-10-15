> **API-MODER-05** · API · Priorité **P0** · Taille **M** · Phase 2 — Communautaire & compétitif

## 🎯 Contexte

Depuis chaque contenu communautaire (K-04 options), l'utilisateur choisit un motif (K-05) puis voit la confirmation « Signalement envoyé » (K-06). Le CDC Backend liste POST /community/reports.

## ✅ Objectif

Permettre à tout utilisateur actif de signaler un contenu ou un profil avec un motif, de façon anti-abus et confidentielle.

## 🖼️ Maquettes de référence

Toutes les captures ci-dessous sont les maquettes validées (clair / sombre, mobile / tablette ou bureau). Le comportement visuel, les espacements, états et libellés doivent être reproduits à l'identique ; les tokens du design system s'appliquent (aucune couleur en dur).

#### `K-04` — Options et signalement
_Module : Groupes locaux_

<table><tr><th align='center'>Mobile · Clair</th><th align='center'>Mobile · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/K/K-04_options-et-signalement__phone_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/K/K-04_options-et-signalement__phone_light.webp?raw=true' width='230' alt='K-04 Mobile Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/K/K-04_options-et-signalement__phone_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/K/K-04_options-et-signalement__phone_dark.webp?raw=true' width='230' alt='K-04 Mobile Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/K/K-04_options-et-signalement__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/K/K-04_options-et-signalement__tablet_light.webp?raw=true' width='330' alt='K-04 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/K/K-04_options-et-signalement__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/K/K-04_options-et-signalement__tablet_dark.webp?raw=true' width='330' alt='K-04 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Groupe » · « Culés Cameroun » · « Yaoundé » · « 721 membres » · « Public » · « Le point de rendez-vous des supporters du Barça au Cameroun. Watch parties, discussions et bon esprit ! » · « Membre » · « Fil » · « Événements » · « Membres » · « Mamadou Diallo » · « Modérateur » · « il y a 12 min » · « Qui est chaud pour le Clásico samedi ? On se retrouve au Relais à 19h30 ! 🔵🔴 » · « Aïcha Ngono » · « il y a 1 h » · « Quelqu’un a vu la compo probable ? Yamal titulaire sans doute. » · « Kevin Mballa » · « il y a 3 h » · « Photo du dernier visionnage au Bastos, quelle ambiance ! » · « Écrire dans le groupe… » · « Photo du dernier visionnage… » · « Copier le texte » · « Enregistrer » · « Signaler ce message » · « Masquer cet utilisateur »

**Composants repérés** : `avatar`, `btn`, `card`, `sheet`

</details>

**Issues liées sur ce même écran :** [API-COMM-26](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-COMM-26%5D%22) · [API-MODER-32](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-MODER-32%5D%22) · [MOB-K-05](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-K-05%5D%22) · [MOB-K-12](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-K-12%5D%22) · [MOB-K-15](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-K-15%5D%22) · [MOB-K-30](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-K-30%5D%22) · [MOB-K-31](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-K-31%5D%22)

#### `K-05` — Choix du motif de signalement
_Module : Groupes locaux_

<table><tr><th align='center'>Mobile · Clair</th><th align='center'>Mobile · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/K/K-05_choix-du-motif-de-signalement__phone_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/K/K-05_choix-du-motif-de-signalement__phone_light.webp?raw=true' width='230' alt='K-05 Mobile Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/K/K-05_choix-du-motif-de-signalement__phone_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/K/K-05_choix-du-motif-de-signalement__phone_dark.webp?raw=true' width='230' alt='K-05 Mobile Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/K/K-05_choix-du-motif-de-signalement__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/K/K-05_choix-du-motif-de-signalement__tablet_light.webp?raw=true' width='330' alt='K-05 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/K/K-05_choix-du-motif-de-signalement__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/K/K-05_choix-du-motif-de-signalement__tablet_dark.webp?raw=true' width='330' alt='K-05 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Groupe » · « Culés Cameroun » · « Yaoundé » · « 721 membres » · « Public » · « Le point de rendez-vous des supporters du Barça au Cameroun. Watch parties, discussions et bon esprit ! » · « Membre » · « Fil » · « Événements » · « Membres » · « Mamadou Diallo » · « Modérateur » · « il y a 12 min » · « Qui est chaud pour le Clásico samedi ? On se retrouve au Relais à 19h30 ! 🔵🔴 » · « Aïcha Ngono » · « il y a 1 h » · « Quelqu’un a vu la compo probable ? Yamal titulaire sans doute. » · « Kevin Mballa » · « il y a 3 h » · « Photo du dernier visionnage au Bastos, quelle ambiance ! » · « Écrire dans le groupe… » · « Signaler ce message » · « Ton signalement est anonyme. Il sera examiné par un modérateur. » · « Propos haineux ou discriminatoires » · « Harcèlement ou menaces » · « Spam ou publicité » · « Contenu inapproprié » · « Autre » · « Envoyer le signalement »

**Composants repérés** : `avatar`, `btn`, `card`, `sheet`

</details>

**Issues liées sur ce même écran :** [API-MODER-01](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-MODER-01%5D%22) · [API-MODER-30](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-MODER-30%5D%22) · [API-MODER-31](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-MODER-31%5D%22) · [API-MODER-32](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-MODER-32%5D%22) · [MOB-K-05](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-K-05%5D%22) · [MOB-K-13](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-K-13%5D%22) · [MOB-K-30](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-K-30%5D%22) · [MOB-K-31](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-K-31%5D%22)

#### `K-06` — Signalement envoyé
_Module : Groupes locaux_

<table><tr><th align='center'>Mobile · Clair</th><th align='center'>Mobile · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/K/K-06_signalement-envoye__phone_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/K/K-06_signalement-envoye__phone_light.webp?raw=true' width='230' alt='K-06 Mobile Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/K/K-06_signalement-envoye__phone_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/K/K-06_signalement-envoye__phone_dark.webp?raw=true' width='230' alt='K-06 Mobile Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/K/K-06_signalement-envoye__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/K/K-06_signalement-envoye__tablet_light.webp?raw=true' width='330' alt='K-06 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/K/K-06_signalement-envoye__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/K/K-06_signalement-envoye__tablet_dark.webp?raw=true' width='330' alt='K-06 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Groupe » · « Culés Cameroun » · « Yaoundé » · « 721 membres » · « Public » · « Le point de rendez-vous des supporters du Barça au Cameroun. Watch parties, discussions et bon esprit ! » · « Membre » · « Fil » · « Événements » · « Membres » · « Mamadou Diallo » · « Modérateur » · « il y a 12 min » · « Qui est chaud pour le Clásico samedi ? On se retrouve au Relais à 19h30 ! 🔵🔴 » · « Aïcha Ngono » · « il y a 1 h » · « Quelqu’un a vu la compo probable ? Yamal titulaire sans doute. » · « Kevin Mballa » · « il y a 3 h » · « Photo du dernier visionnage au Bastos, quelle ambiance ! » · « Écrire dans le groupe… » · « Merci ! » · « Ton signalement a été transmis à l’équipe de modération. Tu seras informé(e) de la suite donnée. » · « Fermer » · « Masquer cet utilisateur »

**Composants repérés** : `avatar`, `btn`, `card`, `modal`

</details>

**Issues liées sur ce même écran :** [API-COMM-26](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-COMM-26%5D%22) · [API-MODER-30](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-MODER-30%5D%22) · [API-MODER-32](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-MODER-32%5D%22) · [MOB-K-05](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-K-05%5D%22) · [MOB-K-14](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-K-14%5D%22) · [MOB-K-15](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-K-15%5D%22) · [MOB-K-30](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-K-30%5D%22) · [MOB-K-31](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-K-31%5D%22)

## 📐 Règles de gestion

- Motifs : harassment, hate, threats, sexual, spam, misinformation, illegal, other ; commentaire facultatif <= 500 caractères.
- Interdiction de se signaler soi-même (422 CANNOT_REPORT_SELF) ; la cible doit exister et être visible par le rapporteur (membre du groupe si privé).
- Quotas : 10 signalements / heure et 30 / jour / utilisateur ; 429 REPORT_RATE_LIMIT avec Retry-After.
- Confidentialité : la réponse ne contient jamais l'identité de l'auteur signalé ; l'auteur ne voit jamais l'identité du rapporteur.
- Après création : exécution du pré-filtrage (gravité auto), calcul du SLA, notification interne au back-office si urgent.
- Idempotence : Idempotency-Key facultative ; un doublon rapporteur/cible retourne 200 avec le signalement existant.

## 🔌 Contrats d'API

| Méthode | Chemin | Description | Requête | Réponse |
| --- | --- | --- | --- | --- |
| `POST` | `/api/v1/community/reports` | Créer un signalement | {success:true,data:{reportId,status:'pending'}} | {success:true,data} |

## 🛠️ Tâches

- [ ] Créer validators/report.validator.ts (Joi).
- [ ] Créer controllers/report.controller.ts et services/report.service.ts (submit).
- [ ] Créer la route POST /api/v1/community/reports (protect + requireActiveAccount).
- [ ] Appeler report-snapshot pour figer le contexte.
- [ ] Appeler ContentFilterService.evaluate pour la gravité auto.
- [ ] Ajouter le limiteur Redis rl:report:<userId>.
- [ ] Ajouter la métrique moderation_reports_created_total{reason,targetType}.
- [ ] Annoter Swagger avec exemples de requête/réponse.
- [ ] Journaliser REPORT_CREATED dans AuditLog (adminId nul, acteur utilisateur).

## ✔️ Critères d'acceptation

- [ ] Étant donné un message d'un autre membre, quand je le signale pour harassment, alors 201 avec reportId et status pending.
- [ ] Étant donné mon propre message, quand je le signale, alors 422 CANNOT_REPORT_SELF.
- [ ] Étant donné 11 signalements en 1 h, alors le 11e retourne 429.
- [ ] Étant donné un message d'un groupe privé dont je ne suis pas membre, alors 404.
- [ ] Étant donné un doublon, alors 200 avec le même identifiant.

## 🧪 Tests à écrire

- [ ] Test d'intégration : création nominale.
- [ ] Test d'intégration : doublon idempotent.
- [ ] Test d'intégration : quota.
- [ ] Test de sécurité : fuite d'identité absente de la réponse.
- [ ] Test unitaire : validation Joi des motifs.

## 🔗 Dépendances

À réaliser après : `API-MODER-01` · `API-MODER-04` (rechercher le code entre crochets dans le titre des issues).

## 📚 Références

- CDC Backend §3.11
- CDC Backend §4
- CDC Global §11.2

## 📦 Définition de terminé

`npm run lint`, `format:check`, `typecheck`, tests unitaires/intégration/sécurité verts ; Swagger (`npm run export:swagger`) à jour ; migration si schéma modifié ; PR vers `dev` ; CI verte.
