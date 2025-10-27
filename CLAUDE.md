# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a sophisticated luxury tile design consultation website for Marianna Ouzdanova, built with Next.js 15 and TypeScript. The site features an elegant design with subtle animations, an interactive style quiz, portfolio filtering, and integration with Architessa tile showrooms across 8 cities.

## Commands

### Development
```bash
npm run dev          # Start development server with Turbopack (http://localhost:3000)
npm run build        # Create production build
npm start            # Start production server
npm run lint         # Run ESLint
```

### Testing Changes
- Development server hot-reloads on file changes
- Build locally before deployment to catch errors: `npm run build`

## Architecture

### Next.js App Router Structure
This project uses Next.js 15 with the App Router paradigm (not Pages Router):
- **app/**: Route segments and pages (not src/)
- **components/**: Reusable React components organized by domain
- **lib/**: Shared utilities and data sources

### Key Architectural Patterns

**Data Management**: All portfolio projects, quiz questions, and showroom data live in `lib/data.ts`. This is a **single source of truth** for content. To add/edit content, modify the exported arrays in this file.

**Component Organization**:
- `components/home/`: Homepage-specific components (Hero, ProcessSteps, FeaturedProjects, WhyWorkWithMe)
- `components/layout/`: Site-wide components (Header, Footer)
- `components/ChatbotWidget.tsx`: Floating chat widget with iframe to external AI assistant

**Route Structure**:
- `/` - Homepage with hero, process, featured projects
- `/about` - About Marianna page
- `/portfolio` - Filterable project gallery (filter by room type and style)
- `/services` - Three service tiers with pricing
- `/learn` - Educational content about tiles and design
- `/quiz` - 5-question interactive style quiz with personalized results
- `/contact` - Contact form with showroom locations

### Styling System

**Design Tokens** (defined in `tailwind.config.ts`):
```
alabaster: #EBEBE6        // Backgrounds, light text
urobilin: #E2AF1D          // Accent gold
philippine-gold: #AE720C   // Primary gold (buttons, highlights)
dark-bronze: #824B07       // Hover states
raisin-black: #29241D      // Primary text, dark elements
```

**Typography**:
- Headlines: Playfair Display (serif) - loaded via Google Fonts
- Body: Inter (sans-serif) - loaded via Google Fonts
- Applied via CSS variables in `app/layout.tsx`

**Animation Philosophy**: Subtle, elegant animations using Framer Motion. Avoid jarring or excessive motion. Use `initial`, `animate`, and `exit` props for enter/exit animations.

### Client vs Server Components

**Default**: All components are Server Components unless marked with `'use client'`

**Client Components** (require `'use client'` directive):
- Components using React hooks (useState, useEffect, etc.)
- Components with event handlers (onClick, onChange, etc.)
- Components using Framer Motion animations
- Examples: `ChatbotWidget.tsx`, `components/home/FeaturedProjects.tsx`

**Server Components** (no directive needed):
- Static pages and layouts
- Components that only fetch/display data
- Examples: Most page.tsx files, Footer, parts of Header

### Path Aliases

Use `@/*` to reference root-level imports:
```typescript
import Header from '@/components/layout/Header'
import { projects } from '@/lib/data'
```

## Working with Content

### Adding a Portfolio Project

Edit `lib/data.ts` and add to the `projects` array:

```typescript
{
  id: '4',
  title: 'Project Title',
  slug: 'url-friendly-slug',
  category: 'Kitchen', // or 'Bathroom' | 'Fireplace' | 'Backsplash' | 'Laundry Room'
  style: 'Farmhouse', // or 'Coastal' | 'Minimalist & Modern' | 'Mid-Century Modern' | 'Bohemian'
  materials: ['Porcelain', 'Glass'],
  description: 'Brief overview...',
  challenge: 'What problem needed solving...',
  solution: 'How we solved it...',
  images: {
    before: '/images/before.jpg',  // Optional
    after: '/images/after.jpg',     // Required
    details: ['/images/detail1.jpg', '/images/detail2.jpg']
  }
}
```

**Important**: Place images in `/public/images/` directory. Reference them as `/images/filename.jpg` (not `/public/images/`).

### Adding a Showroom Location

Edit `lib/data.ts` and add to the `showrooms` array:

```typescript
{
  city: 'City Name',
  state: 'ST',
  address: '123 Street, City, ST 12345',
  phone: '(123) 456-7890'
}
```

### Modifying Quiz Questions

Quiz questions are in `lib/data.ts` under `quizQuestions`. Each question has:
- `id`: Unique identifier
- `question`: Text prompt
- `options`: Array of answers
  - `text`: Display text
  - `style`: Which design style this answer indicates
  - `image`: Visual reference (optional)

## Image Handling

### Next.js Image Component
Always use `next/image` for images (not `<img>`):

```typescript
import Image from 'next/image'

<Image
  src="/images/example.jpg"
  alt="Descriptive alt text"
  width={800}
  height={600}
  className="..."
/>
```

### Image Organization
- Store all images in `/public/images/`
- Reference as `/images/filename.jpg` in code
- Use descriptive filenames
- Provide meaningful alt text for accessibility

## Design System Guidelines

### Color Usage
- **alabaster**: Page backgrounds, light text on dark backgrounds
- **philippine-gold**: Primary CTAs, links, highlights
- **dark-bronze**: Hover states on gold elements
- **raisin-black**: Body text, dark UI elements
- **urobilin**: Accent sparingly (not primary)

### Spacing
- Follow 8px grid system (use Tailwind's default spacing scale)
- Custom large spacing: `128` (32rem) and `144` (36rem) available

### Responsive Design
- Mobile-first: Design for small screens, enhance for larger
- Key breakpoints: `sm:640px`, `md:768px`, `lg:1024px`, `xl:1280px`, `2xl:1536px`
- Test all features on mobile before desktop

## AI Chatbot Integration

The `ChatbotWidget.tsx` component embeds an external AI assistant via iframe:
- URL: `https://marianna.aiproassistant.ai/`
- Appears as a floating button in bottom-right corner
- Opens in an iPhone-styled modal window
- Uses Framer Motion for smooth open/close animations

**If modifying**: Ensure the iframe sandbox allows microphone/camera permissions for AI features.

## Important Technical Notes

### TypeScript Configuration
- Strict mode enabled
- Path alias `@/*` maps to project root
- Target: ES2017

### Next.js 15 Specifics
- Uses Turbopack in development (faster than webpack)
- React 19 with modern features
- Server Components by default (mark client components explicitly)

### Deployment
- Optimized for Vercel (zero-config deployment)
- Alternative platforms: Netlify, AWS Amplify
- Build output: `.next/` directory

## Conventions

### File Naming
- React components: PascalCase (e.g., `Hero.tsx`, `FeaturedProjects.tsx`)
- Utilities/data: camelCase (e.g., `data.ts`)
- Pages: lowercase with hyphens in folders (e.g., `app/learn/page.tsx`)

### Component Structure
```typescript
'use client' // Only if using hooks/interactivity

import { /* dependencies */ } from 'library'

export default function ComponentName() {
  // Component logic
  return (
    // JSX
  )
}
```

### CSS Classes
- Use Tailwind utility classes
- Custom classes in `globals.css` only when necessary
- Prefer `className` over inline styles
- Use `clsx` or `tailwind-merge` for conditional classes

## Common Patterns

### Animated Section Entrance
```typescript
import { motion } from 'framer-motion'

<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
>
  {/* Content */}
</motion.div>
```

### Conditional Rendering
```typescript
{isVisible && <Component />}
{condition ? <ComponentA /> : <ComponentB />}
```

### Array Mapping
```typescript
{projects.map((project) => (
  <ProjectCard key={project.id} project={project} />
))}
```

## Accessibility Requirements

- Maintain WCAG 2.1 AA compliance
- Use semantic HTML (`<nav>`, `<main>`, `<article>`, etc.)
- Provide `alt` text for all images
- Ensure keyboard navigation works
- Test color contrast with design tokens
- Add `aria-label` to icon-only buttons

## Performance Considerations

- Images auto-optimized by Next.js Image component
- Code-split by route automatically
- Lazy load off-screen content when appropriate
- Minimize client-side JavaScript (prefer Server Components)
- Use Framer Motion sparingly (only where animation adds value)