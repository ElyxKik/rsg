# 🔒 CHECKLIST DE SÉCURITÉ PRÉ-LANCEMENT

**Classification:** Gouvernemental - Confidentiel  
**Dernière mise à jour:** Octobre 2025

---

## 1. AUTHENTIFICATION & AUTORISATION

### 1.1 Authentification

- [ ] JWT tokens implémentés (HS256 ou RS256)
- [ ] Refresh tokens configurés (7 jours)
- [ ] Session timeout configuré (15 min inactivité)
- [ ] Password hashing: bcrypt (12 rounds)
- [ ] Rate limiting: 5 tentatives max
- [ ] Account lockout après 5 tentatives
- [ ] Logs de connexion/déconnexion

### 1.2 2FA TOTP

- [ ] Authentification TOTP implémentée (speakeasy)
- [ ] QR code generation fonctionnel
- [ ] Backup codes générés (10 codes)
- [ ] Backup codes stockés hashés
- [ ] Validation TOTP (±30 secondes)
- [ ] Recovery codes testés
- [ ] 2FA obligatoire pour admin

### 1.3 Autorisation (RBAC)

- [ ] Rôles définis (Admin, Rédacteur, Validateur, Lecteur)
- [ ] Permissions granulaires implémentées
- [ ] Vérification permissions à chaque requête
- [ ] Pas de trust client-side permissions
- [ ] Audit logs pour changements permissions

---

## 2. DONNÉES SENSIBLES

### 2.1 Chiffrement

- [ ] HTTPS/TLS 1.3 obligatoire
- [ ] HSTS header configuré (max-age: 63072000)
- [ ] Passwords: bcrypt (12 rounds)
- [ ] API Keys: AES-256-GCM
- [ ] PII: AES-256-CBC
- [ ] Backups: GPG encryption
- [ ] Clés stockées séparément (env variables)

### 2.2 Stockage des données

- [ ] Pas de données sensibles en logs
- [ ] Pas de passwords en BD (hashés uniquement)
- [ ] Pas de tokens en cookies non-secure
- [ ] Cookies: HttpOnly, Secure, SameSite=Strict
- [ ] PII masqué dans les logs
- [ ] Données supprimées après rétention

### 2.3 Transmission des données

- [ ] HTTPS sur toutes les pages
- [ ] CSP headers configurés
- [ ] X-Frame-Options: DENY
- [ ] X-Content-Type-Options: nosniff
- [ ] Referrer-Policy: strict-origin-when-cross-origin

---

## 3. INJECTION & XSS

### 3.1 SQL Injection

- [ ] Parameterized queries utilisées
- [ ] ORM (Strapi) utilisé
- [ ] Pas de string concatenation
- [ ] Input validation (Zod)
- [ ] Prepared statements

### 3.2 XSS Prevention

- [ ] DOMPurify sanitization implémentée
- [ ] Content Security Policy (CSP) strict
- [ ] Pas de innerHTML
- [ ] React escaping automatique
- [ ] Éditeur WYSIWYG sécurisé
- [ ] Validation images (type, size, metadata)

### 3.3 CSRF Protection

- [ ] CSRF tokens implémentés
- [ ] SameSite cookies configurés
- [ ] Double submit cookies
- [ ] Vérification origin headers

---

## 4. UPLOAD DE FICHIERS

### 4.1 Validation

- [ ] Validation type fichier (whitelist)
- [ ] Validation taille (max 10MB)
- [ ] Validation dimensions images
- [ ] Extraction metadata sécurisée
- [ ] Pas d'exécution fichiers uploadés

### 4.2 Stockage

- [ ] Fichiers stockés hors webroot
- [ ] Noms fichiers randomisés
- [ ] Permissions fichiers restrictives
- [ ] Scan virus (ClamAV)
- [ ] CDN pour distribution

### 4.3 Images

- [ ] Redimensionnement automatique
- [ ] Conversion WebP
- [ ] Métadonnées EXIF supprimées
- [ ] Lazy loading implémenté

---

## 5. API SECURITY

### 5.1 Rate Limiting

- [ ] Rate limiting par IP
- [ ] Rate limiting par utilisateur
- [ ] Limits: 100 req/min (public), 1000 req/min (auth)
- [ ] Exponential backoff
- [ ] Monitoring des abus

