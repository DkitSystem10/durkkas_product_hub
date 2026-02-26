"use client";

import React, { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import { motion } from 'framer-motion';
import {
    Mail, Phone, MapPin, Clock, Building2, HelpCircle,
    DollarSign, ArrowRight, MessageSquare, CheckCircle2
} from 'lucide-react';

import Logo from '@/components/Logo';

const ContactPage = () => {

    const [activeTab, setActiveTab] = useState('started');
    const [isSticky, setIsSticky] = useState(false);

    // Scroll Spy & Sticky Logic
    useEffect(() => {
        const handleScroll = () => {
            // Sticky Check (Nav is ~90px)
            const heroHeight = 400; // Approx hero height
            setIsSticky(window.scrollY > heroHeight - 100);

            // Scroll Spy
            const sections = ['started', 'support', 'sales', 'branches'];

            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    // If section is roughly in the top third of viewport
                    if (rect.top >= 0 && rect.top <= 300) {
                        setActiveTab(section);
                        break;
                    }
                    // Fallback for scrolling up: if we are well past a section, keep it active until the next one hits
                    else if (rect.top < 0 && rect.bottom > 150) {
                        setActiveTab(section);
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            // Check current window width to determine offset
            // Mobile usually has smaller headers, Desktop has fixed Navbar + Sticky Subnav
            const navOffset = 90; // Main Navbar
            const subNavOffset = 70; // Sub Navbar
            const totalOffset = navOffset + subNavOffset + 20; // + Padding

            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - totalOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            });
            setActiveTab(id);
        }
    };

    const navItems = [
        { id: 'started', label: 'Get Started' },
        { id: 'support', label: 'Client Support' },
        { id: 'sales', label: 'Sales & Partnerships' },
        { id: 'branches', label: 'Our Branches' }
    ];

    return (
        <main className="font-outfit bg-slate-50 min-h-screen text-slate-800 pb-32">
            <Navbar />

            {/* 1. Hero Section */}
            <section className="bg-[#002B5B] pt-40 pb-24 relative overflow-hidden text-white">
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-500/20 rounded-full blur-[100px] pointer-events-none" />
                <div className="container mx-auto px-6 text-center relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="max-w-7xl mx-auto"
                    >
                        <span className="inline-block px-4 py-1.5 bg-blue-500/20 border border-blue-400/30 text-blue-200 rounded-full text-sm font-bold mb-6 uppercase tracking-widest">
                            Contact Us
                        </span>
                        <h1 className="text-2xl md:text-5xl lg:text-7xl font-bold mb-8 leading-tight whitespace-nowrap overflow-visible">
                            <Logo inline text="DURKKAS Innovations Pvt Ltd" className="text-2xl md:text-5xl lg:text-7xl" />
                        </h1>
                        <p className="text-xl md:text-2xl text-blue-100/80 leading-relaxed max-w-2xl mx-auto font-light">
                            Enterprise-grade support and scalable solutions. Connect with the right team to move your business forward.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* 2. Sticky Sub-Navigation */}
            <div className={`sticky top-[80px] z-40 transition-all duration-300 ${isSticky ? 'bg-white shadow-md border-b border-slate-200 py-2' : 'bg-transparent py-6'}`}>
                <div className="container mx-auto px-6 overflow-x-auto no-scrollbar">
                    <div className="flex md:justify-center min-w-max gap-2 md:gap-4 p-1">
                        {navItems.map((item) => (
                            <button
                                key={item.id}
                                onClick={() => scrollToSection(item.id)}
                                className={`px-5 py-2.5 rounded-full text-sm font-bold transition-all whitespace-nowrap ${activeTab === item.id
                                    ? 'bg-[#002B5B] text-white shadow-lg'
                                    : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
                                    }`}
                            >
                                {item.label}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-6 max-w-5xl space-y-24 pt-12">

                {/* SECTION 1: Get Started */}
                <section id="started" className="scroll-mt-40">
                    <div className="flex items-center gap-3 mb-8">
                        <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center">
                            <MessageSquare size={20} />
                        </div>
                        <h2 className="text-3xl font-bold text-[#0f172a]">Get Started</h2>
                    </div>

                    <div className="bg-white rounded-2xl p-8 md:p-10 shadow-sm border border-slate-200 flex flex-col md:flex-row items-center gap-10">
                        <div className="flex-1">
                            <h3 className="text-xl font-bold mb-3">Enquire about our Platform</h3>
                            <p className="text-slate-600 mb-6 leading-relaxed">
                                Ready to modernize your institution? Our team offers personalized product demos and a comprehensive onboarding walkthrough.
                            </p>
                            <div className="flex items-center gap-3 text-sm font-medium text-slate-500 mb-6">
                                <span className="flex items-center gap-1.5"><CheckCircle2 size={16} className="text-green-500" /> Multi-Tenant Architecture</span>
                                <span className="flex items-center gap-1.5"><CheckCircle2 size={16} className="text-green-500" /> 99.9% Uptime</span>
                            </div>
                            <a href="mailto:enquiry@durkkas.com" className="inline-flex items-center gap-2 text-white bg-blue-600 px-6 py-3 rounded-xl font-bold hover:bg-blue-700 transition-colors">
                                <Mail size={18} /> enquiry@durkkas.com
                            </a>
                        </div>
                        <div className="w-full md:w-1/3 bg-slate-50 rounded-xl p-6 text-center border border-slate-100">
                            <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Response Time</p>
                            <p className="text-2xl font-bold text-[#0f172a]">24 Hours</p>
                            <p className="text-sm text-slate-500 mt-1">Typical turnaround for new enquiries</p>
                        </div>
                    </div>
                </section>

                {/* SECTION 2: Client Support */}
                <section id="support" className="scroll-mt-40">
                    <div className="flex items-center gap-3 mb-8">
                        <div className="w-10 h-10 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center">
                            <HelpCircle size={20} />
                        </div>
                        <h2 className="text-3xl font-bold text-[#0f172a]">Client Support</h2>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
                            <div className="w-12 h-12 bg-purple-50 text-purple-600 rounded-lg flex items-center justify-center mb-6">
                                <Phone size={24} />
                            </div>
                            <h3 className="text-xl font-bold mb-2">Customer Care</h3>
                            <p className="text-slate-600 mb-6 text-sm">
                                Dedicated line for existing enterprise clients requiring immediate assistance or troubleshooting.
                            </p>
                            <a href="tel:+919000000000" className="text-2xl font-bold text-[#0f172a] hover:text-purple-600 transition-colors">
                                +91 90000 00000
                            </a>
                        </div>
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
                            <div className="w-12 h-12 bg-slate-100 text-slate-600 rounded-lg flex items-center justify-center mb-6">
                                <Clock size={24} />
                            </div>
                            <h3 className="text-xl font-bold mb-2">Support Hours</h3>
                            <p className="text-slate-600 mb-6 text-sm">
                                Our technical team is available to assist you during business hours.
                            </p>
                            <div className="space-y-2 text-sm">
                                <div className="flex justify-between border-b border-slate-100 pb-2">
                                    <span className="font-semibold text-slate-700">Mon - Sat</span>
                                    <span>9:30 AM - 6:30 PM IST</span>
                                </div>
                                <div className="flex justify-between pt-2">
                                    <span className="font-semibold text-slate-700">Sunday</span>
                                    <span className="text-red-500 font-bold">Closed</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* SECTION 3: Sales */}
                <section id="sales" className="scroll-mt-40">
                    <div className="flex items-center gap-3 mb-8">
                        <div className="w-10 h-10 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center">
                            <DollarSign size={20} />
                        </div>
                        <h2 className="text-3xl font-bold text-[#0f172a]">Sales & Partnerships</h2>
                    </div>

                    <div className="bg-[#0f172a] rounded-3xl p-8 md:p-12 text-white relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-[80px]" />
                        <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
                            <div className="max-w-xl">
                                <h3 className="text-2xl font-bold mb-4">Scale with Enterprise Solutions</h3>
                                <p className="text-slate-300 leading-relaxed mb-8">
                                    Looking for custom pricing, multi-branch licensing, or white-label agreements?
                                    Our sales team specializes in structuring deals for large organizations.
                                </p>
                                <a href="mailto:pricing@durkkas.com" className="inline-flex items-center gap-2 bg-white text-[#0f172a] px-6 py-3 rounded-xl font-bold hover:bg-emerald-50 transition-colors">
                                    <Mail size={18} /> pricing@durkkas.com
                                </a>
                            </div>
                            <div className="hidden md:block">
                                <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/10 max-w-xs">
                                    <p className="text-emerald-400 font-bold text-sm uppercase tracking-wider mb-2">Partnership</p>
                                    <p className="text-sm text-slate-300">"DURKKAS enabled us to scale from 5 to 50 branches in under a year with zero friction."</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* SECTION 4: Locations */}
                <section id="branches" className="scroll-mt-40">
                    <div className="flex items-center gap-3 mb-8">
                        <div className="w-10 h-10 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center">
                            <Building2 size={20} />
                        </div>
                        <h2 className="text-3xl font-bold text-[#0f172a]">Our Branches</h2>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {/* Main Branch */}
                        <div className="bg-white p-8 rounded-2xl shadow-md shadow-slate-200/50 border border-slate-200 hover:border-blue-300 transition-colors group">
                            <div className="flex items-start justify-between mb-6">
                                <div>
                                    <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-bold mb-3 uppercase tracking-wide">Main Branch</span>
                                    <h3 className="text-2xl font-bold text-[#0f172a]">Aruppukottai</h3>
                                </div>
                                <div className="w-12 h-12 bg-slate-50 rounded-full flex items-center justify-center group-hover:bg-blue-50 transition-colors">
                                    <MapPin size={24} className="text-slate-400 group-hover:text-blue-600" />
                                </div>
                            </div>
                            <p className="text-slate-600 leading-relaxed border-t border-slate-100 pt-6">
                                123, Tech Park Avenue,<br />
                                Aruppukottai, Tamil Nadu,<br />
                                India - 626101
                            </p>
                        </div>

                        {/* Sub Branch */}
                        <div className="bg-white p-8 rounded-2xl shadow-md shadow-slate-200/50 border border-slate-200 hover:border-blue-300 transition-colors group">
                            <div className="flex items-start justify-between mb-6">
                                <div>
                                    <span className="inline-block px-3 py-1 bg-slate-100 text-slate-600 rounded-full text-xs font-bold mb-3 uppercase tracking-wide">Sub Branch</span>
                                    <h3 className="text-2xl font-bold text-[#0f172a]">Coimbatore</h3>
                                </div>
                                <div className="w-12 h-12 bg-slate-50 rounded-full flex items-center justify-center group-hover:bg-blue-50 transition-colors">
                                    <MapPin size={24} className="text-slate-400 group-hover:text-blue-600" />
                                </div>
                            </div>
                            <p className="text-slate-600 leading-relaxed border-t border-slate-100 pt-6">
                                45, Innovation Hub, Gandhipuram,<br />
                                Coimbatore, Tamil Nadu,<br />
                                India - 641012
                            </p>
                        </div>
                    </div>
                </section>

                {/* Final Closing */}
                <div className="text-center pt-12 pb-12 border-t border-slate-200">
                    <p className="text-slate-500 mb-4">Need something else?</p>
                    <button onClick={() => scrollToSection('started')} className="text-blue-600 font-bold hover:underline flex items-center justify-center gap-2">
                        Back to Enquiry <ArrowRight size={16} />
                    </button>
                </div>

            </div>
        </main>
    );
};

export default ContactPage;
