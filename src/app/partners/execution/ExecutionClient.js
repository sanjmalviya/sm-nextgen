"use client";
import { useState, useEffect, useRef } from "react";
import confetti from "canvas-confetti";
import Link from "next/link";

const WHATSAPP_NUMBER = "917073538077"; 
const getWhatsAppLink = (message) => `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

export function ExecutionClient() {
  const cursorRef = useRef(null);
  
  const [formStep, setFormStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [waLink, setWaLink] = useState("#");

  const [formData, setFormData] = useState({
    fullName: "", email: "", phone: "", city: "", profession: "",
    model: "Execution", // Fixed for this page
    experience: "Expert", 
    skills: [], 
    message: "",
    portfolio: ""
  });

  const [activeFaq, setActiveFaq] = useState(null);
  const toggleFaq = (i) => setActiveFaq(activeFaq === i ? null : i);

  // Skills tailored for execution across the ecosystem
  const availableSkills = ["Digital Marketing", "Web/App Dev", "Performance Ads", "SEO", "UI/UX Design", "Video Editing", "AI/Bot Dev", "Accounting/Finance", "Content Writing"];

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", "Accept": "application/json" },
        body: JSON.stringify({
          access_key: "ec0688f4-c3f4-4282-938e-31f398af51d9",
          subject: "💻 New EXECUTION Partner Application",
          from_name: "Partner Ecosystem",
          Name: formData.fullName,
          Email: formData.email,
          Phone: formData.phone,
          City: formData.city,
          Profession: formData.profession,
          "Selected Model": formData.model,
          Experience: formData.experience,
          "Core Skills": formData.skills.join(", ") || "None selected",
          Portfolio: formData.portfolio || "Not provided",
          Message: formData.message || "No message"
        })
      });

      const result = await response.json();

      if (result.success) {
        confetti({ particleCount: 300, spread: 100, origin: { y: 0.6 }, colors: ['#0097B2', '#ffffff'] });
        setIsSuccess(true);

        const waMessage = `Hi SM NextGen Team! I want to join as an *EXECUTION PARTNER* 💻\n\n*Name:* ${formData.fullName}\n*Role:* ${formData.profession}\n*Experience:* ${formData.experience}\n*Core Skills:* ${formData.skills.join(", ") || "N/A"}\n\nI'm ready to execute high-quality projects. Let's discuss.`;
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
    { q: "How are projects assigned to me?", a: "Once a client is closed by our sales team, we match the project requirements with your specific skill set and availability in our vetted partner pool." },
    { q: "Do I have to talk to the client directly?", a: "Usually, no. Our Project Managers handle client communication, feedback, and scope. You just focus purely on executing the work to perfection." },
    { q: "How and when do I get paid?", a: "Payments are tied to clear project milestones. Once you deliver a milestone and it passes our QA check, your payment is processed immediately. No chasing invoices." },
    { q: "Do I need a portfolio?", a: "Yes. Execution partners are selected strictly based on the quality of their past work, whether it's code, ad accounts managed, or design files." }
  ];

  return (
    <>
      <main className="bg-[#F8FAFC] dark:bg-[#0B2545] font-body text-[#0B2545] dark:text-[#E6EEF2] min-h-screen selection:bg-[#0097B2] selection:text-white w-full overflow-x-hidden transition-colors duration-300 relative">
        <div ref={cursorRef} className="pointer-events-none fixed top-0 left-0 w-[500px] h-[500px] bg-[#0097B2]/20 dark:bg-[#0097B2]/15 rounded-full blur-[120px] z-[99] hidden lg:block mix-blend-screen dark:mix-blend-lighten opacity-0 transition-opacity duration-300" style={{ willChange: 'transform' }}></div>

        {/* 1️⃣ HERO SECTION */}
        <section className="relative pt-32 pb-16 md:pt-40 md:pb-20 bg-[#071A30] text-center px-4 z-10 overflow-hidden border-b border-white/5">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:32px_32px] z-0"></div>
          <div className="absolute top-[-20%] left-1/2 transform -translate-x-1/2 w-[600px] md:w-[800px] h-[600px] md:h-[800px] bg-purple-500/20 rounded-full blur-[150px] pointer-events-none z-0 animate-pulse"></div>
          
          <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
            <Link href="/partners" className="text-[#E6EEF2]/70 hover:text-white text-xs font-bold uppercase tracking-widest mb-6 transition-colors flex items-center justify-center gap-2">
               <i className="fas fa-arrow-left"></i> Back to All Models
            </Link>
            <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-xs font-bold uppercase tracking-widest text-purple-400 mb-6 backdrop-blur-md shadow-sm">
              <i className="fas fa-laptop-code mr-2"></i> The Specialists Role
            </span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-extrabold text-white mb-6 leading-tight tracking-tight drop-shadow-sm">
              Become an <span className="text-purple-400">Execution Partner</span>
            </h1>
            <p className="text-base md:text-xl text-[#E6EEF2]/90 mb-10 leading-relaxed font-light max-w-2xl">
              Stop hunting for clients. We bring the high-ticket B2B projects. You focus 100% on delivery, and get paid securely on milestones.
            </p>
            <button onClick={() => document.getElementById('partnerForm').scrollIntoView({behavior:'smooth'})} className="w-full sm:w-auto px-10 py-4 md:py-5 bg-purple-600 hover:bg-white hover:text-[#0B2545] text-white font-bold rounded-xl shadow-[0_0_30px_-5px_rgba(168,85,247,0.5)] transition-all hover:-translate-y-1 text-base md:text-lg">
              Apply as Execution Partner 💻
            </button>
          </div>
        </section>

        {/* 2️⃣ ROLE OVERVIEW */}
        <section className="py-16 md:py-24 bg-white dark:bg-[#071A30] border-b border-gray-100 dark:border-white/5 relative z-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-10 md:gap-16 items-start">
              <div>
                <h2 className="text-3xl md:text-5xl font-heading font-extrabold text-[#0B2545] dark:text-white mb-6">What You Will Do</h2>
                <p className="text-gray-600 dark:text-[#E6EEF2]/70 mb-8 leading-relaxed">
                  As an Execution Partner, you are the talent engine. We handle the sales pipeline, client management, and billing. You do what you do best: create, build, and optimize.
                </p>
                <div className="space-y-4">
                  <div className="bg-[#F8FAFC] dark:bg-[#11325B] p-5 rounded-2xl border border-gray-100 dark:border-white/5 flex gap-4 items-start">
                    <i className="fas fa-file-signature text-purple-500 text-xl mt-1"></i>
                    <div>
                      <h4 className="font-bold text-[#0B2545] dark:text-white mb-1">Receive Project Briefs</h4>
                      <p className="text-sm text-gray-500 dark:text-[#E6EEF2]/70">Get clear, structured requirements and scope of work from our internal Project Managers.</p>
                    </div>
                  </div>
                  <div className="bg-[#F8FAFC] dark:bg-[#11325B] p-5 rounded-2xl border border-gray-100 dark:border-white/5 flex gap-4 items-start">
                    <i className="fas fa-hammer text-purple-500 text-xl mt-1"></i>
                    <div>
                      <h4 className="font-bold text-[#0B2545] dark:text-white mb-1">Execute & Deliver</h4>
                      <p className="text-sm text-gray-500 dark:text-[#E6EEF2]/70">Write the code, design the UI, run the ads, or file the compliances within the agreed timeframe.</p>
                    </div>
                  </div>
                  <div className="bg-[#F8FAFC] dark:bg-[#11325B] p-5 rounded-2xl border border-gray-100 dark:border-white/5 flex gap-4 items-start">
                    <i className="fas fa-check-double text-purple-500 text-xl mt-1"></i>
                    <div>
                      <h4 className="font-bold text-[#0B2545] dark:text-white mb-1">QA & Get Paid</h4>
                      <p className="text-sm text-gray-500 dark:text-[#E6EEF2]/70">Submit your work for our internal QA. Once approved, your milestone payment is released instantly.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Earnings Focus */}
              <div>
                <div className="bg-[#0B2545] p-8 md:p-10 rounded-[2.5rem] border-2 border-purple-500 shadow-[0_20px_50px_rgba(168,85,247,0.2)] relative overflow-hidden text-white">
                  <div className="absolute top-0 right-0 w-40 h-40 bg-purple-500/20 rounded-full blur-3xl"></div>
                  <span className="text-[10px] uppercase tracking-widest text-purple-400 font-bold mb-2 block">The Math</span>
                  <h2 className="text-3xl md:text-4xl font-heading font-extrabold mb-6">How You Earn</h2>
                  
                  <div className="bg-white/5 border border-white/10 rounded-2xl p-6 mb-6 backdrop-blur-sm">
                    <p className="text-4xl font-black text-purple-400 mb-2">20% – 40%</p>
                    <p className="text-sm text-[#E6EEF2]/80">Of the total project value, depending on the complexity of your execution.</p>
                  </div>

                  <h4 className="font-bold mb-4">Ecosystem Examples:</h4>
                  <ul className="space-y-3 text-sm text-[#E6EEF2]/90 mb-8">
                    <li className="flex justify-between border-b border-white/10 pb-2">
                      <span>Client pays for an AI Chatbot Build (₹60,000):</span>
                    </li>
                    <li className="flex justify-between border-b border-white/10 pb-2 text-purple-400 font-bold">
                      <span>Your Execution Share:</span>
                      <span>₹12,000 - ₹24,000</span>
                    </li>
                    <li className="text-[11px] md:text-xs text-[#E6EEF2]/60 pt-2 italic">
                      * You don't spend time pitching, negotiating, or collecting payments. You just build and earn.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3️⃣ IDEAL FOR */}
        <section className="py-16 md:py-24 bg-[#F8FAFC] dark:bg-[#0B1120] border-b border-gray-100 dark:border-white/5 relative z-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-5xl font-heading font-extrabold text-[#0B2545] dark:text-white mb-16">Perfect Candidates For Execution</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              <div className="bg-white dark:bg-[#162032] p-6 rounded-3xl border border-gray-100 dark:border-white/5 shadow-sm hover:border-purple-500 transition-colors">
                <i className="fas fa-code text-3xl text-purple-500 mb-4"></i>
                <h4 className="font-bold text-[#0B2545] dark:text-white mb-1">Developers</h4>
                <p className="text-xs text-gray-500">Web, App, and AI</p>
              </div>
              <div className="bg-white dark:bg-[#162032] p-6 rounded-3xl border border-gray-100 dark:border-white/5 shadow-sm hover:border-purple-500 transition-colors">
                <i className="fas fa-chart-line text-3xl text-purple-500 mb-4"></i>
                <h4 className="font-bold text-[#0B2545] dark:text-white mb-1">Marketers</h4>
                <p className="text-xs text-gray-500">SEO & Performance Ads</p>
              </div>
              <div className="bg-white dark:bg-[#162032] p-6 rounded-3xl border border-gray-100 dark:border-white/5 shadow-sm hover:border-purple-500 transition-colors">
                <i className="fas fa-palette text-3xl text-purple-500 mb-4"></i>
                <h4 className="font-bold text-[#0B2545] dark:text-white mb-1">Creatives</h4>
                <p className="text-xs text-gray-500">Designers & Video Editors</p>
              </div>
              <div className="bg-white dark:bg-[#162032] p-6 rounded-3xl border border-gray-100 dark:border-white/5 shadow-sm hover:border-purple-500 transition-colors">
                <i className="fas fa-calculator text-3xl text-purple-500 mb-4"></i>
                <h4 className="font-bold text-[#0B2545] dark:text-white mb-1">Financial Experts</h4>
                <p className="text-xs text-gray-500">CA, CS & Compliance</p>
              </div>
            </div>
          </div>
        </section>

        {/* 4️⃣ DEDICATED FORM */}
        <section id="partnerForm" className="py-16 md:py-24 bg-white dark:bg-[#071A30] border-t border-gray-200 dark:border-white/5 relative z-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-[#F8FAFC] dark:bg-[#11325B] p-6 sm:p-10 rounded-[2rem] border border-gray-200 dark:border-white/10 shadow-xl relative overflow-hidden">
              {!isSuccess ? (
                <div>
                  <div className="text-center mb-8">
                    <h2 className="text-2xl md:text-4xl font-heading font-extrabold text-[#0B2545] dark:text-white mb-2">Join the Talent Pool</h2>
                  </div>
                  {/* Same Form Logic as Referral, customized styling for execution */}
                  <form onSubmit={handleSubmit}>
                    {formStep === 1 && (
                      <div className="space-y-5 animate-fade-in-up">
                        <div className="grid sm:grid-cols-2 gap-5">
                          <div><label className="block text-[10px] font-bold text-gray-500 dark:text-[#E6EEF2]/60 uppercase tracking-widest mb-2">Full Name *</label><input type="text" name="fullName" value={formData.fullName} onChange={handleChange} required className="w-full bg-white dark:bg-[#071A30] border border-gray-200 dark:border-white/10 rounded-xl px-4 py-3.5 text-sm text-[#0B2545] dark:text-white focus:border-purple-500 outline-none" /></div>
                          <div><label className="block text-[10px] font-bold text-gray-500 dark:text-[#E6EEF2]/60 uppercase tracking-widest mb-2">Email Address *</label><input type="email" name="email" value={formData.email} onChange={handleChange} required className="w-full bg-white dark:bg-[#071A30] border border-gray-200 dark:border-white/10 rounded-xl px-4 py-3.5 text-sm text-[#0B2545] dark:text-white focus:border-purple-500 outline-none" /></div>
                        </div>
                        <div className="grid sm:grid-cols-2 gap-5">
                          <div><label className="block text-[10px] font-bold text-gray-500 dark:text-[#E6EEF2]/60 uppercase tracking-widest mb-2">Phone Number *</label><input type="tel" name="phone" value={formData.phone} onChange={handleChange} required className="w-full bg-white dark:bg-[#071A30] border border-gray-200 dark:border-white/10 rounded-xl px-4 py-3.5 text-sm text-[#0B2545] dark:text-white focus:border-purple-500 outline-none" /></div>
                          <div><label className="block text-[10px] font-bold text-gray-500 dark:text-[#E6EEF2]/60 uppercase tracking-widest mb-2">City/Location *</label><input type="text" name="city" value={formData.city} onChange={handleChange} required className="w-full bg-white dark:bg-[#071A30] border border-gray-200 dark:border-white/10 rounded-xl px-4 py-3.5 text-sm text-[#0B2545] dark:text-white focus:border-purple-500 outline-none" /></div>
                        </div>
                        <div><label className="block text-[10px] font-bold text-gray-500 dark:text-[#E6EEF2]/60 uppercase tracking-widest mb-2">Your Specialized Role *</label><input type="text" name="profession" value={formData.profession} onChange={handleChange} required placeholder="e.g. Senior Facebook Ads Expert" className="w-full bg-white dark:bg-[#071A30] border border-gray-200 dark:border-white/10 rounded-xl px-4 py-3.5 text-sm text-[#0B2545] dark:text-white focus:border-purple-500 outline-none" /></div>
                        <button type="button" onClick={nextStep} className="w-full py-4 rounded-xl bg-[#0B2545] dark:bg-purple-600 text-white font-bold transition-all">Next Step: Skills & Portfolio</button>
                      </div>
                    )}
                    {formStep === 2 && (
                      <div className="space-y-5 animate-fade-in-up">
                        <div>
                          <label className="block text-[10px] font-bold text-gray-500 dark:text-[#E6EEF2]/60 uppercase tracking-widest mb-3">Your Core Skills (Select Multiple)</label>
                          <div className="flex flex-wrap gap-2">
                            {availableSkills.map((skill) => (
                              <span key={skill} onClick={() => handleSkillToggle(skill)} className={`cursor-pointer px-4 py-2 rounded-full text-xs font-bold border transition-all ${formData.skills.includes(skill) ? 'bg-purple-600 text-white border-purple-600' : 'bg-white dark:bg-[#071A30] text-gray-500 dark:text-[#E6EEF2]/70 border-gray-200 hover:border-gray-300 dark:border-white/10'}`}>
                                {formData.skills.includes(skill) && <i className="fas fa-check mr-1.5"></i>} {skill}
                              </span>
                            ))}
                          </div>
                        </div>
                        <div><label className="block text-[10px] font-bold text-gray-500 dark:text-[#E6EEF2]/60 uppercase tracking-widest mb-2">Portfolio URL (CRITICAL FOR APPROVAL) *</label><input type="url" name="portfolio" value={formData.portfolio} onChange={handleChange} required placeholder="https://behance.net/..." className="w-full bg-white dark:bg-[#071A30] border border-gray-200 dark:border-white/10 rounded-xl px-4 py-3.5 text-sm text-[#0B2545] dark:text-white focus:border-purple-500 outline-none" /></div>
                        <div className="flex gap-4">
                          <button type="button" onClick={() => setFormStep(1)} className="px-6 py-4 rounded-xl border border-gray-300 dark:border-white/20 font-bold hover:bg-gray-100 dark:hover:bg-white/5 text-gray-600 dark:text-gray-300">Back</button>
                          <button type="submit" disabled={isSubmitting} className={`flex-grow py-4 rounded-xl text-white font-bold transition-all ${isSubmitting ? 'bg-gray-400' : 'bg-purple-600 hover:bg-[#0B2545] dark:hover:bg-white dark:hover:text-[#0B2545]'}`}>
                            {isSubmitting ? "Submitting..." : "Submit Application"}
                          </button>
                        </div>
                      </div>
                    )}
                  </form>
                </div>
              ) : (
                <div className="flex flex-col items-center text-center py-12">
                  <div className="w-20 h-20 bg-green-500/10 rounded-full flex items-center justify-center mb-6"><i className="fas fa-check text-4xl text-green-500"></i></div>
                  <h3 className="text-2xl font-bold text-[#0B2545] dark:text-white mb-3">Application Received! 🎉</h3>
                  <a href={waLink} target="_blank" rel="noreferrer" className="px-8 py-4 bg-[#25D366] text-white font-bold rounded-xl mt-4 flex gap-2"><i className="fab fa-whatsapp text-xl"></i> Confirm on WhatsApp</a>
                </div>
              )}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}