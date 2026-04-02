// file: app/partner/PartnerClient.js
"use client";
import { useState } from "react";
import confetti from "canvas-confetti";
import Link from "next/link";

const WHATSAPP_NUMBER = "917073538077"; 
const getWhatsAppLink = (message) => `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

export function PartnerClient() {
  
  // Form States
  const [formStep, setFormStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [waLink, setWaLink] = useState("#");

  const [formData, setFormData] = useState({
    fullName: "", email: "", phone: "", city: "", profession: "",
    model: "Not Sure Yet", // Default for the main hub page
    experience: "Intermediate", 
    skills: [],
    message: "",
    portfolio: ""
  });

  const [activeFaq, setActiveFaq] = useState(null);
  const toggleFaq = (i) => setActiveFaq(activeFaq === i ? null : i);

  // Broad skills for any partner
  const availableSkills = ["Marketing", "Ads", "SEO", "Automation", "Design", "Web Dev", "Finance", "Sales/Network", "Other"];

  // NOTE: Mouse Glow Effect logic removed to use the global CursorGlow from layout.js

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", "Accept": "application/json" },
        body: JSON.stringify({
          access_key: "ec0688f4-c3f4-4282-938e-31f398af51d9",
          subject: "🌐 New GENERAL Partner Application",
          from_name: "Partner Ecosystem",
          Name: formData.fullName,
          Email: formData.email,
          Phone: formData.phone,
          City: formData.city,
          Profession: formData.profession,
          "Model Preference": formData.model,
          Experience: formData.experience,
          Skills: formData.skills.join(", ") || "None selected",
          Portfolio: formData.portfolio || "Not provided",
          Message: formData.message || "No message"
        })
      });

      const result = await response.json();

      if (result.success) {
        confetti({ particleCount: 300, spread: 100, origin: { y: 0.6 }, colors: ['#0097B2', '#ffffff'] });
        setIsSuccess(true);

        const waMessage = `Hi SM NextGen Team, I want to join the Ecosystem 🚀\n\n*Name:* ${formData.fullName}\n*Phone:* ${formData.phone}\n*Model Preference:* ${formData.model}\n*Profession:* ${formData.profession}\n*Experience:* ${formData.experience}\n*Skills:* ${formData.skills.join(", ") || "N/A"}\n\nPlease guide me on which partner role fits me best.`;
        const generatedWaLink = getWhatsAppLink(waMessage);
        setWaLink(generatedWaLink);

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
    { q: "Can I white-label your services?", a: "Yes! Growth Partners have the unique opportunity to leverage our entire execution engine under their own brand. We handle the code, legal, and finance work while you manage the client strategy." },
    { q: "Do I need technical skills to join?", a: "For Referral Partners, technical knowledge is not required—just a strong B2B network. For Execution Partners, specific technical skills are vetted rigorously." },
    { q: "Is the commission structure open and transparent?", a: "Absolutely. We pride ourselves on complete financial clarity. Payouts for referrals and project milestones are defined clearly at the start of any contract." },
    { q: "Do you have clients outside of India?", a: "India is our home base, but our ecosystem serves clients globally. Partners can operate from and refer businesses from anywhere in the world." }
  ];

  return (
    <>
      {/* <main> class updated to remove hardcoded background colors, relying on layout.js */}
      <main className="relative w-full z-10 overflow-x-hidden transition-colors duration-300">
        
        {/* 1️⃣ HERO SECTION */}
        <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 bg-[#071A30] text-center px-4 z-10 overflow-hidden border-b border-white/5">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:32px_32px] z-0"></div>
          <div className="absolute top-[-20%] left-1/2 transform -translate-x-1/2 w-[600px] md:w-[800px] h-[600px] md:h-[800px] bg-[#0097B2]/20 rounded-full blur-[150px] pointer-events-none z-0 animate-pulse"></div>
          
          <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center text-white">
            <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-xs font-bold uppercase tracking-widest text-[#0097B2] mb-6 backdrop-blur-md shadow-sm">
              <i className="fas fa-globe mr-2"></i> India's Vetted Growth Network
            </span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-extrabold mb-6 leading-tight tracking-tight drop-shadow-sm">
              Build With SM NextGen <br />
              <span className="text-[#0097B2] block mt-2">Grow Together.</span>
            </h1>
            <p className="text-base md:text-xl text-[#E6EEF2]/90 mb-10 leading-relaxed font-light max-w-3xl">
              Stop fighting for low-budget clients alone. Join India's fastest-growing ecosystem of professionals, freelancers, and strategists working together to scale modern businesses globally.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <button onClick={() => document.getElementById('models').scrollIntoView({behavior:'smooth'})} className="w-full sm:w-auto px-10 py-4 md:py-5 bg-[#0097B2] hover:bg-white hover:text-[#0B2545] text-white font-bold rounded-xl shadow-[0_0_30px_-5px_rgba(0,151,178,0.5)] transition-all hover:-translate-y-1 text-base md:text-lg">
                Explore Partner Models <i className="fas fa-arrow-down ml-2"></i>
              </button>
            </div>
            
            <div className="mt-12 flex items-center justify-center gap-6 text-[#E6EEF2]/50 text-sm font-bold">
              <span className="flex items-center gap-2"><i className="fas fa-check-circle text-[#0097B2]"></i> Global Pipeline</span>
              <span className="flex items-center gap-2"><i className="fas fa-check-circle text-[#0097B2]"></i> Real Projects</span>
              <span className="flex items-center gap-2"><i className="fas fa-check-circle text-[#0097B2]"></i> Complete Ops Support</span>
            </div>
          </div>
        </section>

        {/* 2️⃣ PROGRAM BENEFITS */}
        <section className="py-16 md:py-24 bg-white dark:bg-[#071A30] border-b border-gray-100 dark:border-white/5 relative z-20">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-5xl font-heading font-extrabold text-[#0B2545] dark:text-white mb-6">India's Premium B2B Ecosystem</h2>
            <div className="flex flex-wrap justify-center gap-4 md:gap-8 mb-12 text-sm md:text-base font-bold text-gray-500 dark:text-[#E6EEF2]/70">
              <span className="flex items-center gap-2"><i className="fas fa-times text-red-500"></i> Not a rigid job</span>
              <span className="flex items-center gap-2"><i className="fas fa-times text-red-400"></i> Not a cheap gig platform</span>
              <span className="flex items-center gap-2"><i className="fas fa-check text-green-500 text-lg"></i> It's a Mutual Growth Alliance</span>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {[{icon: "fa-infinity", t: "Long-term collaboration"}, {icon: "fa-wallet", t: "Flexible earning models"}, {icon: "fa-briefcase", t: "Real B2B Clients"}, {icon: "fa-chart-line", t: "Scalable revenue"}].map((item, i) => (
                <div key={i} className="bg-[#F8FAFC] dark:bg-[#11325B] p-6 rounded-2xl border border-gray-100 dark:border-white/5 hover:border-[#0097B2]/50 transition-colors duration-300">
                  <i className={`fas ${item.icon} text-3xl md:text-4xl text-[#0097B2] mb-4`}></i>
                  <h4 className="font-bold text-[#0B2545] dark:text-white text-sm md:text-base">{item.t}</h4>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 3️⃣ SERVICE ECOSYSTEM (Updated: Exact Priority Hierarchy) */}
        <section className="py-16 md:py-24 bg-[#F8FAFC] dark:bg-[#0B1120] border-b border-gray-100 dark:border-white/5 relative z-20">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-5xl font-heading font-extrabold text-[#0B2545] dark:text-white mb-4">What We Build For Clients Together</h2>
            <p className="text-gray-600 dark:text-[#E6EEF2]/70 mb-12 text-lg">Our core focuses on revenue generation, fully supported by robust tech and business ops.</p>
            
            <div className="grid md:grid-cols-3 gap-6 md:gap-8 text-[#0B2545] dark:text-white items-start">
              
              {/* 1. Secondary Focus: Tech & AI Automation */}
              <div className="bg-white dark:bg-[#162032] p-8 rounded-[2rem] shadow-sm border border-gray-100 dark:border-white/5 hover:-translate-y-2 transition-transform duration-300">
                <div className="w-14 h-14 rounded-2xl bg-[#0097B2]/10 text-[#0097B2] flex items-center justify-center text-2xl mx-auto mb-6"><i className="fas fa-microchip"></i></div>
                <h3 className="text-xl font-bold mb-3">Tech & AI Automation</h3>
                <p className="text-sm text-gray-500 dark:text-[#E6EEF2]/70">The backbone of scale. Custom Web/App Development, 24/7 AI Chatbots, seamless CRM Integrations, and operational workflows.</p>
              </div>
              
              {/* 2. Primary Focus: Marketing & Sales (Highlighted) */}
              <div className="bg-white dark:bg-[#162032] p-8 rounded-[2rem] shadow-[0_10px_40px_rgba(0,151,178,0.15)] border-2 border-[#0097B2] hover:-translate-y-2 transition-transform duration-300 relative overflow-hidden isolate">
                <div className="absolute top-0 right-0 bg-[#0097B2] text-white text-[10px] font-bold px-4 py-1.5 rounded-bl-2xl z-10 shadow-sm">CORE ENGINE</div>
                <div className="absolute inset-0 bg-gradient-to-b from-[#0097B2]/5 to-transparent z-0 pointer-events-none"></div>
                <div className="w-16 h-16 rounded-2xl bg-[#0097B2]/10 text-[#0097B2] flex items-center justify-center text-3xl mx-auto mb-6 relative z-10"><i className="fas fa-bullhorn"></i></div>
                <h3 className="text-2xl font-bold mb-3 relative z-10">Marketing & Sales</h3>
                <p className="text-sm text-gray-500 dark:text-[#E6EEF2]/70 relative z-10">Our primary driver. Advanced Performance Ads, Search Engine Optimization (SEO), high-converting Funnels, and complete Lead Generation systems.</p>
              </div> 

              {/* 3. Tertiary Focus: Finance & Legal */}
              <div className="bg-white dark:bg-[#162032] p-8 rounded-[2rem] shadow-sm border border-gray-100 dark:border-white/5 hover:-translate-y-2 transition-transform duration-300">
                <div className="w-14 h-14 rounded-2xl bg-[#0097B2]/10 text-[#0097B2] flex items-center justify-center text-2xl mx-auto mb-6"><i className="fas fa-balance-scale"></i></div>
                <h3 className="text-xl font-bold mb-3">Finance & Legal</h3>
                <p className="text-sm text-gray-500 dark:text-[#E6EEF2]/70">Ensuring stability. Business Registration, GST/Tax Compliance, Bookkeeping, and Virtual CFO advisory services.</p>
              </div>
              
            </div>
          </div>
        </section>

        {/* 4️⃣ HOW THE ECOSYSTEM WORKS */}
        <section className="py-16 md:py-24 bg-white dark:bg-[#071A30] border-b border-gray-100 dark:border-white/5 relative z-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-heading font-extrabold text-[#0B2545] dark:text-white mb-4">How The Network Operates</h2>
              <p className="text-gray-600 dark:text-[#E6EEF2]/70 max-w-2xl mx-auto">We've decentralized the traditional agency model. Here is how we combine forces to deliver world-class solutions.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 relative">
              <div className="hidden md:block absolute top-12 left-[15%] right-[15%] h-0.5 bg-gradient-to-r from-transparent via-[#0097B2]/50 to-transparent z-0"></div>

              <div className="relative z-10 bg-[#F8FAFC] dark:bg-[#11325B] p-8 rounded-[2rem] shadow-sm border border-gray-100 dark:border-white/5 text-center hover:-translate-y-2 transition-transform">
                <div className="w-16 h-16 rounded-full bg-[#0B2545] text-white flex items-center justify-center text-xl font-bold mx-auto mb-6 shadow-lg shadow-[#0B2545]/20 border-4 border-[#F8FAFC] dark:border-[#11325B]">1</div>
                <h3 className="text-xl font-bold text-[#0B2545] dark:text-white mb-3">Client Acquisition</h3>
                <p className="text-sm text-gray-500 dark:text-[#E6EEF2]/70 leading-relaxed">Referral and Growth partners leverage their networks to bring high-value clients into the SM NextGen ecosystem.</p>
              </div>

              <div className="relative z-10 bg-[#F8FAFC] dark:bg-[#11325B] p-8 rounded-[2rem] shadow-sm border border-gray-100 dark:border-white/5 text-center hover:-translate-y-2 transition-transform">
                <div className="w-16 h-16 rounded-full bg-[#0097B2] text-white flex items-center justify-center text-xl font-bold mx-auto mb-6 shadow-lg shadow-[#0097B2]/30 border-4 border-[#F8FAFC] dark:border-[#11325B]">2</div>
                <h3 className="text-xl font-bold text-[#0B2545] dark:text-white mb-3">Strategy & Delegation</h3>
                <p className="text-sm text-gray-500 dark:text-[#E6EEF2]/70 leading-relaxed">Our core team and Growth partners define the roadmap and divide the execution tasks across our vetted talent pool.</p>
              </div>

              <div className="relative z-10 bg-[#F8FAFC] dark:bg-[#11325B] p-8 rounded-[2rem] shadow-sm border border-gray-100 dark:border-white/5 text-center hover:-translate-y-2 transition-transform">
                <div className="w-16 h-16 rounded-full bg-[#0B2545] text-white flex items-center justify-center text-xl font-bold mx-auto mb-6 shadow-lg shadow-green-500/30 border-4 border-[#F8FAFC] dark:border-[#11325B]">3</div>
                <h3 className="text-xl font-bold text-[#0B2545] dark:text-white mb-3">Execution & Payouts</h3>
                <p className="text-sm text-gray-500 dark:text-[#E6EEF2]/70 leading-relaxed">Execution partners deliver top-tier work. Clients get results, and all partners receive their revenue share securely.</p>
              </div>
            </div>
          </div>
        </section>

        {/* 5️⃣ PARTNERSHIP MODELS */}
        <section id="models" className="py-16 md:py-24 bg-[#F8FAFC] dark:bg-[#0B1120] relative z-20 transition-colors duration-300">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-heading font-extrabold text-[#0B2545] dark:text-white mb-4">Choose Your Collaboration Path</h2>
              <p className="text-gray-600 dark:text-[#E6EEF2]/70 text-lg max-w-2xl mx-auto">Select the model that fits your skills to see full details and commission structures.</p>
            </div>
            
            <div className="grid lg:grid-cols-3 gap-8">
              
              {/* Referral Partner */}
              <div className="bg-white dark:bg-[#162032] p-8 md:p-10 rounded-[2.5rem] border border-gray-200 dark:border-white/5 flex flex-col hover:border-[#0097B2] hover:shadow-xl transition-all duration-300 relative group">
                <div className="w-16 h-16 bg-[#F8FAFC] dark:bg-[#071A30] shadow-sm rounded-full flex items-center justify-center text-[#0097B2] text-2xl mb-6 group-hover:scale-110 transition-transform duration-300"><i className="fas fa-share-alt"></i></div>
                <h3 className="text-2xl font-bold text-[#0B2545] dark:text-white mb-2">1. Referral Partner</h3>
                <span className="inline-block text-xs font-bold text-[#0097B2] bg-[#0097B2]/10 px-3 py-1 rounded-full w-max mb-4">Zero Execution</span>
                <p className="text-sm text-gray-600 dark:text-[#E6EEF2]/70 mb-6 flex-grow">Perfect for consultants and connectors. Just refer clients to us, and we handle the closing, delegation, and execution work.</p>
                <ul className="space-y-3 text-sm font-bold text-[#0B2545] dark:text-[#E6EEF2] mb-8 pb-8 border-b border-gray-200 dark:border-white/10">
                  <li><i className="fas fa-check text-green-500 mr-2"></i> Earn 10% – 20% commission</li>
                  <li><i className="fas fa-check text-green-500 mr-2"></i> Recurring payouts on retainers</li>
                </ul>
                <Link href="/partners/referral" className="w-full py-4 rounded-xl border-2 border-[#0097B2] text-[#0097B2] font-bold hover:bg-[#0097B2] hover:text-white text-center transition-all duration-300 block">
                  👉 View Dedicated Page
                </Link>
              </div>

              {/* Growth Partner */}
              <div className="bg-[#0B2545] p-8 md:p-10 rounded-[2.5rem] border-2 border-[#0097B2] shadow-[0_20px_50px_rgba(0,151,178,0.25)] flex flex-col transform md:-translate-y-4 relative isolate z-10 hover:-translate-y-6 transition-transform duration-300">
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#0097B2] text-white px-5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider shadow-md">Highest Earning</div>
                <div className="w-16 h-16 bg-white backdrop-blur-sm rounded-full flex items-center justify-center text-[#0B2545] text-2xl mb-6"><i className="fas fa-chess-king"></i></div>
                <h3 className="text-2xl font-bold text-white mb-2">2. Growth Partner</h3>
                <span className="inline-block text-xs font-bold text-white bg-white/10 px-3 py-1 rounded-full w-max mb-4">Leadership Role</span>
                <p className="text-sm text-[#E6EEF2]/80 mb-6 flex-grow">For strategists and agency owners. You bring the client AND lead the strategy, leveraging our entire ecosystem to deliver.</p>
                <ul className="space-y-3 text-sm font-bold text-white mb-8 pb-8 border-b border-white/20">
                  <li><i className="fas fa-check text-[#0097B2] mr-2"></i> Earn 30% - 60%+ Revenue Share</li>
                  <li><i className="fas fa-check text-[#0097B2] mr-2"></i> White-label our infrastructure</li>
                </ul>
                <Link href="/partners/growth" className="w-full py-4 rounded-xl bg-[#0097B2] text-white font-bold shadow-lg hover:bg-white hover:text-[#0B2545] text-center transition-all duration-300 block">
                  👉 View Dedicated Page
                </Link>
              </div>

              {/* Execution Partner */}
              <div className="bg-white dark:bg-[#162032] p-8 md:p-10 rounded-[2.5rem] border border-gray-200 dark:border-white/5 flex flex-col hover:border-[#0097B2] hover:shadow-xl transition-all duration-300 relative group">
                <div className="w-16 h-16 bg-[#F8FAFC] dark:bg-[#071A30] shadow-sm rounded-full flex items-center justify-center text-[#0097B2] text-2xl mb-6 group-hover:scale-110 transition-transform duration-300"><i className="fas fa-laptop-code"></i></div>
                <h3 className="text-2xl font-bold text-[#0B2545] dark:text-white mb-2">3. Execution Partner</h3>
                <span className="inline-block text-xs font-bold text-[#0097B2] bg-[#0097B2]/10 px-3 py-1 rounded-full w-max mb-4">Vetted Talent Pool</span>
                <p className="text-sm text-gray-600 dark:text-[#E6EEF2]/70 mb-6 flex-grow">For highly skilled specialists (Ads, Devs, SEO). We bring the client, you focus purely on delivering world-class results.</p>
                <ul className="space-y-3 text-sm font-bold text-[#0B2545] dark:text-[#E6EEF2] mb-8 pb-8 border-b border-gray-200 dark:border-white/10">
                  <li><i className="fas fa-check text-green-500 mr-2"></i> Earn 20% – 40% of project value</li>
                  <li><i className="fas fa-check text-green-500 mr-2"></i> Guaranteed milestone payouts</li>
                </ul>
                <Link href="/partners/execution" className="w-full py-4 rounded-xl border-2 border-[#0097B2] text-[#0097B2] font-bold hover:bg-[#0097B2] hover:text-white text-center transition-all duration-300 block">
                  👉 View Dedicated Page
                </Link>
              </div>

            </div>
          </div>
        </section>

        {/* 6️⃣ GENERAL APPLICATION FORM */}
        <section id="generalForm" className="py-16 md:py-24 bg-white dark:bg-[#071A30] border-t border-gray-200 dark:border-white/5 relative z-20">
          <div className="max-w-4xl mx-auto px-4">
            
            <div className="text-center mb-10">
              <span className="inline-block px-4 py-1 rounded-full bg-gray-100 text-gray-700 dark:bg-white/10 dark:text-gray-300 text-xs font-bold uppercase tracking-widest mb-4 border border-gray-200 dark:border-white/20">General Application</span>
              <h2 className="text-3xl md:text-5xl font-heading font-extrabold text-[#0B2545] dark:text-white mb-4">Not sure which model fits?</h2>
              <p className="text-sm text-gray-500 dark:text-[#E6EEF2]/70 max-w-2xl mx-auto">Fill out this quick application. Our team will review your profile and suggest the best pathway for you to start earning in our ecosystem.</p>
            </div>

            <div className="bg-[#F8FAFC] dark:bg-[#11325B] p-6 sm:p-10 rounded-[2rem] border border-gray-200 dark:border-white/10 shadow-xl relative overflow-hidden">
              
              {!isSuccess ? (
                <div>
                  <form onSubmit={handleSubmit}>
                    
                    {/* STEP 1: Basic Info */}
                    {formStep === 1 && (
                      <div className="space-y-5 md:space-y-6 animate-fade-in-up">
                        <div className="grid sm:grid-cols-2 gap-5 md:gap-6">
                          <div>
                            <label className="block text-[10px] font-bold text-gray-500 dark:text-[#E6EEF2]/60 uppercase tracking-widest mb-2">Full Name *</label>
                            <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} required placeholder="John Doe" className="w-full bg-white dark:bg-[#071A30] border border-gray-200 dark:border-white/10 rounded-xl px-4 py-3 md:py-3.5 text-sm text-[#0B2545] dark:text-white focus:border-[#0097B2] focus:ring-1 focus:ring-[#0097B2] outline-none" />
                          </div>
                          <div>
                            <label className="block text-[10px] font-bold text-gray-500 dark:text-[#E6EEF2]/60 uppercase tracking-widest mb-2">Email Address *</label>
                            <input type="email" name="email" value={formData.email} onChange={handleChange} required placeholder="work@email.com" className="w-full bg-white dark:bg-[#071A30] border border-gray-200 dark:border-white/10 rounded-xl px-4 py-3 md:py-3.5 text-sm text-[#0B2545] dark:text-white focus:border-[#0097B2] focus:ring-1 focus:ring-[#0097B2] outline-none" />
                          </div>
                        </div>
                        <div className="grid sm:grid-cols-2 gap-5 md:gap-6">
                          <div>
                            <label className="block text-[10px] font-bold text-gray-500 dark:text-[#E6EEF2]/60 uppercase tracking-widest mb-2">Phone Number *</label>
                            <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required placeholder="9876543210" className="w-full bg-white dark:bg-[#071A30] border border-gray-200 dark:border-white/10 rounded-xl px-4 py-3 md:py-3.5 text-sm text-[#0B2545] dark:text-white focus:border-[#0097B2] focus:ring-1 focus:ring-[#0097B2] outline-none" />
                          </div>
                          <div>
                            <label className="block text-[10px] font-bold text-gray-500 dark:text-[#E6EEF2]/60 uppercase tracking-widest mb-2">City/Location *</label>
                            <input type="text" name="city" value={formData.city} onChange={handleChange} required placeholder="Delhi, India" className="w-full bg-white dark:bg-[#071A30] border border-gray-200 dark:border-white/10 rounded-xl px-4 py-3 md:py-3.5 text-sm text-[#0B2545] dark:text-white focus:border-[#0097B2] focus:ring-1 focus:ring-[#0097B2] outline-none" />
                          </div>
                        </div>
                        <div>
                          <label className="block text-[10px] font-bold text-gray-500 dark:text-[#E6EEF2]/60 uppercase tracking-widest mb-2">Current Profession / Title *</label>
                          <input type="text" name="profession" value={formData.profession} onChange={handleChange} required placeholder="e.g. Freelance Web Developer, Agency Owner" className="w-full bg-white dark:bg-[#071A30] border border-gray-200 dark:border-white/10 rounded-xl px-4 py-3 md:py-3.5 text-sm text-[#0B2545] dark:text-white focus:border-[#0097B2] focus:ring-1 focus:ring-[#0097B2] outline-none" />
                        </div>
                        <button type="button" onClick={nextStep} className="w-full py-3 md:py-4 rounded-xl bg-[#0B2545] dark:bg-[#0097B2] text-white font-bold transition-all flex items-center justify-center gap-2 hover:shadow-lg">
                          Next: Profile Details <i className="fas fa-arrow-right"></i>
                        </button>
                      </div>
                    )}

                    {/* STEP 2: Model & Skills */}
                    {formStep === 2 && (
                      <div className="space-y-5 md:space-y-6 animate-fade-in-up">
                        
                        <div>
                          <label className="block text-[10px] font-bold text-gray-500 dark:text-[#E6EEF2]/60 uppercase tracking-widest mb-3">Which model interests you most?</label>
                          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                            {["Referral", "Execution", "Growth", "Not Sure Yet"].map((mod) => (
                              <div key={mod} onClick={() => setFormData({...formData, model: mod})} className={`cursor-pointer border-2 rounded-xl p-3 text-center transition-all ${formData.model === mod ? 'border-[#0097B2] bg-[#0097B2]/10 dark:bg-[#0097B2]/20' : 'border-gray-200 dark:border-white/10 bg-white dark:bg-[#071A30] hover:border-gray-300'}`}>
                                <span className={`text-xs md:text-sm font-bold ${formData.model === mod ? 'text-[#0097B2]' : 'text-gray-500 dark:text-gray-400'}`}>{mod}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div>
                          <label className="block text-[10px] font-bold text-gray-500 dark:text-[#E6EEF2]/60 uppercase tracking-widest mb-3">Experience Level</label>
                          <div className="grid grid-cols-3 gap-3">
                            {["Beginner", "Intermediate", "Expert"].map((exp) => (
                              <div key={exp} onClick={() => setFormData({...formData, experience: exp})} className={`cursor-pointer border-2 rounded-xl p-3 text-center transition-all ${formData.experience === exp ? 'border-[#0B2545] dark:border-white bg-[#0B2545] dark:bg-white text-white dark:text-[#0B2545]' : 'border-gray-200 dark:border-white/10 bg-white dark:bg-[#071A30] hover:border-gray-300 text-gray-500 dark:text-gray-400'}`}>
                                <span className="text-xs md:text-sm font-bold">{exp}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div>
                          <label className="block text-[10px] font-bold text-gray-500 dark:text-[#E6EEF2]/60 uppercase tracking-widest mb-3">Core Skills (Select Multiple)</label>
                          <div className="flex flex-wrap gap-2">
                            {availableSkills.map((skill) => (
                              <span key={skill} onClick={() => handleSkillToggle(skill)} className={`cursor-pointer px-3 md:px-4 py-1.5 md:py-2 rounded-full text-[10px] md:text-xs font-bold border transition-all ${formData.skills.includes(skill) ? 'bg-[#0097B2] text-white border-[#0097B2] shadow-md' : 'bg-white dark:bg-[#071A30] text-gray-500 dark:text-[#E6EEF2]/70 border-gray-200 dark:border-white/10 hover:border-gray-300'}`}>
                                {formData.skills.includes(skill) && <i className="fas fa-check mr-1.5"></i>} {skill}
                              </span>
                            ))}
                          </div>
                        </div>

                        <div className="grid sm:grid-cols-2 gap-5 md:gap-6">
                           <div className="sm:col-span-2">
                            <label className="block text-[10px] font-bold text-gray-500 dark:text-[#E6EEF2]/60 uppercase tracking-widest mb-2">Portfolio / LinkedIn URL (Important)</label>
                            <input type="url" name="portfolio" value={formData.portfolio} onChange={handleChange} placeholder="https://" className="w-full bg-white dark:bg-[#071A30] border border-gray-200 dark:border-white/10 rounded-xl px-4 py-3 md:py-3.5 text-sm text-[#0B2545] dark:text-white focus:border-[#0097B2] outline-none" />
                          </div>
                        </div>

                        <div className="flex gap-4">
                          <button type="button" onClick={() => setFormStep(1)} className="px-5 md:px-6 py-3 md:py-4 rounded-xl border border-gray-300 dark:border-white/20 font-bold hover:bg-gray-100 dark:hover:bg-white/5 transition-all text-gray-600 dark:text-gray-300">
                            Back
                          </button>
                          <button type="submit" disabled={isSubmitting} className={`flex-grow py-3 md:py-4 rounded-xl text-white font-bold transition-all shadow-[0_5px_15px_rgba(0,151,178,0.3)] flex justify-center items-center gap-2 ${isSubmitting ? 'bg-gray-400 cursor-not-allowed' : 'bg-[#0097B2] hover:bg-[#0B2545] dark:hover:bg-white dark:hover:text-[#0B2545] hover:-translate-y-1'}`}>
                            {isSubmitting ? <><i className="fas fa-circle-notch fa-spin"></i> Submitting...</> : <>Submit General Application <i className="fas fa-rocket"></i></>}
                          </button>
                        </div>
                        <p className="text-center text-[10px] text-gray-400">Our team reviews all profiles within 24-48 hours.</p>
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
                  <p className="text-gray-500 dark:text-[#E6EEF2]/80 text-sm mb-8 max-w-sm mx-auto leading-relaxed">
                    Welcome to the ecosystem! We are reviewing your details. Redirecting you to our WhatsApp to say hello...
                  </p>
                  <a href={waLink} target="_blank" rel="noreferrer" className="px-8 py-4 bg-[#25D366] text-white font-bold rounded-xl shadow-lg hover:bg-[#20bd5a] hover:-translate-y-1 transition-all flex items-center justify-center gap-2">
                    <i className="fab fa-whatsapp text-xl"></i> Ping on WhatsApp
                  </a>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* 7️⃣ FAQ SECTION */}
        <section className="py-16 md:py-24 bg-white dark:bg-[#071A30] transition-colors duration-300 border-t border-gray-200 dark:border-white/5 relative z-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10 md:mb-16">
               <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-[#0B2545] dark:text-white mb-4">Partner FAQs</h2>
            </div>
            <div className="space-y-3 md:space-y-4">
              {faqData.map((faq, index) => (
                <div key={index} className="bg-[#F8FAFC] dark:bg-[#11325B] border border-gray-200 dark:border-white/5 rounded-2xl overflow-hidden shadow-sm hover:border-[#0097B2]/50 transition-all duration-300">
                  <button onClick={() => toggleFaq(index)} className="w-full px-6 md:px-8 py-5 md:py-6 text-left font-bold text-[#0B2545] dark:text-white flex justify-between items-center focus:outline-none text-sm md:text-base">
                    {faq.q}
                    <div className={`w-6 h-6 md:w-8 md:h-8 rounded-full flex-shrink-0 flex items-center justify-center transition-all duration-300 ${activeFaq === index ? "bg-[#0097B2] text-white rotate-180 shadow-md" : "bg-white dark:bg-[#0B2545] text-[#0097B2] border border-gray-200 dark:border-white/10"}`}>
                      <i className="fas fa-chevron-down text-xs md:text-sm"></i>
                    </div>
                  </button>
                  <div className={`px-6 md:px-8 pb-6 md:pb-8 text-gray-600 dark:text-[#E6EEF2]/80 text-sm md:text-base leading-relaxed ${activeFaq === index ? "block" : "hidden"}`}>
                    {faq.a}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 8️⃣ FINAL CTA */}
        <section className="relative py-20 md:py-32 bg-[#0B2545] overflow-hidden text-white z-20">
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#0097B2]/20 rounded-full blur-[100px] z-0"></div>
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#0097B2]/10 rounded-full blur-[100px] z-0"></div>
          
          <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-5xl font-heading font-extrabold mb-4 md:mb-6 leading-tight tracking-tight">Ready to Scale with SM NextGen?</h2>
            <p className="text-base md:text-lg text-[#E6EEF2]/80 mb-8 md:mb-10 font-light max-w-3xl mx-auto leading-relaxed">
              India's premium businesses are waiting. Join a vetted, elite network where you bring the client network, lead the strategy, or execute purely for results. Payouts are transparent.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6">
              <button onClick={() => document.getElementById('models').scrollIntoView({behavior:'smooth'})} className="w-full sm:w-auto px-8 py-4 md:py-5 bg-[#0097B2] hover:bg-white hover:text-[#0B2545] text-white font-bold rounded-xl shadow-[0_0_30px_-5px_rgba(0,151,178,0.5)] transition-all hover:-translate-y-1 text-base md:text-lg">
                Explore The Models <i className="fas fa-arrow-up transform rotate-45 ml-1"></i>
              </button>
              <a href={getWhatsAppLink("Hi SM NextGen, I have a quick question about the Partner Ecosystem.")} target="_blank" rel="noreferrer" className="w-full sm:w-auto px-8 py-4 md:py-5 bg-transparent border-2 border-[#E6EEF2]/30 hover:border-white text-white font-bold rounded-xl hover:bg-white/10 transition-colors flex items-center justify-center gap-2 text-base md:text-lg">
                <i className="fab fa-whatsapp text-xl"></i> Ask a Question
              </a>
            </div>
          </div>
        </section>

      </main>
    </>
  );
}