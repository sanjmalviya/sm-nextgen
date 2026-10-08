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

// Initial Seed Workspaces for Multi-Tenant SaaS (Clean zero-state until user connects Google)
export const SEED_WORKSPACES = [
  {
    id: "biz-1",
    name: "SM NextGen Growth Workspace",
    category: "Digital Agency & Marketing",
    secondaryCategories: ["SEO Agency", "Local Marketing Consultant", "AI Automation Provider"],
    primaryGoal: "Get more calls",
    website: "https://smnextgen.com",
    phone: "+91 70735 38077",
    email: "info@smnextgen.com",
    address: "HPPQ+Q5V, Sunderwas, Ganapati Nagar",
    city: "Udaipur",
    state: "Rajasthan",
    country: "India",
    postalCode: "313001",
    rating: 0,
    totalReviews: 0,
    score: 0,
    plan: "Enterprise Master Admin",
    status: "Active",
    isDemo: false,
    googleConnected: false,
    lastSynced: "Not connected",
    description: "SM NextGen Headquarters & Growth Lab in Udaipur, Rajasthan."
  },
  {
    id: "biz-2",
    name: "Lakeview Heritage Palace Resort",
    category: "Resort & Hotel",
    secondaryCategories: ["Fine Dining Restaurant", "Wedding Venue", "Spa"],
    primaryGoal: "Get more website visitors",
    website: "https://lakeviewresortudaipur.com",
    phone: "+91 70735 38077",
    email: "reservations@lakeviewresort.com",
    address: "Fateh Sagar Lake Road",
    city: "Udaipur",
    state: "Rajasthan",
    country: "India",
    postalCode: "313001",
    rating: 0,
    totalReviews: 0,
    score: 0,
    plan: "Growth Starter",
    status: "Active",
    isDemo: true,
    googleConnected: false,
    lastSynced: "Not connected",
    description: "Luxury lake-facing heritage palace resort in Udaipur featuring royal suites and lake views."
  }
];

// Initial Master Admin Account
export const SEED_USERS = [
  {
    id: "user-admin",
    name: "Sanjay Malviya (Platform Architect)",
    email: "admin@smnextgen.com",
    password: "GrowthOS2026!",
    role: "ADMIN",
    businessId: "biz-1",
    businessName: "SM NextGen Growth Workspace",
    city: "Udaipur, Rajasthan",
    createdAt: "2026-09-01T00:00:00.000Z"
  }
];

export const storageService = {
  // Session Management
  getSession: () => {
    if (typeof window === "undefined") return null;
    try {
      const data = localStorage.getItem("sm_growth_os_session");
      if (!data) return null;
      const parsed = JSON.parse(data);
      if (parsed.email === "admin@smnextgen.com" && parsed.businessName?.includes("Apex Dental")) {
        parsed.businessName = "SM NextGen Growth Workspace";
      }
      return parsed;
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
    if (typeof window === "undefined") return SEED_USERS;
    try {
      const data = localStorage.getItem("sm_growth_os_users");
      if (!data) {
        localStorage.setItem("sm_growth_os_users", JSON.stringify(SEED_USERS));
        return SEED_USERS;
      }
      return JSON.parse(data);
    } catch (e) {
      return SEED_USERS;
    }
  },

  registerUser: (newUser) => {
    if (typeof window === "undefined") return newUser;
    try {
      const users = storageService.getUsers();
      const exists = users.find(u => u.email.toLowerCase() === newUser.email.toLowerCase());
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
