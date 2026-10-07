import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "";
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "";

export const supabase = (supabaseUrl && supabaseAnonKey) 
  ? createClient(supabaseUrl, supabaseAnonKey, {
      auth: {
        persistSession: true,
        autoRefreshToken: true,
      }
    })
  : null;

export const storageService = {
  getSession: () => {
    if (typeof window === "undefined") return null;
    try {
      const data = localStorage.getItem("sm_growth_os_session");
      return data ? JSON.parse(data) : null;
    } catch (e) {
      return null;
    }
  },

  saveSession: (user) => {
    if (typeof window === "undefined") return;
    try {
      localStorage.setItem("sm_growth_os_session", JSON.stringify(user));
    } catch (e) {}
  },

  clearSession: () => {
    if (typeof window === "undefined") return;
    try {
      localStorage.removeItem("sm_growth_os_session");
    } catch (e) {}
  },

  getBusinessState: () => {
    if (typeof window === "undefined") return null;
    try {
      const data = localStorage.getItem("sm_growth_os_data");
      return data ? JSON.parse(data) : null;
    } catch (e) {
      return null;
    }
  },

  saveBusinessState: (state) => {
    if (typeof window === "undefined") return;
    try {
      localStorage.setItem("sm_growth_os_data", JSON.stringify(state));
    } catch (e) {}
  },

  logAuditLead: async (leadData) => {
    try {
      if (supabase) {
        await supabase.from("growth_os_leads").insert([
          {
            business_name: leadData.businessName,
            city: leadData.city,
            website: leadData.website || "",
            phone: leadData.phone || "",
            score: leadData.score,
            created_at: new Date().toISOString()
          }
        ]);
      }
    } catch (e) {
      console.log("Lead logged locally:", leadData.businessName);
    }
  }
};
