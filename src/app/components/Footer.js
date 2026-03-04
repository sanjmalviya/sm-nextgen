export default function Footer() {
  return (
    <footer className="bg-[#0B2545] text-white pt-20 pb-10 border-t border-white/10 mt-auto font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12 mb-12">
          
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <span className="font-heading font-bold text-2xl text-white">SM NextGen</span>
            </div>
            <p className="text-gray-400 text-sm mb-6 leading-relaxed max-w-sm">
              India’s first Growth Partner for MSMEs and Startups. We replace the chaos of freelancers with a dedicated team handling Marketing, Automation, and Finance.
            </p>
            
            <div className="flex space-x-4 items-center">
              <a href="mailto:info@smnextgen.com" className="hover:text-[#0097B2] transition" title="Email Us">
                <i className="fas fa-envelope text-2xl"></i>
              </a>
              <a href="https://www.instagram.com/smnextgen/" target="_blank" className="hover:text-[#0097B2] transition"><i className="fab fa-instagram text-2xl"></i></a>
              <a href="https://www.linkedin.com/company/109211431" target="_blank" className="hover:text-[#0097B2] transition"><i className="fab fa-linkedin text-2xl"></i></a>
              <a href="https://wa.me/918824325438" target="_blank" className="hover:text-[#0097B2] transition"><i className="fab fa-whatsapp text-2xl"></i></a>
            </div>
            
            <div className="mt-4 text-sm text-gray-500 font-medium">
              <i className="fas fa-at text-[#0097B2] mr-2"></i> info@smnextgen.com
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-[#0097B2] font-heading uppercase text-xs tracking-wider">Marketing & Branding</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white transition">Brand Strategy</a></li>
              <li><a href="#" className="hover:text-white transition">Logo Design</a></li>
              <li><a href="#" className="hover:text-white transition">Visual Identity</a></li>
              <li><a href="#" className="hover:text-white transition">Social Media Mgmt</a></li>
              <li><a href="#" className="hover:text-white transition">Content Creation</a></li>
              <li><a href="#" className="hover:text-white transition">Performance Ads (PPC)</a></li>
              <li><a href="#" className="hover:text-white transition">SEO & Content</a></li>
              <li><a href="#" className="hover:text-white transition">Influencer Marketing</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-[#0097B2] font-heading uppercase text-xs tracking-wider">Automation & Finance</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white transition">AI Automation</a></li>
              <li><a href="#" className="hover:text-white transition">Lead Gen Systems</a></li>
              <li><a href="#" className="hover:text-white transition">CRM Setup</a></li>
              <li><a href="#" className="hover:text-white transition">Startup Reg.</a></li>
              <li><a href="#" className="hover:text-white transition">GST & Compliance</a></li>
              <li><a href="#" className="hover:text-white transition">Accounting Services</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-[#0097B2] font-heading uppercase text-xs tracking-wider">Company & Plans</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><a href="about" className="hover:text-white transition">About Founder</a></li>
              <li><a href="pricing" className="hover:text-white transition">View Pricing</a></li>
              <li><a href="#" className="hover:text-white transition">Business Starter</a></li>
              <li><a href="#" className="hover:text-white transition">Growth Core ⭐</a></li>
              <li><a href="contact" className="hover:text-white transition">Contact Us</a></li>
              <li><a href="partners" className="hover:text-white transition">Partner Program</a></li>
            </ul>
          </div>

        </div>
        
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
          <p>&copy; 2026 SM NextGen. Built for Growth.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <a href="legal" className="hover:text-white transition">Privacy Policy</a>
            <a href="legal" className="hover:text-white transition">Terms of Service</a>
          </div>
        </div>
      </div>
      
      {/* Floating Buttons */}
      <div className="fixed bottom-6 right-6 flex flex-col gap-4 z-50">
        <a href="https://wa.me/918824325438" target="_blank" 
           className="w-14 h-14 bg-[#25D366] text-white rounded-full shadow-xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:-translate-y-1 group relative border-2 border-white dark:border-navy">
            <i className="fab fa-whatsapp text-3xl"></i>
        </a>

        <a href="tel:+918824325438" 
           className="w-14 h-14 bg-[#0097B2] text-white rounded-full shadow-xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:-translate-y-1 group relative border-2 border-white dark:border-navy">
            <i className="fas fa-phone-alt text-2xl"></i>
        </a>
      </div>
    </footer>
  );
}