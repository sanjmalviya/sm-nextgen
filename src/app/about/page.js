export default function About() {
  return (
    <main className="bg-[#F8FAFC] dark:bg-gray-900 transition-colors duration-300 pt-20">
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          
          {/* Founder Section */}
          <div className="flex flex-col md:flex-row items-center gap-16 mb-24">
            
            {/* Image Side */}
            <div className="md:w-1/2">
              <div className="relative">
                {/* Background rotated card effect */}
                <div className="absolute inset-0 bg-[#0097B2] rounded-3xl transform rotate-6 opacity-20"></div>
                {/* Make sure "sanjay.png" exists inside your "public/images" folder. 
                  If not, you can replace the src with a dummy image for now:
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=2000&auto=format&fit=crop" 
                */}
                <img 
                  src="/images/sanjay.png" 
                  alt="Sanjay Lohar" 
                  className="relative rounded-3xl shadow-2xl w-full object-cover" 
                  style={{ minHeight: '400px' }} // Ensures it doesn't look squished if the image is small
                />
              </div>
            </div>

            {/* Content Side */}
            <div className="md:w-1/2">
              <span className="text-[#0097B2] font-bold tracking-widest text-xs uppercase mb-2 block">Our Story</span>
              <h1 className="text-4xl font-bold text-[#0B2545] dark:text-white mb-6">Modernizing Indian Business.</h1>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                "I started SM NextGen with a simple mission: To bridge the gap between traditional business values and modern technology."
              </p>
              <p className="text-gray-600 dark:text-gray-300 mb-8">
                Most agencies treat clients like numbers. We treat them like partners. We don't just run ads; we build the entire backend system—from the website to the CRM—so you can scale without chaos.
              </p>
              <div>
                <p className="font-bold text-[#0B2545] dark:text-white text-xl">Sanjay Lohar</p>
                <p className="text-[#0097B2]">Founder, SM NextGen</p>
              </div>
            </div>

          </div>

          {/* Values Section */}
          <div className="grid md:grid-cols-3 gap-8">
            
            <div className="bg-white dark:bg-[#0B2545] p-8 rounded-2xl border-l-4 border-[#0097B2] shadow-md hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-xl font-bold text-[#0B2545] dark:text-white mb-3">Transparency</h3>
              <p className="text-gray-500 dark:text-gray-400">No hidden fees. You see exactly where every rupee of your ad budget goes.</p>
            </div>
            
            <div className="bg-white dark:bg-[#0B2545] p-8 rounded-2xl border-l-4 border-[#0097B2] shadow-md hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-xl font-bold text-[#0B2545] dark:text-white mb-3">Data-Driven</h3>
              <p className="text-gray-500 dark:text-gray-400">We don't guess. We make decisions based on CPA, ROAS, and LTV metrics.</p>
            </div>
            
            <div className="bg-white dark:bg-[#0B2545] p-8 rounded-2xl border-l-4 border-[#0097B2] shadow-md hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-xl font-bold text-[#0B2545] dark:text-white mb-3">Speed</h3>
              <p className="text-gray-500 dark:text-gray-400">Business moves fast. We launch campaigns and websites in days, not months.</p>
            </div>

          </div>

        </div>
      </section>
    </main>
  );
}