"use client";
import { useState, useEffect, useRef } from "react";
import confetti from "canvas-confetti";

// --- WHATSAPP SETUP ---
const WHATSAPP_NUMBER = "917073538077"; 
const getWhatsAppLink = (message) => `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

export default function Contact() {
  const cursorRef = useRef(null);
  
  // States for Dynamic Contact Settings (from Sanity)
  const [contactInfo, setContactInfo] = useState({
    mainHeading: "Let's Build Your <span class='text-[#0097B2]'>Growth Engine.</span>",
    subDescription: "Stop managing 10 different freelancers. Partner with <strong>SM NextGen</strong> to handle your Marketing, Branding, AI Automation, Legal & Finance Services while you focus on scaling your product.",
    phone: "+91 70735 38077",
    email: "info@smnextgen.com",
    address: "Udaipur, Rajasthan, India",
    packagesList: [],
    servicesList: []
  });

  // Form States
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    budget: "",
    businessStage: "",
    packageInterested: "None",
    serviceInterested: "None",
    message: ""
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [waLink, setWaLink] = useState("#");
  
  // FAQ State
  const [activeFaq, setActiveFaq] = useState(null);
  const toggleFaq = (i) => setActiveFaq(activeFaq === i ? null : i);

  // Default dropdown options fallback
  const defaultPackages = [
    "Digital Starter (₹4,999/mo)", "Brand Presence (₹6,999/mo)", "Business Starter (₹12,999/mo)", 
    "Marketing Growth (₹19,999/mo)", "Growth Core (₹34,999/mo)", "Growth Scale (₹49,999/mo)", "Growth Partner (₹69,999/mo)"
  ];
  const defaultServices = [
    "Brand Strategy & Positioning", "Search Engine Optimization (SEO)", "Performance Advertising", "Social Media Marketing", "Content Marketing", 
    "Lead Generation Systems", "Sales Funnel & Conversion Optimization", "Email & Marketing Automation", "AI Marketing Automation", "AI Lead Generation Systems", "Accounting", "Business Registration Services"
  ];

  // 1. Cursor Glow & Sanity Fetch
  useEffect(() => {
    const moveCursor = (e) => {
      if (cursorRef.current) {
        requestAnimationFrame(() => {
          cursorRef.current.style.transform = `translate3d(${e.clientX - 250}px, ${e.clientY - 250}px, 0)`;
          cursorRef.current.style.opacity = '1';
        });
      }
    };
    const hideCursor = () => {
      if (cursorRef.current) cursorRef.current.style.opacity = '0';
    };

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mouseleave', hideCursor);

    // Fetch Settings from Sanity
    const fetchContactSettings = async () => {
      try {
        const PROJECT_ID = "y31b2jo0";
        const DATASET = "production";
        const QUERY = encodeURIComponent('*[_type == "contactSettings"][0]{mainHeading, subDescription, phone, email, address, servicesList, packagesList}');
        const URL = `https://${PROJECT_ID}.api.sanity.io/v2021-10-21/data/query/${DATASET}?query=${QUERY}`;
        
        const response = await fetch(URL);
        const { result } = await response.json();
        if (result) {
          setContactInfo(prev => ({
            ...prev,
            mainHeading: result.mainHeading || prev.mainHeading,
            subDescription: result.subDescription || prev.subDescription,
            phone: result.phone || prev.phone,
            email: result.email || prev.email,
            address: result.address || prev.address,
            packagesList: result.packagesList || [],
            servicesList: result.servicesList || []
          }));
        }
      } catch (error) {
        console.error("Sanity Fetch Error:", error);
      }
    };

    fetchContactSettings();

    // Auto-select package from URL parameter
    const urlParams = new URLSearchParams(window.location.search);
    const plan = urlParams.get('plan');
    if (plan) {
      const normalizedPlan = plan.replace(/_/g, ' ');
      setFormData(prev => ({ ...prev, packageInterested: normalizedPlan }));
    }

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mouseleave', hideCursor);
    };
  }, []);

  // Handle Form Input Change
  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "phone") {
      const onlyNums = value.replace(/[^0-9]/g, '');
      setFormData(prev => ({ ...prev, [name]: onlyNums }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  // Handle Form Submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const fullName = `${formData.firstName} ${formData.lastName}`;
    
    // Smart Data Compilation for WhatsApp
    let interest = "";
    if(formData.packageInterested !== "None") interest += `📦 Package: ${formData.packageInterested}\n`;
    if(formData.serviceInterested !== "None") interest += `🛠 Service: ${formData.serviceInterested}\n`;
    if(formData.packageInterested === "None" && formData.serviceInterested === "None") interest = "🧐 Interested in Consultation\n";
    
    const generatedWaMessage = `Hi SM NextGen Team, I'm interested in your services! 🚀\n\n👤 Name: ${fullName}\n📞 Phone: ${formData.phone}\n📧 Email: ${formData.email}\n${interest}📊 Stage: ${formData.businessStage}\n💰 Budget: ${formData.budget}\n📝 Note: ${formData.message}\n\nPlease help me scale.`;
    const generatedWaLink = getWhatsAppLink(generatedWaMessage);
    setWaLink(generatedWaLink);

    // Prepare Web3Forms Data
    const web3FormData = new FormData();
    web3FormData.append("access_key", "ec0688f4-c3f4-4282-938e-31f398af51d9");
    web3FormData.append("subject", "New Inquiry (Website)");
    web3FormData.append("name", fullName);
    web3FormData.append("email", formData.email);
    web3FormData.append("phone", formData.phone);
    web3FormData.append("budget", formData.budget);
    web3FormData.append("stage", formData.businessStage);
    web3FormData.append("package", formData.packageInterested);
    web3FormData.append("service", formData.serviceInterested);
    web3FormData.append("message", formData.message);

    // Prepare Zoho Data
    const zohoDesc = `Budget: ${formData.budget} | Stage: ${formData.businessStage} | Interest: ${formData.packageInterested !== 'None' ? formData.packageInterested : formData.serviceInterested} | Msg: ${formData.message}`;

    try {
      // Submit to Zoho CRM
      const zohoForm = document.getElementById("zohoHiddenForm");
      if (zohoForm) {
        document.getElementById("zoho_firstName").value = formData.firstName;
        document.getElementById("zoho_lastName").value = formData.lastName;
        document.getElementById("zoho_email").value = formData.email;
        document.getElementById("zoho_mobile").value = formData.phone;
        document.getElementById("zoho_description").value = zohoDesc;
        zohoForm.submit();
      }

      // Submit to Web3Forms
      const response = await fetch('https://api.web3forms.com/submit', { 
        method: 'POST', 
        body: web3FormData 
      });

      if (response.status === 200) {
        confetti({ particleCount: 200, spread: 90, origin: { y: 0.6 }, colors: ['#0097B2', '#ffffff'] });
        setIsSuccess(true);
        setTimeout(() => { window.open(generatedWaLink, '_blank'); }, 2000);
      } else {
        alert("Error submitting form. Please try again.");
      }
    } catch (error) {
      console.error(error);
      alert("Internet connection error. Could not submit.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const faqData = [
    { q: "How soon will you contact me?", a: "Once you submit the form, our growth strategist will reach out to you within 24 hours (often much sooner) to schedule your discovery call." },
    { q: "Do you work with international clients?", a: "Absolutely. We build marketing systems, AI integrations, and financial setups for growing startups and established brands globally." },
    { q: "Is there a minimum budget requirement?", a: "Our packages start at ₹4,999/mo to help early-stage businesses. We scale our services directly in line with your business revenue stage." },
    { q: "Do you offer free consultations?", a: "Yes. The initial 30-minute discovery call and the resulting high-level growth audit are completely free, with absolutely no obligation to buy." }
  ];

  return (
    <>

      <main className="bg-[#F8FAFC] dark:bg-[#0B2545] font-body text-[#0B2545] dark:text-[#E6EEF2] min-h-screen selection:bg-[#0097B2] selection:text-white w-full overflow-x-hidden transition-colors duration-300 relative">
        
        {/* --- DYNAMIC CURSOR SPOTLIGHT GLOW --- */}
        <div 
          ref={cursorRef} 
          className="pointer-events-none fixed top-0 left-0 w-[500px] h-[500px] bg-[#0097B2]/20 dark:bg-[#0097B2]/15 rounded-full blur-[120px] z-[99] hidden lg:block mix-blend-screen dark:mix-blend-lighten opacity-0 transition-opacity duration-300"
          style={{ willChange: 'transform' }}
        ></div>

        {/* --- ZOHO HIDDEN FORM --- */}
        <iframe name="zohoHiddenFrame" id="zohoHiddenFrame" style={{ display: 'none' }}></iframe>
        <form id="zohoHiddenForm" action="https://crm.zoho.in/crm/WebToLeadForm" method="POST" target="zohoHiddenFrame" style={{ display: 'none' }}>
          <input type="text" name="xnQsjsdp" defaultValue="c5443b6c20de877e533b8656cc2995c404251ab2c7c1983f3e6611b1453c0204" />
          <input type="hidden" name="zc_gad" id="zc_gad" defaultValue="" />
          <input type="text" name="xmIwtLD" defaultValue="63059fbd8acbf2da2a656b1de7734c54f7d9d0e78000479a907691c1154936687bd0f24e43fa9be224ed3acbd6b7c9fb" />
          <input type="text" name="actionType" defaultValue="TGVhZHM=" />
          <input type="text" name="returnURL" defaultValue="https://smnextgen.com" />
          <input type="text" name="First Name" id="zoho_firstName" />
          <input type="text" name="Last Name" id="zoho_lastName" />
          <input type="text" name="Email" id="zoho_email" />
          <input type="text" name="Mobile" id="zoho_mobile" />
          <textarea name="Description" id="zoho_description"></textarea>
        </form>

        {/* 1️⃣ HERO CONTACT SECTION */}
        <section className="relative pt-40 pb-24 bg-[#0B2545] overflow-hidden z-10 border-b border-white/5">
          <div className="absolute top-[-20%] left-[-10%] w-[800px] h-[800px] bg-[#0097B2]/20 rounded-full blur-[150px] animate-pulse pointer-events-none z-0"></div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid lg:grid-cols-12 gap-16 items-start">
              
              {/* Left: Text & Info Cards */}
              <div className="lg:col-span-5 text-white">
                <span className="inline-block px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-bold uppercase tracking-widest text-[#E6EEF2]/70 mb-6 backdrop-blur-md">Contact Us</span>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold mb-6 leading-tight" dangerouslySetInnerHTML={{ __html: contactInfo.mainHeading }}></h1>
                <p className="text-[#E6EEF2]/80 text-lg mb-8 leading-relaxed font-light" dangerouslySetInnerHTML={{ __html: contactInfo.subDescription }}></p>
                
                {/* Trust Indicators */}
                <div className="flex flex-col gap-3 mb-12 text-sm font-medium text-[#E6EEF2]/90">
                  <span className="flex items-center gap-3"><i className="fas fa-check-circle text-[#0097B2]"></i> Trusted by growing businesses globally</span>
                  <span className="flex items-center gap-3"><i className="fas fa-check-circle text-[#0097B2]"></i> Transparent pricing & reporting</span>
                  <span className="flex items-center gap-3"><i className="fas fa-check-circle text-[#0097B2]"></i> Fast onboarding & execution</span>
                </div>

                {/* 2️⃣ CONTACT INFO CARDS */}
                <div className="space-y-5">
                  <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-6 rounded-2xl flex items-center gap-5 hover:bg-white/10 transition-colors group">
                    <div className="w-12 h-12 bg-[#0097B2]/20 rounded-full flex items-center justify-center text-[#0097B2] text-xl group-hover:scale-110 transition-transform"><i className="fas fa-phone-alt"></i></div>
                    <div>
                      <p className="text-xs text-white/50 font-bold uppercase tracking-wider mb-1">Call Us Directly</p>
                      <p className="text-lg font-bold text-white">{contactInfo.phone}</p>
                    </div>
                  </div>
                  
                  <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-6 rounded-2xl flex items-center gap-5 hover:bg-white/10 transition-colors group">
                    <div className="w-12 h-12 bg-[#0097B2]/20 rounded-full flex items-center justify-center text-[#0097B2] text-xl group-hover:scale-110 transition-transform"><i className="fas fa-envelope"></i></div>
                    <div>
                      <p className="text-xs text-white/50 font-bold uppercase tracking-wider mb-1">Email Us</p>
                      <p className="text-lg font-bold text-white">{contactInfo.email}</p>
                    </div>
                  </div>

                  <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-6 rounded-2xl flex items-center gap-5 hover:bg-white/10 transition-colors group">
                    <div className="w-12 h-12 bg-[#0097B2]/20 rounded-full flex items-center justify-center text-[#0097B2] text-xl group-hover:scale-110 transition-transform"><i className="fas fa-map-marker-alt"></i></div>
                    <div>
                      <p className="text-xs text-white/50 font-bold uppercase tracking-wider mb-1">Global Headquarters</p>
                      <p className="text-lg font-bold text-white">{contactInfo.address}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* 3️⃣ FORM SECTION (MAIN CONVERSION AREA) */}
              <div className="lg:col-span-7 relative z-20">
                <div className="bg-white dark:bg-[#11325B] p-8 md:p-10 rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.1)] dark:shadow-none border border-gray-100 dark:border-white/10 relative overflow-hidden">
                  
                  {!isSuccess ? (
                    <div className="animate-fade-in-up">
                      <h3 className="text-2xl md:text-3xl font-bold text-[#0B2545] dark:text-white mb-2">Start Your Growth Consultation</h3>
                      <p className="text-sm text-gray-500 dark:text-[#E6EEF2]/70 mb-8"><i className="fas fa-lock text-green-500 mr-1"></i> Your information stays strictly private. No spam ever.</p>
                      
                      {/* Smart Form Progress Indicator */}
                      <div className="flex items-center gap-2 mb-8 bg-[#F8FAFC] dark:bg-[#0B2545] p-3 rounded-xl border border-gray-100 dark:border-white/5">
                        <div className="flex items-center gap-2 text-xs font-bold text-[#0097B2]">
                          <span className="w-5 h-5 rounded-full bg-[#0097B2] text-white flex items-center justify-center">1</span> Tell Us
                        </div>
                        <i className="fas fa-chevron-right text-gray-300 dark:text-gray-600 text-xs mx-1"></i>
                        <div className="flex items-center gap-2 text-xs font-bold text-gray-400 dark:text-gray-500">
                          <span className="w-5 h-5 rounded-full bg-gray-200 dark:bg-white/10 text-gray-500 dark:text-gray-400 flex items-center justify-center">2</span> Connect
                        </div>
                        <i className="fas fa-chevron-right text-gray-300 dark:text-gray-600 text-xs mx-1"></i>
                        <div className="flex items-center gap-2 text-xs font-bold text-gray-400 dark:text-gray-500 hidden sm:flex">
                          <span className="w-5 h-5 rounded-full bg-gray-200 dark:bg-white/10 text-gray-500 dark:text-gray-400 flex items-center justify-center">3</span> Grow
                        </div>
                      </div>

                      <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid sm:grid-cols-2 gap-6">
                          <div>
                            <label className="block text-[10px] font-bold text-gray-500 dark:text-[#E6EEF2]/60 uppercase tracking-widest mb-2">First Name</label>
                            <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} required placeholder="John" className="w-full bg-[#F8FAFC] dark:bg-[#071A30] border border-gray-200 dark:border-white/10 rounded-xl px-4 py-3.5 text-sm text-[#0B2545] dark:text-white focus:outline-none focus:border-[#0097B2] focus:ring-1 focus:ring-[#0097B2] transition-all" />
                          </div>
                          <div>
                            <label className="block text-[10px] font-bold text-gray-500 dark:text-[#E6EEF2]/60 uppercase tracking-widest mb-2">Last Name</label>
                            <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} required placeholder="Doe" className="w-full bg-[#F8FAFC] dark:bg-[#071A30] border border-gray-200 dark:border-white/10 rounded-xl px-4 py-3.5 text-sm text-[#0B2545] dark:text-white focus:outline-none focus:border-[#0097B2] focus:ring-1 focus:ring-[#0097B2] transition-all" />
                          </div>
                        </div>

                        <div className="grid sm:grid-cols-2 gap-6">
                          <div className="relative">
                            <label className="block text-[10px] font-bold text-gray-500 dark:text-[#E6EEF2]/60 uppercase tracking-widest mb-2">Email Address</label>
                            <div className="absolute top-[34px] left-4 text-gray-400"><i className="fas fa-envelope"></i></div>
                            <input type="email" name="email" value={formData.email} onChange={handleChange} required placeholder="john@company.com" className="w-full bg-[#F8FAFC] dark:bg-[#071A30] border border-gray-200 dark:border-white/10 rounded-xl pl-11 pr-4 py-3.5 text-sm text-[#0B2545] dark:text-white focus:outline-none focus:border-[#0097B2] focus:ring-1 focus:ring-[#0097B2] transition-all" />
                          </div>
                          <div className="relative">
                            <label className="block text-[10px] font-bold text-gray-500 dark:text-[#E6EEF2]/60 uppercase tracking-widest mb-2">Phone</label>
                            <div className="absolute top-[34px] left-4 text-gray-400"><i className="fas fa-phone-alt"></i></div>
                            <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required placeholder="9876543210" maxLength="15" className="w-full bg-[#F8FAFC] dark:bg-[#071A30] border border-gray-200 dark:border-white/10 rounded-xl pl-11 pr-4 py-3.5 text-sm text-[#0B2545] dark:text-white focus:outline-none focus:border-[#0097B2] focus:ring-1 focus:ring-[#0097B2] transition-all" />
                          </div>
                        </div>

                        <div className="grid sm:grid-cols-2 gap-6">
                          <div>
                            <label className="block text-[10px] font-bold text-gray-500 dark:text-[#E6EEF2]/60 uppercase tracking-widest mb-2">Business Stage</label>
                            <select name="businessStage" value={formData.businessStage} onChange={handleChange} required className="w-full bg-[#F8FAFC] dark:bg-[#071A30] border border-gray-200 dark:border-white/10 rounded-xl px-4 py-3.5 text-sm text-[#0B2545] dark:text-white focus:outline-none focus:border-[#0097B2] transition-all cursor-pointer">
                              <option value="" disabled>Select...</option>
                              <option value="Idea Stage">Idea Stage</option>
                              <option value="New Business">New Business (0-1 Yr)</option>
                              <option value="Established">Established</option>
                              <option value="Enterprise">Enterprise</option>
                            </select>
                          </div>
                          <div>
                            <label className="block text-[10px] font-bold text-gray-500 dark:text-[#E6EEF2]/60 uppercase tracking-widest mb-2">Monthly Budget</label>
                            <select name="budget" value={formData.budget} onChange={handleChange} required className="w-full bg-[#F8FAFC] dark:bg-[#071A30] border border-gray-200 dark:border-white/10 rounded-xl px-4 py-3.5 text-sm text-[#0B2545] dark:text-white focus:outline-none focus:border-[#0097B2] transition-all cursor-pointer">
                              <option value="" disabled>Select...</option>
                              <option value="Under 10k">Under ₹10,000</option>
                              <option value="10k-50k">₹10k - ₹50k</option>
                              <option value="50k-1L">₹50k - ₹1 Lakh</option>
                              <option value="1L+">₹1 Lakh+</option>
                            </select>
                          </div>
                        </div>

                        <div className="grid sm:grid-cols-2 gap-6">
                          <div>
                            <label className="block text-[10px] font-bold text-gray-500 dark:text-[#E6EEF2]/60 uppercase tracking-widest mb-2">Pre-Built Package</label>
                            <select name="packageInterested" value={formData.packageInterested} onChange={handleChange} className="w-full bg-[#F8FAFC] dark:bg-[#071A30] border border-gray-200 dark:border-white/10 rounded-xl px-4 py-3.5 text-sm text-[#0B2545] dark:text-white focus:outline-none focus:border-[#0097B2] transition-all cursor-pointer">
                              <option value="None">-- Select Package --</option>
                              {(contactInfo.packagesList.length > 0 ? contactInfo.packagesList : defaultPackages).map((pkg, i) => (
                                <option key={i} value={pkg}>{pkg}</option>
                              ))}
                            </select>
                          </div>
                          <div>
                            <label className="block text-[10px] font-bold text-gray-500 dark:text-[#E6EEF2]/60 uppercase tracking-widest mb-2">Specific Service</label>
                            <select name="serviceInterested" value={formData.serviceInterested} onChange={handleChange} className="w-full bg-[#F8FAFC] dark:bg-[#071A30] border border-gray-200 dark:border-white/10 rounded-xl px-4 py-3.5 text-sm text-[#0B2545] dark:text-white focus:outline-none focus:border-[#0097B2] transition-all cursor-pointer">
                              <option value="None">-- Select Service --</option>
                              {(contactInfo.servicesList.length > 0 ? contactInfo.servicesList : defaultServices).map((svc, i) => (
                                <option key={i} value={svc}>{svc}</option>
                              ))}
                            </select>
                          </div>
                        </div>

                        <div>
                          <label className="block text-[10px] font-bold text-gray-500 dark:text-[#E6EEF2]/60 uppercase tracking-widest mb-2">Project Details (Optional)</label>
                          <textarea name="message" value={formData.message} onChange={handleChange} rows="3" placeholder="Tell us briefly about your goals..." className="w-full bg-[#F8FAFC] dark:bg-[#071A30] border border-gray-200 dark:border-white/10 rounded-xl px-4 py-3 text-sm text-[#0B2545] dark:text-white focus:outline-none focus:border-[#0097B2] focus:ring-1 focus:ring-[#0097B2] transition-all resize-none"></textarea>
                        </div>

                        <button type="submit" disabled={isSubmitting} className={`w-full py-4 rounded-xl text-white font-bold transition-all shadow-[0_5px_15px_rgba(0,151,178,0.3)] flex justify-center items-center gap-2 ${isSubmitting ? 'bg-gray-400 cursor-not-allowed' : 'bg-[#0097B2] hover:bg-[#0B2545] dark:hover:bg-white dark:hover:text-[#0B2545] hover:-translate-y-1'}`}>
                          {isSubmitting ? <><i className="fas fa-circle-notch fa-spin"></i> Processing...</> : <>Request Free Audit <i className="fas fa-arrow-right"></i></>}
                        </button>
                        
                        {/* Trust Form Badges */}
                        <div className="flex justify-between items-center text-[10px] sm:text-xs font-bold text-gray-400 dark:text-gray-500 pt-2">
                          <span className="flex items-center gap-1"><i className="fas fa-check text-green-500"></i> Free Consultation</span>
                          <span className="flex items-center gap-1"><i className="fas fa-check text-green-500"></i> No Obligation</span>
                          <span className="flex items-center gap-1"><i className="fas fa-check text-green-500"></i> Response &lt; 24hrs</span>
                        </div>
                      </form>
                    </div>
                  ) : (
                    <div className="flex flex-col justify-center items-center text-center w-full h-full py-20 transition-all animate-fade-in-up">
                      <div className="w-24 h-24 bg-green-500/10 rounded-full flex items-center justify-center mb-6 animate-[bounce_2s_infinite]">
                        <i className="fas fa-check text-4xl text-green-500"></i>
                      </div>
                      <h3 className="text-3xl font-heading font-extrabold text-[#0B2545] dark:text-white mb-3">Request Received!</h3>
                      <p className="text-gray-500 dark:text-[#E6EEF2]/80 text-sm mb-10 max-w-sm mx-auto leading-relaxed">
                        Thank you for reaching out. Our growth strategists are reviewing your details. Let's confirm on WhatsApp to begin.
                      </p>
                      
                      <div className="space-y-4 w-full max-w-xs">
                        <a href={waLink} target="_blank" rel="noreferrer" className="block w-full py-4 bg-[#25D366] text-white font-bold rounded-xl shadow-lg hover:bg-[#20bd5a] hover:-translate-y-1 transition-all flex items-center justify-center gap-2">
                          <i className="fab fa-whatsapp text-xl"></i> Confirm on WhatsApp
                        </a>
                        <button onClick={() => {setIsSuccess(false); setSubmitted(false);}} className="block w-full py-4 border border-gray-200 dark:border-white/10 text-gray-500 dark:text-[#E6EEF2]/60 font-bold rounded-xl hover:bg-gray-50 dark:hover:bg-white/5 transition-colors">
                          Back to Form
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* 8️⃣ OUR SIMPLE GROWTH PROCESS */}
        <section className="py-24 bg-white dark:bg-[#071A30] border-b border-gray-200 dark:border-white/5 transition-colors duration-300 z-20 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-[#0B2545] dark:text-white mb-4">Our Simple Growth Process</h2>
              <p className="text-gray-600 dark:text-[#E6EEF2]/80">From initial contact to compounding revenue.</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-[#F8FAFC] dark:bg-[#11325B] p-8 rounded-3xl border border-gray-100 dark:border-white/5 shadow-sm text-center hover:border-[#0097B2] hover:shadow-lg transition-all group">
                <div className="w-16 h-16 rounded-2xl bg-[#0097B2]/10 text-[#0097B2] flex items-center justify-center text-2xl mx-auto mb-6 group-hover:scale-110 transition-transform"><i className="fas fa-search-location"></i></div>
                <h3 className="text-xl font-bold text-[#0B2545] dark:text-white mb-3">1. Discovery & Audit</h3>
                <p className="text-sm text-gray-600 dark:text-[#E6EEF2]/70 leading-relaxed">We hop on a call to understand your business model, audit your current systems, and identify growth bottlenecks.</p>
              </div>
              <div className="bg-[#F8FAFC] dark:bg-[#11325B] p-8 rounded-3xl border border-gray-100 dark:border-white/5 shadow-sm text-center hover:border-[#0097B2] hover:shadow-lg transition-all group">
                <div className="w-16 h-16 rounded-2xl bg-[#0097B2]/10 text-[#0097B2] flex items-center justify-center text-2xl mx-auto mb-6 group-hover:scale-110 transition-transform"><i className="fas fa-chess-knight"></i></div>
                <h3 className="text-xl font-bold text-[#0B2545] dark:text-white mb-3">2. Strategy & Planning</h3>
                <p className="text-sm text-gray-600 dark:text-[#E6EEF2]/70 leading-relaxed">We deliver a custom, data-backed roadmap detailing exactly how we will use marketing and AI to scale your revenue.</p>
              </div>
              <div className="bg-[#F8FAFC] dark:bg-[#11325B] p-8 rounded-3xl border border-gray-100 dark:border-white/5 shadow-sm text-center hover:border-[#0097B2] hover:shadow-lg transition-all group">
                <div className="w-16 h-16 rounded-2xl bg-[#0097B2]/10 text-[#0097B2] flex items-center justify-center text-2xl mx-auto mb-6 group-hover:scale-110 transition-transform"><i className="fas fa-rocket"></i></div>
                <h3 className="text-xl font-bold text-[#0B2545] dark:text-white mb-3">3. Execution & Scaling</h3>
                <p className="text-sm text-gray-600 dark:text-[#E6EEF2]/70 leading-relaxed">We deploy the campaigns, build the automations, ensure compliance, and continuously optimize for maximum ROI.</p>
              </div>
            </div>
          </div>
        </section>

        {/* 9️⃣ WHY BUSINESSES CHOOSE US (Social Proof) */}
        <section className="py-24 bg-[#F8FAFC] dark:bg-[#0B1120] transition-colors duration-300">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-[#0B2545] dark:text-white mb-16">Why Businesses Choose SM NextGen</h2>
            
            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 text-left">
              <div className="bg-white dark:bg-[#162032] p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-white/5 group hover:-translate-y-1 transition-all">
                <i className="fas fa-chart-line text-[#0097B2] text-3xl mb-4 group-hover:scale-110 transition-transform"></i>
                <h3 className="font-bold text-[#0B2545] dark:text-white mb-2">Data-Driven Marketing</h3>
                <p className="text-sm text-gray-500 dark:text-[#E6EEF2]/70">Decisions backed by hard analytics, strictly engineered to lower CAC.</p>
              </div>
              <div className="bg-white dark:bg-[#162032] p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-white/5 group hover:-translate-y-1 transition-all">
                <i className="fas fa-robot text-[#0097B2] text-3xl mb-4 group-hover:scale-110 transition-transform"></i>
                <h3 className="font-bold text-[#0B2545] dark:text-white mb-2">Automation-First</h3>
                <p className="text-sm text-gray-500 dark:text-[#E6EEF2]/70">We build AI pipelines that nurture leads and sync CRMs while you sleep.</p>
              </div>
              <div className="bg-white dark:bg-[#162032] p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-white/5 group hover:-translate-y-1 transition-all">
                <i className="fas fa-eye text-[#0097B2] text-3xl mb-4 group-hover:scale-110 transition-transform"></i>
                <h3 className="font-bold text-[#0B2545] dark:text-white mb-2">Transparent Reporting</h3>
                <p className="text-sm text-gray-500 dark:text-[#E6EEF2]/70">Live dashboards where you can see exact ad spend and ROI daily.</p>
              </div>
              <div className="bg-white dark:bg-[#162032] p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-white/5 group hover:-translate-y-1 transition-all">
                <i className="fas fa-user-shield text-[#0097B2] text-3xl mb-4 group-hover:scale-110 transition-transform"></i>
                <h3 className="font-bold text-[#0B2545] dark:text-white mb-2">Dedicated Support</h3>
                <p className="text-sm text-gray-500 dark:text-[#E6EEF2]/70">Direct access to your assigned fractional CMO and Virtual CFO team.</p>
              </div>
            </div>
          </div>
        </section>

        {/* 1️⃣0️⃣ FAQ SECTION */}
        <section className="py-24 bg-white dark:bg-[#071A30] transition-colors duration-300 border-t border-gray-200 dark:border-white/5 relative z-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
               <h2 className="text-3xl md:text-5xl font-heading font-extrabold text-[#0B2545] dark:text-white mb-4">Frequently Asked Questions</h2>
            </div>
            <div className="space-y-4">
              {faqData.map((faq, index) => (
                <div key={index} className="bg-[#F8FAFC] dark:bg-[#11325B] border border-gray-200 dark:border-white/5 rounded-2xl overflow-hidden shadow-sm hover:border-[#0097B2]/50 transition-all duration-300">
                  <button 
                    onClick={() => toggleFaq(index)}
                    className="w-full px-8 py-6 text-left font-bold text-[#0B2545] dark:text-white flex justify-between items-center focus:outline-none text-lg"
                  >
                    {faq.q}
                    <div className={`w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center transition-all duration-300 ${activeFaq === index ? "bg-[#0097B2] text-white rotate-180 shadow-md" : "bg-white dark:bg-[#0B2545] text-[#0097B2] border border-gray-200 dark:border-white/10"}`}>
                      <i className="fas fa-chevron-down"></i>
                    </div>
                  </button>
                  <div className={`px-8 pb-8 text-gray-600 dark:text-[#E6EEF2]/80 text-base leading-relaxed ${activeFaq === index ? "block" : "hidden"}`}>
                    {faq.a}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 1️⃣1️⃣ FINAL CTA SECTION */}
        <section className="relative py-32 bg-[#0B2545] overflow-hidden text-white z-20">
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#0097B2]/20 rounded-full blur-[100px] z-0"></div>
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#0097B2]/10 rounded-full blur-[100px] z-0"></div>
          
          <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-4xl md:text-6xl font-heading font-extrabold mb-6 leading-tight tracking-tight">Ready to Scale Your Business?</h2>
            <p className="text-xl text-[#E6EEF2] mb-12 font-body max-w-2xl mx-auto font-light leading-relaxed">Tell us about your business and we'll recommend the absolute best growth strategy.</p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <button onClick={() => {document.getElementById('leadForm').scrollIntoView({behavior:'smooth'})}} className="px-10 py-5 bg-[#0097B2] hover:bg-white hover:text-[#0B2545] text-white font-bold rounded-xl shadow-[0_0_30px_-5px_rgba(0,151,178,0.5)] hover:scale-105 transition-all duration-300 text-lg flex items-center justify-center gap-3 w-full sm:w-auto relative z-20">
                Submit Request <i className="fas fa-arrow-up transform rotate-45"></i>
              </button>
              <a href={getWhatsAppLink("Hi SM NextGen, I want to scale my business. Let's chat.")} target="_blank" rel="noreferrer" className="px-10 py-5 bg-transparent border-2 border-[#E6EEF2]/30 hover:border-white text-white font-bold rounded-xl hover:bg-white/10 transition-colors text-lg flex items-center justify-center gap-3 w-full sm:w-auto relative z-20">
                <i className="fab fa-whatsapp text-xl"></i> Chat on WhatsApp
              </a>
            </div>
          </div>
        </section>

      </main>
    </>
  );
}