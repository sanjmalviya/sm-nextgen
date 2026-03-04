export default function AdminLayout({ children }) {
  return (
    <div className="flex h-screen bg-gray-100 font-sans">
      {/* Sidebar */}
      <aside className="w-64 bg-[#0B2545] text-white hidden md:flex flex-col">
        <div className="p-6 text-xl font-bold border-b border-white/10">
          SM NextGen <span className="text-[#0097B2] text-sm block font-normal">Admin Panel</span>
        </div>
        <nav className="flex-1 p-4 space-y-2">
          <a href="/admin" className="block px-4 py-3 rounded-lg bg-[#0097B2] text-white font-bold">Dashboard</a>
          <a href="/admin/services" className="block px-4 py-3 rounded-lg hover:bg-white/10 text-gray-300">Manage Services</a>
          <a href="/admin/pricing" className="block px-4 py-3 rounded-lg hover:bg-white/10 text-gray-300">Manage Pricing</a>
          <a href="/admin/blogs" className="block px-4 py-3 rounded-lg hover:bg-white/10 text-gray-300">Manage Blogs</a>
        </nav>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 overflow-y-auto p-8">
        {children}
      </main>
    </div>
  );
}