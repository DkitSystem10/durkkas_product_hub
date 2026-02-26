"use client";

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    MessageCircle, X, Send, ChevronRight, Sparkles, ShieldCheck,
    BarChart3, Gavel, Globe, Database, Cpu, Search,
    ListFilter, LayoutDashboard, Zap, TrendingUp, Users, Mail,
    PhoneCall, FileText, ArrowRight, Bot, Star
} from 'lucide-react';
import { CRM_KNOWLEDGE_NODES, DATASET_SUMMARY } from '@/lib/crm-data';

// ─── Icon map for suggestion chips ─────────────────────────────────────────
const getChipIcon = (label: string) => {
    const l = label.toLowerCase();
    if (l.includes('lead') || l.includes('import'))             return <ListFilter size={11} />;
    if (l.includes('pipeline') || l.includes('kanban'))         return <LayoutDashboard size={11} />;
    if (l.includes('forecast') || l.includes('kpi') || l.includes('analytics') || l.includes('report')) return <BarChart3 size={11} />;
    if (l.includes('gst') || l.includes('legal') || l.includes('invoice') || l.includes('statutory')) return <Gavel size={11} />;
    if (l.includes('security') || l.includes('trust') || l.includes('privacy')) return <ShieldCheck size={11} />;
    if (l.includes('email') || l.includes('whatsapp'))          return <Mail size={11} />;
    if (l.includes('call') || l.includes('telephony') || l.includes('phone')) return <PhoneCall size={11} />;
    if (l.includes('demo') || l.includes('trial'))              return <Zap size={11} />;
    if (l.includes('score') || l.includes('scoring'))           return <TrendingUp size={11} />;
    if (l.includes('customer') || l.includes('contact') || l.includes('account')) return <Users size={11} />;
    if (l.includes('automation') || l.includes('automate'))     return <Cpu size={11} />;
    if (l.includes('document') || l.includes('report'))        return <FileText size={11} />;
    if (l.includes('feature') || l.includes('module'))         return <Star size={11} />;
    return <ArrowRight size={11} />;
};

// ─────────────────────────────────────────────────────────────────────────────
//  EXTENDED RESPONSE ENGINE
//  All patterns use regex for maximum flexibility — handles misspellings,
//  different word orders, and casual phrasing naturally.
// ─────────────────────────────────────────────────────────────────────────────
interface ResponsePattern {
    pattern: RegExp;
    getText: () => string;
    options: string[];
}

