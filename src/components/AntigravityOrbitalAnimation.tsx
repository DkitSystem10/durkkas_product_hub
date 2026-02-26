"use client";

import React, { useMemo } from "react";
import { motion } from "framer-motion";

const modules = [
    "Career Guidance",
    "Report & Analytics",
    "B2B Sales",
    "Vendor Management",
    "Job Portal",
    "Partnership"
];

const AntigravityOrbitalAnimation = () => {
    // Generate particles for the background
    const particles = useMemo(() => {
        return Array.from({ length: 40 }).map((_, i) => ({
            id: i,
            x: Math.random() * 100,
            y: Math.random() * 100,
            size: Math.random() * 2 + 1,
            duration: Math.random() * 20 + 10,
            delay: Math.random() * 5,
        }));
    }, []);

    return (
        <div className="relative w-full h-[600px] md:h-[800px] flex items-center justify-center overflow-hidden bg-[#020617]">

            {/* Particles Background */}
            <div className="absolute inset-0 z-0">
                {particles.map((p) => (
                    <motion.div
                        key={p.id}
                        className="absolute rounded-full bg-blue-400/20"
                        style={{
                            left: `${p.x}%`,
                            top: `${p.y}%`,
                            width: p.size,
                            height: p.size,
                        }}
                        animate={{
                            opacity: [0.1, 0.4, 0.1],
                            scale: [1, 1.5, 1],
                        }}
                        transition={{
                            duration: p.duration,
                            repeat: Infinity,
                            delay: p.delay,
                            ease: "easeInOut",
                        }}
                    />
                ))}
            </div>

            {/* Ambient Glows */}
            <div className="absolute inset-0 z-0 flex items-center justify-center">
                <div className="w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] animate-pulse" />
                <div className="absolute w-[300px] h-[300px] bg-indigo-600/5 rounded-full blur-[100px]" style={{ animationDelay: '2s' }} />
            </div>

            {/* 3D Perspective Container */}
            <div className="relative z-10 w-full h-full flex items-center justify-center perspective-[1200px]">

                {/* Central Glowing Orb */}
                <motion.div
                    animate={{
                        scale: [1, 1.1, 1],
                        boxShadow: [
                            "0 0 40px rgba(59, 130, 246, 0.4)",
                            "0 0 80px rgba(59, 130, 246, 0.7)",
                            "0 0 40px rgba(59, 130, 246, 0.4)"
                        ]
                    }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="relative w-32 h-32 md:w-40 md:h-40 bg-gradient-to-br from-blue-400 to-blue-700 rounded-full flex items-center justify-center z-20 shadow-2xl"
                >
                    <div className="absolute inset-0 rounded-full bg-blue-400 blur-[20px] opacity-40 animate-pulse" />
                    <div className="relative w-full h-full rounded-full border border-white/20 overflow-hidden flex items-center justify-center">
                        <div className="w-16 h-16 md:w-20 md:h-20 text-white/90">
                            {/* Inner Orb Detail */}
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                <circle cx="12" cy="12" r="10" />
                                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                                <path d="M2 12h20" />
                            </svg>
                        </div>
                    </div>
                </motion.div>

                {/* Orbital Modules Container */}
                <motion.div
                    initial={{ rotateY: 0 }}
                    animate={{ rotateY: 360 }}
                    transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                    className="absolute w-full h-full preserve-3d"
                >
                    {modules.map((name, index) => {
                        const angle = (index / modules.length) * 360;
                        const radius = 350; // Orbital radius in pixels

                        return (
                            <div
                                key={name}
                                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 preserve-3d"
                                style={{
                                    transform: `rotateY(${angle}deg) translateZ(${radius}px)`,
                                }}
                            >
                                <motion.div
                                    animate={{
                                        rotateY: -360, // Counter-rotate to keep text facing forward roughly
                                        y: [0, -15, 0] // Floating effect
                                    }}
                                    transition={{
                                        rotateY: { duration: 30, repeat: Infinity, ease: "linear" },
                                        y: { duration: 4, repeat: Infinity, ease: "easeInOut", delay: index * 0.5 }
                                    }}
                                    className="px-6 py-3 md:px-8 md:py-4 bg-white/5 border border-white/10 backdrop-blur-xl rounded-2xl shadow-2xl group hover:bg-white/10 hover:border-blue-400/50 transition-all cursor-pointer whitespace-nowrap overflow-hidden relative"
                                >
                                    {/* Glassmorphism Shine */}
                                    <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                                    <span className="text-white md:text-xl font-bold tracking-tight relative z-10 flex items-center gap-3">
                                        <div className="w-2 h-2 rounded-full bg-blue-400 shadow-[0_0_10px_rgba(59,130,246,1)]" />
                                        {name}
                                    </span>

                                    {/* Light Trail Simulation (Static but styled to look like movement) */}
                                    <div className="absolute -left-1/2 top-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-500/30 to-transparent blur-[1px]" />
                                </motion.div>
                            </div>
                        );
                    })}
                </motion.div>

                {/* Additional Orbital Rings for Depth */}
                <div className="absolute w-[600px] h-[600px] border border-blue-500/10 rounded-full -rotate-x-60 pointer-events-none" />
                <div className="absolute w-[800px] h-[800px] border border-blue-500/5 rounded-full -rotate-x-60 pointer-events-none" />

            </div>

            <style jsx>{`
                .perspective-1200px {
                    perspective: 1200px;
                }
                .preserve-3d {
                    transform-style: preserve-3d;
                }
                .-rotate-x-60 {
                    transform: rotateX(60deg);
                }
            `}</style>
        </div>
    );
};

export default AntigravityOrbitalAnimation;
