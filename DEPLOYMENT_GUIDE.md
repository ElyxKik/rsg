# 🚀 GUIDE DE DÉPLOIEMENT - RSG

**Classification:** Gouvernemental - Confidentiel

---

## 1. PRÉ-DÉPLOIEMENT

### 1.1 Checklist pré-déploiement

- [ ] Tous les tests passent (unit, integration, E2E)
- [ ] Audit sécurité complété et approuvé
- [ ] Audit accessibilité (WCAG 2.1 AA) approuvé
- [ ] Performance audit (Lighthouse >90) approuvé
- [ ] Backup/restore testé en staging
- [ ] Disaster recovery plan validé
- [ ] Documentation complète
- [ ] Training utilisateurs complété
- [ ] Support 24/7 en place
- [ ] Monitoring configuré
- [ ] Alertes configurées
- [ ] DNS configuré
- [ ] SSL/TLS configuré
- [ ] CDN configuré
- [ ] Stakeholders approuvent

### 1.2 Environnements

```
Development:  http://localhost:3000 (local)
Staging:      https://staging.rsg.gov.cd
Production:   https://rsg.gov.cd
```

---

## 2. DÉPLOIEMENT EN STAGING

### 2.1 Préparation

```bash
# 1. Créer branche release
git checkout -b release/v1.0.0

# 2. Mettre à jour versions
npm version minor

# 3. Mettre à jour CHANGELOG
# Éditer CHANGELOG.md

# 4. Commit et tag
git add .
git commit -m "chore: release v1.0.0"
git tag -a v1.0.0 -m "Release v1.0.0"
git push origin release/v1.0.0
git push origin v1.0.0
```

### 2.2 Déploiement automatisé

```bash
# Push déclenche GitHub Actions
# Workflow: .github/workflows/deploy-staging.yml

# Étapes:
# 1. Lint & Type check
# 2. Tests unitaires
# 3. Security scan
# 4. Build
# 5. E2E tests
# 6. Deploy to staging
# 7. Smoke tests
# 8. Notification
```

### 2.3 Vérification en staging

```bash
# 1. Accéder au site
https://staging.rsg.gov.cd

# 2. Vérifier les pages principales
- Accueil
- Présentation
- Gouvernance
- Programmes
- Actualités
- Documentation
- Transparence
- Contact

# 3. Tester les fonctionnalités
- Authentification
- 2FA
- Upload fichiers
- Recherche
- Multilingue
- Responsive design

# 4. Vérifier les logs
tail -f /var/log/rsg/staging/frontend.log
tail -f /var/log/rsg/staging/backend.log

# 5. Vérifier les métriques
Datadog: https://app.datadoghq.com
Grafana: https://monitoring-staging.rsg.gov.cd/grafana
```

### 2.4 Approbation staging

```bash
# 1. Créer Pull Request
# Title: "Release v1.0.0"
# Description: Changelog, testing notes

# 2. Code review
# - Minimum 2 approvals
# - CISO approval
# - Security team approval

# 3. Merge to main
git checkout main
git pull origin main
git merge --no-ff release/v1.0.0

# 4. Push
git push origin main
```

---

## 3. DÉPLOIEMENT EN PRODUCTION

### 3.1 Préparation production

```bash
# 1. Vérifier la branche main
git checkout main
git pull origin main

# 2. Vérifier les tags
git tag -l

# 3. Vérifier les variables d'env production
cat /etc/rsg/.env.production

# 4. Vérifier les secrets
aws secretsmanager get-secret-value --secret-id rsg/prod/secrets

# 5. Vérifier les backups
aws s3 ls s3://rsg-backups/prod/
```

### 3.2 Déploiement automatisé

```bash
# Push du tag déclenche GitHub Actions
# Workflow: .github/workflows/deploy-production.yml

# Étapes:
# 1. Lint & Type check
# 2. Tests unitaires
# 3. Security scan
# 4. Build
# 5. E2E tests
# 6. Deploy to production (blue-green)
# 7. Health checks
# 8. Smoke tests
# 9. Notification
```

