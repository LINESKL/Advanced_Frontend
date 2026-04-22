import { Post, Author, User, Notification, Analytics } from "@/types";

const authors: Author[] = [
  {
    id: "1",
    name: "John Doe",
    bio: "Tech writer and software engineer",
    avatar: "/avatars/john.jpg",
    postsCount: 2,
  },
  {
    id: "2",
    name: "Jane Smith",
    bio: "React expert and frontend architect",
    avatar: "/avatars/jane.jpg",
    postsCount: 2,
  },
  {
    id: "3",
    name: "Alex Johnson",
    bio: "Full-stack developer and blogger",
    avatar: "/avatars/alex.jpg",
    postsCount: 1,
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
    views: 1250,
    likes: 89,
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
    views: 980,
    likes: 67,
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
    views: 1450,
    likes: 102,
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
    views: 2100,
    likes: 145,
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
    views: 1680,
    likes: 93,
  },
];

const users: User[] = [
  {
    id: "1",
    name: "Alice Cooper",
    email: "alice@example.com",
    avatar: "/avatars/alice.jpg",
    role: "admin",
    joinedDate: "2025-01-15",
  },
  {
    id: "2",
    name: "Bob Wilson",
    email: "bob@example.com",
    avatar: "/avatars/bob.jpg",
    role: "user",
    joinedDate: "2025-06-20",
  },
];

const notifications: Notification[] = [
  {
    id: "1",
    type: "success",
    message: "Your post 'Getting Started with Next.js' received 10 new likes",
    read: false,
    createdAt: new Date(Date.now() - 3600000).toISOString(),
  },
  {
    id: "2",
    type: "info",
    message: "New comment on your post",
    read: false,
    createdAt: new Date(Date.now() - 7200000).toISOString(),
  },
  {
    id: "3",
    type: "warning",
    message: "Your session will expire in 24 hours",
    read: true,
    createdAt: new Date(Date.now() - 86400000).toISOString(),
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

export async function getNotifications(
  userId: string
): Promise<Notification[]> {
  await new Promise((resolve) => setTimeout(resolve, 100));
  return notifications;
}

export async function getAnalytics(): Promise<Analytics> {
  await new Promise((resolve) => setTimeout(resolve, 200));
  const totalViews = posts.reduce((sum, post) => sum + (post.views || 0), 0);
  const popularPosts = [...posts]
    .sort((a, b) => (b.views || 0) - (a.views || 0))
    .slice(0, 3);

  return {
    totalViews,
    totalPosts: posts.length,
    totalUsers: users.length,
    popularPosts,
  };
}
