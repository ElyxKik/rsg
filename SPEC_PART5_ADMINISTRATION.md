# 👨‍💼 SPÉCIFICATION TECHNIQUE RSG - PARTIE 5
## Guide d'Administration & Maintenance

**Version:** 1.0 | **Date:** Octobre 2025

---

## 1. GUIDE D'ADMINISTRATION

### 1.1 Accès Admin

```
URL: https://rsg.gov.cd/admin
Authentification: Email + Password + 2FA TOTP
Rôles: Admin, Rédacteur, Validateur, Lecteur
```

### 1.2 Dashboard Admin

```
Sections:
- Statistiques (articles, utilisateurs, visites)
- Articles (créer, éditer, publier)
- Utilisateurs (créer, éditer, permissions)
- Médias (uploader, organiser)
- Documents (gérer, télécharger)
- Appels d'offres (créer, fermer)
- Équipe (ajouter membres, bios)
- Paramètres (configuration site)
- Audit logs (historique actions)
```

### 1.3 Gestion des articles

#### Créer un article
1. Cliquer "Nouvel article"
2. Remplir titre, slug (auto-généré)
3. Écrire contenu avec éditeur WYSIWYG
4. Ajouter image featured
5. Ajouter tags et catégorie
6. Remplir SEO (title, description)
7. Sauvegarder (draft)
8. Soumettre pour validation
9. Validateur approuve
10. Publication automatique

#### Éditer un article
1. Rechercher article
2. Cliquer "Éditer"
3. Modifier contenu
4. Sauvegarder
5. Soumettre pour validation si changements majeurs

#### Archiver un article
1. Cliquer "Archiver"
2. Article reste en BD mais invisible publiquement
3. Peut être restauré

### 1.4 Gestion des utilisateurs

#### Créer utilisateur
```
Email: [email]
Nom: [nom]
Prénom: [prénom]
Rôle: Admin | Rédacteur | Validateur | Lecteur
Permissions: [sélectionner]
Envoyer invitation email
```

#### Permissions par rôle

| Rôle | Permissions |
|------|-------------|
| **Admin** | Accès complet, gestion utilisateurs, audit |
| **Rédacteur** | Créer/éditer articles, uploader médias |
| **Validateur** | Approuver articles avant publication |
| **Lecteur** | Accès lecture seule |

#### Réinitialiser password
1. Cliquer utilisateur
2. "Réinitialiser password"
3. Email envoyé avec lien
4. Utilisateur crée nouveau password

#### Désactiver utilisateur
1. Cliquer utilisateur
2. "Désactiver"
3. Utilisateur ne peut plus se connecter
4. Peut être réactivé

### 1.5 Gestion des médias

#### Uploader une image
1. Cliquer "Uploader"
2. Sélectionner fichier (JPG, PNG, WebP)
3. Remplir alt text
4. Taille max: 10MB
5. Redimensionnement automatique

#### Organiser médias
1. Créer dossiers
2. Trier par date, nom, taille
3. Supprimer fichiers inutilisés

### 1.6 Gestion des documents

#### Uploader un document
1. Cliquer "Ajouter document"
2. Titre, description
3. Uploader fichier (PDF, DOCX, XLSX)
4. Catégorie (rapport, bulletin, note, ordonnance)
5. Niveau d'accès (public, restreint, interne)
6. Date d'expiration (optionnel)
7. Publier

#### Archiver un document
1. Cliquer document
2. "Archiver"
3. Document reste en BD mais invisible

### 1.7 Gestion des appels d'offres

#### Créer appel d'offres
1. Cliquer "Nouvel appel d'offres"
2. Titre, référence (unique)
3. Description détaillée
4. Budget
5. Dates ouverture/fermeture
6. Joindre documents
7. Publier

#### Fermer appel d'offres
1. Cliquer appel d'offres
2. "Fermer"
3. Ajouter résultats
4. Publier résultats

### 1.8 Paramètres du site

