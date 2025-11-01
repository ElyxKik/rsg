# 🏛️ SPÉCIFICATION TECHNIQUE RSG - PARTIE 1
## Architecture & Stack Technologique

**Version:** 1.0 | **Date:** Octobre 2025 | **Classification:** Gouvernemental

---

## 1. VUE D'ENSEMBLE

### Objectifs stratégiques
- **Autorité institutionnelle** : Projeter la souveraineté et la modernité de l'État congolais
- **Transparence** : Publier officiellement documents, rapports, appels d'offres
- **Sécurité** : Conformité OWASP, audit sécurité, chiffrement end-to-end
- **Accessibilité** : WCAG 2.1 AA, multilingue (FR/EN/SW)
- **Performance** : <2s LCP, <100ms FID, <0.1 CLS

---

## 2. ARCHITECTURE GÉNÉRALE

```
┌─────────────────────────────────────────────────────────────────┐
│                    CDN CLOUDFLARE ENTERPRISE                    │
│         (Cache, DDoS Protection, WAF, SSL/TLS, Analytics)       │
└────────────────────────┬────────────────────────────────────────┘
                         │
        ┌────────────────┼────────────────┐
        │                │                │
   ┌────▼────┐    ┌─────▼─────┐    ┌────▼────┐
   │ Frontend │    │  Backend  │    │  Intranet│
   │ Next.js  │    │  Strapi   │    │ Private  │
   │ (React)  │    │  (Node)   │    │ Next.js  │
   └────┬────┘    └─────┬─────┘    └────┬────┘
        │                │                │
        │         ┌──────▼──────┐        │
        │         │ PostgreSQL  │        │
        │         │ (Principal) │        │
        │         └─────────────┘        │
        │                                │
        │         ┌──────────────────┐   │
        └────────▶│ Redis (Cache)    │◀──┘
                  │ Sessions, Tokens │
                  └──────────────────┘

┌─────────────────────────────────────────────────────────────────┐
│                    COUCHE DE SÉCURITÉ                           │
│  WAF | 2FA | SIEM | Audit Logs | Backup Automatisé | Monitoring│
└─────────────────────────────────────────────────────────────────┘
```

---

## 3. STACK TECHNOLOGIQUE

### 3.1 Frontend (Public)

| Composant | Technologie | Version | Justification |
|-----------|-------------|---------|---------------|
| **Framework** | Next.js | 14.x | SSR, SSG, optimisation automatique |
| **Langage** | TypeScript | 5.x | Type-safety, maintenabilité |
| **UI Framework** | React | 18.x | Composants réutilisables |
| **Styling** | Tailwind CSS | 3.x | Utility-first, responsive |
| **Animations** | Framer Motion | 10.x | Animations fluides, performance |
| **Animations avancées** | GSAP | 3.x | Parallax, timeline complexes |
| **Lottie** | lottie-react | 2.x | Animations vectorielles |
| **Cartographie** | Mapbox GL JS | 2.x | Cartographie interactive haute perf |
| **Formulaires** | React Hook Form | 7.x | Validation, performance |
| **Validation** | Zod | 3.x | Type-safe validation |
| **HTTP Client** | TanStack Query | 5.x | Caching, synchronisation |
| **State Management** | Zustand | 4.x | Légère, performante |
| **Internationalisation** | next-intl | 3.x | i18n native Next.js |
| **Analytics** | Matomo JS | 4.x | Privacy-compliant |
| **Icons** | Lucide React | 0.x | Moderne, cohérent |
| **Markdown** | MDX | 2.x | Blog riche |
| **Testing** | Vitest + Playwright | Latest | E2E et unitaires |

### 3.2 Backend (CMS + API)

| Composant | Technologie | Version | Justification |
|-----------|-------------|---------|---------------|
| **CMS** | Strapi | 4.x Enterprise | Headless CMS flexible, permissions granulaires |
| **Runtime** | Node.js | 20.x LTS | Stable, performant |
| **Base de données** | PostgreSQL | 15.x | Robuste, ACID, JSON support |
| **Cache** | Redis | 7.x | Sessions, cache, rate limiting |
| **API REST** | Strapi REST | - | Standard REST |
| **API GraphQL** | Strapi GraphQL | - | Requêtes optimisées |
| **Authentification** | JWT + 2FA TOTP | - | Tokens, sécurité |
| **Upload fichiers** | AWS S3 / Cloudflare R2 | - | Stockage sécurisé |
| **Email** | SendGrid / Mailgun | - | Transactionnel |
| **Logging** | Winston + ELK | - | Audit trail complet |
| **Monitoring** | Prometheus + Grafana | - | Métriques, alertes |

### 3.3 Infrastructure

