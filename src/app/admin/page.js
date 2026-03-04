export default function AdminDashboard() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Welcome, Sanjay!</h1>
      <div className="grid grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <h3 className="text-gray-500 text-sm font-bold uppercase">Total Services</h3>
          <p className="text-4xl font-bold text-[#0B2545] mt-2">0</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <h3 className="text-gray-500 text-sm font-bold uppercase">Pricing Plans</h3>
          <p className="text-4xl font-bold text-[#0B2545] mt-2">0</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <h3 className="text-gray-500 text-sm font-bold uppercase">Published Blogs</h3>
          <p className="text-4xl font-bold text-[#0B2545] mt-2">0</p>
        </div>
      </div>
      <div className="mt-8 bg-blue-50 p-6 rounded-xl border border-blue-100">
        <p className="text-blue-800 font-medium">System is ready. We will connect this dashboard to MongoDB to create dynamic detail pages next.</p>
      </div>
    </div>
  );
}