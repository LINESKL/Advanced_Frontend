import Link from "next/link";
import { getAllPosts } from "@/lib/api";

export const revalidate = 60;

export default async function Home() {
  const posts = await getAllPosts();

  return (
    <main className="min-h-screen p-8 max-w-4xl mx-auto">
      <header className="mb-12">
        <h1 className="text-4xl font-bold mb-4">My Blog</h1>
        <p className="text-gray-600">
          Exploring web development, React, and modern JavaScript
        </p>
      </header>

      <nav className="mb-8 flex gap-4">
        <Link
          href="/"
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Home
        </Link>
        <Link
          href="/profile"
          className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
        >
          Profile
        </Link>
        <Link
          href="/about"
          className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
        >
          About
        </Link>
      </nav>

      <section>
        <h2 className="text-2xl font-semibold mb-6">Latest Posts</h2>
        <div className="space-y-6">
          {posts.map((post) => (
            <article
              key={post.id}
              className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow"
            >
              <Link href={`/posts/${post.id}`}>
                <h3 className="text-xl font-semibold mb-2 text-blue-600 hover:text-blue-800">
                  {post.title}
                </h3>
              </Link>
              <p className="text-gray-600 mb-3 line-clamp-2">{post.content}</p>
              <div className="flex items-center justify-between text-sm text-gray-500">
                <span>
                  {post.date} • {post.readTime} min read
                </span>
                <div className="flex gap-2">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-gray-100 rounded text-xs"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <footer className="mt-12 pt-8 border-t text-center text-gray-500 text-sm">
        <p>Built with Next.js • SSG with ISR (revalidate: 60s)</p>
      </footer>
    </main>
  );
}
