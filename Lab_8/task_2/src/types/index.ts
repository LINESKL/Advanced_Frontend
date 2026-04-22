export interface Post {
  id: string;
  title: string;
  content: string;
  author: string;
  date: string;
  tags: string[];
  readTime: number;
  views?: number;
  likes?: number;
}

export interface Author {
  id: string;
  name: string;
  bio: string;
  avatar: string;
  postsCount?: number;
}

export interface User {
  id: string;
  name: string;
  email: string;
  avatar: string;
  role: "admin" | "user";
  joinedDate?: string;
}

export interface Notification {
  id: string;
  type: "info" | "warning" | "success";
  message: string;
  read: boolean;
  createdAt: string;
}

export interface Analytics {
  totalViews: number;
  totalPosts: number;
  totalUsers: number;
  popularPosts: Post[];
}
