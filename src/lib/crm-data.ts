// ─────────────────────────────────────────────────────────
//  DURKKAS CRM INTELLIGENCE CORE  — Knowledge + Dataset
// ─────────────────────────────────────────────────────────

export interface CRMNode {
    category: string;
    keywords: string[];
    answer: string;
    nextSteps: string[];
}

export const CRM_KNOWLEDGE_NODES: CRMNode[] = [
    // ── 1. LEAD ACQUISITION ──────────────────────────────
    {
        category: "Lead Acquisition",
        keywords: [
            "lead", "leads", "prospect", "prospects", "inbound", "outbound",
            "acquisition", "capture", "webform", "web form", "form", "api",
            "linkedin", "social media", "social", "marketing", "cold call",
            "email campaign", "funnel", "source", "medium", "campaign",
            "referral", "web to lead", "bulk import", "scraping", "intent",
            "traffic", "visitor", "tracking", "utm", "ads", "google ads",
            "facebook ads", "organic", "paid", "how do i get leads",
            "how to add leads", "add new lead", "create lead",
            "new lead", "lead creation", "lead entry", "import leads",
            "generate leads", "lead gen", "lead generation"
        ],
        answer: "DURKKAS Lead Acquisition uses an omnichannel 'Intelligence Grid'. It captures prospects from LinkedIn, Webforms, and social channels — auto-tagging each lead with UTM parameters, source attribution, and campaign data. This gives you 100% visibility into which marketing channel actually drives revenue.",
        nextSteps: ["Setup Web-to-Lead", "Import LinkedIn Leads", "Campaign Analytics"]
    },

    // ── 2. LEAD SCORING ───────────────────────────────────
    {
        category: "Smart Lead Scoring",
        keywords: [
            "scoring", "lead score", "rating", "quality", "rank", "hot lead",
            "warm lead", "cold lead", "qualification", "bant", "interest",
            "intent score", "behavior", "click", "open rate", "engagement",
            "fit", "ideal customer profile", "icp", "tiering", "priority",
            "urgent", "flag", "ai scoring", "probability", "weight",
            "score lead", "how is lead scored", "what is lead score",
            "high intent", "which lead is best", "best lead",
            "lead ranking", "lead grading", "grade"
        ],
        answer: "DURKKAS Smart Lead Scoring (v2.4) assigns real-time scores based on behavioral signals — email opens, website visits, WhatsApp responses, and call history. Hot leads (score > 80) are automatically pushed to the top of the pipeline and flagged for immediate follow-up, so your team never wastes time on cold contacts.",
        nextSteps: ["Configure Scoring Rules", "View High-Intent Leads", "Scoring Heatmap"]
    },

    // ── 3. PIPELINE ───────────────────────────────────────
    {
        category: "Pipeline Orchestration",
        keywords: [
            "pipeline", "kanban", "deal", "deals", "stages", "stage",
            "workflow", "opportunity", "sales cycle", "velocity", "bottleneck",
            "drag and drop", "closed won", "closed lost", "negotiation",
            "proposal", "qualified", "discovery", "demo", "review", "contract",
            "stale deal", "acceleration", "forecasting", "deal stuck",
            "move deal", "update stage", "change stage", "progress deal",
            "pipeline view", "pipeline stages", "how pipeline works",
            "deal management", "opportunity management", "sales funnel"
        ],
        answer: "The DURKKAS Pipeline Orchestrator is a cinematic Kanban board showing every deal's real-time position — from 'Discovery' to 'Closed-Won'. Our 'Velocity Engine' auto-detects stale deals (stuck > 7 days) and alerts managers with recommended actions to unblock the sale.",
        nextSteps: ["Open Kanban View", "Velocity Analytics", "Forecasting Dashboard"]
    },

    // ── 4. SALES AUTOMATION ───────────────────────────────
    {
        category: "Sales Automation",
        keywords: [
            "automation", "trigger", "action", "automate", "automated",
            "workflow", "reminder", "followup", "follow up", "follow-up",
            "auto reply", "auto assign", "round robin", "task", "schedule",
            "event", "delay", "rule", "condition", "automated email",
            "whatsapp automation", "sms", "sms notification", "push alert",
            "sequence", "playbook", "drip", "drip campaign",
            "how to automate", "automatic", "set reminder",
            "auto reminder", "send auto email", "follow up automatically",
            "no reply", "not replied"
        ],
        answer: "DURKKAS Sales Automation lets you build intelligent 'Sequences'. Example: If a lead doesn't reply in 48 hours → auto-send WhatsApp nudge → wait 24 hours → auto-create high-priority task for account manager → notify manager on Slack. All zero-touch, running 24/7.",
        nextSteps: ["Build a Sequence", "Setup Round-Robin", "Drip Campaign Builder"]
    },

    // ── 5. CUSTOMER 360 ───────────────────────────────────
    {
        category: "Customer 360",
        keywords: [
            "customer", "contact", "account", "profile", "timeline",
            "history", "interaction", "touchpoint", "email history",
            "call logs", "notes", "files", "hierarchy", "org chart",
            "related deals", "communications", "activity feed", "omnichannel",
            "identity", "tag", "segments", "customer details",
            "see customer info", "view customer", "account info",
            "client profile", "customer data", "all information about customer",
            "customer view", "360"
        ],
        answer: "Customer 360 is a unified 'Identity Timeline' that shows every touchpoint — emails, calls, WhatsApp messages, documents, and meeting notes — in a single chronological feed. Before any meeting, your team has complete context. No more 'What did we last discuss?' awkwardness.",
        nextSteps: ["View an Account", "Sync Email History", "Activity Feed Demo"]
    },

    // ── 6. ANALYTICS & KPI ────────────────────────────────
    {
        category: "Analytics & KPI",
        keywords: [
            "analytics", "report", "reports", "dashboard", "kpi", "metrics",
            "chart", "graph", "pivot", "roi", "conversion rate", "win rate",
            "revenue", "forecast", "quota", "attainment", "leaderboard",
            "performance", "trends", "drill down", "export", "scheduled report",
            "data", "insights", "how are we doing", "sales performance",
            "how many leads", "revenue report", "sales report",
            "monthly report", "quarterly report", "crm report",
            "show me numbers", "statistics", "stats"
        ],
        answer: "DURKKAS Analytics provides real-time, drill-down reporting on every layer of your sales engine. Track win rates per salesperson, revenue forecast accuracy, lead-to-deal conversion by source, and quota attainment — all exportable as Board-Ready PDF/Excel in one click.",
        nextSteps: ["Create KPI Dashboard", "Scheduled Reports", "Revenue Explorer"]
    },

    // ── 7. COMMUNICATION HUB ──────────────────────────────
    {
        category: "Communication Hub",
        keywords: [
            "email", "whatsapp", "call", "calling", "sms", "telephony",
            "ivr", "click to call", "voip", "recording", "template",
            "signature", "smtp", "imap", "outlook", "gmail", "calendar",
            "meeting", "zoom", "teams", "link", "chat history",
            "connect email", "integrate whatsapp", "send email from crm",
            "call from crm", "communication", "message", "inbox",
            "how to email", "email integration", "whatsapp integration"
        ],
        answer: "The DURKKAS Communication Hub is a 'Single Pane of Glass'. Connect Gmail or Outlook — emails sync bi-directionally. Integrate WhatsApp Business for direct chat. Enable the Cloud Telephony module for click-to-call with auto-recording. Every conversation is logged under the lead's profile automatically.",
        nextSteps: ["Connect Gmail", "Integrate WhatsApp", "Enable Cloud Telephony"]
    },

    // ── 8. SECURITY ───────────────────────────────────────
    {
        category: "Security & Sovereignty",
        keywords: [
            "security", "encryption", "rls", "soc2", "gdpr", "privacy",
            "iso", "host", "cloud", "india", "tier 4", "data localization",
            "audit trail", "mfa", "2fa", "permissions", "roles", "isolation",
            "aes", "aes-256", "firewall", "backup", "compliance",
            "is data safe", "where is data stored", "data security",
            "who can see data", "data privacy", "access control",
            "role based", "rbac", "data center", "server"
        ],
        answer: "DURKKAS is built on a Zero-Trust architecture. Your data lives in Tier-4 data centers within India (data localization compliant). Each tenant is isolated by our RLS (Row-Level Security) layer — meaning other organizations literally cannot see your data. SOC 2 Type II certified. AES-256 encryption at rest, TLS 1.3 in transit.",
        nextSteps: ["Security Dashboard", "View Audit Logs", "Download Trust Report"]
    },

    // ── 9. MIGRATION ──────────────────────────────────────
    {
        category: "Migration & Onboarding",
        keywords: [
            "migrate", "migration", "import", "export", "csv", "excel",
            "mapping", "schema", "fields", "custom fields", "validation",
            "transfer", "legacy", "salesforce", "zoho", "hubspot",
            "spreadsheet", "cleanse", "deduplication", "dedupe", "merge",
            "bulk", "api sync", "switching", "switch crm",
            "how to import", "upload data", "move data", "onboard",
            "get started", "setup crm", "configure", "initial setup"
        ],
        answer: "Migrating to DURKKAS is painless. Our 'AI Schema Mapper' reads your existing CSV/Excel headers, auto-maps them to DURKKAS fields, runs a deduplication pass, and imports all records with field-level validation. Typical 50,000-record migrations complete in under 4 minutes.",
        nextSteps: ["Launch Migration Tool", "Download Import Template", "Watch Setup Video"]
    },

    // ── 10. INDIAN STATUTORY CRM ─────────────────────────
    {
        category: "Indian Statutory CRM",
        keywords: [
            "gst", "invoice", "billing", "tax", "indian", "pan", "tan",
            "hsn", "sac", "quotation", "proforma", "compliance", "tally",
            "erp", "e-invoice", "digital signature", "stamping", "legal",
            "agreements", "msa", "nda", "gst invoice", "tax invoice",
            "create invoice", "generate invoice", "gst number",
            "tds", "deduction", "indian tax", "igst", "cgst", "sgst",
            "e-way bill", "eway"
        ],
        answer: "DURKKAS is the only CRM with a native Indian Statutory Core. Generate GST-compliant invoices (CGST/SGST/IGST) with auto HSN/SAC code lookup, e-Invoicing (IRN generation), and digital signature stamping — all inside the sales pipeline. No more switching to Tally just to raise an invoice.",
        nextSteps: ["Setup GST Profile", "Generate Your First Invoice", "E-Invoice Setup"]
    },

    // ── 11. PRICING ───────────────────────────────────────
    {
        category: "Pricing & Plans",
        keywords: [
            "price", "pricing", "cost", "how much", "charges", "fees",
            "subscription", "plan", "plans", "quote", "billing", "expensive",
            "cheap", "affordable", "budget", "enterprise plan", "modular",
            "licensing", "seat", "seats", "per user", "unlimited users",
            "free trial", "demo", "trial", "pay", "payment"
        ],
        answer: "DURKKAS uses a modular, flat-rate pricing model. You only activate and pay for the 'engines' your team needs (CRM, HRMS, EMS, Legal Hub). No 'per-seat' tax — your entire team is included at one flat rate. We also offer a 14-day free trial with full feature access and no credit card required.",
        nextSteps: ["View Pricing Plans", "Start Free Trial", "Request Custom Quote"]
    },

    // ── 12. DURKKAS IDENTITY ─────────────────────────────
    {
        category: "About DURKKAS",
        keywords: [
            "who", "what is durkkas", "durkkas", "company", "founder",
            "vision", "about", "team", "india", "mission", "history",
            "growth", "location", "where", "office", "contact us",
            "what do you do", "tell me about durkkas", "what is this",
            "platform", "product", "saas", "crm platform", "enterprise"
        ],
        answer: "DURKKAS is an Indian Enterprise SaaS platform built for the modern business. Our flagship product is the 'Lead Centre' CRM — an AI-first, mobile-native CRM that unifies lead management, automation, analytics, legal, and GST invoicing into a single cinematic workspace. Built in India, scaling globally.",
        nextSteps: ["Explore CRM Features", "Schedule a Demo", "Meet the Team"]
    }
];