### 5.2 API Endpoints

- [ ] Authentification requise (sauf public)
- [ ] Validation input (Zod)
- [ ] Pagination implémentée
- [ ] Field selection (GraphQL)
- [ ] Versioning API (/api/v1/)

### 5.3 CORS

- [ ] CORS configuré restrictif
- [ ] Allowed origins whitelist
- [ ] Credentials handling sécurisé
- [ ] Preflight requests validées

---

## 6. AUDIT & LOGGING

### 6.1 Logging

- [ ] Tous les événements sensibles loggés
- [ ] Format JSON structuré
- [ ] Timestamps ISO8601
- [ ] User ID et IP address
- [ ] User agent
- [ ] Status (success/failure)

### 6.2 Événements auditables

- [ ] Connexions/déconnexions
- [ ] Modifications contenu
- [ ] Accès documents restreints
- [ ] Changements permissions
- [ ] Tentatives accès non autorisées
- [ ] Uploads/téléchargements
- [ ] Exports données
- [ ] Changements configuration

### 6.3 Retention & Archivage

- [ ] Logs actifs: 90 jours (BD)
- [ ] Logs archivés: 7 ans (Cloud)
- [ ] Chiffrement logs archivés
- [ ] Immuabilité logs (write-once)
- [ ] Accès logs auditables

---

## 7. SAUVEGARDES

### 7.1 Stratégie

- [ ] Backups quotidiens (incrémentaux)
- [ ] Backups hebdomadaires (complets)
- [ ] Backups mensuels (archivés)
- [ ] 3 régions géographiques
- [ ] Chiffrement AES-256
- [ ] Clés stockées séparément

### 7.2 Testing

- [ ] Test restauration mensuel
- [ ] Test en staging trimestriel
- [ ] Audit externe annuel
- [ ] RTO: 4 heures
- [ ] RPO: 1 heure

### 7.3 Disaster Recovery

- [ ] Plan DR documenté
- [ ] Contacts d'urgence définis
- [ ] Procédures testées
- [ ] Communication plan
- [ ] Stakeholders notifiés

---

## 8. INFRASTRUCTURE

### 8.1 Serveurs

- [ ] OS patchés (latest security updates)
- [ ] Firewall configuré
- [ ] SSH key-based auth (no passwords)
- [ ] Sudo access restreint
- [ ] Monitoring actif
- [ ] Alertes configurées

### 8.2 Réseau

- [ ] VPN pour accès admin
- [ ] WAF (Web Application Firewall)
- [ ] DDoS protection
- [ ] Rate limiting réseau
- [ ] Monitoring trafic anormal

### 8.3 CDN

- [ ] Cloudflare Enterprise configuré
- [ ] DDoS protection activé
- [ ] WAF rules configurées
- [ ] Cache headers optimisés
- [ ] SSL/TLS configuré

---

## 9. DÉPENDANCES

### 9.1 Scanning

- [ ] npm audit exécuté
- [ ] SNYK scanning actif
- [ ] Dependabot configuré
- [ ] Aucune vulnérabilité critique
- [ ] Aucune vulnérabilité haute non-justifiée

### 9.2 Updates

- [ ] Security patches appliqués
- [ ] Dependencies à jour
- [ ] Lock files commitées
- [ ] Changelog reviewed
- [ ] Tests passent après updates

### 9.3 Licenses

- [ ] Toutes les licenses compatibles
- [ ] Pas de GPL (sauf si acceptable)
- [ ] License compliance audit

---

## 10. TESTING

### 10.1 Unit Tests

- [ ] Coverage > 80%
- [ ] Tests de sécurité (auth, permissions)
- [ ] Tests de validation input
- [ ] Tests de chiffrement

### 10.2 Integration Tests

- [ ] Tests API complets
- [ ] Tests authentification
- [ ] Tests autorisation
- [ ] Tests audit logs

### 10.3 E2E Tests

- [ ] Tests workflows critiques
- [ ] Tests authentification 2FA
- [ ] Tests upload fichiers
- [ ] Tests formulaires

### 10.4 Security Tests

