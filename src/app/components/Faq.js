"use client"; // Ye line batati hai ki isme click actions hain
import { useState } from "react";

export default function Faq() {
  // Ye line track karegi ki kaunsa question khula hai (1, 2, ya koi nahi)
  const [selected, setSelected] = useState(null);

  const toggle = (i) => {
    if (selected === i) {
      setSelected(null); // Agar same question dubara click ho toh band kar do
    } else {
      setSelected(i); // Naya question click ho toh use khol do
    }
  };

  return (
    <section className="py-20 bg-white dark:bg-navy border-t border-gray-100 dark:border-white/5">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-navy dark:text-white mb-10">Frequently Asked Questions</h2>
        
        <div className="space-y-4">
          
          {/* Question 1 */}
          <div className="bg-light dark:bg-[#162032] rounded-xl overflow-hidden shadow-sm">
            <button 
              onClick={() => toggle(1)} 
              className="w-full px-6 py-4 text-left font-bold flex justify-between items-center text-navy dark:text-white hover:text-brand transition"
            >
              <span>How fast can I see results?</span>
              <i className={`fas ${selected === 1 ? 'fa-minus' : 'fa-plus'}`}></i>
            </button>
            {/* Answer 1 - Sirf tabhi dikhega jab selected === 1 hoga */}
            {selected === 1 && (
              <div className="px-6 pb-4 text-sm text-gray-600 dark:text-gray-400">
                Paid Ads start showing results in 48 hours. Organic growth and SEO take 2-3 months for significant traction.
              </div>
            )}
          </div>

          {/* Question 2 */}
          <div className="bg-light dark:bg-[#162032] rounded-xl overflow-hidden shadow-sm">
            <button 
              onClick={() => toggle(2)} 
              className="w-full px-6 py-4 text-left font-bold flex justify-between items-center text-navy dark:text-white hover:text-brand transition"
            >
              <span>Is Ad Budget included?</span>
              <i className={`fas ${selected === 2 ? 'fa-minus' : 'fa-plus'}`}></i>
            </button>
            {/* Answer 2 */}
            {selected === 2 && (
              <div className="px-6 pb-4 text-sm text-gray-600 dark:text-gray-400">
                No, ad budget is paid directly to Google/Meta by you. Our fees cover strategy and management.
              </div>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}