// ─────────────────────────────────────────────────────────
//  MOCK CRM DATASET  — 1000 Realistic Lead Records
// ─────────────────────────────────────────────────────────

const COMPANIES = [
    "Infosys Ltd", "TCS Global", "Wipro Tech", "HCL Systems", "Reliance Jio",
    "Bajaj Finserv", "HDFC Bank", "Zepto Inc", "Razorpay", "PhonePe",
    "Meesho", "Swiggy", "Zomato", "Ola Fleet", "BYJU's Education",
    "Unacademy", "Nykaa Fashion", "Cred Club", "Paytm Solutions", "ShareChat",
    "Dream11", "Groww Finance", "ICICI Digital", "Axis Ventures", "SBI Cloud",
    "Airtel Business", "Vi Enterprise", "BSNL Bharat", "Tata Cliq", "Flipkart B2B",
    "Amazon IN", "Myntra Retail", "Snapdeal", "Lenskart", "Mamaearth",
    "WakeFit", "CureFit", "Urban Company", "Dunzo Fast", "Porter Logistics"
];

const SALES_REPS = ["Arjun Rao", "Priya Singh", "Karthik M", "Sanya K", "Ravi Kumar", "Deepa N", "Arun Vel", "Megha R"];
const STAGES = ["New", "Contacted", "Qualified", "Demo Done", "Proposal Sent", "Negotiation", "Won", "Lost"];
const SOURCES = ["LinkedIn", "Organic Search", "Google Ads", "Facebook Ads", "Referral", "Webform", "Cold Email", "Webinar"];
const INDUSTRIES = ["IT Services", "FinTech", "EdTech", "E-Commerce", "FMCG", "Healthcare", "Manufacturing", "Real Estate", "Logistics"];

