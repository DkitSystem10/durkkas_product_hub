"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
    ArrowRight, CheckCircle2, ShieldCheck, Globe, Zap,
    BarChart3, Users, Bot, Sparkles
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DemoRequestModal from "@/components/DemoRequestModal";

// ─── CRM-specific tier data ───────────────────────────────────────────────────
const tiers = [
    {
        name: "Starter",
        tagline: "For small sales teams getting started",
        price: "₹0",
        period: "forever",
        highlight: false,
        badge: null,
        features: [
            "Up to 3 Users",
            "500 Lead Records",
            "Basic Pipeline (Kanban)",
            "Email & WhatsApp Notifications",
            "GST Invoice Generator",
            "Mobile App Access",
            "Community Support",
        ],
        cta: "Get Started Free",
        ctaHref: "/crm",
        accentColor: "from-slate-600 to-slate-800",
    },
    {
        name: "Growth",
        tagline: "For scaling sales engines",
        price: "₹2,499",
        period: "per user / month",
        highlight: true,
        badge: "Most Popular",
        features: [
            "Unlimited Users",
            "50,000 Lead Records",
            "AI Lead Scoring & Forecasting",
            "Multi-channel Automation (Email, WhatsApp, SMS)",
            "Advanced Analytics & KPI Dashboard",
            "GST Invoicing + Payment Tracking",
            "Custom Fields & Workflows",
            "REST API & Zapier Integration",
            "Priority Support (SLA 4 hrs)",
            "Mobile App (Android + iOS)",
        ],
        cta: "Start 14-Day Free Trial",
        ctaHref: "/crm",
        accentColor: "from-blue-600 to-indigo-700",
    },
    {
        name: "Enterprise",
        tagline: "For large-scale Indian enterprises",
        price: "Custom",
        period: "contact our team",
        highlight: false,
        badge: null,
        features: [
            "Everything in Growth, plus:",
            "Unlimited Records & Storage",
            "Dedicated Account Manager",
            "Custom SLA & Uptime Guarantee",
            "White-label & Custom Branding",
            "Custom AI Model Fine-tuning",
            "On-premise Deployment Option",
            "Statutory Compliance Module",
            "Multi-org & Branch Management",
            "24 × 7 Phone & Slack Support",
        ],
        cta: "Request Enterprise Demo",
        ctaHref: null, // opens modal
        accentColor: "from-violet-600 to-purple-800",
    },
];

const TRUST_BADGES = [
    { icon: ShieldCheck, label: "AES-256 Encrypted", sub: "End-to-end security" },
    { icon: Globe, label: "India Hosted", sub: "MeitY compliant" },
    { icon: Zap, label: "99.99% Uptime", sub: "SLA guaranteed" },
    { icon: Bot, label: "AI-powered Core", sub: "Cognitive CRM engine" },
];