### 3.3 Blue-Green Deployment

```bash
# 1. Déployer sur "green" (nouveau)
# - Nouvelle version du code
# - Nouvelles instances
# - Même configuration

# 2. Vérifier "green"
# - Health checks
# - Smoke tests
# - Performance tests

# 3. Basculer le trafic
# - Cloudflare routing
# - Load balancer
# - DNS (si nécessaire)

# 4. Garder "blue" (ancien) en standby
# - Rollback rapide si problème
# - Garder 15 minutes minimum

# 5. Supprimer "blue" après validation
```

### 3.4 Vérification production

```bash
# 1. Accéder au site
https://rsg.gov.cd

# 2. Vérifier les pages principales
- Accueil
- Présentation
- Gouvernance
- Programmes
- Actualités
- Documentation
- Transparence
- Contact

# 3. Tester les fonctionnalités
- Authentification
- 2FA
- Upload fichiers
- Recherche
- Multilingue
- Responsive design

# 4. Vérifier les logs
tail -f /var/log/rsg/prod/frontend.log
tail -f /var/log/rsg/prod/backend.log

# 5. Vérifier les métriques
Datadog: https://app.datadoghq.com
Grafana: https://monitoring.rsg.gov.cd/grafana
Sentry: https://sentry.rsg.gov.cd

# 6. Vérifier les alertes
# Aucune alerte critique
# Aucune alerte de sécurité
```

### 3.5 Communication

```bash
# 1. Notifier les stakeholders
# Email: Déploiement complété avec succès

# 2. Publier un communiqué
# Site: Nouvelle version disponible

# 3. Mettre à jour la documentation
# Wiki: Release notes

# 4. Archiver les logs
# S3: Logs de déploiement
```

---

## 4. ROLLBACK

### 4.1 Rollback automatique

```bash
# Si health checks échouent:
# 1. Arrêter le déploiement
# 2. Basculer vers la version précédente
# 3. Notifier l'équipe
# 4. Créer un incident

# Commande manuelle:
git revert HEAD
git push origin main
```

### 4.2 Rollback manuel

```bash
# 1. Identifier le problème
tail -f /var/log/rsg/prod/frontend.log
tail -f /var/log/rsg/prod/backend.log

# 2. Basculer vers la version précédente
git checkout v1.0.0-1
npm run build
npm run deploy:production

# 3. Vérifier que tout fonctionne
curl https://rsg.gov.cd/health

# 4. Notifier les stakeholders
# Email: Rollback effectué

# 5. Créer un incident
# Jira: Incident - Rollback v1.0.0
```

### 4.3 Procédure d'urgence

```bash
# Si le site est down:

# 1. Activer le mode maintenance
# Cloudflare: Maintenance page

# 2. Investiguer le problème
# Logs, métriques, alertes

# 3. Décider: Fix ou Rollback
# - Fix: Patch et redéployer
# - Rollback: Revenir à la version précédente

# 4. Exécuter la décision
# Voir sections ci-dessus

# 5. Notifier les utilisateurs
# Email, SMS, site web

# 6. Post-mortem
# Analyser la cause root
# Implémenter des prévention
```

---

## 5. MONITORING POST-DÉPLOIEMENT

### 5.1 Métriques à surveiller (24h)

```
Frontend:
- Page load time (LCP, FID, CLS)
- Error rate
- User interactions
- API response time

Backend:
- API response time
- Database query time
- Error rate
- CPU/Memory usage
- Disk usage

Infrastructure:
- Server uptime
- Network latency
- Bandwidth usage
- DDoS attacks
```

### 5.2 Alertes critiques

```
- Server down
- Database down
- High error rate (>5%)
- Security breach
- Performance degradation
- Backup failure
```

