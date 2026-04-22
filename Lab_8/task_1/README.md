# Task 1 — Next.js Blog with SSR and SSG

## Overview

A blog application demonstrating different Next.js rendering strategies:
- **SSG (Static Site Generation)** for the home page and blog posts
- **ISR (Incremental Static Regeneration)** for automatic content updates
- **SSR (Server-Side Rendering)** for the user profile page
- **Static pages** for the About page

## Features

### Pages

1. **Home Page** (`/`)
   - Lists all blog posts
   - Uses SSG with ISR (revalidate: 60s)
   - Navigation to other pages

2. **Blog Post Pages** (`/posts/[id]`)
   - Dynamic routes for individual posts
   - Author information display
   - Tags and metadata
   - Uses SSG with ISR and `generateStaticParams`

3. **Profile Page** (`/profile`)
   - User-specific content
   - Real-time timestamp showing SSR
   - Uses `dynamic = "force-dynamic"` for SSR

4. **About Page** (`/about`)
   - Static content about the blog
   - Pure SSG (no revalidation needed)

## Technical Implementation

### Rendering Strategies

**SSG (Static Site Generation)**
```typescript
export const revalidate = 60; // ISR: regenerate every 60 seconds
```

**SSR (Server-Side Rendering)**
```typescript
export const dynamic = "force-dynamic"; // Force SSR on every request
```

**Dynamic Routes**
```typescript
export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map((post) => ({ id: post.id }));
}
```

### Data Layer

- `src/lib/api.ts` - Mock data fetching functions
- `src/types/index.ts` - TypeScript interfaces
- Simulated async delays for realistic behavior

## Installation

```bash
cd Lab_8/task_1
npm install
```

## Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Build

```bash
npm run build
npm start
```

## Project Structure

```
task_1/
├── src/
│   ├── app/
│   │   ├── page.tsx              # Home (SSG + ISR)
│   │   ├── about/
│   │   │   └── page.tsx          # About (SSG)
│   │   ├── posts/
│   │   │   └── [id]/
│   │   │       └── page.tsx      # Post detail (SSG + ISR)
│   │   ├── profile/
│   │   │   └── page.tsx          # Profile (SSR)
│   │   └── not-found.tsx         # 404 page
│   ├── lib/
│   │   └── api.ts                # Data fetching
│   └── types/
│       └── index.ts              # TypeScript types
├── package.json
└── README.md
```

## Key Concepts

### SSG vs SSR vs ISR

| Strategy | When Renders | Data Freshness | Performance | Use Case |
|----------|-------------|----------------|-------------|----------|
| SSG | Build time | Stale until rebuild | Fastest | Static content |
| SSR | Request time | Always fresh | Slower | User-specific data |
| ISR | Build + periodic | Fresh after interval | Fast | Semi-dynamic content |

### When to Use Each

- **SSG**: Blog posts, documentation, marketing pages
- **SSR**: User dashboards, personalized content, real-time data
- **ISR**: E-commerce products, news articles, frequently updated content

## Technologies

- Next.js 16 (App Router)
- TypeScript
- Tailwind CSS
- React 19

## Learning Outcomes

After completing this task, you will understand:
- How to implement SSG with `generateStaticParams`
- How to use ISR with the `revalidate` option
- How to force SSR with `dynamic = "force-dynamic"`
- When to choose each rendering strategy
- How to structure a Next.js application with mixed rendering modes
