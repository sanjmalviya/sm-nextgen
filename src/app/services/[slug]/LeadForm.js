"use client";
import { useState } from "react";

export default function LeadForm({ serviceTitle }) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [business, setBusiness] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    
    // Yahan humne "SM NextGen Team" aur professional message update kar diya hai
    const leadMsg = `*New Enterprise Lead* 🚀\n\n*Service:* ${serviceTitle}\n*Name:* ${name}\n*Phone:* ${phone}\n*Business:* ${business}\n\nPlease schedule a discovery call with our team.`;
    
    setTimeout(() => {
      window.open(`https://wa.me/917073538077?text=${encodeURIComponent(leadMsg)}`, '_blank');
    }, 1500);
  };

  const directMsg = `Hi SM NextGen Team, I want to explore *${serviceTitle}* to scale my business. Let's connect.`;

  return (
    <div id="leadFormCard" className="bg-white dark:bg-[#162032] p-8 rounded-3xl shadow-2xl border-t-[6px] border-brand relative">
      <div className="absolute top-0 right-0 w-24 h-24 bg-brand/5 rounded-bl-full -z-10"></div>
      
      <h3 className="text-2xl font-heading font-extrabold text-navy dark:text-white mb-2">Scale Smartly</h3>
      <p className="text-sm text-gray-500 dark:text-gray-400 mb-8 font-medium">Book a high-level Strategy Call for {serviceTitle}.</p>
      
      {!submitted ? (
        <form onSubmit={handleFormSubmit} className="space-y-5">
          <div>
            <label className="block text-xs font-bold text-gray-700 dark:text-gray-300 mb-1 uppercase tracking-wider">Full Name</label>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="John Doe" required
              className="w-full bg-gray-50 dark:bg-navy border border-gray-200 dark:border-white/10 rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent transition dark:text-white" />
          </div>
          <div>
            <label className="block text-xs font-bold text-gray-700 dark:text-gray-300 mb-1 uppercase tracking-wider">WhatsApp Number</label>
            <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="+91 00000 00000" required
              className="w-full bg-gray-50 dark:bg-navy border border-gray-200 dark:border-white/10 rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent transition dark:text-white" />
          </div>
          <div>
            <label className="block text-xs font-bold text-gray-700 dark:text-gray-300 mb-1 uppercase tracking-wider">Company / Niche</label>
            <input type="text" value={business} onChange={(e) => setBusiness(e.target.value)} placeholder="e.g. E-commerce, Real Estate" required
              className="w-full bg-gray-50 dark:bg-navy border border-gray-200 dark:border-white/10 rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent transition dark:text-white" />
          </div>
          
          <button type="submit" 
            className="w-full bg-navy dark:bg-white text-white dark:text-navy font-extrabold py-4 rounded-xl hover:bg-brand dark:hover:bg-brand hover:text-white transition-all transform hover:-translate-y-1 shadow-xl shadow-brand/20 mt-4 flex items-center justify-center gap-2">
            🚀 Request Custom Strategy
          </button>
        </form>
      ) : (
        <div className="text-center py-10 animate-fade-in">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <i className="fas fa-check text-4xl text-green-500"></i>
          </div>
          <h4 className="text-xl font-bold text-navy dark:text-white mb-2">Request Sent!</h4>
          <p className="text-sm text-gray-500">Redirecting to our secure WhatsApp channel...</p>
        </div>
      )}

      <div className="relative flex py-6 items-center">
        <div className="flex-grow border-t border-gray-200 dark:border-white/10"></div>
        <span className="flex-shrink-0 mx-4 text-gray-400 text-[10px] uppercase font-bold tracking-widest">Or Connect Instantly</span>
        <div className="flex-grow border-t border-gray-200 dark:border-white/10"></div>
      </div>

      <a href={`https://wa.me/917073538077?text=${encodeURIComponent(directMsg)}`} target="_blank" rel="noreferrer"
        className="w-full flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold py-4 rounded-xl shadow-lg transition-all hover:-translate-y-1">
        <i className="fab fa-whatsapp text-xl"></i> Message SM NextGen Team
      </a>
      <p className="text-center text-[10px] text-gray-400 mt-4 uppercase tracking-wider">100% Secure & Confidential</p>
    </div>
  );
}