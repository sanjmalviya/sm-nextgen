import "./globals.css";
// Yahan humne Header aur Footer ko import kiya hai
import Header from "./components/Header";
import Footer from "./components/Footer";

export const metadata = {
  title: "SM NextGen | Marketing, Branding, Automation & Finance",
  description: "Lets grow your business the smart way with SM NextGen.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&family=Montserrat:wght@400;500;600&family=Inter:wght@300;400;500&display=swap" rel="stylesheet" />
        {/* FontAwesome Icons */}
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
      </head>
      <body>
        <Header /> {/* Page ke upar Header */}
        {children} {/* Ye aapka main content (page.js) hai */}
        <Footer /> {/* Page ke neeche Footer */}
      </body>
    </html>
  );
}