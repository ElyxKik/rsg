# 🚀 INSTRUCTIONS DE SETUP - RSG

**Date:** 31 Octobre 2025  
**Statut:** Prêt pour démarrage

---

## ✅ STRUCTURE CRÉÉE

```
reserve-stategique-generale/
├── frontend/                    ← Site public Next.js
│   ├── package.json
│   ├── tsconfig.json
│   ├── next.config.js
│   ├── tailwind.config.js
│   ├── .env.local
│   └── .gitignore
├── backend/                     ← CMS Strapi
│   ├── package.json
│   ├── .env.local
│   └── .gitignore
├── intranet/                    ← Intranet privé
│   ├── package.json
│   ├── .env.local
│   └── .gitignore
├── infrastructure/              ← Configuration infra
├── docker-compose.yml           ← Services Docker
├── .env.example                 ← Variables d'env
└── [Documentation complète]     ← 18 fichiers
```

---

## 🔧 PROCHAINES ÉTAPES

### Étape 1: Initialiser les repositories (5 min)

```bash
# Frontend
cd frontend
npm install
npm run build

# Backend
cd ../backend
npm install

# Intranet
cd ../intranet
npm install
```

### Étape 2: Démarrer les services Docker (10 min)

```bash
# À la racine du projet
docker-compose up -d

# Vérifier les services
docker-compose ps
```

### Étape 3: Initialiser les bases de données (5 min)

```bash
# Backend
cd backend
npm run migrate
npm run seed
```

### Étape 4: Démarrer les applications (5 min)

```bash
# Terminal 1: Frontend
cd frontend
npm run dev
# http://localhost:3000

# Terminal 2: Backend
cd backend
npm run develop
# http://localhost:1337

# Terminal 3: Intranet
cd intranet
npm run dev
# http://localhost:3001
```

---

## 📊 ACCÈS AUX INTERFACES

| Service | URL | Credentials |
|---------|-----|-------------|
| **Frontend** | http://localhost:3000 | Public |
| **Backend (Strapi)** | http://localhost:1337/admin | admin@rsg.gov.cd / Admin@123456 |
| **Intranet** | http://localhost:3001 | user@rsg.gov.cd / User@123456 |
| **pgAdmin** | http://localhost:5050 | admin@rsg.gov.cd / pgadmin_dev_password |
| **Redis Commander** | http://localhost:8081 | N/A |
| **Mailhog** | http://localhost:8025 | N/A |

---

## 🔐 VARIABLES D'ENVIRONNEMENT

Tous les fichiers `.env.local` sont configurés avec des valeurs de développement.

**IMPORTANT:** Changer les secrets en production!

```bash
# Frontend
NEXTAUTH_SECRET=dev_nextauth_secret_key_change_in_production_min_32_chars

# Backend
JWT_SECRET=dev_jwt_secret_key_change_in_production_min_32_chars_long
ENCRYPTION_KEY=dev_encryption_key_change_in_production_min_32_chars_long

# Intranet
NEXTAUTH_SECRET=dev_intranet_nextauth_secret_key_change_in_production_min_32_chars
```

---

## 📚 DOCUMENTATION

Tous les documents de spécification sont disponibles à la racine:

- **START_HERE.md** - Point de départ
- **README.md** - Vue d'ensemble
- **QUICK_START.md** - Guide rapide
- **SPEC_PART1_ARCHITECTURE.md** - Architecture
- **SPEC_PART2_SECURITE.md** - Sécurité
- **SPEC_PART3_DESIGN.md** - Design
- **SPEC_PART4_IMPLEMENTATION.md** - Implémentation
- **SPEC_PART5_ADMINISTRATION.md** - Administration

---

## 🎯 PROCHAINES ACTIONS

### Immédiat
1. ✅ Lire QUICK_START.md
2. ✅ Installer npm packages
3. ✅ Démarrer Docker Compose
4. ✅ Initialiser les BDs

### Court terme (Semaine 1)
1. Créer repositories GitHub
2. Configurer CI/CD pipelines
3. Créer design system Figma
4. Commencer développement

### Moyen terme (Semaines 2-4)
1. Implémenter backend Strapi
2. Implémenter frontend Next.js
3. Intégrer animations
4. Configurer authentification

### Long terme (Semaines 5-18)
1. Développer fonctionnalités
2. Tester sécurité
3. Optimiser performance
4. Déployer production

---

## 📞 SUPPORT

Questions?
- 📧 Email: support@rsg.gov.cd
- 💬 Slack: #support
- 📞 Hotline: [numéro]

---

**Bon courage avec le projet RSG! 🚀**
