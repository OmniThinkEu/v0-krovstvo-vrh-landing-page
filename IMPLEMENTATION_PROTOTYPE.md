# Krovstvo Vrh - Implementation Plan (Prototype)

## Project Overview

A professional landing page for **Krovstvo Vrh**, a Slovenian roofing company based in Ljubljana. The page targets older visitors seeking reliable roofing services, requiring a clean, trustworthy design with subtle animations.

---

## Technical Stack

| Technology | Purpose |
|------------|---------|
| Next.js 16 (App Router) | Framework |
| Tailwind CSS | Styling |
| shadcn/ui | UI Components |
| Lucide React | Icons |
| Inter | Typography (Google Fonts) |

---

## Design System

### Color Palette (5 Colors Max)

| Token | Hex | Usage |
|-------|-----|-------|
| Primary | `#1E3A5F` | Deep blue - headers, CTA buttons, trust elements |
| Secondary | `#D97706` | Warm amber/orange - accents, highlights, hover states |
| Background | `#FFFFFF` | Page background |
| Muted | `#F8FAFC` | Alternating section backgrounds |
| Foreground | `#1E293B` | Body text |

### Typography

- **Font Family:** Inter (sans-serif)
- **Headings:** Bold, tracking-tight
- **Body:** Regular weight, leading-relaxed (1.5-1.6 line-height)

### Animation Guidelines

Target audience: Older visitors seeking roofing services. Animations must be:
- Subtle and professional
- Not distracting or disorienting
- Enhance trust and perceived quality

**Approved Animations:**
- Fade-in on scroll (sections appear gently)
- Subtle hover states on buttons/cards (scale 1.02, shadow increase)
- Smooth scroll behavior for anchor navigation
- Counter animation for statistics (years experience, projects completed)

**Avoided:**
- Parallax effects
- Complex staggered animations
- Auto-playing carousels
- Bouncing or pulsing elements

---

## Page Structure & Components

### 1. Sticky Header

**File:** `components/header.tsx`

**Features:**
- Logo (text-based: "Krovstvo Vrh")
- Navigation links (anchor scroll):
  - Domov (scroll to top)
  - Storitve (scroll to services)
  - Pogosta vprašanja (scroll to FAQ)
  - Kontakt (scroll to form)
- CTA Button: "Brezplačna ponudba"
- Mobile hamburger menu
- Background blur on scroll

**Animation:** Header background transitions from transparent to solid on scroll.

---

### 2. Hero Section

**File:** `components/hero.tsx`

**Layout:** Two-column (text left, image placeholder right)

**Content:**
- Headline: "Zanesljiva streha za vaš dom"
- Subheadline: Supporting text about 20+ years experience
- CTA Buttons: Primary "Pridobite brezplačno ponudbo" + Secondary "Naše storitve"
- Trust badges row below

**Image:** Placeholder rectangle (aspect-ratio 4:3, ~500x375px visual)

**Animation:** Fade-in-up on load (once, subtle)

---

### 3. Trust Bar

**File:** `components/trust-bar.tsx`

**Layout:** Horizontal row of partner logos

**Content:**
- Bramac (text badge placeholder)
- Tondach (text badge placeholder)
- Gerard (text badge placeholder)
- Additional partner slots

**Animation:** None (static trust element)

---

### 4. Core Services Grid

**File:** `components/services-grid.tsx`

**Layout:** 3-column grid (responsive: 1 col mobile, 2 col tablet, 3 col desktop)

**Cards (6 total):**
1. Montaža novih streh (icon: Home)
2. Obnova in sanacija (icon: Wrench)
3. Zamenjava kritine (icon: RefreshCw)
4. Izolacija in zateplitev (icon: Thermometer)
5. Popravila in vzdrževanje (icon: Tool)
6. Odvod vode - žlebovi (icon: Droplets)

**Card Structure:**
- Icon (Lucide, 40x40)
- Title
- Short description (2-3 lines)
- "Več o storitvi" link (anchor to detailed section)

**Animation:** Fade-in-up on scroll (staggered, 100ms delay between cards)

---

### 5. In-Depth Services Section

**File:** `components/services-detail.tsx`

**Layout:** Alternating rows (image left/text right, then text left/image right)

**Services Covered:**
1. Montaža novih streh
2. Obnova strehe
3. Zamenjava kritine

**Row Structure:**
- Image placeholder (16:9 aspect ratio, ~600x340px visual)
- Content block:
  - Title
  - Description paragraph
  - Bullet points (3-4 benefits)
  - CTA link

**Animation:** Fade-in on scroll per row

---

### 6. Why Choose Us (Benefits)

**File:** `components/benefits.tsx`

**Layout:** 4-column grid with icons

**Content:**
- 20+ let izkušenj (icon: Award)
- Brezplačen ogled (icon: Eye)
- Garancija na delo (icon: Shield)
- Lokalni strokovnjaki (icon: MapPin)

**Animation:** Counter animation for "20+" (counts up from 0)

---

### 7. Testimonials Section

**File:** `components/testimonials.tsx`

**Layout:** 3-column card grid

**Card Structure:**
- Star rating (5 stars)
- Review text (placeholder)
- Customer name
- Location

