/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: '#0097B2', brandDark: '#007a91', 
        navy: '#0B2545', /* Ye color change kiya hai live site jaisa */
        surface: '#F8FAFC', light: '#E6EEF2', white: '#FFFFFF',
        accent: '#FFD700', green: '#10B981', red: '#EF4444'
      },
      fontFamily: { heading: ['Poppins', 'sans-serif'], body: ['Inter', 'sans-serif'] },
      animation: { 'blob': 'blob 7s infinite', 'float': 'float 6s ease-in-out infinite' }
    }
  },
  plugins: [],
};