const RESPONSE_PATTERNS: ResponsePattern[] = [
    // ── GREETINGS ────────────────────────────────────────────────────────────
    {
        pattern: /\b(hi|hello|hey|helo|hii|hiii|hai|namaste|vanakkam|good morning|good evening|good afternoon|good day|howdy|greetings|sup|what'?s up|yo)\b/i,
        getText: () => `Hello! 👋 Welcome to the DURKKAS AI Command Centre.\n\nI'm your dedicated CRM Intelligence Agent — built specifically to help you manage leads, automate your sales pipeline, and scale your business operations.\n\nWhether you have a quick question or need a deep technical walkthrough, I'm here 24/7. What would you like to explore today?`,
        options: ["Tell me about DURKKAS CRM", "How do I manage leads?", "Can I try a demo?"]
    },
    // ── CRM ACCESS / CONNECT / LOGIN / URL / ENDPOINT ─────────────────────────
    {
        pattern: /\b(connect|access|access crm|how to connect|how to access|login|log in|sign in|open crm|start crm|url|link|endpoint|portal|tenant|subdomain|instance|get started|open|launch|enter|navigate)\b/i,
        getText: () => `Here's exactly how to connect and access your DURKKAS CRM account. 🚀\n\n🔗 Step 1 — Open Your Tenant Portal:\nGo to: https://app.durkkas.io/login\n(Or your custom domain: https://yourcompany.durkkas.io)\n\n🔐 Step 2 — Enter Your Credentials:\n• Enter your registered Email ID\n• Enter your password (or request OTP login)\n• If MFA is enabled, enter the 6-digit code from your Authenticator app\n\n🏠 Step 3 — Select Your Workspace:\n• After login, choose your Organization Tenant\n• Each tenant has its own isolated CRM, data, and settings\n\n📱 Step 4 — Access Modules:\n• Dashboard → Overview of all KPIs\n• Lead Centre → Manage all leads\n• Pipeline → Kanban deal view\n• Analytics → Reports & forecasts\n• Settings → Integration, permissions, billing\n\n🆘 If you can't log in: Use 'Forgot Password' on the login page or contact hello@durkkas.io`,
        options: ["Reset My Password", "Setup MFA", "Configure My Workspace"]
    },
    // ── FAREWELLS ────────────────────────────────────────────────────────────
    {
        pattern: /\b(bye|goodbye|see you|see ya|later|cya|tata|ok bye|closing|exit|quit)\b/i,
        getText: () => `Thank you for your time! It was a pleasure assisting you. 🙌\n\nIf you ever need to revisit your CRM setup, pipeline queries, or GST invoicing — I'm always here. Have a productive day, and keep closing those deals! 🚀`,
        options: ["Start a New Query", "Schedule a Demo"]
    },
    // ── THANKS ───────────────────────────────────────────────────────────────
    {
        pattern: /\b(thank|thanks|thank you|thankyou|thx|ty|great|awesome|perfect|excellent|nice|good|cool|super|wonderful|brilliant)\b/i,
        getText: () => `You're most welcome! 😊 That's exactly why we built DURKKAS — to give you expert-level guidance right when you need it.\n\nIs there anything else you'd like me to explain? I can deep dive into automation logic, pipeline velocity, Indian statutory compliance, or our AI scoring engine.`,
        options: ["Sales Automation Deep-Dive", "CRM Pricing", "GST Invoice Setup"]
    },
    // ── PRODUCT OVERVIEW ─────────────────────────────────────────────────────
    {
        pattern: /\b(what is durkkas|about durkkas|tell me about|what does durkkas|durkkas crm|product overview|overview|what can you do|capabilities)\b/i,
        getText: () => `DURKKAS is India's most advanced Enterprise SaaS CRM — designed for businesses that take their sales engine seriously.\n\n🏆 Key Pillars:\n• Lead Centre — Full-cycle lead & deal management\n• Cognitive Core AI — Sentiment analysis, intent scoring, auto-follow-ups\n• Legal Hub — CLM with digital signatures & smart expiry\n• Indian Statutory Core — Native GST invoicing, HSN/SAC codes, e-Invoicing\n• Sovereign Hosting — Tier-4 data centers within India\n\nWe currently manage ${DATASET_SUMMARY.totalLeads.toLocaleString()}+ lead records across enterprise clients with a pipeline value of ₹${(DATASET_SUMMARY.totalPipelineValue / 10000000).toFixed(1)} Cr.`,
        options: ["Explore Features", "Request Live Demo", "Pricing Plans"]
    },
    // ── FEATURES ─────────────────────────────────────────────────────────────
    {
        pattern: /\b(features|what features|list features|all features|modules|list modules|capabilities|what can crm|what crm does)\b/i,
        getText: () => `Here's the complete DURKKAS CRM Module Stack:\n\n📌 Lead Acquisition — Omnichannel capture (LinkedIn, Webform, API, Ads)\n📌 Smart Lead Scoring — AI-powered intent scoring with behavioral signals\n📌 Pipeline Orchestration — Cinematic Kanban with Velocity Engine\n📌 Sales Automation — Multi-channel follow-up sequences (Email, WhatsApp, SMS)\n📌 Customer 360 — Unified identity timeline across every touchpoint\n📌 Communication Hub — Gmail, Outlook, WhatsApp Business, Cloud Telephony\n📌 Analytics & KPI — Real-time drill-down dashboards & board-ready exports\n📌 Legal Hub — CLM with e-signatures and smart expiry alerts\n📌 Indian Statutory Core — GST invoicing, e-Invoice, HSN/SAC codes\n📌 Migration Engine — AI schema mapper for zero-loss data transfer`,
        options: ["Lead Scoring Details", "Pipeline Demo", "Indian GST Features"]
    },
    // ── LEAD MANAGEMENT ──────────────────────────────────────────────────────
    {
        pattern: /\b(lead|leads|prospect|prospects|create lead|add lead|new lead|lead management|lead entry|lead tracking|manage lead|how to add|lead capture)\b/i,
        getText: () => `DURKKAS Lead Management is built for scale.\n\n🎯 How it works:\n1. Capture — Pull leads from LinkedIn, Webforms, Google Ads, or bulk CSV import\n2. Enrich — Auto-populate company info, phone, social profiles via AI enrichment\n3. Score — Cognitive Core assigns a real-time intent score (0–100) based on behavior\n4. Route — Round-robin or rule-based assignment to your sales reps\n5. Engage — Automated multi-channel follow-up sequence kicks in instantly\n\nYour team only sees leads that are ready to close — the AI handles the rest.`,
        options: ["Import Leads in Bulk", "Setup Lead Scoring", "Auto-Assign Rules"]
    },
    // ── LEAD SCORING ─────────────────────────────────────────────────────────
    {
        pattern: /\b(score|scoring|lead score|intent score|qualification|hot lead|warm lead|cold lead|rank leads|classify|grade lead|quality)\b/i,
        getText: () => `DURKKAS Smart Lead Scoring v2.4 uses behavioral intelligence — not guesswork.\n\n📊 Scoring signals:\n• Email open & click rate → up to 20 pts\n• Website page visits & time-on-page → up to 25 pts\n• WhatsApp/SMS reply behavior → up to 15 pts\n• Call engagement (answered, duration) → up to 20 pts\n• Demo requested / form submitted → up to 20 pts\n\n🔥 Hot Leads (Score > 75): ${DATASET_SUMMARY.hotLeads} in current dataset\n\nHot leads are automatically pinned to top of pipeline with a 🔥 priority flag.`,
        options: ["Configure Scoring Rules", "View Hot Leads Dashboard", "BANT Qualification"]
    },
    // ── PIPELINE ─────────────────────────────────────────────────────────────
    {
        pattern: /\b(pipeline|kanban|deal|deals|stage|stages|opportunity|sales cycle|closed won|closed lost|proposal|discovery|negotiation|stale deal|deal stuck)\b/i,
        getText: () => `The DURKKAS Pipeline Orchestrator gives you cinematic visibility over every deal.\n\n🗂️ Default Pipeline Stages:\nNew → Contacted → Qualified → Demo Done → Proposal Sent → Negotiation → Won / Lost\n\n⚡ Velocity Engine:\n• Detects deals stuck > 7 days and auto-alerts managers\n• AI suggests the best next action based on stage + lead score\n• Closed-Won triggers automatic invoice generation and project kickoff\n\n📈 Current Data: ${DATASET_SUMMARY.wonDeals} Won Deals | ${DATASET_SUMMARY.lostDeals} Lost Deals in your dataset`,
        options: ["Open Kanban Board", "Velocity Analytics", "Configure Pipeline Stages"]
    },
    // ── AUTOMATION ───────────────────────────────────────────────────────────
    {
        pattern: /\b(automat|trigger|workflow|sequence|drip|follow.?up|auto reply|auto assign|reminder|scheduled|round robin|playbook|no reply|not reply)\b/i,
        getText: () => `DURKKAS Automation is your silent sales engine — running 24/7.\n\n🤖 Example Sequence (Auto-configured):\nDay 0 → Lead created → Instant personalized email sent\nDay 2 → No reply? → WhatsApp nudge auto-sent\nDay 3 → No reply? → SMS alert to lead + high-priority task for rep\nDay 5 → Still cold? → Auto-move to 'Nurture' segment + manager notification\n\nYou can build unlimited sequences with custom triggers, delays, conditions, and multi-channel actions — all without writing a single line of code.`,
        options: ["Build a Sequence", "Setup Round-Robin Assignment", "Drip Campaign Builder"]
    },
    // ── ANALYTICS ────────────────────────────────────────────────────────────
    {
        pattern: /\b(analytics|report|reports|dashboard|kpi|metrics|performance|revenue|forecast|conversion|win rate|quota|attainment|charts|graphs|export|statistics|stats|numbers|insights|trends)\b/i,
        getText: () => `DURKKAS Analytics provides real-time, drill-down reporting on every layer of your sales engine. Here's the full breakdown:\n\n📊 How to Access Analytics:\n1. Login → Click 'Analytics' in the left sidebar\n2. Choose your dashboard type (Sales / Activity / Forecast)\n3. Use filters: Date range, Rep name, Product, Source\n4. Click any chart bar to drill-down to individual records\n5. Export as PDF or Excel in one click\n\n� Available Dashboards:\n• Sales Leaderboard — Track win rates per rep vs quota\n• Revenue Forecast — AI-weighted deal probability by stage\n• Conversion Funnel — Lead source → stage → win rate breakdown\n• Activity Report — Calls, emails, meetings per rep per day\n• Lost Deal Tree — Root-cause analysis of every lost opportunity\n• Cohort Analysis — Month-over-month conversion trends\n\n📦 Your Live Snapshot:\n• Avg Deal Value: ₹${DATASET_SUMMARY.avgDealValue.toLocaleString()}\n• Won: ${DATASET_SUMMARY.wonDeals} | Lost: ${DATASET_SUMMARY.lostDeals}\n• Total Pipeline: ₹${(DATASET_SUMMARY.totalPipelineValue / 10000000).toFixed(1)} Cr\n• Hot Leads: ${DATASET_SUMMARY.hotLeads} currently active\n\nAll dashboards support scheduled email delivery — get your KPI summary every Monday morning automatically.`,
        options: ["Create KPI Dashboard", "Revenue Forecast View", "Schedule Weekly Report"]
    },
    // ── COMMUNICATION ─────────────────────────────────────────────────────────
    {
        pattern: /\b(email|whatsapp|call|sms|telephony|voip|gmail|outlook|smtp|imap|communication|inbox|message|chat|calendar|meeting|zoom)\b/i,
        getText: () => `DURKKAS Communication Hub is a true Single Pane of Glass.\n\n📬 What you can connect:\n• 📧 Gmail / Outlook (bi-directional sync — emails appear inside lead profiles)\n• 💬 WhatsApp Business (send templates, receive replies, trigger automations)\n• 📞 Cloud Telephony — Click-to-call with auto-recording and transcription\n• 📅 Google Calendar / Outlook Calendar — Smart meeting scheduling\n• 🔔 SMS / IVR — Automated transactional notifications\n\nEvery message, call, and meeting is automatically logged under the correct lead. Zero manual entry.`,
        options: ["Connect Gmail Account", "Integrate WhatsApp Business", "Enable Click-to-Call"]
    },
    // ── CUSTOMER 360 ─────────────────────────────────────────────────────────
    {
        pattern: /\b(customer|contact|account|360|profile|timeline|history|touchpoint|interaction|client|activity|notes|call log)\b/i,
        getText: () => `Customer 360 eliminates the "What did we last discuss?" problem permanently.\n\n🧩 Unified Identity Timeline shows:\n• All emails sent & received\n• Call recordings with AI-generated summary\n• WhatsApp conversation thread\n• Documents & contracts shared\n• Meeting notes & tasks\n• Deal history with stage progression\n• Support tickets (if connected)\n\nBefore any call, your rep gets a 30-second AI briefing card — so every conversation starts with context.`,
        options: ["View a Sample Account", "Sync Email History", "AI Briefing Card Demo"]
    },
    // ── SECURITY ─────────────────────────────────────────────────────────────
    {
        pattern: /\b(security|safe|privacy|encrypt|data protect|host|cloud|india|tier.?4|soc2|gdpr|iso|compliance|audit|mfa|2fa|permission|role|access control|firewall|backup|data center)\b/i,
        getText: () => `Security isn't an afterthought at DURKKAS — it's the foundation.\n\n🔐 Security Architecture:\n• AES-256 encryption at rest + TLS 1.3 in transit\n• Row-Level Security (RLS) — data isolation per tenant\n• SOC 2 Type II Certified\n• Mandatory Multi-Factor Authentication (MFA/2FA)\n• Role-Based Access Control (RBAC) — field-level permissions\n• Full Audit Trail — every action logged with timestamp & IP\n• Tier-4 Data Centers within India — full data sovereignty\n• Automated daily encrypted backups + point-in-time restore`,
        options: ["View Security Architecture", "Download Trust Report", "GDPR Compliance Info"]
    },
    // ── MIGRATION / IMPORT ────────────────────────────────────────────────────
    {
        pattern: /\b(migrat|import|export|csv|excel|upload|switch|transfer|onboard|setup|get started|configure|zoho|salesforce|hubspot|legacy|old crm|spreadsheet|bulk)\b/i,
        getText: () => `Migrating to DURKKAS is completely painless — even for large datasets.\n\n🔄 Migration Flow:\n1. Export your data from existing CRM (Zoho, Salesforce, HubSpot, Excel)\n2. Upload to DURKKAS Migration Engine\n3. AI Schema Mapper auto-maps your headers to DURKKAS fields\n4. Deduplication scan — removes duplicate contacts automatically\n5. Field validation & data cleanse\n6. Dry-run preview before final import\n7. One-click live import with integrity report\n\n⏱️ Typical 50,000-record migration: Under 4 minutes. Zero manual field mapping needed.`,
        options: ["Download Import Template", "Watch Migration Video", "Schedule Assisted Migration"]
    },
    // ── GST & INVOICING ───────────────────────────────────────────────────────
    {
        pattern: /\b(gst|invoice|tax|billing|pan|hsn|sac|e.?invoice|irn|cgst|sgst|igst|proforma|quotation|erp|tally|indian statutory|stamp|legal agreement)\b/i,
        getText: () => `DURKKAS is the only CRM with a fully native Indian Statutory Core.\n\n🇮🇳 GST & Invoicing Features:\n• Auto-populate CGST/SGST/IGST based on GST slab\n• HSN/SAC code library (15,000+ codes built-in)\n• e-Invoicing with auto IRN generation (NIC portal integrated)\n• Proforma to Tax Invoice in one click\n• Digital signature stamping on all documents\n• NDA/MSA from Legal Hub linked directly to deals\n• Tally & ERP export format supported\n\nNo more switching to a separate system just to raise an invoice. It all happens inside the CRM pipeline.`,
        options: ["Setup GST Profile", "Generate Your First Invoice", "e-Invoice Setup Guide"]
    },
    // ── PRICING ───────────────────────────────────────────────────────────────
    {
        pattern: /\b(price|pricing|cost|how much|charges|fee|fees|subscription|plan|plans|quote|billing|expensive|cheap|affordable|budget|per user|seat|license|free trial|trial)\b/i,
        getText: () => `DURKKAS follows a modular, flat-rate pricing model — no 'seat tax'.\n\n💳 Pricing Principles:\n• Pay only for the modules (engines) your team uses\n• Entire organization included at one flat rate — no per-user pricing\n• CRM, HRMS, EMS, Legal Hub — each module priced independently\n• 14-day free trial — full feature access, no credit card required\n• Annual plans include 30% discount + dedicated onboarding support\n\nFor a customized enterprise quote based on your team size and module needs, I can connect you with our solutions team immediately.`,
        options: ["Start 14-Day Free Trial", "Request Custom Quote", "Compare All Plans"]
    },
    // ── DEMO ─────────────────────────────────────────────────────────────────
    {
        pattern: /\b(demo|live demo|show me|show how|demonstrate|trial|sandbox|test|poc|proof of concept|try|try it|experience)\b/i,
        getText: () => `Absolutely! A live DURKKAS demo is worth a thousand feature descriptions. 🎯\n\nHere's what we offer:\n\n🖥️ Self-Serve Sandbox — Get instant access to a pre-loaded demo environment with 500+ sample leads, a live pipeline, and all automation sequences active.\n\n📅 Guided Demo — 30-minute session with a solution architect who will map DURKKAS features to your specific business workflows.\n\n🎬 Video Walkthroughs — Module-specific recordings available on demand.\n\nWhich would you prefer?`,
        options: ["Launch Sandbox Now", "Book a Guided Demo", "Watch Feature Videos"]
    },
    // ── DATASET QUERY ─────────────────────────────────────────────────────────
    {
        pattern: /\b(1000|dataset|data set|mock data|records|sample data|how many leads|total leads|lead data|data)\b/i,
        getText: () => `📊 DURKKAS CRM — Live Dataset Intelligence:\n\n• Total Lead Records: ${DATASET_SUMMARY.totalLeads.toLocaleString()}\n• 🔥 Hot Prospects (Score > 75): ${DATASET_SUMMARY.hotLeads}\n• ✅ Won Deals: ${DATASET_SUMMARY.wonDeals}\n• ❌ Lost Deals: ${DATASET_SUMMARY.lostDeals}\n• 💰 Avg Deal Value: ₹${DATASET_SUMMARY.avgDealValue.toLocaleString()}\n• 📈 Total Pipeline Value: ₹${(DATASET_SUMMARY.totalPipelineValue / 10000000).toFixed(1)} Crore\n• 🏆 Top Lead Source: ${DATASET_SUMMARY.topSource}\n\nAll records include lead ID, company, contact, industry, stage, score, source, assigned rep, and last activity date.`,
        options: ["Filter by Stage", "Run Revenue Forecast", "Export Dataset"]
    },
    // ── AI & COGNITIVE CORE ───────────────────────────────────────────────────
    {
        pattern: /\b(ai|artificial intelligence|machine learning|ml|cognitive|smart|intelligent|nlp|sentiment|predict|recommendations|bot|chatbot)\b/i,
        getText: () => `The DURKKAS Cognitive Core is not a generic AI — it's trained on your enterprise sales data.\n\n🧠 AI Capabilities:\n• Sentiment Analysis — Reads email/chat tone, flags at-risk deals\n• Intent Scoring — Predicts which leads will convert this week\n• Auto-summary — Generates briefing cards before every call\n• Email Drafting — Suggests personalized follow-up emails\n• Optimal Contact Time — Recommends best time to call based on activity patterns\n• Churn Prediction — Alerts on deals showing disengagement signals\n• Pipeline Forecast — AI-weighted revenue prediction with confidence interval`,
        options: ["AI Scoring Details", "Enable Email Drafting", "Pipeline AI Forecast"]
    },
    // ── TEAM / USERS / ROLES ───────────────────────────────────────────────────
    {
        pattern: /\b(team|users|user|role|roles|permission|permissions|admin|manager|rep|salesperson|add user|invite|access level|who can|rbac)\b/i,
        getText: () => `DURKKAS has a fully configurable Role-Based Access Control (RBAC) system.\n\n👥 How to Manage Your Team:\n1. Go to Settings → Team Management\n2. Click 'Invite User' → Enter email → Select Role\n3. Assign to a Territory or Sales Group\n\n🎭 Available Roles (Customizable):\n• Super Admin — Full access to all modules and settings\n• Sales Manager — View all reps' pipelines, run reports\n• Sales Rep — Access only their assigned leads/deals\n• Finance User — Invoice, billing, GST access only\n• Read-Only — View dashboards, no edit rights\n\n🔒 Field-Level Permissions: Hide sensitive fields (like deal value) from specific roles. All changes are audit-logged with timestamp and IP.`,
        options: ["Invite a Team Member", "Configure Roles", "Audit Log Access"]
    },
    // ── MOBILE APP ───────────────────────────────────────────────────────────
    {
        pattern: /\b(mobile|app|phone|android|ios|iphone|tablet|offline|on the go|field sales)\b/i,
        getText: () => `DURKKAS has a full-featured mobile CRM app — not just a read-only viewer.\n\n📱 Mobile App Features:\n• View and update leads from anywhere\n• Check-in at client location (Geo-tagged visits)\n• One-tap call logging with auto-timer\n• Voice-to-note — Record field notes by speaking\n• Offline mode — Works without internet, syncs when connected\n• Push notifications for deal updates, follow-up reminders\n• Pipeline drag-and-drop on mobile\n\n📲 Available on:\n• Android — Google Play Store\n• iOS — Apple App Store\n\nField sales teams love it — 40% more activity logging compared to desktop-only CRMs.`,
        options: ["Download Android App", "Download iOS App", "Field Sales Features"]
    },
    // ── API / INTEGRATION ───────────────────────────────────────────────────
    {
        pattern: /\b(api|integration|integrate|webhook|rest|graphql|zapier|make|n8n|third party|connect app|external|sdk|developer|documentation)\b/i,
        getText: () => `DURKKAS is API-first — built for seamless integrations.\n\n🔌 Integration Options:\n• REST API — Full CRUD access to all CRM objects\n• Webhooks — Real-time event push (lead created, deal won, etc.)\n• Zapier / Make (Integromat) — 5,000+ app connections, no code needed\n• Native Integrations: Gmail, Outlook, WhatsApp Business, Tally, Razorpay, Zoom\n• Custom SDK — Node.js and Python SDKs available\n\n🔑 API Access:\n1. Go to Settings → Developer → API Keys\n2. Generate a key with scope (read/write/admin)\n3. Use Bearer Token authentication\n4. Base URL: https://api.durkkas.io/v1/\n\n📄 Full API docs: https://docs.durkkas.io/api`,
        options: ["View API Documentation", "Generate API Key", "Zapier Setup Guide"]
    },
    // ── NOTIFICATIONS / ALERTS ───────────────────────────────────────────────
    {
        pattern: /\b(notification|alert|notify|reminder|ping|bell|push|in-app|follow up alert|email alert|slack)\b/i,
        getText: () => `DURKKAS keeps your entire team notified in real-time — zero missed follow-ups.\n\n🔔 Notification Channels:\n• In-App Bell Notifications — Instant, dismissible alerts\n• Email Notifications — Digest (daily/weekly) or instant\n• Push Notifications — Mobile app alerts even when closed\n• WhatsApp Alerts — For critical deal updates\n• Slack / Teams Integration — Deal won/lost posted to your workspace channel\n\n⚙️ What triggers alerts:\n• Lead assigned to you\n• Deal stuck in stage > configured days\n• Hot lead score crosses 80\n• Follow-up due today\n• Deal won or lost\n• Invoice approval pending\n\nConfigure notification preferences: Settings → Notifications → Customize per event type.`,
        options: ["Configure Notifications", "Enable Slack Alerts", "Set Follow-Up Reminders"]
    },
    // ── CUSTOMIZATION ─────────────────────────────────────────────────────────
    {
        pattern: /\b(custom|customiz|configure|settings|modify|change|personalize|field|custom field|layout|template|brand|white label)\b/i,
        getText: () => `DURKKAS is fully configurable — not a rigid one-size-fits-all CRM.\n\n⚙️ What You Can Customize:\n• Pipeline Stages — Rename, add, remove, reorder stages\n• Custom Fields — Add text, number, date, dropdown, file fields to any object\n• Email Templates — Branded HTML templates for every communication type\n• Invoice Templates — Logo, GST details, payment terms, custom footer\n• Dashboard Layouts — Drag and rearrange KPI cards\n• Lead Form — Custom webform fields that map to CRM fields\n• Automation Rules — Build your own workflow logic\n• White-Label — Custom domain, logo, color theme for your organization\n\nAll customizations are role-scoped — admins can control what reps can and can't change.`,
        options: ["Add Custom Fields", "Configure Pipeline Stages", "Brand My Portal"]
    },
    // ── HELP / CONFUSED ───────────────────────────────────────────────────────
    {
        pattern: /\b(help|support|assist|confused|don'?t understand|not sure|explain|how does|how do|how to|can you|what is|what are|tell me|guide me)\b/i,
        getText: () => `I'm here to help you navigate DURKKAS with confidence. 🤝\n\nHere are the most popular topics I can explain right now:\n\n• 🔗 How to Connect & Access CRM\n• 🎯 Lead Management & Scoring\n• 🗂️ Sales Pipeline & Stages\n• 🤖 Automation & Sequences\n• 📊 Analytics & KPI Dashboards (with drill-down steps)\n• 🇮🇳 GST Invoicing & e-Invoice\n• 🔐 Security & Data Hosting\n• 📦 Bulk Migration from Excel/Zoho\n• 💬 WhatsApp & Email Integration\n• 📱 Mobile CRM App\n• 🔌 API & Developer Integration\n\nJust type your question naturally — I understand full sentences!`,
        options: ["How to Access CRM?", "Pipeline & Deals", "GST Invoicing"]
    },
    // ── CONTACT / REACH ───────────────────────────────────────────────────────
    {
        pattern: /\b(contact|reach|speak|talk|human|agent|support team|founder|sales team|call us|email us|phone|number|enquiry|inquiry)\b/i,
        getText: () => `For direct assistance, our team is always available.\n\n📞 Contact Options:\n• 💬 Live Chat — Available Mon–Sat, 9am–7pm IST\n• 📧 Email — hello@durkkas.io (Response within 2 hours)\n• 📱 WhatsApp — +91-XXXXXXXXXX\n• 🗓️ Book a Meeting — Calendly link for 30-min strategy session\n• 🏢 Office — Registered in India, serving PAN-India clients\n\nFor enterprise deals (> 50 seats), you'll be connected directly with our Founder for a strategic conversation.`,
        options: ["Book a Strategy Call", "Send Email Inquiry", "WhatsApp Support"]
    },
];

// ─────────────────────────────────────────────────────────────────────────────
//  MAIN WIDGET COMPONENT
// ─────────────────────────────────────────────────────────────────────────────
const ChatWidget = ({ isOpenInitially = false }: { isOpenInitially?: boolean }) => {
    const [isOpen, setIsOpen]       = useState(isOpenInitially);
    const [message, setMessage]     = useState('');
    const [isTyping, setIsTyping]   = useState(false);
    const scrollRef                 = useRef<HTMLDivElement>(null);

    const [chatHistory, setChatHistory] = useState<{
        role: 'bot' | 'user';
        text: string;
        options?: string[];
    }[]>([
        {
            role: 'bot',
            text: `Namaste! 🙏 I'm your DURKKAS CRM AI Assistant — trained on ${DATASET_SUMMARY.totalLeads.toLocaleString()} live lead records and deep CRM intelligence.\n\nAsk me anything about lead management, sales pipelines, automation, GST invoicing, analytics, or migration. I respond like a real product expert, not a scripted FAQ bot.`,
            options: ["How do I manage leads?", "Show me Pipeline stages", "What's in the 1000 dataset?"]
        }
    ]);

    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    }, [chatHistory, isTyping]);

    // ── Core Response Engine ─────────────────────────────────────────────────
    const getBotResponse = (userText: string): { text: string; options: string[] } => {
        const input = userText.trim();

        // 1. Check extended pattern library first (covers greetings, features, etc.)
        for (const rp of RESPONSE_PATTERNS) {
            if (rp.pattern.test(input)) {
                return { text: rp.getText(), options: rp.options };
            }
        }

        // 2. Fallback: tokenised fuzzy match against CRM knowledge nodes
        const lower  = input.toLowerCase();
        const tokens = lower.split(/\W+/).filter(t => t.length > 2);

        const scored = CRM_KNOWLEDGE_NODES.map(node => {
            let score = 0;
            node.keywords.forEach(kw => {
                const kwl = kw.toLowerCase();
                if (lower === kwl)          score += 120;
                else if (lower.includes(kwl)) score += 40;
            });
            tokens.forEach(token => {
                node.keywords.forEach(kw => {
                    if (kw === token)           score += 25;
                    else if (kw.includes(token)) score += 10;
                    else if (token.includes(kw)) score += 8;
                });
            });
            return { ...node, score };
        }).sort((a, b) => b.score - a.score);

        const best   = scored[0];
        const runner = scored[1];

        if (best.score > 20) {
            return { text: best.answer, options: best.nextSteps };
        }

        if (best.score > 8) {
            return {
                text: `I'm cross-referencing your query with our intelligence database. It looks like you're exploring **${best.category}**${runner?.score > 5 ? ` or possibly **${runner.category}**` : ''}.\n\nWould you like me to explain either of these modules in detail?`,
                options: [
                    `Explain ${best.category}`,
                    ...(runner?.score > 5 ? [`Also show ${runner.category}`] : []),
                    "Browse All CRM Modules"
                ]
            };
        }

        // 3. Smart rotating fallback — never repeats consecutively
        const fallbacks = [
            {
                text: `I've scanned our CRM intelligence core for your query. I couldn't find an exact match, but here are the most related topics I can walk you through right now.`,
                options: ["Lead Scoring & Qualification", "Pipeline Automation", "Analytics & KPI"]
            },
            {
                text: `Great question — it's at the edge of my current context mapping. Let me suggest the most relevant modules that might address what you're looking for.`,
                options: ["Customer 360 Profile", "Communication Hub", "Security & Hosting"]
            },
            {
                text: `I understand you're looking for something specific. While I refine my analysis, you might find these modules directly relevant to your query.`,
                options: ["GST & Invoicing", "Migration & Onboarding", "Request Live Demo"]
            }
        ];

        return fallbacks[chatHistory.length % fallbacks.length];
    };

    // ── Send ────────────────────────────────────────────────────────────────
    const handleSendMessage = (text?: string) => {
        const userInput = (text ?? message).trim();
        if (!userInput) return;

        setChatHistory(prev => [...prev, { role: 'user', text: userInput }]);
        setMessage('');
        setIsTyping(true);

        setTimeout(() => {
            const response = getBotResponse(userInput);
            setIsTyping(false);
            setChatHistory(prev => [...prev, { role: 'bot', ...response }]);
        }, 1200);
    };

    const toggleChat = () => setIsOpen(p => !p);

    // ── Render ───────────────────────────────────────────────────────────────
    return (
        <>
            {/* ════════════════════════════════════════════
                FAB — Floating Action Button
                Responsive: bottom-safe on mobile, bottom-8 desktop
                ════════════════════════════════════════════ */}
            <motion.button
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ type: 'spring', stiffness: 260, damping: 20, delay: 0.5 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.88 }}
                onClick={toggleChat}
                aria-label="Open AI Assistant"
                className={`
                    fixed z-[200] cursor-pointer
                    bottom-6 right-4
                    sm:bottom-8 sm:right-6
                    lg:bottom-10 lg:right-10
                    w-[56px] h-[56px]
                    sm:w-[62px] sm:h-[62px]
                    bg-[#0061FE] text-white
                    rounded-2xl
                    shadow-[0_8px_30px_rgba(0,97,254,0.45)]
                    flex items-center justify-center
                    transition-shadow duration-300
                `}
            >
                <AnimatePresence mode="wait">
                    {isOpen ? (
                        <motion.div key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.18 }}>
                            <X size={26} />
                        </motion.div>
                    ) : (
                        <motion.div key="open" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.18 }} className="relative">
                            <MessageCircle size={28} fill="white" />
                            {/* Red dot notification */}
                            <motion.span
                                animate={{ scale: [1, 1.3, 1] }}
                                transition={{ duration: 2, repeat: Infinity }}
                                className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-red-500 rounded-full border-2 border-[#0061FE]"
                            />
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.button>

            {/* ════════════════════════════════════════════
                CHAT PANEL
                Mobile: position fixed, full screen (inset-0) with safe area
                Desktop (sm+): fixed floating panel bottom-right
                ════════════════════════════════════════════ */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        key="chatpanel"
                        initial={{ opacity: 0, y: 40, scale: 0.97 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 40, scale: 0.97 }}
                        transition={{ type: 'spring', stiffness: 320, damping: 30 }}
                        className={`
                            fixed z-[199] flex flex-col bg-white overflow-hidden

                            /* ── Mobile: starts BELOW navbar (90px), ends above bottom FAB ── */
                            left-0 right-0
                            top-[90px] bottom-0

                            /* ── Small tablet: still full-width but with side padding ── */
                            sm:left-auto sm:right-4
                            sm:top-auto
                            sm:bottom-[90px]
                            sm:w-[400px] sm:h-[680px]
                            sm:rounded-[28px]
                            sm:shadow-[0_32px_80px_rgba(0,0,0,0.2),0_0_0_1px_rgba(0,0,0,0.07)]

                            /* ── Desktop ── */
                            lg:right-8
                            lg:bottom-[100px]
                            lg:w-[440px] lg:h-[720px]
                            lg:rounded-[32px]
                        `}
                    >
                        {/* ══ HEADER ═══════════════════════════════════════ */}
                        <div className="relative overflow-hidden flex-shrink-0 bg-[#040C21]
                            px-5 py-4
                            sm:px-7 sm:py-5
                            sm:rounded-t-[28px]
                            lg:rounded-t-[32px]
                        ">
                            {/* Glow blobs */}
                            <div className="absolute -top-10 -right-10 w-52 h-52 bg-blue-600/30 rounded-full blur-[80px] pointer-events-none" />
                            <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-indigo-700/20 rounded-full blur-[60px] pointer-events-none" />

                            <div className="relative z-10 flex items-center gap-4">
                                {/* Avatar */}
                                <div className="relative flex-shrink-0">
                                    <div className="w-11 h-11 sm:w-12 sm:h-12 bg-gradient-to-br from-blue-400 to-indigo-600 rounded-2xl flex items-center justify-center shadow-lg border border-white/10">
                                        <Bot size={22} className="text-white" />
                                    </div>
                                    {/* Online dot */}
                                    <motion.span
                                        animate={{ opacity: [0.5, 1, 0.5] }}
                                        transition={{ duration: 2, repeat: Infinity }}
                                        className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-green-400 rounded-full border-2 border-[#040C21]"
                                    />
                                </div>

                                {/* Title block */}
                                <div className="flex-grow min-w-0">
                                    <h3 className="font-[family-name:var(--font-outfit)] font-black text-white text-[15px] sm:text-[17px] leading-tight tracking-tight">
                                        DURKKAS AI Core
                                    </h3>
                                    <p className="font-[family-name:var(--font-inter)] text-blue-300 text-[10px] sm:text-[11px] font-medium mt-0.5 truncate">
                                        Online · {DATASET_SUMMARY.totalLeads.toLocaleString()} CRM Nodes Active
                                    </p>
                                </div>

                                {/* Close button — larger tap target on mobile */}
                                <button
                                    onClick={toggleChat}
                                    aria-label="Close chat"
                                    className="w-9 h-9 sm:w-8 sm:h-8 flex items-center justify-center rounded-full text-white/30 hover:text-white hover:bg-white/10 transition-all flex-shrink-0 -mr-1"
                                >
                                    <X size={20} />
                                </button>
                            </div>

                            {/* Quick-stat pill row */}
                            <div className="relative z-10 flex gap-2 mt-3 overflow-x-auto scrollbar-none pb-0.5">
                                {[
                                    { label: `${DATASET_SUMMARY.hotLeads} Hot Leads`, color: 'bg-orange-500/20 text-orange-300' },
                                    { label: `₹${(DATASET_SUMMARY.avgDealValue / 1000).toFixed(0)}K Avg Deal`, color: 'bg-green-500/15 text-green-300' },
                                    { label: `${DATASET_SUMMARY.wonDeals} Won`, color: 'bg-blue-500/15 text-blue-300' },
                                ].map((pill, i) => (
                                    <span key={i} className={`flex-shrink-0 px-3 py-1 rounded-full text-[10px] font-[family-name:var(--font-outfit)] font-bold ${pill.color}`}>
                                        {pill.label}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* ══ MESSAGES AREA ════════════════════════════════ */}
                        <div
                            ref={scrollRef}
                            className="flex-grow overflow-y-auto overscroll-contain
                                px-4 py-5
                                sm:px-6 sm:py-6
                                space-y-6
                                bg-[#F7F9FC]
                            "
                            style={{ WebkitOverflowScrolling: 'touch' }}
                        >
                            {chatHistory.map((chat, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 16 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.25, ease: 'easeOut' }}
                                    className={`flex gap-3 ${chat.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}
                                >
                                    {/* Avatar circle */}
                                    <div className={`w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center text-[11px] font-black mt-1 shadow-sm ${
                                        chat.role === 'user'
                                            ? 'bg-[#0061FE] text-white'
                                            : 'bg-white border border-slate-200 text-slate-500'
                                    }`}>
                                        {chat.role === 'user' ? 'U' : <Bot size={14} />}
                                    </div>

                                    <div className={`flex flex-col gap-2.5 ${chat.role === 'user' ? 'items-end' : 'items-start'} max-w-[82%] sm:max-w-[85%]`}>
                                        {/* Sender label */}
                                        <span className={`text-[10px] font-[family-name:var(--font-outfit)] font-bold uppercase tracking-wider px-1 ${
                                            chat.role === 'user' ? 'text-blue-400' : 'text-slate-400'
                                        }`}>
                                            {chat.role === 'user' ? 'You' : 'AI Assistant'}
                                        </span>

                                        {/* Message bubble */}
                                        <div className={`
                                            px-4 py-3.5
                                            sm:px-5 sm:py-4
                                            rounded-2xl
                                            font-[family-name:var(--font-inter)]
                                            text-[13.5px] sm:text-[14px]
                                            font-medium
                                            leading-[1.75]
                                            whitespace-pre-line
                                            ${chat.role === 'user'
                                                ? 'bg-[#0061FE] text-white rounded-tr-sm shadow-[0_4px_20px_rgba(0,97,254,0.25)]'
                                                : 'bg-white text-slate-700 rounded-tl-sm border border-slate-100 shadow-sm'
                                            }
                                        `}>
                                            {chat.text}
                                        </div>

                                        {/* Suggestion chips */}
                                        {chat.role === 'bot' && chat.options && chat.options.length > 0 && (
                                            <div className="flex flex-wrap gap-2 mt-1">
                                                {chat.options.map((opt, idx) => (
                                                    <motion.button
                                                        key={idx}
                                                        initial={{ opacity: 0, y: 8, scale: 0.9 }}
                                                        animate={{ opacity: 1, y: 0, scale: 1 }}
                                                        transition={{ delay: 0.1 + idx * 0.08 }}
                                                        onClick={() => handleSendMessage(opt)}
                                                        className="
                                                            flex items-center gap-1.5
                                                            px-3.5 py-2
                                                            rounded-full
                                                            bg-white
                                                            border border-blue-100
                                                            text-blue-600
                                                            text-[11.5px] sm:text-[12px]
                                                            font-[family-name:var(--font-outfit)]
                                                            font-bold
                                                            shadow-sm
                                                            hover:bg-[#0061FE] hover:text-white hover:border-[#0061FE]
                                                            active:scale-[0.96]
                                                            transition-all duration-150
                                                            group
                                                        "
                                                    >
                                                        <span className="text-blue-400 group-hover:text-white/70 transition-colors flex-shrink-0">
                                                            {getChipIcon(opt)}
                                                        </span>
                                                        {opt}
                                                    </motion.button>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                </motion.div>
                            ))}

                            {/* ── Typing Indicator ── */}
                            {isTyping && (
                                <motion.div
                                    initial={{ opacity: 0, y: 12 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="flex gap-3 items-start"
                                >
                                    <div className="w-8 h-8 rounded-full flex-shrink-0 bg-white border border-slate-200 flex items-center justify-center mt-1 shadow-sm">
                                        <Bot size={14} className="text-slate-400" />
                                    </div>
                                    <div className="bg-white border border-slate-100 rounded-2xl rounded-tl-sm px-5 py-4 shadow-sm flex items-center gap-3">
                                        <div className="flex gap-1.5">
                                            {[0, 1, 2].map(n => (
                                                <motion.span
                                                    key={n}
                                                    animate={{ y: [0, -5, 0], opacity: [0.4, 1, 0.4] }}
                                                    transition={{ duration: 0.7, repeat: Infinity, delay: n * 0.15 }}
                                                    className="w-2 h-2 bg-blue-500 rounded-full block"
                                                />
                                            ))}
                                        </div>
                                        <span className="font-[family-name:var(--font-outfit)] text-[10px] font-bold text-blue-400 uppercase tracking-[0.25em]">
                                            Thinking…
                                        </span>
                                    </div>
                                </motion.div>
                            )}
                        </div>

                        {/* ══ INPUT BAR ════════════════════════════════════ */}
                        <div className="flex-shrink-0 bg-white border-t border-slate-100/80
                            px-4 pt-3 pb-5
                            sm:px-5 sm:pt-4 sm:pb-4
                            sm:rounded-b-[28px]
                            lg:rounded-b-[32px]
                        "
                        style={{ paddingBottom: 'max(16px, env(safe-area-inset-bottom, 16px))' }}
                        >
                            <form
                                onSubmit={e => { e.preventDefault(); handleSendMessage(); }}
                                className="flex items-center gap-2.5 bg-[#F3F5F9] rounded-2xl border border-slate-200/70 px-4 py-2.5 focus-within:border-blue-400 focus-within:ring-4 focus-within:ring-blue-100/50 transition-all"
                            >
                                <Search size={16} className="text-slate-300 flex-shrink-0" />
                                <input
                                    type="text"
                                    value={message}
                                    onChange={e => setMessage(e.target.value)}
                                    placeholder="Ask me anything about CRM..."
                                    autoComplete="off"
                                    className="
                                        flex-grow bg-transparent outline-none
                                        font-[family-name:var(--font-inter)]
                                        text-[14px] sm:text-[14.5px]
                                        font-medium
                                        text-slate-800
                                        placeholder:text-slate-400
                                        py-2
                                    "
                                />
                                <motion.button
                                    type="submit"
                                    disabled={!message.trim()}
                                    whileTap={{ scale: 0.88 }}
                                    className="
                                        w-10 h-10 sm:w-11 sm:h-11
                                        bg-[#0061FE] text-white
                                        rounded-xl
                                        flex items-center justify-center
                                        hover:bg-blue-700
                                        disabled:opacity-25 disabled:cursor-not-allowed
                                        transition-all duration-200
                                        shadow-md shadow-blue-500/25
                                        flex-shrink-0
                                    "
                                >
                                    <Send size={16} />
                                </motion.button>
                            </form>

                            {/* Trust footer */}
                            <div className="flex justify-center items-center gap-4 mt-3">
                                <span className="flex items-center gap-1 font-[family-name:var(--font-outfit)] text-[9.5px] font-bold text-slate-300 uppercase tracking-wider">
                                    <ShieldCheck size={9} className="text-blue-400" /> AES-256
                                </span>
                                <span className="w-1 h-1 bg-slate-200 rounded-full" />
                                <span className="flex items-center gap-1 font-[family-name:var(--font-outfit)] text-[9.5px] font-bold text-slate-300 uppercase tracking-wider">
                                    <Sparkles size={9} className="text-indigo-400" /> Cognitive Core v2.4
                                </span>
                                <span className="w-1 h-1 bg-slate-200 rounded-full" />
                                <span className="flex items-center gap-1 font-[family-name:var(--font-outfit)] text-[9.5px] font-bold text-slate-300 uppercase tracking-wider">
                                    <Globe size={9} className="text-emerald-400" /> India Hosted
                                </span>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default ChatWidget;

