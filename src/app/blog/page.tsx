"use client";

import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowRight, Shield, Globe, TrendingUp, Quote } from 'lucide-react';

import Logo from '@/components/Logo';

const BlogPage = () => {

    // Professional Multi-Tenant Blog Topics
    const posts = [
        {
            id: 1,
            title: "Why Multi-Tenancy is the Future of Enterprise EdTech",
            excerpt: "Discover how a single instance architecture allows institutions to scale from 10 to 10,000 students without compromising performance or security.",
            imageGradient: "from-blue-600 to-indigo-700",
            icon: Globe,
            category: "Architecture",
            date: "Feb 14, 2025",
            readTime: "5 min read",
            slug: "/blog/multi-tenancy-future"
        },
        {
            id: 2,
            title: "Data Isolation: How We Secure 50+ Branches Independently",
            excerpt: "Security is paramount. Learn about our bank-grade isolation protocols that ensure every tenant's data remains private and leak-proof.",
            imageGradient: "from-emerald-600 to-teal-700",
            icon: Shield,
            category: "Security",
            date: "Feb 10, 2025",
            readTime: "4 min read",
            slug: "/blog/data-isolation-security"
        },
        {
            id: 3,
            title: "Operational Efficiency: Managing Multiple Campuses from One Dashboard",
            excerpt: "Stop juggling spreadsheets. See how a unified OS helps top institutions cut administrative time by 60% across all their branches.",
            imageGradient: "from-orange-500 to-red-600",
            icon: TrendingUp,
            category: "Case Study",
            date: "Feb 05, 2025",
            readTime: "6 min read",
            slug: "/blog/operational-efficiency"
        }
    ];

    return (
        <main className="font-outfit bg-slate-50 min-h-screen">
            <Navbar />

            {/* Hero Section */}
            <section className="pt-40 pb-20 bg-[#002B5B] relative overflow-hidden">
                {/* Abstract Background Shapes */}
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/5 rounded-full blur-[100px] pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[100px] pointer-events-none" />

                <div className="container mx-auto px-6 relative z-10 text-center">
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-block px-4 py-1.5 bg-blue-500/20 border border-blue-400/30 text-blue-200 rounded-full text-sm font-bold mb-6 uppercase tracking-wider"
                    >
                        Insights & Updates
                    </motion.span>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight"
                    >
                        Latest from the <span className="text-blue-400">Team</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-lg text-blue-200/80 max-w-2xl mx-auto leading-relaxed"
                    >
                        Thoughts on diverse engineering, scaling architecture, and the future of educational technology management.
                    </motion.p>
                </div>
            </section>

            {/* Blog Grid */}
            <section className="py-24 container mx-auto px-6">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {posts.map((post, index) => {
                        const Icon = post.icon;
                        return (
                            <motion.article
                                key={post.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border border-slate-100 group flex flex-col h-full"
                            >
                                {/* Image Placeholder / Gradient */}
                                <div className={`h-48 bg-gradient-to-br ${post.imageGradient} relative p-6 flex flex-col justify-end`}>
                                    <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-md rounded-lg p-2">
                                        <Icon className="text-white" size={24} />
                                    </div>
                                    <span className="inline-block px-3 py-1 bg-black/20 backdrop-blur-md text-white text-xs font-bold rounded-full w-fit mb-2 border border-white/10">
                                        {post.category}
                                    </span>
                                </div>

                                {/* Content */}
                                <div className="p-8 flex flex-col flex-grow">
                                    <div className="flex items-center gap-4 text-xs text-slate-400 font-medium mb-4">
                                        <div className="flex items-center gap-1.5">
                                            <Calendar size={14} />
                                            {post.date}
                                        </div>
                                        <div className="flex items-center gap-1.5">
                                            <Clock size={14} />
                                            {post.readTime}
                                        </div>
                                    </div>

                                    <h3 className="text-xl font-bold text-[#0f172a] mb-3 leading-tight group-hover:text-blue-700 transition-colors">
                                        {post.title}
                                    </h3>

                                    <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-grow">
                                        {post.excerpt}
                                    </p>

                                    <a href={post.slug} className="mt-auto flex items-center gap-2 text-sm font-bold text-blue-600 group-hover:gap-3 transition-all">
                                        Read Article
                                        <ArrowRight size={16} />
                                    </a>
                                </div>
                            </motion.article>
                        );
                    })}
                </div>
            </section>

            {/* Premium Marketing Section Integration */}
            <section className="py-24 bg-white border-y border-slate-100">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto flex flex-col items-center text-center gap-12 mb-24">
                        <div>
                            <h2 className="text-4xl md:text-5xl font-bold text-[#002B5B] mb-6 leading-tight max-w-none lg:whitespace-nowrap">
                                The Operating System for the <span className="text-blue-600">Modern Business</span>
                            </h2>
                            <p className="text-lg text-slate-600 mb-8 leading-relaxed max-w-2xl mx-auto">
                                Experience the power of a unified cloud platform. <Logo inline text="DURKKAS" /> brings your entire organization
                                under a single pane of glass, enabling unprecedented scale and efficiency.
                            </p>
                            <div className="flex justify-center mb-16">
                                <button className="px-10 py-4 bg-blue-600 text-white font-bold rounded-xl shadow-lg hover:bg-blue-700 transition-all flex items-center gap-2">
                                    Access your Apps <ArrowRight size={18} />
                                </button>
                            </div>
                        </div>

                        <div className="w-full bg-blue-50 p-8 md:p-12 rounded-3xl border border-blue-100 flex flex-col items-center relative">
                            <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white shadow-lg">
                                <Quote size={20} />
                            </div>
                            <p className="text-xl md:text-2xl font-medium text-[#0f172a] italic text-center mb-8 leading-relaxed max-w-3xl">
                                "The transition to <Logo inline text="DURKKAS" /> was the single best decision for our digital transformation.
                                It provided the exact unified core we needed to scale our multi-tenant operations globally."
                            </p>
                            <div className="flex flex-col items-center">
                                <div className="w-14 h-14 bg-[#002B5B] rounded-full mb-3 flex items-center justify-center text-white font-bold text-lg">NP</div>
                                <h4 className="font-bold text-[#002B5B] text-lg">Naveen Prasath</h4>
                                <p className="text-slate-500 font-medium">CEO, durkkas.com</p>
                            </div>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            { title: "Unified Platform", desc: "Consolidate CRM, HRMS, and EMS into one ecosystem.", icon: <Globe size={24} /> },
                            { title: "Multi-Tenant Ready", desc: "Scale infinite branches with isolated data layers.", icon: <Globe size={24} /> },
                            { title: "Seamless Integration", desc: "API-first architecture designed for the future.", icon: <TrendingUp size={24} /> },
                            { title: "Real-Time Insights", desc: "Live analytics and predictive intelligence.", icon: <TrendingUp size={24} /> },
                            { title: "Enterprise Security", desc: "Bank-level encryption and SOC2 standards.", icon: <Shield size={24} /> }
                        ].map((benefit, i) => (
                            <div key={i} className="p-8 rounded-2xl border border-slate-100 bg-slate-50/50 hover:bg-white hover:shadow-xl transition-all group">
                                <div className="text-blue-600 mb-4 group-hover:scale-110 transition-transform">{benefit.icon}</div>
                                <h3 className="font-bold text-[#002B5B] mb-2">{benefit.title}</h3>
                                <p className="text-sm text-slate-600">{benefit.desc}</p>
                            </div>
                        ))}
                    </div>

                    <div className="mt-20 text-center">
                        <p className="text-xl font-bold text-[#002B5B]">Unified operations. Infinite growth.</p>
                        <p className="text-slate-500 mt-2">Scale your business with the definitive enterprise hub.</p>
                    </div>
                </div>
            </section>

            <section className="py-20 bg-blue-50 border-t border-blue-100">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-3xl font-bold text-[#0f172a] mb-6">Stay ahead of the curve</h2>
                    <p className="text-slate-600 mb-8 max-w-xl mx-auto">Get the latest updates on architecture and feature releases directly to your inbox.</p>

                    <div className="flex max-w-md mx-auto gap-3">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="flex-1 px-5 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all font-outfit"
                        />
                        <button className="px-6 py-3 bg-[#002B5B] text-white font-bold rounded-xl hover:bg-blue-900 transition-colors">
                            Subscribe
                        </button>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default BlogPage;
