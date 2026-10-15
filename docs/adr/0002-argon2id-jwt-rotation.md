# ADR 0002 — Argon2id et rotation des refresh tokens

- **Statut** : acceptée
- **Contexte** : le cahier des charges impose Argon2id ; ClicEat utilise bcrypt.
- **Décision** : `argon2` (Argon2id, 19 MiB, t=2, p=1). Access token JWT HS256 15 min (`id`, `role`, `jti`, `kind`), refresh token opaque haché (SHA-256) à rotation avec détection de réutilisation par « famille », blacklist Redis du `jti` à la déconnexion.
- **Conséquences** : ré-hachage transparent à la connexion si les paramètres évoluent ; une réutilisation de refresh révoque toute la session ; build natif requis pour `argon2` (installé dans l'image).
