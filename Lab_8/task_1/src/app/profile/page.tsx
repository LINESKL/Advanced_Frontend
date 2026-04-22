import Link from "next/link";
import { getCurrentUser } from "@/lib/api";

export const dynamic = "force-dynamic";

export default async function ProfilePage() {
  const user = await getCurrentUser();
  const currentTime = new Date().toLocaleString();

  return (
    <main className="min-h-screen p-8 max-w-3xl mx-auto">
      <Link
        href="/"
        className="inline-block mb-6 text-blue-600 hover:text-blue-800"
      >
        ← Back to Home
      </Link>

      <div className="bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-3xl font-bold mb-6">User Profile</h1>

        <div className="flex items-center gap-6 mb-8">
          <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-3xl font-bold">
            {user.name.charAt(0)}
          </div>
          <div>
            <h2 className="text-2xl font-semibold">{user.name}</h2>
            <p className="text-gray-600">{user.email}</p>
            <span className="inline-block mt-2 px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
              {user.role.toUpperCase()}
            </span>
          </div>
        </div>

        <div className="space-y-4">
          <div className="p-4 bg-gray-50 rounded-lg">
            <h3 className="font-semibold mb-2">Account Information</h3>
            <dl className="space-y-2 text-sm">
              <div className="flex justify-between">
                <dt className="text-gray-600">User ID:</dt>
                <dd className="font-medium">{user.id}</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-gray-600">Role:</dt>
                <dd className="font-medium">{user.role}</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-gray-600">Page rendered at:</dt>
                <dd className="font-medium">{currentTime}</dd>
              </div>
            </dl>
          </div>

          <div className="p-4 bg-blue-50 rounded-lg">
            <h3 className="font-semibold mb-2">Recent Activity</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                <span>Logged in at {currentTime}</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                <span>Viewed profile page</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mt-8 p-4 bg-yellow-50 border border-yellow-200 rounded text-sm">
        <p className="font-semibold text-yellow-800 mb-1">
          ⚡ Server-Side Rendering (SSR)
        </p>
        <p className="text-yellow-700">
          This page is rendered on every request with fresh data. The timestamp
          updates on each page load.
        </p>
      </div>
    </main>
  );
}
