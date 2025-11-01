# 🎨 SPÉCIFICATION TECHNIQUE RSG - PARTIE 3
## Design System & Animations

**Version:** 1.0 | **Date:** Octobre 2025

---

## 1. DESIGN SYSTEM

### 1.1 Palette de couleurs

```css
/* Couleurs nationales RDC */
--primary-blue: #003DA5      /* Bleu souveraineté */
--primary-yellow: #FFD700    /* Jaune or richesse */
--primary-red: #CE1126       /* Rouge détermination */

/* Neutres */
--gray-50: #F9FAFB
--gray-100: #F3F4F6
--gray-200: #E5E7EB
--gray-300: #D1D5DB
--gray-400: #9CA3AF
--gray-500: #6B7280
--gray-600: #4B5563
--gray-700: #374151
--gray-800: #1F2937
--gray-900: #111827

/* Sémantiques */
--success: #10B981
--warning: #F59E0B
--error: #EF4444
--info: #3B82F6

/* Dégradés */
--gradient-primary: linear-gradient(135deg, #003DA5 0%, #0052CC 100%)
--gradient-warm: linear-gradient(135deg, #FFD700 0%, #FFA500 100%)
```

### 1.2 Typographie

```css
/* Hiérarchie typographique */
--font-family-primary: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif
--font-family-mono: 'Fira Code', monospace

/* Sizes */
--text-xs: 0.75rem (12px)
--text-sm: 0.875rem (14px)
--text-base: 1rem (16px)
--text-lg: 1.125rem (18px)
--text-xl: 1.25rem (20px)
--text-2xl: 1.5rem (24px)
--text-3xl: 1.875rem (30px)
--text-4xl: 2.25rem (36px)
--text-5xl: 3rem (48px)

/* Line heights */
--leading-tight: 1.25
--leading-normal: 1.5
--leading-relaxed: 1.625

/* Font weights */
--font-light: 300
--font-normal: 400
--font-medium: 500
--font-semibold: 600
--font-bold: 700
```

### 1.3 Spacing

```css
/* Système de spacing 8px */
--space-0: 0
--space-1: 0.25rem (4px)
--space-2: 0.5rem (8px)
--space-3: 0.75rem (12px)
--space-4: 1rem (16px)
--space-6: 1.5rem (24px)
--space-8: 2rem (32px)
--space-12: 3rem (48px)
--space-16: 4rem (64px)
--space-20: 5rem (80px)
--space-24: 6rem (96px)
```

### 1.4 Shadows

```css
--shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05)
--shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1)
--shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1)
--shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.1)
--shadow-2xl: 0 25px 50px -12px rgba(0, 0, 0, 0.25)
```

### 1.5 Border Radius

```css
--radius-none: 0
--radius-sm: 0.125rem (2px)
--radius-md: 0.375rem (6px)
--radius-lg: 0.5rem (8px)
--radius-xl: 0.75rem (12px)
--radius-2xl: 1rem (16px)
--radius-full: 9999px
```

---

## 2. COMPOSANTS RÉUTILISABLES

### 2.1 Buttons

```typescript
// Variantes
- Primary (bleu)
- Secondary (gris)
- Tertiary (transparent)
- Danger (rouge)

// Sizes
- sm: 32px height
- md: 40px height (default)
- lg: 48px height

// States
- default
- hover (scale 1.05, shadow elevation)
- active (scale 0.95)
- disabled (opacity 0.5)
- loading (spinner)

// Props
interface ButtonProps {
  variant: 'primary' | 'secondary' | 'tertiary' | 'danger'
  size: 'sm' | 'md' | 'lg'
  disabled?: boolean
  loading?: boolean
  icon?: React.ReactNode
  children: React.ReactNode
  onClick?: () => void
}
```

### 2.2 Cards

```typescript
// Propriétés
- Elevation (shadow)
- Padding: 24px
- Border radius: 12px
- Hover effect: shadow elevation
- Responsive grid

// Variantes
- Default (white background)
- Elevated (shadow)
- Outlined (border)
- Interactive (hover effects)
```

### 2.3 Forms

```typescript
// Composants
- Input (text, email, password, number)
- Textarea
- Select
- Checkbox
- Radio
- Toggle

// Propriétés
- Label + hint text
- Error state (red border + message)
- Success state (green border)
- Disabled state
- Focus animation
- Validation en temps réel
```

### 2.4 Modals

```typescript
// Structure
- Header (titre + close button)
- Body (contenu)
- Footer (actions)

// Animations
- Backdrop fade-in
- Modal slide-up
- Duration: 300ms
- Easing: easeOut

// Accessibility
- Focus trap
- Escape key close
- ARIA labels
```

### 2.5 Badges

```typescript
// Variantes
- Primary (bleu)
- Success (vert)
- Warning (orange)
- Error (rouge)
- Info (bleu clair)

// Sizes
- sm: 20px height
- md: 24px height
- lg: 32px height
```

---

## 3. ANIMATIONS

### 3.1 Animations principales

| Page | Animation | Technologie | Durée |
|------|-----------|-------------|-------|
| **Accueil** | Hero parallax, fade-in stagger | Framer Motion + GSAP | 600ms |
| **Scroll** | Reveal on scroll, parallax | Intersection Observer + GSAP | Var |
| **Navigation** | Slide-in menu, active indicator | Framer Motion | 300ms |
| **Cartes** | Hover scale, shadow elevation | CSS + Framer Motion | 200ms |
| **Formulaires** | Field focus animation, error shake | Framer Motion | 200ms |
| **Modals** | Backdrop fade, modal slide | Framer Motion | 300ms |

