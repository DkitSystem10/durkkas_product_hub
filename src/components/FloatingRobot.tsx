"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, Settings, Wrench, Shield, Zap } from 'lucide-react';

const FloatingRobot = () => {
    return (
        <div className="relative w-80 h-80 flex items-center justify-center mb-12">
            {/* 1. Sophisticated Core Glow Layer */}
            <motion.div
                animate={{
                    scale: [1, 1.4, 1],
                    opacity: [0.3, 0.6, 0.3],
                    rotate: [0, 90, 180, 270, 360]
                }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                className="absolute w-56 h-56 bg-gradient-to-tr from-blue-400/20 to-cyan-400/20 rounded-full blur-[80px]"
            />

            {/* 2. Glassmorphic Energy Rings */}
            <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="absolute w-64 h-64 border border-white/10 rounded-full flex items-center justify-center"
            >
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 bg-cyan-400 rounded-full shadow-[0_0_15px_rgba(34,211,238,1)]" />
            </motion.div>

            <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                className="absolute w-80 h-80 border border-white/5 rounded-full flex items-center justify-center"
            >
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-blue-500 rounded-full shadow-[0_0_12px_rgba(59,130,246,1)]" />
            </motion.div>

            {/* 3. Orbiting Module Bubbles (Stripe-Style High Quality) */}
            <div className="absolute inset-0 z-0">
                {/* CRM - Top Left */}
                <OrbitingElement delay={0} distance={130} duration={12}>
                    <GlassBubble icon={MessageSquare} color="from-blue-400 to-indigo-600" label="CRM" delay={0.2} />
                </OrbitingElement>

                {/* HRMS - Top Right */}
                <OrbitingElement delay={3} distance={140} duration={15}>
                    <GlassBubble icon={Shield} color="from-cyan-400 to-teal-500" label="HRMS" delay={0.5} />
                </OrbitingElement>

                {/* EMS - Bottom Center */}
                <OrbitingElement delay={7} distance={135} duration={18}>
                    <GlassBubble icon={Zap} color="from-purple-400 to-indigo-700" label="EMS" delay={0.8} />
                </OrbitingElement>
            </div>

            {/* 4. The Premium Robot Illustration */}
            <motion.div
                animate={{
                    y: [0, -25, 0],
                    rotate: [-1, 1, -1]
                }}
                transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
                className="relative z-10 w-48 h-48 drop-shadow-[0_25px_50px_rgba(0,0,0,0.1)]"
            >
                <svg viewBox="0 0 100 100" className="w-full h-full">
                    <defs>
                        <linearGradient id="robotMetal" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#f8fafc" />
                            <stop offset="50%" stopColor="#e2e8f0" />
                            <stop offset="100%" stopColor="#cbd5e1" />
                        </linearGradient>
                        <linearGradient id="faceVisor" x1="0%" y1="0%" x2="0%" y2="100%">
                            <stop offset="0%" stopColor="#1e293b" />
                            <stop offset="100%" stopColor="#0f172a" />
                        </linearGradient>
                        <linearGradient id="cyanInnerGlow" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#22d3ee" />
                            <stop offset="100%" stopColor="#06b6d4" />
                        </linearGradient>
                    </defs>

                    {/* Robot Ears */}
                    <rect x="22" y="40" width="8" height="15" rx="4" fill="#64748b" />
                    <rect x="70" y="40" width="8" height="15" rx="4" fill="#64748b" />

                    {/* Main Head Shell */}
                    <circle cx="50" cy="45" r="32" fill="url(#robotMetal)" />
                    <circle cx="50" cy="45" r="31.5" fill="none" stroke="white" strokeWidth="0.5" opacity="0.5" />

                    {/* The Visor (The 'Glass' look) */}
                    <rect x="30" y="32" width="40" height="26" rx="13" fill="url(#faceVisor)" />
                    <rect x="31" y="33" width="38" height="24" rx="12" fill="none" stroke="white" strokeWidth="0.5" opacity="0.1" />

                    {/* Eyes - Dynamic Pulse */}
                    <motion.rect
                        animate={{ opacity: [1, 0.5, 1], scale: [1, 1.1, 1] }}
                        transition={{ duration: 2.5, repeat: Infinity }}
                        x="40" y="40" width="6" height="8" rx="3" fill="#22d3ee"
                    />
                    <motion.rect
                        animate={{ opacity: [1, 0.5, 1], scale: [1, 1.1, 1] }}
                        transition={{ duration: 2.5, repeat: Infinity, delay: 0.2 }}
                        x="54" y="40" width="6" height="8" rx="3" fill="#22d3ee"
                    />

                    {/* Friendly Smile */}
                    <path d="M 45 52 Q 50 55 55 52" stroke="white" strokeWidth="1.5" fill="none" strokeLinecap="round" opacity="0.8" />

                    {/* Tech Details */}
                    <circle cx="68" cy="35" r="1.5" fill="#22d3ee" />
                    <path d="M 72 45 Q 75 55 60 58" stroke="#22d3ee" strokeWidth="2" fill="none" strokeLinecap="round" opacity="0.6" />
                    <circle cx="60" cy="58" r="2" fill="white" />

                    {/* Floating Body Connector */}
                    <circle cx="50" cy="78" r="5" fill="#94a3b8" />
                    <motion.circle
                        animate={{ scale: [1, 1.5, 1], opacity: [0.8, 0.3, 0.8] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        cx="50" cy="85" r="3" fill="#22d3ee"
                    />
                </svg>

                {/* Higher Quality Soft Shadow */}
                <motion.div
                    animate={{ scaleX: [1, 0.6, 1], opacity: [0.1, 0.05, 0.1] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-24 h-4 bg-[#0f172a] rounded-full blur-xl"
                />
            </motion.div>
        </div>
    );
};

// Helper Components for that 'Premium' feel
const OrbitingElement = ({ children, delay, distance, duration }: any) => (
    <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration, repeat: Infinity, ease: "linear", delay }}
        className="absolute inset-0 flex items-center justify-center p-2"
    >
        <div style={{ transform: `translateY(-${distance}px)` }}>
            <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration, repeat: Infinity, ease: "linear", delay }}
            >
                {children}
            </motion.div>
        </div>
    </motion.div>
);

const GlassBubble = ({ icon: Icon, color, label, delay = 0 }: any) => (
    <motion.div
        initial={{ opacity: 0, scale: 0, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ delay: 1 + delay, duration: 0.8, ease: [0.34, 1.56, 0.64, 1] }}
        whileHover={{ scale: 1.1 }}
        className="relative group cursor-default"
    >
        {/* Glow behind bubble */}
        <div className={`absolute inset-0 bg-gradient-to-br ${color} rounded-2xl blur-lg opacity-30 group-hover:opacity-60 transition-opacity`} />

        {/* The Bubble */}
        <div className="relative bg-white border border-blue-100 p-4 rounded-2xl shadow-[0_15px_30px_rgba(0,0,0,0.12)] flex items-center gap-3">
            <div className={`p-2 rounded-xl bg-gradient-to-br ${color} text-white shadow-md`}>
                <Icon size={20} />
            </div>
            <span className="text-[14px] font-black tracking-tight text-[#0f172a] uppercase">{label}</span>
        </div>
    </motion.div>
);

export default FloatingRobot;
