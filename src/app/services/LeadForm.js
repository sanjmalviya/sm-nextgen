"use client";
import { useState } from "react";

export default function LeadForm({ serviceTitle }) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [budget, setBudget] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    
    const leadMsg = `*New Ads Enquiry* 🎯\n\n*Service:* ${serviceTitle}\n*Name:* ${name}\n*Phone:* ${phone}\n*Est. Budget:* ${budget}\n\nPlease audit my account.`;
    
    setTimeout(() => {
      window.open(`https://wa.me/917073538077?text=${encodeURIComponent(leadMsg)}`, '_blank');
    }, 1500);
  };

  return (
    <div id="leadFormCard" className="bg-white dark:bg-[#162032] p-6 rounded-2xl shadow-xl border-t-4 border-red-500 relative">
      <h3 className="text-xl font-heading font-bold text-navy dark:text-white mb-1">Scale Your Revenue</h3>
      <p className="text-xs text-gray-500 dark:text-gray-400 mb-5">Book a Free Audit Call for {serviceTitle}.</p>
      
      {!submitted ? (
        <form onSubmit={handleFormSubmit} className="space-y-4">
          <div>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Your Name" required
              className="w-full bg-gray-50 dark:bg-navy border border-gray-200 dark:border-white/10 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-red-500 transition dark:text-white" />
          </div>
          <div>
            <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="WhatsApp Number" required
              className="w-full bg-gray-50 dark:bg-navy border border-gray-200 dark:border-white/10 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-red-500 transition dark:text-white" />
          </div>
          <div>
            <input type="text" value={budget} onChange={(e) => setBudget(e.target.value)} placeholder="Est. Monthly Budget (Optional)"
              className="w-full bg-gray-50 dark:bg-navy border border-gray-200 dark:border-white/10 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-red-500 transition dark:text-white" />
          </div>
          
          <button type="submit" 
            className="w-full bg-navy dark:bg-white text-white dark:text-navy font-bold py-3.5 rounded-xl hover:bg-red-500 hover:text-white transition transform hover:-translate-y-1 shadow-lg">
            🚀 Get Custom Plan
          </button>
        </form>
      ) : (
        <div className="text-center py-6 animate-pulse">
          <i className="fas fa-check-circle text-4xl text-green-500 mb-2"></i>
          <h4 className="font-bold text-navy dark:text-white">Request Sent!</h4>
          <p className="text-xs text-gray-500">Redirecting to WhatsApp...</p>
        </div>
      )}

      <div className="relative flex py-5 items-center">
        <div className="flex-grow border-t border-gray-200 dark:border-white/10"></div>
        <span className="flex-shrink-0 mx-4 text-gray-400 text-[10px] uppercase font-bold">OR</span>
        <div className="flex-grow border-t border-gray-200 dark:border-white/10"></div>
      </div>

      <a href={`https://wa.me/917073538077?text=${encodeURIComponent(`Hi Sanjay, I am interested in *${serviceTitle}*.`)}`} target="_blank" rel="noreferrer"
        className="w-full flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold py-3 rounded-xl shadow-md transition">
        <i className="fab fa-whatsapp text-lg"></i> Chat on WhatsApp
      </a>
    </div>
  );
}