# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a personal portfolio website built with Nuxt 3, featuring a modern dark theme with glassmorphic design elements. The site includes a main portfolio page with sections for hero, tech stack, about, open source projects, blog preview, and footer, plus a fully functional blog system.

## Technology Stack

- **Framework**: Nuxt 3 (Vue 3)
- **Styling**: TailwindCSS with custom animations and glassmorphic effects
- **Content**: Nuxt Content for markdown-based blog posts
- **Icons**: Nuxt Icon
- **Database**: SQLite (better-sqlite3) for potential data storage
- **Typography**: Inter font from Google Fonts

## Development Commands

```bash
# Install dependencies
npm install

# Start development server (http://localhost:3000)
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Generate static site
npm run generate
```

## Architecture & File Structure

### Core Application Structure
- `app.vue` - Root component with minimal layout and black background
- `nuxt.config.ts` - Main configuration with modules for TailwindCSS, Content, and Icon
- `tailwind.config.js` - Custom Tailwind configuration with extended colors, animations, and typography plugin

### Pages & Routing
- `pages/index.vue` - Main portfolio page composed of reusable components
- `pages/blog/index.vue` - Blog listing page with grid layout and filtering
- `pages/blog/[...slug].vue` - Dynamic blog post pages with full article rendering

### Component Architecture
Components are organized by function in the `components/` directory:
- `HeroSection.vue` - Landing section with gradient text and animations
- `TechStack.vue` - Technology showcase
- `AboutSection.vue` - Personal/professional information
- `OpenSource.vue` - Open source projects display
- `BlogPreview.vue` - Recent blog posts preview
- `Footer.vue` - Site footer

### Content Management
- `content/blog/` - Markdown blog posts with frontmatter
- Powered by Nuxt Content v3 with GitHub Dark syntax highlighting
- Uses `queryCollection()` composable with `useAsyncData()` for content queries
- Key methods: `.all()`, `.first()`, `.where()`, `.order()`, `.limit()`
- Query syntax: `.where("field", "operator", value)` with operators like `"="`, `"<>"`, `"!="` 
- Sorting: `.order("field", "ASC|DESC")` instead of `.sort()`
- Blog posts support tags, dates, descriptions, and full markdown rendering
- Content rendered with `<ContentRenderer>` component
- Navigation between posts implemented with manual array indexing after fetching all posts

### Styling System
- `assets/css/main.css` - Global styles with custom CSS classes:
  - `.gradient-text` - Animated gradient text effect
  - `.glass-card` - Glassmorphic card design with hover effects
  - `.glow-effect` - Glowing animation for interactive elements
  - Custom animations: float, gradient-shift, glow-pulse, bounce-slow
- Dark theme with blue/purple/pink gradient accents
- Custom scrollbar styling and focus states for accessibility

## Key Features

### Blog System
- Markdown-based content management via Nuxt Content
- Dynamic routing for individual blog posts
- Author info and navigation between posts
- SEO meta tags and Open Graph support
- Responsive grid layout with hover effects

### Design System
- Consistent glassmorphic design language
- Custom CSS animations and hover states
- Responsive design with mobile-first approach
- Accessibility considerations (focus states, semantic HTML)

### Content Strategy
- Blog posts stored as markdown in `content/blog/`
- Frontmatter includes: title, description, date, tags
- Automatic date formatting and sorting

## Development Notes

- TypeScript configuration extends from `.nuxt/tsconfig.json`
- TailwindCSS includes typography plugin for markdown content
- Content highlighting uses GitHub Dark theme
- Font loading optimized with Google Fonts display=swap
- Custom color palette extends default Tailwind with gray-950
