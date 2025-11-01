# 🚀 QUICK START - GUIDE DE DÉMARRAGE

## Prérequis

```bash
Node.js 20.x LTS
npm 10.x
Docker & Docker Compose
PostgreSQL 15.x
Redis 7.x
Git
```

---

## 1. SETUP LOCAL (Development)

### 1.1 Cloner le projet

```bash
git clone https://github.com/rsg-drc/site-institutionnel.git
cd site-institutionnel
```

### 1.2 Initialiser les repositories

```bash
# Frontend
cd frontend
npm install
cp .env.example .env.local

# Backend
cd ../backend
npm install
cp .env.example .env.local

# Intranet
cd ../intranet
npm install
cp .env.example .env.local
```

### 1.3 Configurer les services

```bash
# Démarrer PostgreSQL, Redis, Strapi
cd infrastructure
docker-compose up -d

# Vérifier les services
docker-compose ps
```

### 1.4 Initialiser les bases de données

```bash
# Backend
cd backend
npm run migrate
npm run seed

# Vérifier
npm run db:check
```

### 1.5 Démarrer les applications

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

## 2. STRUCTURE DES FICHIERS .env

### Frontend (.env.local)

```bash
# API
NEXT_PUBLIC_API_URL=http://localhost:1337
NEXT_PUBLIC_INTRANET_URL=http://localhost:3001

# Authentification
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your-secret-key-here

# Analytics
NEXT_PUBLIC_MATOMO_URL=http://localhost:8080
NEXT_PUBLIC_MATOMO_SITE_ID=1

# Mapbox
NEXT_PUBLIC_MAPBOX_TOKEN=your-mapbox-token

# Cloudflare
NEXT_PUBLIC_CLOUDFLARE_TURNSTILE_SITE_KEY=your-turnstile-key
```

### Backend (.env.local)

```bash
# Database
DATABASE_URL=postgresql://postgres:password@localhost:5432/rsg_db
DATABASE_SSL=false

# Redis
REDIS_URL=redis://localhost:6379

# JWT
JWT_SECRET=your-jwt-secret-key-here
JWT_REFRESH_SECRET=your-jwt-refresh-secret-key-here

# Encryption
ENCRYPTION_KEY=your-encryption-key-here

# Strapi
STRAPI_ADMIN_JWT_SECRET=your-strapi-admin-jwt-secret

# Email
SMTP_HOST=smtp.sendgrid.net
SMTP_PORT=587
SMTP_USER=apikey
SMTP_PASS=your-sendgrid-api-key

# S3/R2
S3_ACCESS_KEY_ID=your-access-key
S3_SECRET_ACCESS_KEY=your-secret-key
S3_BUCKET=rsg-media
S3_REGION=us-east-1

# 2FA
TOTP_WINDOW=2
```

### Intranet (.env.local)

```bash
# API
NEXT_PUBLIC_API_URL=http://localhost:1337
NEXT_PUBLIC_INTRANET_API_URL=http://localhost:1337/api/intranet

# Authentification
NEXTAUTH_URL=http://localhost:3001
NEXTAUTH_SECRET=your-secret-key-here
```

---

## 3. COMMANDES PRINCIPALES

### Frontend

```bash
# Développement
npm run dev

# Build production
npm run build

# Preview build
npm run start

# Linting
npm run lint
npm run lint:fix

# Formatting
npm run format
npm run format:check

# Tests
npm run test
npm run test:watch
npm run test:e2e

# Type checking
npm run type-check

# Security audit
npm audit
npm run security-check
```

### Backend

```bash
# Développement
npm run develop

# Build production
npm run build

# Start production
npm start

# Migrations
npm run migrate
npm run migrate:rollback

# Seed données
npm run seed

# Linting
npm run lint

# Tests
npm run test
npm run test:watch

# Database
npm run db:check
npm run db:reset
```

### Intranet

```bash
# Développement
npm run dev

# Build production
npm run build

# Preview build
npm run start

# Tests
npm run test
npm run test:e2e
```

---

## 4. ACCÈS AUX INTERFACES

### Frontend (Public)
```
URL: http://localhost:3000
Accès: Libre
```

### Backend (Strapi Admin)
```
URL: http://localhost:1337/admin
Email: admin@rsg.gov.cd
Password: (défini lors du setup)
```

### Intranet (Privé)
```
URL: http://localhost:3001
Email: user@rsg.gov.cd
Password: (défini lors du setup)
2FA: Requis
```

