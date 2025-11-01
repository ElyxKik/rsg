# 📁 STRUCTURE DU PROJET RSG

## Architecture générale

```
reserve-stategique-generale/
├── frontend/                          # Site public Next.js
│   ├── public/
│   │   ├── logos/
│   │   ├── flags/
│   │   ├── animations/
│   │   └── media/
│   ├── src/
│   │   ├── app/
│   │   │   ├── layout.tsx
│   │   │   ├── page.tsx
│   │   │   ├── (public)/
│   │   │   │   ├── accueil/
│   │   │   │   ├── presentation/
│   │   │   │   ├── gouvernance/
│   │   │   │   ├── programmes/
│   │   │   │   ├── actualites/
│   │   │   │   ├── documentation/
│   │   │   │   ├── transparence/
│   │   │   │   ├── partenaires/
│   │   │   │   ├── media/
│   │   │   │   └── contact/
│   │   │   ├── (admin)/
│   │   │   │   ├── dashboard/
│   │   │   │   ├── articles/
│   │   │   │   ├── utilisateurs/
│   │   │   │   ├── parametres/
│   │   │   │   └── audit/
│   │   │   └── api/
│   │   ├── components/
│   │   │   ├── layout/
│   │   │   │   ├── Header.tsx
│   │   │   │   ├── Footer.tsx
│   │   │   │   ├── Navigation.tsx
│   │   │   │   └── Sidebar.tsx
│   │   │   ├── hero/
│   │   │   │   ├── HeroSection.tsx
│   │   │   │   ├── AnimatedBackground.tsx
│   │   │   │   └── ParallaxScroll.tsx
│   │   │   ├── common/
│   │   │   │   ├── Button.tsx
│   │   │   │   ├── Card.tsx
│   │   │   │   ├── Modal.tsx
│   │   │   │   ├── Breadcrumb.tsx
│   │   │   │   └── LanguageSwitcher.tsx
│   │   │   ├── forms/
│   │   │   │   ├── ContactForm.tsx
│   │   │   │   ├── SearchForm.tsx
│   │   │   │   └── LoginForm.tsx
│   │   │   ├── content/
│   │   │   │   ├── ArticleCard.tsx
│   │   │   │   ├── BlogGrid.tsx
│   │   │   │   ├── DocumentList.tsx
│   │   │   │   └── TimelineComponent.tsx
│   │   │   ├── admin/
│   │   │   │   ├── WYSIWYGEditor.tsx
│   │   │   │   ├── MediaUploader.tsx
│   │   │   │   ├── PermissionsManager.tsx
│   │   │   │   └── AuditLog.tsx
│   │   │   └── animations/
│   │   │       ├── LottieAnimation.tsx
│   │   │       ├── ScrollReveal.tsx
│   │   │       ├── FadeIn.tsx
│   │   │       └── Parallax.tsx
│   │   ├── hooks/
│   │   │   ├── useAuth.ts
│   │   │   ├── useApi.ts
│   │   │   ├── useInternationalization.ts
│   │   │   ├── useScrollAnimation.ts
│   │   │   └── useLocalStorage.ts
│   │   ├── lib/
│   │   │   ├── api.ts
│   │   │   ├── auth.ts
│   │   │   ├── security.ts
│   │   │   ├── validation.ts
│   │   │   └── utils.ts
│   │   ├── styles/
│   │   │   ├── globals.css
│   │   │   ├── animations.css
│   │   │   └── variables.css
│   │   ├── types/
│   │   │   ├── index.ts
│   │   │   ├── api.ts
│   │   │   ├── auth.ts
│   │   │   └── content.ts
│   │   ├── i18n/
│   │   │   ├── en.json
│   │   │   ├── fr.json
│   │   │   └── sw.json
│   │   ├── middleware.ts
│   │   └── config.ts
│   ├── .env.example
│   ├── .env.local (gitignored)
│   ├── next.config.js
│   ├── tailwind.config.js
│   ├── tsconfig.json
│   ├── package.json
│   ├── package-lock.json
│   └── README.md
│
├── backend/                           # CMS Strapi
│   ├── src/
│   │   ├── api/
│   │   │   ├── article/
│   │   │   │   ├── controllers/
│   │   │   │   ├── services/
│   │   │   │   ├── routes/
│   │   │   │   └── content-types/
│   │   │   ├── document/
│   │   │   ├── tender/
│   │   │   ├── team-member/
│   │   │   ├── program/
│   │   │   ├── category/
│   │   │   ├── tag/
│   │   │   └── audit-log/
│   │   ├── config/
│   │   │   ├── database.js
│   │   │   ├── server.js
│   │   │   ├── admin.js
│   │   │   ├── api.js
│   │   │   └── security.js
│   │   ├── extensions/
│   │   │   ├── users-permissions/
│   │   │   ├── upload/
│   │   │   └── email/
│   │   ├── middleware/
│   │   │   ├── audit-logger.js
│   │   │   ├── rate-limiter.js
│   │   │   ├── security-headers.js
│   │   │   └── 2fa-validator.js
│   │   ├── policies/
│   │   │   ├── is-authenticated.js
│   │   │   ├── is-admin.js
│   │   │   ├── is-editor.js
│   │   │   └── is-validator.js
│   │   ├── utils/
│   │   │   ├── encryption.js
│   │   │   ├── validation.js
│   │   │   └── logger.js
│   │   └── index.js
│   ├── .env.example
│   ├── .env.local (gitignored)
│   ├── docker-compose.yml
│   ├── Dockerfile
│   ├── package.json
│   ├── package-lock.json
│   └── README.md
│
├── intranet/                          # Intranet privé Next.js
│   ├── src/
│   │   ├── app/
│   │   │   ├── layout.tsx
│   │   │   ├── page.tsx
│   │   │   ├── documents/
│   │   │   ├── announcements/
│   │   │   ├── calendar/
│   │   │   ├── directory/
│   │   │   └── forms/
│   │   ├── components/
│   │   ├── hooks/
│   │   ├── lib/
│   │   ├── types/
│   │   └── middleware.ts
│   ├── .env.example
│   ├── next.config.js
│   ├── tailwind.config.js
│   ├── tsconfig.json
│   ├── package.json
│   └── README.md
│
├── infrastructure/                    # Configuration infrastructure
│   ├── docker/
│   │   ├── frontend.Dockerfile
│   │   ├── backend.Dockerfile
│   │   └── docker-compose.yml
│   ├── kubernetes/
│   │   ├── frontend-deployment.yaml
│   │   ├── backend-deployment.yaml
│   │   ├── postgresql-statefulset.yaml
│   │   ├── redis-deployment.yaml
│   │   └── ingress.yaml
│   ├── terraform/
│   │   ├── main.tf
│   │   ├── variables.tf
│   │   ├── outputs.tf
│   │   └── azure.tf
│   ├── ansible/
│   │   ├── playbooks/
│   │   ├── roles/
│   │   └── inventory.yml
│   ├── monitoring/
│   │   ├── prometheus.yml
│   │   ├── grafana-dashboards/
│   │   └── alerting-rules.yml
│   └── nginx/
│       ├── nginx.conf
│       └── ssl-config.conf
│
├── scripts/                           # Scripts utilitaires
│   ├── setup.sh
│   ├── deploy.sh
│   ├── backup.sh
│   ├── restore.sh
│   ├── migrate.sh
│   └── security-audit.sh
│
├── docs/                              # Documentation
│   ├── ARCHITECTURE.md
│   ├── DEPLOYMENT.md
│   ├── SECURITY.md
│   ├── API.md
│   ├── CMS_GUIDE.md
│   └── USER_MANUAL.md
│
├── .github/
│   └── workflows/
│       ├── ci-frontend.yml
│       ├── ci-backend.yml
│       ├── deploy-staging.yml
│       └── deploy-production.yml
│
├── .gitignore
├── .env.example
├── README.md
├── CONTRIBUTING.md
├── LICENSE
└── CHANGELOG.md
```

