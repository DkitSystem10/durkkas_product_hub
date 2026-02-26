"use client";

import React, { useEffect, useState } from "react";
import { motion, useTime, useTransform } from "framer-motion";

const modules = [
    "Career Guidance",
    "Report & Analytics",
    "B2B Sales",
    "Vendor Management",
    "Job Portal",
    "Partnership",
];

const FuturisticCircularCore = () => {
    const [mounted, setMounted] = useState(false);
    const time = useTime();

    useEffect(() => {
        setMounted(true);
    }, []);

    // Main rotation for the whole system
    const rotation = useTransform(time, [0, 20000], [0, 360], { clamp: false });
    const inverseRotation = useTransform(rotation, r => -r);

    // Floating particles background
    const particles = Array.from({ length: 30 }).map((_, i) => ({
        id: i,
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        size: Math.random() * 3 + 1,
        duration: Math.random() * 5 + 3,
    }));

    if (!mounted) return null;

    return (
        <div className="relative w-full h-screen bg-[#020617] flex items-center justify-center overflow-hidden font-sans">

            {/* Cinematic Camera Zoom Effect */}
            <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 3, ease: "easeOut" }}
                className="relative w-full h-full flex items-center justify-center"
            >

                {/* Ambient Subtle Particles */}
                {particles.map((p) => (
                    <motion.div
                        key={p.id}
                        className="absolute bg-white rounded-full opacity-20 blur-[1px]"
                        style={{
                            top: p.top,
                            left: p.left,
                            width: p.size,
                            height: p.size,
                        }}
                        animate={{
                            y: [0, -50, 0],
                            opacity: [0.1, 0.4, 0.1],
                        }}
                        transition={{
                            duration: p.duration,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                    />
                ))}

                {/* The Central Glowing Core */}
                <div className="relative z-10">
                    <motion.div
                        animate={{
                            scale: [1, 1.1, 1],
                            opacity: [0.6, 0.9, 0.6]
                        }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                        className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-blue-500/20 blur-2xl absolute inset-0"
                    />
                    <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full border border-blue-400/30 flex items-center justify-center bg-gradient-to-br from-blue-600/10 to-purple-600/10 backdrop-blur-3xl shadow-[0_0_50px_rgba(59,130,246,0.3)]">
                        <div className="w-4 h-4 rounded-full bg-blue-400 shadow-[0_0_20px_rgba(96,165,250,1)]" />
                    </div>

                    {/* Core Surface Glow */}
                    <div className="absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-white/10 to-transparent rounded-t-full pointer-events-none" />
                </div>

                {/* Rotating Text Modules */}
                <motion.div
                    style={{ rotate: rotation }}
                    className="absolute w-[600px] h-[600px] md:w-[750px] md:h-[750px] flex items-center justify-center"
                >
                    {modules.map((name, index) => {
                        const angle = (index / modules.length) * 360;
                        const radius = 280; // Distance from center

                        return (
                            <div
                                key={name}
                                className="absolute"
                                style={{
                                    transform: `rotate(${angle}deg) translate(${radius}px) rotate(${-angle}deg)`,
                                }}
                            >
                                {/* Antigravity Counter-Rotation to keep text upright */}
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.5 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: 0.1 * index + 1, duration: 1 }}
                                    style={{ rotate: inverseRotation }}
                                >
                                    <div className="relative group">
                                        {/* Text Container with Neon Mask */}
                                        <div className="px-8 py-3 rounded-full border border-white/5 bg-white/[0.02] backdrop-blur-md backdrop-saturate-200 shadow-2xl transition-all duration-500 hover:scale-110 hover:border-blue-500/30">
                                            <span className="text-xl md:text-2xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 drop-shadow-[0_0_10px_rgba(96,165,250,0.5)]">
                                                {name}
                                            </span>
                                        </div>

                                        {/* Subtle Motion Blur / Trail Effect (Simulated) */}
                                        <div className="absolute inset-0 -z-10 bg-blue-500/5 blur-xl group-hover:bg-blue-500/10 transition-all rounded-full" />
                                    </div>
                                </motion.div>
                            </div>
                        );
                    })}
                </motion.div>

                {/* Radial Depth Lines */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-10">
                    <div className="w-[560px] h-[560px] md:w-[700px] md:h-[700px] rounded-full border border-blue-400/20" />
                    <div className="w-[300px] h-[300px] rounded-full border border-blue-400/10" />
                </div>

            </motion.div>

            {/* Vignette Overlay for 3D depth */}
            <div className="absolute inset-0 shadow-[inset_0_0_150px_rgba(0,0,0,0.8)] pointer-events-none" />

        </div>
    );
};

export default FuturisticCircularCore;
