"use client";

import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    ChevronLeft,
    ChevronRight,
    Sparkles,
    BarChart3,
    Layers,
    Zap,
    MessageSquare,
    CheckCircle2,
    TrendingUp,
    Users,
    Target,
    Activity,
    Clock
} from 'lucide-react';

const SLIDE_DURATION = 4000;

const slides = [
    {
        id: 1,
        headline: "Capture Every Opportunity",
        description: "Track, assign, and manage leads effortlessly with intelligent automation.",
        color: "blue",
        icon: <Zap className="text-blue-400" size={24} />,
        visual: (
            <div className="relative w-full h-full flex items-center justify-center">
                {/* Main Card */}
                <div className="bg-white/10 backdrop-blur-xl p-8 rounded-[40px] border border-white/20 shadow-2xl w-[80%] max-w-lg relative z-10">
                    <div className="flex items-center justify-between mb-8">
                        <h4 className="text-white font-black text-xl tracking-tight">Lead Status</h4>
                        <span className="bg-emerald-500/20 text-emerald-400 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest">New Entry</span>
                    </div>
                    <div className="space-y-6">
                        {[1, 2, 3].map((i) => (
                            <div key={i} className="flex items-center justify-between p-4 bg-white/5 rounded-2xl border border-white/10">
                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 font-bold">{i}</div>
                                    <div className="h-2 w-32 bg-white/10 rounded-full" />
                                </div>
                                <div className="h-6 w-16 bg-white/5 rounded-full" />
                            </div>
                        ))}
                    </div>
                </div>
                {/* Floating Elements */}
                <motion.div
                    animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-10 right-[15%] bg-blue-600 p-5 rounded-3xl shadow-xl z-20 flex flex-col gap-2"
                >
                    <Users className="text-white" size={20} />
                    <span className="text-white/80 text-[10px] font-black uppercase">Assigned</span>
                </motion.div>
                <motion.div
                    animate={{ y: [0, 20, 0], x: [0, 10, 0] }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute bottom-20 left-[10%] bg-emerald-500 p-6 rounded-[32px] shadow-lg z-20"
                >
                    <CheckCircle2 className="text-white" size={24} />
                </motion.div>
                {/* AI Popup */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    className="absolute top-1/2 -right-4 translate-y-[-50%] bg-white p-6 rounded-3xl shadow-2xl z-30 w-56 border border-slate-100"
                >
                    <div className="flex items-center gap-2 mb-3">
                        <Sparkles className="text-blue-600" size={16} />
                        <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">AI Intelligence</span>
                    </div>
                    <p className="text-slate-800 font-bold text-sm leading-tight">High intent lead detected. Suggest immediate follow-up.</p>
                </motion.div>
            </div>
        )
    },
    {
        id: 2,
        headline: "Visualize Your Sales Pipeline",
        description: "Drag-and-drop deal stages with real-time tracking and conversion insights.",
        color: "purple",
        icon: <Layers className="text-purple-400" size={24} />,
        visual: (
            <div className="relative w-full h-full flex items-center justify-center gap-4 overflow-hidden px-10">
                {/* Kanban Columns */}
                {['Qualified', 'Proposal', 'Won'].map((col, idx) => (
                    <div key={idx} className="flex-1 bg-white/5 backdrop-blur-md rounded-[32px] p-5 border border-white/10 h-[70%]">
                        <p className="text-white/40 text-[10px] font-black uppercase tracking-widest mb-4">{col}</p>
                        <div className="space-y-4">
                            <div className="bg-white/10 p-4 rounded-2xl border border-white/10 h-24" />
                            <div className="bg-white/10 p-4 rounded-2xl border border-white/10 h-16 opacity-50" />
                        </div>
                    </div>
                ))}
                {/* Rising Graph Overlay */}
                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-purple-500/20 to-transparent pointer-events-none" />
                <svg className="absolute inset-x-0 bottom-10 w-full h-[300px] z-10 pointer-events-none" viewBox="0 0 1000 300">
                    <motion.path
                        initial={{ pathLength: 0 }}
                        whileInView={{ pathLength: 1 }}
                        transition={{ duration: 2, ease: "easeOut" }}
                        d="M0 300 Q 250 250 500 150 T 1000 50"
                        fill="none"
                        stroke="#A855F7"
                        strokeWidth="8"
                        strokeLinecap="round"
                    />
                </svg>
                <motion.div
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 3, repeat: Infinity }}
                    className="absolute top-20 right-[5%] bg-white/95 backdrop-blur-xl p-5 rounded-3xl shadow-2xl z-20 border border-purple-100"
                >
                    <div className="flex items-center gap-3">
                        <TrendingUp className="text-purple-600" size={20} />
                        <div>
                            <p className="text-[10px] font-black text-slate-400 uppercase">Conversion Rate</p>
                            <p className="text-2xl font-black text-slate-800 tracking-tighter">+24.8%</p>
                        </div>
                    </div>
                </motion.div>
            </div>
        )
    },
    {
        id: 3,
        headline: "Let AI Close Deals Faster",
        description: "Automate follow-ups, reminders, and smart task allocation for your sales force.",
        color: "emerald",
        icon: <Sparkles className="text-emerald-400" size={24} />,
        visual: (
            <div className="relative w-full h-full flex items-center justify-center">
                {/* Central AI Orb */}
                <div className="relative">
                    <motion.div
                        animate={{ scale: [1, 1.1, 1], rotate: 360 }}
                        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                        className="w-80 h-80 bg-gradient-to-br from-emerald-400/20 to-blue-500/20 rounded-full blur-[80px]"
                    />
                    <motion.div
                        animate={{ scale: [1, 1.05, 1] }}
                        transition={{ duration: 4, repeat: Infinity }}
                        className="absolute inset-0 m-auto w-64 h-64 bg-white/10 backdrop-blur-2xl rounded-full border border-white/20 flex flex-col items-center justify-center shadow-2xl"
                    >
                        <div className="w-20 h-20 bg-emerald-500 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-emerald-500/30 mb-4 rotate-3">
                            <Target size={40} />
                        </div>
                        <h4 className="text-white font-black text-xl">DURKKAS AI</h4>
                        <p className="text-emerald-400 text-xs font-black uppercase tracking-widest mt-1">Autonomous Engine</p>
                    </motion.div>
                </div>
                {/* Automation Cards */}
                <div className="absolute top-20 left-[15%] space-y-4 w-64 transition-all">
                    <div className="bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/10">
                        <p className="text-white/60 text-[10px] font-black uppercase mb-1">Auto Follow-up</p>
                        <p className="text-white text-sm font-bold">Email draft ready for review</p>
                    </div>
                    <div className="bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/10 translate-x-10">
                        <p className="text-white/60 text-[10px] font-black uppercase mb-1">Deal Probability</p>
                        <p className="text-emerald-400 text-lg font-black">92% Likely to Close</p>
                    </div>
                </div>
                <div className="absolute bottom-20 right-[15%] w-60">
                    <div className="bg-[#10B981] p-5 rounded-3xl shadow-xl flex items-center gap-4">
                        <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center text-white">
                            <Clock size={20} />
                        </div>
                        <div>
                            <p className="text-white/80 text-[10px] font-black uppercase">Next Task</p>
                            <p className="text-white text-sm font-bold">Sign contract agreement</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    },
    {
        id: 4,
        headline: "Data-Driven Decisions",
        description: "Live revenue dashboards, KPI tracking, and forecasting tools for clarity and scale.",
        color: "blue",
        icon: <BarChart3 className="text-blue-400" size={24} />,
        visual: (
            <div className="relative w-full h-full flex flex-col items-center justify-center p-20">
                <div className="w-full h-full bg-white/5 backdrop-blur-xl rounded-[40px] border border-white/20 p-10 flex flex-col">
                    <div className="flex items-center justify-between mb-10">
                        <div>
                            <h4 className="text-white font-black text-2xl tracking-tight">Revenue Growth</h4>
                            <p className="text-white/40 text-sm font-bold">Fiscal Year 2026 Analytics</p>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="text-right">
                                <p className="text-white/40 text-[10px] font-black uppercase">Target</p>
                                <p className="text-white font-black">$2.4M</p>
                            </div>
                            <div className="w-12 h-12 rounded-full border-4 border-emerald-500 flex items-center justify-center text-emerald-500 font-black text-[10px]">94%</div>
                        </div>
                    </div>
                    {/* Simplified Chart */}
                    <div className="flex-grow flex items-end gap-3 px-4">
                        {[40, 60, 45, 90, 70, 100, 80, 110].map((h, i) => (
                            <motion.div
                                key={i}
                                initial={{ height: 0 }}
                                whileInView={{ height: `${h}%` }}
                                transition={{ duration: 1, delay: i * 0.1 }}
                                className="flex-1 bg-gradient-to-t from-blue-600 to-blue-400 rounded-t-xl"
                            />
                        ))}
                    </div>
                </div>
                {/* Floating KPI Cards */}
                <motion.div
                    animate={{ y: [0, -15, 0] }}
                    transition={{ duration: 4, repeat: Infinity }}
                    className="absolute top-32 -left-4 bg-white p-6 rounded-3xl shadow-2xl z-20 w-48 text-center"
                >
                    <Activity className="text-blue-600 mx-auto mb-2" size={24} />
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Active Users</p>
                    <p className="text-3xl font-black text-slate-800 tracking-tighter">14,802</p>
                </motion.div>
            </div>
        )
    }
];

const PremiumProductCarousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState(1); // 1 for next, -1 for prev

    const nextSlide = useCallback(() => {
        setDirection(1);
        setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, []);

    const prevSlide = () => {
        setDirection(-1);
        setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
    };

    useEffect(() => {
        const timer = setInterval(nextSlide, SLIDE_DURATION);
        return () => clearInterval(timer);
    }, [nextSlide]);

    return (
        <section className="relative w-full py-32 px-6 overflow-hidden bg-[#0A0F1E]">
            {/* Background Decorative Glows */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-blue-600/10 rounded-full blur-[160px]" />
                <div className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] bg-purple-600/10 rounded-full blur-[160px]" />
            </div>

            <div className="max-w-[1700px] mx-auto relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">

                    {/* CONTENT AREA */}
                    <div className="flex-1 max-w-xl text-center lg:text-left">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentIndex}
                                initial={{ opacity: 0, x: -30 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: 20 }}
                                transition={{ duration: 0.6, ease: "easeOut" }}
                            >
                                <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full mb-8">
                                    {slides[currentIndex].icon}
                                    <span className="text-white/60 text-xs font-black uppercase tracking-widest">Feature Spotlight</span>
                                </div>

                                <h3 className="text-[40px] md:text-[56px] lg:text-[64px] font-black text-white leading-[1.1] mb-8 tracking-tight">
                                    {slides[currentIndex].headline}
                                </h3>

                                <p className="text-white/50 text-xl font-medium leading-relaxed mb-12">
                                    {slides[currentIndex].description}
                                </p>

                                {/* Action Button */}
                                <button className="px-8 py-4 bg-white text-slate-900 text-sm font-black rounded-full hover:scale-105 active:scale-95 transition-all flex items-center gap-2 uppercase tracking-wide">
                                    Explore Capability
                                    <ChevronRight size={16} />
                                </button>
                            </motion.div>
                        </AnimatePresence>

                        {/* Progress Indicators */}
                        <div className="mt-16 flex items-center justify-center lg:justify-start gap-4">
                            {slides.map((_, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => {
                                        setDirection(idx > currentIndex ? 1 : -1);
                                        setCurrentIndex(idx);
                                    }}
                                    className="relative h-1 bg-white/10 rounded-full overflow-hidden transition-all duration-300"
                                    style={{ width: currentIndex === idx ? '60px' : '30px' }}
                                >
                                    {currentIndex === idx && (
                                        <motion.div
                                            initial={{ width: 0 }}
                                            animate={{ width: '100%' }}
                                            transition={{ duration: SLIDE_DURATION / 1000, ease: "linear" }}
                                            className="absolute inset-0 bg-blue-500"
                                        />
                                    )}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* VISUAL AREA - GLASSMORPHISM CONTAINER */}
                    <div className="flex-[1.2] w-full relative">
                        <div className="relative aspect-[16/10] w-full flex items-center justify-center">
                            <AnimatePresence mode="wait" custom={direction}>
                                <motion.div
                                    key={currentIndex}
                                    custom={direction}
                                    initial={{ opacity: 0, scale: 0.95, x: direction * 50 }}
                                    animate={{ opacity: 1, scale: 1, x: 0 }}
                                    exit={{ opacity: 0, scale: 1.05, x: -direction * 50 }}
                                    transition={{ duration: 0.8, ease: "easeInOut" }}
                                    className="w-full h-full"
                                >
                                    {slides[currentIndex].visual}
                                </motion.div>
                            </AnimatePresence>
                        </div>

                        {/* Navigation Arrows */}
                        <div className="absolute top-1/2 -translate-y-1/2 inset-x-[-40px] hidden xl:flex justify-between pointer-events-none">
                            <button
                                onClick={prevSlide}
                                className="pointer-events-auto w-14 h-14 bg-white/5 backdrop-blur-md border border-white/10 rounded-full flex items-center justify-center text-white hover:bg-white/10 transition-all hover:scale-110"
                            >
                                <ChevronLeft size={24} />
                            </button>
                            <button
                                onClick={nextSlide}
                                className="pointer-events-auto w-14 h-14 bg-white/5 backdrop-blur-md border border-white/10 rounded-full flex items-center justify-center text-white hover:bg-white/10 transition-all hover:scale-110"
                            >
                                <ChevronRight size={24} />
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default PremiumProductCarousel;
