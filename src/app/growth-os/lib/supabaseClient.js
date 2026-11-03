import { createClient } from "@supabase/supabase-js";
import {
  DEFAULT_BUSINESS,
  DEFAULT_KPI,
  DEFAULT_AUDIT_CATEGORIES,
  DEFAULT_OPPORTUNITIES,
  DEFAULT_REVIEWS,
  DEFAULT_TASKS
} from "./initialData";

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

// Initial Seed Workspaces for Multi-Tenant SaaS (Real GMB Baseline)
export const SEED_WORKSPACES = [
  {
    id: "biz-1",
    name: "SM NextGen",
    hindiName: "एसएम नेक्स्टजेन",
    category: "Marketing agency",
    secondaryCategories: ["Digital Marketing Agency", "Website Designer", "Software Company", "Business Management Consultant"],
    primaryGoal: "Get more calls & qualified inquiries",
    website: "https://smnextgen.com",
    phone: "+91 88243 25438",
    email: "info@smnextgen.com",
    address: "HPPQ+Q5V, Sunderwas, Ganapati Nagar",
    city: "Udaipur",
    state: "Rajasthan",
    country: "India",
    postalCode: "313001",
    openingHours: "Open 24 hours",
    rating: 5.0,
    totalReviews: 9,
    score: 93,
    plan: "Enterprise Master Admin",
    status: "Active",
    isDemo: false,
    googleConnected: true,
    lastSynced: "Live Verified Google Business Profile",
    placeId: "03602514580438245940",
    storeCode: "03602514580438245940",
    gbpId: "03602514580438245940",
    cid: "14709717892477010566",
    plusCode: "HPPQ+Q5V, Sunderwas, Ganapati Nagar,, Udaipur, Rajasthan 313001",
    gbpUrl: "https://www.google.com/maps/place/SM+NextGen/@24.5869375,73.7379375,17z/data=!3m1!4b1!4m6!3m5!1s0x4452fc3201be4139:0xcc236a7cdf4cc286!8m2!3d24.5869375!4d73.7379375!16s%2Fg%2F11n49dydt9?entry=ttu",
    description: "SM NextGen is a premier business growth & AI automation firm in Udaipur, Rajasthan."
  }
];

// Storage Service for Growth OS client-side session caching
export const storageService = {
  // Session Management
  getSession: () => {
    if (typeof window === "undefined") return null;
    try {
      const data = localStorage.getItem("sm_growth_os_session");
      if (!data) return null;
      return JSON.parse(data);
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

  // User Accounts Registry
  getUsers: () => {
    if (typeof window === "undefined") return [];
    try {
      const data = localStorage.getItem("sm_growth_os_users");
      if (!data) return [];
      return JSON.parse(data);
    } catch (e) {
      return [];
    }
  },

  registerUser: (newUser) => {
    if (typeof window === "undefined") return newUser;
    try {
      const users = storageService.getUsers();
      const exists = users.find(u => u.email?.toLowerCase() === newUser.email?.toLowerCase());
      if (exists) {
        throw new Error("An account with this email already exists. Please Sign In.");
      }
      const updated = [newUser, ...users];
      localStorage.setItem("sm_growth_os_users", JSON.stringify(updated));
      return newUser;
    } catch (e) {
      throw e;
    }
  },

  // Workspaces Management
  getWorkspaces: () => {
    if (typeof window === "undefined") return SEED_WORKSPACES;
    try {
      const data = localStorage.getItem("sm_growth_os_workspaces");
      if (!data) {
        localStorage.setItem("sm_growth_os_workspaces", JSON.stringify(SEED_WORKSPACES));
        return SEED_WORKSPACES;
      }
      const list = JSON.parse(data);
      // Sanitize legacy Apex Dental pre-connected dummy data
      const cleaned = list.map(w => {
        if (w.id === "biz-1" && (!w.placeId || w.name?.includes("Apex Dental"))) {
          return {
            ...w,
            name: "SM NextGen Growth Workspace",
            category: "Digital Agency & Marketing",
            rating: 0,
            totalReviews: 0,
            score: 0,
            googleConnected: false,
            lastSynced: "Not connected"
          };
        }
        return w;
      });
      return cleaned;
    } catch (e) {
      return SEED_WORKSPACES;
    }
  },

  saveWorkspaces: (workspaces) => {
    if (typeof window === "undefined") return;
    try {
      localStorage.setItem("sm_growth_os_workspaces", JSON.stringify(workspaces));
    } catch (e) {}
  },

  addWorkspace: (workspace) => {
    if (typeof window === "undefined") return workspace;
    try {
      const workspaces = storageService.getWorkspaces();
      const updated = [workspace, ...workspaces];
      storageService.saveWorkspaces(updated);
      return workspace;
    } catch (e) {
      return workspace;
    }
  },

  updateWorkspace: (id, updates) => {
    if (typeof window === "undefined") return;
    try {
      const workspaces = storageService.getWorkspaces();
      const updated = workspaces.map(w => w.id === id ? { ...w, ...updates } : w);
      storageService.saveWorkspaces(updated);
    } catch (e) {}
  },

  deleteWorkspace: (id) => {
    if (typeof window === "undefined") return;
    try {
      const workspaces = storageService.getWorkspaces();
      const updated = workspaces.filter(w => w.id !== id);
      storageService.saveWorkspaces(updated);
    } catch (e) {}
  },

  // Active Workspace Pointer
  getActiveWorkspaceId: () => {
    if (typeof window === "undefined") return "biz-1";
    try {
      return localStorage.getItem("sm_growth_os_active_workspace_id") || "biz-1";
    } catch (e) {
      return "biz-1";
    }
  },

  setActiveWorkspaceId: (id) => {
    if (typeof window === "undefined") return;
    try {
      localStorage.setItem("sm_growth_os_active_workspace_id", id);
    } catch (e) {}
  },

  // Workspace Content State (Reviews, Tasks, Audit Fixes, KPIs)
  getWorkspaceState: (workspaceId) => {
    if (typeof window === "undefined") return null;
    try {
      // Check if current workspace is connected
      const workspaces = storageService.getWorkspaces();
      const current = workspaces.find(w => w.id === workspaceId);
      if (current && !current.googleConnected) {
        return {
          kpi: {
            rating: 0,
            totalReviews: 0,
            unansweredReviews: 0,
            profileCompleteness: 0,
            calls: 0,
            callsChange: "+0%",
            directionRequests: 0,
            directionsChange: "+0%",
            websiteClicks: 0,
            websiteClicksChange: "+0%",
            searchImpressions: 0
          },
          score: 0,
          reviews: [],
          tasks: [],
          appliedFixes: {}
        };
      }

      const data = localStorage.getItem(`sm_growth_os_state_${workspaceId}`);
      return data ? JSON.parse(data) : null;
    } catch (e) {
      return null;
    }
  },

  saveWorkspaceState: (workspaceId, state) => {
    if (typeof window === "undefined") return;
    try {
      localStorage.setItem(`sm_growth_os_state_${workspaceId}`, JSON.stringify(state));
    } catch (e) {}
  },

  // Lead Logger to Supabase & Local
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
