# ADR 0004 — MongoDB sans authentification sur réseau interne

- **Statut** : acceptée (à revoir si l'infrastructure se mutualise)
- **Contexte** : un replica set authentifié impose un `keyFile` aux permissions strictes, fragile en déploiement automatisé.
- **Décision** : MongoDB et Redis (mot de passe) ne sont attachés qu'au réseau Docker `internal: true`, sans port publié ; seul le service `backend` rejoint les réseaux publics.
- **Conséquences** : surface d'attaque réduite par l'isolement réseau ; activer `--auth` + `keyFile` si la base est un jour accessible hors de ce réseau.
