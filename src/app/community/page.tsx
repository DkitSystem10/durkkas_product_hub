"use client";

import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { Users, MessageCircle, Calendar, Rocket, Award, ExternalLink, MessageSquare, Twitter, Linkedin, Github, Clock, ArrowRight } from 'lucide-react';

const CommunityPage = () => {

    const channels = [
        {
            name: "Discord Server",
            desc: "For developers & technical discussions. Get help with API integrations.",
            icon: MessageSquare,
            color: "bg-[#5865F2]",
            members: "500+",
            link: "#"
        },
        {
            name: "LinkedIn Group",
            desc: "Connect with EdTech leaders. Share insights on campus management.",
            icon: Linkedin,
            color: "bg-[#0A66C2]",
            members: "1.2k",
            link: "#"
        },
        {
            name: "Twitter / X",
            desc: "Follow for real-time updates, feature drops, and tips.",
            icon: Twitter,
            color: "bg-black",
            members: "2k",
            link: "#"
        }
    ];

    const events = [
        {
            title: "Multi-Tenant Architecture Deep Dive",
            date: "Mar 15, 2025",
            time: "10:00 AM IST",
            type: "Webinar",
            image: "from-blue-600 to-indigo-600"
        },
        {
            title: "Campus Admin Office Hours",
            date: "Every Friday",
            time: "4:00 PM IST",
            type: "Live Q&A",
            image: "from-purple-600 to-pink-600"
        }
    ];

    return (
        <main className="font-outfit bg-white min-h-screen">
            <Navbar />

            {/* Hero Section */}
            <section className="bg-[#002B5B] pt-40 pb-24 text-center relative overflow-hidden">
                {/* Community Patterns */}
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#ffffff 1.5px, transparent 1.5px)', backgroundSize: '30px 30px' }}></div>

                <div className="container mx-auto px-6 relative z-10">
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        className="inline-flex items-center gap-2 px-4 py-1.5 bg-blue-500/20 border border-blue-400/30 text-blue-200 rounded-full text-sm font-bold mb-6 uppercase tracking-wider"
                    >
                        <Users size={16} />
                        Global Community
                    </motion.div>

                    <motion.h1
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight"
                    >
                        Join the <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Innovators</span>
                    </motion.h1>

                    <motion.p
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="text-lg text-blue-200/80 max-w-2xl mx-auto leading-relaxed mb-10"
                    >
                        Connect with developers, campus admins, and educators building the future of education on DURKKAS.
                    </motion.p>
                </div>
            </section>

            {/* Channels Grid */}
            <section className="py-20 -mt-20 relative z-20">
                <div className="container mx-auto px-6">
                    <div className="grid md:grid-cols-3 gap-6">
                        {channels.map((channel, i) => {
                            const Icon = channel.icon;
                            return (
                                <motion.a
                                    href={channel.link}
                                    key={i}
                                    initial={{ y: 20, opacity: 0 }}
                                    whileInView={{ y: 0, opacity: 1 }}
                                    transition={{ delay: i * 0.1 }}
                                    className="bg-white p-8 rounded-2xl shadow-xl shadow-blue-900/5 hover:-translate-y-2 transition-all duration-300 border border-slate-100 group"
                                >
                                    <div className={`w-14 h-14 ${channel.color} text-white rounded-xl flex items-center justify-center mb-6 shadow-lg`}>
                                        <Icon size={28} />
                                    </div>
                                    <h3 className="text-xl font-bold text-[#0f172a] mb-2 flex items-center justify-between">
                                        {channel.name}
                                        <ExternalLink size={16} className="text-slate-300 group-hover:text-blue-600 transition-colors" />
                                    </h3>
                                    <p className="text-slate-600 text-sm mb-6 min-h-[40px]">
                                        {channel.desc}
                                    </p>
                                    <div className="flex items-center gap-2 text-xs font-bold text-slate-400 bg-slate-50 px-3 py-1.5 rounded-full w-fit">
                                        <Users size={12} />
                                        {channel.members} Members
                                    </div>
                                </motion.a>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Upcoming Events */}
            <section className="py-20 bg-slate-50">
                <div className="container mx-auto px-6">
                    <div className="flex items-center justify-between mb-12">
                        <div>
                            <h2 className="text-3xl font-bold text-[#0f172a] mb-2">Upcoming Events</h2>
                            <p className="text-slate-600">Join our live sessions and learn from the best.</p>
                        </div>
                        <button className="hidden md:flex items-center gap-2 text-blue-600 font-bold hover:gap-3 transition-all">
                            View Calendar <ArrowRight size={18} />
                        </button>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {events.map((event, i) => (
                            <div key={i} className="flex bg-white rounded-2xl overflow-hidden border border-slate-200 hover:shadow-lg transition-all">
                                <div className={`w-24 bg-gradient-to-b ${event.image} flex flex-col items-center justify-center text-white p-4 text-center`}>
                                    <Calendar size={24} className="mb-2 opacity-80" />
                                    <span className="font-bold text-sm block leading-tight">{event.date.split(',')[0]}</span>
                                </div>
                                <div className="p-6 flex-1 flex flex-col justify-center">
                                    <span className="text-xs font-bold text-blue-600 uppercase tracking-wider mb-2">{event.type}</span>
                                    <h3 className="text-lg font-bold text-[#0f172a] mb-1">{event.title}</h3>
                                    <div className="flex items-center gap-2 text-sm text-slate-500">
                                        <Clock size={14} />
                                        {event.time}
                                    </div>
                                </div>
                                <div className="pr-6 flex items-center">
                                    <button className="px-4 py-2 border border-slate-200 rounded-lg text-sm font-bold text-slate-600 hover:bg-slate-50 transition-colors">
                                        Register
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Ambassador Program */}
            <section className="py-24 container mx-auto px-6">
                <div className="bg-[#002B5B] rounded-3xl p-12 relative overflow-hidden text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-10">
                    <div className="relative z-10 max-w-xl">
                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 text-white rounded-full text-xs font-bold mb-6">
                            <Rocket size={14} className="text-yellow-400" />
                            Campus Lead Program
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Become a DURKKAS Ambassador</h2>
                        <p className="text-blue-100 mb-8 text-lg">
                            Are you a student or educator passionate about technology? Lead the digital transformation in your campus and earn exclusive perks.
                        </p>
                        <button className="px-8 py-3 bg-white text-[#002B5B] font-bold rounded-xl hover:bg-blue-50 transition-colors shadow-lg">
                            Apply for Cohort
                        </button>
                    </div>

                    {/* Visual Decor */}
                    <div className="relative z-10">
                        <div className="w-64 h-64 bg-gradient-to-tr from-blue-500 to-cyan-400 rounded-2xl rotate-3 opacity-90 backdrop-blur-sm flex items-center justify-center shadow-2xl">
                            <Award size={80} className="text-white drop-shadow-md" />
                        </div>
                    </div>

                    {/* Background glow */}
                    <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-500/20 rounded-full blur-[100px] pointer-events-none" />
                </div>
            </section>
        </main>
    );
};

// Helper icon
// (moved to top)
export default CommunityPage;
