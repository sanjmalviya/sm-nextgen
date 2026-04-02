// file: app/tools/ToolsClient.js
"use client";
import { useState } from "react";

export default function ToolsClient() {
  // 1. ROI Calculator States
  const [spend, setSpend] = useState(20000);
  const [roas, setRoas] = useState(4);

  // 2. CAC Calculator States
  const [marketingSpend, setMarketingSpend] = useState(50000);
  const [newCustomers, setNewCustomers] = useState(100);

  // 3. UTM Builder States
  const [website, setWebsite] = useState("");
  const [source, setSource] = useState("facebook");
  const [medium, setMedium] = useState("cpc");
  const [name, setName] = useState("");
  const [copied, setCopied] = useState(false);

  // 4. Audit Form States
  const [auditUrl, setAuditUrl] = useState("");
  const [auditPhone, setAuditPhone] = useState("");
  const [isScanning, setIsScanning] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  // NOTE: Mouse Glow logic removed to use the global CursorGlow from layout.js

  // UTM Link Generator
  const generatedUtmLink = (website && source) 
    ? `${website}?utm_source=${source}&utm_medium=${medium}&utm_campaign=${name}` 
    : 'Enter details above';

  const copyToClipboard = () => {
    if (website) {
      navigator.clipboard.writeText(generatedUtmLink);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  // Audit Form Submit Handler
  const handleAuditSubmit = (e) => {
    e.preventDefault();
    setIsScanning(true);

    // Simulate Loading
    setTimeout(() => {
      setIsScanning(false);
      setShowSuccess(true);
      
      // Redirect to WhatsApp
      const msg = `Hi SM NextGen Team, I requested a *7-Point Business Audit*.\n\n*Website:* ${auditUrl}\n*Phone:* ${auditPhone}\n\nPlease check.`;
      window.open(`https://wa.me/917073538077?text=${encodeURIComponent(msg)}`, '_blank');
      
      // Reset form after delay
      setTimeout(() => {
        setShowSuccess(false);
        setAuditUrl("");
        setAuditPhone("");
      }, 3000);
    }, 1500);
  };

  return (
    // <main> class updated to remove hardcoded colors and use global layout styles
    <main className="relative w-full z-10 overflow-x-hidden min-h-screen transition-colors duration-300">
      
      {/* HERO SECTION */}
      <section className="relative pt-40 pb-16 px-4 text-center">
        <div className="relative z-10 max-w-4xl mx-auto">
          <span className="text-[#0097B2] font-bold text-xs uppercase tracking-widest bg-[#0097B2]/10 px-3 py-1 rounded-full border border-[#0097B2]/20">Free Engineering Resources</span>
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-[#0B2545] dark:text-white mt-4 mb-4">
            Growth Engineering <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0097B2] to-cyan-400">Toolkit</span>
          </h1>
          <p className="text-gray-500 dark:text-[#E6EEF2]/70 text-lg max-w-2xl mx-auto">
            Stop guessing. Use our proprietary calculators to forecast revenue, track links, and audit your digital health.
          </p>
        </div>
      </section>

      {/* TOOLS SECTION */}
      <section className="pb-24 px-4 relative z-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 gap-12">

          {/* 1. ROI CALCULATOR */}
          <div className="bg-white dark:bg-[#162032] p-8 md:p-12 rounded-3xl shadow-2xl border border-gray-100 dark:border-white/5 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#0097B2]/10 rounded-full blur-3xl -mr-16 -mt-16"></div>

            <div className="flex flex-col lg:flex-row gap-12 relative z-10">
              <div className="lg:w-1/2 space-y-8">
                <div>
                  <h2 className="text-2xl font-heading font-bold text-[#0B2545] dark:text-white mb-2 flex items-center gap-3">
                    <i className="fas fa-chart-line text-[#0097B2]"></i> ROI Forecaster
                  </h2>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Calculate projected revenue based on ad spend.</p>
                </div>

                <div>
                  <div className="flex justify-between mb-3">
                    <label className="font-bold text-gray-600 dark:text-gray-300">Monthly Ad Budget</label>
                    <span className="text-[#0097B2] font-bold bg-[#0097B2]/10 px-2 rounded">₹ {spend.toLocaleString()}</span>
                  </div>
                  <input 
                    type="range" min="10000" max="500000" step="5000" 
                    value={spend} 
                    onChange={(e) => setSpend(Number(e.target.value))} 
                    className="w-full h-2 bg-gray-200 dark:bg-white/10 rounded-lg appearance-none cursor-pointer" 
                  />
                </div>

                <div>
                  <div className="flex justify-between mb-3">
                    <label className="font-bold text-gray-600 dark:text-gray-300">Expected ROAS</label>
                    <span className="text-[#0097B2] font-bold bg-[#0097B2]/10 px-2 rounded">{roas}x</span>
                  </div>
                  <input 
                    type="range" min="2" max="10" step="0.5" 
                    value={roas} 
                    onChange={(e) => setRoas(Number(e.target.value))} 
                    className="w-full h-2 bg-gray-200 dark:bg-white/10 rounded-lg appearance-none cursor-pointer" 
                  />
                  <p className="text-[10px] text-gray-400 mt-2">*ROAS = Return On Ad Spend (Industry Avg: 3x-5x)</p>
                </div>
              </div>

              <div className="lg:w-1/2 bg-[#F8FAFC] dark:bg-[#071A30]/50 rounded-2xl p-8 flex flex-col justify-center items-center text-center border border-dashed border-[#0097B2]/30">
                <p className="text-xs uppercase tracking-widest text-gray-500 mb-2">Projected Monthly Revenue</p>
                <div className="text-5xl md:text-6xl font-heading font-bold text-[#0B2545] dark:text-white mb-6">
                  ₹ {(spend * roas).toLocaleString()}
                </div>
                
                <div className="inline-flex items-center gap-2 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 px-4 py-2 rounded-full font-bold text-sm mb-6">
                  <i className="fas fa-coins"></i> Gross Profit: ₹ {((spend * roas) - spend).toLocaleString()}
                </div>
                
                <a href="/contact" className="px-6 py-3 bg-[#0097B2] hover:bg-cyan-600 text-white rounded-xl font-bold transition shadow-lg text-sm">
                  Make This Real &rarr;
                </a>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* 2. CAC CALCULATOR */}
            <div className="bg-white dark:bg-[#162032] p-8 rounded-3xl shadow-xl border border-gray-100 dark:border-white/5">
              <h2 className="text-xl font-heading font-bold text-[#0B2545] dark:text-white mb-6 flex items-center gap-3">
                <i className="fas fa-users text-purple-500"></i> CAC Calculator
              </h2>
              
              <div className="space-y-6">
                <div>
                  <label className="block text-xs font-bold text-gray-500 uppercase mb-2">Total Marketing Spend (₹)</label>
                  <input 
                    type="number" 
                    value={marketingSpend} 
                    onChange={(e) => setMarketingSpend(Number(e.target.value))} 
                    className="w-full bg-gray-50 dark:bg-[#071A30] border border-gray-200 dark:border-white/10 rounded-lg p-3 text-[#0B2545] dark:text-white focus:border-[#0097B2] outline-none transition" 
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-500 uppercase mb-2">New Customers Acquired</label>
                  <input 
                    type="number" 
                    value={newCustomers} 
                    onChange={(e) => setNewCustomers(Number(e.target.value))} 
                    className="w-full bg-gray-50 dark:bg-[#071A30] border border-gray-200 dark:border-white/10 rounded-lg p-3 text-[#0B2545] dark:text-white focus:border-[#0097B2] outline-none transition" 
                  />
                </div>
                
                <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-xl text-center border border-purple-100 dark:border-purple-500/20">
                  <p className="text-xs text-purple-600 dark:text-purple-300 font-bold uppercase">Cost Per Acquisition (CAC)</p>
                  <p className="text-3xl font-bold text-[#0B2545] dark:text-white mt-1">
                    ₹ {newCustomers > 0 ? (marketingSpend / newCustomers).toFixed(2) : 0}
                  </p>
                </div>
              </div>
            </div>

            {/* 3. UTM LINK BUILDER */}
            <div className="bg-white dark:bg-[#162032] p-8 rounded-3xl shadow-xl border border-gray-100 dark:border-white/5">
              <h2 className="text-xl font-heading font-bold text-[#0B2545] dark:text-white mb-6 flex items-center gap-3">
                <i className="fas fa-link text-orange-500"></i> UTM Link Builder
              </h2>
              
              <div className="space-y-4">
                <input 
                  type="text" 
                  value={website} 
                  onChange={(e) => setWebsite(e.target.value)} 
                  placeholder="Website URL (e.g. smnextgen.com)" 
                  className="w-full bg-gray-50 dark:bg-[#071A30] border border-gray-200 dark:border-white/10 rounded-lg p-3 text-sm text-[#0B2545] dark:text-white focus:border-[#0097B2] outline-none" 
                />
                <div className="grid grid-cols-2 gap-4">
                  <input 
                    type="text" 
                    value={source} 
                    onChange={(e) => setSource(e.target.value)} 
                    placeholder="Source (e.g. facebook)" 
                    className="bg-gray-50 dark:bg-[#071A30] border border-gray-200 dark:border-white/10 rounded-lg p-3 text-sm text-[#0B2545] dark:text-white focus:border-[#0097B2] outline-none" 
                  />
                  <input 
                    type="text" 
                    value={medium} 
                    onChange={(e) => setMedium(e.target.value)} 
                    placeholder="Medium (e.g. cpc)" 
                    className="bg-gray-50 dark:bg-[#071A30] border border-gray-200 dark:border-white/10 rounded-lg p-3 text-sm text-[#0B2545] dark:text-white focus:border-[#0097B2] outline-none" 
                  />
                </div>
                <input 
                  type="text" 
                  value={name} 
                  onChange={(e) => setName(e.target.value)} 
                  placeholder="Campaign Name (e.g. diwali_sale)" 
                  className="w-full bg-gray-50 dark:bg-[#071A30] border border-gray-200 dark:border-white/10 rounded-lg p-3 text-sm text-[#0B2545] dark:text-white focus:border-[#0097B2] outline-none" 
                />
                
                <div className="relative mt-4">
                  <input 
                    type="text" 
                    readOnly 
                    value={generatedUtmLink} 
                    className="w-full bg-[#0B2545] dark:bg-[#071A30] text-white text-xs p-4 rounded-xl font-mono cursor-not-allowed opacity-80" 
                  />
                  
                  <button 
                    onClick={copyToClipboard} 
                    className="absolute right-2 top-2 bg-[#0097B2] hover:bg-cyan-600 text-white px-3 py-1.5 rounded-lg text-xs font-bold transition">
                    {!copied ? <><i className="fas fa-copy"></i> Copy</> : <><i className="fas fa-check"></i> Copied</>}
                  </button>
                </div>
              </div>
            </div>

          </div>

          {/* 4. AUDIT FORM */}
          <div className="mt-12 bg-[#0B2545] p-10 md:p-14 rounded-3xl shadow-2xl relative overflow-hidden flex flex-col md:flex-row items-center gap-12 border-t-4 border-[#0097B2]">
            <div className="md:w-1/2 relative z-10">
              <span className="bg-[#0097B2] text-white text-xs font-bold px-3 py-1 rounded mb-4 inline-block animate-pulse">Manual Expert Review</span>
              <h2 className="text-3xl font-heading font-bold text-white mb-4">Get a Free 7-Point Audit</h2>
              <p className="text-gray-400 leading-relaxed mb-6">
                Automated tools miss the nuance. Let our experts analyze your Website, SEO, and Ad Account manually. We'll send you a custom video report on WhatsApp.
              </p>
              <ul className="text-sm text-[#E6EEF2]/80 space-y-2">
                <li><i className="fas fa-check text-[#0097B2] mr-2"></i> UX/UI Analysis</li>
                <li><i className="fas fa-check text-[#0097B2] mr-2"></i> Conversion Leak Check</li>
                <li><i className="fas fa-check text-[#0097B2] mr-2"></i> Competitor Comparison</li>
              </ul>
            </div>
            
            <div className="md:w-1/2 w-full relative z-10">
              {!showSuccess ? (
                <form onSubmit={handleAuditSubmit} className="space-y-4 bg-white/5 p-8 rounded-2xl border border-white/10 backdrop-blur-sm">
                  <input 
                    type="url" 
                    required 
                    value={auditUrl}
                    onChange={(e) => setAuditUrl(e.target.value)}
                    placeholder="Website URL (e.g. www.yoursite.com)" 
                    className="w-full p-4 rounded-xl bg-black/30 border border-white/10 text-white placeholder-gray-500 focus:border-[#0097B2] outline-none transition" 
                  />
                  <input 
                    type="text" 
                    required 
                    value={auditPhone}
                    onChange={(e) => setAuditPhone(e.target.value)}
                    placeholder="WhatsApp Number" 
                    className="w-full p-4 rounded-xl bg-black/30 border border-white/10 text-white placeholder-gray-500 focus:border-[#0097B2] outline-none transition" 
                  />
                  
                  <button 
                    type="submit" 
                    disabled={isScanning}
                    className={`w-full py-4 font-bold rounded-xl text-white transition shadow-lg transform ${isScanning ? 'bg-gray-600 cursor-not-allowed' : 'bg-[#0097B2] hover:bg-white hover:text-[#0B2545] hover:-translate-y-1'}`}>
                    {isScanning ? <><i className="fas fa-spinner fa-spin"></i> Scanning...</> : '🚀 Run Audit Now'}
                  </button>
                </form>
              ) : (
                <div className="text-center bg-white/5 p-8 rounded-2xl border border-white/10 animate-fade-in-up">
                  <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <i className="fas fa-check text-2xl text-green-500"></i>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Request Received!</h3>
                  <p className="text-sm text-gray-400">Our team is analyzing your link. We will share the report on WhatsApp shortly.</p>
                </div>
              )}
            </div>
          </div>

        </div>
      </section>

    </main>
  );
}