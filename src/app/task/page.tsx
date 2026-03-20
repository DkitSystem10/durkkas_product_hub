"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    ArrowRight,
    BarChart3,
    CheckCircle2,
    Clock,
    Layers,
    Layout,
    MessageSquare,
    MoreVertical,
    Plus,
    Search,
    Settings,
    Shield,
    Users,
    Zap,
    Calendar,
    Filter,
    Paperclip,
    Maximize2,
    Cpu,
    Activity,
    Lock as LucideLock,
    Database,
    ShieldCheck
} from "lucide-react";
import Navbar from "@/components/Navbar";
import DemoRequestModal from "@/components/DemoRequestModal";
import { Poppins } from "next/font/google";

const poppins = Poppins({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700", "800", "900"],
});

// --- Section Data & Config ---
const taskFeatures = [
    { id: "hero", badge: "Task Orchestration", color: "blue" },
    { id: "pipeline", badge: "Smart Pipeline", color: "yellow" },
    { id: "automation", badge: "Neural Workflows", color: "red" },
    { id: "collab", badge: "Team Synergy", color: "blue" },
    { id: "analytics", badge: "Performance Pulsar", color: "black" },
    { id: "resource", badge: "Capacity Matrix", color: "yellow" },
    { id: "security", badge: "Enterprise Shield", color: "red" },
    { id: "cta", badge: "Get Systemic", color: "blue" }
];

// --- Sub-Components (Internal Visuals) ---

