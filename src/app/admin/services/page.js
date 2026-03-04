"use client";
import { useState, useEffect } from "react";

export default function AdminServices() {
  const [services, setServices] = useState([]);
  const [formData, setFormData] = useState({
    title: "", slug: "", category: "Marketing", heroBadge: "", 
    heroSubtitle: "", description: "", price: "", oldPrice: "", imageUrl: ""
  });

  // Services load karna
  useEffect(() => {
    fetch('/api/services')
      .then(res => res.json())
      .then(data => {
        if(data.success) setServices(data.data);
      });
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch('/api/services', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    });
    
    const data = await res.json();
    if(data.success) {
      alert("Service Added Successfully!");
      setServices([data.data, ...services]); // Nayi service list mein add karo
      setFormData({ title: "", slug: "", category: "Marketing", heroBadge: "", heroSubtitle: "", description: "", price: "", oldPrice: "", imageUrl: "" });
    } else {
      alert("Error adding service: " + data.error);
    }
  };

  return (
    <div className="max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Manage Services</h1>
      
      {/* Form Section */}
      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 mb-10">
        <h2 className="text-xl font-bold mb-4">Add New Service</h2>
        <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Service Title</label>
            <input type="text" name="title" value={formData.title} onChange={handleChange} required className="w-full border p-2 rounded" placeholder="e.g. SEO Ranking" />
          </div>
          <div>
            <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Slug (URL)</label>
            <input type="text" name="slug" value={formData.slug} onChange={handleChange} required className="w-full border p-2 rounded" placeholder="e.g. seo-ranking" />
          </div>
          <div>
            <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Category</label>
            <select name="category" value={formData.category} onChange={handleChange} className="w-full border p-2 rounded">
              <option>Marketing</option>
              <option>Automation</option>
              <option>Finance</option>
            </select>
          </div>
          <div>
            <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Hero Badge</label>
            <input type="text" name="heroBadge" value={formData.heroBadge} onChange={handleChange} className="w-full border p-2 rounded" placeholder="e.g. Premium Service" />
          </div>
          <div>
            <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Price (₹)</label>
            <input type="number" name="price" value={formData.price} onChange={handleChange} className="w-full border p-2 rounded" placeholder="9999" />
          </div>
          <div>
            <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Image URL</label>
            <input type="text" name="imageUrl" value={formData.imageUrl} onChange={handleChange} className="w-full border p-2 rounded" placeholder="https://..." />
          </div>
          <div className="col-span-2">
            <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Description</label>
            <textarea name="description" value={formData.description} onChange={handleChange} className="w-full border p-2 rounded" rows="3"></textarea>
          </div>
          <button type="submit" className="bg-[#0097B2] text-white font-bold py-2 px-4 rounded col-span-2 hover:bg-[#007a91]">
            Save Service
          </button>
        </form>
      </div>

      {/* List Section */}
      <h2 className="text-xl font-bold mb-4">Published Services</h2>
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        <table className="w-full text-left">
          <thead className="bg-gray-50 border-b">
            <tr>
              <th className="p-4 text-xs text-gray-500 uppercase">Title</th>
              <th className="p-4 text-xs text-gray-500 uppercase">Category</th>
              <th className="p-4 text-xs text-gray-500 uppercase">Price</th>
              <th className="p-4 text-xs text-gray-500 uppercase">URL</th>
            </tr>
          </thead>
          <tbody>
            {services.map((svc, i) => (
              <tr key={i} className="border-b">
                <td className="p-4 font-bold text-[#0B2545]">{svc.title}</td>
                <td className="p-4 text-sm text-gray-600">{svc.category}</td>
                <td className="p-4 text-sm text-green-600 font-bold">₹{svc.price}</td>
                <td className="p-4 text-sm text-blue-500">/services/{svc.slug}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}