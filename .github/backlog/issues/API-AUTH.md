> **API-AUTH** · Épopée · Phase 1 — MVP

## 🎯 Objectif

Finaliser et durcir le socle d'identité de l'API Univers Barça : inscription, connexion, e-mails transactionnels réels, OAuth Google/Apple, sessions et appareils, consentements RGPD historisés, export et suppression de compte, préférences et profil, authentification du back-office (invitation, 2FA, RBAC, audit) et sécurité transverse, afin de servir les écrans mobiles d'onboarding, de paramètres et d'erreurs de compte ainsi que la connexion admin.

## 📦 Périmètre

- Worker e-mail BullMQ, fournisseur SMTP/API et modèles FR/EN/ES
- Vérification d'e-mail par code, mot de passe oublié/reset/changement, changement d'e-mail
- OAuth Google et Apple (vérification des id tokens), rattachement de fournisseurs
- Refresh à rotation durci, sessions/appareils, verrouillage anti-bruteforce, états de compte (suspendu/banni) pour A-08/A-09/A-10
- Consentements (historique, versions légales, effets du retrait), export RGPD asynchrone, suppression J+30 et purge/anonymisation
- Préférences, profil d'onboarding, profil public/privé, avatar
- Auth admin : invitation, activation, 2FA + codes de secours, RBAC, sessions, audit des connexions, reset
- Rate limiting, tests d'intégration/sécurité, Swagger, i18n des erreurs

## 🚫 Hors périmètre

- Écrans Flutter et React (traités dans les groupes mobile/admin)
- Modération applicative et barème des sanctions (module moderation)
- Notifications push FCM (module notifications) hormis l'activation/désactivation des jetons
- Logique métier des jeux, Fantasy, carte communautaire (seulement les effets RGPD sur leurs données)

## 📚 Références

- CDC Backend §3.1, §3.11, §4.1, §4.8, §5, §7, §10, §11.6
- CDC Global §2.13, §3.2, §10.2, §10.3
- CDC Admin §3, §6

## 🧩 Issues de l'épopée (45)

{{CHILDREN}}
