# 🔒 SPÉCIFICATION TECHNIQUE RSG - PARTIE 2
## Sécurité & Conformité OWASP

**Version:** 1.0 | **Date:** Octobre 2025 | **Classification:** Gouvernemental - Confidentiel

---

## 1. CONFORMITÉ OWASP TOP 10

### 1.1 Injection SQL/NoSQL
**Mitigation:**
- Parameterized queries (Strapi ORM)
- Input validation (Zod)
- Prepared statements
- No string concatenation
- SQL escaping automatique

```typescript
// ✅ BON
const user = await db.query('SELECT * FROM users WHERE id = $1', [userId]);

// ❌ MAUVAIS
const user = await db.query(`SELECT * FROM users WHERE id = ${userId}`);
```

### 1.2 Broken Authentication
**Mitigation:**
- JWT tokens (HS256 / RS256)
- 2FA TOTP (Time-based One-Time Password)
- Password hashing: bcrypt (salt rounds: 12)
- Session timeout: 15 minutes d'inactivité
- Rate limiting: 5 tentatives max
- Refresh tokens (7 jours)
- Secure cookies (HttpOnly, Secure, SameSite)

```typescript
// 2FA Implementation
- Génération QR code (speakeasy)
- Validation TOTP (±30 secondes)
- Backup codes (10 codes)
- Recovery codes stockés hashés
```

### 1.3 Sensitive Data Exposure
**Mitigation:**
- HTTPS/TLS 1.3 obligatoire
- HSTS (Strict-Transport-Security)
- Encryption at rest: AES-256-GCM
- Encryption in transit: TLS 1.3
- PII masking dans les logs
- No sensitive data in URLs
- Secure headers (CSP, X-Frame-Options, etc.)

```typescript
// Chiffrement données sensibles
- Passwords: bcrypt
- API Keys: AES-256-GCM
- PII: AES-256-CBC
- Backups: GPG encryption
```

### 1.4 XML External Entities (XXE)
**Mitigation:**
- Disable XXE parsing
- Use safe XML parsers
- Whitelist allowed entities
- Validate XML schema

### 1.5 Broken Access Control
**Mitigation:**
- RBAC (Role-Based Access Control)
- Policy-based access (Casbin)
- Audit logs pour chaque accès
- Vérification permissions à chaque requête
- No trust client-side permissions

```typescript
// Middleware de vérification
async function checkPermission(req, res, next) {
  const user = req.user;
  const resource = req.params.resourceId;
  
  const hasAccess = await checkUserAccess(user.id, resource);
  if (!hasAccess) {
    return res.status(403).json({ error: 'Forbidden' });
  }
  next();
}
```

### 1.6 Security Misconfiguration
**Mitigation:**
- Minimal dependencies
- Regular security updates
- Security headers complets
- Disable unnecessary features
- Secure defaults
- Regular vulnerability scans

### 1.7 Cross-Site Scripting (XSS)
**Mitigation:**
- Content Security Policy (CSP)
- DOMPurify sanitization
- Input validation
- Output encoding
- No innerHTML
- React escaping automatique

```typescript
// CSP Header
Content-Security-Policy: 
  default-src 'self'; 
  script-src 'self' 'unsafe-inline' cdn.jsdelivr.net; 
  style-src 'self' 'unsafe-inline'; 
  img-src 'self' data: https:; 
  font-src 'self' data:;
```

### 1.8 Insecure Deserialization
**Mitigation:**
- Avoid unsafe deserialization
- Validate JSON schema
- Use type-safe parsers
- Whitelist allowed types

### 1.9 Using Components with Known Vulnerabilities
**Mitigation:**
- Dependabot (GitHub)
- SNYK scanning
- Regular npm audit
- Automated updates
- Security advisories monitoring

### 1.10 Insufficient Logging & Monitoring
**Mitigation:**
- ELK Stack (Elasticsearch, Logstash, Kibana)
- SIEM (Security Information & Event Management)
- Real-time alerts
- Centralized logging
- Audit trail complet

