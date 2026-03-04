import mongoose from 'mongoose';

const ServiceSchema = new mongoose.Schema({
  title: { type: String, required: true },
  slug: { type: String, required: true, unique: true }, // e.g., 'seo-ranking'
  category: { type: String, default: 'Marketing' },
  heroBadge: { type: String }, // e.g., 'Premium Service'
  heroSubtitle: { type: String }, 
  description: { type: String },
  price: { type: Number },
  oldPrice: { type: Number },
  priceUnit: { type: String, default: '/mo' },
  imageUrl: { type: String }, // Image ka link
  priceFeatures: [{ type: String }], // Array of strings
  status: { type: String, default: 'published' } // published ya draft
}, { timestamps: true });

export default mongoose.models.Service || mongoose.model('Service', ServiceSchema);