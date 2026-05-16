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
    { name: 'authorImage', title: 'Author Image', type: 'image', options: { hotspot: true } },
    
    { name: 'whatYouWillLearn', title: "What You'll Learn (Bullets)", type: 'array', of: [{ type: 'string' }] },
    
    // 🔥 NEW: Blog Content mein ab Images bhi daal sakte ho!
    { 
      name: 'content', 
      title: 'Blog Content', 
      type: 'array', 
      of: [
        { type: 'block' },
        { 
          type: 'image',
          title: 'Inline Image',
          options: { hotspot: true },
          fields: [
            {
              name: 'alt',
              type: 'string',
              title: 'Alternative Text (SEO k liye)',
            }
          ]
        }
      ] 
    },

    {
      name: 'tableOfContents',
      title: 'Manual Table of Contents',
      type: 'array',
      group: 'sidebar',
      description: 'Add the exact headings you want to show in the TOC.',
      of: [{ type: 'object', fields: [{ name: 'headingText', title: 'Heading Text', type: 'string' }] }]
    },

    { name: 'leadFormHeading', title: 'Lead Form Heading', type: 'string', initialValue: 'Quick Consultation 📞', group: 'sidebar' },
    { name: 'leadFormText', title: 'Lead Form Subtext', type: 'string', initialValue: 'Drop your details for a quick strategy call.', group: 'sidebar' },
    
    {
      name: 'relatedServices',
      title: 'Promote Services',
      type: 'array',
      group: 'sidebar',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'title', type: 'string', title: 'Service Title' },
            { name: 'desc', type: 'string', title: 'Short Desc' },
            { name: 'link', type: 'string', title: 'Link' },
            { name: 'icon', type: 'string', initialValue: 'fab fa-whatsapp' }
          ]
        }
      ]
    },
    
    {
      name: 'relatedBlogs',
      title: 'Suggested Blogs',
      type: 'array',
      group: 'sidebar',
      of: [{ type: 'reference', to: [{ type: 'blog' }] }]
    }
  ],
  groups: [
    { name: 'sidebar', title: '👉 Sidebar Settings' }
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
  return (
    <div className="fixed inset-0 z-[99999] bg-[#1a1a1a]">
      <NextStudio config={config} />
    </div>
  );
}