---

## 2. HEADERS DE SÉCURITÉ

```typescript
// next.config.js
const securityHeaders = [
  {
    key: 'Strict-Transport-Security',
    value: 'max-age=63072000; includeSubDomains; preload'
  },
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff'
  },
  {
    key: 'X-Frame-Options',
    value: 'DENY'
  },
  {
    key: 'X-XSS-Protection',
    value: '1; mode=block'
  },
  {
    key: 'Referrer-Policy',
    value: 'strict-origin-when-cross-origin'
  },
  {
    key: 'Content-Security-Policy',
    value: "default-src 'self'; script-src 'self' 'unsafe-inline' cdn.jsdelivr.net; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; font-src 'self' data:;"
  },
  {
    key: 'Permissions-Policy',
    value: 'geolocation=(), microphone=(), camera=()'
  }
];
```

---

## 3. AUTHENTIFICATION 2FA

### 3.1 Flux d'authentification

```
1. Utilisateur entre email + password
2. Validation credentials
3. Génération QR code TOTP (première fois)
4. Utilisateur scanne avec authenticator app
5. Utilisateur entre code TOTP
6. Validation code (±30 secondes)
7. Génération JWT token
8. Stockage refresh token en BD
9. Redirection dashboard
```

### 3.2 Implémentation TOTP

```typescript
// Backend: speakeasy
import speakeasy from 'speakeasy';

// Génération secret
const secret = speakeasy.generateSecret({
  name: 'RSG - ' + user.email,
  issuer: 'Réserve Stratégique Générale'
});

// QR Code
const qrCode = await qrcode.toDataURL(secret.otpauth_url);

// Validation
const verified = speakeasy.totp.verify({
  secret: user.totp_secret,
  encoding: 'base32',
  token: userToken,
  window: 2 // ±30 secondes
});
```

### 3.3 Backup Codes

```typescript
// Génération 10 codes de secours
const backupCodes = [];
for (let i = 0; i < 10; i++) {
  const code = crypto.randomBytes(4).toString('hex').toUpperCase();
  backupCodes.push(code);
}

// Stockage hashé
const hashedCodes = backupCodes.map(code => bcrypt.hashSync(code, 12));
```

---

## 4. CHIFFREMENT

### 4.1 Stratégie de chiffrement

| Données | Algorithme | Clé | Stockage |
|---------|-----------|-----|---------|
| **Passwords** | bcrypt | Salt (12 rounds) | BD |
| **API Keys** | AES-256-GCM | Env variable | BD |
| **PII** | AES-256-CBC | Key management | BD |
| **Backups** | GPG | Public/Private key | Cloud |
| **Sessions** | JWT | Secret key | Redis |

### 4.2 Implémentation

```typescript
// Chiffrement AES-256-GCM
import crypto from 'crypto';

function encryptData(data, key) {
  const iv = crypto.randomBytes(16);
  const cipher = crypto.createCipheriv('aes-256-gcm', Buffer.from(key), iv);
  
  let encrypted = cipher.update(data, 'utf8', 'hex');
  encrypted += cipher.final('hex');
  
  const authTag = cipher.getAuthTag();
  return {
    iv: iv.toString('hex'),
    encrypted,
    authTag: authTag.toString('hex')
  };
}

function decryptData(encrypted, key) {
  const decipher = crypto.createDecipheriv(
    'aes-256-gcm',
    Buffer.from(key),
    Buffer.from(encrypted.iv, 'hex')
  );
  
  decipher.setAuthTag(Buffer.from(encrypted.authTag, 'hex'));
  
  let decrypted = decipher.update(encrypted.encrypted, 'hex', 'utf8');
  decrypted += decipher.final('utf8');
  
  return decrypted;
}
```

---

## 5. AUDIT ET LOGGING

### 5.1 Événements auditables

