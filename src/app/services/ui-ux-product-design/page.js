"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";

// --- WHATSAPP SETUP ---
const WHATSAPP_NUMBER = "917073538077"; 
const getWhatsAppLink = (message) => `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

export default function UiUxDesignPage() {
  const [activeFaq, setActiveFaq] = useState(null);
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", business: "", budget: "" });
  const [submitted, setSubmitted] = useState(false);

  // 🚀 ADVANCED FORM SUBMIT (EMAIL + WHATSAPP)
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setSubmitted(true);

    try {
      // 1. Send data to Web3Forms (Email)
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          access_key: "ec0688f4-c3f4-4282-938e-31f398af51d9",
          subject: "🎨 New Lead: UI/UX & Product Design",
          from_name: "SM NextGen Services",
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          "Project Type": formData.business,
          "Project Budget": formData.budget,
        })
      });

      const result = await response.json();

      if (result.success) {
        // 2. Redirect to WhatsApp with details
        const leadMsg = `*New UI/UX Design Request* 🎨✨\n\n*Name:* ${formData.name}\n*Email:* ${formData.email}\n*Phone:* ${formData.phone}\n*Project Type:* ${formData.business}\n*Project Budget:* ${formData.budget}\n\nPlease review my details and schedule a design discovery call.`;
        
        setTimeout(() => {
          window.open(getWhatsAppLink(leadMsg), '_blank');
          setSubmitted(false);
          setFormData({ name: "", email: "", phone: "", business: "", budget: "" });
        }, 1500);
      } else {
        alert("Mail system error: " + result.message);
        setSubmitted(false);
      }
    } catch (error) {
      console.error("API error, proceeding to WhatsApp", error);
      alert("Network error. Please try again.");
      setSubmitted(false);
    }
  };

  const handleFormChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const faqs = [
    { q: "What is the difference between UI and UX?", a: "UX (User Experience) is how the product feels and functions—the logic, the wireframes, and the user journey. UI (User Interface) is how the product looks—the colors, typography, buttons, and visual design. We handle both to create products that are beautiful and intuitive." },
    { q: "What design tools do you use?", a: "Figma is our primary tool for everything from wireframing to high-fidelity prototyping. It allows us to collaborate with you in real-time, leave comments directly on designs, and easily hand off pixel-perfect assets to developers." },
    { q: "Do you also code the designs?", a: "Yes! While this service is strictly for UI/UX Design, our in-house Tech Development team can seamlessly take these Figma designs and build them into fully functional Web Apps, Mobile Apps, or Websites using React, Next.js, and Tailwind CSS." },
    { q: "What is a Design System and do I need one?", a: "A Design System is a master library of your brand's colors, fonts, buttons, and components. If you are building a large SaaS or enterprise app, a design system is crucial because it ensures your product looks consistent across hundreds of pages and speeds up future development." },
    { q: "Can I see prototypes before the final code is written?", a: "Absolutely. We deliver interactive, clickable prototypes in Figma. You can click through the app on your phone or desktop exactly as a real user would, allowing you to test the flow before spending money on engineering." }
  ];

  return (
    <main className="bg-[#F8FAFC] dark:bg-[#0B2545] font-body text-[#0B2545] dark:text-[#E6EEF2] min-h-screen selection:bg-[#0097B2] selection:text-white relative transition-colors duration-300">
      
      {/* 1️⃣ HERO SECTION */}
      <section className="relative pt-40 pb-20 bg-[#0B2545] overflow-hidden text-white">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-[#0B2545] via-[#0B2545]/95 to-[#0B2545]/60 z-10"></div>
          <img src="https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=2000&auto=format&fit=crop" 
               alt="UI UX Product Design Figma" 
               className="w-full h-full object-cover opacity-20 filter grayscale" />
        </div>
        <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-[#0097B2]/30 rounded-full blur-[120px] pointer-events-none"></div>

        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0097B2]/10 border border-[#0097B2]/30 text-[#0097B2] text-xs font-bold uppercase tracking-widest mb-6 backdrop-blur-sm">
                <i className="fas fa-paint-brush"></i> Pixel-Perfect Architecture
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold text-white mb-6 leading-tight">
                Design That Looks Good. <br /> <span className="text-[#0097B2]">UX That Converts.</span>
              </h1>
              <p className="text-lg text-[#E6EEF2] mb-8 leading-relaxed font-body max-w-xl">
                We craft intuitive user journeys, wireframes, and premium interfaces. Whether you are building a complex SaaS dashboard or a consumer mobile app, we design experiences your users will love.
              </p>
              <ul className="space-y-3 mb-10 text-[#E6EEF2] font-medium text-sm md:text-base">
                <li className="flex items-center gap-3"><i className="fas fa-check-circle text-[#0097B2]"></i> Data-Backed User Journey Mapping</li>
                <li className="flex items-center gap-3"><i className="fas fa-check-circle text-[#0097B2]"></i> High-Fidelity Figma Prototyping</li>
                <li className="flex items-center gap-3"><i className="fas fa-check-circle text-[#0097B2]"></i> Scalable Design Systems</li>
              </ul>
              <div className="flex flex-col sm:flex-row items-center gap-4">
                <a href="#leadForm" className="w-full sm:w-auto px-8 py-4 bg-[#0097B2] hover:bg-white hover:text-[#0B2545] text-white font-bold rounded-xl shadow-lg transition-all hover:-translate-y-1 text-center">
                  Discuss Your Design
                </a>
                <Link href="/pricing" className="w-full sm:w-auto px-8 py-4 bg-transparent hover:bg-white/10 text-white font-bold rounded-xl border border-[#E6EEF2]/30 transition-colors text-center">
                  View Design Plans
                </Link>
              </div>
            </div>
            
            {/* Right Mockup */}
            <div className="hidden lg:block relative isolate transform-gpu">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/10 rotate-[-2deg] hover:rotate-0 transition-transform duration-500 bg-[#071A30] p-4">
                <img src="https://images.unsplash.com/photo-1618761714954-0b8cd0026356?q=80&w=2070&auto=format&fit=crop" alt="Figma UI UX Design Screen" className="w-full h-[400px] object-cover rounded-2xl opacity-90" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B2545] to-transparent rounded-3xl"></div>
                <div className="absolute bottom-10 left-10 right-10">
                  <div className="bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-xl text-white flex justify-between items-center">
                    <div>
                      <p className="text-xs text-[#0097B2] font-bold uppercase mb-1">User Retention</p>
                      <p className="font-bold text-lg leading-tight">Zero-Friction Interfaces</p>
                    </div>
                    <div className="w-12 h-12 bg-[#0097B2]/20 rounded-full flex items-center justify-center text-[#0097B2]">
                      <i className="fab fa-figma"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2️⃣ TRUST BAR */}
      <section className="py-6 bg-white dark:bg-[#071A30] border-b border-gray-200 dark:border-white/5 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-wrap justify-center sm:justify-between items-center gap-6 text-sm font-bold text-[#0B2545] dark:text-[#E6EEF2]">
            <div className="flex items-center gap-2"><i className="fab fa-figma text-[#0097B2] text-xl"></i> Figma Experts</div>
            <div className="hidden md:block w-px h-6 bg-gray-300 dark:bg-white/10"></div>
            <div className="flex items-center gap-2"><i className="fas fa-universal-access text-[#0097B2] text-xl"></i> WCAG Accessibility Ready</div>
            <div className="hidden md:block w-px h-6 bg-gray-300 dark:bg-white/10"></div>
            <div className="flex items-center gap-2"><i className="fas fa-layer-group text-[#0097B2] text-xl"></i> Scalable Design Systems</div>
          </div>
        </div>
      </section>

      {/* 3️⃣ QUICK OVERVIEW */}
      <section className="py-16 bg-[#F8FAFC] dark:bg-[#0B2545] transition-colors duration-300">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-[#0B2545] dark:text-white mb-4">Bad Design Kills Good Products</h2>
          <p className="text-lg text-gray-600 dark:text-[#E6EEF2]/80 leading-relaxed font-body">
            You can have the most powerful backend code in the world, but if the user interface is cluttered and confusing, users will abandon your product. We believe that <strong>Design is a business tool</strong>. A flawless UI/UX reduces customer support tickets, shortens user onboarding time, and directly increases trial-to-paid conversion rates.
          </p>
        </div>
      </section>

      {/* 🟢 2-COLUMN SECTION (Problems, Solutions + Sticky Form) */}
      <section className="py-12 bg-white dark:bg-[#071A30] relative border-y border-gray-200 dark:border-white/5 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 items-start relative">
            
            {/* ⬅️ LEFT COLUMN: Problems & Solutions */}
            <div className="lg:col-span-7 xl:col-span-8 space-y-16">

              {/* 4️⃣ PROBLEMS WE SOLVE */}
              <div>
                <h2 className="text-3xl font-heading font-bold text-[#0B2545] dark:text-white mb-8 border-l-4 border-[#0097B2] pl-4">Why legacy designs fail modern users:</h2>
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="bg-[#F8FAFC] dark:bg-[#11325B] p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-white/5 hover:border-[#0097B2] transition-colors">
                    <div className="w-10 h-10 rounded-full bg-red-100 dark:bg-red-500/20 text-red-600 dark:text-red-400 flex items-center justify-center text-lg mb-4"><i className="fas fa-map-signs"></i></div>
                    <h3 className="font-bold text-[#0B2545] dark:text-white mb-2">Complex Navigation</h3>
                    <p className="text-sm text-gray-600 dark:text-[#E6EEF2]/80">When a user has to click 5 times to find a core feature, they become frustrated and churn. High cognitive load destroys retention.</p>
                  </div>
                  <div className="bg-[#F8FAFC] dark:bg-[#11325B] p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-white/5 hover:border-[#0097B2] transition-colors">
                    <div className="w-10 h-10 rounded-full bg-red-100 dark:bg-red-500/20 text-red-600 dark:text-red-400 flex items-center justify-center text-lg mb-4"><i className="fas fa-paint-roller"></i></div>
                    <h3 className="font-bold text-[#0B2545] dark:text-white mb-2">Inconsistent Branding</h3>
                    <p className="text-sm text-gray-600 dark:text-[#E6EEF2]/80">Different button styles, mismatched fonts, and random colors across your app make your brand look unprofessional and untrustworthy.</p>
                  </div>
                  <div className="bg-[#F8FAFC] dark:bg-[#11325B] p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-white/5 hover:border-[#0097B2] transition-colors">
                    <div className="w-10 h-10 rounded-full bg-red-100 dark:bg-red-500/20 text-red-600 dark:text-red-400 flex items-center justify-center text-lg mb-4"><i className="fas fa-mobile-alt"></i></div>
                    <h3 className="font-bold text-[#0B2545] dark:text-white mb-2">Mobile Afterthoughts</h3>
                    <p className="text-sm text-gray-600 dark:text-[#E6EEF2]/80">Designing a beautiful desktop dashboard but ignoring the mobile layout, leaving mobile users unable to tap tiny buttons or read data.</p>
                  </div>
                  <div className="bg-[#F8FAFC] dark:bg-[#11325B] p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-white/5 hover:border-[#0097B2] transition-colors">
                    <div className="w-10 h-10 rounded-full bg-red-100 dark:bg-red-500/20 text-red-600 dark:text-red-400 flex items-center justify-center text-lg mb-4"><i className="fas fa-blind"></i></div>
                    <h3 className="font-bold text-[#0B2545] dark:text-white mb-2">Accessibility Violations</h3>
                    <p className="text-sm text-gray-600 dark:text-[#E6EEF2]/80">Using light gray text on white backgrounds makes apps unusable for visually impaired users and opens enterprise brands to legal risks.</p>
                  </div>
                </div>
              </div>

              {/* 5️⃣ OUR SOLUTION */}
              <div>
                <h2 className="text-3xl font-heading font-bold text-[#0B2545] dark:text-white mb-8 border-l-4 border-[#0097B2] pl-4">Our Data-Backed Design Process</h2>
                <div className="space-y-6">
                  <div className="flex gap-6 bg-[#F8FAFC] dark:bg-[#11325B] p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-white/5">
                    <div className="text-4xl font-black text-[#0097B2]/20 dark:text-[#0097B2]/40">01</div>
                    <div>
                      <h3 className="text-xl font-bold text-[#0B2545] dark:text-white mb-2">Wireframing & Logic Mapping</h3>
                      <p className="text-sm text-gray-600 dark:text-[#E6EEF2]/80">Before we add colors, we build structural blueprints. We map out the exact user flow to ensure the core objective is reached in the fewest clicks possible.</p>
                    </div>
                  </div>
                  <div className="flex gap-6 bg-[#F8FAFC] dark:bg-[#11325B] p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-white/5">
                    <div className="text-4xl font-black text-[#0097B2]/20 dark:text-[#0097B2]/40">02</div>
                    <div>
                      <h3 className="text-xl font-bold text-[#0B2545] dark:text-white mb-2">High-Fidelity Prototyping</h3>
                      <p className="text-sm text-gray-600 dark:text-[#E6EEF2]/80">We deliver clickable Figma prototypes. You can interact with your new app—clicking buttons, opening modals, and navigating menus—before coding begins.</p>
                    </div>
                  </div>
                  <div className="flex gap-6 bg-[#F8FAFC] dark:bg-[#11325B] p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-white/5">
                    <div className="text-4xl font-black text-[#0097B2]/20 dark:text-[#0097B2]/40">03</div>
                    <div>
                      <h3 className="text-xl font-bold text-[#0B2545] dark:text-white mb-2">Building Design Systems</h3>
                      <p className="text-sm text-gray-600 dark:text-[#E6EEF2]/80">We create a centralized library of every UI component (buttons, inputs, typographies). This ensures design consistency and drastically speeds up developer handoff.</p>
                    </div>
                  </div>
                  <div className="flex gap-6 bg-[#0097B2] text-white p-6 rounded-2xl shadow-lg border border-[#0097B2]">
                    <div className="text-4xl font-black text-white/20">04</div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Developer-Ready Handoff</h3>
                      <p className="text-sm text-[#E6EEF2]">We don't just hand over a PNG. We provide fully documented Figma files complete with CSS variables, spacing rules, and responsive constraints so developers code exactly what we designed.</p>
                    </div>
                  </div>
                </div>
              </div>

            </div>

            {/* ➡️ RIGHT COLUMN: STICKY LEAD FORM */}
            <div className="lg:col-span-5 xl:col-span-4 relative h-full">
              <div className="sticky top-28 space-y-6 pb-12">
                
                {/* Main Form Card */}
                <div id="leadForm" className="bg-[#0B2545] text-white p-8 rounded-[2rem] shadow-2xl border-t-[6px] border-[#0097B2] relative overflow-hidden isolate transition-colors duration-300">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-[#0097B2]/10 rounded-bl-full -z-10"></div>
                  <h3 className="text-2xl font-heading font-bold text-white mb-2">Design Scoping Call</h3>
                  <p className="text-sm text-[#E6EEF2]/80 mb-6">Let's discuss wireframes, UX research, or revamping your current platform.</p>
                  
                  {!submitted ? (
                    <form onSubmit={handleFormSubmit} className="space-y-4">
                      <div>
                        <label className="block text-[10px] font-bold text-[#E6EEF2]/60 uppercase tracking-widest mb-1">Name</label>
                        <input type="text" name="name" value={formData.name} onChange={handleFormChange} required placeholder="Your Name" 
                          className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#0097B2] text-white placeholder-white/40 transition" />
                      </div>
                      <div>
                        <label className="block text-[10px] font-bold text-[#E6EEF2]/60 uppercase tracking-widest mb-1">Email</label>
                        <input type="email" name="email" value={formData.email} onChange={handleFormChange} required placeholder="work@company.com" 
                          className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#0097B2] text-white placeholder-white/40 transition" />
                      </div>
                      <div>
                        <label className="block text-[10px] font-bold text-[#E6EEF2]/60 uppercase tracking-widest mb-1">Project Type</label>
                        <select name="business" value={formData.business} onChange={handleFormChange} required 
                          className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#0097B2] text-white transition cursor-pointer [&>option]:text-[#0B2545]">
                          <option value="" disabled>Select Type</option>
                          <option value="SaaS / Dashboard UX">SaaS / Dashboard UX</option>
                          <option value="Mobile App UI Design">Mobile App Design</option>
                          <option value="Website Redesign">Website Revamp</option>
                          <option value="Enterprise Design System">Full Design System</option>
                        </select>
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-[10px] font-bold text-[#E6EEF2]/60 uppercase tracking-widest mb-1">Phone</label>
                          <input type="tel" name="phone" value={formData.phone} onChange={handleFormChange} required placeholder="+91" 
                            className="w-full bg-white/5 border border-white/10 rounded-xl px-3 py-3 text-sm focus:outline-none focus:border-[#0097B2] text-white placeholder-white/40 transition" />
                        </div>
                        <div>
                          <label className="block text-[10px] font-bold text-[#E6EEF2]/60 uppercase tracking-widest mb-1">Design Budget</label>
                          <select name="budget" value={formData.budget} onChange={handleFormChange} required 
                            className="w-full bg-white/5 border border-white/10 rounded-xl px-3 py-3 text-sm focus:outline-none focus:border-[#0097B2] text-white transition cursor-pointer [&>option]:text-[#0B2545]">
                            <option value="" disabled>Select</option>
                            <option value="Under 50k">Under ₹50k</option>
                            <option value="50k-1.5L">₹50k - ₹1.5L</option>
                            <option value="1.5L+">₹1.5L+</option>
                          </select>
                        </div>
                      </div>
                      
                      <button type="submit" className="w-full bg-[#0097B2] hover:bg-white hover:text-[#0B2545] text-white font-bold py-4 rounded-xl transition-all shadow-lg mt-2 uppercase tracking-wider text-sm">
                        Request Discovery Call
                      </button>
                    </form>
                  ) : (
                    <div className="text-center py-10">
                      <div className="w-16 h-16 bg-[#0097B2]/20 rounded-full flex items-center justify-center mx-auto mb-4"><i className="fas fa-check text-3xl text-[#0097B2]"></i></div>
                      <h4 className="text-lg font-bold text-white mb-2">Request Sent!</h4>
                      <p className="text-xs text-[#E6EEF2]">Redirecting to SM NextGen WhatsApp...</p>
                    </div>
                  )}

                  {/* Floating WhatsApp Button inside Form */}
                  <div className="mt-6 pt-6 border-t border-white/10 text-center">
                    <a href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi%20SM%20NextGen%2C%20I%20want%20to%20discuss%20a%20UI%2FUX%20Design%20project.`} target="_blank" rel="noreferrer" className="w-full flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold py-3 rounded-xl shadow-md transition-all">
                      <i className="fab fa-whatsapp text-xl"></i> Quick WhatsApp Chat
                    </a>
                  </div>
                </div>

                {/* Trust Badges */}
                <div className="bg-white dark:bg-[#030e1c] border border-gray-200 dark:border-white/5 p-6 rounded-[2rem] shadow-sm flex items-center gap-4 transition-colors duration-300">
                  <div className="w-12 h-12 bg-[#0097B2]/10 rounded-full flex items-center justify-center text-[#0097B2] shrink-0"><i className="fab fa-figma"></i></div>
                  <div>
                    <h4 className="font-bold text-[#0B2545] dark:text-white text-sm">Developer Ready</h4>
                    <p className="text-xs text-gray-500 dark:text-[#E6EEF2]/70">Clean layers, components, and auto-layout.</p>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 🟢 FULL WIDTH SECTIONS BELOW */}

      {/* 6️⃣ WHAT YOU GET (Massive Exhaustive 12-Point Section) */}
      <section className="py-24 bg-[#F8FAFC] dark:bg-[#0B2545] border-y border-gray-200 dark:border-white/5 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-[#0B2545] dark:text-white mb-4">The Design System</h2>
            <p className="text-lg text-gray-600 dark:text-[#E6EEF2]/80">From rough sketches to polished design systems, we handle the entire product design lifecycle.</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {[
              { title: "User Persona Research", desc: "Understanding exactly who your users are to design an interface tailored to their psychology.", icon: "fas fa-users" },
              { title: "Information Architecture", desc: "Structuring the sitemap and navigation logic so users never get lost inside your product.", icon: "fas fa-sitemap" },
              { title: "Low-Fidelity Wireframes", desc: "Rapid black-and-white sketching of screen layouts to finalize core functionality quickly.", icon: "fas fa-pencil-ruler" },
              { title: "High-Fidelity UI Design", desc: "Injecting color, typography, and beautiful visual aesthetics to make the app look premium.", icon: "fas fa-palette" },
              { title: "Clickable Prototypes", desc: "Linking Figma screens together to simulate the real app experience for stakeholder approval.", icon: "fas fa-hand-pointer" },
              { title: "Design Systems & UI Kits", desc: "Creating master component libraries (buttons, forms, cards) for massive scalability.", icon: "fas fa-layer-group" },
              { title: "Micro-Interactions", desc: "Designing subtle hover effects and loading animations that make the software feel 'alive'.", icon: "fas fa-magic" },
              { title: "Responsive Web Design", desc: "Ensuring the UI adapts perfectly across 4k Desktop, Tablet, and Mobile views natively.", icon: "fas fa-desktop" },
              { title: "Dark Mode Optimization", desc: "Building specialized color palettes to ensure perfect contrast and aesthetics in dark mode.", icon: "fas fa-moon" },
              { title: "Accessibility (WCAG)", desc: "Designing with proper contrast ratios and font sizes to accommodate visually impaired users.", icon: "fas fa-eye" },
              { title: "UX Auditing & Heuristics", desc: "Analyzing your current app to find friction points and redesigning them for better conversion.", icon: "fas fa-search-plus" },
              { title: "Developer Handoff Specs", desc: "Delivering annotated Figma files with exact CSS values to eliminate guesswork for coders.", icon: "fas fa-file-code" }
            ].map((feature, i) => (
              <div key={i} className="bg-white dark:bg-[#11325B] p-6 rounded-3xl border border-gray-100 dark:border-white/5 hover:border-[#0097B2] dark:hover:border-[#0097B2] transition-colors shadow-sm group flex flex-col isolate transform-gpu">
                <div className="w-12 h-12 bg-[#0097B2]/10 text-[#0097B2] rounded-xl flex items-center justify-center text-xl mb-4 group-hover:bg-[#0097B2] group-hover:text-white transition-colors"><i className={feature.icon}></i></div>
                <h3 className="font-bold text-[#0B2545] dark:text-white mb-2 text-md leading-tight">{feature.title}</h3>
                <p className="text-sm text-gray-600 dark:text-[#E6EEF2]/70 leading-relaxed flex-grow">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 14️⃣ MINI CTA SECTION */}
      <section className="py-12 bg-white dark:bg-[#071A30] border-b border-gray-200 dark:border-white/5 transition-colors duration-300">
         <div className="max-w-5xl mx-auto px-4">
            <div className="bg-[#0B2545] dark:bg-[#030e1c] p-10 md:p-12 rounded-[2.5rem] text-center shadow-2xl relative overflow-hidden isolate text-white border dark:border-white/5">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#0097B2]/30 rounded-full blur-3xl z-0"></div>
              <h3 className="text-3xl md:text-4xl font-heading font-bold mb-4 relative z-10">Is an ugly UI killing your sales?</h3>
              <p className="text-[#E6EEF2] text-lg mb-8 relative z-10 max-w-2xl mx-auto">Get a free teardown of your current app or website. We'll identify UX bottlenecks that are destroying your retention rates.</p>
              <a href="#leadForm" className="inline-block px-10 py-4 bg-[#0097B2] hover:bg-white hover:text-[#0B2545] text-white font-bold rounded-xl hover:scale-105 transition-all relative z-10 shadow-lg text-lg">
                Request Free UX Audit
              </a>
            </div>
         </div>
      </section>

      {/* 7️⃣ PACKAGES / PRICING TIERS */}
      <section className="py-24 bg-[#F8FAFC] dark:bg-[#0B1120] transition-colors duration-300">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-[#0B2545] dark:text-white mb-4">Design Scopes</h2>
            <p className="text-lg text-gray-600 dark:text-[#E6EEF2]/80">From simple landing page mockups to massive enterprise SaaS redesigns.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Starter */}
            <div className="bg-white dark:bg-[#162032] p-8 rounded-3xl border border-gray-200 dark:border-white/10 shadow-sm flex flex-col transition-colors duration-300">
              <h3 className="text-2xl font-bold text-[#0B2545] dark:text-white mb-2">Web/Landing Design</h3>
              <p className="text-sm text-gray-600 dark:text-[#E6EEF2]/70 mb-6">Perfect for visualizing a high-converting website before coding.</p>
              <ul className="space-y-3 flex-grow mb-8 text-sm text-[#0B2545] dark:text-gray-300">
                <li><i className="fas fa-check text-[#0097B2] mr-2"></i> Single or Multi-Page UI</li>
                <li><i className="fas fa-check text-[#0097B2] mr-2"></i> Desktop & Mobile Views</li>
                <li><i className="fas fa-check text-[#0097B2] mr-2"></i> Basic Prototyping</li>
                <li><i className="fas fa-check text-[#0097B2] mr-2"></i> 1-2 Weeks Delivery</li>
              </ul>
              <Link href="/pricing" className="block w-full py-3 text-center rounded-xl border-2 border-[#0097B2] text-[#0097B2] font-bold hover:bg-[#0097B2] hover:text-white transition-colors">Request Quote</Link>
            </div>
            
            {/* Growth - Highlighted */}
            <div className="bg-[#0B2545] p-8 rounded-3xl border-2 border-[#0097B2] shadow-2xl flex flex-col transform md:-translate-y-4 relative isolate text-white">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#0097B2] text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider">Most Popular</div>
              <h3 className="text-2xl font-bold mb-2">App / SaaS UI/UX</h3>
              <p className="text-sm text-[#E6EEF2]/80 mb-6">For complex dashboards or mobile apps needing logical user flows.</p>
              <ul className="space-y-3 flex-grow mb-8 text-sm font-medium text-[#E6EEF2]">
                <li><i className="fas fa-check text-[#0097B2] mr-2"></i> Deep UX Architecture</li>
                <li><i className="fas fa-check text-[#0097B2] mr-2"></i> Up to 20 Screen Mockups</li>
                <li><i className="fas fa-check text-[#0097B2] mr-2"></i> Clickable Figma Prototype</li>
                <li><i className="fas fa-check text-[#0097B2] mr-2"></i> Developer Handoff Docs</li>
              </ul>
              <Link href="/pricing" className="block w-full py-3 text-center rounded-xl bg-[#0097B2] text-white hover:bg-white hover:text-[#0B2545] font-bold transition-colors shadow-lg">Request Quote</Link>
            </div>

            {/* Custom/Ecom */}
            <div className="bg-white dark:bg-[#162032] p-8 rounded-3xl border border-gray-200 dark:border-white/10 shadow-sm flex flex-col transition-colors duration-300">
              <h3 className="text-2xl font-bold text-[#0B2545] dark:text-white mb-2">Enterprise Design System</h3>
              <p className="text-sm text-gray-600 dark:text-[#E6EEF2]/70 mb-6">Building a master component library for massive tech teams.</p>
              <ul className="space-y-3 flex-grow mb-8 text-sm text-[#0B2545] dark:text-gray-300">
                <li><i className="fas fa-check text-[#0097B2] mr-2"></i> Master UI Kit Creation</li>
                <li><i className="fas fa-check text-[#0097B2] mr-2"></i> Typography & Color Rules</li>
                <li><i className="fas fa-check text-[#0097B2] mr-2"></i> Auto-Layout Components</li>
                <li><i className="fas fa-check text-[#0097B2] mr-2"></i> Dark/Light Mode Systems</li>
              </ul>
              <a href="#leadForm" className="block w-full py-3 text-center rounded-xl border-2 border-[#0097B2] text-[#0097B2] font-bold hover:bg-[#0097B2] hover:text-white transition-colors">Request Quote</a>
            </div>
          </div>
        </div>
      </section>

      {/* 8️⃣ RESULTS / GENUINE MINI CASE STUDIES */}
      <section className="py-24 bg-white dark:bg-[#0B2545] border-y border-gray-200 dark:border-white/5 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-[#0B2545] dark:text-white mb-4">Grounded Business Impact</h2>
            <p className="text-lg text-gray-600 dark:text-[#E6EEF2]/80">How good design translates directly to revenue and retention.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-[#F8FAFC] dark:bg-[#030e1c] p-8 rounded-3xl shadow-sm border border-gray-200 dark:border-white/5 relative flex flex-col hover:-translate-y-1 transition-transform">
              <span className="absolute top-4 right-4 bg-[#0097B2]/10 text-[#0097B2] text-xs font-bold px-3 py-1 rounded-md">B2B SaaS</span>
              <h3 className="text-xl font-bold text-[#0B2545] dark:text-white mb-4 mt-4">Simplifying the Dashboard</h3>
              <p className="text-sm text-gray-600 dark:text-[#E6EEF2]/80 mb-3"><strong className="text-[#0B2545] dark:text-white">Challenge:</strong> A SaaS platform had incredible features, but the UI was so cluttered that new users canceled within 3 days due to overwhelm.</p>
              <p className="text-sm text-gray-600 dark:text-[#E6EEF2]/80 mb-6 flex-grow"><strong className="text-[#0B2545] dark:text-white">Solution:</strong> Conducted a massive UX audit. Rebuilt the navigation into a clean sidebar, added skeleton loaders, and simplified the onboarding flow.</p>
              <div className="p-4 bg-[#0097B2]/5 rounded-xl border border-[#0097B2]/20">
                <p className="text-sm font-bold text-[#0097B2]">Result: Customer support tickets dropped by 45%, and the Trial-to-Paid conversion rate increased by 22%.</p>
              </div>
            </div>
            
            <div className="bg-[#F8FAFC] dark:bg-[#030e1c] p-8 rounded-3xl shadow-sm border border-gray-200 dark:border-white/5 relative flex flex-col hover:-translate-y-1 transition-transform">
              <span className="absolute top-4 right-4 bg-[#0097B2]/10 text-[#0097B2] text-xs font-bold px-3 py-1 rounded-md">E-Commerce</span>
              <h3 className="text-xl font-bold text-[#0B2545] dark:text-white mb-4 mt-4">Frictionless Checkouts</h3>
              <p className="text-sm text-gray-600 dark:text-[#E6EEF2]/80 mb-3"><strong className="text-[#0B2545] dark:text-white">Challenge:</strong> A retail brand was suffering from a 70% cart abandonment rate on mobile devices.</p>
              <p className="text-sm text-gray-600 dark:text-[#E6EEF2]/80 mb-6 flex-grow"><strong className="text-[#0B2545] dark:text-white">Solution:</strong> Redesigned the cart drawer to slide out seamlessly, and designed a single-page checkout UI with clear trust badges and Express Pay options.</p>
              <div className="p-4 bg-[#0097B2]/5 rounded-xl border border-[#0097B2]/20">
                <p className="text-sm font-bold text-[#0097B2]">Result: Checkout completions increased by 38%, instantly adding thousands in monthly revenue without extra ad spend.</p>
              </div>
            </div>

            <div className="bg-[#F8FAFC] dark:bg-[#030e1c] p-8 rounded-3xl shadow-sm border border-gray-200 dark:border-white/5 relative flex flex-col hover:-translate-y-1 transition-transform">
              <span className="absolute top-4 right-4 bg-[#0097B2]/10 text-[#0097B2] text-xs font-bold px-3 py-1 rounded-md">Mobile App</span>
              <h3 className="text-xl font-bold text-[#0B2545] dark:text-white mb-4 mt-4">Gamifying the UX</h3>
              <p className="text-sm text-gray-600 dark:text-[#E6EEF2]/80 mb-3"><strong className="text-[#0B2545] dark:text-white">Challenge:</strong> A fitness app had users downloading it, but Daily Active Users (DAU) was terribly low because the interface felt boring.</p>
              <p className="text-sm text-gray-600 dark:text-[#E6EEF2]/80 mb-6 flex-grow"><strong className="text-[#0B2545] dark:text-white">Solution:</strong> Redesigned the UX to include gamification elements—progress rings, rewarding micro-animations, and a beautiful dark-mode interface.</p>
              <div className="p-4 bg-[#0097B2]/5 rounded-xl border border-[#0097B2]/20">
                <p className="text-sm font-bold text-[#0097B2]">Result: Session time per user doubled, and the app secured a feature spot on the App Store.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 9️⃣ OUR PROCESS */}
      <section className="py-24 bg-[#F8FAFC] dark:bg-[#030e1c] transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-[#0B2545] dark:text-white mb-4">Our UI/UX Architecture Process</h2>
          </div>
          <div className="grid md:grid-cols-4 gap-6 text-center">
            <div className="bg-white dark:bg-[#0B2545] border border-gray-100 dark:border-white/5 p-8 rounded-3xl relative shadow-sm">
              <div className="text-5xl font-black text-[#0B2545]/5 dark:text-white/5 absolute top-4 left-4">01</div>
              <i className="fas fa-search text-3xl text-[#0097B2] mb-4 relative z-10"></i>
              <h3 className="text-xl font-bold text-[#0B2545] dark:text-white mb-2">Research & Audit</h3>
              <p className="text-sm text-gray-600 dark:text-[#E6EEF2]/70">Analyzing your competitors, user personas, and tearing down your current UX bottlenecks.</p>
            </div>
            <div className="bg-white dark:bg-[#0B2545] border border-gray-100 dark:border-white/5 p-8 rounded-3xl relative shadow-sm">
              <div className="text-5xl font-black text-[#0B2545]/5 dark:text-white/5 absolute top-4 left-4">02</div>
              <i className="fas fa-sitemap text-3xl text-[#0097B2] mb-4 relative z-10"></i>
              <h3 className="text-xl font-bold text-[#0B2545] dark:text-white mb-2">Wireframes (UX)</h3>
              <p className="text-sm text-gray-600 dark:text-[#E6EEF2]/70">Mapping out the 'skeleton' of the app to ensure logical user flows and perfect navigation.</p>
            </div>
            <div className="bg-white dark:bg-[#0B2545] border border-gray-100 dark:border-white/5 p-8 rounded-3xl relative shadow-sm">
              <div className="text-5xl font-black text-[#0B2545]/5 dark:text-white/5 absolute top-4 left-4">03</div>
              <i className="fas fa-paint-brush text-3xl text-[#0097B2] mb-4 relative z-10"></i>
              <h3 className="text-xl font-bold text-[#0B2545] dark:text-white mb-2">High-Fidelity (UI)</h3>
              <p className="text-sm text-gray-600 dark:text-[#E6EEF2]/70">Applying your brand's colors, typography, and styling to create pixel-perfect Figma screens.</p>
            </div>
            <div className="bg-[#0097B2] p-8 rounded-3xl shadow-xl shadow-[#0097B2]/20 relative transform md:-translate-y-4 text-white">
              <div className="text-5xl font-black text-white/20 absolute top-4 left-4">04</div>
              <i className="fas fa-hand-pointer text-3xl text-white mb-4 relative z-10"></i>
              <h3 className="text-xl font-bold mb-2">Prototyping & Handoff</h3>
              <p className="text-sm text-white/90">Linking screens for click-through testing, and delivering organized assets to developers.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 🔟 INDUSTRIES WE SERVE */}
      <section className="py-20 bg-[#0B2545] text-white text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-heading font-bold mb-10">We Design For</h2>
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
            {['B2B SaaS Dashboards', 'FinTech Apps', 'E-Commerce Storefronts', 'Healthcare Portals', 'EdTech Platforms', 'Corporate Websites', 'Real Estate Apps'].map((ind, i) => (
              <span key={i} className="px-6 py-3 bg-white/10 border border-white/20 rounded-full font-bold text-[#E6EEF2] shadow-sm text-sm hover:bg-[#0097B2] hover:border-[#0097B2] transition-colors cursor-default">
                {ind}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* 11️⃣ RELATED SERVICES */}
      <section className="py-20 bg-white dark:bg-[#071A30] border-b border-gray-200 dark:border-white/5 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-heading font-bold text-[#0B2545] dark:text-white mb-10 text-center">Turn Designs Into Reality</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/services/web-app-development" className="bg-[#F8FAFC] dark:bg-[#11325B] p-6 rounded-2xl border border-gray-100 dark:border-white/5 shadow-sm hover:border-[#0097B2] dark:hover:border-[#0097B2] transition-all group flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-[#0097B2]/10 text-[#0097B2] flex items-center justify-center text-xl shrink-0"><i className="fas fa-laptop-code"></i></div>
              <div>
                <h4 className="font-bold text-[#0B2545] dark:text-white group-hover:text-[#0097B2] transition-colors">Web App Dev</h4>
                <p className="text-xs text-gray-600 dark:text-[#E6EEF2]/70 mt-1">Code your SaaS dashboard.</p>
              </div>
            </Link>
            <Link href="/services/mobile-app-development" className="bg-[#F8FAFC] dark:bg-[#11325B] p-6 rounded-2xl border border-gray-100 dark:border-white/5 shadow-sm hover:border-[#0097B2] dark:hover:border-[#0097B2] transition-all group flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-[#0097B2]/10 text-[#0097B2] flex items-center justify-center text-xl shrink-0"><i className="fas fa-mobile-alt"></i></div>
              <div>
                <h4 className="font-bold text-[#0B2545] dark:text-white group-hover:text-[#0097B2] transition-colors">Mobile App Dev</h4>
                <p className="text-xs text-gray-600 dark:text-[#E6EEF2]/70 mt-1">Code your iOS/Android app.</p>
              </div>
            </Link>
            <Link href="/services/website-development" className="bg-[#F8FAFC] dark:bg-[#11325B] p-6 rounded-2xl border border-gray-100 dark:border-white/5 shadow-sm hover:border-[#0097B2] dark:hover:border-[#0097B2] transition-all group flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-[#0097B2]/10 text-[#0097B2] flex items-center justify-center text-xl shrink-0"><i className="fas fa-globe"></i></div>
              <div>
                <h4 className="font-bold text-[#0B2545] dark:text-white group-hover:text-[#0097B2] transition-colors">Website Dev</h4>
                <p className="text-xs text-gray-600 dark:text-[#E6EEF2]/70 mt-1">Code your corporate site.</p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* 12️⃣ FAQ SECTION */}
      <section className="py-24 bg-[#F8FAFC] dark:bg-[#0B2545] transition-colors duration-300">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
             <h2 className="text-4xl md:text-5xl font-heading font-bold text-[#0B2545] dark:text-white mb-6">Frequently Asked Questions</h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white dark:bg-[#11325B] border border-gray-200 dark:border-white/5 rounded-2xl overflow-hidden shadow-sm hover:border-[#0097B2]/50 transition-all duration-300">
                <button 
                  onClick={() => setActiveFaq(activeFaq === index ? null : index)}
                  className="w-full px-8 py-6 text-left font-bold text-[#0B2545] dark:text-white flex justify-between items-center focus:outline-none text-lg"
                >
                  {faq.q}
                  <div className={`w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center transition-all duration-300 ${activeFaq === index ? 'bg-[#0097B2] text-white rotate-180 shadow-md' : 'bg-[#F8FAFC] dark:bg-[#0B2545] text-[#0097B2] border border-gray-200 dark:border-white/10'}`}>
                    <i className="fas fa-chevron-down"></i>
                  </div>
                </button>
                <div className={`px-8 pb-8 text-gray-600 dark:text-[#E6EEF2]/80 text-base leading-relaxed ${activeFaq === index ? 'block' : 'hidden'}`}>
                  {faq.a}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 15️⃣ FINAL MASSIVE CTA (Always Dark Navy) */}
      <section className="relative py-32 bg-[#0B2545] overflow-hidden text-white">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#0097B2]/20 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-white/5 rounded-full blur-[100px]"></div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-6xl font-heading font-bold mb-4 leading-tight">Ready to Design a Better Experience?</h2>
          <p className="text-xl text-[#E6EEF2] mb-10 font-body">Don't write a single line of code until your design is perfect. Let's map out a user journey that drives massive conversions.</p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a href="#leadForm" className="px-10 py-5 bg-[#0097B2] hover:bg-white hover:text-[#0B2545] text-white font-bold rounded-xl shadow-2xl hover:scale-105 transition-all text-lg flex items-center justify-center gap-3">
              Request Design Audit <i className="fas fa-arrow-up"></i>
            </a>
            <a href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi%20SM%20NextGen%2C%20I%20want%20to%20discuss%20a%20UI%2FUX%20project.`} target="_blank" rel="noreferrer" className="px-10 py-5 bg-transparent border-2 border-[#E6EEF2]/20 hover:border-white text-white font-bold rounded-xl hover:bg-white/10 transition-colors text-lg flex items-center justify-center gap-3">
              <i className="fab fa-whatsapp text-xl"></i> Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>

    </main>
  );
}