const seedRandom = (seed: number) => {
    const x = Math.sin(seed) * 10000;
    return x - Math.floor(x);
};

export const MOCK_CRM_DATASET = Array.from({ length: 1000 }, (_, i) => {
    const r = (offset = 0) => seedRandom(i * 13 + offset);
    const company = COMPANIES[Math.floor(r(1) * COMPANIES.length)];
    const score = Math.floor(r(2) * 100);
    const stageIdx = Math.floor(r(3) * STAGES.length);
    const value = Math.floor(r(4) * 200000) + 10000;
    const createdDaysAgo = Math.floor(r(5) * 365);

    return {
        id: `DRK-${10000 + i}`,
        name: `Contact ${i + 1}`,
        company,
        email: `contact${i + 1}@${company.toLowerCase().replace(/\s+/g, '')}.com`,
        phone: `+91 ${Math.floor(7000000000 + r(6) * 2999999999)}`,
        stage: STAGES[stageIdx],
        value,
        score,
        source: SOURCES[Math.floor(r(7) * SOURCES.length)],
        industry: INDUSTRIES[Math.floor(r(8) * INDUSTRIES.length)],
        assignedTo: SALES_REPS[Math.floor(r(9) * SALES_REPS.length)],
        isHot: score > 75,
        createdAt: new Date(Date.now() - createdDaysAgo * 86400000).toISOString().split('T')[0],
        lastActivity: new Date(Date.now() - Math.floor(r(10) * 30) * 86400000).toISOString().split('T')[0]
    };
});

// ─────────────────────────────────────────────────────────
//  METADATA SUMMARY
// ─────────────────────────────────────────────────────────
export const DATASET_SUMMARY = {
    totalLeads: MOCK_CRM_DATASET.length,
    hotLeads: MOCK_CRM_DATASET.filter(l => l.isHot).length,
    avgDealValue: Math.floor(MOCK_CRM_DATASET.reduce((a, l) => a + l.value, 0) / MOCK_CRM_DATASET.length),
    wonDeals: MOCK_CRM_DATASET.filter(l => l.stage === "Won").length,
    lostDeals: MOCK_CRM_DATASET.filter(l => l.stage === "Lost").length,
    topSource: "LinkedIn",
    totalPipelineValue: MOCK_CRM_DATASET.reduce((a, l) => a + l.value, 0)
};