### API Documentation
```
REST: http://localhost:1337/api/documentation
GraphQL: http://localhost:1337/graphql
```

---

## 5. DONNÉES DE TEST

### Utilisateurs par défaut

```
Admin:
  Email: admin@rsg.gov.cd
  Password: Admin@123456
  2FA: Activé

Rédacteur:
  Email: redacteur@rsg.gov.cd
  Password: Redacteur@123456

Validateur:
  Email: validateur@rsg.gov.cd
  Password: Validateur@123456

Lecteur:
  Email: lecteur@rsg.gov.cd
  Password: Lecteur@123456
```

### Données de seed

```bash
# Articles
- 5 articles publiés
- 3 articles en draft
- Tags et catégories

# Documents
- Rapports PDF
- Bulletins
- Notes

# Appels d'offres
- 2 appels ouverts
- 1 appel fermé

# Équipe
- 10 membres avec photos et bios
```

---

## 6. DOCKER COMPOSE

### Services disponibles

```yaml
services:
  postgres:
    image: postgres:15
    ports: 5432
    database: rsg_db

  redis:
    image: redis:7
    ports: 6379

  strapi:
    build: ./backend
    ports: 1337
    depends_on: [postgres, redis]

  frontend:
    build: ./frontend
    ports: 3000
    depends_on: [strapi]

  intranet:
    build: ./intranet
    ports: 3001
    depends_on: [strapi]
```

### Commandes Docker

```bash
# Démarrer tous les services
docker-compose up -d

# Arrêter tous les services
docker-compose down

# Voir les logs
docker-compose logs -f [service]

# Exécuter une commande
docker-compose exec [service] [command]

# Rebuild images
docker-compose build --no-cache
```

---

## 7. TROUBLESHOOTING

### Port déjà utilisé

```bash
# Trouver le processus
lsof -i :3000

# Tuer le processus
kill -9 [PID]

# Ou changer le port
PORT=3002 npm run dev
```

### BD ne démarre pas

```bash
# Vérifier les logs
docker-compose logs postgres

# Réinitialiser la BD
docker-compose down -v
docker-compose up -d postgres
```

### Erreur d'authentification

```bash
# Vérifier les variables d'env
cat .env.local

# Régénérer les secrets
npm run generate:secrets

# Redémarrer les services
docker-compose restart
```

### Problèmes de cache

```bash
# Vider le cache Redis
redis-cli FLUSHDB

# Vider le cache Next.js
rm -rf .next

# Vider node_modules
rm -rf node_modules
npm install
```

---

## 8. WORKFLOW DE DÉVELOPPEMENT

### Créer une nouvelle feature

```bash
# 1. Créer une branche
git checkout -b feature/ma-feature

# 2. Développer
npm run dev

# 3. Tester
npm run test
npm run test:e2e

# 4. Linter
npm run lint:fix
npm run format

# 5. Commit
git add .
git commit -m "feat: description de la feature"

# 6. Push
git push origin feature/ma-feature

# 7. Créer Pull Request
# Attendre l'approbation et le merge
```

### Commit messages

```
feat: nouvelle feature
fix: correction de bug
docs: documentation
style: formatage
refactor: refactorisation
test: ajout de tests
chore: maintenance
```

---

## 9. RESSOURCES UTILES

### Documentation
- [Next.js](https://nextjs.org/docs)
- [Strapi](https://docs.strapi.io)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Framer Motion](https://www.framer.com/motion)
- [TypeScript](https://www.typescriptlang.org/docs)

### Outils
- [Postman](https://www.postman.com) - API testing
- [pgAdmin](http://localhost:5050) - Database management
- [Redis Commander](http://localhost:8081) - Redis management

### Communautés
- Discord: [RSG Dev Community]
- Slack: [RSG Team]
- GitHub Discussions: [RSG Repo]

---

## 10. SUPPORT

### Questions?
- 📧 Email: dev-support@rsg.gov.cd
- 💬 Slack: #dev-support
- 📞 Hotline: [numéro]

### Signaler un bug
1. Vérifier si le bug existe déjà
2. Créer une issue GitHub
3. Inclure: description, steps to reproduce, expected vs actual
4. Attacher des screenshots/logs

---

**Bienvenue dans le projet RSG! 🎉**

Pour toute question, consultez la documentation complète ou contactez l'équipe de support.
