import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="min-h-screen p-8 max-w-3xl mx-auto">
      <Link
        href="/"
        className="inline-block mb-6 text-blue-600 hover:text-blue-800"
      >
        ← Back to Home
      </Link>

      <article className="prose prose-lg max-w-none">
        <h1 className="text-4xl font-bold mb-6">About This Blog</h1>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Welcome to our blog! We're dedicated to sharing knowledge about web
            development, React, Next.js, and modern JavaScript technologies.
            Our goal is to help developers of all skill levels improve their
            craft and stay up-to-date with the latest trends.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">What We Cover</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>React and Next.js best practices</li>
            <li>Server-Side Rendering (SSR) and Static Site Generation (SSG)</li>
            <li>TypeScript tips and patterns</li>
            <li>Performance optimization techniques</li>
            <li>Modern web development workflows</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Our Team</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Our content is created by experienced developers who are passionate
            about sharing their knowledge. Each author brings unique expertise
            and perspectives to help you grow as a developer.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Technical Details</h2>
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="font-semibold mb-3">This Blog is Built With:</h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>
                <strong>Next.js 16</strong> - React framework with SSR/SSG
              </li>
              <li>
                <strong>TypeScript</strong> - Type-safe development
              </li>
              <li>
                <strong>Tailwind CSS</strong> - Utility-first styling
              </li>
              <li>
                <strong>App Router</strong> - Modern Next.js routing
              </li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
          <p className="text-gray-700 leading-relaxed">
            Have questions or suggestions? We'd love to hear from you! Reach out
            to us at{" "}
            <a
              href="mailto:contact@myblog.com"
              className="text-blue-600 hover:text-blue-800"
            >
              contact@myblog.com
            </a>
          </p>
        </section>
      </article>

      <div className="mt-8 p-4 bg-green-50 border border-green-200 rounded text-sm">
        <p className="font-semibold text-green-800 mb-1">
          📄 Static Site Generation (SSG)
        </p>
        <p className="text-green-700">
          This page is statically generated at build time for optimal
          performance.
        </p>
      </div>
    </main>
  );
}
