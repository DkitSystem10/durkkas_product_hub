"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    ArrowRight,
    Sparkles,
    Shield,
    Cpu,
    Globe,
    Zap,
    LayoutDashboard,
    Database,
    Cloud
} from "lucide-react";

const AntigravityHero = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setMousePosition({
                x: (e.clientX / window.innerWidth - 0.5) * 40,
                y: (e.clientY / window.innerHeight - 0.5) * 40,
            });
        };
        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    const floatingElements = [
        { icon: LayoutDashboard, label: "CRM Hub", color: "blue", x: -200, y: -150, delay: 0 },
        { icon: Database, label: "Cloud DB", color: "purple", x: 250, y: -100, delay: 0.5 },
        { icon: Shield, label: "Secure", color: "cyan", x: -250, y: 150, delay: 1 },
        { icon: Cpu, label: "AI Core", color: "indigo", x: 280, y: 180, delay: 0.7 },
        { icon: Cloud, label: "Hybrid", color: "violet", x: 0, y: 250, delay: 1.2 },
    ];

    const particles = Array.from({ length: 25 }).map((_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 4 + 1,
        duration: Math.random() * 10 + 10,
    }));

    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0A0F1D] py-20 lg:py-0">

            {/* Ambient Background Gradients */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-[-10%] left-[-5%] w-[60%] h-[60%] bg-blue-600/10 rounded-full blur-[120px] animate-pulse" />
                <div className="absolute bottom-[-10%] right-[-5%] w-[50%] h-[50%] bg-purple-600/10 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '2s' }} />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40%] h-[40%] bg-indigo-600/5 rounded-full blur-[100px]" />
            </div>

            {/* Grid Overlay */}
            <div className="absolute inset-0 z-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

            {/* Floating Particles */}
            {particles.map((p) => (
                <motion.div
                    key={p.id}
                    className="absolute rounded-full bg-white/20 blur-[1px]"
                    style={{
                        left: `${p.x}%`,
                        top: `${p.y}%`,
                        width: p.size,
                        height: p.size,
                    }}
                    animate={{
                        y: [0, -40, 0],
                        opacity: [0.2, 0.5, 0.2],
                    }}
                    transition={{
                        duration: p.duration,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                />
            ))}

            <div className="container mx-auto px-6 relative z-10 flex flex-col items-center">

                {/* 3D PARALLAX CONTAINER */}
                <motion.div
                    style={{
                        rotateX: -mousePosition.y * 0.1,
                        rotateY: mousePosition.x * 0.1,
                    }}
                    className="relative flex flex-col items-center w-full"
                >

                    {/* TOP BADGE */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-xl mb-10 shadow-2xl shadow-blue-500/10"
                    >
                        <Sparkles size={14} className="text-blue-400" />
                        <span className="text-xs md:text-sm font-bold text-blue-100 tracking-widest uppercase">The Future of Enterprise Hubs</span>
                    </motion.div>

                    {/* MAIN HEADLINE */}
                    <div className="text-center max-w-5xl mx-auto mb-10">
                        <motion.h1
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1, ease: 'easeOut' }}
                            className="text-5xl md:text-7xl lg:text-[92px] font-black text-white leading-[1.05] tracking-tighter mb-8"
                        >
                            Next-Gen <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400">
                                Digital Ecosystem
                            </span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 0.7 }}
                            transition={{ duration: 1, delay: 0.3 }}
                            className="text-lg md:text-2xl text-blue-100/70 max-w-3xl mx-auto px-4 leading-relaxed font-medium"
                        >
                            Orchestrate your entire business landscape with antigravity precision.
                            Unified CRM, HRMS, and EMS workflows in a single, high-performance workspace.
                        </motion.p>
                    </div>

                    {/* CTA SECTION */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                        className="flex flex-col sm:flex-row gap-6 mb-20"
                    >
                        <button className="relative group px-10 py-5 bg-blue-600 rounded-2xl overflow-hidden shadow-2xl shadow-blue-600/40 transition-all hover:scale-105 active:scale-95">
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                            <span className="relative z-10 text-white font-bold flex items-center gap-3">
                                Start Your Journey
                                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                            </span>
                        </button>
                        <button className="px-10 py-5 bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl text-white font-bold hover:bg-white/10 transition-all">
                            View Roadmap
                        </button>
                    </motion.div>

                    {/* FLOATING GLASSMORTHISM CARDS */}
                    <div className="absolute inset-0 pointer-events-none hidden lg:block">
                        {floatingElements.map((el, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, x: el.x, y: el.y + 50 }}
                                animate={{
                                    opacity: 1,
                                    x: el.x + mousePosition.x * (idx + 1) * 0.1,
                                    y: el.y + mousePosition.y * (idx + 1) * 0.1 + Math.sin(Date.now() / 2000 + idx) * 20
                                }}
                                transition={{
                                    duration: 0.5,
                                    delay: el.delay,
                                    y: {
                                        duration: 4,
                                        repeat: Infinity,
                                        ease: "easeInOut"
                                    }
                                }}
                                className="absolute top-1/2 left-1/2"
                            >
                                <div className="p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-2xl flex flex-col items-center gap-3 min-w-[140px] shadow-2xl">
                                    <div className={`w-12 h-12 rounded-xl bg-${el.color}-500/20 flex items-center justify-center text-${el.color}-400 border border-${el.color}-500/30`}>
                                        <el.icon size={24} />
                                    </div>
                                    <span className="text-white/80 font-bold text-sm">{el.label}</span>

                                    {/* Subtle Ambient Glow behind card */}
                                    <div className={`absolute inset-0 -z-10 bg-${el.color}-500/5 blur-2xl rounded-full`} />
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* BOTTOM STATUS ROW */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1 }}
                        className="flex flex-wrap justify-center gap-12 mt-10 md:mt-20 opacity-40 border-t border-white/5 pt-10 w-full"
                    >
                        <div className="flex items-center gap-3">
                            <Globe size={18} className="text-blue-400" />
                            <span className="text-xs font-black text-blue-100 uppercase tracking-[0.2em]">Global Edge Network</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <Zap size={18} className="text-indigo-400" />
                            <span className="text-xs font-black text-blue-100 uppercase tracking-[0.2em]">Instant Deployment</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <Shield size={18} className="text-purple-400" />
                            <span className="text-xs font-black text-blue-100 uppercase tracking-[0.2em]">Zero Trust Core</span>
                        </div>
                    </motion.div>

                </motion.div>
            </div>

            {/* Bottom Glow */}
            <div className="absolute bottom-0 left-0 w-full h-[30%] bg-gradient-to-t from-[#0A0F1D] to-transparent z-10" />

        </section>
    );
};

export default AntigravityHero;