### 3.2 Micro-interactions

#### Button Hover
```typescript
- Scale: 1 → 1.05
- Shadow: elevation
- Duration: 200ms
- Easing: easeOut
```

#### Link Underline
```typescript
- Width: 0 → 100%
- Duration: 300ms
- Easing: easeInOut
- Color: gray → primary-blue
```

#### Form Input Focus
```typescript
- Border color: gray → blue
- Shadow: subtle glow
- Label: move up + scale 0.9
- Duration: 200ms
```

#### Card Hover
```typescript
- Scale: 1 → 1.02
- Shadow: md → lg
- Duration: 300ms
- Easing: easeOut
```

### 3.3 Scroll Animations

```typescript
// Reveal on scroll
- Opacity: 0 → 1
- Transform: translateY(20px) → translateY(0)
- Duration: 600ms
- Trigger: 80% visible

// Parallax
- Offset: -50% to 50%
- Speed: 0.5x
- Smooth easing
```

### 3.4 Lottie Animations

```typescript
// Utilisation
- Icônes animées (header, buttons)
- Illustrations (sections)
- Loading states
- Success/error states

// Optimisations
- Lazy load
- Pause on blur
- Reduce motion support
```

### 3.5 Performance d'animation

```typescript
// Optimisations
- GPU acceleration (transform, opacity)
- Avoid layout thrashing
- Debounce scroll events (100ms)
- Lazy load Lottie animations
- Reduce motion (prefers-reduced-motion)
- Will-change CSS property
```

---

## 4. RESPONSIVE DESIGN

### 4.1 Breakpoints

```css
--breakpoint-xs: 320px
--breakpoint-sm: 640px
--breakpoint-md: 768px
--breakpoint-lg: 1024px
--breakpoint-xl: 1280px
--breakpoint-2xl: 1536px
```

### 4.2 Mobile-first approach

```typescript
// Tailwind CSS
<div className="text-base md:text-lg lg:text-xl">
  Responsive text
</div>

// Grid responsive
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
  {items.map(item => <Card key={item.id} {...item} />)}
</div>
```

---

## 5. ACCESSIBILITÉ (WCAG 2.1 AA)

### 5.1 Couleurs et contraste

```
- Ratio de contraste: ≥ 4.5:1 (texte normal)
- Ratio de contraste: ≥ 3:1 (texte large)
- Ne pas utiliser la couleur seule pour communiquer
```

### 5.2 Navigation au clavier

```typescript
- Tab order logique
- Focus visible (outline)
- Skip to main content link
- Keyboard shortcuts documentées
```

### 5.3 ARIA Labels

```typescript
<button aria-label="Fermer le menu">
  <X size={24} />
</button>

<nav aria-label="Navigation principale">
  {/* Navigation items */}
</nav>

<div role="alert" aria-live="polite">
  Erreur de validation
</div>
```

### 5.4 Sémantique HTML

```typescript
- Utiliser <button> pour les boutons
- Utiliser <a> pour les liens
- Utiliser <nav> pour la navigation
- Utiliser <main> pour le contenu principal
- Utiliser <header>, <footer>, <section>, <article>
- Utiliser <form>, <label>, <input>
```

### 5.5 Texte alternatif

```typescript
<img 
  src="logo-rsg.png" 
  alt="Logo de la Réserve Stratégique Générale"
/>

<svg aria-label="Icône de recherche">
  {/* SVG content */}
</svg>
```

---

## 6. DARK MODE (Optionnel)

```typescript
// Tailwind dark mode
<div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
  Content
</div>

// Couleurs dark mode
--dark-bg: #111827
--dark-surface: #1F2937
--dark-text: #F9FAFB
--dark-border: #374151
```

---

## 7. ANIMATIONS LOTTIE

### 7.1 Ressources Lottie

```
- Hero animation (background)
- Loading spinner
- Success checkmark
- Error icon
- Empty state illustration
- Section dividers
```

### 7.2 Intégration

```typescript
import Lottie from 'lottie-react';
import animationData from '@/animations/hero.json';

export function HeroAnimation() {
  return (
    <Lottie 
      animationData={animationData}
      loop={true}
      autoplay={true}
    />
  );
}
```

---

## 8. GSAP ANIMATIONS

### 8.1 Parallax Scroll

```typescript
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

gsap.to('.parallax-element', {
  scrollTrigger: {
    trigger: '.parallax-element',
    start: 'top center',
    end: 'bottom center',
    scrub: 1,
  },
  y: -100,
  opacity: 0.5,
});
```

### 8.2 Timeline Animations

```typescript
const tl = gsap.timeline();

tl.to('.hero-title', { duration: 0.6, opacity: 1, y: 0 })
  .to('.hero-subtitle', { duration: 0.6, opacity: 1, y: 0 }, '-=0.3')
  .to('.hero-button', { duration: 0.6, opacity: 1, scale: 1 }, '-=0.3');
```

---

## Prochaines étapes
Voir SPEC_PART4_IMPLEMENTATION.md pour le plan d'implémentation détaillé.
