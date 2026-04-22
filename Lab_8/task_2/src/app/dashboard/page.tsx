import Link from "next/link";
import { getCurrentUser, getNotifications, getAnalytics } from "@/lib/api";

export const dynamic = "force-dynamic";

export default async function DashboardPage() {
  const user = await getCurrentUser();
  const notifications = await getNotifications(user.id);
  const analytics = await getAnalytics();
  const currentTime = new Date().toLocaleString();

  const unreadCount = notifications.filter((n) => !n.read).length;

  return (
    <main className="min-h-screen p-8 max-w-5xl mx-auto">
      <Link
        href="/"
        className="inline-block mb-6 text-blue-600 hover:text-blue-800"
      >
        ← Back to Home
      </Link>

      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">User Dashboard</h1>
        <p className="text-gray-600">Welcome back, {user.name}!</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-2xl font-bold">
              {user.name.charAt(0)}
            </div>
            <div>
              <h2 className="text-xl font-semibold">{user.name}</h2>
              <p className="text-gray-600 text-sm">{user.email}</p>
              <span className="inline-block mt-1 px-2 py-1 bg-blue-100 text-blue-700 rounded text-xs font-medium">
                {user.role.toUpperCase()}
              </span>
            </div>
          </div>
          <div className="text-sm text-gray-600 space-y-1">
            <p>Joined: {user.joinedDate}</p>
            <p>Last updated: {currentTime}</p>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold mb-4 flex items-center justify-between">
            Notifications
            {unreadCount > 0 && (
              <span className="px-2 py-1 bg-red-500 text-white rounded-full text-xs">
                {unreadCount} new
              </span>
            )}
          </h3>
          <div className="space-y-3 max-h-64 overflow-y-auto">
            {notifications.map((notif) => (
              <div
                key={notif.id}
                className={`p-3 rounded-lg border ${
                  notif.read
                    ? "bg-gray-50 border-gray-200"
                    : "bg-blue-50 border-blue-200"
                }`}
              >
                <div className="flex items-start gap-2">
                  <span className="text-lg">
                    {notif.type === "success"
                      ? "✅"
                      : notif.type === "warning"
                      ? "⚠️"
                      : "ℹ️"}
                  </span>
                  <div className="flex-1">
                    <p className="text-sm">{notif.message}</p>
                    <p className="text-xs text-gray-500 mt-1">
                      {new Date(notif.createdAt).toLocaleString()}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow p-6 mb-8">
        <h3 className="text-lg font-semibold mb-4">Analytics Overview</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div className="p-4 bg-blue-50 rounded-lg">
            <p className="text-sm text-gray-600">Total Views</p>
            <p className="text-3xl font-bold text-blue-600">
              {analytics.totalViews.toLocaleString()}
            </p>
          </div>
          <div className="p-4 bg-green-50 rounded-lg">
            <p className="text-sm text-gray-600">Total Posts</p>
            <p className="text-3xl font-bold text-green-600">
              {analytics.totalPosts}
            </p>
          </div>
          <div className="p-4 bg-purple-50 rounded-lg">
            <p className="text-sm text-gray-600">Total Users</p>
            <p className="text-3xl font-bold text-purple-600">
              {analytics.totalUsers}
            </p>
          </div>
        </div>

        <h4 className="font-semibold mb-3">Popular Posts</h4>
        <div className="space-y-2">
          {analytics.popularPosts.map((post, index) => (
            <div
              key={post.id}
              className="flex items-center justify-between p-3 bg-gray-50 rounded"
            >
              <div className="flex items-center gap-3">
                <span className="text-lg font-bold text-gray-400">
                  #{index + 1}
                </span>
                <Link
                  href={`/posts/${post.id}`}
                  className="text-blue-600 hover:text-blue-800"
                >
                  {post.title}
                </Link>
              </div>
              <span className="text-sm text-gray-600">
                👁 {post.views} views
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="p-4 bg-yellow-50 border border-yellow-200 rounded text-sm">
        <p className="font-semibold text-yellow-800 mb-1">
          ⚡ Server-Side Rendering (SSR)
        </p>
        <p className="text-yellow-700">
          This dashboard is rendered on every request with fresh data. The
          timestamp and notifications update on each page load.
        </p>
      </div>
    </main>
  );
}