- [ ] SAST (Static Application Security Testing)
- [ ] DAST (Dynamic Application Security Testing)
- [ ] Penetration testing
- [ ] Vulnerability scanning

---

## 11. PERFORMANCE & MONITORING

### 11.1 Performance

- [ ] LCP < 2.5s
- [ ] FID < 100ms
- [ ] CLS < 0.1
- [ ] TTFB < 600ms
- [ ] Lighthouse score > 90

### 11.2 Monitoring

- [ ] Datadog / New Relic configuré
- [ ] Prometheus + Grafana configuré
- [ ] ELK Stack configuré
- [ ] Sentry configuré
- [ ] Alertes configurées

### 11.3 Métriques

- [ ] Uptime monitoring
- [ ] Response time monitoring
- [ ] Error rate monitoring
- [ ] CPU/Memory monitoring
- [ ] Disk usage monitoring

---

## 12. DOCUMENTATION

### 12.1 Technique

- [ ] Architecture documentée
- [ ] API documentation (Swagger)
- [ ] Database schema documenté
- [ ] Deployment guide
- [ ] Security guide

### 12.2 Opérationnelle

- [ ] Admin guide
- [ ] User manual
- [ ] Troubleshooting guide
- [ ] Incident response plan
- [ ] Disaster recovery plan

### 12.3 Sécurité

- [ ] Security policy
- [ ] Data classification
- [ ] Access control policy
- [ ] Incident response procedure
- [ ] Audit trail procedure

---

## 13. CONFORMITÉ

### 13.1 OWASP Top 10

- [ ] A01: Broken Access Control
- [ ] A02: Cryptographic Failures
- [ ] A03: Injection
- [ ] A04: Insecure Design
- [ ] A05: Security Misconfiguration
- [ ] A06: Vulnerable & Outdated Components
- [ ] A07: Authentication Failures
- [ ] A08: Software & Data Integrity Failures
- [ ] A09: Logging & Monitoring Failures
- [ ] A10: SSRF

### 13.2 Standards

- [ ] NIST Cybersecurity Framework
- [ ] ISO 27001 (préparation)
- [ ] GDPR compliance
- [ ] WCAG 2.1 AA

### 13.3 Audit

- [ ] Audit sécurité externe
- [ ] Penetration testing
- [ ] Code review
- [ ] Infrastructure audit

---

## 14. INCIDENT RESPONSE

### 14.1 Plan

- [ ] Incident response plan documenté
- [ ] Contacts d'urgence définis
- [ ] Escalation procedures
- [ ] Communication plan
- [ ] Post-mortem procedure

### 14.2 Outils

- [ ] SIEM configuré
- [ ] Alertes en temps réel
- [ ] Logging centralisé
- [ ] Forensics tools disponibles

### 14.3 Training

- [ ] Team training complété
- [ ] Incident response drill
- [ ] Phishing simulation
- [ ] Security awareness

---

## 15. PRÉ-LANCEMENT FINAL

### 15.1 Vérifications finales

- [ ] Tous les tests passent
- [ ] Audit sécurité approuvé
- [ ] Audit accessibilité approuvé
- [ ] Performance audit approuvé
- [ ] Backup/restore testé
- [ ] Disaster recovery plan validé

### 15.2 Déploiement

- [ ] DNS configuré
- [ ] SSL/TLS configuré
- [ ] CDN configuré
- [ ] Monitoring configuré
- [ ] Alertes configurées
- [ ] Support 24/7 en place

### 15.3 Stakeholders

- [ ] Documentation complète
- [ ] Training utilisateurs
- [ ] Communication launch
- [ ] Stakeholders approuvent
- [ ] Go/No-go decision

---

## Signature d'approbation

| Rôle | Nom | Date | Signature |
|------|-----|------|-----------|
| **CISO** | | | |
| **Responsable Infrastructure** | | | |
| **Responsable Sécurité** | | | |
| **Responsable Projet** | | | |

---

**Date de vérification:** _______________  
**Résultat:** ☐ APPROUVÉ ☐ APPROUVÉ AVEC CONDITIONS ☐ REJETÉ

**Commentaires:**

---

*Checklist à compléter avant tout déploiement en production*
