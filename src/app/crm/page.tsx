"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    X,
    ChevronRight,
    ArrowRight,
    User,
    Mail,
    Smartphone,
    MessageCircle,
    CheckCircle2,
    Sparkles,
    Zap
} from "lucide-react";
import Navbar from "@/components/Navbar";
import UnifiedWorkspaceMockup from "@/components/UnifiedWorkspaceMockup";
import PremiumProductCarousel from "@/components/PremiumProductCarousel";
import DemoRequestModal from "@/components/DemoRequestModal";

const ZohoStyleCRM = () => {
    const [isMounted, setIsMounted] = useState(false);
    const [isDemoOpen, setIsDemoOpen] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) return null;

    return (
        <div className="min-h-screen relative overflow-hidden font-outfit select-none bg-white">
            <Navbar />

            {/* ZOHO-STYLE BACKGROUND STRIPES */}
            <div className="absolute inset-0 z-0 flex pointer-events-none opacity-30">
                <div className="flex-1 bg-red-50/50" />
                <div className="flex-1 bg-orange-50/50" />
                <div className="flex-1 bg-yellow-50/50" />
                <div className="flex-1 bg-emerald-50/50" />
                <div className="flex-1 bg-blue-50/50" />
                <div className="flex-1 bg-indigo-50/50" />
                <div className="flex-1 bg-purple-50/50" />
                <div className="flex-1 bg-pink-50/50" />
            </div>

            <main className="relative z-10 pt-32 pb-20 px-6 md:px-12 lg:px-24 max-w-[1600px] mx-auto min-h-screen flex flex-col lg:flex-row items-center gap-16 lg:gap-24">

                {/* LEFT CONTENT */}
                <div className="flex-1 max-w-2xl text-center lg:text-left">
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="text-[48px] md:text-[64px] lg:text-[72px] font-black text-[#0061FE] leading-[1.1] mb-8 tracking-tight"
                    >
                        Orchestrate <br />
                        <span className="text-[#0061FE]">your business </span> <br />
                        growth
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                        className="text-slate-600 text-xl md:text-2xl font-medium leading-relaxed mb-12 max-w-xl lg:mx-0 mx-auto"
                    >
                        DURKKAS is the cognitive core for modern Indian enterprises, unifying leads, operations, and AI-driven insights into one seamless ecosystem.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
                    >
                        {/* Primary: Request Demo */}
                        <button
                            onClick={() => setIsDemoOpen(true)}
                            className="px-9 py-4 bg-[#0061FE] text-white text-base font-black rounded-2xl shadow-xl shadow-blue-500/30 hover:bg-blue-700 transition-all hover:scale-105 active:scale-95 flex items-center gap-2"
                        >
                            Request a Demo
                            <ArrowRight size={18} />
                        </button>

                        {/* Secondary: Access CRM → Pricing */}
                        <a
                            href="/pricing"
                            className="px-9 py-4 bg-[#F34739] text-white text-base font-black rounded-2xl shadow-xl shadow-red-500/20 hover:bg-[#D9382C] transition-all hover:scale-105 active:scale-95 flex items-center gap-2"
                        >
                            Access DURKKAS CRM
                            <ArrowRight size={18} />
                        </a>
                    </motion.div>
                </div>

                {/* RIGHT HERO COMPOSITION */}
                <div className="flex-1 relative w-full h-[600px] lg:h-[700px] flex items-center justify-center">

                    {/* Main Image Container */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="relative w-[340px] md:w-[420px] aspect-[4/5] rounded-[60px] overflow-hidden shadow-[0_40px_100px_rgba(0,0,0,0.1)] bg-[#DCE8FC]"
                    >
                        {/* Placeholder for Indian Businessman Image */}
                        <img
                            src="https://images.unsplash.com/photo-1556155092-490a1ba16284?auto=format&fit=crop&q=80&w=800"
                            alt="Professional Businessman"
                            className="w-full h-full object-cover"
                        />

                        {/* Image Lighting Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 via-transparent to-transparent pointer-events-none" />
                    </motion.div>

                    {/* FLOATING UI ELEMENTS */}

                    {/* 1. Active User Card */}
                    <motion.div
                        animate={{ y: [0, -10, 0] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute -top-4 -right-10 md:-right-20 bg-white/95 backdrop-blur-md p-4 rounded-3xl shadow-xl border border-white/50 w-[240px] z-20"
                    >
                        <div className="flex items-center gap-3">
                            <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-emerald-400">
                                <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Gayle" alt="Avatar" />
                            </div>
                            <div>
                                <h4 className="font-black text-slate-800 text-sm">Gayle Hayes</h4>
                                <span className="text-[10px] font-bold text-emerald-500 bg-emerald-50 px-2 py-0.5 rounded-full uppercase">Active</span>
                            </div>
                        </div>
                        <div className="mt-4 space-y-2">
                            <div className="flex items-center gap-2 text-xs text-slate-500 font-medium">
                                <Mail size={12} /> hayes.g@durkkas.com
                            </div>
                            <div className="h-px bg-slate-100" />
                            <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Salesperson Assigned</p>
                            <div className="flex items-center gap-2">
                                <div className="w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center">
                                    <User size={12} className="text-slate-400" />
                                </div>
                                <span className="text-xs font-bold text-slate-700">Melinda Anderson</span>
                            </div>
                        </div>
                    </motion.div>

                    {/* 2. Smart Prompts (AI Window) */}
                    <motion.div
                        animate={{ y: [0, 10, 0] }}
                        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                        className="absolute -bottom-10 -left-10 md:-left-20 bg-white shadow-2xl rounded-[32px] overflow-hidden border border-slate-100 w-[300px] md:w-[380px] z-30"
                    >
                        <div className="bg-[#4CAF50] px-5 py-3 flex items-center justify-between">
                            <div className="flex items-center gap-2 text-white">
                                <Sparkles size={16} fill="white" />
                                <span className="text-sm font-black tracking-tight">Smart Prompts</span>
                            </div>
                            <span className="text-[10px] text-white/80 font-bold">221 Words</span>
                        </div>
                        <div className="p-6">
                            <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2 leading-none">Last action - Fix Grammar for Subject</p>
                            <p className="text-sm text-slate-600 font-medium leading-relaxed mb-4 italic">
                                "Subject: Yay! We have received your booking! Let's get started..."
                            </p>
                            <div className="bg-blue-50/50 p-3 rounded-2xl border border-blue-100 mb-4">
                                <p className="text-[11px] font-bold text-blue-600">Make it shorter | Make it formal</p>
                            </div>
                            <button className="flex items-center gap-2 text-[10px] font-bold text-slate-400 hover:text-[#4CAF50] transition-colors">
                                <Zap size={12} fill="currentColor" />
                                Suggestion: Make the subject formal ↺
                            </button>
                        </div>
                    </motion.div>

                    {/* 3. Social/Feedback Bubble */}
                    <motion.div
                        animate={{ x: [0, 10, 0] }}
                        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                        className="absolute top-1/2 -right-16 bg-white p-3 rounded-2xl shadow-lg border border-slate-50 w-44 z-10"
                    >
                        <div className="flex items-center gap-2 mb-2">
                            <div className="w-8 h-8 rounded-full bg-slate-100 overflow-hidden">
                                <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Sam" alt="Avatar" />
                            </div>
                            <span className="text-[10px] font-bold text-slate-800 uppercase">Feedback</span>
                        </div>
                        <p className="text-[11px] text-slate-500 font-medium leading-tight italic">
                            "The platform demo was excellent. Very intuitive."
                        </p>
                    </motion.div>

                </div>
            </main>

            {/* DEDICATED TEAM SPACE SECTION - NEW */}
            <section className="relative z-10 py-32 px-6 flex flex-col items-center bg-[#FFF8F0]/30">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center max-w-4xl mb-20"
                >
                    <h2 className="text-3xl md:text-5xl font-black text-slate-800 tracking-tighter mb-6 leading-tight">
                        Set up a dedicated space for each team. <br />
                        Let teams work with the data they need and nothing else.
                    </h2>
                    <div className="w-24 h-1.5 bg-blue-600 rounded-full mx-auto" />
                </motion.div>

                <div className="w-full relative px-4 md:px-0">
                    <UnifiedWorkspaceMockup />
                </div>
            </section>

            {/* PREMIUM PRODUCT CAROUSEL - NEW */}
            <PremiumProductCarousel />

            {/* Demo Modal */}
            <DemoRequestModal isOpen={isDemoOpen} onClose={() => setIsDemoOpen(false)} />

            <style jsx global>{`
                @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;700;900&display=swap');
                body {
                    background-color: #fff !important;
                    font-family: 'Outfit', sans-serif;
                }
            `}</style>
        </div>
    );
};

export default ZohoStyleCRM;
