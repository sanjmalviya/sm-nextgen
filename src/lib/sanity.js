// file: src/lib/sanity.js
import { createClient } from "next-sanity";

export const client = createClient({
  projectId: "bu79idnt",     // Aapki Project ID
  dataset: "production",
  apiVersion: "2024-05-16",  // Aaj ki date
  useCdn: false,             // 'false' isliye taaki blog publish hote hi turant live dikhe
});