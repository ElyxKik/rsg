# Logos RSG

## Instructions pour ajouter le logo officiel

1. **Sauvegarder l'image fournie** sous le nom `logo-rsg.png` dans ce dossier
2. **Format recommandé :** PNG avec fond transparent
3. **Dimensions optimales :** 400x200px ou similaire (ratio 2:1)
4. **Qualité :** Haute résolution pour les écrans Retina

## Fichiers requis

- `logo-rsg.png` - Logo officiel RSG (à ajouter manuellement)
- `logo-rsg-white.png` - Version blanche pour fonds sombres (optionnel)
- `favicon.ico` - Favicon du site (optionnel)

## Usage dans le code

Le logo est utilisé dans le Header avec le chemin : `/logos/logo-rsg.png`

```tsx
<img
  src="/logos/logo-rsg.png"
  alt="RSG - Réserve Stratégique Générale"
  className="h-14 w-auto object-contain"
/>
```
