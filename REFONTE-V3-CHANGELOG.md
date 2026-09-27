# REFONTE-V3-CHANGELOG — Orion Construction

**Date :** Septembre 2026
**Objet :** Reconstruction complète du site — positionnement premium
**Référence :** AUDIT-UX-UI.md + Direction artistique V3

---

## Résumé

Reconstruction intégrale du site Orion Construction. Passage d'un positionnement "PME artisanale sobre" (V2) à un positionnement **premium / haut de gamme / architectural**. Nouvelle identité visuelle basée sur la maquette de direction artistique V3 : palette sombre + accent bronze, typographie géométrique légère, interactions sophistiquées.

---

## 1. Architecture finale

```
v3/
├── index.html                          Page d'accueil
├── construction.html                   Service Gros œuvre
├── renovation.html                     Service Rénovation
├── realisations.html                   Portfolio
│   ├── realisations/escalier-beton-arme-villa.html
│   ├── realisations/coffrage-beton-courbe.html
│   ├── realisations/escalier-porte-a-faux.html
│   └── realisations/abri-jardin.html
├── a-propos.html                       À propos
├── zone-intervention.html              Zone d'intervention + Google Maps
├── contact.html                        Formulaire de contact
├── mentions-legales.html               Mentions légales
├── styles.css                          Design system complet
├── script.js                           Interactions
├── logo.svg                            Logo V3
├── robots.txt                          Directives SEO
├── sitemap.xml                         Plan du site (12 URLs)
└── Direction_artistique.jpeg           Maquette de référence
```

**Total : 10 pages HTML + 4 fiches projet individuelles**

## 2. Pages créées (vs V2)

| Page V3 | Correspondance V2 | Changement |
|---------|-------------------|------------|
| `index.html` | `index.html` | Reconstruction complète — nouveau hero, nouveaux services, mode opératoire, partenaires, Maps |
| `construction.html` | `construction.html` | Renommé "Gros œuvre" — contenu adapté |
| `renovation.html` | `renovation.html` | Même structure, nouveau design |
| `realisations.html` | `realisations.html` | Nouveau layout éditorial, descriptions sur images |
| `a-propos.html` | `a-propos.html` | Recentré sur valeurs de la maquette (Solidité, Exigence...) |
| `zone-intervention.html` | `zone-intervention.html` | Ajout Google Maps iframe client |
| `contact.html` | `contact.html` | Nouveau formulaire avec services étendus |
| `mentions-legales.html` | `mentions-legales.html` | Même contenu, nouveau design |

## 3. Pages supprimées (vs V2)

| Page V2 | Raison |
|---------|--------|
| `beton-specialites.html` | Fusionné dans "Gros œuvre" + fiches réalisations béton |

## 4. Fonctionnalités réutilisées depuis V2

- Architecture multi-pages et structure de navigation
- Textes éditoriaux des services (adaptés au ton premium)
- Textes zone d'intervention et communes
- Logique de formulaire (validation, pré-sélection service via URL)
- Pattern mobile menu (Escape, aria, overflow lock)
- Pattern scroll reveal (IntersectionObserver)
- Pattern mobile CTA sticky bar
- Données structurées Schema.org (GeneralContractor, BreadcrumbList, Service)
- SEO (meta, canonical, OG, sitemap, robots)

## 5. Nouvelle direction artistique

**Source :** `Direction_artistique.jpeg`