### 5.3 Dashboards

```
Datadog:
https://app.datadoghq.com/dashboard

Grafana:
https://monitoring.rsg.gov.cd/grafana

Sentry:
https://sentry.rsg.gov.cd

Matomo:
https://analytics.rsg.gov.cd
```

---

## 6. MAINTENANCE POST-DÉPLOIEMENT

### 6.1 Jour 1

- [ ] Vérifier tous les services
- [ ] Vérifier les logs d'erreurs
- [ ] Vérifier les alertes
- [ ] Vérifier les métriques de performance
- [ ] Vérifier les backups
- [ ] Notifier les stakeholders

### 6.2 Semaine 1

- [ ] Security audit
- [ ] Performance audit
- [ ] Accessibility audit
- [ ] User feedback
- [ ] Bug fixes si nécessaire
- [ ] Documentation updates

### 6.3 Mois 1

- [ ] Full system audit
- [ ] Penetration testing
- [ ] Load testing
- [ ] Disaster recovery drill
- [ ] Stakeholder review
- [ ] Lessons learned

---

## 7. HOTFIXES

### 7.1 Procédure hotfix

```bash
# 1. Créer branche hotfix
git checkout -b hotfix/critical-bug

# 2. Fixer le bug
# Éditer les fichiers

# 3. Tester
npm run test
npm run test:e2e

# 4. Commit
git add .
git commit -m "fix: critical bug description"

# 5. Merge to main
git checkout main
git merge --no-ff hotfix/critical-bug

# 6. Tag
git tag -a v1.0.1 -m "Hotfix v1.0.1"

# 7. Push
git push origin main
git push origin v1.0.1

# 8. Déployer
# GitHub Actions déclenche le déploiement automatiquement
```

### 7.2 Communication hotfix

```
Email aux stakeholders:
- Problème identifié
- Impact
- Solution
- Déploiement en cours
- ETA
```

---

## 8. VERSIONING

### 8.1 Semantic Versioning

```
MAJOR.MINOR.PATCH

MAJOR: Breaking changes
MINOR: New features (backward compatible)
PATCH: Bug fixes

Exemples:
- v1.0.0: Initial release
- v1.1.0: New features
- v1.1.1: Bug fix
- v2.0.0: Major redesign
```

### 8.2 Release Notes

```
# v1.0.0 - Initial Release

## Features
- Site public complet
- Admin panel
- Intranet privé
- 2FA authentication
- Multilingue (FR/EN/SW)

## Improvements
- Performance optimizations
- Security hardening
- Accessibility improvements

## Bug Fixes
- Fixed login issue
- Fixed image upload
- Fixed search functionality

## Breaking Changes
None

## Migration Guide
N/A

## Known Issues
None

## Contributors
- [Nom] - Architecture
- [Nom] - Frontend
- [Nom] - Backend
```

---

## 9. CONTACTS D'URGENCE

| Rôle | Nom | Email | Téléphone |
|------|-----|-------|-----------|
| **CISO** | | | |
| **Responsable Infrastructure** | | | |
| **Responsable Sécurité** | | | |
| **Responsable Projet** | | | |
| **Support 24/7** | | | |

---

## 10. CHECKLIST FINALE

- [ ] Tous les tests passent
- [ ] Audit sécurité approuvé
- [ ] Audit accessibilité approuvé
- [ ] Performance audit approuvé
- [ ] Backup testé
- [ ] Disaster recovery plan validé
- [ ] Documentation complète
- [ ] Training utilisateurs complété
- [ ] Support 24/7 en place
- [ ] Monitoring configuré
- [ ] Alertes configurées
- [ ] DNS configuré
- [ ] SSL/TLS configuré
- [ ] CDN configuré
- [ ] Stakeholders approuvent
- [ ] Go/No-go decision

---

**Dernière mise à jour:** Octobre 2025  
**Version:** 1.0
