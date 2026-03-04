"use client";
import { useState } from "react";

export default function Legal() {
  const [activeTab, setActiveTab] = useState("privacy");

  return (
    <main className="bg-[#F8FAFC] dark:bg-navy font-body text-gray-800 dark:text-gray-200 min-h-screen">
      <section className="pt-40 pb-24 px-4">
        <div className="max-w-5xl mx-auto">
          
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-heading font-bold text-navy dark:text-white mb-4">Legal & Compliance</h1>
            <p className="text-gray-500">Transparency is our core value. Read our policies below.</p>
          </div>

          {/* Tab Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <button 
              onClick={() => setActiveTab('privacy')} 
              className={`px-6 py-3 rounded-full font-bold border transition shadow-sm ${activeTab === 'privacy' ? 'bg-brand text-white border-brand' : 'bg-white dark:bg-navy text-gray-500 border-gray-200 dark:border-white/10'}`}
            >
              Privacy Policy
            </button>
            <button 
              onClick={() => setActiveTab('terms')} 
              className={`px-6 py-3 rounded-full font-bold border transition shadow-sm ${activeTab === 'terms' ? 'bg-brand text-white border-brand' : 'bg-white dark:bg-navy text-gray-500 border-gray-200 dark:border-white/10'}`}
            >
              Terms of Service
            </button>
            <button 
              onClick={() => setActiveTab('refund')} 
              className={`px-6 py-3 rounded-full font-bold border transition shadow-sm ${activeTab === 'refund' ? 'bg-brand text-white border-brand' : 'bg-white dark:bg-navy text-gray-500 border-gray-200 dark:border-white/10'}`}
            >
              Refund Policy
            </button>
          </div>

          {/* Tab Content */}
          <div className="bg-white dark:bg-[#162032] p-8 md:p-12 rounded-3xl shadow-xl border border-gray-100 dark:border-white/5 min-h-[300px]">
            
            {activeTab === 'privacy' && (
              <div className="prose dark:prose-invert max-w-none text-sm text-gray-600 dark:text-gray-300 animate-fade-in-up">
                <h3 className="text-xl font-bold text-navy dark:text-white mb-4">1. Information We Collect</h3>
                <p className="mb-4">At SM NextGen, we collect information you provide directly to us via forms, such as your name, email address, phone number, and business details. We also collect data automatically via cookies to improve website performance.</p>
                
                <h3 className="text-xl font-bold text-navy dark:text-white mb-4">2. How We Use Information</h3>
                <p className="mb-4">We use your data to: Provide services, process payments, send growth newsletters (if subscribed), and improve our digital products. We <strong>never</strong> sell your data to third parties.</p>

                <h3 className="text-xl font-bold text-navy dark:text-white mb-4">3. Data Security</h3>
                <p>We implement SSL encryption and secure servers to protect your data. However, no method of transmission over the Internet is 100% secure.</p>
              </div>
            )}

            {activeTab === 'terms' && (
              <div className="prose dark:prose-invert max-w-none text-sm text-gray-600 dark:text-gray-300 animate-fade-in-up">
                <h3 className="text-xl font-bold text-navy dark:text-white mb-4">1. Acceptance of Terms</h3>
                <p className="mb-4">By accessing our website or purchasing our services, you agree to be bound by these Terms. If you do not agree, please do not use our services.</p>
                
                <h3 className="text-xl font-bold text-navy dark:text-white mb-4">2. Service Delivery</h3>
                <p className="mb-4">Timelines for projects (Web Dev, Marketing) are estimates. Delays caused by client non-responsiveness are not our liability. All intellectual property rights remain with SM NextGen until full payment is received.</p>

                <h3 className="text-xl font-bold text-navy dark:text-white mb-4">3. Client Responsibilities</h3>
                <p>You agree to provide accurate information and necessary assets (logos, content) on time. Failure to do so may result in project delays.</p>
              </div>
            )}

            {activeTab === 'refund' && (
              <div className="prose dark:prose-invert max-w-none text-sm text-gray-600 dark:text-gray-300 animate-fade-in-up">
                <h3 className="text-xl font-bold text-navy dark:text-white mb-4">1. Service Services</h3>
                <p className="mb-4">Due to the nature of digital services (time & effort involved), we generally do not offer refunds once work has commenced. 
                <br/>- <strong>Retainers:</strong> Can be cancelled with 30 days notice.
                <br/>- <strong>One-time Projects:</strong> 50% advance is non-refundable once design/development starts.</p>
                
                <h3 className="text-xl font-bold text-navy dark:text-white mb-4">2. Exceptional Circumstances</h3>
                <p>If we fail to deliver the agreed scope of work, a partial or full refund may be issued at the discretion of SM NextGen management within 14 days.</p>
              </div>
            )}

          </div>

          <div className="text-center mt-12 text-xs text-gray-400">
            <p>Last Updated: January 2026 | Contact: smnextgen.in@gmail.com</p>
          </div>

        </div>
      </section>
    </main>
  );
}