La maquette V3 définit une identité visuelle radicalement différente de V2 :
- Esthétique sombre dominante (fond noir #111111)
- Accent bronze/doré (#B8976A) remplace le Bleu Orion (#0044CC)
- Typographie sans-serif géométrique légère (Outfit) remplace le couple serif + sans-serif (Instrument Serif + DM Sans)
- Logo hexagonal architectural avec gradient bronze

## 6. Nouveau logo

- Logo hexagonal avec silhouette de bâtiment et gradient bronze
- 3 versions prévues : principale (symbole + texte), symbole seul, monochrome
- Implémenté en SVG (`logo.svg`) pour netteté sur tous les écrans
- Texte logo : "ORION" (regular, tracking large) + "CONSTRUCTION" (light, tracking très large, bronze)

## 7. Nouvelle palette

| Token | Hex | Usage |
|-------|-----|-------|
| `--color-dark` | #111111 | Fond principal |
| `--color-dark-surface` | #1A1A1A | Sections alternées |
| `--color-dark-elevated` | #222222 | Éléments surélevés |
| `--color-bronze` | #B8976A | Accent principal, CTA, surtitre |
| `--color-bronze-light` | #D4B896 | Hover bronze |
| `--color-bronze-dark` | #9A7B52 | Bronze sombre |
| `--color-cream` | #F5F0EB | Sections claires |
| `--color-white` | #FFFFFF | Texte sur fond sombre |

## 8. Typographie

| Élément | Police | Poids | Usage |
|---------|--------|-------|-------|
| Tout le site | Outfit | 300 (light) | Corps, descriptions, leads |
| Titres | Outfit | 300 (light) | H1, H2 — hiérarchie par taille, pas par graisse |
| Sous-titres | Outfit | 400 (regular) | H3, H4 |
| Labels/CTA | Outfit | 500 (medium) | Boutons, overlines, nav |
| Accentuation | Outfit | 600 (semibold) | Rare — données structurées uniquement |

**Principe :** La hiérarchie est créée par taille + espace + position + contraste, jamais par du texte en gras (800/900).

## 9. Hero animé

- Image plein écran (100vh) avec overlay gradient
- Animation Ken Burns : `scale(1) → scale(1.08)` + léger `translate`, 25s, alternate infinite
- Contenu : fade-in staggered (tagline 0.3s, titre 0.5s, description 0.7s, CTA 0.9s)
- Indicateur scroll animé en bas
- `prefers-reduced-motion` respecté (animations désactivées)

## 10. Services interactifs

- 5 services basés sur la maquette : Gros Œuvre, Rénovation, Extension, Piscines, Tous Corps d'État
- Layout : 3 cartes verticales (3:4) + 2 cartes horizontales (16:9)
- Descriptions et CTA directement sur les images (overlay)
- Hover : `brightness(0.6 → 0.4)` + `blur(0.5px → 0)` + `scale(1.05)` + révélation du texte
- Mobile : descriptions toujours visibles (pas de hover)
- Numérotation 01-05 en overlay translucide

## 11. Mode opératoire

7 étapes réelles du processus Orion (aucune étape inventée) :
1. Contact — 2. Sur place — 3. Devis — 4. Signature — 5. Travaux — 6. Suivi — 7. Fin de chantier

Présentation : timeline verticale avec :
- Ligne de progression animée au scroll (bronze gradient)
- Numéros dans des cercles bordurés
- Apparition staggerée des étapes (IntersectionObserver)
- `prefers-reduced-motion` respecté

## 12. Backgrounds architecturaux

SVG inline dans `section--pattern::before` :
- Tracés géométriques (rectangles, lignes, cercle) simulant un plan architectural
- Opacité 2-3% — extrêmement subtil
- Positionnement en débordement (top: -10%, right: -5%)
- Largeur 600px, non répété
- Utilisé sur : proposition de valeur, mode opératoire

## 13. Partenaires

- Composant bandeau avec défilement horizontal (`marquee` CSS, 30s linear infinite)
- Pause au hover
- Actuellement en placeholders — prêt à recevoir les vrais logos
- Logos en grayscale + brightness élevée, couleur au hover
- Aucun partenaire inventé

## 14. Instagram

- Aucun compte Instagram trouvé dans le repository
- Section non implémentée — à ajouter quand l'URL sera fournie
- Structure prévue dans styles.css (`.instagram__grid`)

## 15. Google Maps

- Iframe fourni par le client, intégré tel quel
- Filtre CSS : `grayscale(80%) brightness(0.6) contrast(1.2)` pour cohérence DA
- Hover : réduit le grayscale et augmente la luminosité
- Responsive : aspect-ratio 16/7 desktop, 4/3 mobile
- Présent sur : homepage (section zone), contact, zone-intervention

## 16. Contact / Devis

- Formulaire : Nom, Téléphone, Email, Commune, Service (6 options dont Piscines/TCE), Message
- Pré-sélection service via `?service=` dans l'URL
- Validation JS côté client en français
- Success state intégré
- CTA "Demander un devis" visible en permanence : header, hero, CTA sections, mobile sticky bar
- Numéro de téléphone : header desktop, mobile menu, CTA sections, footer
- Toutes les coordonnées : `<!-- à compléter -->` — aucune inventée

## 17. Responsive

Breakpoints testés : 430px, 768px, 1024px

| Composant | Adaptation mobile |
|-----------|------------------|
| Header | Logo + hamburger, nav masquée |
| Menu mobile | Plein écran, liens + CTA |
| Hero | Centré, boutons pleine largeur, scroll indicator masqué |
| Services | 1 colonne, descriptions visibles sans hover |
| Réalisations | 1 colonne, featured passe en 4:3 |
| Timeline | Padding réduit, numéros plus compacts |
| Map | Ratio 4:3 au lieu de 16/7 |
| Footer | 1 colonne empilée |
| Mobile CTA | Sticky bottom bar après le hero |

## 18. SEO

- `<html lang="fr">` sur toutes les pages
- `<title>` et `<meta description>` uniques par page
- Schema.org : GeneralContractor, BreadcrumbList, Service, ContactPage
- Open Graph sur toutes les pages
- `<link rel="canonical">` sur toutes les pages
- Fil d'Ariane HTML sur toutes les pages internes
- `sitemap.xml` (12 URLs)
- `robots.txt`
- Alt text descriptifs et contextualisés sur toutes les images
- Maillage interne complet (services, réalisations, contact)
- SEO local : noms de communes, Alpes-Maritimes, zone sismique 4

## 19. Accessibilité

- Skip link fonctionnel
- `.sr-only` pour contenus masqués visuellement
- `aria-label`, `aria-expanded`, `aria-hidden` sur menu mobile
- `aria-controls` sur le hamburger
- Navigation au clavier (Escape ferme le menu)
- `role="alert"` sur les messages d'erreur
- `prefers-reduced-motion` respecté (toutes animations désactivées)
- Focus visible avec outline bronze sur tous les éléments
- Contrastes validés : blanc sur #111111 ≈ 18:1, bronze sur #111111 ≈ 5.5:1
- Labels associés à chaque champ de formulaire
- Breadcrumb avec `aria-current="page"`

## 20. Performance

- `fetchpriority="high"` sur l'image hero
- `loading="lazy"` sur toutes les images sous le fold
- `width`/`height` sur les images pour éviter le CLS
- CSS minimal sans framework (~28 Ko)
- JS vanilla < 9 Ko, une seule requête
- Animations CSS via `transform` et `opacity` (GPU-accelerated)
- Google Fonts : 1 seule famille (Outfit, 4 poids)
- `font-display: swap` via Google Fonts URL
- Maps et Instagram en `loading="lazy"`
- Backdrop-filter avec fallback implicite

## 21. Éléments nécessitant encore une information du client

| Information | Où l'insérer |
|-------------|-------------|
| Numéro de téléphone | Header, footer, CTA, contact, toutes les pages |
| Adresse email | Footer, contact |
| Adresse postale | Footer, contact, mentions légales |
| SIRET | Footer, mentions légales |
| Forme juridique | Mentions légales |
| Directeur de publication | Mentions légales |
| Hébergeur du site | Mentions légales |
| Année de création | À propos, chiffres clés accueil |
| Nombre de projets réalisés | Chiffres clés accueil |
| Nom du fondateur | À propos |
| Assureur décennale + n° contrat | À propos, mentions légales |
| Assureur RC Pro + n° contrat | À propos, mentions légales |
| Qualifications (Qualibat, RGE) | À propos |
| Logos partenaires réels | Bandeau partenaires (homepage) |
| Compte Instagram | Section Instagram (homepage) |
| Témoignages clients réels | Homepage (section à créer) |
| Villes des projets réalisés | Fiches projet |
| Logo SVG définitif | Remplacer le logo.svg approximatif |

---

## Ce que ce site N'EST PAS

- Pas un template : compositions asymétriques, palette unique, interactions conçues
- Pas une copie de lab-renovation-06.fr : principes inspirés, exécution propre
- Pas un site avec de fausses informations : aucun faux chiffre, témoignage, partenaire ou certification
- Pas un site "luxe ostentatoire" : premium dans l'apparence, simple dans l'utilisation
- Pas un site inaccessible : contraste, clavier, ARIA, reduced-motion respectés
