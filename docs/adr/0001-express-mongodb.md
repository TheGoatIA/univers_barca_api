# ADR 0001 — Express + MongoDB

- **Statut** : acceptée
- **Contexte** : le cahier des charges backend suggérait NestJS/PostgreSQL ; l'équipe maîtrise la stack éprouvée « ClicEat » (Express 4, Mongoose, Redis, BullMQ, PM2) et ses conventions de déploiement.
- **Décision** : Node 22 + TypeScript strict + Express 4 en couches `routes → middleware → controller → service → model`, MongoDB (replica set) via Mongoose, sans DI ni Repository.
- **Conséquences** : productivité et cohérence avec les autres produits ; schéma flexible pour les contenus localisés ; pas de jointures relationnelles (données embarquées ou références) ; les calculs géographiques utilisent `2dsphere`.