```typescript
// Tous les événements sensibles
- Connexions/déconnexions
- Modifications de contenu
- Accès aux documents restreints
- Changements de permissions
- Tentatives d'accès non autorisées
- Uploads/téléchargements
- Exports de données
- Changements de configuration
- Suppressions de contenu
```

### 5.2 Format audit log

```typescript
{
  id: UUID,
  timestamp: ISO8601,
  user_id: UUID,
  user_email: String,
  action: String,
  resource_type: String,
  resource_id: String,
  old_value: JSON,
  new_value: JSON,
  status: 'success' | 'failure',
  error_message: String (optional),
  ip_address: String,
  user_agent: String,
  session_id: String,
  details: JSON
}
```

### 5.3 Retention et archivage

```
- Logs actifs: 90 jours (BD)
- Logs archivés: 7 ans (Cloud storage)
- Chiffrement: GPG
- Immuabilité: Write-once storage
- Accès: Audit trail des accès aux logs
```

---

## 6. SAUVEGARDES

### 6.1 Stratégie de backup

```
Fréquence:
- Quotidienne (incrémentale)
- Hebdomadaire (complète)
- Mensuelle (archivée)

Stockage:
- Primaire: Serveur local
- Secondaire: Cloud (3 régions)
- Tertiaire: Archive hors-ligne

Chiffrement:
- AES-256
- Clés stockées séparément

RTO/RPO:
- RTO (Recovery Time Objective): 4 heures
- RPO (Recovery Point Objective): 1 heure
```

### 6.2 Test de restauration

```
- Mensuel: Test complet de restauration
- Trimestriel: Test en environnement de staging
- Annuel: Audit externe
```

---

## 7. GESTION DES SECRETS

### 7.1 Variables d'environnement

```bash
# .env.local (JAMAIS en git)
DATABASE_URL=postgresql://user:pass@host:5432/rsg
REDIS_URL=redis://host:6379
JWT_SECRET=<random-256-bit-key>
JWT_REFRESH_SECRET=<random-256-bit-key>
ENCRYPTION_KEY=<random-256-bit-key>
STRAPI_ADMIN_JWT_SECRET=<random-256-bit-key>
NEXTAUTH_SECRET=<random-256-bit-key>
NEXTAUTH_URL=https://rsg.gov.cd
S3_ACCESS_KEY_ID=<aws-key>
S3_SECRET_ACCESS_KEY=<aws-secret>
SENDGRID_API_KEY=<sendgrid-key>
MATOMO_SITE_ID=<matomo-id>
```

### 7.2 Rotation des secrets

```
- Clés JWT: Annuellement
- Clés de chiffrement: Tous les 2 ans
- Passwords BD: Tous les 3 mois
- API Keys: Tous les 6 mois
```

---

## 8. CONFORMITÉ GOUVERNEMENTALE

### 8.1 Standards applicables

- **OWASP Top 10** : Conformité complète
- **NIST Cybersecurity Framework** : Implémentation
- **ISO 27001** : Certification recommandée
- **GDPR** : Respect des données personnelles
- **WCAG 2.1 AA** : Accessibilité

### 8.2 Audit de sécurité

```
Avant mise en ligne:
- Penetration testing (externe)
- Code review sécurité
- SAST (Static Application Security Testing)
- DAST (Dynamic Application Security Testing)
- Dependency scanning
- Infrastructure audit
```

---

## 9. INCIDENT RESPONSE

### 9.1 Plan de réponse aux incidents

```
1. Détection (alertes automatiques)
2. Confinement (isolation du système)
3. Investigation (analyse des logs)
4. Remédiation (patch/fix)
5. Restauration (backup si nécessaire)
6. Communication (notification stakeholders)
7. Post-mortem (analyse root cause)
```

### 9.2 Contacts d'urgence

```
- CISO: [contact]
- Responsable Infrastructure: [contact]
- Responsable Sécurité: [contact]
- Hotline 24/7: [numéro]
```

---

## Prochaines étapes
Voir SPEC_PART3_DESIGN.md pour le design system et animations.
