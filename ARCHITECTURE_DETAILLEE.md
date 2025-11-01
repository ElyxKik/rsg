# 🏗️ ARCHITECTURE DÉTAILLÉE - RSG
## Documentation technique pour développeurs

**Version:** 1.0 | **Date:** 31 Octobre 2025

---

## 📐 ARCHITECTURE FRONTEND

### Structure des dossiers

```
frontend/
├── public/                      # Assets statiques
│   ├── logos/                   # Logos RSG + RDC
│   ├── animations/              # Fichiers Lottie (.json)
│   ├── images/                  # Photos, illustrations
│   └── documents/               # PDFs publics
│
├── src/
│   ├── app/                     # Next.js App Router
│   │   ├── layout.tsx           # Layout principal
│   │   ├── page.tsx             # Page d'accueil
│   │   ├── public/              # Pages publiques
│   │   │   ├── presentation/
│   │   │   ├── gouvernance/
│   │   │   ├── programmes/
│   │   │   ├── actualites/
│   │   │   ├── documentation/
│   │   │   ├── transparence/
│   │   │   ├── partenaires/
│   │   │   ├── media/
│   │   │   └── contact/
│   │   └── admin/               # Pages admin (protégées)
│   │       ├── dashboard/
│   │       ├── articles/
│   │       ├── utilisateurs/
│   │       ├── parametres/
│   │       └── audit/
│   │
│   ├── components/              # Composants réutilisables
│   │   ├── common/              # ✅ Button, Card, Badge, Section, Modal
│   │   ├── layout/              # ✅ Header, Footer
│   │   ├── hero/                # ✅ HeroSection
│   │   ├── forms/               # ⏳ Input, Select, Textarea
│   │   ├── content/             # ⏳ RichText, ImageGallery
│   │   └── admin/               # ⏳ AdminSidebar, DataTable
│   │
│   ├── hooks/                   # Custom React hooks
│   │   ├── useAuth.ts
│   │   ├── useApi.ts
│   │   └── useScrollAnimation.ts
│   │
│   ├── lib/                     # Utilitaires
│   │   ├── api.ts               # API client
│   │   ├── auth.ts              # Authentification
│   │   └── utils.ts             # Helpers
│   │
│   ├── styles/
│   │   └── globals.css          # ✅ Styles globaux + Tailwind
│   │
│   ├── types/                   # Types TypeScript
│   │   ├── api.ts
│   │   ├── models.ts
│   │   └── components.ts
│   │
│   └── i18n/                    # Internationalisation
│       ├── fr.json
│       ├── en.json
│       └── sw.json
│
├── tailwind.config.js           # ✅ Configuration Tailwind
├── postcss.config.js            # ✅ PostCSS config
├── next.config.js               # Configuration Next.js
├── tsconfig.json                # ✅ TypeScript config
└── package.json                 # ✅ Dépendances
```

---

## 🔧 COMPOSANTS CRÉÉS

### 1. Button Component
**Fichier:** `src/components/common/Button.tsx`

```typescript
Props:
- variant: 'primary' | 'secondary' | 'tertiary' | 'danger'
- size: 'sm' | 'md' | 'lg'
- disabled: boolean
- loading: boolean
- icon: ReactNode
- onClick: function

Animations:
- whileHover: scale(1.05)
- whileTap: scale(0.95)
```

### 2. Card Component
**Fichier:** `src/components/common/Card.tsx`

```typescript
Props:
- variant: 'default' | 'elevated' | 'outlined' | 'interactive'
- children: ReactNode
- onClick: function (optional)

Styles:
- default: bg-white shadow-sm
- elevated: bg-white shadow-lg
- outlined: border border-gray-200
- interactive: hover:shadow-lg + scale(1.02)
```

### 3. Section Component
**Fichier:** `src/components/common/Section.tsx`

```typescript
Props:
- title: string
- subtitle: string
- background: 'white' | 'gray' | 'blue' | 'gradient'
- children: ReactNode

Layout:
- max-width: 1280px
- padding: py-20 px-4
- animations: fade-in on scroll
```

---

## 🎨 DESIGN TOKENS

### Couleurs (Tailwind Config)