| Composant | Technologie | Justification |
|-----------|-------------|---------------|
| **Hébergement** | Azure Government / OVH Enterprise | Conformité gouvernementale |
| **CDN** | Cloudflare Enterprise | DDoS, WAF, cache global |
| **DNS** | Cloudflare / Route53 | Haute disponibilité |
| **SSL/TLS** | Let's Encrypt + Cloudflare | HTTPS, HSTS |
| **Backup** | Automated (Daily) | Récupération d'urgence |
| **Monitoring** | Datadog / New Relic | APM, logs centralisés |
| **CI/CD** | GitHub Actions / GitLab CI | Déploiement automatisé |
| **Container** | Docker | Reproductibilité |

---

## 4. STRUCTURE FRONTEND

```
frontend/
├── public/
│   ├── logos/
│   ├── flags/
│   ├── animations/
│   └── media/
├── src/
│   ├── app/
│   │   ├── layout.tsx
│   │   ├── (public)/
│   │   │   ├── accueil/
│   │   │   ├── presentation/
│   │   │   ├── gouvernance/
│   │   │   ├── programmes/
│   │   │   ├── actualites/
│   │   │   ├── documentation/
│   │   │   ├── transparence/
│   │   │   ├── partenaires/
│   │   │   ├── media/
│   │   │   └── contact/
│   │   ├── (admin)/
│   │   │   ├── dashboard/
│   │   │   ├── articles/
│   │   │   ├── utilisateurs/
│   │   │   └── parametres/
│   │   └── api/
│   ├── components/
│   │   ├── layout/
│   │   ├── hero/
│   │   ├── common/
│   │   ├── forms/
│   │   ├── content/
│   │   ├── admin/
│   │   └── animations/
│   ├── hooks/
│   ├── lib/
│   ├── styles/
│   ├── types/
│   ├── i18n/
│   └── middleware.ts
├── next.config.js
├── tailwind.config.js
├── tsconfig.json
└── package.json
```

---

## 5. STRUCTURE BACKEND (STRAPI)

```
backend/
├── src/
│   ├── api/
│   │   ├── article/
│   │   ├── document/
│   │   ├── tender/
│   │   ├── team-member/
│   │   ├── program/
│   │   └── audit-log/
│   ├── config/
│   │   ├── database.js
│   │   ├── server.js
│   │   ├── security.js
│   │   └── api.js
│   ├── middleware/
│   │   ├── audit-logger.js
│   │   ├── rate-limiter.js
│   │   ├── security-headers.js
│   │   └── 2fa-validator.js
│   ├── policies/
│   │   ├── is-authenticated.js
│   │   ├── is-admin.js
│   │   ├── is-editor.js
│   │   └── is-validator.js
│   └── utils/
│       ├── encryption.js
│       ├── validation.js
│       └── logger.js
├── docker-compose.yml
└── package.json
```

---

## 6. MODÈLES DE DONNÉES

### Article
```typescript
{
  id: UUID
  title: String (required, unique)
  slug: String (auto-generated)
  content: RichText (sanitized)
  excerpt: String
  featured_image: Media
  author: Relation(User)
  status: Enum(draft, published, archived)
  published_at: DateTime
  tags: Relation(Tag)
  category: Relation(Category)
  seo_title: String
  seo_description: String
  views_count: Integer
  created_at: DateTime
  updated_at: DateTime
}
```

### Document
```typescript
{
  id: UUID
  title: String
  description: String
  file: Media
  category: Enum(rapport, bulletin, note, ordonnance)
  access_level: Enum(public, restricted, internal)
  published_at: DateTime
  expires_at: DateTime (optional)
  created_at: DateTime
  updated_at: DateTime
}
```

### Tender (Appel d'offres)
```typescript
{
  id: UUID
  title: String
  description: RichText
  reference: String (unique)
  status: Enum(open, closed, awarded, cancelled)
  opening_date: DateTime
  closing_date: DateTime
  budget: Decimal
  documents: Relation(Document)
  results: RichText
  published_at: DateTime
  created_at: DateTime
  updated_at: DateTime
}
```

### AuditLog
```typescript
{
  id: UUID
  user: Relation(User)
  action: String
  resource: String
  resource_id: String
  old_value: JSON
  new_value: JSON
  ip_address: String
  user_agent: String
  timestamp: DateTime
  status: Enum(success, failure)
}
```

---

## 7. PERMISSIONS ET RÔLES

| Rôle | Permissions |
|------|-------------|
| **Admin** | Accès complet, gestion utilisateurs, audit |
| **Rédacteur** | Créer/éditer articles, uploader médias |
| **Validateur** | Approuver articles avant publication |
| **Lecteur** | Accès lecture seule |
| **Public** | Accès lecture contenu public |

---

## 8. FLUX DE PUBLICATION

```
Rédacteur crée article
        ↓
Validateur approuve/rejette
        ↓
Publication automatique
        ↓
Notification email
        ↓
Indexation SEO
```

---

## Prochaines étapes
Voir SPEC_PART2_SECURITE.md pour les détails de sécurité et conformité OWASP.
