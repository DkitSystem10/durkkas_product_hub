"use client";

import React from 'react';
import Navbar from '@/components/Navbar';
import { motion } from 'framer-motion';
import {
    Shield, Server, Globe, Cpu, Lock, Activity, BarChart3,
    Layers, Settings, FileCheck, LifeBuoy, Zap, Database,
    Share2, Smartphone, CheckCircle2, ArrowRight, Users
} from 'lucide-react';

const EnterprisePage = () => {

    const fadeIn = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
    };

    return (
        <main className="font-outfit bg-slate-50 min-h-screen">
            <Navbar />

            {/* 1. Hero Section */}
            <section className="bg-[#002B5B] pt-32 md:pt-40 pb-16 md:pb-24 relative overflow-hidden text-white">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
                <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-500/20 rounded-full blur-[120px] pointer-events-none" />

                <div className="container mx-auto px-6 relative z-10 text-center">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        variants={fadeIn}
                        className="max-w-4xl mx-auto"
                    >
                        <span className="inline-block px-4 py-1.5 bg-blue-500/20 border border-blue-400/30 text-blue-200 rounded-full text-xs md:text-sm font-bold mb-6 md:mb-8 uppercase tracking-widest">
                            Enterprise Edition
                        </span>
                        <h1 className="text-3xl md:text-6xl lg:text-7xl font-bold mb-6 md:mb-8 leading-tight tracking-tight">
                            Scale Without <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Boundaries</span>
                        </h1>
                        <p className="text-lg md:text-2xl text-blue-100/80 mb-8 md:mb-12 max-w-3xl mx-auto leading-relaxed font-light px-4">
                            The definitive multi-tenant operating system designed for large-scale corporations.
                            Centralized governance, distributed operations, and bank-grade security for the modern enterprise.
                        </p>
                        <div className="flex justify-center px-4">
                            <a
                                href="/#featured-apps"
                                className="px-10 py-4 bg-white text-[#002B5B] font-bold rounded-xl hover:bg-blue-50 transition-colors shadow-lg text-lg w-full sm:w-auto text-center"
                            >
                                Access Your Apps
                            </a>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* 2. Enterprise Overview */}
            <section className="py-16 md:py-24 bg-white">
                <div className="container mx-auto px-6">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        variants={fadeIn}
                        viewport={{ once: true }}
                        className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16"
                    >
                        <div className="lg:w-1/2">
                            <h2 className="text-3xl md:text-4xl font-bold text-[#0f172a] mb-6 leading-tight">
                                The Operating System for the <br /><span className="text-blue-600">Complex Enterprise</span>
                            </h2>
                            <p className="text-slate-600 text-lg leading-relaxed mb-6">
                                Managing a conglomerate or a multi-branch institution requires more than just software; it demands an architecture that mirrors your organizational structure.
                            </p>
                            <p className="text-slate-600 text-lg leading-relaxed mb-8">
                                DURKKAS Enterprise allows you to spin up isolated tenants for each subsidiary, branch, or department while retaining a "God-View" super-admin dashboard. Maintain centralized control over billing, compliance, and features, while granting local autonomy to branch operations.
                            </p>
                            <div className="flex flex-wrap gap-8">
                                <div>
                                    <h4 className="text-3xl font-bold text-[#0f172a]">500+</h4>
                                    <p className="text-sm text-slate-500 uppercase tracking-wide font-bold">Tenants Supported</p>
                                </div>
                                <div>
                                    <h4 className="text-3xl font-bold text-[#0f172a]">99.99%</h4>
                                    <p className="text-sm text-slate-500 uppercase tracking-wide font-bold">Uptime SLA</p>
                                </div>
                            </div>
                        </div>
                        <div className="lg:w-1/2 relative w-full">
                            <div className="aspect-video bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl shadow-2xl border border-slate-700 p-2 relative overflow-hidden">
                                {/* Mock UI - Abstract */}
                                <div className="absolute inset-x-0 top-0 h-8 bg-slate-800 border-b border-slate-700 flex items-center px-4 gap-2">
                                    <div className="w-3 h-3 rounded-full bg-red-500" />
                                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                                    <div className="w-3 h-3 rounded-full bg-green-500" />
                                </div>
                                <div className="mt-8 grid grid-cols-4 gap-4 p-4 opacity-50">
                                    <div className="col-span-1 h-32 bg-slate-700 rounded-lg animate-pulse" />
                                    <div className="col-span-3 h-32 bg-slate-700 rounded-lg" />
                                    <div className="col-span-4 h-48 bg-slate-700 rounded-lg" />
                                </div>
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <span className="text-slate-500 font-mono text-center px-4">DURKKAS GOD-VIEW DASHBOARD</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* 3. Core Capabilities */}
            <section className="py-16 md:py-24 bg-slate-50">
                <div className="container mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-center max-w-3xl mx-auto mb-12 md:mb-16"
                    >
                        <span className="text-blue-600 font-bold uppercase tracking-widest text-sm">Capabilities</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-[#0f172a] mt-3 mb-6">Built for Multi-Tenant Scale</h2>
                        <p className="text-slate-600 text-lg">Everything you need to manage a distributed organization from a single pane of glass.</p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                        {[
                            { icon: Layers, title: "Deep Tenant Isolation", desc: "Logical separation of data at the database schema level ensures zero leakage between tenants." },
                            { icon: Settings, title: "Super Admin Control", desc: "Global configuration for subscription tiers, feature flags, and system-wide announcements." },
                            { icon: FileCheck, title: "Subscription Mgmt", desc: "Automated billing cycles, plan upgrades, and usage-based metering per tenant." },
                            { icon: Globe, title: "Brand Customization", desc: "Each tenant gets their own white-labeled portal with custom logo, colors, and domain." },
                            { icon: Users, title: "Hierarchical RBAC", desc: "Granular permission sets for Global Admins, Tenant Admins, and End Users." },
                            { icon: Activity, title: "Cross-Tenant Analytics", desc: "Aggregate performance metrics across all your branches in real-time." }
                        ].map((item, i) => {
                            const Icon = item.icon;
                            return (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-100px" }}
                                    whileHover={{ y: -12, scale: 1.02 }}
                                    transition={{
                                        type: "spring",
                                        stiffness: 300,
                                        damping: 20,
                                        delay: i * 0.1
                                    }}
                                    className="bg-white p-6 md:p-8 rounded-2xl border border-slate-200 hover:border-blue-400 hover:shadow-2xl transition-all duration-300 group cursor-default"
                                >
                                    <motion.div
                                        whileHover={{ rotate: 10, scale: 1.1 }}
                                        className="w-14 h-14 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 shadow-sm"
                                    >
                                        <Icon size={28} />
                                    </motion.div>
                                    <h3 className="text-xl font-bold text-[#0f172a] mb-3 group-hover:text-blue-700 transition-colors">{item.title}</h3>
                                    <p className="text-slate-600 leading-relaxed group-hover:text-slate-700 transition-colors">{item.desc}</p>
                                </motion.div>
                            )
                        })}
                    </div>
                </div>
            </section>

            {/* 4 & 6. Architecture & Scalability (Combined) */}
            <section className="py-16 md:py-24 bg-[#0f172a] text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
                <div className="container mx-auto px-6 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                        <div>
                            <span className="text-blue-400 font-bold uppercase tracking-widest text-sm">Ready Architecture</span>
                            <h2 className="text-3xl md:text-5xl font-bold mt-3 mb-6">Cloud-Native &<br />Microservice Ready</h2>
                            <p className="text-slate-300 text-lg leading-relaxed mb-8">
                                Built on a modular, API-first foundation designed for the cloud era. Our infrastructure supports horizontal scaling to handle spikes in traffic without breaking a sweat.
                            </p>
                            <ul className="space-y-4">
                                {[
                                    "Event-driven architecture with background processing queues",
                                    "Intelligent Redis caching for sub-millisecond response times",
                                    "Auto-scaling Kubernetes clusters",
                                    "CI/CD pipelines for seamless updates with zero downtime"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-3 text-slate-300">
                                        <CheckCircle2 className="text-blue-400 mt-1 flex-shrink-0" size={18} />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="bg-slate-800/50 p-6 md:p-8 rounded-3xl border border-slate-700 backdrop-blur-sm">
                            <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                                <Server className="text-blue-400" /> System Stats
                            </h3>
                            <div className="space-y-6">
                                <div>
                                    <div className="flex justify-between text-sm font-bold mb-2">
                                        <span>API Latency</span>
                                        <span className="text-green-400">12ms</span>
                                    </div>
                                    <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
                                        <div className="h-full w-[15%] bg-green-400 rounded-full" />
                                    </div>
                                </div>
                                <div>
                                    <div className="flex justify-between text-sm font-bold mb-2">
                                        <span>Uptime (Yearly)</span>
                                        <span className="text-green-400">99.99%</span>
                                    </div>
                                    <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
                                        <div className="h-full w-[99%] bg-green-400 rounded-full" />
                                    </div>
                                </div>
                                <div>
                                    <div className="flex justify-between text-sm font-bold mb-2">
                                        <span>Concurrent Connections</span>
                                        <span className="text-blue-400">100k+</span>
                                    </div>
                                    <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
                                        <div className="h-full w-[75%] bg-blue-400 rounded-full" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 5. Security Framework */}
            <section className="py-16 md:py-24 bg-white">
                <div className="container mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-12 md:mb-16"
                    >
                        <span className="text-blue-600 font-bold uppercase tracking-widest text-sm">Bank-Grade Security</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-[#0f172a] mt-3">Uncompromising Protection</h2>
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { title: "End-to-End Encryption", desc: "AES-256 encryption for data at rest and TLS 1.3 for data in transit." },
                            { title: "Multi-Factor Guard", desc: "Native 2FA support and SSO integration (Okta, Azure AD) for secure access." },
                            { title: "Audit Trails", desc: "Immutable logs of every action taken within the system for forensic compliance." },
                            { title: "Disaster Recovery", desc: "Automated geo-redundant backups with Point-in-Time Recovery capabilities." }
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{
                                    duration: 0.5,
                                    delay: i * 0.1,
                                    type: "spring",
                                    stiffness: 100
                                }}
                                whileHover={{
                                    y: -8,
                                    backgroundColor: "#ffffff",
                                    boxShadow: "0 20px 40px rgba(0,0,0,0.08)",
                                    borderColor: "#3b82f6"
                                }}
                                className="p-6 bg-slate-50 rounded-xl border border-slate-100 transition-all duration-300 group cursor-default"
                            >
                                <motion.div
                                    whileHover={{ rotateY: 180 }}
                                    transition={{ duration: 0.6 }}
                                >
                                    <Shield className="text-blue-600 mb-4 group-hover:text-blue-700 transition-colors" size={32} />
                                </motion.div>
                                <h3 className="text-lg font-bold text-[#0f172a] mb-2 group-hover:text-blue-600 transition-colors">{item.title}</h3>
                                <p className="text-sm text-slate-600 leading-relaxed group-hover:text-slate-700 transition-colors">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 7 & 8. Intelligence & Integration */}
            <section className="py-16 md:py-24 bg-blue-50">
                <div className="container mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-8 lg:gap-16">
                        {/* Intelligence */}
                        <div className="h-full">
                            <div className="bg-white p-6 md:p-8 rounded-3xl shadow-sm border border-slate-200 h-full">
                                <div className="w-12 h-12 bg-purple-50 text-purple-600 rounded-xl flex items-center justify-center mb-6">
                                    <BarChart3 size={24} />
                                </div>
                                <h3 className="text-2xl font-bold text-[#0f172a] mb-4">Advanced Intelligence</h3>
                                <p className="text-slate-600 mb-6">
                                    Turn data into decisions with our predictive analytics engine.
                                </p>
                                <ul className="space-y-3">
                                    {["Real-time tenant KPI dashboards", "Graph-based relationship insights", "Automated PDF/Excel reporting"].map((pt, i) => (
                                        <li key={i} className="flex items-center gap-2 text-sm font-medium text-slate-700">
                                            <div className="w-1.5 h-1.5 rounded-full bg-purple-500" /> {pt}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* Integrations */}
                        <div className="h-full">
                            <div className="bg-white p-6 md:p-8 rounded-3xl shadow-sm border border-slate-200 h-full">
                                <div className="w-12 h-12 bg-orange-50 text-orange-600 rounded-xl flex items-center justify-center mb-6">
                                    <Share2 size={24} />
                                </div>
                                <h3 className="text-2xl font-bold text-[#0f172a] mb-4">Integration Ecosystem</h3>
                                <p className="text-slate-600 mb-6">
                                    Connect seamlessly with your existing enterprise stack.
                                </p>
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="p-3 bg-slate-50 rounded-lg text-center text-sm font-bold text-slate-600 border border-slate-100">RESTful APIs</div>
                                    <div className="p-3 bg-slate-50 rounded-lg text-center text-sm font-bold text-slate-600 border border-slate-100">Webhooks</div>
                                    <div className="p-3 bg-slate-50 rounded-lg text-center text-sm font-bold text-slate-600 border border-slate-100">Payment Gateways</div>
                                    <div className="p-3 bg-slate-50 rounded-lg text-center text-sm font-bold text-slate-600 border border-slate-100">ERP Connectors</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 9 & 10. Customization & Compliance */}
            <section className="py-16 md:py-24 bg-white">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto space-y-12">
                        {/* White Label */}
                        <div className="flex flex-col md:flex-row gap-6 items-start">
                            <div className="w-12 h-12 bg-teal-50 text-teal-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                                <Smartphone size={24} />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-[#0f172a] mb-2">Total White-Labeling</h3>
                                <p className="text-slate-600 leading-relaxed">
                                    Your brand, our engine. Map custom domains (e.g., <code className="bg-slate-100 px-1 py-0.5 rounded text-sm">portal.yourcompany.com</code>), configure themes, logos, and email templates per tenant. The platform essentially becomes invisible.
                                </p>
                            </div>
                        </div>

                        {/* Governance */}
                        <div className="flex flex-col md:flex-row gap-6 items-start">
                            <div className="w-12 h-12 bg-indigo-50 text-indigo-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                                <Lock size={24} />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-[#0f172a] mb-2">Governance & Compliance</h3>
                                <p className="text-slate-600 leading-relaxed">
                                    Meet rigorous standards with role-based data visibility and customizable data retention policies. Our infrastructure is designed to help you meet GDPR, SOC2, and ISO 27001 requirements.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 11. Support & CTA */}
            <section className="py-24 bg-slate-900 text-white text-center">
                <div className="container mx-auto px-6">
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 rounded-full text-xs font-bold mb-6">
                        <LifeBuoy size={14} className="text-yellow-400" />
                        24/7 Enterprise Support
                    </div>
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to transform your enterprise?</h2>
                    <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-10">
                        Join the forward-thinking organizations scaling with DURKKAS Enterprise Edition.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <a
                            href="/#featured-apps"
                            className="px-8 py-4 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-500 transition-colors shadow-lg shadow-blue-600/30 flex items-center justify-center gap-2 w-full sm:w-auto"
                        >
                            Access Your Apps <ArrowRight size={18} />
                        </a>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default EnterprisePage;