```javascript
colors: {
  primary: {
    blue: '#003DA5',
    yellow: '#FFD700',
    red: '#CE1126',
  },
  gray: {
    50: '#F9FAFB',
    100: '#F3F4F6',
    // ... jusqu'à 900
  },
  success: '#10B981',
  warning: '#F59E0B',
  error: '#EF4444',
  info: '#3B82F6',
}
```

### Spacing (8px system)

```javascript
spacing: {
  0: '0',
  1: '0.25rem',  // 4px
  2: '0.5rem',   // 8px
  3: '0.75rem',  // 12px
  4: '1rem',     // 16px
  6: '1.5rem',   // 24px
  8: '2rem',     // 32px
  12: '3rem',    // 48px
  16: '4rem',    // 64px
  20: '5rem',    // 80px
  24: '6rem',    // 96px
}
```

---

## 🔄 ÉTAT ET DATA FLOW

### Gestion d'état (Zustand)

```typescript
// stores/useAuthStore.ts
interface AuthState {
  user: User | null;
  token: string | null;
  isAuthenticated: boolean;
  login: (credentials) => Promise<void>;
  logout: () => void;
}

// stores/useArticlesStore.ts
interface ArticlesState {
  articles: Article[];
  loading: boolean;
  fetchArticles: () => Promise<void>;
  createArticle: (data) => Promise<void>;
}
```

### API Client (TanStack Query)

```typescript
// hooks/useArticles.ts
export const useArticles = () => {
  return useQuery({
    queryKey: ['articles'],
    queryFn: () => api.get('/articles'),
    staleTime: 5 * 60 * 1000, // 5 min
  });
};
```

---

## 🔐 SÉCURITÉ FRONTEND

### Headers de sécurité (next.config.js)

```javascript
module.exports = {
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on'
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=31536000; includeSubDomains'
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin'
          }
        ]
      }
    ];
  }
};
```

### CSP (Content Security Policy)

```javascript
const cspHeader = `
  default-src 'self';
  script-src 'self' 'unsafe-eval' 'unsafe-inline';
  style-src 'self' 'unsafe-inline';
  img-src 'self' blob: data: https:;
  font-src 'self';
  object-src 'none';
  base-uri 'self';
  form-action 'self';
  frame-ancestors 'none';
  upgrade-insecure-requests;
`;
```

---

## 📡 ARCHITECTURE BACKEND (Strapi)

### Modèles de données

#### Article
```typescript
{
  id: UUID
  title: string (required, unique)
  slug: string (auto-generated)
  content: RichText (sanitized)
  excerpt: string
  featured_image: Media
  author: Relation(User)
  status: Enum('draft', 'published', 'archived')
  published_at: DateTime
  category: Relation(Category)
  tags: Relation(Tag, many)
  views_count: integer
  created_at: DateTime
  updated_at: DateTime
}
```

#### Document
```typescript
{
  id: UUID
  title: string
  description: string
  file: Media (PDF, DOCX)
  category: Enum('rapport', 'bulletin', 'note', 'ordonnance')
  access_level: Enum('public', 'restricted', 'internal')
  published_at: DateTime
  expires_at: DateTime (optional)
  download_count: integer
}
```

#### Tender (Appel d'offres)
```typescript
{
  id: UUID
  title: string
  reference: string (unique)
  description: RichText
  status: Enum('open', 'closed', 'awarded', 'cancelled')
  opening_date: DateTime
  closing_date: DateTime
  budget: Decimal
  documents: Relation(Document, many)
  results: RichText
}
```

#### User
```typescript
{
  id: UUID
  email: string (unique)
  password: string (hashed)
  firstname: string
  lastname: string
  role: Enum('admin', 'editor', 'validator', 'reader')
  two_factor_enabled: boolean
  two_factor_secret: string (encrypted)
  last_login: DateTime
  is_active: boolean
}
```

### Permissions (RBAC)

| Rôle | Articles | Documents | Users | Settings |
|------|----------|-----------|-------|----------|
| **Admin** | CRUD | CRUD | CRUD | CRUD |
| **Editor** | CRUD | Read | - | - |
| **Validator** | Approve | Read | - | - |
| **Reader** | Read | Read | - | - |

---

