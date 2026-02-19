"use client";

import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import {
    CheckCircle2,
    Layers,
    Users,
    Zap,
    BarChart3,
    ShieldCheck,
    ArrowRight,
    Quote
} from 'lucide-react';

import Logo from '@/components/Logo';

const MarketingPage = () => {
    const fadeInUp = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
    };

    const benefits = [
        {
            title: "Unified Platform",
            description: "Consolidate your entire business operation—CRM, HRMS, and EMS—into one seamless ecosystem.",
            icon: <Layers className="text-blue-600" size={24} />
        },
        {
            title: "Multi-Tenant Ready",
            description: "Scale horizontally across infinite branches and organizations with isolated, secure data layers.",
            icon: <Users className="text-blue-600" size={24} />
        },
        {
            title: "Seamless Integration",
            description: "Connect your existing tools through our powerful API-first architecture designed for the modern era.",
            icon: <Zap className="text-blue-600" size={24} />
        },
        {
            title: "Real-Time Insights",
            description: "Make data-driven decisions with live analytics and predictive intelligence across all tenants.",
            icon: <BarChart3 className="text-blue-600" size={24} />
        },
        {
            title: "Enterprise-Grade Security",
            description: "Bank-level encryption, RBAC, and SOC2-compliant standards protecting your mission-critical data.",
            icon: <ShieldCheck className="text-blue-600" size={24} />
        }
    ];

    return (
        <main className="font-outfit bg-white min-h-screen">
            <Navbar />

            {/* 1. Hero Section */}
            <section className="pt-40 pb-20 bg-slate-50 border-b border-slate-100 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-blue-50/50 via-transparent to-transparent opacity-70" />

                <div className="container mx-auto px-6 relative z-10 text-center">
                    <motion.h1
                        initial="hidden" animate="visible" variants={fadeInUp}
                        className="text-4xl md:text-5xl lg:text-6xl xl:text-[72px] font-bold text-[#002B5B] mb-8 leading-tight tracking-tight max-w-none lg:whitespace-nowrap px-4"
                    >
                        The Operating System for the <span className="text-blue-600">Modern Business</span>
                    </motion.h1>

                    <motion.p
                        initial="hidden" animate="visible" variants={fadeInUp}
                        className="text-xl text-slate-600 mb-12 max-w-3xl mx-auto leading-relaxed"
                    >
                        Experience the power of a unified cloud platform. <Logo inline text="DURKKAS" /> brings your entire organization
                        under a single pane of glass, enabling unprecedented scale and efficiency.
                    </motion.p>

                    <motion.div
                        initial="hidden" animate="visible" variants={fadeInUp}
                        className="flex flex-col sm:flex-row justify-center gap-4 mb-20"
                    >
                        <button className="px-10 py-5 bg-blue-600 text-white font-bold rounded-xl shadow-lg shadow-blue-600/30 hover:bg-blue-700 transition-all transform hover:-translate-y-1">
                            Start Your Free Trial
                        </button>
                        <button className="px-10 py-5 bg-white border border-slate-200 text-[#002B5B] font-bold rounded-xl hover:bg-slate-50 transition-all flex items-center justify-center gap-2">
                            Explore the Platform <ArrowRight size={18} />
                        </button>
                    </motion.div>

                    {/* 4. Product Image Placeholder / Mockup UI */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative max-w-6xl mx-auto"
                    >
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-200 bg-white">
                            <div className="bg-slate-100 px-4 py-3 flex items-center gap-2 border-b border-slate-200">
                                <div className="flex gap-1.5">
                                    <div className="w-3 h-3 rounded-full bg-red-400" />
                                    <div className="w-3 h-3 rounded-full bg-yellow-400" />
                                    <div className="w-3 h-3 rounded-full bg-green-400" />
                                </div>
                                <div className="mx-auto bg-white px-4 py-1 rounded-md text-[10px] text-slate-400 font-mono border border-slate-200">
                                    https://app.durkkas.com/dashboard/overview
                                </div>
                            </div>
                            <div className="aspect-[16/9] bg-gradient-to-br from-slate-50 to-white p-8 overflow-hidden relative">
                                {/* Abstract Dashboard Elements */}
                                <div className="grid grid-cols-3 gap-6 opacity-40">
                                    <div className="h-32 bg-blue-100 rounded-xl animate-pulse" />
                                    <div className="h-32 bg-slate-100 rounded-xl" />
                                    <div className="h-32 bg-blue-50 rounded-xl" />
                                    <div className="col-span-2 h-64 bg-slate-50 rounded-xl" />
                                    <div className="h-64 bg-blue-600/5 rounded-xl border border-blue-600/10" />
                                </div>
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <img
                                        src="/mockup_placeholder.webp"
                                        alt="DURKKAS Unified SaaS Dashboard Mockup"
                                        className="max-w-[80%] drop-shadow-2xl"
                                        onError={(e) => {
                                            (e.target as HTMLImageElement).style.display = 'none';
                                        }}
                                    />
                                    <div className="text-center group cursor-pointer">
                                        <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center text-white shadow-xl shadow-blue-600/40 mb-4 group-hover:scale-110 transition-transform">
                                            <Zap size={32} />
                                        </div>
                                        <p className="font-bold text-[#002B5B]">Interactive Preview</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Decorative background elements */}
                        <div className="absolute -z-10 -top-10 -left-10 w-40 h-40 bg-blue-100 rounded-full blur-3xl opacity-50" />
                        <div className="absolute -z-10 -bottom-10 -right-10 w-64 h-64 bg-cyan-100 rounded-full blur-3xl opacity-50" />
                    </motion.div>
                </div>
            </section>

            {/* 5. Customer Testimonial */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6 text-center">
                    <motion.div
                        initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
                        className="max-w-4xl mx-auto"
                    >
                        <Quote className="mx-auto text-blue-100 mb-8" size={64} />
                        <p className="text-3xl md:text-4xl font-medium text-[#0f172a] italic leading-tight mb-10">
                            "The transition to <Logo inline text="DURKKAS" /> was the single best decision for our digital transformation.
                            It provided the exact unified core we needed to scale our multi-tenant operations globally."
                        </p>
                        <div className="flex flex-col items-center">
                            <div className="w-16 h-16 bg-blue-600 rounded-full mb-4 flex items-center justify-center text-white font-bold text-xl">NP</div>
                            <h4 className="text-xl font-bold text-[#002B5B]">Naveen Prasath</h4>
                            <p className="text-slate-500 font-medium">CEO, durkkas.com</p>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* 6. Why Choose DURKKAS */}
            <section className="py-24 bg-slate-50 relative overflow-hidden">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-20">
                        <h2 className="text-3xl md:text-5xl font-bold text-[#002B5B] mb-6">Why Choose <Logo inline text="DURKKAS" /></h2>
                        <div className="w-20 h-1.5 bg-blue-600 mx-auto rounded-full" />
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {benefits.map((benefit, index) => (
                            <motion.div
                                key={index}
                                initial="hidden" whileInView="visible" viewport={{ once: true }}
                                variants={fadeInUp}
                                transition={{ delay: index * 0.1 }}
                                className="bg-white p-10 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl hover:border-blue-200 transition-all group"
                            >
                                <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                                    {benefit.icon}
                                </div>
                                <h3 className="text-2xl font-bold text-[#002B5B] mb-4">{benefit.title}</h3>
                                <p className="text-slate-600 leading-relaxed mb-6">
                                    {benefit.description}
                                </p>
                                <div className="flex items-center gap-2 text-blue-600 font-bold text-sm cursor-pointer hover:gap-3 transition-all">
                                    Learn More <ArrowRight size={16} />
                                </div>
                            </motion.div>
                        ))}

                        {/* 7. Closing Scaling Statement */}
                        <motion.div
                            initial="hidden" whileInView="visible" viewport={{ once: true }}
                            variants={fadeInUp}
                            transition={{ delay: 0.5 }}
                            className="lg:col-span-1 bg-gradient-to-br from-blue-600 to-blue-800 p-10 rounded-2xl shadow-xl flex flex-col justify-center text-white relative overflow-hidden"
                        >
                            <div className="relative z-10">
                                <h3 className="text-2xl font-bold mb-4">Ready to Grow?</h3>
                                <p className="text-blue-100 mb-8 leading-relaxed">
                                    <Logo inline text="DURKKAS" color="white" /> isn't just a platform; it's a growth catalyst. We provide the infrastructure so you can focus on building your legacy.
                                </p>
                                <div className="flex items-center gap-4">
                                    <div className="flex -space-x-2">
                                        {[1, 2, 3].map(i => <div key={i} className="w-8 h-8 rounded-full border-2 border-blue-700 bg-white/20" />)}
                                    </div>
                                    <span className="text-xs font-medium">Unified Multi-Tenant Hub</span>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* 8. Final CTA */}
            <section className="py-24 bg-[#002B5B] text-white">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-3xl md:text-5xl font-bold mb-8">Unified operations. Infinite growth.</h2>
                    <p className="text-xl text-blue-100/70 mb-12 max-w-2xl mx-auto">
                        Join the next generation of businesses operating at peak efficiency on the <Logo inline text="DURKKAS" color="white" /> cloud ecosystem.
                    </p>
                    <div className="flex justify-center">
                        <a
                            href="/#featured-apps"
                            className="px-12 py-5 bg-white text-[#002B5B] font-bold rounded-xl hover:bg-slate-50 transition-all text-lg"
                        >
                            Access Your Apps
                        </a>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
};

export default MarketingPage;
