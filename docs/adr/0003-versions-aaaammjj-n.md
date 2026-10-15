# ADR 0003 — Versionnage `AAAAMMJJ.N`

- **Statut** : acceptée
- **Décision** : chaque déploiement reçoit `AAAAMMJJ.N` (N = compteur du jour = 1 + max des tags existants `v…`/`staging-…` du jour). Tags d'image `<env>-<version>` et `<env>-latest`, tags git `staging-<version>` (dev) et `v<version>` (production).
- **Alternative écartée** : compteur basé sur le nombre de runs (non monotone en cas de relance ou d'échec).
