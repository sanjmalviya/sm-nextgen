"use client";
import { useState } from "react";

export default function BlogLeadForm({ heading, subtext, blogTitle }) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const targetPhone = "917073538077";
    const message = `Hi SM NextGen Team, I was reading "${blogTitle || "your article"}". Name: ${name} | Phone: ${phone}. Please connect with me.`;
    const url = `https://wa.me/${targetPhone}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <div className="bg-gradient-to-br from-[#0B2545] to-[#11325B] p-8 rounded-[2rem] text-white shadow-xl relative overflow-hidden">
      <div className="absolute top-0 right-0 w-40 h-40 bg-[#0097B2]/20 rounded-full blur-3xl -mr-10 -mt-10 pointer-events-none"></div>
      <h3 className="text-xl font-bold mb-3 relative z-10">{heading || "Talk to an Expert"}</h3>
      <p className="text-sm text-gray-300 mb-6 relative z-10">{subtext || "Drop your details below and we'll reach out to discuss your growth strategy."}</p>
      <form onSubmit={handleSubmit} className="relative z-10 space-y-3">
        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="w-full px-4 py-3.5 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-[#0097B2] transition"
        />
        <input
          type="tel"
          placeholder="Phone Number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
          className="w-full px-4 py-3.5 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-[#0097B2] transition"
        />
        <button
          type="submit"
          className="w-full bg-[#0097B2] hover:bg-white text-white hover:text-[#0B2545] font-bold py-3.5 rounded-xl transition shadow-[0_0_15px_rgba(0,151,178,0.3)] cursor-pointer"
        >
          Request Callback
        </button>
      </form>
    </div>
  );
}
