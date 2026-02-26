"use client";

import React from 'react';
import { Shield, Zap, Palette, Lock, Database, Globe, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

const FeaturesShowcase = () => {
    const features = [
        {
            icon: Shield,
            title: 'Bank-Grade Security',
            description: 'Zero-leakage tenant isolation with encrypted data storage.',
            bg: 'bg-blue-100',
            iconColor: 'text-blue-600',
            gradient: 'from-blue-500 to-cyan-400'
        },
        {
            icon: Zap,
            title: 'Infinite Scalability',
            description: 'Auto-scaling infrastructure handling millions of requests.',
            bg: 'bg-purple-100',
            iconColor: 'text-purple-600',
            gradient: 'from-purple-500 to-pink-400'
        },
        {
            icon: Palette,
            title: 'White-Label Ready',
            description: 'Fully customizable branding, logos, and domain mapping.',
            bg: 'bg-pink-100',
            iconColor: 'text-pink-600',
            gradient: 'from-pink-500 to-rose-400'
        },
        {
            icon: Lock,
            title: 'Permanent Identity',
            description: 'Immutable, globally unique student & staff IDs forever.',
            bg: 'bg-emerald-100',
            iconColor: 'text-emerald-600',
            gradient: 'from-emerald-500 to-teal-400'
        },
        {
            icon: Database,
            title: 'Smart Data Sync',
            description: 'Instant synchronization across all branches and devices.',
            bg: 'bg-orange-100',
            iconColor: 'text-orange-600',
            gradient: 'from-orange-500 to-amber-400'
        },
        {
            icon: Globe,
            title: 'Global Ready',
            description: 'Multi-currency, timezone, and language support built-in.',
            bg: 'bg-indigo-100',
            iconColor: 'text-indigo-600',
            gradient: 'from-indigo-500 to-sky-400'
        }
    ];

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const item = {
        hidden: { opacity: 0, y: 10 },
        show: { opacity: 1, y: 0, transition: { duration: 0.4 } }
    };

    return (
        <section className="py-12 md:py-24 bg-white relative overflow-hidden font-outfit">

            {/* Premium Smooth Ambient Background */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute -top-[20%] -right-[10%] w-[700px] h-[700px] bg-blue-50/80 rounded-full blur-[120px] opacity-70" />
                <div className="absolute top-[40%] -left-[10%] w-[600px] h-[600px] bg-indigo-50/80 rounded-full blur-[120px] opacity-60" />
                <div className="absolute bottom-[-10%] right-[20%] w-[500px] h-[500px] bg-purple-50/80 rounded-full blur-[100px] opacity-50" />
            </div>

            <div className="container mx-auto px-6 relative z-10">

                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5 }}
                    className="mb-10 md:mb-16 text-center"
                >
                    <div className="inline-block px-4 py-1.5 bg-white border border-blue-200 text-blue-700 rounded-full text-sm font-bold mb-6 uppercase tracking-wider shadow-sm">
                        Enterprise Grade
                    </div>
                    <h2 className="text-4xl sm:text-5xl lg:text-[48px] font-bold text-[#0f172a] mb-5 tracking-tight leading-[1.1]">
                        Built for Scale & Security
                    </h2>
                    <p className="text-lg sm:text-[18px] text-slate-600 font-medium max-w-2xl mx-auto leading-[1.6]">
                        Robust infrastructure designed for high-growth institutions.
                    </p>
                </motion.div>

                {/* Features Grid - Cards Layout */}
                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-50px" }}
                    className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                    {features.map((feature, index) => {
                        const Icon = feature.icon;

                        return (
                            <motion.div
                                key={index}
                                variants={item}
                                className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl hover:border-blue-100 transition-all duration-300 group"
                            >
                                <div className="flex items-start gap-5">
                                    {/* Colorful Illustration-Style Icon */}
                                    <div className={`flex-shrink-0 w-14 h-14 rounded-2xl ${feature.bg} flex items-center justify-center relative shadow-inner overflow-hidden group-hover:scale-105 transition-transform duration-300`}>
                                        <div className={`absolute top-0 right-0 w-10 h-10 bg-gradient-to-bl ${feature.gradient} opacity-20 rounded-bl-full`} />
                                        <div className={`absolute bottom-0 left-0 w-6 h-6 bg-gradient-to-tr ${feature.gradient} opacity-10 rounded-tr-full`} />
                                        <Icon className={`${feature.iconColor} relative z-10`} size={28} strokeWidth={1.5} />
                                    </div>

                                    <div>
                                        <h3 className="text-[20px] font-bold text-[#0f172a] mb-2 leading-tight group-hover:text-blue-700 transition-colors tracking-tight">
                                            {feature.title}
                                        </h3>
                                        <p className="text-[15px] text-slate-600 leading-[1.6] font-medium">
                                            {feature.description}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </motion.div>

            </div>
        </section>
    );
};

export default FeaturesShowcase;
