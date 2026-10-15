# Reprise après sinistre

| Objectif                         | Valeur cible                                                        |
| -------------------------------- | ------------------------------------------------------------------- |
| RPO (perte de données maximale)  | 24 h (sauvegarde quotidienne) — 1 h avec sauvegarde horaire activée |
| RTO (durée de remise en service) | 2 h                                                                 |

## Sauvegardes

`scripts/backup.sh` (mongodump compressé + rotation 7 jours). Planification recommandée sur le VPS :

```cron
0 2 * * * docker exec ub-production-api /scripts/backup.sh >> /var/www/univers-barca/backups/backup.log 2>&1
```

Copier les archives hors du VPS (stockage objet chiffré, rétention 30 jours). Redis ne contient que du cache, des blacklists et des files : sa perte n'entraîne aucune perte de données durables (les utilisateurs devront se reconnecter).

## Restauration

1. Mettre l'API en maintenance : `MAINTENANCE_MODE=true` puis recréer le service.
2. `MONGODB_URI=… sh scripts/restore.sh /backups/univers_barca-AAAAMMJJ-HHMMSS.archive.gz` (confirmation requise, opération destructive).
3. `npx migrate-mongo status` puis `up` si nécessaire.
4. Vérifier `/health/deep`, désactiver la maintenance.
5. Rédiger un post-mortem (cause, chronologie, actions correctives).

## Scénarios

| Scénario                        | Réponse                                                                                                      |
| ------------------------------- | ------------------------------------------------------------------------------------------------------------ |
| Déploiement défectueux          | Rollback automatique du pipeline, sinon rollback manuel (DEPLOYMENT.md)                                      |
| Corruption de données           | Restauration de la dernière sauvegarde saine                                                                 |
| Perte du VPS                    | Nouveau VPS (`setup-vps.sh`), restauration de la sauvegarde, bascule DNS                                     |
| Fuite de secret                 | Rotation immédiate (`JWT_*`, mots de passe), révocation des sessions (purge `refreshtokens`), audit des logs |
| Compromission d'un compte admin | Désactivation (`status: disabled`), révocation des `adminsessions`, revue de `auditlogs`                     |

Un test de restauration est à réaliser chaque trimestre.