// ─────────────────────────────────────────────────────────────────────────────
export default function PricingPage() {
    const [isDemoOpen, setIsDemoOpen] = useState(false);

    return (
        <div className="min-h-screen bg-white font-[family-name:var(--font-outfit)]">
            <Navbar />

            {/* ══ HERO ════════════════════════════════════════════════════════ */}
            <section className="pt-[120px] pb-20 px-6 bg-gradient-to-b from-[#F0F4FF] to-white relative overflow-hidden">
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-10 left-1/4 w-[500px] h-[500px] bg-blue-100/50 rounded-full blur-[120px]" />
                    <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-indigo-100/40 rounded-full blur-[100px]" />
                </div>
                <div className="relative max-w-4xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <span className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 border border-blue-200 rounded-full text-blue-700 text-[12px] font-black uppercase tracking-widest mb-8">
                            <Sparkles size={12} /> DURKKAS CRM Pricing
                        </span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.1 }}
                        className="text-[40px] sm:text-[52px] lg:text-[64px] font-black text-slate-900 leading-[1.1] tracking-tight mb-6"
                    >
                        Transparent pricing for<br />
                        <span className="text-[#0061FE]">every stage of growth</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-slate-500 text-[17px] sm:text-[20px] font-medium leading-relaxed max-w-2xl mx-auto mb-10"
                    >
                        From solo founders to enterprise sales teams — DURKKAS CRM scales with you.
                        All plans include AI-powered lead scoring, GST invoicing, and mobile access.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="flex flex-wrap items-center justify-center gap-4"
                    >
                        <button
                            onClick={() => setIsDemoOpen(true)}
                            className="inline-flex items-center gap-2 px-8 py-4 bg-[#0061FE] text-white font-black rounded-2xl shadow-xl shadow-blue-500/30 hover:bg-blue-700 hover:scale-105 active:scale-95 transition-all text-[15px]"
                        >
                            Request a Free Demo <ArrowRight size={18} />
                        </button>
                        <a
                            href="/crm"
                            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-slate-700 font-black rounded-2xl border-2 border-slate-200 hover:border-blue-300 hover:text-blue-600 hover:scale-105 transition-all text-[15px] shadow-sm"
                        >
                            Explore CRM Features
                        </a>
                    </motion.div>
                </div>
            </section>

            {/* ══ PRICING CARDS ══════════════════════════════════════════════ */}
            <section className="py-20 px-6">
                <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6 lg:gap-8">
                    {tiers.map((tier, i) => (
                        <motion.div
                            key={tier.name}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.12 }}
                            whileHover={{ y: -6 }}
                            className={`relative flex flex-col rounded-[28px] overflow-hidden border-2 transition-all duration-300 bg-white ${tier.highlight
                                    ? "border-[#0061FE] shadow-[0_20px_60px_rgba(0,97,254,0.15)]"
                                    : "border-slate-200 hover:border-slate-300 hover:shadow-xl"
                                }`}
                        >
                            {/* Popular badge */}
                            {tier.badge && (
                                <div className="bg-[#0061FE] text-white text-center py-2.5 text-[11px] font-black uppercase tracking-[0.2em] flex items-center justify-center gap-2">
                                    <Sparkles size={12} fill="white" /> {tier.badge}
                                </div>
                            )}

                            {/* Gradient header */}
                            <div className={`bg-gradient-to-br ${tier.accentColor} px-7 py-7 text-white`}>
                                <h2 className="font-black text-[22px] leading-none mb-1">{tier.name}</h2>
                                <p className="text-white/70 text-[12px] font-medium mb-5">{tier.tagline}</p>
                                <div className="flex items-baseline gap-2">
                                    <span className="text-[42px] font-black tracking-tight leading-none">{tier.price}</span>
                                    {tier.period !== "contact our team" && (
                                        <span className="text-white/60 text-[12px] font-medium">/ {tier.period}</span>
                                    )}
                                </div>
                                {tier.period === "contact our team" && (
                                    <p className="text-white/60 text-[12px] font-medium mt-1">{tier.period}</p>
                                )}
                            </div>

                            {/* Features */}
                            <div className="flex-1 px-7 py-6">
                                <ul className="space-y-3">
                                    {tier.features.map((f, j) => (
                                        <li key={j} className="flex items-start gap-3 text-[13.5px] font-medium text-slate-700">
                                            <CheckCircle2
                                                size={16}
                                                className={`flex-shrink-0 mt-0.5 ${tier.highlight ? "text-blue-500" : "text-slate-400"}`}
                                            />
                                            {f}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* CTA */}
                            <div className="px-7 pb-7">
                                {tier.ctaHref ? (
                                    <a
                                        href={tier.ctaHref}
                                        className={`w-full py-3.5 rounded-xl font-black text-[14px] flex items-center justify-center gap-2 transition-all hover:scale-105 active:scale-95 ${tier.highlight
                                                ? "bg-[#0061FE] text-white shadow-lg shadow-blue-500/25 hover:bg-blue-700"
                                                : "bg-slate-100 text-slate-800 hover:bg-slate-200"
                                            }`}
                                    >
                                        {tier.cta} <ArrowRight size={16} />
                                    </a>
                                ) : (
                                    <button
                                        onClick={() => setIsDemoOpen(true)}
                                        className="w-full py-3.5 rounded-xl font-black text-[14px] flex items-center justify-center gap-2 transition-all hover:scale-105 active:scale-95 bg-slate-100 text-slate-800 hover:bg-slate-200"
                                    >
                                        {tier.cta} <ArrowRight size={16} />
                                    </button>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* ══ TRUST BADGES ═══════════════════════════════════════════════ */}
            <section className="py-16 px-6 bg-slate-50 border-y border-slate-100">
                <div className="max-w-5xl mx-auto">
                    <p className="text-center text-slate-400 text-[12px] font-black uppercase tracking-widest mb-10">
                        Built for India. Trusted by enterprises.
                    </p>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {TRUST_BADGES.map((b, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="flex flex-col items-center text-center gap-3 p-6 bg-white rounded-2xl border border-slate-200 shadow-sm"
                            >
                                <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center">
                                    <b.icon size={22} className="text-blue-600" />
                                </div>
                                <div>
                                    <p className="font-black text-slate-800 text-[14px]">{b.label}</p>
                                    <p className="text-slate-400 text-[11px] font-medium mt-0.5">{b.sub}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ══ BOTTOM CTA BANNER ══════════════════════════════════════════ */}
            <section className="py-24 px-6 bg-gradient-to-br from-[#001A4D] via-[#002B5B] to-[#0040A0] text-white relative overflow-hidden">
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-0 right-0 w-[600px] h-[400px] bg-blue-500/15 rounded-full blur-[100px]" />
                </div>
                <div className="relative max-w-3xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 border border-white/20 rounded-full text-blue-200 text-[11px] font-black uppercase tracking-widest mb-8">
                            <BarChart3 size={11} /> 1,000+ CRM nodes ready
                        </span>
                        <h2 className="font-black text-[36px] sm:text-[48px] leading-tight tracking-tight mb-6">
                            See DURKKAS CRM in action.<br />
                            <span className="text-blue-300">30-minute personalised walkthrough.</span>
                        </h2>
                        <p className="text-blue-200/70 text-[16px] font-medium mb-10 max-w-xl mx-auto leading-relaxed">
                            Our CRM specialists will tailor the demo to your industry, team structure, and growth goals — no generic slides, just real insights.
                        </p>
                        <div className="flex flex-wrap items-center justify-center gap-4">
                            <button
                                onClick={() => setIsDemoOpen(true)}
                                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[#0061FE] rounded-2xl font-black text-[15px] hover:bg-blue-50 hover:scale-105 active:scale-95 transition-all shadow-2xl"
                            >
                                Book My Free Demo <ArrowRight size={18} />
                            </button>
                            <a
                                href="/contact"
                                className="inline-flex items-center gap-2 px-8 py-4 border-2 border-white/30 text-white rounded-2xl font-black text-[15px] hover:bg-white/10 transition-all"
                            >
                                Talk to Sales
                            </a>
                        </div>
                        <div className="flex flex-wrap justify-center gap-6 mt-10">
                            {["No credit card required", "Free 14-day trial", "India-hosted, GDPR compliant"].map((item, i) => (
                                <span key={i} className="flex items-center gap-2 text-blue-300/80 text-[12px] font-medium">
                                    <CheckCircle2 size={13} className="text-green-400" /> {item}
                                </span>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>

            <Footer />

            {/* Demo Modal */}
            <DemoRequestModal isOpen={isDemoOpen} onClose={() => setIsDemoOpen(false)} />
        </div>
    );
}