**Sample Reviews (placeholder):**
1. Marija K. - Ljubljana
2. Janez P. - Domžale
3. Ana M. - Kamnik

**Animation:** Subtle hover lift on cards

---

### 8. FAQ Accordion

**File:** `components/faq.tsx`

**Component:** shadcn/ui Accordion

**Questions (6 items):**
1. Koliko časa traja montaža nove strehe?
2. Ali ponujate garancijo na delo?
3. Kakšne materiale uporabljate?
4. Ali lahko obiščete moj dom za ogled?
5. Kako pridobim ponudbo?
6. Ali delate tudi v slabem vremenu?

**Animation:** Accordion expand/collapse (built-in)

---

### 9. Lead Capture Form

**File:** `components/contact-form.tsx`

**Fields:**
- Ime in priimek (text, required)
- E-pošta (email, required)
- Telefon (tel, required)
- Vrsta storitve (select dropdown)
- Sporočilo (textarea, optional)
- Checkbox: Strinjam se s politiko zasebnosti

**Submit Button:** "Pošlji povpraševanje"

**Note:** Frontend only - no backend integration yet. Form validates but shows success message on submit.

**Animation:** None (trust element - should feel stable)

---

### 10. Footer

**File:** `components/footer.tsx`

**Layout:** 4-column grid

**Columns:**
1. **Logo & Description**
   - "Krovstvo Vrh"
   - Company tagline

2. **Storitve (links)**
   - Montaža streh
   - Obnova strehe
   - Zamenjava kritine
   - Izolacija

3. **Kontakt**
   - Address: Dunajska cesta 123, 1000 Ljubljana
   - Phone: +386 1 234 5678 (placeholder)
   - Email: info@krovstvo-vrh.si (placeholder)

4. **Delovni čas**
   - Mon-Fri: 7:00 - 17:00
   - Sat: 8:00 - 12:00
   - Sun: Zaprto

**Bottom Bar:**
- Copyright 2024
- Links: Politika zasebnosti | Piškotki (placeholder pages with lorem ipsum)

---

## File Structure

```
app/
├── layout.tsx          # Root layout with Inter font, metadata
├── page.tsx            # Main landing page (assembles components)
├── globals.css         # Design tokens, custom styles
├── zasebnost/
│   └── page.tsx        # Privacy policy (lorem ipsum placeholder)
└── piskotki/
    └── page.tsx        # Cookie policy (lorem ipsum placeholder)

components/
├── header.tsx
├── hero.tsx
├── trust-bar.tsx
├── services-grid.tsx
├── services-detail.tsx
├── benefits.tsx
├── testimonials.tsx
├── faq.tsx
├── contact-form.tsx
├── footer.tsx
└── ui/                 # shadcn components (existing)
```

---

## SEO & Metadata

**Title:** Krovstvo Vrh | Strokovnjaki za strehe v Ljubljani

**Description:** Zaupajte svojo streho strokovnjakom z več kot 20-letnimi izkušnjami. Montaža, obnova in vzdrževanje streh v Ljubljani in okolici. Brezplačen ogled in ponudba.

**Keywords (implicit):** krovstvo, streha, Ljubljana, montaža strehe, obnova strehe, krovci

**Open Graph:**
- og:title
- og:description
- og:type: website
- og:locale: sl_SI

**Additional:**
- viewport meta (responsive)
- theme-color: #1E3A5F
- lang="sl" on html element

---

## Implementation Order

| Step | Task | Components/Files |
|------|------|------------------|
| 1 | Setup design tokens & fonts | `globals.css`, `layout.tsx` |
| 2 | Build Header | `header.tsx` |
| 3 | Build Hero Section | `hero.tsx` |
| 4 | Build Trust Bar | `trust-bar.tsx` |
| 5 | Build Services Grid | `services-grid.tsx` |
| 6 | Build In-Depth Services | `services-detail.tsx` |
| 7 | Build Benefits Section | `benefits.tsx` |
| 8 | Build Testimonials | `testimonials.tsx` |
| 9 | Build FAQ | `faq.tsx` |
| 10 | Build Contact Form | `contact-form.tsx` |
| 11 | Build Footer | `footer.tsx` |
| 12 | Assemble Page | `page.tsx` |
| 13 | Add Placeholder Pages | `zasebnost/page.tsx`, `piskotki/page.tsx` |
| 14 | Add Animations | All components |
| 15 | Responsive Testing & Polish | All files |

---

## Placeholder Content Notes

- **Images:** Gray placeholder boxes with icon and "Slika" text
- **Testimonials:** Real-looking but fictional reviews
- **Address:** Dunajska cesta 123, 1000 Ljubljana
- **Phone:** +386 1 234 5678
- **Email:** info@krovstvo-vrh.si
- **Privacy/Cookie Pages:** Lorem ipsum content

---

## Future Development (Out of Scope)

- Form backend integration
- Analytics/tracking
- Additional service detail pages
- Real images and content
- Multi-language support
- Blog/news section

---

## Approval

This plan is ready for implementation upon approval. All prototype elements are frontend-only with placeholder content as specified.
