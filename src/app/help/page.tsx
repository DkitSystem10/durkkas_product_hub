"use client";

import React from 'react';
import Navbar from '@/components/Navbar';
import { motion } from 'framer-motion';
import { Search, Book, Settings, Users, CreditCard, Shield, FileText, MessageCircle, ArrowRight } from 'lucide-react';

const HelpCenter = () => {

    const categories = [
        {
            icon: Book,
            title: "Getting Started",
            description: "Onboarding guides for new tenants and initial setup.",
            link: "#"
        },
        {
            icon: Settings,
            title: "Platform Configuration",
            description: "Managing branches, roles, and global settings.",
            link: "#"
        },
        {
            icon: Users,
            title: "User Management",
            description: "Adding students, faculties, and managing permissions.",
            link: "#"
        },
        {
            icon: CreditCard,
            title: "Billing & Subscriptions",
            description: "Invoices, payment methods, and plan upgrades.",
            link: "#"
        },
        {
            icon: Shield,
            title: "Security & Compliance",
            description: "Data isolation, audit logs, and GDPR compliance.",
            link: "#"
        },
        {
            icon: FileText,
            title: "API Documentation",
            description: "Developer guides for integrating with our OS.",
            link: "#"
        }
    ];

    const faqs = [
        {
            q: "How do I add a new branch?",
            a: "Navigate to Global Settings > Organization Structure and click 'Add Branch'. You can then assign a Branch Admin."
        },
        {
            q: "Can I customize the login page?",
            a: "Yes! Go to Theme Settings to upload your logo and set your brand primary colors for a white-label experience."
        },
        {
            q: "How is data isolated between tenants?",
            a: "We use a row-level security policy on a shared database architecture, ensuring strict logical separation of all tenant data."
        },
        {
            q: "What happens if I downgrade my plan?",
            a: "Your data remains safe, but access to premium features (like API access or Advanced Analytics) will be locked immediately."
        }
    ];

    return (
        <main className="font-outfit bg-slate-50 min-h-screen">
            <Navbar />

            {/* Hero Section with Search */}
            <section className="bg-[#002B5B] pt-40 pb-24 px-6 text-center relative overflow-hidden">
                {/* Abstract Bloom */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-blue-500/20 rounded-full blur-[120px] pointer-events-none" />

                <div className="relative z-10 max-w-3xl mx-auto">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-5xl font-bold text-white mb-6"
                    >
                        How can we help you?
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-lg text-blue-200/80 mb-10"
                    >
                        Search our knowledge base or browse categories below.
                    </motion.p>

                    {/* Search Bar */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2 }}
                        className="relative max-w-2xl mx-auto"
                    >
                        <input
                            type="text"
                            placeholder="Describe your issue (e.g., 'reset password', 'API key')"
                            className="w-full pl-14 pr-6 py-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 text-white placeholder-blue-200/50 focus:outline-none focus:bg-white/20 focus:border-blue-400 transition-all shadow-xl"
                        />
                        <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-blue-300" size={24} />
                    </motion.div>
                </div>
            </section>

            {/* Support Categories */}
            <section className="py-20 container mx-auto px-6 -mt-10 relative z-20">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {categories.map((cat, index) => {
                        const Icon = cat.icon;
                        return (
                            <motion.a
                                href={cat.link}
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.05 }}
                                className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-slate-100 group"
                            >
                                <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                                    <Icon size={24} />
                                </div>
                                <h3 className="text-xl font-bold text-[#0f172a] mb-2 group-hover:text-blue-700 transition-colors">
                                    {cat.title}
                                </h3>
                                <p className="text-slate-600 text-sm leading-relaxed">
                                    {cat.description}
                                </p>
                            </motion.a>
                        );
                    })}
                </div>
            </section>

            {/* Popular Questions */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-6 max-w-4xl">
                    <h2 className="text-3xl font-bold text-[#0f172a] mb-10 text-center">Frequently Asked Questions</h2>

                    <div className="space-y-4">
                        {faqs.map((faq, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: i * 0.1 }}
                                className="p-6 rounded-2xl border border-slate-100 bg-slate-50 hover:bg-white hover:shadow-md transition-all cursor-pointer"
                            >
                                <h4 className="font-bold text-[#0f172a] mb-2 flex items-center gap-3">
                                    <span className="w-6 h-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-xs font-bold">Q</span>
                                    {faq.q}
                                </h4>
                                <p className="text-slate-600 text-sm ml-9 leading-relaxed">
                                    {faq.a}
                                </p>
                            </motion.div>
                        ))}
                    </div>

                    <div className="mt-12 text-center">
                        <p className="text-slate-500 mb-4">Still need help?</p>
                        <button className="inline-flex items-center gap-2 px-6 py-3 bg-[#002B5B] text-white font-bold rounded-xl hover:bg-blue-900 transition-colors">
                            <MessageCircle size={18} />
                            Contact Support
                        </button>
                    </div>
                </div>
            </section>

        </main>
    );
};

export default HelpCenter;
