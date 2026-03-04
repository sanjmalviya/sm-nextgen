"use client";
import { useState } from "react";

export default function Faq() {
  const [selected, setSelected] = useState(null);

  const toggle = (i) => {
    if (selected === i) {
      return setSelected(null);
    }
    setSelected(i);
  };

  const faqData = [
    {
      question: "What makes SM NextGen the best growth partner for MSMEs?",
      answer: "Unlike traditional agencies that work in silos, SM NextGen integrates Performance Marketing, AI Automation, and Legal/Finance. We act as your extended team, handling everything from SEO and Meta Ads to GST compliance, ensuring your business scales without operational friction."
    },
    {
      question: "How long does it take to see measurable results from SEO?",
      answer: "SEO is a long-term investment. While technical fixes show impact quickly, significant organic traffic growth and first-page Google rankings typically take 3 to 6 months. For immediate results, we recommend combining SEO with our high-ROAS Performance Marketing strategies."
    },
    {
      question: "Does SM NextGen provide services to local businesses in Udaipur?",
      answer: "Yes, we are a leading digital growth agency in Udaipur, helping local businesses like SM Furni Udaipur and others dominate the local market through Hyper-Local SEO, Google My Business optimization, and targeted social media campaigns."
    },
    {
      question: "What is included in your AI Automation service?",
      answer: "Our AI automation includes custom WhatsApp Chatbots, CRM integrations (like Zoho or HubSpot), automated lead nurturing funnels using n8n, and email marketing workflows. These tools help reduce manual work by up to 40%."
    },
    {
      question: "Is the advertising budget included in your monthly retainers?",
      answer: "No, the ad budget (for Meta Ads or Google PPC) is paid directly by the client to the respective platforms. Our service fee covers expert strategy, creative design, campaign management, and detailed ROI reporting."
    },
    {
      question: "Can I customize my growth plan according to my budget?",
      answer: "Absolutely. While we have standard plans like Business Starter and Growth Core, we offer fully customizable retainers tailored to your specific goals, whether you need pure digital marketing or a mix of automation and legal support."
    },
    {
      question: "What is a 'Virtual CFO' and why does my startup need one?",
      answer: "A Virtual CFO provides high-level financial guidance, GST management, accounting services, and legal compliance without the cost of a full-time executive. It is essential for startups to maintain financial health while focusing on growth."
    },
    {
      question: "How do you track and report the performance of my campaigns?",
      answer: "Transparency is our core value. We provide monthly (or weekly) performance dashboards tracking key metrics like ROAS, Conversion Rates, Organic Growth, and Lead Quality, ensuring every rupee you spend is accounted for."
    },
    {
      question: "Will I have a dedicated point of contact?",
      answer: "Yes, every SM NextGen client is assigned a dedicated Growth Manager who coordinates between our marketing, tech, and finance teams to ensure your project milestones are met on time."
    },
    {
      question: "How do I start with the Free 7-Point Business Audit?",
      answer: "Getting started is easy! Simply click the 'Get Free Audit' button or book a strategy call. Our experts will analyze your current digital presence, SEO health, and automation gaps to provide a detailed roadmap for your growth."
    }
  ];

  return (
    <section id="faqs" className="py-24 bg-[#F8FAFC] dark:bg-navy border-t border-gray-100 dark:border-white/5">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-brand font-bold tracking-widest text-xs uppercase mb-2 block">Got Questions?</span>
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-navy dark:text-white">
            Frequently Asked <span className="text-brand">Questions</span>
          </h2>
          <p className="text-gray-500 dark:text-gray-400 mt-4">
            Everything you need to know about scaling your business with SM NextGen.
          </p>
        </div>
        
        <div className="space-y-4">
          {faqData.map((item, i) => (
            <div 
              key={i} 
              className="group bg-white dark:bg-[#162032] rounded-2xl border border-gray-200 dark:border-white/5 shadow-sm hover:border-brand/30 transition-all duration-300"
            >
              <button 
                onClick={() => toggle(i)} 
                className="w-full px-6 py-5 text-left flex justify-between items-center gap-4 focus:outline-none"
              >
                <span className={`font-bold text-lg transition-colors duration-300 ${selected === i ? 'text-brand' : 'text-navy dark:text-white'}`}>
                  {item.question}
                </span>
                <div className={`flex-shrink-0 w-8 h-8 rounded-full border border-gray-200 dark:border-white/10 flex items-center justify-center transition-transform duration-300 ${selected === i ? 'bg-brand text-white rotate-180' : 'text-gray-400 rotate-0'}`}>
                  <i className={`fas ${selected === i ? 'fa-minus' : 'fa-plus'} text-xs`}></i>
                </div>
              </button>
              
              <div 
                className={`overflow-hidden transition-all duration-500 ease-in-out ${selected === i ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}
              >
                <div className="px-6 pb-6 text-base text-gray-600 dark:text-gray-400 leading-relaxed border-t border-gray-100 dark:border-white/5 pt-4">
                  {item.answer}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA for further questions */}
        <div className="mt-16 bg-brand/10 dark:bg-brand/5 border border-brand/20 p-8 rounded-3xl text-center">
          <h4 className="text-navy dark:text-white font-bold mb-2">Still have questions?</h4>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">We're here to help you navigate your growth journey.</p>
          <a href="/contact" className="inline-flex items-center gap-2 px-6 py-3 bg-brand text-white font-bold rounded-xl hover:shadow-lg transition transform hover:-translate-y-0.5 text-sm">
            Contact Support <i className="fas fa-comment-dots"></i>
          </a>
        </div>
      </div>
    </section>
  );
}