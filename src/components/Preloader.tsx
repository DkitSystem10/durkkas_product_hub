"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';
import Logo from './Logo';
import FloatingRobot from './FloatingRobot';

const Preloader = () => {
    const pathname = usePathname();
    const [isLoading, setIsLoading] = useState(true);
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        // High-end progress ticker simulation
        const interval = setInterval(() => {
            setProgress(prev => {
                if (prev >= 100) {
                    clearInterval(interval);
                    return 100;
                }
                const increment = Math.floor(Math.random() * 15) + 5;
                return Math.min(prev + increment, 100);
            });
        }, 150);

        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 4500);

        return () => {
            clearInterval(interval);
            clearTimeout(timer);
        };
    }, []);

    // Only run on homepage (placed after hooks to follow React rules)
    if (pathname !== '/') return null;

    return (
        <AnimatePresence>
            {isLoading && (
                <motion.div
                    initial={{ opacity: 1 }}
                    exit={{
                        opacity: 0,
                        y: -20,
                        transition: { duration: 1, ease: [0.76, 0, 0.24, 1] }
                    }}
                    className="fixed inset-0 z-[999] bg-[#020617] flex flex-col items-center justify-center overflow-hidden"
                >
                    {/* 1. Deep Space Mesh Gradient Background */}
                    <div className="absolute inset-0 z-0">
                        <motion.div
                            animate={{
                                scale: [1, 1.2, 1],
                                x: [0, 50, 0],
                                y: [0, 30, 0]
                            }}
                            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                            className="absolute -top-1/2 -right-1/4 w-[100%] h-[100%] bg-blue-600/10 rounded-full blur-[120px]"
                        />
                        <motion.div
                            animate={{
                                scale: [1.2, 1, 1.2],
                                x: [0, -40, 0],
                                y: [0, -20, 0]
                            }}
                            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                            className="absolute -bottom-1/2 -left-1/4 w-[100%] h-[100%] bg-cyan-600/10 rounded-full blur-[120px]"
                        />
                    </div>

                    {/* 2. Main Content Container */}
                    <div className="relative z-10 flex flex-col items-center">

                        {/* Staggered Entry for Robot */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                        >
                            <FloatingRobot />
                        </motion.div>

                        {/* Logo with Typewriter */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5, duration: 1 }}
                        >
                            <Logo
                                className="text-5xl md:text-8xl lg:text-[100px]"
                                animate={true}
                                color="dynamic"
                            />
                        </motion.div>

                        {/* 3. Premium Progress Ticker */}
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1, duration: 0.8 }}
                            className="mt-12 flex flex-col items-center gap-4"
                        >
                            <div className="flex items-center gap-6">
                                <div className="h-[1px] w-12 md:w-24 bg-gradient-to-r from-transparent to-blue-500/30" />
                                <div className="flex items-center gap-3">
                                    <span className="text-white/40 text-[10px] font-black tracking-[0.6em] uppercase">System Core</span>
                                    <span className="text-blue-400 font-mono text-sm w-12">{progress}%</span>
                                </div>
                                <div className="h-[1px] w-12 md:w-24 bg-gradient-to-l from-transparent to-blue-500/30" />
                            </div>

                            {/* Slim Progress Bar */}
                            <div className="w-64 h-[2px] bg-white/5 rounded-full overflow-hidden relative">
                                <motion.div
                                    initial={{ width: 0 }}
                                    animate={{ width: `${progress}%` }}
                                    className="absolute inset-y-0 left-0 bg-gradient-to-r from-blue-600 to-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.5)]"
                                />
                            </div>
                        </motion.div>
                    </div>

                    {/* 4. Glassmorphic Decorative Border (Visual Polish) */}
                    <div className="absolute inset-4 md:inset-8 border border-white/5 rounded-[40px] pointer-events-none" />
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default Preloader;
