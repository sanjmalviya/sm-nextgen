// file: src/app/robots.js

export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/admin', '/api'], // In pages ko Google index nahi karega
    },
    // Niche apni asli domain daal dena jab site live ho jaye
    sitemap: 'https://www.smnextgen.com/sitemap.xml', 
  }
}