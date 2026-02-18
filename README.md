# Enchanted Frame (Zaczarowany Kadr) - Photography Portfolio

A modern, responsive photography portfolio built with a focus on performance, SEO, and high-end visual storytelling.

🔗 **Live Demo:** [https://zaczarowanykadr.pl/](https://zaczarowanykadr.pl/)

---

## 🛠 Tech Stack

* **Framework:** Next.js 14 (App Router)
* **Language:** TypeScript
* **Styling:** Tailwind CSS
* **Animations:** Framer Motion
* **Forms:** React Hook Form + Zod (Validation)
* **Backend/CMS:** Sanity.io

## 🌟 Key Technical Features

1. **Image Optimization & Performance:**
   Utilized the `next/image` component and `blur DataURL` placeholders to ensure lightning-fast gallery loading and prevent Cumulative Layout Shift (CLS).

2. **Advanced Multi-step Forms:**
   Implemented a custom multi-step contact form (`MultiStepForm.tsx`) with full TypeScript typing and robust client/server-side validation using Zod.

3. **Interactive User Experience:**
   Created unique UI components like `RetroLens` and `HeroCarousel` to provide an engaging and immersive experience for visitors.

4. **Clean Code & SEO Excellence:**
   Focused on semantic HTML and advanced metadata optimization using Next.js Metadata API and Schema.org structured data.

---
   📸 The Performance Challenge (Optimization)
One of the biggest challenges was handling high-resolution photography (files up to 10MB) without compromising page load speed.

Cloudinary Integration: Offloaded image storage and processing to Cloudinary, using their dynamic transformation API to serve properly sized WebP/AVIF formats.

Next.js Image + Blur: Implemented placeholder="blur" for all gallery items to maintain a high-end feel even on slower connections.

Result: Achieved a significant reduction in LCP (Largest Contentful Paint) while maintaining crisp visual quality.

🏗️ Content Management
Sanity CMS: Custom schemas built for the photographer to easily manage blog posts and gallery categories without touching the code.

---
Treść wiadomości Gemini
To genialny pomysł. W projektach wizualnych (fotografia) SEO to nie tylko dodatek, to fundament, bo roboty Google nie "widzą" zdjęć tak jak my – widzą tylko kod, który im podasz.

Dodanie sekcji o SEO w README pokazuje, że nie jesteś tylko "koderem od UI", ale rozumiesz biznesowy aspekt tworzenia stron.

Oto jak możesz to profesjonalnie opisać w swoim README. Proponuję dodać nową sekcję lub rozbudować istniejącą:

🔍 Search Engine Optimization (SEO) & Accessibility
To ensure maximum visibility and a great user experience, I implemented a comprehensive SEO strategy:

Semantic HTML: Used proper header hierarchy and descriptive tags to help search engines understand the content structure.

Dynamic Metadata API: Leveraged Next.js 14 Metadata API to generate unique titles and descriptions for every page and blog post.

Automated Image Alts: Integrated a system where alt texts are fetched directly from Sanity CMS, ensuring every high-resolution image is accessible to screen readers and indexable by Google Images.

JSON-LD Structured Data: Implemented Schema.org (e.g., ImageGallery, ProfessionalService, BreadcrumbList) to enable rich snippets in search results.

Performance-Driven SEO: Optimized Core Web Vitals (LCP/CLS) using Cloudinary and Next.js Image to ensure a ranking boost from Google’s page experience signals.
---

## 🚀 Getting Started (Local Development)

Follow these steps to set up the project on your local machine:

### 1. Clone the repository
```bash
git clone [https://github.com/sebastian-dettlaff-dev/zaczarowany-kadr.git](https://github.com/sebastian-dettlaff-dev/zaczarowany-kadr.git)
cd zaczarowany-kadr
```
### 2. Install dependencies
```bash
npm install
```
### 3. Configure environment variables
```bash
cp .env.example .env.local
```
### 4. Run the development server
```bash
npm run dev
The application will be available at: http://localhost:3000
```
###
 
