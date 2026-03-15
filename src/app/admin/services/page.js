"use client";
import { useState } from "react";
import { supabase } from "../../../lib/supabase";
import dynamic from 'next/dynamic';

// Next.js mein text editor ko load karne ka special tareeka
const ReactQuill = dynamic(() => import('react-quill-new'), { ssr: false });
import 'react-quill-new/dist/quill.snow.css';

export default function ManageServices() {
  const [loading, setLoading] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [message, setMessage] = useState("");
  
  const [formData, setFormData] = useState({
    title: "",
    slug: "",
    category: "Marketing",
    hero_badge: "",
    icon: "",
    short_description: "",
    full_description: "",
    image_url: "",
    price: ""
  });

  // Normal inputs ke liye
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Text Editor (React Quill) ke liye
  const handleEditorChange = (content) => {
    setFormData({ ...formData, full_description: content });
  };

  // Image Upload ka Jaadu 🪄
  const handleImageUpload = async (e) => {
    try {
      setUploading(true);
      setMessage("");
      
      const file = e.target.files[0];
      if (!file) return;

      // File ka naya unique naam banana taaki purani file replace na ho
      const fileExt = file.name.split('.').pop();
      const fileName = `${Date.now()}.${fileExt}`;

      // Supabase storage bucket ('images') mein upload karna
      const { data, error } = await supabase.storage
        .from('images')
        .upload(fileName, file);

      if (error) throw error;

      // Upload hone ke baad uska Public URL nikalna
      const { data: { publicUrl } } = supabase.storage
        .from('images')
        .getPublicUrl(fileName);

      // URL ko form data mein save karna
      setFormData({ ...formData, image_url: publicUrl });
      setMessage("✅ Image uploaded successfully!");

    } catch (error) {
      console.error("Upload error:", error);
      setMessage("❌ Image upload failed: " + error.message);
    } finally {
      setUploading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const { data, error } = await supabase
        .from('services')
        .insert([formData]);

      if (error) throw error;

      setMessage("✅ Service successfully added to Database!");
      // Form ko wapas khali kar dena
      setFormData({
        title: "", slug: "", category: "Marketing", hero_badge: "", 
        icon: "", short_description: "", full_description: "", image_url: "", price: ""
      });
    } catch (error) {
      console.error("Database error:", error.message);
      setMessage("❌ Error saving service: " + error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-8 max-w-5xl mx-auto font-body bg-gray-50 min-h-screen">
      <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
        <h1 className="text-3xl font-bold text-navy mb-8">Create New Service</h1>
        
        {message && (
          <div className={`p-4 mb-6 rounded-lg font-bold ${message.includes("✅") ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"}`}>
            {message}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">Service Title</label>
              <input type="text" name="title" value={formData.title} onChange={handleChange} required className="w-full p-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-brand outline-none" placeholder="e.g. Advanced SEO" />
            </div>
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">Slug (URL)</label>
              <input type="text" name="slug" value={formData.slug} onChange={handleChange} required className="w-full p-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-brand outline-none" placeholder="e.g. advanced-seo" />
            </div>
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">Category</label>
              <select name="category" value={formData.category} onChange={handleChange} className="w-full p-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-brand outline-none">
                <option value="Marketing">Marketing</option>
                <option value="Automation">Automation</option>
                <option value="Finance">Finance</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">Starting Price (₹)</label>
              <input type="text" name="price" value={formData.price} onChange={handleChange} className="w-full p-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-brand outline-none" placeholder="e.g. 15,000" />
            </div>
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">Hero Badge</label>
              <input type="text" name="hero_badge" value={formData.hero_badge} onChange={handleChange} className="w-full p-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-brand outline-none" placeholder="e.g. BEST SELLER" />
            </div>
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">Icon (FontAwesome)</label>
              <input type="text" name="icon" value={formData.icon} onChange={handleChange} className="w-full p-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-brand outline-none" placeholder="e.g. fas fa-star" />
            </div>
          </div>

          <div className="bg-gray-50 p-6 rounded-2xl border border-dashed border-brand/50">
            <label className="block text-sm font-bold text-navy mb-2">Upload Cover Image</label>
            <input 
              type="file" 
              accept="image/*" 
              onChange={handleImageUpload} 
              disabled={uploading}
              className="w-full file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-brand/10 file:text-brand hover:file:bg-brand/20 cursor-pointer"
            />
            {uploading && <p className="text-sm text-brand mt-2 animate-pulse font-bold">Uploading image to secure cloud...</p>}
            
            {formData.image_url && (
              <div className="mt-4">
                <p className="text-xs text-green-600 font-bold mb-1">Image ready!</p>
                <img src={formData.image_url} alt="Preview" className="h-32 rounded-xl object-cover shadow-md" />
              </div>
            )}
          </div>

          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">Short Description (For Cards)</label>
            <textarea name="short_description" value={formData.short_description} onChange={handleChange} rows="2" className="w-full p-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-brand outline-none" placeholder="Brief description..."></textarea>
          </div>

          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">Full Description (Dynamic Content)</label>
            <div className="bg-white rounded-xl overflow-hidden border border-gray-200 focus-within:ring-2 focus-within:ring-brand focus-within:border-transparent">
              {/* Yeh hamara naya MS Word jaisa editor hai */}
              <ReactQuill 
                theme="snow" 
                value={formData.full_description} 
                onChange={handleEditorChange}
                className="h-64 mb-12"
              />
            </div>
          </div>

          <button type="submit" disabled={loading || uploading} className="w-full bg-brand text-white font-bold py-4 rounded-xl shadow-lg shadow-brand/30 hover:-translate-y-1 transition-all disabled:opacity-50 text-lg mt-8">
            {loading ? "Publishing Service..." : "Publish Service"}
          </button>
        </form>
      </div>
    </div>
  );
}