```
Général:
- Titre site
- Description
- Logo
- Favicon

Contact:
- Email principal
- Téléphone
- Adresse

Réseaux sociaux:
- Facebook
- Twitter
- LinkedIn
- Instagram

Email:
- Serveur SMTP
- Adresse expéditeur
- Templates

Sécurité:
- 2FA obligatoire
- Session timeout
- Rate limiting
```

---

## 2. ÉDITEUR WYSIWYG

### 2.1 Fonctionnalités

```
Formatage:
- Gras, italique, souligné, barré
- Headings (H1-H6)
- Listes (ordonnées, non-ordonnées)
- Blockquotes
- Code blocks
- Tables

Média:
- Images (upload, URL)
- Vidéos (embed YouTube, Vimeo)
- Fichiers (PDF, documents)

Avancé:
- Links (avec validation)
- Mentions (@user)
- Emojis
- Undo/redo
- Auto-save (30s)
- Version history
- Preview
```

### 2.2 Utilisation

```
1. Cliquer dans zone de texte
2. Utiliser toolbar ou raccourcis clavier
3. Ctrl+B: Gras
4. Ctrl+I: Italique
5. Ctrl+U: Souligné
6. Ctrl+Z: Undo
7. Ctrl+Y: Redo
```

### 2.3 Sécurité

```
- Sanitization XSS automatique
- Pas de scripts inline
- Validation images (type, size, metadata)
- Scan virus (ClamAV)
- CSP strict
```

---

## 3. INTRANET PRIVÉ

### 3.1 Accès intranet

```
URL: https://rsg.gov.cd/intranet
Authentification: Email + Password + 2FA TOTP
Accès: Personnel autorisé uniquement
```

### 3.2 Fonctionnalités intranet

```
- Espace documentaire privé
- Éditeur WYSIWYG privé
- Annonces internes
- Calendrier événements
- Annuaire personnel
- Formulaires internes
- Gestion des permissions
```

### 3.3 Gestion des permissions intranet

```
Niveaux d'accès:
- Tous les employés
- Département spécifique
- Rôle spécifique
- Utilisateurs spécifiques
```

---

## 4. AUDIT LOGS

### 4.1 Consultation des logs

```
URL: https://rsg.gov.cd/admin/audit-logs
Filtres:
- Date (from/to)
- Utilisateur
- Action
- Ressource
- Statut (success/failure)
```

### 4.2 Événements auditables

```
- Connexions/déconnexions
- Modifications articles
- Accès documents restreints
- Changements permissions
- Tentatives accès non autorisées
- Uploads/téléchargements
- Exports données
- Changements configuration
- Suppressions contenu
```

### 4.3 Export logs

```
Format: JSON, CSV
Période: Sélectionnable
Chiffrement: GPG (optionnel)
Archivage: Cloud storage
```

---

## 5. MAINTENANCE

### 5.1 Sauvegardes

#### Vérifier backups
```bash
# SSH sur serveur
ssh admin@rsg-server

# Vérifier derniers backups
ls -lh /backups/

# Vérifier backup cloud
aws s3 ls s3://rsg-backups/
```

#### Restaurer depuis backup
```bash
# Arrêter services
systemctl stop rsg-frontend rsg-backend

# Restaurer BD
pg_restore -d rsg_db /backups/rsg_db_latest.dump

# Restaurer fichiers
aws s3 sync s3://rsg-backups/files/ /data/files/

# Redémarrer services
systemctl start rsg-frontend rsg-backend
```

### 5.2 Updates et patches

#### Vérifier updates disponibles
```bash
npm outdated
npm audit
```

#### Appliquer security patches
```bash
npm audit fix
npm update
npm run test
npm run build
# Déployer en staging d'abord
```

### 5.3 Monitoring

#### Vérifier santé du système
```bash
# CPU, Memory, Disk
top
df -h
free -h

# Services
systemctl status rsg-frontend
systemctl status rsg-backend
systemctl status postgresql
systemctl status redis

# Logs
tail -f /var/log/rsg/frontend.log
tail -f /var/log/rsg/backend.log
```

#### Accéder aux dashboards

```
Grafana: https://monitoring.rsg.gov.cd/grafana
Prometheus: https://monitoring.rsg.gov.cd/prometheus
ELK: https://monitoring.rsg.gov.cd/kibana
Sentry: https://sentry.rsg.gov.cd
```

