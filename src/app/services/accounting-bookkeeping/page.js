"use client";
import { useState } from "react";
import Link from "next/link";

// --- WHATSAPP SETUP ---
const WHATSAPP_NUMBER = "917073538077"; 

export default function AccountingBookkeepingPage() {
  const [activeFaq, setActiveFaq] = useState(null);
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", software: "", txnVolume: "" });
  const [submitted, setSubmitted] = useState(false);

  // 🚀 ADVANCED FORM SUBMIT (EMAIL + WHATSAPP)
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setSubmitted(true);

    const leadData = {
      service: "Accounting & Bookkeeping",
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      software: formData.software,
      txnVolume: formData.txnVolume,
    };

    // 1. Send data to backend (Email)
    try {
      await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(leadData)
      });
    } catch (error) {
      console.error("API error, proceeding to WhatsApp", error);
    }

    // 2. Redirect to WhatsApp with details
    const leadMsg = `*New Accounting Setup Request* 📊\n\n*Service:* ${leadData.service}\n*Name:* ${leadData.name}\n*Email:* ${leadData.email}\n*Phone:* ${leadData.phone}\n*Current Software:* ${leadData.software}\n*Monthly Transactions:* ${leadData.txnVolume}\n\nPlease review my details and schedule a financial consultation.`;
    
    setTimeout(() => {
      window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(leadMsg)}`, '_blank');
      setSubmitted(false);
      setFormData({ name: "", email: "", phone: "", software: "", txnVolume: "" });
    }, 1500);
  };

  const handleFormChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const faqs = [
    { q: "What is the difference between Bookkeeping and Accounting?", a: "Bookkeeping is the daily transactional work—recording sales, tracking expenses, and categorizing bank feeds. Accounting is the high-level analysis of that data—preparing Profit & Loss statements, Balance Sheets, and providing tax planning advice. We do both." },
    { q: "Which accounting software do you use?", a: "We are cloud-accounting experts. Depending on your business needs, we set up and manage your books on Zoho Books, QuickBooks Online, Xero, or TallyPrime. If you are using Excel, we will seamlessly migrate your historical data to a secure cloud platform." },
    { q: "I haven't updated my books in months. Can you help?", a: "Absolutely. We offer 'Catch-Up' and 'Clean-Up' bookkeeping services. We will take your messy bank statements, unorganized receipts, and payment gateway reports to reconstruct your financials from scratch so you are ready for tax season." },
    { q: "How do you handle E-commerce transactions (Amazon, Shopify, Stripe)?", a: "E-commerce accounting is complex due to gateway fees, refunds, and multi-state GST. We integrate your Shopify/Amazon stores directly with the accounting software and meticulously reconcile clearing accounts (Stripe, Razorpay) so your true revenue is recorded accurately." },
    { q: "What is a 'Virtual CFO' and do I need one?", a: "A Virtual CFO (Chief Financial Officer) goes beyond basic tax filing. We analyze your cash flow, create financial forecasts, help you manage working capital, and prepare 'Investor-Ready' financial decks. If your business is scaling rapidly or you want to raise funding, a Virtual CFO is highly recommended." }
  ];

  return (
    <main className="bg-[#F8FAFC] dark:bg-[#0B2545] font-body text-[#0B2545] dark:text-[#E6EEF2] min-h-screen selection:bg-[#0097B2] selection:text-white relative transition-colors duration-300">
      
      {/* 1️⃣ HERO SECTION (Always Dark #0B2545 for Premium Impact) */}
      <section className="relative pt-40 pb-20 bg-[#0B2545] overflow-hidden text-white">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-[#0B2545] via-[#0B2545]/95 to-[#0B2545]/60 z-10"></div>
          <img src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop" 
               alt="Professional Accounting and Bookkeeping" 
               className="w-full h-full object-cover opacity-20 filter grayscale" />
        </div>
        <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-[#0097B2]/30 rounded-full blur-[120px] pointer-events-none"></div>

        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0097B2]/10 border border-[#0097B2]/30 text-[#0097B2] text-xs font-bold uppercase tracking-widest mb-6 backdrop-blur-sm">
                <i className="fas fa-book"></i> Core Financial System
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold text-white mb-6 leading-tight">
                Financial Clarity. <br /> <span className="text-[#0097B2]">Audit-Ready Books.</span>
              </h1>
              <p className="text-lg text-[#E6EEF2] mb-8 leading-relaxed font-body max-w-xl">
                Stop running your business blindly. We provide expert cloud bookkeeping, precise bank reconciliations, and executive-level financial reporting so you know your exact profit margins.
              </p>
              <ul className="space-y-3 mb-10 text-[#E6EEF2] font-medium text-sm md:text-base">
                <li className="flex items-center gap-3"><i className="fas fa-check-circle text-[#0097B2]"></i> Zoho Books, QuickBooks & Tally Cloud Setup</li>
                <li className="flex items-center gap-3"><i className="fas fa-check-circle text-[#0097B2]"></i> End-to-End Bank & Gateway Reconciliations</li>
                <li className="flex items-center gap-3"><i className="fas fa-check-circle text-[#0097B2]"></i> Virtual CFO & Investor-Ready Financials</li>
              </ul>
              <div className="flex flex-col sm:flex-row items-center gap-4">
                <a href="#leadForm" className="w-full sm:w-auto px-8 py-4 bg-[#0097B2] hover:bg-white hover:text-[#0B2545] text-white font-bold rounded-xl shadow-lg transition-all hover:-translate-y-1 text-center">
                  Get Free Ledger Audit
                </a>
                <Link href="/pricing" className="w-full sm:w-auto px-8 py-4 bg-transparent hover:bg-white/10 text-white font-bold rounded-xl border border-[#E6EEF2]/30 transition-colors text-center">
                  View Accounting Plans
                </Link>
              </div>
            </div>
            
            {/* Right Mockup */}
            <div className="hidden lg:block relative isolate transform-gpu">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/10 rotate-[-2deg] hover:rotate-0 transition-transform duration-500 bg-[#071A30]">
                <img src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=2026&auto=format&fit=crop" alt="Cloud Accounting Dashboard" className="w-full h-[450px] object-cover opacity-80" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B2545] to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-xl text-white">
                    <p className="text-xs text-[#0097B2] font-bold uppercase mb-1">Live Financials</p>
                    <p className="font-bold text-lg leading-tight">Profit & Loss Tracking Active</p>
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
            <div className="flex items-center gap-2"><i className="fas fa-calculator text-[#0097B2] text-xl"></i> Zero-Error Ledger Matching</div>
            <div className="hidden md:block w-px h-6 bg-gray-300 dark:bg-white/10"></div>
            <div className="flex items-center gap-2"><i className="fas fa-cloud text-[#0097B2] text-xl"></i> 100% Secure Cloud Access</div>
            <div className="hidden md:block w-px h-6 bg-gray-300 dark:bg-white/10"></div>
            <div className="flex items-center gap-2"><i className="fas fa-search-dollar text-[#0097B2] text-xl"></i> Clean Investor Due Diligence</div>
          </div>
        </div>
      </section>

      {/* 3️⃣ QUICK OVERVIEW */}
      <section className="py-16 bg-[#F8FAFC] dark:bg-[#0B2545] transition-colors duration-300">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-[#0B2545] dark:text-white mb-4">Your Business Needs a Single Source of Truth</h2>
          <p className="text-lg text-gray-600 dark:text-[#E6EEF2]/80 leading-relaxed font-body">
            Messy books don't just cause tax penalties—they kill companies. Without accurate accounting, you don't know your true cash flow, your actual profit margins, or where your money is leaking. We act as your <strong>outsourced finance department</strong>, maintaining perfect day-to-day books and delivering monthly financial reports that empower you to make data-driven growth decisions.
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
                <h2 className="text-3xl font-heading font-bold text-[#0B2545] dark:text-white mb-8 border-l-4 border-[#0097B2] pl-4">Are you facing these accounting nightmares?</h2>
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="bg-[#F8FAFC] dark:bg-[#11325B] p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-white/5 hover:border-[#0097B2] transition-colors">
                    <div className="w-10 h-10 rounded-full bg-red-100 dark:bg-red-500/20 text-red-600 dark:text-red-400 flex items-center justify-center text-lg mb-4"><i className="fas fa-times"></i></div>
                    <h3 className="font-bold text-[#0B2545] dark:text-white mb-2">Backlogged Books</h3>
                    <p className="text-sm text-gray-600 dark:text-[#E6EEF2]/80">You are months behind on recording expenses and sales. Tax deadlines are approaching, and your CA needs data that is completely disorganized.</p>
                  </div>
                  <div className="bg-[#F8FAFC] dark:bg-[#11325B] p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-white/5 hover:border-[#0097B2] transition-colors">
                    <div className="w-10 h-10 rounded-full bg-red-100 dark:bg-red-500/20 text-red-600 dark:text-red-400 flex items-center justify-center text-lg mb-4"><i className="fas fa-times"></i></div>
                    <h3 className="font-bold text-[#0B2545] dark:text-white mb-2">Failed Investor Due Diligence</h3>
                    <p className="text-sm text-gray-600 dark:text-[#E6EEF2]/80">An investor wants to fund your startup, but when they ask for historical Balance Sheets and Cash Flow statements, your data doesn't tie out.</p>
                  </div>
                  <div className="bg-[#F8FAFC] dark:bg-[#11325B] p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-white/5 hover:border-[#0097B2] transition-colors">
                    <div className="w-10 h-10 rounded-full bg-red-100 dark:bg-red-500/20 text-red-600 dark:text-red-400 flex items-center justify-center text-lg mb-4"><i className="fas fa-times"></i></div>
                    <h3 className="font-bold text-[#0B2545] dark:text-white mb-2">Gateway Mismatches</h3>
                    <p className="text-sm text-gray-600 dark:text-[#E6EEF2]/80">For E-commerce brands, Stripe/Razorpay payouts never match the total sales due to hidden fees, refunds, and rolling reserves, causing massive tax errors.</p>
                  </div>
                  <div className="bg-[#F8FAFC] dark:bg-[#11325B] p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-white/5 hover:border-[#0097B2] transition-colors">
                    <div className="w-10 h-10 rounded-full bg-red-100 dark:bg-red-500/20 text-red-600 dark:text-red-400 flex items-center justify-center text-lg mb-4"><i className="fas fa-times"></i></div>
                    <h3 className="font-bold text-[#0B2545] dark:text-white mb-2">Blind Cash Flow Management</h3>
                    <p className="text-sm text-gray-600 dark:text-[#E6EEF2]/80">You look at your bank balance to see if you are profitable, totally ignoring upcoming tax liabilities, accounts payable, and hidden overheads.</p>
                  </div>
                </div>
              </div>

              {/* 5️⃣ OUR SOLUTION */}
              <div>
                <h2 className="text-3xl font-heading font-bold text-[#0B2545] dark:text-white mb-8 border-l-4 border-[#0097B2] pl-4">Our Clean-Book Methodology</h2>
                <div className="space-y-6">
                  <div className="flex gap-6 bg-[#F8FAFC] dark:bg-[#11325B] p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-white/5">
                    <div className="text-4xl font-black text-[#0097B2]/20 dark:text-[#0097B2]/40">01</div>
                    <div>
                      <h3 className="text-xl font-bold text-[#0B2545] dark:text-white mb-2">Cloud Migration & Setup</h3>
                      <p className="text-sm text-gray-600 dark:text-[#E6EEF2]/80">We move you off messy spreadsheets and configure professional cloud accounting software (Zoho, QuickBooks) with proper Chart of Accounts tailored to your industry.</p>
                    </div>
                  </div>
                  <div className="flex gap-6 bg-[#F8FAFC] dark:bg-[#11325B] p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-white/5">
                    <div className="text-4xl font-black text-[#0097B2]/20 dark:text-[#0097B2]/40">02</div>
                    <div>
                      <h3 className="text-xl font-bold text-[#0B2545] dark:text-white mb-2">Continuous Reconciliation</h3>
                      <p className="text-sm text-gray-600 dark:text-[#E6EEF2]/80">We sync your bank feeds directly to the software, matching every single transaction, invoice, and expense receipt so not a single rupee goes untracked.</p>
                    </div>
                  </div>
                  <div className="flex gap-6 bg-[#F8FAFC] dark:bg-[#11325B] p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-white/5">
                    <div className="text-4xl font-black text-[#0097B2]/20 dark:text-[#0097B2]/40">03</div>
                    <div>
                      <h3 className="text-xl font-bold text-[#0B2545] dark:text-white mb-2">Tax-Ready Compliance Sync</h3>
                      <p className="text-sm text-gray-600 dark:text-[#E6EEF2]/80">Your books are maintained with GST, TDS, and Income Tax rules in mind, so when filing deadlines arrive, the data is 100% ready for submission.</p>
                    </div>
                  </div>
                  <div className="flex gap-6 bg-[#0097B2] text-white p-6 rounded-2xl shadow-lg border border-[#0097B2]">
                    <div className="text-4xl font-black text-white/20">04</div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Executive Financial Reporting</h3>
                      <p className="text-sm text-[#E6EEF2]">Every month, we deliver a clean 'MIS Report'—containing your Profit & Loss, Balance Sheet, and Cash Flow metrics so you can make informed decisions.</p>
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
                  <h3 className="text-2xl font-heading font-bold text-white mb-2">Get Financial Clarity</h3>
                  <p className="text-sm text-[#E6EEF2]/80 mb-6">Let's audit your current ledgers and bring your books up to date.</p>
                  
                  {!submitted ? (
                    <form onSubmit={handleFormSubmit} className="space-y-4">
                      <div>
                        <label className="block text-[10px] font-bold text-[#E6EEF2]/60 uppercase tracking-widest mb-1">Name</label>
                        <input type="text" name="name" value={formData.name} onChange={handleFormChange} required placeholder="Your Name" 
                          className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#0097B2] text-white placeholder-white/40 transition" />
                      </div>
                      <div>
                        <label className="block text-[10px] font-bold text-[#E6EEF2]/60 uppercase tracking-widest mb-1">Email</label>
                        <input type="email" name="email" value={formData.email} onChange={handleFormChange} required placeholder="founder@company.com" 
                          className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#0097B2] text-white placeholder-white/40 transition" />
                      </div>
                      <div>
                        <label className="block text-[10px] font-bold text-[#E6EEF2]/60 uppercase tracking-widest mb-1">Current Software</label>
                        <select name="software" value={formData.software} onChange={handleFormChange} required 
                          className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#0097B2] text-white transition cursor-pointer [&>option]:text-[#0B2545]">
                          <option value="" disabled>Select Setup</option>
                          <option value="Excel / None">Excel / None</option>
                          <option value="Zoho Books">Zoho Books</option>
                          <option value="QuickBooks">QuickBooks Online</option>
                          <option value="Tally">Tally / Other</option>
                        </select>
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-[10px] font-bold text-[#E6EEF2]/60 uppercase tracking-widest mb-1">Phone</label>
                          <input type="tel" name="phone" value={formData.phone} onChange={handleFormChange} required placeholder="+91" 
                            className="w-full bg-white/5 border border-white/10 rounded-xl px-3 py-3 text-sm focus:outline-none focus:border-[#0097B2] text-white placeholder-white/40 transition" />
                        </div>
                        <div>
                          <label className="block text-[10px] font-bold text-[#E6EEF2]/60 uppercase tracking-widest mb-1">Transactions / Mo.</label>
                          <select name="txnVolume" value={formData.txnVolume} onChange={handleFormChange} required 
                            className="w-full bg-white/5 border border-white/10 rounded-xl px-3 py-3 text-sm focus:outline-none focus:border-[#0097B2] text-white transition cursor-pointer [&>option]:text-[#0B2545]">
                            <option value="" disabled>Volume</option>
                            <option value="Under 100">1 - 100</option>
                            <option value="100-500">100 - 500</option>
                            <option value="500+">500+</option>
                          </select>
                        </div>
                      </div>
                      
                      <button type="submit" className="w-full bg-[#0097B2] hover:bg-white hover:text-[#0B2545] text-white font-bold py-4 rounded-xl transition-all shadow-lg mt-2 uppercase tracking-wider text-sm">
                        Request Ledger Audit
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
                    <a href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi%20SM%20NextGen%2C%20I%20need%20help%20with%20Accounting%20and%20Bookkeeping.`} target="_blank" rel="noreferrer" className="w-full flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold py-3 rounded-xl shadow-md transition-all">
                      <i className="fab fa-whatsapp text-xl"></i> Quick WhatsApp Chat
                    </a>
                  </div>
                </div>

                {/* Trust Badges */}
                <div className="bg-white dark:bg-[#030e1c] border border-gray-200 dark:border-white/5 p-6 rounded-[2rem] shadow-sm flex items-center gap-4 transition-colors duration-300">
                  <div className="w-12 h-12 bg-[#0097B2]/10 rounded-full flex items-center justify-center text-[#0097B2] shrink-0"><i className="fas fa-lock"></i></div>
                  <div>
                    <h4 className="font-bold text-[#0B2545] dark:text-white text-sm">Strictly Confidential</h4>
                    <p className="text-xs text-gray-500 dark:text-[#E6EEF2]/70">Your financial data is protected by CA non-disclosure agreements.</p>
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
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-[#0B2545] dark:text-white mb-4">The Complete Bookkeeping Ecosystem</h2>
            <p className="text-lg text-gray-600 dark:text-[#E6EEF2]/80">From basic expense tagging to complex inventory ledgers, we provide an enterprise-grade accounting department for your business.</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {[
              { title: "Cloud Software Setup", desc: "Configuration of Zoho Books or QuickBooks with custom chart of accounts specific to your industry.", icon: "fas fa-cloud-upload-alt" },
              { title: "Catch-Up Bookkeeping", desc: "Taking months of backlogged, messy data and bringing your ledgers completely up to date for tax season.", icon: "fas fa-history" },
              { title: "Bank & Credit Card Recon", desc: "Matching every transaction in your bank and credit card statements precisely with your software entries.", icon: "fas fa-university" },
              { title: "Payment Gateway Matching", desc: "Reconciling Stripe, Razorpay, and PayPal payouts, accounting for hidden gateway fees and refunds.", icon: "fas fa-credit-card" },
              { title: "Accounts Payable (A/P)", desc: "Tracking vendor bills, managing due dates, and ensuring you never miss a payment or lose a discount.", icon: "fas fa-file-invoice-dollar" },
              { title: "Accounts Receivable (A/R)", desc: "Invoicing your clients, sending automated reminders, and tracking exactly who owes you money.", icon: "fas fa-hand-holding-usd" },
              { title: "E-Commerce Accounting", desc: "Handling complex multi-platform sales (Shopify, Amazon) and accounting for COGS and inventory.", icon: "fas fa-shopping-cart" },
              { title: "Expense Tagging & Receipt Mgmt", desc: "Digitally storing your bills and accurately categorizing expenses to maximize your tax deductions.", icon: "fas fa-tags" },
              { title: "Payroll Journal Entries", desc: "Syncing your payroll data to ensure salaries, PF, ESI, and TDS are recorded correctly in the general ledger.", icon: "fas fa-users" },
              { title: "Fixed Asset & Depreciation", desc: "Maintaining the asset register and calculating exact depreciation schedules compliant with the IT Act.", icon: "fas fa-building" },
              { title: "Monthly MIS Reporting", desc: "Delivering clear Profit & Loss, Balance Sheet, and Cash Flow statements at the close of every month.", icon: "fas fa-chart-bar" },
              { title: "Virtual CFO Advisory", desc: "High-level strategic calls analyzing your burn rate, runway, and financial health for scaling operations.", icon: "fas fa-user-tie" }
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
              <h3 className="text-3xl md:text-4xl font-heading font-bold mb-4 relative z-10">Stop running your business in the dark.</h3>
              <p className="text-[#E6EEF2] text-lg mb-8 relative z-10 max-w-2xl mx-auto">Get a professional ledger audit today. We'll identify the leaks in your cash flow and show you your true profit margins.</p>
              <a href="#leadForm" className="inline-block px-10 py-4 bg-[#0097B2] hover:bg-white hover:text-[#0B2545] text-white font-bold rounded-xl hover:scale-105 transition-all relative z-10 shadow-lg text-lg">
                Request Books Audit
              </a>
            </div>
         </div>
      </section>

      {/* 7️⃣ PACKAGES / PRICING TIERS */}
      <section className="py-24 bg-[#F8FAFC] dark:bg-[#0B1120] transition-colors duration-300">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-[#0B2545] dark:text-white mb-4">Accounting Packages</h2>
            <p className="text-lg text-gray-600 dark:text-[#E6EEF2]/80">From basic monthly reconciliations to full-scale Virtual CFO advisory. Compare details on our Pricing page.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Starter */}
            <div className="bg-white dark:bg-[#162032] p-8 rounded-3xl border border-gray-200 dark:border-white/10 shadow-sm flex flex-col transition-colors duration-300">
              <h3 className="text-2xl font-bold text-[#0B2545] dark:text-white mb-2">Monthly Bookkeeping</h3>
              <p className="text-sm text-gray-600 dark:text-[#E6EEF2]/70 mb-6">Best for freelancers, consultants, and service-based startups.</p>
              <ul className="space-y-3 flex-grow mb-8 text-sm text-[#0B2545] dark:text-gray-300">
                <li><i className="fas fa-check text-[#0097B2] mr-2"></i> Cloud Software Access</li>
                <li><i className="fas fa-check text-[#0097B2] mr-2"></i> Monthly Bank Reconciliations</li>
                <li><i className="fas fa-check text-[#0097B2] mr-2"></i> Standard P&L Generation</li>
                <li><i className="fas fa-check text-[#0097B2] mr-2"></i> Basic Expense Categorization</li>
              </ul>
              <Link href="/pricing" className="block w-full py-3 text-center rounded-xl border-2 border-[#0097B2] text-[#0097B2] font-bold hover:bg-[#0097B2] hover:text-white transition-colors">Compare Tiers</Link>
            </div>
            
            {/* Pro - Highlighted */}
            <div className="bg-[#0B2545] p-8 rounded-3xl border-2 border-[#0097B2] shadow-2xl flex flex-col transform md:-translate-y-4 relative isolate text-white">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#0097B2] text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider">Most Popular</div>
              <h3 className="text-2xl font-bold mb-2">E-com & Growth</h3>
              <p className="text-sm text-[#E6EEF2]/80 mb-6">Best for scaling D2C brands and businesses with high transaction volume.</p>
              <ul className="space-y-3 flex-grow mb-8 text-sm font-medium text-[#E6EEF2]">
                <li><i className="fas fa-check text-[#0097B2] mr-2"></i> Complex Gateway Reconciliations</li>
                <li><i className="fas fa-check text-[#0097B2] mr-2"></i> Inventory & COGS Tracking</li>
                <li><i className="fas fa-check text-[#0097B2] mr-2"></i> Accounts Payable & Receivable</li>
                <li><i className="fas fa-check text-[#0097B2] mr-2"></i> Custom MIS Reports</li>
              </ul>
              <Link href="/pricing" className="block w-full py-3 text-center rounded-xl bg-[#0097B2] text-white hover:bg-white hover:text-[#0B2545] font-bold transition-colors shadow-lg">Compare Tiers</Link>
            </div>

            {/* Enterprise */}
            <div className="bg-white dark:bg-[#162032] p-8 rounded-3xl border border-gray-200 dark:border-white/10 shadow-sm flex flex-col transition-colors duration-300">
              <h3 className="text-2xl font-bold text-[#0B2545] dark:text-white mb-2">Virtual CFO</h3>
              <p className="text-sm text-gray-600 dark:text-[#E6EEF2]/70 mb-6">For enterprise clients needing strategic financial forecasting and planning.</p>
              <ul className="space-y-3 flex-grow mb-8 text-sm text-[#0B2545] dark:text-gray-300">
                <li><i className="fas fa-check text-[#0097B2] mr-2"></i> Investor-Ready Financial Decks</li>
                <li><i className="fas fa-check text-[#0097B2] mr-2"></i> Budget vs. Actual Variance</li>
                <li><i className="fas fa-check text-[#0097B2] mr-2"></i> Cash Flow Optimization Strategy</li>
                <li><i className="fas fa-check text-[#0097B2] mr-2"></i> Bi-Weekly Advisory Calls</li>
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
            <p className="text-lg text-gray-600 dark:text-[#E6EEF2]/80">How professional accounting transforms chaotic data into clear, actionable financial strategies.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-[#F8FAFC] dark:bg-[#030e1c] p-8 rounded-3xl shadow-sm border border-gray-200 dark:border-white/5 relative flex flex-col hover:-translate-y-1 transition-transform">
              <span className="absolute top-4 right-4 bg-[#0097B2]/10 text-[#0097B2] text-xs font-bold px-3 py-1 rounded-md">Tech Startup</span>
              <h3 className="text-xl font-bold text-[#0B2545] dark:text-white mb-4 mt-4">Passing Investor Due Diligence</h3>
              <p className="text-sm text-gray-600 dark:text-[#E6EEF2]/80 mb-3"><strong className="text-[#0B2545] dark:text-white">Challenge:</strong> A SaaS startup had an angel investor ready to deploy funds, but their financials were a mix of personal and business expenses tracked in a messy Google Sheet.</p>
              <p className="text-sm text-gray-600 dark:text-[#E6EEF2]/80 mb-6 flex-grow"><strong className="text-[#0B2545] dark:text-white">Solution:</strong> We executed a 14-day rapid 'Clean Up', migrating data to Zoho Books, reconciling 18 months of bank feeds, and generating strict corporate P&L reports.</p>
              <div className="p-4 bg-[#0097B2]/5 rounded-xl border border-[#0097B2]/20">
                <p className="text-sm font-bold text-[#0097B2]">Result: Passed the investor's audit flawlessly, successfully securing the ₹2Cr seed round.</p>
              </div>
            </div>
            
            <div className="bg-[#F8FAFC] dark:bg-[#030e1c] p-8 rounded-3xl shadow-sm border border-gray-200 dark:border-white/5 relative flex flex-col hover:-translate-y-1 transition-transform">
              <span className="absolute top-4 right-4 bg-[#0097B2]/10 text-[#0097B2] text-xs font-bold px-3 py-1 rounded-md">D2C E-commerce</span>
              <h3 className="text-xl font-bold text-[#0B2545] dark:text-white mb-4 mt-4">Fixing Profit Illusions</h3>
              <p className="text-sm text-gray-600 dark:text-[#E6EEF2]/80 mb-3"><strong className="text-[#0B2545] dark:text-white">Challenge:</strong> A Shopify store was generating huge top-line revenue, but the founders were constantly out of cash and couldn't understand why.</p>
              <p className="text-sm text-gray-600 dark:text-[#E6EEF2]/80 mb-6 flex-grow"><strong className="text-[#0B2545] dark:text-white">Solution:</strong> We implemented Accrual Accounting, factoring in hidden payment gateway fees, true Cost of Goods Sold (COGS), and ad spend accruals.</p>
              <div className="p-4 bg-[#0097B2]/5 rounded-xl border border-[#0097B2]/20">
                <p className="text-sm font-bold text-[#0097B2]">Result: Identified that a 'bestselling' product was actually losing money; allowed them to re-price and restore overall profitability.</p>
              </div>
            </div>

            <div className="bg-[#F8FAFC] dark:bg-[#030e1c] p-8 rounded-3xl shadow-sm border border-gray-200 dark:border-white/5 relative flex flex-col hover:-translate-y-1 transition-transform">
              <span className="absolute top-4 right-4 bg-[#0097B2]/10 text-[#0097B2] text-xs font-bold px-3 py-1 rounded-md">Creative Agency</span>
              <h3 className="text-xl font-bold text-[#0B2545] dark:text-white mb-4 mt-4">Automating Receivables</h3>
              <p className="text-sm text-gray-600 dark:text-[#E6EEF2]/80 mb-3"><strong className="text-[#0B2545] dark:text-white">Challenge:</strong> Founder spent hours every weekend chasing clients for unpaid invoices, hurting cash flow and client relationships.</p>
              <p className="text-sm text-gray-600 dark:text-[#E6EEF2]/80 mb-6 flex-grow"><strong className="text-[#0B2545] dark:text-white">Solution:</strong> Deployed a professional Accounts Receivable (A/R) workflow with automated polite follow-up emails and integrated payment links.</p>
              <div className="p-4 bg-[#0097B2]/5 rounded-xl border border-[#0097B2]/20">
                <p className="text-sm font-bold text-[#0097B2]">Result: Reduced Average Days Sales Outstanding (DSO) from 45 days to 14 days, stabilizing cash flow.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 9️⃣ OUR PROCESS */}
      <section className="py-24 bg-[#F8FAFC] dark:bg-[#030e1c] transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-[#0B2545] dark:text-white mb-4">Our Bookkeeping Timeline</h2>
          </div>
          <div className="grid md:grid-cols-4 gap-6 text-center">
            <div className="bg-white dark:bg-[#0B2545] border border-gray-100 dark:border-white/5 p-8 rounded-3xl relative shadow-sm">
              <div className="text-5xl font-black text-[#0B2545]/5 dark:text-white/5 absolute top-4 left-4">01</div>
              <i className="fas fa-cloud-upload-alt text-3xl text-[#0097B2] mb-4 relative z-10"></i>
              <h3 className="text-xl font-bold text-[#0B2545] dark:text-white mb-2">Onboarding & Setup</h3>
              <p className="text-sm text-gray-600 dark:text-[#E6EEF2]/70">Migrating to cloud software and establishing the Chart of Accounts.</p>
            </div>
            <div className="bg-white dark:bg-[#0B2545] border border-gray-100 dark:border-white/5 p-8 rounded-3xl relative shadow-sm">
              <div className="text-5xl font-black text-[#0B2545]/5 dark:text-white/5 absolute top-4 left-4">02</div>
              <i className="fas fa-sync-alt text-3xl text-[#0097B2] mb-4 relative z-10"></i>
              <h3 className="text-xl font-bold text-[#0B2545] dark:text-white mb-2">Monthly Data Sync</h3>
              <p className="text-sm text-gray-600 dark:text-[#E6EEF2]/70">Connecting bank feeds and fetching all invoices, bills, and receipts.</p>
            </div>
            <div className="bg-white dark:bg-[#0B2545] border border-gray-100 dark:border-white/5 p-8 rounded-3xl relative shadow-sm">
              <div className="text-5xl font-black text-[#0B2545]/5 dark:text-white/5 absolute top-4 left-4">03</div>
              <i className="fas fa-search-dollar text-3xl text-[#0097B2] mb-4 relative z-10"></i>
              <h3 className="text-xl font-bold text-[#0B2545] dark:text-white mb-2">Reconciliation</h3>
              <p className="text-sm text-gray-600 dark:text-[#E6EEF2]/70">Matching every transaction so the software perfectly aligns with the bank.</p>
            </div>
            <div className="bg-[#0097B2] p-8 rounded-3xl shadow-xl shadow-[#0097B2]/20 relative transform md:-translate-y-4 text-white">
              <div className="text-5xl font-black text-white/20 absolute top-4 left-4">04</div>
              <i className="fas fa-chart-bar text-3xl text-white mb-4 relative z-10"></i>
              <h3 className="text-xl font-bold mb-2">MIS Delivery</h3>
              <p className="text-sm text-white/90">Delivering your Profit & Loss and Balance Sheet by the 10th of every month.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 🔟 INDUSTRIES WE SERVE */}
      <section className="py-20 bg-[#0B2545] text-white text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-heading font-bold mb-10">Industries We Handle</h2>
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
            {['E-commerce / D2C', 'Tech Startups & SaaS', 'Marketing Agencies', 'Healthcare Providers', 'Real Estate Firms', 'Consultants & Freelancers', 'Local Retail', 'Logistics'].map((ind, i) => (
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
          <h2 className="text-3xl font-heading font-bold text-[#0B2545] dark:text-white mb-10 text-center">Complete Your Financial Stack</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/services/gst-services" className="bg-[#F8FAFC] dark:bg-[#11325B] p-6 rounded-2xl border border-gray-100 dark:border-white/5 shadow-sm hover:border-[#0097B2] dark:hover:border-[#0097B2] transition-all group flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-[#0097B2]/10 text-[#0097B2] flex items-center justify-center text-xl shrink-0"><i className="fas fa-file-invoice"></i></div>
              <div>
                <h4 className="font-bold text-[#0B2545] dark:text-white group-hover:text-[#0097B2] transition-colors">GST Compliance</h4>
                <p className="text-xs text-gray-600 dark:text-[#E6EEF2]/70 mt-1">Use clean books for tax filing.</p>
              </div>
            </Link>
            <Link href="/services/income-tax-services" className="bg-[#F8FAFC] dark:bg-[#11325B] p-6 rounded-2xl border border-gray-100 dark:border-white/5 shadow-sm hover:border-[#0097B2] dark:hover:border-[#0097B2] transition-all group flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-[#0097B2]/10 text-[#0097B2] flex items-center justify-center text-xl shrink-0"><i className="fas fa-file-invoice-dollar"></i></div>
              <div>
                <h4 className="font-bold text-[#0B2545] dark:text-white group-hover:text-[#0097B2] transition-colors">Income Tax Services</h4>
                <p className="text-xs text-gray-600 dark:text-[#E6EEF2]/70 mt-1">Corporate planning & Audit.</p>
              </div>
            </Link>
            <Link href="/services/payroll-employee-compliance" className="bg-[#F8FAFC] dark:bg-[#11325B] p-6 rounded-2xl border border-gray-100 dark:border-white/5 shadow-sm hover:border-[#0097B2] dark:hover:border-[#0097B2] transition-all group flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-[#0097B2]/10 text-[#0097B2] flex items-center justify-center text-xl shrink-0"><i className="fas fa-users"></i></div>
              <div>
                <h4 className="font-bold text-[#0B2545] dark:text-white group-hover:text-[#0097B2] transition-colors">Payroll Processing</h4>
                <p className="text-xs text-gray-600 dark:text-[#E6EEF2]/70 mt-1">Manage salaries & compliance.</p>
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
          <h2 className="text-4xl md:text-6xl font-heading font-bold mb-4 leading-tight">Gain Financial Clarity.</h2>
          <p className="text-xl text-[#E6EEF2] mb-10 font-body">Stop worrying about messy spreadsheets and tax deadlines. Let our expert accountants maintain your books flawlessly.</p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a href="#leadForm" className="px-10 py-5 bg-[#0097B2] hover:bg-white hover:text-[#0B2545] text-white font-bold rounded-xl shadow-2xl hover:scale-105 transition-all text-lg flex items-center justify-center gap-3">
              Consult an Accountant <i className="fas fa-arrow-up"></i>
            </a>
            <a href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi%20SM%20NextGen%2C%20I%20need%20help%20with%20my%20Bookkeeping.`} target="_blank" rel="noreferrer" className="px-10 py-5 bg-transparent border-2 border-[#E6EEF2]/20 hover:border-white text-white font-bold rounded-xl hover:bg-white/10 transition-colors text-lg flex items-center justify-center gap-3">
              <i className="fab fa-whatsapp text-xl"></i> Contact on WhatsApp
            </a>
          </div>
        </div>
      </section>

    </main>
  );
}