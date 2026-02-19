"use client";

import React from 'react';
import Navbar from '@/components/Navbar';
import { motion } from 'framer-motion';
import {
    BookOpen,
    Code2,
    MessageSquare,
    Zap,
    Search,
    ChevronRight,
    FileText,
    Cpu,
    ShieldCheck,
    Globe2,
    Binary
} from 'lucide-react';

const ResourcesPage = () => {
    return (
        <div className="min-h-screen bg-[#FDFDFD] font-outfit overflow-x-hidden">
            <Navbar />

            <main className="pt-32 pb-24">
                <div className="container mx-auto px-6">
                    {/* 1. Hero / Search Section */}
                    <div className="text-center max-w-4xl mx-auto mb-20">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 mb-8"
                        >
                            <Binary size={14} className="text-primary" />
                            <span className="text-[10px] font-black text-primary uppercase tracking-[0.3em]">Durkkas Intelligence Hub</span>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-5xl md:text-7xl font-[1000] text-[#172B4D] tracking-tighter leading-[1.05] mb-10"
                        >
                            Build. Scale. <br />
                            <span className="text-primary">Master Everything.</span>
                        </motion.h1>

                        <div className="relative max-w-2xl mx-auto group">
                            <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-primary transition-colors" size={24} />
                            <input
                                type="text"
                                placeholder="Search documentation, sub-modules, or APIs..."
                                className="w-full h-16 bg-white border border-gray-100 rounded-[1.5rem] pl-16 pr-6 shadow-[0_20px_50px_rgba(0,0,0,0.05)] focus:ring-4 focus:ring-primary/5 focus:border-primary/20 outline-none transition-all text-lg"
                            />
                            <div className="absolute right-4 top-1/2 -translate-y-1/2 hidden md:flex items-center gap-2">
                                <span className="px-2 py-1 bg-gray-50 border border-gray-100 rounded text-[10px] font-bold text-gray-400">CTRL</span>
                                <span className="px-2 py-1 bg-gray-50 border border-gray-100 rounded text-[10px] font-bold text-gray-400">K</span>
                            </div>
                        </div>
                    </div>

                    {/* 2. Trending Bento Grid 2026 */}
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-24">
                        {/* Documentation Card (Large) */}
                        <motion.div
                            whileHover={{ y: -5 }}
                            className="md:col-span-8 bg-white border border-gray-100 rounded-[2.5rem] p-10 shadow-[0_4px_30px_rgba(0,0,0,0.02)] relative overflow-hidden group"
                        >
                            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
                            <div className="relative z-10 flex flex-col h-full">
                                <div className="p-4 bg-primary rounded-2xl w-fit mb-8 shadow-xl shadow-primary/20">
                                    <BookOpen className="text-white" size={32} />
                                </div>
                                <h3 className="text-3xl font-black text-[#172B4D] tracking-tighter mb-4">Master Documentation</h3>
                                <p className="text-gray-500 text-lg leading-relaxed mb-10 max-w-md">
                                    Deep dives into the Durkkas architecture, multi-tenant schemas, and enterprise deployment strategies.
                                </p>
                                <div className="mt-auto grid grid-cols-2 md:grid-cols-3 gap-4">
                                    {['Deployment', 'Architecture', 'Security', 'Scalability', 'Tenant Isolation'].map((tag) => (
                                        <div key={tag} className="px-4 py-2 border border-gray-50 bg-gray-50/50 rounded-xl text-xs font-bold text-[#172B4D] hover:bg-white hover:border-primary/20 transition-all cursor-default text-center">
                                            {tag}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>

                        {/* API Card */}
                        <motion.div
                            whileHover={{ y: -5 }}
                            className="md:col-span-4 bg-[#111827] rounded-[2.5rem] p-10 relative overflow-hidden group"
                        >
                            <div className="absolute top-0 right-0 w-24 h-24 bg-primary/20 rounded-full blur-3xl" />
                            <div className="relative z-10 flex flex-col h-full items-center text-center">
                                <div className="p-4 bg-white/5 border border-white/10 rounded-2xl mb-8">
                                    <Code2 className="text-primary" size={32} />
                                </div>
                                <h3 className="text-2xl font-black text-white tracking-tighter mb-4">Developer SDK</h3>
                                <p className="text-blue-100/40 text-sm leading-relaxed mb-8">
                                    Build custom sub-modules and integrate via our robust gRPC & REST APIs.
                                </p>
                                <button className="w-full py-4 bg-primary text-white font-bold rounded-2xl text-sm tracking-widest hover:bg-blue-600 transition-all">
                                    START CODING
                                </button>
                            </div>
                        </motion.div>

                        {/* Sub-modules Focus (EMS) */}
                        <motion.div
                            whileHover={{ y: -5 }}
                            className="md:col-span-4 bg-white border border-gray-100 rounded-[2.5rem] p-10 shadow-[0_4px_30px_rgba(0,0,0,0.02)] flex flex-col justify-between"
                        >
                            <div>
                                <div className="p-4 bg-emerald-50 text-emerald-600 rounded-2xl w-fit mb-8">
                                    <Cpu size={32} />
                                </div>
                                <h3 className="text-2xl font-black text-[#172B4D] tracking-tighter mb-4">EMS Technicals</h3>
                                <p className="text-gray-500 text-sm leading-relaxed">
                                    Complete blueprints for Academic Manager, Face Recognition systems, and LMS sub-modules.
                                </p>
                            </div>
                            <button className="flex items-center gap-2 text-emerald-600 font-bold text-sm mt-8 group">
                                View Blueprints
                                <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
                            </button>
                        </motion.div>

                        {/* Knowledge / Academy */}
                        <motion.div
                            whileHover={{ y: -5 }}
                            className="md:col-span-4 bg-blue-50/30 border border-blue-100/50 rounded-[2.5rem] p-10 flex flex-col justify-between"
                        >
                            <div>
                                <div className="p-4 bg-primary/10 text-primary rounded-2xl w-fit mb-8">
                                    <Zap size={32} />
                                </div>
                                <h3 className="text-2xl font-black text-[#172B4D] tracking-tighter mb-4">Durkkas Academy</h3>
                                <p className="text-gray-500 text-sm leading-relaxed">
                                    Learn to manage thousand-branch ecosystems with our expert-led video series.
                                </p>
                            </div>
                            <button className="flex items-center gap-2 text-primary font-bold text-sm mt-8 group">
                                Browse Courses
                                <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
                            </button>
                        </motion.div>

                        {/* Security / Compliance */}
                        <motion.div
                            whileHover={{ y: -5 }}
                            className="md:col-span-4 bg-white border border-gray-100 rounded-[2.5rem] p-10 shadow-[0_4px_30px_rgba(0,0,0,0.02)] flex flex-col justify-between"
                        >
                            <div>
                                <div className="p-4 bg-gray-50 text-gray-700 rounded-2xl w-fit mb-8">
                                    <ShieldCheck size={32} />
                                </div>
                                <h3 className="text-2xl font-black text-[#172B4D] tracking-tighter mb-4">Compliance Hub</h3>
                                <p className="text-gray-500 text-sm leading-relaxed">
                                    Regional data residency (India/Global) and multi-tenant security whitepapers.
                                </p>
                            </div>
                            <button className="flex items-center gap-2 text-gray-700 font-bold text-sm mt-8 group">
                                Read Whitepapers
                                <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
                            </button>
                        </motion.div>
                    </div>

                    {/* 3. Sub-modules Deep Dive Section */}
                    <div className="bg-[#111827] rounded-[3rem] p-12 md:p-20 relative overflow-hidden">
                        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-primary/10 to-transparent pointer-events-none" />

                        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                            <div>
                                <span className="text-primary font-black text-xs uppercase tracking-[0.4em] mb-6 block">The Sub-module Ecosystem</span>
                                <h2 className="text-4xl md:text-5xl font-[1000] text-white tracking-tighter leading-tight mb-8">
                                    Extend the OS <br />
                                    with <span className="text-primary text-glow">Native Modules.</span>
                                </h2>
                                <p className="text-blue-100/60 text-lg leading-relaxed mb-10 max-w-xl font-medium">
                                    DURKKAS isn't just a product; it's an infrastructure. Deploy pre-built sub-modules like EMS, CRM, and Payroll instantly across your entire multi-tenant hierarchy.
                                </p>
                                <div className="grid grid-cols-2 gap-6">
                                    {[
                                        { icon: FileText, label: "Technical Guides" },
                                        { icon: Globe2, label: "Localization SDK" },
                                        { icon: Zap, label: "Instant Deployment" },
                                        { icon: MessageSquare, label: "Dev Community" }
                                    ].map((item, i) => (
                                        <div key={i} className="flex items-center gap-3 text-white font-bold group">
                                            <item.icon size={20} className="text-primary group-hover:scale-110 transition-transform" />
                                            <span className="text-sm">{item.label}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="bg-white/5 backdrop-blur-3xl rounded-[2.5rem] border border-white/10 p-8 shadow-2xl">
                                <div className="flex items-center gap-2 mb-8">
                                    <div className="w-3 h-3 rounded-full bg-red-400" />
                                    <div className="w-3 h-3 rounded-full bg-yellow-400" />
                                    <div className="w-3 h-3 rounded-full bg-green-400" />
                                </div>
                                <div className="space-y-4 font-mono text-[13px]">
                                    <p className="text-primary tracking-widest uppercase text-[10px] font-black mb-4">Deployment Status: EMS_MODULE_v10.2</p>
                                    <div className="flex justify-between items-center bg-white/5 p-4 rounded-xl border border-white/5">
                                        <span className="text-blue-200">core.academic_manager</span>
                                        <span className="text-emerald-400 font-bold uppercase text-[10px]">Active</span>
                                    </div>
                                    <div className="flex justify-between items-center bg-white/5 p-4 rounded-xl border border-white/5">
                                        <span className="text-blue-200">core.face_recognition</span>
                                        <span className="text-emerald-400 font-bold uppercase text-[10px]">Active</span>
                                    </div>
                                    <div className="flex justify-between items-center bg-white/5 p-4 rounded-xl border border-white/5">
                                        <span className="text-blue-200">core.lms_subconscious</span>
                                        <span className="text-yellow-400 font-bold uppercase text-[10px]">Building...</span>
                                    </div>
                                    <div className="pt-6">
                                        <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
                                            <motion.div
                                                initial={{ width: 0 }}
                                                animate={{ width: '85%' }}
                                                className="h-full bg-primary"
                                            />
                                        </div>
                                        <p className="text-[10px] text-blue-100/40 mt-4 text-center">85% Sync with Multi-Tenant Hub</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <style jsx>{`
                .text-glow {
                    text-shadow: 0 0 30px rgba(0, 82, 204, 0.5);
                }
            `}</style>
        </div>
    );
};

export default ResourcesPage;