### 5.4 Nettoyage

#### Supprimer anciens logs
```bash
find /var/log/rsg -type f -mtime +90 -delete
```

#### Vider cache Redis
```bash
redis-cli FLUSHDB
```

#### Supprimer fichiers temporaires
```bash
rm -rf /tmp/rsg_*
```

---

## 6. TROUBLESHOOTING

### 6.1 Site ne répond pas

```
1. Vérifier serveur en ligne
   ping rsg.gov.cd

2. Vérifier services
   systemctl status rsg-frontend
   systemctl status rsg-backend

3. Vérifier BD
   psql -U postgres -d rsg_db -c "SELECT 1"

4. Vérifier logs
   tail -f /var/log/rsg/frontend.log
   tail -f /var/log/rsg/backend.log

5. Redémarrer services
   systemctl restart rsg-frontend rsg-backend

6. Si problème persiste, contacter support
```

### 6.2 Performance lente

```
1. Vérifier CPU/Memory
   top

2. Vérifier BD queries
   SELECT query, calls, mean_time FROM pg_stat_statements
   ORDER BY mean_time DESC LIMIT 10;

3. Vérifier cache Redis
   redis-cli INFO stats

4. Vérifier CDN
   Cloudflare dashboard

5. Optimiser queries/indexes
   ANALYZE;
   CREATE INDEX idx_name ON table(column);
```

### 6.3 Erreurs de sécurité

```
1. Vérifier WAF logs
   Cloudflare dashboard

2. Vérifier SIEM alerts
   Datadog / New Relic

3. Vérifier audit logs
   Admin panel → Audit logs

4. Si breach détecté:
   - Isoler système
   - Notifier CISO
   - Lancer incident response
   - Restaurer depuis backup
```

### 6.4 Problèmes d'authentification

```
1. Vérifier JWT secret
   echo $JWT_SECRET

2. Vérifier 2FA configuration
   Admin panel → Utilisateurs → 2FA

3. Réinitialiser password utilisateur
   Admin panel → Utilisateurs → Réinitialiser

4. Vérifier Redis sessions
   redis-cli KEYS "session:*"
```

---

## 7. CONTACTS D'URGENCE

```
CISO: [email] | [téléphone]
Responsable Infrastructure: [email] | [téléphone]
Responsable Sécurité: [email] | [téléphone]
Hotline 24/7: [numéro]
Email Support: support@rsg.gov.cd
```

---

## 8. PROCÉDURES D'URGENCE

### 8.1 Incident sécurité

```
1. Détecter incident (alertes, logs)
2. Isoler système affecté
3. Notifier CISO
4. Lancer investigation
5. Contenir menace
6. Restaurer depuis backup
7. Vérifier intégrité
8. Notifier stakeholders
9. Post-mortem
```

### 8.2 Perte de données

```
1. Arrêter services
2. Vérifier derniers backups
3. Restaurer depuis backup récent
4. Vérifier intégrité données
5. Redémarrer services
6. Notifier utilisateurs
7. Analyser cause
```

### 8.3 Attaque DDoS

```
1. Activer DDoS protection Cloudflare
2. Augmenter rate limiting
3. Monitorer trafic
4. Contacter Cloudflare support
5. Analyser patterns attaque
6. Implémenter mitigations
```

---

## 9. CHECKLISTS

### 9.1 Checklist quotidienne

- [ ] Vérifier backups complétés
- [ ] Vérifier alertes
- [ ] Vérifier erreurs logs
- [ ] Vérifier uptime services
- [ ] Vérifier trafic anormal

### 9.2 Checklist hebdomadaire

- [ ] Security patches
- [ ] Dependency updates
- [ ] Performance review
- [ ] Backup restoration test
- [ ] Audit logs review

### 9.3 Checklist mensuelle

- [ ] Full security audit
- [ ] Performance optimization
- [ ] Capacity planning
- [ ] Disaster recovery drill
- [ ] Stakeholder report

---

## Fin de la spécification technique

Pour toute question ou clarification, contacter l'équipe d'architecture.
