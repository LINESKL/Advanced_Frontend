import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllPosts, getPostById, getAuthorById } from "@/lib/api";

export const revalidate = 60;

export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map((post) => ({
    id: post.id,
  }));
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const post = await getPostById(id);

  if (!post) {
    notFound();
  }

  const author = await getAuthorById(post.author);

  return (
    <main className="min-h-screen p-8 max-w-3xl mx-auto">
      <Link
        href="/"
        className="inline-block mb-6 text-blue-600 hover:text-blue-800"
      >
        ← Back to Home
      </Link>

      <article className="prose prose-lg max-w-none">
        <header className="mb-8">
          <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
          <div className="flex items-center gap-4 text-gray-600 mb-4">
            <span>{post.date}</span>
            <span>•</span>
            <span>{post.readTime} min read</span>
            <span>•</span>
            <span>👁 {post.views} views</span>
            <span>•</span>
            <span>❤️ {post.likes} likes</span>
          </div>
          {author && (
            <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg">
              <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-semibold">
                {author.name.charAt(0)}
              </div>
              <div>
                <p className="font-semibold">{author.name}</p>
                <p className="text-sm text-gray-600">
                  {author.bio} • {author.postsCount} posts
                </p>
              </div>
            </div>
          )}
        </header>

        <div className="mb-6">
          <p className="text-lg leading-relaxed whitespace-pre-line">
            {post.content}
          </p>
        </div>

        <footer className="mt-8 pt-6 border-t">
          <div className="flex gap-2">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm"
              >
                #{tag}
              </span>
            ))}
          </div>
        </footer>
      </article>

      <div className="mt-8 p-4 bg-gray-50 rounded text-sm text-gray-600">
        <p>
          This page uses <strong>Static Site Generation (SSG)</strong> with{" "}
          <strong>Incremental Static Regeneration (ISR)</strong>
        </p>
        <p className="mt-1">Revalidation interval: 60 seconds</p>
      </div>
    </main>
  );
}
