# Implementation Plan - Website Improvements

This document outlines the changes to implement three key enhancements:
1. **Fix Animation Flash on Storitve (Services) Page:** Fix the issue where text on the Services page loads fully visible before starting the fade-up entry animation.
2. **Implement Smooth Page Transitions:** Create a global page-load transition (fade-in & slide-up entry effect) when navigating between routes.
3. **Enhance Projekti (Projects) Page Banner:** Replace the light grey banner on the Projects page with the premium, styled blue brand background (`bg-primary`) to match the Services and FAQ pages.

---

## 1. Fix Animation Flash on Storitve Page

### Current Issue
In `app/storitve/page.tsx`, the top banner elements use `animate-in fade-in slide-in-from-bottom` utility classes. Since the page starts as a server component, the browser renders the static markup (with opacity 1) before the CSS animation framework initializes, causing a brief "flash" of the fully-rendered text before it snaps back to start the entry animation.

### Solution
- Convert `app/storitve/page.tsx` to a Client Component (`"use client"`).
- Manage an animation `stage` state, similar to the Hero component:
  - `stage = 0` (initial state: hidden, offset via CSS).
  - `stage = 1` (immediately on mount, triggers the first animation).
  - `stage = 2` (triggers the second animation after a small delay).
  - `stage = 3` (triggers the third animation after a small delay).
- Use the existing `.hero-initial` and `.hero-animate` CSS class helpers defined in `globals.css` to prevent flashing.

---

## 2. Implement Smooth Page Transitions

### Solution
- Create a client-side wrapper component `components/page-transition.tsx`.
- The wrapper will observe the current Next.js `pathname` using `usePathname()`.
- On change of the pathname (route load), reset a transition state `stage = 0` (opacity 0, small Y translate) and immediately transition to `stage = 1` (opacity 1, Y translate 0).
- Integrate `<PageTransition>` inside `app/layout.tsx` to wrap `{children}`:
  ```tsx
  <body className="font-sans antialiased">
    <PageTransition>
      {children}
    </PageTransition>
    <Analytics />
  </body>
  ```
- This ensures all routing actions trigger an elegant, smooth fade-in and slide-up transition without interrupting Next.js soft navigation or data fetching.

---

## 3. Enhance Projekti Page Banner

### Current Issue
The top banner of `/projekti` (`app/projekti/page.tsx`) uses `bg-primary/5` (a light grey background) which looks disconnected from the main dark blue brand theme found in the Services and FAQ headers.

### Solution
- Update the background of the top `<section>` to `bg-primary` (dark blue).
- Style the text color to `text-white` and `text-white/80` for high contrast and readability.
- Add the absolute-positioned decorative glow circles to match the Services page banner:
  - Top right: `w-96 h-96 bg-accent/20 rounded-full blur-3xl opacity-50`
  - Bottom left: `w-80 h-80 bg-background/10 rounded-full blur-3xl opacity-30`
- Adjust the layout padding and text styling to match `/storitve` and `/faq` pages.

---

## Implementation Steps

### Step 1: Create PageTransition Component
File: `components/page-transition.tsx`
Create a React wrapper component that uses React state and CSS transitions to slide up and fade in content when mounting.

### Step 2: Integrate PageTransition in layout
File: `app/layout.tsx`
Wrap `{children}` with the newly created `<PageTransition>` component.

### Step 3: Fix animation flash in `/storitve`
File: `app/storitve/page.tsx`
Convert the page to `"use client"`, introduce state-driven stages, and replace Tailwind's default `animate-in` with `.hero-initial` and `.hero-animate` classes to prevent hydration flickers.

### Step 4: Update `/projekti` page banner
File: `app/projekti/page.tsx`
Replace the background styling, text coloring, and add decorative brand glow elements.

### Step 5: Local Validation
Run `npm run build` locally to verify TypeScript compiling, route compiling, and ensure no build or hydration errors are present.