function PipelineVisual() {
    const nodes = [
        { label: "Scattered Chat", icon: <MessageSquare size={24} />, color: "bg-blue-600", x: "15%", y: "40%", delay: 0.1 },
        { label: "Context Loss", icon: <Layers size={24} />, color: "bg-red-500", x: "25%", y: "60%", delay: 0.3 },
        { label: "Optimized Focus!", icon: <Zap size={24} />, color: "bg-yellow-500", x: "35%", y: "30%", delay: 0.5 },
        { label: "Unified Sync", icon: <Users size={24} />, color: "bg-blue-500", x: "50%", y: "50%", delay: 0.2 },
        { label: "Asset Search", icon: <Layout size={24} />, color: "bg-red-600", x: "65%", y: "30%", delay: 0.4 },
        { label: "Timeline Lag", icon: <Clock size={24} />, color: "bg-yellow-400", x: "75%", y: "60%", delay: 0.6 }
    ];

    return (
        <div className="relative w-full pt-0 pb-16 overflow-hidden">
            {/* The "Tangled to Straight" Pipeline SVG */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-20 dark:opacity-40">
                <svg width="1200" height="400" viewBox="0 0 1200 400" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <motion.path
                        d="M0 200C100 200 150 100 250 100C350 100 400 300 500 300C600 300 650 150 750 150C850 150 900 250 1000 250C1100 250 1200 200 1300 200"
                        stroke="url(#gradient-line)"
                        strokeWidth="80"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        initial={{ pathLength: 0 }}
                        whileInView={{ pathLength: 1 }}
                        transition={{ duration: 3, ease: "easeInOut" }}
                    />
                    <defs>
                        <linearGradient id="gradient-line" x1="0" y1="200" x2="1200" y2="200" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#e2e8f0" />
                            <stop offset="0.5" stopColor="#cbd5e1" />
                            <stop offset="1" stopColor="#94a3b8" />
                        </linearGradient>
                    </defs>
                </svg>
            </div>

            {/* DESKTOP: Floating Nodes along the curved path */}
            <div className="hidden md:block relative h-[400px] w-full max-w-6xl mx-auto mb-20">
                {nodes.map((node, i) => (
                    <motion.div
                        key={i}
                        initial={{ scale: 0, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        animate={{
                            y: [0, -15, 0],
                            rotate: [0, 5, -5, 0]
                        }}
                        transition={{
                            delay: node.delay,
                            y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
                            rotate: { duration: 5, repeat: Infinity, ease: "easeInOut" }
                        }}
                        style={{ left: i * 16 + 10 + "%", top: node.y }}
                        className="absolute group"
                    >
                        <div className={`h-16 w-16 rounded-2xl ${node.color} text-white flex items-center justify-center shadow-xl border-4 border-white`}>
                            {node.icon}
                        </div>

                        <motion.div
                            initial={{ scale: 0 }}
                            whileInView={{ scale: 1 }}
                            transition={{ delay: node.delay + 0.3 }}
                            className="absolute -top-12 -right-12 bg-white px-3 py-1.5 rounded-xl border border-slate-100 shadow-lg text-[9px] font-[1000] text-slate-900 whitespace-nowrap z-50"
                        >
                            {node.label}
                        </motion.div>
                    </motion.div>
                ))}
            </div>

            {/* MOBILE: Neat 3x3 Grid Layout (All 6 visible) */}
            <div className="md:hidden grid grid-cols-3 gap-y-12 gap-x-2 sm:gap-x-4 px-0 mb-16 relative z-10 w-full">
                {nodes.map((node, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className="flex flex-col items-center gap-2 relative"
                    >
                        <div className={`h-14 w-14 rounded-xl ${node.color} text-white flex items-center justify-center shadow-lg border-2 border-white transform scale-75 sm:scale-100`}>
                            {node.icon}
                        </div>
                        <span className="text-[8px] font-black text-slate-400 uppercase tracking-widest text-center leading-tight">
                            {node.label}
                        </span>
                    </motion.div>
                ))}
            </div>

            {/* Sub-Metrics Section */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 max-w-5xl mx-auto px-0 w-full">
                {[
                    {
                        title: "Task Switching",
                        tagline: "The Productivity Killer",
                        metric: "32% ",
                        desc: "Digital fatigue reduces collective performance by breaking focus loops.",
                        accent: "bg-red-500",
                        light: "bg-red-50",
                        text: "text-red-600"
                    },
                    {
                        title: "Priority Gap",
                        tagline: "96% Companies Fail",
                        metric: "Strategic Lag",
                        desc: "Most teams work on the wrong tasks because priorities aren't visible.",
                        accent: "bg-yellow-500",
                        light: "bg-yellow-50",
                        text: "text-yellow-600"
                    },
                    {
                        title: "Unified Stitching",
                        tagline: "Save 2.5 Hours Daily",
                        metric: "Clarity Hub",
                        desc: "Automated task mapping eliminates time wasted on manual context stitching.",
                        accent: "bg-blue-600",
                        light: "bg-blue-50",
                        text: "text-blue-600"
                    }
                ].map((item, idx) => (
                    <motion.div
                        key={item.title}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.2 }}
                        className="group"
                    >
                        <div className={`h-1.5 w-12 ${item.accent} rounded-full mb-6`} />
                        <h4 className="text-2xl font-black text-slate-900 mb-2">{item.title}</h4>
                        <p className={`text-sm font-black uppercase tracking-widest ${item.text} mb-4`}>{item.tagline}</p>
                        <p className="text-slate-500 text-sm font-medium leading-relaxed mb-6">
                            {item.desc}
                        </p>
                        <div className={`p-4 rounded-2xl ${item.light} border border-transparent group-hover:border-${item.accent.replace('bg-', '')}/20 transition-all`}>
                            <p className={`text-xl font-black ${item.text} tracking-wide`}>{item.metric}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}

function AnalyticsVisual() {
    return (
        <div className="p-6 bg-slate-900 rounded-[40px] border border-white/10 shadow-2xl overflow-hidden relative">
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-[100px]" />
            <div className="relative z-10">
                <div className="flex justify-between items-end mb-10">
                    <div>
                        <p className="text-[10px] font-black text-blue-400 uppercase tracking-widest mb-1">Weekly Pulse</p>
                        <h4 className="text-2xl font-black text-white tracking-wide">98.4% Efficiency</h4>
                    </div>
                    <div className="h-12 w-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-blue-400">
                        <BarChart3 size={20} />
                    </div>
                </div>

                <div className="grid grid-cols-7 gap-2 items-end h-32 mb-8">
                    {[40, 70, 45, 90, 65, 80, 55].map((h, i) => (
                        <motion.div
                            key={i}
                            initial={{ height: 0 }}
                            whileInView={{ height: `${h}%` }}
                            transition={{ duration: 1, delay: i * 0.1 }}
                            className={`w-full rounded-t-lg ${i === 3 ? 'bg-red-500 shadow-[0_0_20px_rgba(239,68,68,0.4)]' : i === 5 ? 'bg-yellow-500' : 'bg-blue-600'}`}
                        />
                    ))}
                </div>

                <div className="grid grid-cols-2 gap-4">
                    <div className="p-4 bg-white/5 rounded-2xl border border-white/5">
                        <p className="text-[9px] font-black text-slate-500 uppercase">Avg Response</p>
                        <p className="text-lg font-black text-white">+24.8%</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

function AccordionSystem() {
    const [openId, setOpenId] = useState<string | null>("trig");

    const items = [
        {
            id: "trig",
            title: "Trigger-Based Execution",
            desc: "System automatically initiates tasks based on events like incoming mail, project status changes, or time-based conditions.",
            color: "border-blue-500",
            bulletColor: "bg-blue-600",
        },
        {
            id: "multi",
            title: "Multi-Tool Orchestration",
            desc: "Bridge data between Slack, Notion, and Gmail without human intervention. The engine acts as your digital stitcher.",
            color: "border-red-500",
            bulletColor: "bg-red-600",
        },
        {
            id: "ai",
            title: "AI Smart Prioritization",
            desc: "Neural logic analyzes urgenecy and team bandwidth to auto-assign tasks to the right member at the right time.",
            color: "border-yellow-500",
            bulletColor: "bg-yellow-500",
        },
    ];

    return (
        <div className="space-y-4 max-w-xl">
            {items.map((item) => {
                const isOpen = openId === item.id;
                return (
                    <div
                        key={item.id}
                        className={`rounded-2xl border-2 ${item.color} overflow-hidden transition-all duration-300 ${isOpen ? "bg-slate-50 shadow-lg" : "bg-white"}`}
                    >
                        <button
                            onClick={() => setOpenId(isOpen ? null : item.id)}
                            className="w-full p-6 flex items-center justify-between text-left"
                        >
                            <div className="flex items-center gap-4">
                                <div className={`h-2.5 w-2.5 rounded-full ${item.bulletColor}`} />
                                <span className="text-lg font-black text-slate-900 uppercase tracking-wide">
                                    {item.title}
                                </span>
                            </div>
                            <div className={`transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}>
                                <ArrowRight size={20} className="rotate-90 text-slate-400" />
                            </div>
                        </button>
                        <AnimatePresence initial={false}>
                            {isOpen && (
                                <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: "auto", opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    className="px-6 pb-6"
                                >
                                    <p className="text-slate-500 font-medium leading-relaxed">{item.desc}</p>
                                    <div className="mt-4 flex items-center gap-2 text-blue-600 font-black text-xs uppercase tracking-widest cursor-pointer hover:gap-3 transition-all">
                                        Learn More <ArrowRight size={14} />
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                );
            })}
        </div>
    );
}

function HeroVisual() {
    return (
        <div className="relative h-[350px] md:h-[550px] w-full flex items-center justify-center scale-[0.85] md:scale-100 transition-transform duration-500 overflow-visible mt-0 md:mt-0">
            {/* Ambient Base Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[400px] h-[400px] bg-green-500/10 blur-[130px] rounded-full pointer-events-none" />

            {/* MAIN DASHBOARD CONTAINER */}
            <div className="relative z-10 w-full max-w-[340px] md:max-w-[480px] h-[360px] md:h-[460px] bg-[#05090b] rounded-[32px] border border-white/5 shadow-2xl shadow-green-900/40 p-5 md:p-6 flex flex-col pointer-events-none font-mono mx-auto">
                
                {/* --- TOP: RADAR SECTION --- */}
                <div className="relative w-full h-[60%] bg-gradient-to-t from-[#0e1f18] to-[#040807] rounded-t-[140px] md:rounded-t-[200px] border border-green-900/30 overflow-hidden flex items-end justify-center">
                    
                    {/* Dotted Background Grid */}
                    <div className="absolute inset-0 opacity-[0.1]" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, #4ade80 1px, transparent 0)', backgroundSize: '12px 12px' }} />

                    {/* Radar Concentric Rings */}
                    <div className="absolute bottom-0 w-[80%] h-[160%] rounded-full border border-green-500/20 translate-y-1/2" />
                    <div className="absolute bottom-0 w-[50%] h-[100%] rounded-full border border-green-500/30 translate-y-1/2" />
                    <div className="absolute bottom-0 w-[20%] h-[40%] rounded-full border border-green-500/40 translate-y-1/2" />
                    
                    {/* Crosshairs */}
                    <div className="absolute left-1/2 -translate-x-1/2 bottom-0 w-[1px] h-[80%] bg-green-500/30" />
                    <div className="absolute left-0 bottom-[10%] w-full h-[1px] bg-green-500/30 rotate-[-30deg] origin-right" />
                    <div className="absolute right-0 bottom-[10%] w-full h-[1px] bg-green-500/30 rotate-[30deg] origin-left" />

                    {/* Animated Sweeper */}
                    <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                        className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-[600px] h-[600px] origin-center rounded-full"
                        style={{
                            background: 'conic-gradient(from 0deg at 50% 50%, rgba(74, 222, 128, 0) 0deg, rgba(74, 222, 128, 0) 250deg, rgba(74, 222, 128, 0.15) 340deg, rgba(255, 255, 255, 0.8) 360deg)'
                        }}
                    />

                    {/* Pings (Insight & Decision) */}
                    <div className="absolute top-[35%] right-[25%] flex flex-col items-center">
                        <motion.div animate={{ opacity: [0.2, 1, 0.2], scale: [0.8, 1.2, 0.8] }} transition={{ duration: 4, repeat: Infinity, delay: 0.5 }} className="w-3 h-3 bg-green-200 rounded-full shadow-[0_0_15px_#4ade80]" />
                        <span className="text-green-300 text-[9px] md:text-[10px] uppercase font-bold tracking-widest mt-1.5 border border-green-500/30 bg-green-950/50 px-2 py-0.5 rounded-full backdrop-blur-md">Decision</span>
                    </div>

                    <div className="absolute top-[55%] right-[12%] flex flex-col items-center">
                        <motion.div animate={{ opacity: [0.2, 1, 0.2], scale: [0.8, 1.2, 0.8] }} transition={{ duration: 4, repeat: Infinity, delay: 1.5 }} className="w-2.5 h-2.5 bg-green-400/80 rounded-full shadow-[0_0_10px_#4ade80]" />
                        <span className="text-green-400/80 text-[8px] md:text-[9px] uppercase font-bold tracking-widest mt-1 border border-green-500/20 bg-green-950/40 px-1.5 py-0.5 rounded-full backdrop-blur-md">Insight</span>
                    </div>
                </div>

                {/* --- SEPARATOR DASHES --- */}
                <div className="w-full h-[1px] border-b border-dashed border-slate-800 my-4 relative">
                    {/* Small grid labels */}
                    <span className="absolute left-[5%] top-1 text-[8px] text-slate-600">FIG 1</span>
                    <span className="absolute left-[38%] top-1 text-[8px] text-slate-600">FIG 2</span>
                    <span className="absolute left-[70%] top-1 text-[8px] text-slate-600">FIG 3</span>
                </div>

                {/* --- BOTTOM: 3 PANELS SECTION --- */}
                <div className="flex-1 w-full grid grid-cols-3 gap-2 pb-1 relative">
                    {/* Panel Dividers */}
                    <div className="absolute left-1/3 top-0 bottom-0 w-[1px] border-l border-dashed border-slate-800" />
                    <div className="absolute left-2/3 top-0 bottom-0 w-[1px] border-l border-dashed border-slate-800" />

                    {/* FIG 1: INTEGRATION HUB */}
                    <div className="flex items-center justify-center relative scale-[0.8] md:scale-100">
                        {/* Connecting Lines */}
                        <motion.div animate={{ rotate: 180 }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }} className="absolute inset-0 flex items-center justify-center pointer-events-none">
                            <div className="absolute bg-green-500/30 h-[100px] w-[1px] rotate-45" />
                            <div className="absolute bg-green-500/30 h-[100px] w-[1px] -rotate-45" />
                            <div className="absolute bg-green-500/30 h-[100px] w-[1px]" />
                            <div className="absolute bg-green-500/30 w-[100px] h-[1px]" />
                        </motion.div>
                        
                        {/* Center Hub */}
                        <div className="relative z-10 w-10 h-10 rounded-full bg-slate-900 border border-slate-700 flex items-center justify-center shadow-[0_0_20px_rgba(74,222,128,0.2)]">
                            <motion.div animate={{ rotate: -360 }} transition={{ duration: 3, repeat: Infinity, ease: "linear" }} className="w-4 h-4 border-2 border-orange-500 border-t-purple-500 border-r-blue-400 rounded-lg shadow-[inset_0_0_5px_rgba(255,255,255,0.2)]" />
                        </div>

                        {/* Orbiting Icons (Simulated Logos) */}
                        <motion.div animate={{ y: [0, -4, 0] }} transition={{ duration: 2, repeat: Infinity, delay: 0 }} className="absolute top-1 lg:top-0 w-5 h-5 bg-blue-600 rounded-md flex items-center justify-center text-[8px] text-white font-bold border border-blue-400/50 shadow-lg">Ti</motion.div>
                        <motion.div animate={{ y: [0, -4, 0] }} transition={{ duration: 2, repeat: Infinity, delay: 0.5 }} className="absolute bottom-1 lg:bottom-0 w-5 h-5 bg-blue-500 rounded flex items-center justify-center text-[10px] text-white font-bold border border-blue-300/50 shadow-lg">X</motion.div>
                        <motion.div animate={{ y: [0, -4, 0] }} transition={{ duration: 2, repeat: Infinity, delay: 1 }} className="absolute left-1 lg:-left-2 w-5 h-5 bg-cyan-600 rounded-full flex items-center justify-center text-[8px] text-white overflow-hidden border border-cyan-400/50 shadow-lg">
                            <div className="w-2 h-2 bg-white rounded-sm mt-1" />
                        </motion.div>
                        <motion.div animate={{ y: [0, -4, 0] }} transition={{ duration: 2, repeat: Infinity, delay: 1.5 }} className="absolute right-1 lg:-right-2 w-5 h-5 bg-white rounded-md flex items-center justify-center text-[10px] font-black text-red-500 border border-slate-200 shadow-lg">M</motion.div>
                        <motion.div animate={{ y: [0, -4, 0] }} transition={{ duration: 2, repeat: Infinity, delay: 2 }} className="absolute top-2 right-2 lg:right-1 w-5 h-5 bg-slate-800 rounded-full flex items-center justify-center text-[10px] text-white border border-slate-600 shadow-lg">Gt</motion.div>
                        <motion.div animate={{ y: [0, -4, 0] }} transition={{ duration: 2, repeat: Infinity, delay: 2.5 }} className="absolute bottom-2 left-2 lg:left-1 w-5 h-5 bg-indigo-600 rounded-md flex items-center justify-center text-[#ffcc00] text-[8px] font-black border border-indigo-400/50 shadow-lg">#</motion.div>
                    </div>

                    {/* FIG 2: MATRIX CODE & 'PRIVATE' MULTIPLIER */}
                    <div className="flex items-center justify-center relative overflow-hidden bg-gradient-to-b from-[#020504] via-[#040a08] to-[#020504]">
                        {/* Faint alphanumeric background stream */}
                        <motion.div 
                            animate={{ y: [0, -50] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                            className="absolute inset-0 flex flex-col items-center justify-start gap-2 pt-2 opacity-[0.25] text-[10px] leading-tight text-green-400/50 font-mono whitespace-pre overflow-hidden"
                        >
                            <span>01001001</span>
                            <span>01101110</span>
                            <span>01110011</span>
                            <span>01101001</span>
                            <span>01100111</span>
                            <span>01101000</span>
                            <span>01110100</span>
                            <span>01001001</span>
                            <span>01101110</span>
                            <span>01110011</span>
                        </motion.div>
                        
                        {/* Glowing PRIVATE Text */}
                        <motion.div 
                            animate={{ textShadow: ["0 0 10px #4ade80", "0 0 25px #4ade80", "0 0 10px #4ade80"], scale: [1, 1.05, 1] }}
                            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                            className="relative z-10 text-green-400 font-black text-sm md:text-[15px] tracking-widest bg-[#020504] px-3 py-1.5 rounded backdrop-blur-sm border border-green-500/50"
                        >
                            PRIVATE
                        </motion.div>
                    </div>

                    {/* FIG 3: EVENTS GAUGE */}
                    <div className="flex flex-col items-center justify-center relative">
                        {/* Speedometer graphic */}
                        <div className="relative w-[70px] md:w-[90px] h-[70px] md:h-[90px] rounded-full border-[6px] border-slate-800/80 flex flex-col items-center justify-center">
                            {/* Inner Green Arc Overlay matching the gauge stroke style */}
                             <svg className="absolute inset-0 w-full h-full -rotate-90 pointer-events-none drop-shadow-[0_0_8px_rgba(74,222,128,0.6)]" viewBox="0 0 100 100">
                                <motion.circle 
                                    cx="50" cy="50" r="42" 
                                    fill="none" 
                                    stroke="#4ade80" 
                                    strokeWidth="8" 
                                    strokeDasharray="260" 
                                    strokeLinecap="round" 
                                    animate={{ strokeDashoffset: [200, 60, 120, 50, 200] }}
                                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                />
                            </svg>
                            {/* Inner Tick marks simulated (aesthetic only) */}
                            <motion.div animate={{ rotate: 180 }} transition={{ duration: 8, repeat: Infinity, ease: "linear" }} className="absolute inset-2 z-0 rounded-full border border-dashed border-green-500/30" />
                            
                            {/* Gauge Value */}
                            <motion.span animate={{ opacity: [0.7, 1, 0.7] }} transition={{ duration: 1.5, repeat: Infinity }} className="text-white font-[1000] text-sm md:text-lg leading-none z-10 tracking-wide">2,746</motion.span>
                            <span className="text-slate-500 text-[6px] md:text-[8px] font-bold uppercase mt-1 z-10 tracking-widest">Events</span>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}
function DataPoints() {
    const [mounted, setMounted] = useState(false);
    useEffect(() => setMounted(true), []);

    if (!mounted) return null;

    return (
        <>
            {[...Array(12)].map((_, i) => (
                <motion.div
                    key={i}
                    animate={{
                        x: [Math.random() * 400 - 200, Math.random() * 400 - 200],
                        y: [Math.random() * 400 - 200, Math.random() * 400 - 200],
                        opacity: [0, 0.8, 0],
                        scale: [0, 1, 0],
                    }}
                    transition={{ duration: 4 + Math.random() * 6, repeat: Infinity }}
                    className="absolute h-1.5 w-1.5 rounded-full bg-blue-400/30 blur-[1px]"
                    style={{ left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%` }}
                />
            ))}
        </>
    );
}

// --- Main Page ---

export default function TaskPage() {
    const [isDemoOpen, setIsDemoOpen] = useState(false);

    useEffect(() => {
        if (isDemoOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
    }, [isDemoOpen]);

    return (
        <div className={`min-h-screen bg-white ${poppins.className} select-none isolate text-slate-900 overflow-x-hidden w-full tracking-wide leading-relaxed`}>
            <div className="relative z-[400]">
                <Navbar />
            </div>

            {/* 1. HERO SECTION: CINEMATIC OPENING (WHITE/BLUE/BLACK) */}
            <section className="relative min-h-0 lg:min-h-[80vh] flex items-center pt-24 pb-6 md:py-20 overflow-hidden px-6 lg:px-24">

                <div className="container mx-auto grid lg:grid-cols-2 gap-4 lg:gap-12 items-center relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="flex flex-col items-center lg:items-start text-center lg:text-left w-full max-w-[100vw] px-4 sm:px-0"
                    >
                        <div className="inline-flex items-center gap-2 px-5 py-1.5 rounded-full bg-blue-50/50 text-blue-600 border border-blue-100 text-[9px] md:text-[10px] font-black tracking-[0.2em] uppercase mb-8">
                            <span className="h-1.5 w-1.5 rounded-full bg-blue-500 animate-pulse" />
                            System â€¢ Dashboard Hub
                        </div>

                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[64px] font-[1000] leading-tight md:leading-[0.95] tracking-wide md:tracking-[-0.05em] mb-6 break-words w-full">
                            <span className="text-blue-600">Task</span>{" "}
                            <span className="text-slate-900">Engine</span> <br className="hidden sm:block" />
                            <span className="text-yellow-500">Intelligent</span>{" "}
                            <span className="text-red-500">Hub</span>
                        </h1>
                        <p className="text-[12px] md:text-[14px] text-slate-500 max-w-[280px] sm:max-w-md mx-auto lg:mx-0 font-medium leading-relaxed mb-10">
                            Real-time neural view for tasks, pipelines, team synergy, and performance metrics. Track what matters with clean analytics and instant systemic alerts.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center gap-4 md:gap-5 justify-center lg:justify-start mb-8 w-full sm:w-auto px-4 sm:px-0">
                            <button
                                onClick={() => setIsDemoOpen(true)}
                                className="w-full sm:w-auto px-8 md:px-10 py-4 md:py-5 bg-blue-600 text-white font-[1000] rounded-2xl shadow-[0_20px_40px_rgba(37,99,235,0.3)] hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-3 text-xs md:text-sm whitespace-nowrap"
                            >
                                DEPLOY SYSTEM <ArrowRight size={18} />
                            </button>
                            <button
                                className="w-full sm:w-auto px-8 md:px-10 py-4 md:py-5 bg-white border-[3px] border-slate-100 text-slate-900 font-[1000] rounded-2xl hover:bg-slate-50 transition-all shadow-lg text-xs md:text-sm whitespace-nowrap"
                            >
                                SYSTEM PREVIEW
                            </button>
                        </div>

                        <div className="flex flex-wrap gap-x-6 gap-y-4 text-[9px] md:text-[10px] font-black uppercase text-slate-400 tracking-[0.2em] justify-center lg:justify-start w-full">
                            <span className="flex items-center gap-2 group cursor-default whitespace-nowrap">
                                <BarChart3 size={14} className="text-blue-600 group-hover:scale-125 transition-transform" /> LIVE KPIS
                            </span>
                            <span className="flex items-center gap-2 group cursor-default whitespace-nowrap">
                                <Users size={14} className="text-slate-900 group-hover:scale-125 transition-transform" /> BATCHES
                            </span>
                            <span className="flex items-center gap-2 group cursor-default whitespace-nowrap">
                                <CheckCircle2 size={14} className="text-slate-900 group-hover:scale-125 transition-transform" /> ATTENDANCE
                            </span>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1.2, ease: "easeOut" }}
                        className="relative flex justify-center lg:justify-end overflow-visible w-full mt-0 lg:mt-0"
                    >
                        <HeroVisual />
                    </motion.div>
                </div>
            </section>

            <section className="py-12 md:py-20 bg-[#f8fafc] px-6 lg:px-24">
                <div className="container mx-auto text-center max-w-5xl mb-12">
                    <span className="text-xs md:text-sm font-black uppercase text-blue-600 tracking-[0.3em]">Strategic Flow</span>
                    <h2 className="mt-4 text-3xl md:text-5xl font-black text-slate-930 tracking-wide leading-[1.05]">
                        Effortless Task Orchestration <br className="hidden md:block" />
                        <span className="text-blue-600">Block & Management</span>
                    </h2>

                    {/* Centered Decorative Line */}
                    <div className="h-1 w-24 bg-gradient-to-r from-blue-600 via-red-500 to-yellow-400 rounded-full mx-auto my-6" />

                    <p className="text-slate-500 font-medium text-base md:text-lg max-w-2xl mx-auto">
                        Work sprawl is killing focus. We stitch your fragmented tasks, scattered context, and missing priorities into a singular, high-velocity pipeline.
                    </p>
                </div>
                <div className="container mx-auto overflow-x-hidden md:overflow-visible w-full">
                    <PipelineVisual />
                </div>
            </section>

            {/* 3. NEURAL AUTOMATION: CREATIVE HUB (BLUE/RED/YELLOW) */}
            <section className="py-12 md:py-20 px-6 md:px-12 lg:px-24 relative overflow-hidden bg-white">
                <div className="container mx-auto grid lg:grid-cols-2 gap-12 md:gap-20 items-center">
                    {/* LEFT SIDE: Interactive Accordion System */}
                    <div className="order-2 lg:order-1 text-center lg:text-left">
                        <span className="text-xs md:text-sm font-black uppercase text-blue-600 tracking-[0.3em]"> Zero Manual Labor</span>
                        <h2 className="text-3xl md:text-5xl font-black mb-8 leading-tight">
                            Neural <span className="text-blue-600">Workflows</span> <br className="hidden md:block" />
                            set on Autopilot.
                        </h2>
                        <div className="h-1 w-24 bg-gradient-to-r from-blue-600 via-red-500 to-yellow-400 rounded-full mx-auto my-6" />

                        <AccordionSystem />
                    </div>

                    {/* RIGHT SIDE: Creative Agent Network Visual */}
                    <div className="order-1 lg:order-2">
                        <div className="relative h-[480px] md:h-[600px] w-full bg-slate-950 rounded-[40px] md:rounded-[60px] shadow-3xl overflow-hidden flex items-center justify-center p-6 md:p-12 group/hub">
                            {/* Animated Background Pulse */}
                            <motion.div
                                animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
                                transition={{ duration: 8, repeat: Infinity }}
                                className="absolute inset-0 bg-gradient-to-tr from-blue-600/30 via-red-600/20 to-yellow-500/20 blur-[120px]"
                            />

                            {/* SVG Connection Lines */}
                            <svg className="absolute inset-0 w-full h-full pointer-events-none z-0">
                                <defs>
                                    <filter id="glow">
                                        <feGaussianBlur stdDeviation="2.5" result="coloredBlur" />
                                        <feMerge>
                                            <feMergeNode in="coloredBlur" />
                                            <feMergeNode in="SourceGraphic" />
                                        </feMerge>
                                    </filter>
                                </defs>
                                {[
                                    { x2: "25%", y2: "25%", color: "#3b82f6" }, // top-left
                                    { x2: "75%", y2: "25%", color: "#eab308" }, // top-right
                                    { x2: "85%", y2: "50%", color: "#ef4444" }, // mid-right
                                    { x2: "75%", y2: "75%", color: "#3b82f6" }, // bottom-right
                                    { x2: "25%", y2: "75%", color: "#eab308" }, // bottom-left
                                    { x2: "15%", y2: "50%", color: "#ef4444" }, // mid-left
                                ].map((line, i) => (
                                    <motion.line
                                        key={i}
                                        x1="50%" y1="50%"
                                        x2={line.x2} y2={line.y2}
                                        stroke={line.color}
                                        strokeWidth="2"
                                        strokeDasharray="4 4"
                                        initial={{ pathLength: 0, opacity: 0 }}
                                        whileInView={{ pathLength: 1, opacity: 0.3 }}
                                        filter="url(#glow)"
                                        animate={{ strokeDashoffset: [0, -20] }}
                                        transition={{
                                            pathLength: { duration: 1, delay: i * 0.1 },
                                            strokeDashoffset: { duration: 2, repeat: Infinity, ease: "linear" }
                                        }}
                                    />
                                ))}
                            </svg>

                            {/* Center Agent Node */}
                            <motion.div
                                animate={{ y: [0, -10, 0] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                className="relative z-20 group h-28 w-28 md:h-32 md:w-32 rounded-[36px] md:rounded-[40px] bg-slate-900 border-4 border-red-500 shadow-[0_0_50px_rgba(239,68,68,0.4)] flex flex-col items-center justify-center p-3 md:p-4"
                            >
                                <Cpu size={36} className="text-white mb-2 filter saturate-150 drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]" />
                                <span className="text-[9px] md:text-[10px] font-black text-white uppercase mt-1 tracking-widest leading-none">TaskAgent</span>
                                <div className="mt-2 md:mt-3 flex items-center gap-1.5">
                                    <div className="h-1 w-6 md:w-8 bg-green-500 rounded-full animate-pulse shadow-[0_0_10px_#22c55e]" />
                                    <div className="h-1.5 w-1.5 rounded-full bg-green-500 animate-ping" />
                                </div>
                            </motion.div>

                            {/* Orbiting App Nodes (Positioned to match SVG lines) */}
                            {[
                                { icon: <MessageSquare size={20} />, label: "Slack", pos: "top-[12%] sm:top-[20%] left-[8%] sm:left-[20%]", color: "blue", delay: 0 },
                                { icon: <Layout size={20} />, label: "Figma", pos: "top-[12%] sm:top-[20%] right-[8%] sm:right-[20%]", color: "yellow", delay: 1 },
                                { icon: <Zap size={20} />, label: "Hooks", pos: "top-1/2 right-[2%] sm:right-[10%] -translate-y-1/2", color: "red", delay: 5 },
                                { icon: <Clock size={20} />, label: "Calendar", pos: "bottom-[12%] sm:bottom-[20%] right-[8%] sm:right-[20%]", color: "blue", delay: 2 },
                                { icon: <Users size={20} />, label: "CRM", pos: "bottom-[12%] sm:bottom-[20%] left-[8%] sm:left-[20%]", color: "yellow", delay: 4 },
                                { icon: <Shield size={20} />, label: "Vault", pos: "top-1/2 left-[2%] sm:left-[10%] -translate-y-1/2", color: "red", delay: 3 },
                            ].map((app, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, scale: 0 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: app.delay * 0.1 }}
                                    className={`absolute ${app.pos} z-10`}
                                >
                                    <div className="flex flex-col items-center group/app cursor-pointer">
                                        <div className={`h-12 w-12 md:h-16 md:w-16 bg-slate-900/90 backdrop-blur-md rounded-xl md:rounded-2xl border-2 border-${app.color}-500/30 flex items-center justify-center text-${app.color}-500 shadow-xl group-hover/app:border-${app.color}-500 group-hover/app:scale-110 transition-all duration-300`}>
                                            <div className="scale-75 md:scale-100">{app.icon}</div>
                                        </div>
                                        <span className="text-[7px] md:text-[9px] font-black text-slate-500 uppercase mt-1.5 md:mt-2 tracking-widest group-hover/app:text-white transition-colors">{app.label}</span>
                                    </div>
                                </motion.div>
                            ))}

                            {/* Floating Micro-data points */}
                            <DataPoints />
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. TEAM SYNERGY: THE UNIQUE CREATIVE SECTION (WHITE THEME) */}
            <section className="py-12 md:py-20 bg-white text-slate-950 overflow-hidden relative">
                {/* Unique Canvas Design */}
                <div className="absolute inset-0 opacity-[0.05] pointer-events-none">
                    <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                            <pattern id="grid-synergy" width="40" height="40" patternUnits="userSpaceOnUse">
                                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#0f172a" strokeWidth="0.5" />
                            </pattern>
                        </defs>
                        <rect width="100%" height="100%" fill="url(#grid-synergy)" />
                    </svg>
                </div>

                <div className="container mx-auto px-6 md:px-12 lg:px-24 relative z-10 flex flex-col items-center">
                    <motion.div
                        initial={{ y: 50, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        className="text-center max-w-4xl"
                    >
                        <Logo3D />
                        <h2 className="mt-8 md:mt-12 text-3xl md:text-5xl font-[1000] tracking-wide leading-none mb-4">
                            TEAM <span className="text-blue-600">SYNERGY</span> <br className="hidden md:block" />
                            <span className="text-transparent border-b-4 border-red-500" style={{ WebkitTextStroke: '2px #0f172a' }}>CORE.</span>
                        </h2>

                        <p className="text-slate-400 mt-6 md:mt-8 text-lg md:text-xl max-w-2xl mx-auto font-black uppercase tracking-widest leading-relaxed">
                            The first task engine that visualizes team "Gravity". Stay aligned, stay fast.
                        </p>

                    </motion.div>

                    <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-12 w-full max-w-6xl">
                        {[
                            { title: "Real-time Presence", icon: <Users size={40} />, colorTheme: "text-blue-600", bgOverlay: "bg-gradient-to-br from-indigo-900 via-blue-800 to-blue-600", glow: "0 30px 60px -15px rgba(37,99,235,0.6)" },
                            { title: "Dynamic Threads", icon: <MessageSquare size={40} />, colorTheme: "text-rose-600", bgOverlay: "bg-gradient-to-br from-rose-900 via-rose-700 to-red-500", glow: "0 30px 60px -15px rgba(225,29,72,0.6)" },
                            { title: "Smart Mentions", icon: <Search size={40} />, colorTheme: "text-amber-500", bgOverlay: "bg-gradient-to-br from-amber-600 via-yellow-500 to-yellow-400", glow: "0 30px 60px -15px rgba(217,119,6,0.5)" }
                        ].map((item, i) => (
                            <motion.div
                                key={item.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                                whileHover={{
                                    y: -20,
                                    scale: 1.05,
                                    rotateX: 5,
                                    rotateY: i === 0 ? 10 : i === 2 ? -10 : 0,
                                    boxShadow: item.glow
                                }}
                                className="group p-10 md:p-12 rounded-[32px] md:rounded-[48px] flex flex-col items-center text-center transition-all cursor-pointer overflow-hidden relative shadow-[0_10px_40px_rgba(0,0,0,0.05)] bg-white border border-slate-100"
                            >
                                {/* Dynamic Gradient Full Overlay on Hover */}
                                <div className={`absolute inset-0 ${item.bgOverlay} opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none`} />

                                {/* Ambient Hover Flare */}
                                <div className="absolute top-0 left-[-100%] w-[50%] h-[200%] bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-[30deg] group-hover:left-[200%] transition-all duration-1000 ease-out z-0" />

                                {/* Icon Container */}
                                <motion.div
                                    whileHover={{ scale: 1.2, rotate: [0, -10, 10, -10, 0] }}
                                    transition={{ duration: 0.6 }}
                                    className={`mb-8 relative z-10 p-5 rounded-3xl backdrop-blur-md transition-colors duration-500 ${item.colorTheme} bg-slate-50 border border-slate-100 shadow-[0_4px_20px_rgba(0,0,0,0.03)] group-hover:bg-white/10 group-hover:text-white group-hover:border-white/20 group-hover:shadow-inner`}
                                >
                                    {item.icon}
                                </motion.div>

                                {/* Title */}
                                <h4 className="text-2xl md:text-[28px] font-[1000] mb-4 relative z-10 leading-tight transition-colors duration-500 text-slate-900 group-hover:text-white">
                                    {item.title}
                                </h4>
                                
                                {/* Subtitle */}
                                <p className="text-[10px] md:text-[11px] font-black uppercase tracking-[0.2em] relative z-10 transition-colors duration-500 text-slate-400 group-hover:text-white/80">
                                    Proprietary AI Interaction
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 5. PERFORMANCE PULSAR: ANALYTICS (BLACK/WHITE/BLUE) */}
            <section className="py-12 md:py-20 px-6 lg:px-24 bg-white">
                <div className="container mx-auto grid lg:grid-cols-2 gap-20 items-center">
                    <div>

                        <h2 className="text-3xl md:text-6xl font-black mt-4 mb-8">Performance <br /><span className="text-blue-600">Redefined.</span></h2>
                        <div className="h-1 w-24 bg-gradient-to-r from-blue-600 via-red-500 to-yellow-400 rounded-full mx-auto my-6" />
                        <div className="space-y-8">
                            <div className="flex gap-6 items-start">
                                <div className="h-12 w-12 rounded-2xl bg-slate-900 text-white flex items-center justify-center shrink-0">
                                    <BarChart3 size={24} />
                                </div>
                                <div>
                                    <h4 className="text-lg font-black text-slate-900">Deep Analytics</h4>
                                    <p className="text-slate-500 text-sm font-medium mt-1">Every click, every task move, every deadline hit is tracked in high-resolution.</p>
                                </div>
                            </div>
                            <div className="flex gap-6 items-start">
                                <div className="h-12 w-12 rounded-2xl bg-yellow-500 text-slate-950 flex items-center justify-center shrink-0">
                                    <Maximize2 size={24} />
                                </div>
                                <div>
                                    <h4 className="text-lg font-black text-slate-900">Drill-Down Reports</h4>
                                    <p className="text-slate-500 text-sm font-medium mt-1">Identify bottlenecks before they choke your funnel. Exportable in one click.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        className="relative lg:pl-10"
                    >
                        <AnalyticsVisual />
                        <div className="absolute -bottom-6 -left-6 bg-red-500 text-white px-6 py-4 rounded-3xl shadow-2xl z-20">
                            <p className="text-[10px] font-black uppercase mb-1">Alert</p>
                            <p className="text-sm font-black">Resource Overload!</p>
                        </div>
                    </motion.div>
                </div>
            </section>
            {/* 6. RESOURCE MASTERY: NEURAL CONNECT (NEAT BLUE THEME) */}
            <section className="py-12 md:py-20 bg-[#f0f7ff] px-6 lg:px-24 overflow-hidden relative">
                <div className="container mx-auto relative z-10">
                    <div className="text-center mb-16">
                        <span className="text-xs md:text-sm font-black uppercase text-blue-600 tracking-[0.3em]">Neural Pipeline Matrix</span>
                        <h2 className="text-4xl md:text-6xl font-[1000] text-slate-900 tracking-wide leading-none mb-4">
                            Resource <span className="text-[#4a56e2]">Dynamics.</span>
                        </h2>
                        <div className="h-1 w-24 bg-gradient-to-r from-blue-600 via-red-500 to-yellow-400 rounded-full mx-auto my-6" />
                    </div>

                    <div className="relative">
                        {/* THE STEP CONNECTORS (SOLID DOTS FROM IMAGE) */}
                        <div className="absolute top-1/2 left-0 right-0 h-1 hidden lg:flex items-center justify-around -translate-y-1/2 z-0 px-20">
                            {[...Array(6)].map((_, i) => (
                                <div key={i} className="flex gap-4 opacity-20">
                                    <div className="h-3 w-3 rounded-full bg-blue-400" />
                                    <div className="h-3 w-3 rounded-full bg-blue-400" />
                                    <div className="h-3 w-3 rounded-full bg-blue-400" />
                                </div>
                            ))}
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative z-20">
                            {[
                                { name: "Arjun Rao", role: "Logic Architect", load: "92%", color: "bg-gradient-to-b from-[#4a56e2] to-[#3b82f6]", status: "Critical" },
                                { name: "Karthik M", role: "Interface Lead", load: "45%", color: "bg-gradient-to-b from-[#5c67f2] to-[#4a56e2]", status: "Fluid" },
                                { name: "Priya Singh", role: "Neural Spec", load: "78%", color: "bg-gradient-to-b from-[#3b82f6] to-[#2563eb]", status: "Active" },
                                { name: "Sanya K", role: "Data Flow", load: "12%", color: "bg-gradient-to-b from-[#5c67f2] to-[#3b82f6]", status: "Idle" }
                            ].map((user, idx) => (
                                <motion.div
                                    key={user.name}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: idx * 0.1, duration: 0.8 }}
                                    className="group"
                                >
                                    {/* The Card - SOLID VERSION */}
                                    <div className={`relative ${user.color} p-10 rounded-[32px] shadow-[0_30px_60px_rgba(74,86,226,0.15)] group-hover:-translate-y-4 transition-all duration-500 overflow-hidden min-h-[400px] flex flex-col`}>

                                        {/* Subtle pattern overlay */}
                                        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(white 1.5px, transparent 1.5px)', backgroundSize: '15px 15px' }} />

                                        <div className="relative z-10 flex flex-col h-full">
                                            {/* Floating Mini Character Wrapper - MOVED TO TOP LEFT */}
                                            <div className="absolute top-2 left-2 h-10 w-10 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-md border border-white/20">
                                                <div className="h-4 w-4 bg-white rounded flex items-center justify-center">
                                                    <div className="h-1 w-2 bg-blue-600 rounded-[1px]" />
                                                </div>
                                            </div>

                                            <div className="mb-auto mt-12">
                                                <h4 className="text-xl font-black text-white uppercase tracking-wide mb-1">{user.name}</h4>
                                                <p className="text-[10px] font-bold text-white/60 tracking-widest">{user.role}</p>
                                            </div>

                                            {/* Visual Load Indicator (Neat Version) */}
                                            <div className="mt-12 bg-white/10 rounded-3xl p-6 backdrop-blur-sm border border-white/10">
                                                <div className="flex justify-between items-end mb-4">
                                                    <span className="text-[9px] font-black text-white/50 uppercase">Neural Load</span>
                                                    <span className="text-xl font-black text-white">{user.load}</span>
                                                </div>

                                                <div className="h-2 w-full bg-white/20 rounded-full overflow-hidden mb-6">
                                                    <motion.div
                                                        initial={{ width: 0 }}
                                                        whileInView={{ width: user.load }}
                                                        transition={{ duration: 1.5, ease: "easeOut" }}
                                                        className="h-full bg-white shadow-[0_0_15px_rgba(255,255,255,0.5)]"
                                                    />
                                                </div>

                                                <div className="flex items-center gap-2">
                                                    <div className={`h-2 w-2 rounded-full ${user.status === 'Critical' ? 'bg-red-400' : 'bg-green-400'} animate-pulse`} />
                                                    <span className="text-[9px] font-black text-white/80 uppercase tracking-widest">{user.status} Pulse</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* 7. SENTINEL SECURITY HUB: PRIVACY & COMPLIANCE (ULTRA UNIQUE) */}
            <section className="py-12 md:py-20 bg-white text-slate-900 px-6 lg:px-24 relative overflow-hidden">
                {/* 1. NEURAL LATTICE BACKGROUND (Subtle Tech Pattern) */}
                <div className="absolute inset-0 pointer-events-none opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#4a56e2 0.5px, transparent 0.5px)', backgroundSize: '30px 30px' }} />
                <div className="absolute top-0 left-0 right-0 h-64 bg-gradient-to-b from-blue-50/50 to-transparent" />

                <div className="container mx-auto relative z-10">
                    {/* Header: The Authority Statement */}
                    <div className="flex flex-col items-center mb-16">
                        <span className="text-xs md:text-sm font-black uppercase text-blue-600 tracking-[0.3em]">SENTINEL PROTOCOL ACTIVE</span>
                        <h2 className="text-5xl md:text-6xl font-[1000] text-slate-950 tracking-wide leading-none text-center mb-5">
                            Fortified by <span className="text-[#4a56e2]">Innovation.</span>
                        </h2>
                        <div className="h-1 w-24 bg-gradient-to-r from-blue-600 via-red-500 to-yellow-400 rounded-full" />
                    </div>



                    {/* SECURITY PROTOCOL GRID (Modular Cards) */}
                    <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">
                        {[
                            { title: "Vault Isolation", icon: LucideLock, theme: "text-blue-600", color: "bg-blue-600", desc: "Military-grade segmenting for every project instance." },
                            { title: "Immutable Trails", icon: ShieldCheck, theme: "text-red-500", color: "bg-red-500", desc: "Cryptographic logging of every action across the system." },
                            { title: "Lattice Support", icon: Layers, theme: "text-yellow-500", color: "bg-yellow-400", desc: "Cross-platform security bridging for multi-unit clusters." }
                        ].map((protocol, i) => (
                            <motion.div
                                key={protocol.title}
                                initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                className="group relative"
                            >
                                <div className="absolute -inset-4 bg-slate-50/50 rounded-[40px] opacity-0 group-hover:opacity-100 transition-opacity" />
                                <div className="relative p-10 border-l-4 border-slate-100 group-hover:border-blue-500 transition-colors">
                                    <div className={`mb-8 ${protocol.theme}`}>
                                        <protocol.icon size={32} />
                                    </div>
                                    <h4 className="text-2xl font-black text-slate-950 mb-4 uppercase tracking-wide">{protocol.title}</h4>
                                    <p className="text-slate-500 text-sm font-medium leading-relaxed mb-8">{protocol.desc}</p>

                                    {/* Protocol Status Line */}
                                    <div className="flex items-center gap-4">
                                        <div className="flex-1 h-1.5 bg-slate-100 rounded-full overflow-hidden">
                                            <motion.div
                                                initial={{ width: 0 }}
                                                whileInView={{ width: '100%' }}
                                                transition={{ duration: 2, delay: 0.5 }}
                                                className={`h-full ${protocol.color}`}
                                            />
                                        </div>
                                        <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest italic">Encrypted</span>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
            {/* 8. EXECUTIVE INTELLIGENCE & MISSION CONTROL (ULTRA-NEAT WHITE THEME) */}
            <section className="pt-8 pb-16 md:pt-12 md:pb-32 bg-white px-6 lg:px-24">
                <div className="container mx-auto">
                    {/* Section Header */}
                    <div className="flex flex-col items-center mb-12 md:mb-20">
                        <span className="text-xs md:text-sm font-black uppercase text-blue-600 tracking-[0.3em]">Execute with Authority</span>
                        <h2 className="text-4xl md:text-6xl font-[1000] text-slate-950 tracking-wide text-center">Strategic <span className="text-blue-600">Intelligence.</span></h2>
                        <div className="h-1 w-24 bg-gradient-to-r from-blue-600 via-red-500 to-yellow-400 rounded-full mx-auto my-6" />
                    </div>

                    {/* DASHBOARD TOP ROW (STAT CARDS) */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                        {[
                            { label: "Active Pipelines", val: "45/76", color: "bg-blue-600", progress: 60 },
                            { label: "Converted Leads", val: "48/86", color: "bg-yellow-500", progress: 55 },
                            { label: "Neural Projects", val: "16/20", color: "bg-red-500", progress: 80 },
                            { label: "System Sync Rate", val: "46.59%", color: "bg-blue-500", progress: 46 }
                        ].map((stat, i) => (
                            <div key={i} className="p-8 rounded-[32px] bg-white border border-slate-100 shadow-sm hover:shadow-xl transition-all group">
                                <div className="flex justify-between items-start mb-6">
                                    <div className={`h-10 w-10 rounded-xl ${stat.color}/10 flex items-center justify-center text-slate-900`}>
                                        <Activity size={18} />
                                    </div>
                                    <MoreVertical size={16} className="text-slate-300" />
                                </div>
                                <h4 className="text-3xl font-[1000] text-slate-950 mb-1">{stat.val}</h4>
                                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-6">{stat.label}</p>
                                <div className="h-1 w-full bg-slate-50 rounded-full overflow-hidden">
                                    <motion.div
                                        initial={{ width: 0 }}
                                        whileInView={{ width: `${stat.progress}%` }}
                                        transition={{ duration: 1.5, delay: i * 0.1 }}
                                        className={`h-full ${stat.color}`}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* CENTER DASHBOARD GRID */}
                    <div className="grid lg:grid-cols-[2.2fr_1fr] gap-8 mb-8">
                        {/* LEFT: MAIN TASK VELOCITY CHART */}
                        <div className="p-10 rounded-[48px] bg-white border border-slate-100 shadow-sm relative overflow-hidden">
                            <div className="flex justify-between items-center mb-12 relative z-10">
                                <h3 className="text-xl font-black text-slate-950 uppercase tracking-wide">Task Velocity Record</h3>
                                <div className="h-8 w-8 rounded-full bg-slate-50 flex items-center justify-center text-slate-400">
                                    <Filter size={14} />
                                </div>
                            </div>

                            {/* Bar Chart Area with Spline & Grid */}
                            <div className="h-80 relative mb-10 px-4 flex items-end justify-between gap-3">
                                {/* Horizontal Grid Lines */}
                                <div className="absolute inset-0 flex flex-col justify-between py-2 pointer-events-none opacity-50">
                                    {[70, 60, 50, 40, 30, 20, 10, 0].map((val) => (
                                        <div key={val} className="flex items-center gap-4 w-full">
                                            <span className="text-[8px] font-bold text-slate-300 w-6">{val}K</span>
                                            <div className="flex-1 h-[1px] bg-slate-50" />
                                        </div>
                                    ))}
                                </div>

                                {/* The Spline Line */}
                                <svg className="absolute inset-0 w-full h-full pointer-events-none z-20" preserveAspectRatio="none">
                                    <motion.path
                                        d="M 40 200 C 100 80, 200 150, 300 50 S 500 150, 600 100 T 1000 120"
                                        fill="none"
                                        stroke="#cbd5e1"
                                        strokeWidth="1.5"
                                        initial={{ pathLength: 0 }}
                                        whileInView={{ pathLength: 1 }}
                                        transition={{ duration: 2.5 }}
                                    />
                                </svg>

                                {/* Bars */}
                                {[60, 40, 75, 55, 90, 45, 70, 50, 85, 40, 65, 55].map((h, i) => (
                                    <div key={i} className="flex-1 flex flex-col items-center gap-4 group/bar relative z-10 h-full justify-end">
                                        {/* Background Pillar */}
                                        <div className="absolute bottom-10 w-full bg-slate-50 rounded-t-lg transition-all h-[90%]" />

                                        {/* Colored Foreground Bar */}
                                        <motion.div
                                            initial={{ height: 0 }}
                                            whileInView={{ height: `${h}%` }}
                                            transition={{ duration: 1.5, delay: i * 0.05 }}
                                            className={`w-[60%] rounded-t-lg relative z-10 ${i % 3 === 0 ? 'bg-blue-600' : i % 3 === 1 ? 'bg-red-500' : 'bg-yellow-400'} shadow-lg`}
                                        />
                                        <span className="text-[9px] font-black text-slate-300 uppercase relative z-10">{['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'][i]}</span>
                                    </div>
                                ))}
                            </div>

                            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 border-t border-slate-50 pt-8">
                                {[
                                    { label: "Avg Load", val: "$5,486", color: "bg-blue-600" },
                                    { label: "Completed", val: "$9,275", color: "bg-yellow-500" },
                                    { label: "Rejected", val: "$3,868", color: "bg-red-500" },
                                    { label: "Revenue", val: "$50,668", color: "bg-slate-900" }
                                ].map((stat) => (
                                    <div key={stat.label}>
                                        <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-1">{stat.label}</p>
                                        <p className="text-sm md:text-lg font-black text-slate-950">{stat.val}</p>
                                        <div className={`h-1 w-12 ${stat.color} mt-2 rounded-full`} />
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* RIGHT: PROJECT ROSTER */}
                        <div className="flex flex-col gap-6">
                            <div className="rounded-[40px] bg-blue-600 text-white p-10 relative overflow-hidden flex flex-col justify-between min-h-[320px]">
                                <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-32 -mt-32" />
                                <div className="relative z-10">
                                    <div className="flex justify-between items-center mb-6">
                                        <h3 className="text-5xl font-[1000] tracking-wide">30,569</h3>
                                        <div className="px-2 py-1 bg-white/20 rounded-md text-[8px] font-black">12% </div>
                                    </div>
                                    <p className="text-blue-100 text-xs font-bold uppercase tracking-widest opacity-60">Total Units Processed</p>
                                </div>
                                <div className="relative h-24 w-full mt-6">
                                    <svg viewBox="0 0 400 100" className="w-full h-full">
                                        <motion.path
                                            d="M0 80 Q50 20 100 80 T200 80 T300 20 T400 80"
                                            fill="none"
                                            stroke="white"
                                            strokeWidth="6"
                                            strokeLinecap="round"
                                            initial={{ pathLength: 0 }}
                                            whileInView={{ pathLength: 1 }}
                                            transition={{ duration: 2.5, ease: "easeInOut" }}
                                        />
                                    </svg>
                                </div>
                            </div>

                            <div className="p-10 rounded-[40px] bg-white border border-slate-100 shadow-sm">
                                <div className="space-y-6">
                                    {[
                                        { name: "Global Store", id: "Shopify Store", val: "$1,200", color: "bg-blue-600" },
                                        { name: "Interface v2", id: "iOS App Dev", val: "$1,450", color: "bg-red-500" },
                                        { name: "Logic Engine", id: "Figma Dash", val: "$1,250", color: "bg-yellow-400" }
                                    ].map((project) => (
                                        <div key={project.name} className="flex items-center justify-between group">
                                            <div className="flex items-center gap-4">
                                                <div className={`h-12 w-12 rounded-2xl ${project.color} flex items-center justify-center text-white shadow-lg`}>
                                                    <Layers size={20} />
                                                </div>
                                                <div>
                                                    <h5 className="text-sm font-black text-slate-900">{project.name}</h5>
                                                    <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">{project.id}</p>
                                                </div>
                                            </div>
                                            <div className="text-right">
                                                <p className="text-sm font-black text-slate-900">{project.val}</p>
                                            </div>
                                        </div>
                                    ))}
                                    <button className="w-full py-4 mt-4 text-[10px] font-black uppercase text-slate-400 border border-dashed border-slate-200 rounded-2xl hover:bg-slate-50 hover:text-slate-900 transition-all">
                                        View Full Details
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* BOTTOM ROW (WAVE CHARTS) */}
                    <div className="grid md:grid-cols-3 gap-6">
                        {[
                            { label: "Tasks Completed", count: "22/35", color: "stroke-blue-600", fill: "fill-blue-50/40" },
                            { label: "New Tasks", count: "5/20", color: "stroke-yellow-500", fill: "fill-yellow-50/40" },
                            { label: "Project Done", count: "20/30", color: "stroke-red-500", fill: "fill-red-50/40" }
                        ].map((chart, i) => (
                            <div key={i} className="p-10 rounded-[48px] bg-white border border-slate-100 relative overflow-hidden group hover:shadow-xl transition-all">
                                <div className="relative z-10 flex justify-between items-start mb-12">
                                    <div>
                                        <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">{chart.label}</p>
                                        <p className="text-3xl font-[1000] text-slate-950">{chart.count}</p>
                                    </div>
                                    <div className="h-8 w-8 rounded-full bg-slate-50 flex items-center justify-center">
                                        <Activity size={14} className="text-slate-300" />
                                    </div>
                                </div>
                                <div className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none">
                                    <svg viewBox="0 0 400 100" className="w-full h-full preserve-3d" preserveAspectRatio="none">
                                        <path
                                            d="M0 100 C 50 20, 150 20, 200 60 S 350 20, 400 60 L 400 100 L 0 100 Z"
                                            className={`${chart.fill} transition-all duration-700 opacity-60`}
                                        />
                                        <motion.path
                                            d="M0 100 C 50 20, 150 20, 200 60 S 350 20, 400 60"
                                            fill="none"
                                            className={chart.color}
                                            strokeWidth="4"
                                            strokeLinecap="round"
                                            initial={{ pathLength: 0 }}
                                            whileInView={{ pathLength: 1 }}
                                            transition={{ duration: 2, delay: i * 0.3 }}
                                        />
                                    </svg>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <DemoRequestModal isOpen={isDemoOpen} onClose={() => setIsDemoOpen(false)} />
        </div>
    );
}

// Custom Unique Creative Component: 3D-like Logo interaction
function Logo3D() {
    return (
        <div className="relative h-32 w-32 mx-auto">
            <motion.div
                animate={{ rotateZ: 360 }}
                transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-0 border-4 border-blue-500 rounded-[30%] opacity-50"
            />
            <motion.div
                animate={{ rotateZ: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-0 border-4 border-red-500 rounded-[30%] opacity-50 scale-110"
            />
            <motion.div
                animate={{ rotateZ: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-0 border-4 border-yellow-500 rounded-[30%] opacity-50 scale-125"
            />
            <div className="absolute inset-0 flex items-center justify-center">
                <Layers size={40} className="text-white" />
            </div>
        </div>
    );
}

