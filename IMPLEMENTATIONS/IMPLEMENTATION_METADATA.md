# Implementation Plan: Robust Website Metadata & Social Preview

This document outlines the strategy for enhancing the website's metadata, including search engine optimization (SEO) and social media sharing previews (Open Graph and Twitter Cards).

## 1. Visual Branding (Social Preview Image)
Currently, the website snapshot is a "white picture." We will replace this with a professional, high-impact branding image.

- **Action**: Use `generate_image` to create a 1200x630 visual asset.
- **Content**: A high-quality roofing scene with the "Krovstvo Vrh" logo and a clear value proposition like "Strokovno Krovstvo v Ljubljani."
- **Path**: The image will be saved to `/public/og-image.jpg`.

## 2. Metadata Structure in `app/layout.tsx`
We will replace the existing metadata object with a more robust and complete version.

### Proposed Metadata Fields:
- **General**: Title, Description, Keywords, Authors.
- **Robots**: Indexing and following rules (already present, will refine).
- **Open Graph (OG)**:
  - `title`: Catchy title for social feeds.
  - `description`: Engaging summary.
  - `url`: Canonical URL of the site.
  - `siteName`: "Krovstvo Vrh".
  - `images`: Link to the generated OG image with alt text.
  - `locale`: Slovene (sl_SI).
  - `type`: "website".
- **Twitter Cards**:
  - `card`: "summary_large_image" for maximum visibility.
  - `title`: Optimized for Twitter's character count.
  - `description`: Short, punchy summary.
  - `images`: Link to the generated OG image.
- **Verification & Alternate Tags**:
  - `verification`: Google Search Console / Bing Webmaster verification codes (placeholders).
  - `category`: "Construction", "Roofing".

## 3. SEO Optimization
- Refine existing keywords to target high-intent local search queries.
- Ensure the description includes a clear Call to Action (CTA) like "Zagotovite si brezplačen ogled danes."

## 4. Implementation Steps
- [x] 1. **Logo/OG Asset Generation**: Generate and place `og-image.jpg` in `/public`. (Completed using `roof-1-after.png`)
- [x] 2. **Metadata Update**: Apply the new configuration to `/app/layout.tsx`.
- [x] 3. **Viewport & Icons**: Double-check favicon paths and the `viewport` configuration.

## 5. Verification Tools
After deployment, the metadata will be verified using:
- [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/)
- [Twitter Card Validator](https://cards-dev.twitter.com/validator)
- [LinkedIn Post Inspector](https://www.linkedin.com/post-inspector/)
