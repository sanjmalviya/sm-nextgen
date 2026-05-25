// file: src/app/admin/[[...index]]/page.js
"use client";
import { NextStudio } from "next-sanity/studio";
import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";

const blogSchema = {
  name: 'blog',
  title: '📝 Blog Posts',
  type: 'document',
  fields: [
    { name: 'title', title: 'Blog Title (H1)', type: 'string' },
    { name: 'slug', title: 'Slug (URL)', type: 'slug', options: { source: 'title', maxLength: 96 } },
    { name: 'subtitle', title: 'Subtitle / Hook', type: 'text' },
    { name: 'category', title: 'Category', type: 'string', options: { list: ['Growth Strategy', 'Digital Marketing', 'AI Automation', 'Finance & Legal'] } },
    { name: 'readTime', title: 'Read Time (Minutes)', type: 'number' },
    { name: 'image', title: 'Feature Image', type: 'image', options: { hotspot: true } },
    
    { name: 'authorName', title: 'Author Name', type: 'string', initialValue: 'Sanjay Lohar' },
    { name: 'authorRole', title: 'Author Role', type: 'string', initialValue: 'Founder, SM NextGen' },
    { name: 'authorImage', title: 'Author Profile Image', type: 'image', options: { hotspot: true } },
    
    { name: 'whatYouWillLearn', title: "What You'll Learn (Bullets)", type: 'array', of: [{ type: 'string' }] },
    
    { 
      name: 'content', 
      title: 'Blog Content', 
      type: 'array', 
      of: [
        { type: 'block' },
        { type: 'image', title: 'Inline Image', options: { hotspot: true }, fields: [{ name: 'alt', type: 'string', title: 'Alternative Text (SEO)' }] }
      ] 
    },

    // 🔥 NEW: FAQ SECTION
    {
      name: 'faqs',
      title: 'Frequently Asked Questions (FAQs)',
      type: 'array',
      description: 'Add up to 5 FAQs. This automatically generates AI-friendly SEO Schema.',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'question', title: 'Question', type: 'string' },
            { name: 'answer', title: 'Answer', type: 'text' }
          ]
        }
      ]
    },

    // 🔥 NEW: SEO METADATA SECTION
    {
      name: 'seo',
      title: 'SEO Settings',
      type: 'object',
      group: 'seo',
      fields: [
        { name: 'metaTitle', title: 'Meta Title', type: 'string', description: 'Ideal length 50-60 chars. Leaves blank to auto-use Blog Title.' },
        { name: 'metaDescription', title: 'Meta Description', type: 'text', description: 'Ideal length 150-160 chars. Leaves blank to auto-use Subtitle.' },
        { name: 'focusKeyword', title: 'Focus Keyword', type: 'string', description: 'Main keyword you want to rank for.' }
      ]
    },

    {
      name: 'tableOfContents',
      title: 'Manual Table of Contents',
      type: 'array',
      group: 'sidebar',
      of: [{ type: 'object', fields: [{ name: 'headingText', title: 'Heading Text', type: 'string' }] }]
    },
    { name: 'leadFormHeading', title: 'Lead Form Heading', type: 'string', initialValue: 'Quick Consultation 📞', group: 'sidebar' },
    { name: 'leadFormText', title: 'Lead Form Subtext', type: 'string', initialValue: 'Drop your details for a quick strategy call.', group: 'sidebar' },
    {
      name: 'relatedServices',
      title: 'Promote Services',
      type: 'array',
      group: 'sidebar',
      of: [{ type: 'object', fields: [{ name: 'title', type: 'string' }, { name: 'desc', type: 'string' }, { name: 'link', type: 'string' }, { name: 'icon', type: 'string', initialValue: 'fab fa-whatsapp' }] }]
    },
    { name: 'relatedBlogs', title: 'Suggested Blogs', type: 'array', group: 'sidebar', of: [{ type: 'reference', to: [{ type: 'blog' }] }] }
  ],
  groups: [
    { name: 'sidebar', title: '👉 Sidebar Settings' },
    { name: 'seo', title: '🚀 SEO & Meta' }
  ]
};

const config = defineConfig({
  name: "default",
  title: "SM NextGen Admin",
  projectId: "bu79idnt",
  dataset: "production",
  basePath: "/admin",
  plugins: [structureTool()],
  schema: { types: [blogSchema] },
});

export default function AdminPage() {
  return <div className="fixed inset-0 z-[99999] bg-[#1a1a1a]"><NextStudio config={config} /></div>;
}