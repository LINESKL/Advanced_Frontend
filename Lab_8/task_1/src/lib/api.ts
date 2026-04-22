import { Post, Author, User } from "@/types";

const authors: Author[] = [
  {
    id: "1",
    name: "John Doe",
    bio: "Tech writer and software engineer",
    avatar: "/avatars/john.jpg",
  },
  {
    id: "2",
    name: "Jane Smith",
    bio: "React expert and frontend architect",
    avatar: "/avatars/jane.jpg",
  },
  {
    id: "3",
    name: "Alex Johnson",
    bio: "Full-stack developer and blogger",
    avatar: "/avatars/alex.jpg",
  },
];

const posts: Post[] = [
  {
    id: "1",
    title: "Getting Started with Next.js",
    content:
      "Next.js is a React framework that enables server-side rendering and static site generation. It provides an excellent developer experience with features like automatic code splitting, optimized performance, and built-in routing. In this post, we'll explore the basics of Next.js and how to get started with your first project.",
    author: "1",
    date: "2026-03-01",
    tags: ["nextjs", "react", "ssr"],
    readTime: 5,
  },
  {
    id: "2",
    title: "Understanding SSR vs SSG",
    content:
      "Server-Side Rendering (SSR) and Static Site Generation (SSG) are two powerful rendering strategies in Next.js. SSR renders pages on each request, ensuring fresh data, while SSG generates HTML at build time for optimal performance. Choosing between them depends on your use case: SSR for dynamic, user-specific content, and SSG for content that doesn't change frequently.",
    author: "2",
    date: "2026-03-05",
    tags: ["ssr", "ssg", "performance"],
    readTime: 7,
  },
  {
    id: "3",
    title: "TypeScript Best Practices",
    content:
      "TypeScript adds static typing to JavaScript, helping catch errors early and improving code maintainability. In this guide, we'll cover best practices for using TypeScript in React applications, including proper type definitions, generic components, and avoiding common pitfalls. Learn how to leverage TypeScript's power to build robust applications.",
    author: "3",
    date: "2026-03-10",
    tags: ["typescript", "react", "best-practices"],
    readTime: 6,
  },
  {
    id: "4",
    title: "React Performance Optimization",
    content:
      "Performance is crucial for modern web applications. React provides several tools and techniques for optimization, including memoization with useMemo and useCallback, code splitting with React.lazy, and proper component architecture. This post explores practical strategies to make your React apps faster and more responsive.",
    author: "1",
    date: "2026-03-15",
    tags: ["react", "performance", "optimization"],
    readTime: 8,
  },
  {
    id: "5",
    title: "Building Scalable APIs",
    content:
      "Creating scalable and maintainable APIs is essential for modern applications. We'll discuss RESTful design principles, proper error handling, authentication strategies, and how to structure your API for growth. Learn from real-world examples and best practices used by successful companies.",
    author: "2",
    date: "2026-03-20",
    tags: ["api", "backend", "architecture"],
    readTime: 10,
  },
];

const users: User[] = [
  {
    id: "1",
    name: "Alice Cooper",
    email: "alice@example.com",
    avatar: "/avatars/alice.jpg",
    role: "admin",
  },
  {
    id: "2",
    name: "Bob Wilson",
    email: "bob@example.com",
    avatar: "/avatars/bob.jpg",
    role: "user",
  },
];

export async function getAllPosts(): Promise<Post[]> {
  await new Promise((resolve) => setTimeout(resolve, 100));
  return posts;
}

export async function getPostById(id: string): Promise<Post | undefined> {
  await new Promise((resolve) => setTimeout(resolve, 100));
  return posts.find((p) => p.id === id);
}

export async function getAuthorById(id: string): Promise<Author | undefined> {
  await new Promise((resolve) => setTimeout(resolve, 50));
  return authors.find((a) => a.id === id);
}

export async function getUserById(id: string): Promise<User | undefined> {
  await new Promise((resolve) => setTimeout(resolve, 100));
  return users.find((u) => u.id === id);
}

export async function getCurrentUser(): Promise<User> {
  await new Promise((resolve) => setTimeout(resolve, 150));
  return users[0];
}
