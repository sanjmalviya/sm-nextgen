"use client";
import { useState, useEffect, useRef } from "react";
import confetti from "canvas-confetti";

export default function Contact() {
  const cursorRef = useRef(null);
  
  // States for Dynamic Contact Settings (from Sanity)
  const [contactInfo, setContactInfo] = useState({
    mainHeading: "Let's Build Your <span class='text-brand'>Growth Engine.</span>",
    subDescription: "Stop managing 10 different freelancers. Partner with <strong>SM NextGen</strong> to handle your Marketing, Branding, AI Automation, Legal & Finance Services while you focus on the product.",
    phone: "+91 88243 25438",
    email: "info@smnextgen.com",
    address: "Udaipur, Rajasthan, India",
    processImageUrl: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop",
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

  // Default dropdown options fallback
  const defaultPackages = [
    "Digital Starter (₹4,999/mo)", "Brand Presence (₹6,999/mo)", "Business Starter (₹12,999/mo)", 
    "Marketing Growth (₹19,999/mo)", "Growth Core (₹34,999/mo)", "Growth Scale (₹49,999/mo)", "Growth Partner (₹69,999/mo)"
  ];
  const defaultServices = [
    "Brand Strategy", "Logo Design", "Social Media Mgmt", "Meta Ads", "Google Ads", 
    "SEO Ranking", "Lead Gen System", "WhatsApp Automation", "CRM Setup", "GST Filing", "Accounting", "Startup Compliance"
  ];

  // 1. Cursor Glow & Sanity Fetch
  useEffect(() => {
    // Mouse Spotlight Effect
    const moveCursor = (e) => {
      if (cursorRef.current) {
        cursorRef.current.style.left = e.clientX + 'px';
        cursorRef.current.style.top = e.clientY + 'px';
      }
    };
    document.addEventListener('mousemove', moveCursor);

    // Fetch Settings from Sanity
    const fetchContactSettings = async () => {
      try {
        const PROJECT_ID = "y31b2jo0";
        const DATASET = "production";
        const QUERY = encodeURIComponent('*[_type == "contactSettings"][0]{mainHeading, subDescription, phone, email, address, "processImageUrl": processImage.asset->url, servicesList, packagesList}');
        const URL = `https://${PROJECT_ID}.api.sanity.io/v2021-10-21/data/query/${DATASET}?query=${QUERY}`;
        
        const response = await fetch(URL);
        const { result } = await response.json();
        if (result) {
          setContactInfo({
            mainHeading: result.mainHeading || contactInfo.mainHeading,
            subDescription: result.subDescription || contactInfo.subDescription,
            phone: result.phone || contactInfo.phone,
            email: result.email || contactInfo.email,
            address: result.address || contactInfo.address,
            processImageUrl: result.processImageUrl || contactInfo.processImageUrl,
            packagesList: result.packagesList || [],
            servicesList: result.servicesList || []
          });
        }
      } catch (error) {
        console.error("Sanity Fetch Error:", error);
      }
    };

    fetchContactSettings();

    // Auto-select package from URL parameter (e.g., ?plan=Growth_Core)
    const urlParams = new URLSearchParams(window.location.search);
    const plan = urlParams.get('plan');
    if (plan) {
      const normalizedPlan = plan.replace(/_/g, ' ');
      setFormData(prev => ({ ...prev, packageInterested: normalizedPlan }));
    }

    return () => document.removeEventListener('mousemove', moveCursor);
  }, []);

  // Handle Form Input Change
  const handleChange = (e) => {
    const { name, value } = e.target;
    // Allow only numbers in phone
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
    const generatedWaLink = `https://wa.me/918824325438?text=${encodeURIComponent(generatedWaMessage)}`;
    setWaLink(generatedWaLink);

    // Prepare Web3Forms Data
    const web3FormData = new FormData();
    web3FormData.append("access_key", "ec0688f4-c3f4-4282-938e-31f398af51d9"); // Provided in your code
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
      // Submit to Zoho CRM (Hidden iframe hack via standard form submission)
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
        confetti({ particleCount: 150, spread: 70, origin: { y: 0.6 } });
        setIsSuccess(true);
        // Auto redirect to WhatsApp after 2 seconds
        setTimeout(() => { window.open(generatedWaLink, '_blank'); }, 2000);
      } else {
        alert("Error submitting form via email.");
      }
    } catch (error) {
      console.error(error);
      alert("Internet Error. Could not submit.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="bg-[#F8FAFC] dark:bg-navy font-body text-gray-800 dark:text-gray-200 overflow-x-hidden">
      <div ref={cursorRef} id="cursor-glow" className="hidden md:block"></div>

      {/* Zoho Hidden Form Setup */}
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

      <section className="pt-40 pb-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            
            {/* LEFT SIDE: Contact Info */}
            <div className="space-y-12">
              <div>
                <span className="text-brand font-bold text-xs uppercase tracking-widest">Get in Touch</span>
                <h1 className="text-4xl md:text-5xl font-heading font-bold text-navy dark:text-white mt-2 mb-4" dangerouslySetInnerHTML={{ __html: contactInfo.mainHeading }}></h1>
                <p className="text-gray-500 dark:text-gray-400 text-lg leading-relaxed" dangerouslySetInnerHTML={{ __html: contactInfo.subDescription }}></p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-brand/10 rounded-full flex items-center justify-center text-brand text-xl shrink-0"><i className="fas fa-phone-alt"></i></div>
                  <div>
                    <h4 className="font-bold text-navy dark:text-white">Call Us</h4>
                    <p className="text-gray-500 text-sm">{contactInfo.phone}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-brand/10 rounded-full flex items-center justify-center text-brand text-xl shrink-0"><i className="fas fa-envelope"></i></div>
                  <div>
                    <h4 className="font-bold text-navy dark:text-white">Email Us</h4>
                    <p className="text-gray-500 text-sm">{contactInfo.email}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-brand/10 rounded-full flex items-center justify-center text-brand text-xl shrink-0"><i className="fas fa-map-marker-alt"></i></div>
                  <div>
                    <h4 className="font-bold text-navy dark:text-white">Visit Us</h4>
                    <p className="text-gray-500 text-sm">{contactInfo.address}</p>
                  </div>
                </div>
              </div>

              <div className="bg-white dark:bg-white/5 p-6 rounded-2xl border border-gray-100 dark:border-white/10">
                <h3 className="text-lg font-bold text-navy dark:text-white mb-4">Who is this for?</h3>
                <ul className="space-y-3 text-sm text-gray-600 dark:text-gray-300">
                  <li className="flex items-center gap-2"><i className="fas fa-check text-green-500"></i> Founders scaling from ₹0 to ₹10L/mo.</li>
                  <li className="flex items-center gap-2"><i className="fas fa-check text-green-500"></i> Local Businesses wanting to go Digital.</li>
                  <li className="flex items-center gap-2"><i className="fas fa-check text-green-500"></i> Startups needing Automation + Marketing.</li>
                </ul>
              </div>
            </div>

            {/* RIGHT SIDE: Contact Form */}
            <div className="bg-white dark:bg-[#162032] p-8 md:p-10 rounded-3xl shadow-2xl border border-gray-100 dark:border-white/5 relative overflow-hidden min-h-[600px] flex flex-col justify-center">
              
              {!isSuccess ? (
                <form onSubmit={handleSubmit} className="space-y-5 relative z-10 w-full animate-fade-in-up">
                  
                  <div className="grid grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-bold text-gray-500 uppercase mb-2">First Name</label>
                      <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} required placeholder="John" className="w-full bg-gray-50 dark:bg-navy border border-gray-200 dark:border-white/10 rounded-xl p-3 text-navy dark:text-white focus:border-brand outline-none transition" />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-gray-500 uppercase mb-2">Last Name</label>
                      <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} required placeholder="Doe" className="w-full bg-gray-50 dark:bg-navy border border-gray-200 dark:border-white/10 rounded-xl p-3 text-navy dark:text-white focus:border-brand outline-none transition" />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-bold text-gray-500 uppercase mb-2">Email Address</label>
                      <input type="email" name="email" value={formData.email} onChange={handleChange} required placeholder="john@company.com" className="w-full bg-gray-50 dark:bg-navy border border-gray-200 dark:border-white/10 rounded-xl p-3 text-navy dark:text-white focus:border-brand outline-none transition" />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-gray-500 uppercase mb-2">Phone (Numbers Only)</label>
                      <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required placeholder="9876543210" maxLength="15" className="w-full bg-gray-50 dark:bg-navy border border-gray-200 dark:border-white/10 rounded-xl p-3 text-navy dark:text-white focus:border-brand outline-none transition" />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-bold text-gray-500 uppercase mb-2">Monthly Budget</label>
                      <select name="budget" value={formData.budget} onChange={handleChange} required className="w-full bg-gray-50 dark:bg-navy border border-gray-200 dark:border-white/10 rounded-xl p-3 text-navy dark:text-white focus:border-brand outline-none transition cursor-pointer">
                        <option value="" disabled>Range...</option>
                        <option value="Under 10k">Under ₹10k</option>
                        <option value="10k-50k">₹10k - ₹50k</option>
                        <option value="50k-1L">₹50k - ₹1L</option>
                        <option value="1L+">₹1 Lakh+</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-gray-500 uppercase mb-2">Business Stage</label>
                      <select name="businessStage" value={formData.businessStage} onChange={handleChange} required className="w-full bg-gray-50 dark:bg-navy border border-gray-200 dark:border-white/10 rounded-xl p-3 text-navy dark:text-white focus:border-brand outline-none transition cursor-pointer">
                        <option value="" disabled>Select...</option>
                        <option value="Idea Stage">Idea Stage</option>
                        <option value="New Business">New (0-1 Yr)</option>
                        <option value="Established">Established</option>
                        <option value="Enterprise">Enterprise</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-500 uppercase mb-2">Select a Package</label>
                    <select name="packageInterested" value={formData.packageInterested} onChange={handleChange} className="w-full bg-gray-50 dark:bg-navy border border-gray-200 dark:border-white/10 rounded-xl p-3 text-navy dark:text-white focus:border-brand outline-none transition cursor-pointer">
                      <option value="None">-- No Package Selected --</option>
                      <optgroup label="Available Packages">
                        {(contactInfo.packagesList.length > 0 ? contactInfo.packagesList : defaultPackages).map((pkg, i) => (
                          <option key={i} value={pkg}>{pkg}</option>
                        ))}
                      </optgroup>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-500 uppercase mb-2">OR Individual Service</label>
                    <select name="serviceInterested" value={formData.serviceInterested} onChange={handleChange} className="w-full bg-gray-50 dark:bg-navy border border-gray-200 dark:border-white/10 rounded-xl p-3 text-navy dark:text-white focus:border-brand outline-none transition cursor-pointer">
                      <option value="None">-- Select Specific Service --</option>
                      <optgroup label="Available Services">
                        {(contactInfo.servicesList.length > 0 ? contactInfo.servicesList : defaultServices).map((svc, i) => (
                          <option key={i} value={svc}>{svc}</option>
                        ))}
                      </optgroup>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-500 uppercase mb-2">Message (Optional)</label>
                    <textarea name="message" value={formData.message} onChange={handleChange} rows="3" placeholder="Tell us about your requirement..." className="w-full bg-gray-50 dark:bg-navy border border-gray-200 dark:border-white/10 rounded-xl p-3 text-navy dark:text-white focus:border-brand outline-none transition"></textarea>
                  </div>

                  <button type="submit" disabled={isSubmitting} className={`w-full py-4 font-bold rounded-xl shadow-lg transition transform ${isSubmitting ? 'bg-gray-500 cursor-not-allowed' : 'bg-brand hover:bg-[#007f96] hover:-translate-y-1 text-white'} flex justify-center items-center gap-2`}>
                    {isSubmitting ? <span><i className="fas fa-spinner fa-spin"></i> Sending...</span> : <span>🚀 Send Request</span>}
                  </button>
                </form>
              ) : (
                <div className="flex flex-col justify-center items-center text-center w-full h-full py-10 transition-all animate-fade-in-up">
                  <div className="w-24 h-24 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mb-6 animate-bounce">
                    <i className="fas fa-check text-4xl text-green-500"></i>
                  </div>
                  <h3 className="text-3xl font-heading font-bold text-navy dark:text-white mb-2">Request Received! 🎉</h3>
                  <p className="text-gray-500 dark:text-gray-300 text-sm mb-8 max-w-sm mx-auto">
                    Thank you for reaching out. We are reviewing your details. Please confirm on WhatsApp to start.
                  </p>
                  
                  <div className="space-y-3 w-full max-w-xs">
                    <a href={waLink} target="_blank" rel="noreferrer" className="block w-full py-3 bg-[#25D366] text-white font-bold rounded-xl shadow-md hover:bg-[#20bd5a] transition flex items-center justify-center gap-2">
                      <i className="fab fa-whatsapp text-xl"></i> Confirm on WhatsApp
                    </a>
                    <button onClick={() => window.location.reload()} className="block w-full py-3 border border-gray-300 dark:border-white/10 text-gray-500 dark:text-gray-400 font-bold rounded-xl hover:bg-gray-50 dark:hover:bg-white/5 transition">
                      Back to Form
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS SECTION */}
      <section className="py-24 bg-white dark:bg-navy border-t border-gray-100 dark:border-white/5">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <img src={contactInfo.processImageUrl} alt="Team Collaborating" className="rounded-2xl shadow-2xl border border-gray-200 dark:border-white/10 hover:scale-[1.02] transition duration-500" />
            </div>
            <div className="md:w-1/2">
              <div className="inline-block px-3 py-1 bg-brand/10 text-brand text-xs font-bold rounded-full mb-4">RELIABLE PROCESS</div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-navy dark:text-white mb-6">How We Work? <br />Simple & Transparent.</h2>
              
              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-brand text-white rounded-full flex items-center justify-center font-bold text-lg shrink-0">1</div>
                  <div>
                    <h4 className="font-bold text-navy dark:text-white text-lg">Discovery & Audit</h4>
                    <p className="text-sm text-gray-500">We analyze your current status and identify growth gaps.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-brand text-white rounded-full flex items-center justify-center font-bold text-lg shrink-0">2</div>
                  <div>
                    <h4 className="font-bold text-navy dark:text-white text-lg">Strategy & Proposal</h4>
                    <p className="text-sm text-gray-500">You get a custom plan tailored to your budget and goals.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-brand text-white rounded-full flex items-center justify-center font-bold text-lg shrink-0">3</div>
                  <div>
                    <h4 className="font-bold text-navy dark:text-white text-lg">Execution & Scale</h4>
                    <p className="text-sm text-gray-500">We implement the system and optimize for maximum ROI.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="py-20 bg-light dark:bg-[#081b33]">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-navy dark:text-white mb-10">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <div className="bg-white dark:bg-navy rounded-xl shadow-sm overflow-hidden">
              <button onClick={() => setActiveFaq(activeFaq === 1 ? null : 1)} className="w-full px-6 py-4 text-left font-bold flex justify-between items-center text-navy dark:text-white">
                <span>How soon can you start my project?</span>
                <i className={`fas ${activeFaq === 1 ? 'fa-minus' : 'fa-plus'}`}></i>
              </button>
              {activeFaq === 1 && (
                <div className="px-6 pb-4 text-sm text-gray-600 dark:text-gray-400">
                  We typically onboard clients within 24-48 hours. Once the strategy is approved, we start execution immediately.
                </div>
              )}
            </div>
            <div className="bg-white dark:bg-navy rounded-xl shadow-sm overflow-hidden">
              <button onClick={() => setActiveFaq(activeFaq === 2 ? null : 2)} className="w-full px-6 py-4 text-left font-bold flex justify-between items-center text-navy dark:text-white">
                <span>Do I have to pay GST extra?</span>
                <i className={`fas ${activeFaq === 2 ? 'fa-minus' : 'fa-plus'}`}></i>
              </button>
              {activeFaq === 2 && (
                <div className="px-6 pb-4 text-sm text-gray-600 dark:text-gray-400">
                  Yes, as per government norms, 18% GST is applicable on all invoices.
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}