## Fichiers de configuration clés

### Frontend
- `next.config.js` : Configuration Next.js (images, redirects, headers)
- `tailwind.config.js` : Configuration Tailwind CSS (couleurs, fonts, plugins)
- `tsconfig.json` : Configuration TypeScript
- `.env.example` : Variables d'environnement (template)

### Backend
- `docker-compose.yml` : Services (PostgreSQL, Redis, Strapi)
- `config/database.js` : Configuration BD
- `config/server.js` : Configuration serveur
- `config/security.js` : Configuration sécurité

### Infrastructure
- `docker-compose.yml` : Orchestration locale
- `kubernetes/` : Déploiement production
- `terraform/` : Infrastructure as Code
- `monitoring/` : Prometheus, Grafana

## Conventions de nommage

### Fichiers
- Components: `PascalCase.tsx` (ex: `HeroSection.tsx`)
- Utilities: `camelCase.ts` (ex: `formatDate.ts`)
- Types: `camelCase.ts` (ex: `article.ts`)
- Styles: `kebab-case.css` (ex: `hero-section.css`)

### Dossiers
- `kebab-case` (ex: `hero-section/`)

### Variables
- Constants: `UPPER_SNAKE_CASE`
- Variables: `camelCase`
- Types: `PascalCase`

## Dépendances principales

### Frontend
```json
{
  "next": "^14.0.0",
  "react": "^18.0.0",
  "typescript": "^5.0.0",
  "tailwindcss": "^3.0.0",
  "framer-motion": "^10.0.0",
  "gsap": "^3.0.0",
  "lottie-react": "^2.0.0",
  "react-hook-form": "^7.0.0",
  "zod": "^3.0.0",
  "@tanstack/react-query": "^5.0.0",
  "zustand": "^4.0.0",
  "next-intl": "^3.0.0"
}
```

### Backend
```json
{
  "strapi": "^4.0.0",
  "postgres": "^15.0.0",
  "redis": "^7.0.0",
  "jsonwebtoken": "^9.0.0",
  "bcryptjs": "^2.4.0",
  "speakeasy": "^2.0.0",
  "dotenv": "^16.0.0",
  "winston": "^3.0.0"
}
```

## Environnements

### Development
- Frontend: `http://localhost:3000`
- Backend: `http://localhost:1337`
- Intranet: `http://localhost:3001`
- PostgreSQL: `localhost:5432`
- Redis: `localhost:6379`

### Staging
- Frontend: `https://staging.rsg.gov.cd`
- Backend: `https://api-staging.rsg.gov.cd`
- Intranet: `https://intranet-staging.rsg.gov.cd`

### Production
- Frontend: `https://rsg.gov.cd`
- Backend: `https://api.rsg.gov.cd`
- Intranet: `https://intranet.rsg.gov.cd`
