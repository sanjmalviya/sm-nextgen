import "./globals.css";
import SmoothScroll from "./components/SmoothScroll";
import AppLayoutWrapper from "./components/AppLayoutWrapper";

export const metadata = {
  title: "SM NextGen | Business Growth Partner | Strategy, Marketing & Technology",
  description: "SM NextGen helps businesses build sustainable growth through strategy, marketing, technology, AI and automation.",
  metadataBase: new URL('https://smnextgen.com'),
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&family=Montserrat:wght@400;500;600&family=Inter:wght@300;400;500&display=swap" rel="stylesheet" />
        {/* FontAwesome Icons */}
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
      </head>
      <body className="bg-[#F8FAFC] dark:bg-[#0B2545] font-body text-[#0B2545] dark:text-[#E6EEF2] selection:bg-[#0097B2] selection:text-white transition-colors duration-300 antialiased overflow-x-hidden">
        
        {/* Buttery Smooth Inertial Scroll Provider */}
        <SmoothScroll>
          <AppLayoutWrapper>
            {children}
          </AppLayoutWrapper>
        </SmoothScroll>

        {/* Metricool Tracking Pixel */}
        <img 
          src="https://tracker.metricool.com/c3po.jpg?hash=60d0bd7bcdaa5c5717c3be93f2864e9f" 
          alt="Metricool Tracking" 
          style={{ display: 'none' }} 
        />
      </body>
    </html>
  );
}