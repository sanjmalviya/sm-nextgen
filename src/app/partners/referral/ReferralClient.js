"use client";
import { useState, useEffect, useRef } from "react";
import confetti from "canvas-confetti";
import Link from "next/link";

const WHATSAPP_NUMBER = "917073538077"; 
const getWhatsAppLink = (message) => `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

export function ReferralClient() {
  const cursorRef = useRef(null);
  
  const [formStep, setFormStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [waLink, setWaLink] = useState("#");

  const [formData, setFormData] = useState({
    fullName: "", email: "", phone: "", city: "", profession: "",
    model: "Referral", // Fixed for this page
    experience: "Intermediate", 
    skills: [], // Broad network skills
    message: "",
    portfolio: ""
  });

  const [activeFaq, setActiveFaq] = useState(null);
  const toggleFaq = (i) => setActiveFaq(activeFaq === i ? null : i);

  // Broadened skills to match all services
  const availableSkills = ["B2B Sales", "Startup Networking", "Real Estate", "Financial Connects", "Agency Owner", "Consulting", "Other"];

  // Mouse Glow Effect
  useEffect(() => {
    const moveCursor = (e) => {
      if (cursorRef.current) {
        requestAnimationFrame(() => {
          cursorRef.current.style.transform = `translate3d(${e.clientX - 250}px, ${e.clientY - 250}px, 0)`;
          cursorRef.current.style.opacity = '1';
        });
      }
    };
    const hideCursor = () => { if (cursorRef.current) cursorRef.current.style.opacity = '0'; };

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mouseleave', hideCursor);
    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mouseleave', hideCursor);
    };
  }, []);

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });
  const handleSkillToggle = (skill) => {
    setFormData(prev => ({
      ...prev,
      skills: prev.skills.includes(skill) ? prev.skills.filter(s => s !== skill) : [...prev.skills, skill]
    }));
  };

  const nextStep = () => {
    if(!formData.fullName || !formData.email || !formData.phone || !formData.city || !formData.profession) {
      alert("Please fill all required details in Step 1.");
      return;
    }
    setFormStep(2);
  };

  // --- SUBMIT FORM (EMAIL THEN WHATSAPP) ---
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", "Accept": "application/json" },
        body: JSON.stringify({
          access_key: "ec0688f4-c3f4-4282-938e-31f398af51d9",
          subject: "💸 New REFERRAL Partner Application",
          from_name: "Partner Ecosystem",
          Name: formData.fullName,
          Email: formData.email,
          Phone: formData.phone,
          City: formData.city,
          Profession: formData.profession,
          "Selected Model": formData.model,
          Experience: formData.experience,
          "Network Reach": formData.skills.join(", ") || "None selected",
          LinkedIn: formData.portfolio || "Not provided",
          Message: formData.message || "No message"
        })
      });

      const result = await response.json();

      if (result.success) {
        // Success Action 1: Confetti
        confetti({ particleCount: 300, spread: 100, origin: { y: 0.6 }, colors: ['#0097B2', '#ffffff'] });
        setIsSuccess(true);

        // Success Action 2: Prepare WhatsApp Message
        const waMessage = `Hi SM NextGen Team! I want to join as a *REFERRAL PARTNER* 🤝\n\n*Name:* ${formData.fullName}\n*Phone:* ${formData.phone}\n*Profession:* ${formData.profession}\n*Network Strength:* ${formData.skills.join(", ") || "N/A"}\n\nLet's connect to discuss how I can bring clients for your complete service ecosystem.`;
        const generatedWaLink = getWhatsAppLink(waMessage);
        setWaLink(generatedWaLink);

        // Success Action 3: Redirect after 2 seconds
        setTimeout(() => { 
            window.open(generatedWaLink, '_blank'); 
            setIsSubmitting(false);
            setFormStep(1);
        }, 2000);
      } else {
        alert("Submission failed: " + result.message);
        setIsSubmitting(false);
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Network Error. Please try again.");
      setIsSubmitting(false);
    }
  };

  const faqData = [
    { q: "Which services can I refer clients for?", a: "Absolutely anything we offer! You can refer clients for Digital Marketing, App/Web Development, AI Automation, GST/Legal Compliance, or Accounting services. The entire ecosystem is open for you to monetize." },
    { q: "How much commission do I earn?", a: "You earn a flat 10% to 20% commission on the total project value. For recurring services (like monthly SEO, Ads management, or Virtual CFO retainers), you earn every month the client stays with us." },
    { q: "Do I have to do any technical work?", a: "Absolutely zero. Your job is purely networking. You introduce the client to us, we pitch, close the deal, execute the project, and you get paid your share." },
    { q: "How do I track my referred clients?", a: "Once approved as a partner, you will get direct communication lines with our sales team and regular updates on the status and billing of your referred clients." },
    { q: "Who makes a good Referral Partner?", a: "Business consultants, real estate agents, B2B sales professionals, freelance designers, or anyone who regularly speaks with business owners looking to scale or streamline operations." }
  ];

  return (
    <>
      <main className="bg-[#F8FAFC] dark:bg-[#0B2545] font-body text-[#0B2545] dark:text-[#E6EEF2] min-h-screen selection:bg-[#0097B2] selection:text-white w-full overflow-x-hidden transition-colors duration-300 relative">
        
        {/* Cursor Glow */}
        <div ref={cursorRef} className="pointer-events-none fixed top-0 left-0 w-[500px] h-[500px] bg-[#0097B2]/20 dark:bg-[#0097B2]/15 rounded-full blur-[120px] z-[99] hidden lg:block mix-blend-screen dark:mix-blend-lighten opacity-0 transition-opacity duration-300" style={{ willChange: 'transform' }}></div>

        {/* 1️⃣ HERO SECTION (Fixed Explicit Colors for Light/Dark Mode safety) */}
        <section className="relative pt-32 pb-16 md:pt-40 md:pb-20 bg-[#071A30] text-center px-4 z-10 overflow-hidden border-b border-white/5">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:32px_32px] z-0"></div>
          <div className="absolute top-[-20%] left-1/2 transform -translate-x-1/2 w-[600px] md:w-[800px] h-[600px] md:h-[800px] bg-[#0097B2]/30 rounded-full blur-[150px] pointer-events-none z-0 animate-pulse"></div>
          
          <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
            {/* Back Link - Forced light color */}
            <Link href="/partners" className="text-[#E6EEF2]/70 hover:text-white text-xs font-bold uppercase tracking-widest mb-6 transition-colors flex items-center justify-center gap-2">
               <i className="fas fa-arrow-left"></i> Back to All Models
            </Link>

            {/* Pill Badge */}
            <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-xs font-bold uppercase tracking-widest text-[#34D399] mb-6 backdrop-blur-md shadow-sm">
              <i className="fas fa-handshake mr-2"></i> The Connectors Role
            </span>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-extrabold text-white mb-6 leading-tight tracking-tight drop-shadow-sm">
              Become a <span className="text-[#0097B2]">Referral Partner</span>
            </h1>

            {/* Subtext - Broadened Scope */}
            <p className="text-base md:text-xl text-[#E6EEF2]/90 mb-10 leading-relaxed font-light max-w-2xl">
              Monetize your network. Refer businesses to SM NextGen for our complete ecosystem of B2B services - spanning Marketing, Tech, legal & Finance, AI Automation and earn recurring commissions with zero execution work.
            </p>

            <button onClick={() => document.getElementById('partnerForm').scrollIntoView({behavior:'smooth'})} className="w-full sm:w-auto px-10 py-4 md:py-5 bg-[#0097B2] hover:bg-white hover:text-[#0B2545] text-white font-bold rounded-xl shadow-[0_0_30px_-5px_rgba(0,151,178,0.5)] transition-all hover:-translate-y-1 text-base md:text-lg">
              Apply as Referral Partner 🚀
            </button>
          </div>
        </section>

        {/* 2️⃣ ROLE OVERVIEW & RESPONSIBILITIES */}
        <section className="py-16 md:py-24 bg-white dark:bg-[#071A30] border-b border-gray-100 dark:border-white/5 relative z-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-10 md:gap-16 items-start">
              
              <div>
                <h2 className="text-3xl md:text-5xl font-heading font-extrabold text-[#0B2545] dark:text-white mb-6">What You Will Do</h2>
                <p className="text-gray-600 dark:text-[#E6EEF2]/70 mb-8 leading-relaxed">
                  As a Referral Partner, you act as the bridge between businesses that need growth solutions and our expert execution team. 
                </p>
                <div className="space-y-4">
                  <div className="bg-[#F8FAFC] dark:bg-[#11325B] p-5 rounded-2xl border border-gray-100 dark:border-white/5 flex gap-4 items-start">
                    <i className="fas fa-search-location text-[#0097B2] text-xl mt-1"></i>
                    <div>
                      <h4 className="font-bold text-[#0B2545] dark:text-white mb-1">Identify Needs</h4>
                      <p className="text-sm text-gray-500 dark:text-[#E6EEF2]/70">Spot businesses in your network struggling with sales, outdated tech, operational bottlenecks, or legal compliance.</p>
                    </div>
                  </div>
                  <div className="bg-[#F8FAFC] dark:bg-[#11325B] p-5 rounded-2xl border border-gray-100 dark:border-white/5 flex gap-4 items-start">
                    <i className="fas fa-comments text-[#0097B2] text-xl mt-1"></i>
                    <div>
                      <h4 className="font-bold text-[#0B2545] dark:text-white mb-1">Make The Intro</h4>
                      <p className="text-sm text-gray-500 dark:text-[#E6EEF2]/70">Connect the decision-maker with our sales team via a simple WhatsApp group or Email intro.</p>
                    </div>
                  </div>
                  <div className="bg-[#F8FAFC] dark:bg-[#11325B] p-5 rounded-2xl border border-gray-100 dark:border-white/5 flex gap-4 items-start">
                    <i className="fas fa-mug-hot text-[#0097B2] text-xl mt-1"></i>
                    <div>
                      <h4 className="font-bold text-[#0B2545] dark:text-white mb-1">Step Back & Earn</h4>
                      <p className="text-sm text-gray-500 dark:text-[#E6EEF2]/70">We handle the pitch, the closing, and the month-to-month execution across all departments. You collect your commission.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Earnings Focus - Broadened Math Examples */}
              <div>
                <div className="bg-[#0B2545] p-8 md:p-10 rounded-[2.5rem] border-2 border-[#0097B2] shadow-[0_20px_50px_rgba(0,151,178,0.2)] relative overflow-hidden text-white">
                  <div className="absolute top-0 right-0 w-40 h-40 bg-[#0097B2]/20 rounded-full blur-3xl"></div>
                  <span className="text-[10px] uppercase tracking-widest text-[#0097B2] font-bold mb-2 block">The Math</span>
                  <h2 className="text-3xl md:text-4xl font-heading font-extrabold mb-6">How You Earn</h2>
                  
                  <div className="bg-white/5 border border-white/10 rounded-2xl p-6 mb-6 backdrop-blur-sm">
                    <p className="text-4xl font-black text-green-400 mb-2">10% – 20%</p>
                    <p className="text-sm text-[#E6EEF2]/80">Commission on the total value of any service provided.</p>
                  </div>

                  <h4 className="font-bold mb-4">Ecosystem Examples:</h4>
                  <ul className="space-y-3 text-sm text-[#E6EEF2]/90 mb-8">
                    <li className="flex justify-between border-b border-white/10 pb-2">
                      <span>Client needs Custom Software build (₹1,00,000):</span>
                    </li>
                    <li className="flex justify-between border-b border-white/10 pb-2 text-green-400 font-bold">
                      <span>Your Direct Commission:</span>
                      <span>₹10,000 - ₹20,000</span>
                    </li>
                    <li className="text-[11px] md:text-xs text-[#E6EEF2]/60 pt-2 italic">
                      * If a client opts for a monthly Marketing or Virtual CFO retainer (e.g., ₹30k/mo), you earn up to ₹6k every single month they stay active.
                    </li>
                  </ul>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* 3️⃣ IDEAL FOR & BENEFITS */}
        <section className="py-16 md:py-24 bg-[#F8FAFC] dark:bg-[#0B1120] border-b border-gray-100 dark:border-white/5 relative z-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10 md:mb-16">
              <h2 className="text-3xl md:text-5xl font-heading font-extrabold text-[#0B2545] dark:text-white mb-4">Is This For You?</h2>
              <p className="text-gray-600 dark:text-[#E6EEF2]/70">The Referral Model is highly flexible and zero-risk.</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 md:gap-12">
              {/* Ideal For */}
              <div className="bg-white dark:bg-[#162032] p-8 md:p-10 rounded-[2.5rem] shadow-sm border border-gray-100 dark:border-white/5">
                <h3 className="text-2xl font-bold text-[#0B2545] dark:text-white mb-6">Perfect Candidates:</h3>
                <ul className="space-y-4">
                  <li className="flex items-center gap-4 text-gray-600 dark:text-[#E6EEF2]/80 font-medium">
                    <div className="w-10 h-10 rounded-full bg-[#0097B2]/10 text-[#0097B2] flex items-center justify-center shrink-0"><i className="fas fa-briefcase"></i></div>
                    Business Consultants & Advisors
                  </li>
                  <li className="flex items-center gap-4 text-gray-600 dark:text-[#E6EEF2]/80 font-medium">
                    <div className="w-10 h-10 rounded-full bg-[#0097B2]/10 text-[#0097B2] flex items-center justify-center shrink-0"><i className="fas fa-building"></i></div>
                    Real Estate Agents (B2B contacts)
                  </li>
                  <li className="flex items-center gap-4 text-gray-600 dark:text-[#E6EEF2]/80 font-medium">
                    <div className="w-10 h-10 rounded-full bg-[#0097B2]/10 text-[#0097B2] flex items-center justify-center shrink-0"><i className="fas fa-laptop"></i></div>
                    Freelance Designers (Upselling dev/marketing)
                  </li>
                  <li className="flex items-center gap-4 text-gray-600 dark:text-[#E6EEF2]/80 font-medium">
                    <div className="w-10 h-10 rounded-full bg-[#0097B2]/10 text-[#0097B2] flex items-center justify-center shrink-0"><i className="fas fa-users"></i></div>
                    Highly networked individuals
                  </li>
                </ul>
              </div>

              {/* Benefits */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-white dark:bg-[#162032] p-6 rounded-3xl border border-gray-100 dark:border-white/5 shadow-sm hover:border-[#0097B2] transition-colors">
                  <i className="fas fa-couch text-2xl text-green-500 mb-3"></i>
                  <h4 className="font-bold text-[#0B2545] dark:text-white mb-1">Zero Execution</h4>
                  <p className="text-xs text-gray-500 dark:text-[#E6EEF2]/60">You don't write code or run ads.</p>
                </div>
                <div className="bg-white dark:bg-[#162032] p-6 rounded-3xl border border-gray-100 dark:border-white/5 shadow-sm hover:border-[#0097B2] transition-colors">
                  <i className="fas fa-chart-pie text-2xl text-purple-500 mb-3"></i>
                  <h4 className="font-bold text-[#0B2545] dark:text-white mb-1">Scalable Income</h4>
                  <p className="text-xs text-gray-500 dark:text-[#E6EEF2]/60">Monetize every pain point your network has.</p>
                </div>
                <div className="bg-white dark:bg-[#162032] p-6 rounded-3xl border border-gray-100 dark:border-white/5 shadow-sm hover:border-[#0097B2] transition-colors">
                  <i className="fas fa-redo text-2xl text-blue-500 mb-3"></i>
                  <h4 className="font-bold text-[#0B2545] dark:text-white mb-1">Recurring Payouts</h4>
                  <p className="text-xs text-gray-500 dark:text-[#E6EEF2]/60">Earn monthly on retainer contracts.</p>
                </div>
                <div className="bg-white dark:bg-[#162032] p-6 rounded-3xl border border-gray-100 dark:border-white/5 shadow-sm hover:border-[#0097B2] transition-colors">
                  <i className="fas fa-shield-alt text-2xl text-[#0097B2] mb-3"></i>
                  <h4 className="font-bold text-[#0B2545] dark:text-white mb-1">Zero Risk</h4>
                  <p className="text-xs text-gray-500 dark:text-[#E6EEF2]/60">We take all liability for delivery.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4️⃣ DEDICATED FORM */}
        <section id="partnerForm" className="py-16 md:py-24 bg-white dark:bg-[#071A30] border-t border-gray-200 dark:border-white/5 relative z-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="text-center mb-10">
              <span className="inline-block px-4 py-1 rounded-full bg-green-100 text-green-700 dark:bg-green-500/10 dark:text-green-400 text-xs font-bold uppercase tracking-widest mb-4">Start Earning Today</span>
              <h2 className="text-3xl md:text-5xl font-heading font-extrabold text-[#0B2545] dark:text-white mb-4">Apply as a Referral Partner</h2>
            </div>

            <div className="bg-[#F8FAFC] dark:bg-[#11325B] p-6 sm:p-10 rounded-[2rem] border border-gray-200 dark:border-white/10 shadow-xl relative overflow-hidden">
              {!isSuccess ? (
                <div>
                  <div className="flex items-center justify-between mb-8">
                    <div className="flex items-center gap-2 md:gap-3">
                      <div className={`w-6 h-6 md:w-8 md:h-8 rounded-full flex items-center justify-center font-bold text-xs md:text-sm ${formStep >= 1 ? 'bg-[#0097B2] text-white shadow-lg' : 'bg-gray-200 text-gray-500'}`}>1</div>
                      <span className={`text-[10px] md:text-xs font-bold uppercase tracking-wider ${formStep >= 1 ? 'text-[#0B2545] dark:text-white' : 'text-gray-400'}`}>Basic Info</span>
                    </div>
                    <div className={`h-1 flex-grow mx-2 md:mx-4 rounded-full ${formStep === 2 ? 'bg-[#0097B2]' : 'bg-gray-200 dark:bg-white/10'}`}></div>
                    <div className="flex items-center gap-2 md:gap-3">
                      <div className={`w-6 h-6 md:w-8 md:h-8 rounded-full flex items-center justify-center font-bold text-xs md:text-sm ${formStep === 2 ? 'bg-[#0097B2] text-white shadow-lg' : 'bg-gray-200 dark:bg-white/10 text-gray-500 dark:text-gray-400'}`}>2</div>
                      <span className={`text-[10px] md:text-xs font-bold uppercase tracking-wider ${formStep === 2 ? 'text-[#0B2545] dark:text-white' : 'text-gray-400'}`}>Network Details</span>
                    </div>
                  </div>

                  <form onSubmit={handleSubmit}>
                    {/* STEP 1 */}
                    {formStep === 1 && (
                      <div className="space-y-5 md:space-y-6 animate-fade-in-up">
                        <div className="grid sm:grid-cols-2 gap-5 md:gap-6">
                          <div>
                            <label className="block text-[10px] font-bold text-gray-500 dark:text-[#E6EEF2]/60 uppercase tracking-widest mb-2">Full Name *</label>
                            <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} required className="w-full bg-white dark:bg-[#071A30] border border-gray-200 dark:border-white/10 rounded-xl px-4 py-3 md:py-3.5 text-sm text-[#0B2545] dark:text-white focus:border-[#0097B2] outline-none" />
                          </div>
                          <div>
                            <label className="block text-[10px] font-bold text-gray-500 dark:text-[#E6EEF2]/60 uppercase tracking-widest mb-2">Email Address *</label>
                            <input type="email" name="email" value={formData.email} onChange={handleChange} required className="w-full bg-white dark:bg-[#071A30] border border-gray-200 dark:border-white/10 rounded-xl px-4 py-3 md:py-3.5 text-sm text-[#0B2545] dark:text-white focus:border-[#0097B2] outline-none" />
                          </div>
                        </div>
                        <div className="grid sm:grid-cols-2 gap-5 md:gap-6">
                          <div>
                            <label className="block text-[10px] font-bold text-gray-500 dark:text-[#E6EEF2]/60 uppercase tracking-widest mb-2">Phone Number *</label>
                            <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required className="w-full bg-white dark:bg-[#071A30] border border-gray-200 dark:border-white/10 rounded-xl px-4 py-3 md:py-3.5 text-sm text-[#0B2545] dark:text-white focus:border-[#0097B2] outline-none" />
                          </div>
                          <div>
                            <label className="block text-[10px] font-bold text-gray-500 dark:text-[#E6EEF2]/60 uppercase tracking-widest mb-2">City/Location *</label>
                            <input type="text" name="city" value={formData.city} onChange={handleChange} required className="w-full bg-white dark:bg-[#071A30] border border-gray-200 dark:border-white/10 rounded-xl px-4 py-3 md:py-3.5 text-sm text-[#0B2545] dark:text-white focus:border-[#0097B2] outline-none" />
                          </div>
                        </div>
                        <div>
                          <label className="block text-[10px] font-bold text-gray-500 dark:text-[#E6EEF2]/60 uppercase tracking-widest mb-2">Current Profession / Title *</label>
                          <input type="text" name="profession" value={formData.profession} onChange={handleChange} required placeholder="e.g. Business Consultant" className="w-full bg-white dark:bg-[#071A30] border border-gray-200 dark:border-white/10 rounded-xl px-4 py-3 md:py-3.5 text-sm text-[#0B2545] dark:text-white focus:border-[#0097B2] outline-none" />
                        </div>
                        <button type="button" onClick={nextStep} className="w-full py-3 md:py-4 rounded-xl bg-[#0B2545] dark:bg-[#0097B2] text-white font-bold transition-all flex justify-center gap-2">
                          Next Step <i className="fas fa-arrow-right mt-1"></i>
                        </button>
                      </div>
                    )}

                    {/* STEP 2 */}
                    {formStep === 2 && (
                      <div className="space-y-5 md:space-y-6 animate-fade-in-up">
                        
                        <div>
                          <label className="block text-[10px] font-bold text-gray-500 dark:text-[#E6EEF2]/60 uppercase tracking-widest mb-3">Your Primary Network (Select Multiple)</label>
                          <div className="flex flex-wrap gap-2">
                            {availableSkills.map((skill) => (
                              <span key={skill} onClick={() => handleSkillToggle(skill)} className={`cursor-pointer px-3 md:px-4 py-1.5 md:py-2 rounded-full text-[10px] md:text-xs font-bold border transition-all ${formData.skills.includes(skill) ? 'bg-[#0097B2] text-white border-[#0097B2]' : 'bg-white dark:bg-[#071A30] text-gray-500 dark:text-[#E6EEF2]/70 border-gray-200 dark:border-white/10 hover:border-gray-300'}`}>
                                {formData.skills.includes(skill) && <i className="fas fa-check mr-1.5"></i>} {skill}
                              </span>
                            ))}
                          </div>
                        </div>

                        <div>
                          <label className="block text-[10px] font-bold text-gray-500 dark:text-[#E6EEF2]/60 uppercase tracking-widest mb-2">LinkedIn URL (Optional but recommended)</label>
                          <input type="url" name="portfolio" value={formData.portfolio} onChange={handleChange} placeholder="https://linkedin.com/in/..." className="w-full bg-white dark:bg-[#071A30] border border-gray-200 dark:border-white/10 rounded-xl px-4 py-3 md:py-3.5 text-sm text-[#0B2545] dark:text-white focus:border-[#0097B2] outline-none" />
                        </div>

                        <div>
                          <label className="block text-[10px] font-bold text-gray-500 dark:text-[#E6EEF2]/60 uppercase tracking-widest mb-2">Do you have a client in mind right now? (Optional)</label>
                          <textarea name="message" value={formData.message} onChange={handleChange} rows="2" className="w-full bg-white dark:bg-[#071A30] border border-gray-200 dark:border-white/10 rounded-xl px-4 py-3 text-sm text-[#0B2545] dark:text-white focus:border-[#0097B2] outline-none resize-none"></textarea>
                        </div>

                        <div className="flex gap-4">
                          <button type="button" onClick={() => setFormStep(1)} className="px-5 md:px-6 py-3 md:py-4 rounded-xl border border-gray-300 dark:border-white/20 font-bold hover:bg-gray-100 dark:hover:bg-white/5 transition-all text-gray-600 dark:text-gray-300">Back</button>
                          <button type="submit" disabled={isSubmitting} className={`flex-grow py-3 md:py-4 rounded-xl text-white font-bold transition-all shadow-[0_5px_15px_rgba(0,151,178,0.3)] flex justify-center items-center gap-2 ${isSubmitting ? 'bg-gray-400' : 'bg-[#0097B2] hover:bg-[#0B2545] dark:hover:bg-white dark:hover:text-[#0B2545]'}`}>
                            {isSubmitting ? <><i className="fas fa-circle-notch fa-spin"></i> Submitting...</> : <>Submit Application <i className="fas fa-rocket"></i></>}
                          </button>
                        </div>
                      </div>
                    )}
                  </form>
                </div>
              ) : (
                <div className="flex flex-col justify-center items-center text-center py-12 animate-fade-in-up">
                  <div className="w-20 h-20 bg-green-500/10 rounded-full flex items-center justify-center mb-6 animate-[bounce_2s_infinite]">
                    <i className="fas fa-check text-4xl text-green-500"></i>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-[#0B2545] dark:text-white mb-3">Application Received! 🎉</h3>
                  <p className="text-gray-500 dark:text-[#E6EEF2]/80 text-sm mb-8 max-w-sm mx-auto">Redirecting you to our WhatsApp to confirm your application...</p>
                  <a href={waLink} target="_blank" rel="noreferrer" className="px-8 py-4 bg-[#25D366] text-white font-bold rounded-xl shadow-lg hover:-translate-y-1 transition-all flex gap-2">
                    <i className="fab fa-whatsapp text-xl"></i> Ping on WhatsApp
                  </a>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* 5️⃣ FAQ SECTION */}
        <section className="py-16 md:py-24 bg-white dark:bg-[#071A30] transition-colors duration-300 border-t border-gray-200 dark:border-white/5 relative z-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10 md:mb-16">
               <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-[#0B2545] dark:text-white mb-4">Referral FAQs</h2>
            </div>
            <div className="space-y-3 md:space-y-4">
              {faqData.map((faq, index) => (
                <div key={index} className="bg-[#F8FAFC] dark:bg-[#11325B] border border-gray-200 dark:border-white/5 rounded-2xl overflow-hidden shadow-sm hover:border-[#0097B2]/50 transition-all duration-300">
                  <button onClick={() => toggleFaq(index)} className="w-full px-6 md:px-8 py-5 md:py-6 text-left font-bold text-[#0B2545] dark:text-white flex justify-between items-center text-sm md:text-base">
                    {faq.q}
                    <div className={`w-6 h-6 md:w-8 md:h-8 rounded-full flex-shrink-0 flex items-center justify-center transition-all duration-300 ${activeFaq === index ? "bg-[#0097B2] text-white rotate-180" : "bg-white dark:bg-[#0B2545] text-[#0097B2] border border-gray-200 dark:border-white/10"}`}>
                      <i className="fas fa-chevron-down text-xs md:text-sm"></i>
                    </div>
                  </button>
                  <div className={`px-6 md:px-8 pb-6 md:pb-8 text-gray-600 dark:text-[#E6EEF2]/80 text-sm leading-relaxed ${activeFaq === index ? "block" : "hidden"}`}>
                    {faq.a}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

      </main>
    </>
  );
}