## 🚀 PERFORMANCE

### Optimisations Next.js

```javascript
// next.config.js
module.exports = {
  images: {
    domains: ['cdn.rsg.gov.cd'],
    formats: ['image/avif', 'image/webp'],
  },
  experimental: {
    optimizeCss: true,
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
};
```

### Stratégies de rendering

| Page | Strategy | Raison |
|------|----------|--------|
| **Accueil** | SSG + ISR | Contenu semi-statique, mise à jour horaire |
| **Actualités** | SSG + ISR | Liste d'articles, cache 5min |
| **Article détail** | SSG + ISR | Contenu statique, régénération à la demande |
| **Admin** | CSR | Contenu dynamique, authentifié |
| **Intranet** | CSR | Données sensibles, temps réel |

### Code splitting

```typescript
// Lazy loading des composants lourds
const MapComponent = dynamic(() => import('@/components/Map'), {
  ssr: false,
  loading: () => <Skeleton />,
});

const AdminDashboard = dynamic(() => import('@/components/admin/Dashboard'), {
  ssr: false,
});
```

---

## 📊 MONITORING

### Métriques à surveiller

```typescript
// Performance
- LCP (Largest Contentful Paint): <2.5s
- FID (First Input Delay): <100ms
- CLS (Cumulative Layout Shift): <0.1
- TTFB (Time to First Byte): <800ms

// Business
- Page views
- Unique visitors
- Bounce rate
- Average session duration
- Download count (documents)

// Technique
- API response time
- Error rate
- Server CPU/Memory
- Database query time
- Cache hit rate
```

### Alertes critiques

```yaml
Uptime < 99.9%: Alert Ops Team
Error rate > 1%: Alert Dev Team
API latency > 2s: Alert Infra Team
Failed login attempts > 10/min: Alert Security Team
```

---

## 🔄 CI/CD WORKFLOW

### GitHub Actions Pipeline

```yaml
name: CI/CD Pipeline

on:
  push:
    branches: [main, staging]
  pull_request:
    branches: [main]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - Checkout code
      - Install dependencies
      - Run linter (ESLint)
      - Run type check (TypeScript)
      - Run unit tests (Vitest)
      - Run E2E tests (Playwright)
      - Security scan (Snyk)
      
  build:
    needs: test
    steps:
      - Build Next.js
      - Build Docker image
      - Push to registry
      
  deploy:
    needs: build
    steps:
      - Deploy to staging (auto)
      - Run smoke tests
      - Deploy to prod (manual approval)
      - Notify team (Slack/Email)
```

---

## 📖 BONNES PRATIQUES

### Code quality

```typescript
// ✅ Nommage explicite
const handleArticleSubmit = async (data: ArticleFormData) => {};

// ✅ Types stricts
interface ButtonProps {
  variant: 'primary' | 'secondary';
  size: 'sm' | 'md' | 'lg';
}

// ✅ Composants purs
const Card: React.FC<CardProps> = ({ title, children }) => {
  return <div>...</div>;
};

// ✅ Gestion d'erreurs
try {
  await api.post('/articles', data);
} catch (error) {
  handleError(error);
  showNotification('error', 'Échec de la publication');
}
```

### Accessibilité

```typescript
// ✅ ARIA labels
<button aria-label="Fermer le menu">
  <X size={24} />
</button>

// ✅ Sémantique HTML
<nav aria-label="Navigation principale">
  <ul role="list">
    <li><a href="/accueil">Accueil</a></li>
  </ul>
</nav>

// ✅ Keyboard navigation
<input onKeyDown={(e) => {
  if (e.key === 'Enter') handleSubmit();
}} />
```

---

## 🎓 RESSOURCES ET RÉFÉRENCES

### Documentation officielle
- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Framer Motion](https://www.framer.com/motion/)
- [Strapi Documentation](https://docs.strapi.io)

### Outils de développement
- **VSCode Extensions**: ESLint, Prettier, Tailwind IntelliSense
- **Chrome DevTools**: Lighthouse, Performance profiler
- **Testing**: Vitest, Playwright, Testing Library

---

**Document technique - Usage développeurs uniquement**
**© 2025 RSG - République Démocratique du Congo**
