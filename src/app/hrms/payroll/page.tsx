"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    ArrowRight,
    CheckCircle2,
    Shield,
    Zap,
    TrendingUp,
    DollarSign,
    Lock,
    Users,
    Calendar,
    BarChart3,
    Cpu,
    AlertCircle,
    Clock,
    Cloud,
    Eye,
    Server
} from "lucide-react";
import Navbar from "@/components/Navbar";
import DemoRequestModal from "@/components/DemoRequestModal";

const PayrollPage = () => {
    const [isMounted, setIsMounted] = useState(false);
    const [isDemoOpen, setIsDemoOpen] = useState(false);
    const [selectedFeature, setSelectedFeature] = useState(0);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) return null;

    const coreFeatures = [
        {
            icon: DollarSign,
            title: "Salary Processing",
            description: "Run payroll in minutes with complete accuracy."
        },
        {
            icon: Lock,
            title: "Tax & Statutory Management",
            description: "Automatic handling of PF, ESI, TDS, and other compliance requirements."
        },
        {
            icon: Users,
            title: "Employee Self-Service Portal",
            description: "Employees can download payslips, tax reports, and update details securely."
        },
        {
            icon: Calendar,
            title: "Attendance & Leave Integration",
            description: "Sync attendance data directly into payroll calculations."
        },
        {
            icon: BarChart3,
            title: "Custom Reports & Analytics",
            description: "Make smarter financial decisions with real-time insights."
        }
    ];

    const whyFeatures = [
        {
            icon: Cpu,
            title: "Automated Calculations",
            description: "No more spreadsheets. Salaries, deductions, bonuses, and taxes are calculated instantly."
        },
        {
            icon: AlertCircle,
            title: "Compliance-Ready",
            description: "Stay aligned with the latest statutory regulations without manual updates."
        },
        {
            icon: Clock,
            title: "Time Saving",
            description: "Reduce payroll processing time from days to minutes."
        }
    ];

    const steps = [
        {
            number: "1",
            title: "Setup",
            description: "Add employees, salary structures, and policies."
        },
        {
            number: "2",
            title: "Automate",
            description: "Durkkas calculates payroll, taxes, and deductions automatically."
        },
        {
            number: "3",
            title: "Review & Approve",
            description: "Verify details with a single dashboard view."
        },
        {
            number: "4",
            title: "Pay & Report",
            description: "Disburse salaries and generate compliance reports instantly."
        }
    ];

    const benefits = [
        "Reduce payroll errors to near zero",
        "Improve employee trust and satisfaction",
        "Ensure on-time salary payments",
        "Maintain complete financial transparency",
        "Scale effortlessly as your team grows"
    ];

    const securityFeatures = [
        {
            icon: Lock,
            title: "End-to-End Data Encryption",
            description: "Military-grade encryption for all sensitive data"
        },
        {
            icon: Cloud,
            title: "Secure Cloud Backup",
            description: "Automatic backup and disaster recovery"
        },
        {
            icon: Eye,
            title: "Role-Based Access Control",
            description: "Fine-grained permissions for different users"
        },
        {
            icon: Server,
            title: "99.9% System Uptime",
            description: "Enterprise-grade infrastructure and reliability"
        }
    ];

    return (
        <div className="min-h-screen relative overflow-hidden font-outfit select-none bg-white">
            <Navbar />

            {/* ===== SECTION 1: HERO SECTION ===== */}
            <section className="relative z-10 pt-[90px] md:pt-[100px] lg:pt-[110px] pb-10 px-4 md:px-12 lg:px-24 max-w-[1600px] mx-auto min-h-screen flex items-center justify-center">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-12 items-center w-full">
                    {/* Left Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        {/* Top Label */}
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="text-xs md:text-sm text-slate-500 font-semibold mb-3 tracking-wide"
                        >
                            Payroll Management Platform
                        </motion.p>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black text-slate-900 leading-tight mb-3 md:mb-4"
                        >
                            Empowering <span className="text-blue-600">HR Teams</span> to <span className="text-red-600">Run</span> <span className="text-yellow-500">Payroll</span> Efficiently
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                            className="text-xs md:text-sm lg:text-base text-slate-600 mb-6 md:mb-8 leading-relaxed max-w-lg"
                        >
                            Durkkas Payroll streamlines salary processing, compliance management, and employee payments into one secure cloud platform — helping HR teams save time, reduce errors, and stay fully compliant.
                        </motion.p>

                        {/* Key Points - Compact */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="space-y-2 md:space-y-2.5 mb-6 md:mb-8"
                        >
                            <div className="flex items-center gap-2 md:gap-3">
                                <CheckCircle2 size={16} className="text-teal-500 flex-shrink-0 md:w-5 md:h-5" />
                                <span className="text-xs md:text-sm text-slate-700 font-semibold">Automated Salary Processing</span>
                            </div>
                            <div className="flex items-center gap-2 md:gap-3">
                                <CheckCircle2 size={16} className="text-teal-500 flex-shrink-0 md:w-5 md:h-5" />
                                <span className="text-xs md:text-sm text-slate-700 font-semibold">Real-Time Compliance Updates</span>
                            </div>
                            <div className="flex items-center gap-2 md:gap-3">
                                <CheckCircle2 size={16} className="text-teal-500 flex-shrink-0 md:w-5 md:h-5" />
                                <span className="text-xs md:text-sm text-slate-700 font-semibold">Secure Cloud-Based Payroll</span>
                            </div>
                        </motion.div>

                        {/* Buttons - Tight */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.5 }}
                            className="flex flex-col sm:flex-row gap-2 md:gap-3 w-full sm:w-auto"
                        >
                            <button
                                onClick={() => setIsDemoOpen(true)}
                                className="px-5 md:px-6 py-2.5 md:py-3 bg-blue-600 text-white text-xs md:text-sm font-bold rounded-lg hover:bg-blue-700 transition-all hover:scale-105 active:scale-95 cursor-pointer whitespace-nowrap"
                            >
                                Request Demo
                            </button>
                            <button className="px-5 md:px-6 py-2.5 md:py-3 bg-white text-slate-800 text-xs md:text-sm font-bold rounded-lg border-2 border-slate-300 hover:border-slate-400 transition-all hover:scale-105 active:scale-95 cursor-pointer whitespace-nowrap">
                                Durkkas Access
                            </button>
                        </motion.div>
                    </motion.div>

                    {/* Right Visual - Laptop with Floating Cards */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="relative flex items-center justify-center h-[280px] sm:h-[320px] md:h-[400px] lg:h-[500px]"
                    >
                        {/* Blurred background */}
                        <div className="absolute inset-0 blur-3xl opacity-20">
                            <div className="absolute inset-32 bg-gradient-to-br from-blue-300 to-teal-300 rounded-full" />
                        </div>

                        {/* Laptop Frame */}
                        <div className="relative z-20 w-40 sm:w-56 md:w-64 lg:w-96 h-24 sm:h-32 md:h-40 lg:h-64">
                            {/* Laptop Screen */}
                            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl sm:rounded-2xl lg:rounded-3xl rounded-b-lg sm:rounded-b-xl lg:rounded-b-2xl shadow-2xl border sm:border-2 lg:border-4 border-blue-900 overflow-hidden h-full">
                                <div className="p-2 sm:p-4 lg:p-6 h-full flex flex-col justify-between">
                                    {/* Screen Top */}
                                    <div>
                                        <div className="h-1 sm:h-1.5 lg:h-2 w-10 sm:w-16 lg:w-20 bg-blue-300 rounded mb-1 sm:mb-2 lg:mb-3" />
                                        <div className="h-1 sm:h-1.5 lg:h-2 w-16 sm:w-24 lg:w-32 bg-blue-200 rounded mb-1 sm:mb-1.5 lg:mb-2" />
                                        <div className="h-1 sm:h-1.5 lg:h-2 w-12 sm:w-20 lg:w-24 bg-blue-200 rounded" />
                                    </div>
                                    {/* Screen Middle */}
                                    <div className="flex gap-1 sm:gap-1.5 lg:gap-2">
                                        <div className="flex-1 h-5 sm:h-8 lg:h-12 bg-blue-200 rounded" />
                                        <div className="flex-1 h-5 sm:h-8 lg:h-12 bg-teal-200 rounded" />
                                        <div className="flex-1 h-5 sm:h-8 lg:h-12 bg-blue-100 rounded" />
                                    </div>
                                    {/* Screen Bottom */}
                                    <div className="grid grid-cols-2 gap-1 sm:gap-1.5 lg:gap-2">
                                        <div className="h-1.5 sm:h-2 lg:h-3 bg-blue-300 rounded" />
                                        <div className="h-1.5 sm:h-2 lg:h-3 bg-teal-300 rounded" />
                                    </div>
                                </div>
                            </div>

                            {/* Laptop Base */}
                            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-full w-36 sm:w-56 lg:w-80 h-1.5 sm:h-2 lg:h-3 bg-blue-900 rounded-b-lg sm:rounded-b-xl lg:rounded-b-2xl" />
                        </div>

                        {/* Net Salary Card - Top Right */}
                        <motion.div
                            animate={{ 
                                y: [0, -20, 0],
                                rotate: [0, 2, 0]
                            }}
                            transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute z-30 top-0 right-0 sm:right-2 md:right-2 lg:right-0 bg-white rounded-lg lg:rounded-2xl p-2 sm:p-3 lg:p-5 shadow-lg sm:shadow-xl lg:shadow-2xl border border-slate-100 w-32 sm:w-44 md:w-48 lg:w-64"
                        >
                            <p className="text-xs text-blue-600 font-bold mb-1.5 lg:mb-2">Net Salary Credited</p>
                            <div className="flex items-end gap-2 lg:gap-3 justify-between">
                                <div>
                                    <p className="text-lg sm:text-2xl md:text-3xl lg:text-4xl font-black text-slate-800">₹25,820</p>
                                </div>
                                <div className="bg-blue-50 p-1.5 sm:p-2 lg:p-3 rounded-lg">
                                    <DollarSign size={14} className="text-blue-600 sm:w-4 sm:h-4 lg:w-6 lg:h-6" />
                                </div>
                            </div>
                            <div className="h-1 sm:h-1.5 lg:h-2 bg-teal-200 rounded-full mt-2 sm:mt-3 lg:mt-4" />
                        </motion.div>

                        {/* Payroll Success Card - Middle Left */}
                        <motion.div
                            animate={{ 
                                y: [0, 15, 0],
                                rotate: [0, -2, 0]
                            }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
                            className="absolute z-30 top-1/3 -translate-y-1/2 left-0 sm:-left-1 md:-left-2 lg:left-0 bg-white rounded-lg lg:rounded-2xl p-2 sm:p-3 lg:p-5 shadow-lg sm:shadow-xl lg:shadow-2xl border border-slate-100 w-40 sm:w-56 md:w-52 lg:w-64"
                        >
                            <div className="flex items-start gap-2 lg:gap-3 mb-2 sm:mb-3 lg:mb-4">
                                <CheckCircle2 size={16} className="text-teal-500 flex-shrink-0 mt-0.5 sm:w-5 sm:h-5 lg:w-6 lg:h-6" />
                                <div>
                                    <p className="text-xs sm:text-sm lg:text-sm font-bold text-slate-800">Payroll Completed</p>
                                    <p className="text-xs text-slate-600">Successfully</p>
                                </div>
                            </div>
                            <div className="flex gap-1 sm:gap-2 lg:gap-3 h-6 sm:h-8 md:h-10 lg:h-12">
                                <div className="flex-1 bg-blue-300 rounded-lg" />
                                <div className="flex-1 bg-teal-300 rounded-lg" />
                                <div className="flex-1 bg-blue-200 rounded-lg" />
                            </div>
                        </motion.div>

                        {/* Analytics Card - Bottom Right */}
                        <motion.div
                            animate={{ 
                                y: [0, -15, 0],
                                rotate: [0, 1.5, 0]
                            }}
                            transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
                            className="absolute z-30 bottom-0 right-3 sm:right-4 md:right-4 lg:right-8 bg-white rounded-lg lg:rounded-2xl p-2 sm:p-3 lg:p-5 shadow-lg sm:shadow-xl lg:shadow-2xl border border-slate-100 w-36 sm:w-52 md:w-48 lg:w-64"
                        >
                            <div className="flex items-center justify-between mb-2 sm:mb-3 lg:mb-4">
                                <div>
                                    <p className="text-xs text-blue-600 font-bold">Payroll Analytics</p>
                                    <p className="text-xs text-slate-500 mt-0.5">User Management</p>
                                </div>
                                <TrendingUp size={14} className="text-teal-500 sm:w-4 sm:h-4 lg:w-5 lg:h-5" />
                            </div>
                            <div className="space-y-1 sm:space-y-1.5 lg:space-y-2">
                                <div className="flex items-center gap-2">
                                    <span className="text-xs font-bold text-slate-700 w-6">PF</span>
                                    <div className="flex-1 h-1 sm:h-1.5 lg:h-2 bg-teal-300 rounded-full" />
                                </div>
                                <div className="flex items-center gap-2">
                                    <span className="text-xs font-bold text-slate-700 w-6">PRI SH</span>
                                    <CheckCircle2 size={10} className="text-teal-500 flex-shrink-0 sm:w-3 sm:h-3 lg:w-3.5 lg:h-3.5" />
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* ===== SECTION 2: WHY DURKKAS PAYROLL ===== */}
            <section className="relative z-10 py-12 px-4 md:px-12 lg:px-24 max-w-[1600px] mx-auto overflow-hidden">
                {/* Background Elements */}
                <div className="absolute inset-0 -z-10">
                    <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-100/20 rounded-full blur-3xl" />
                    <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-blue-50/20 rounded-full blur-3xl" />
                </div>

                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false }}
                    className="text-center max-w-3xl mx-auto mb-20"
                >
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        viewport={{ once: false }}
                        transition={{ duration: 0.5 }}
                        className="inline-block mb-4"
                    >
                        <span className="px-4 py-2 bg-blue-100 text-blue-700 text-xs font-bold rounded-full uppercase tracking-widest">
                            Why Choose Durkkas
                        </span>
                    </motion.div>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 mb-6 leading-tight">
                        Payroll Transformed Into <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">Structured Automation</span>
                    </h2>
                    <p className="text-sm md:text-base lg:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
                        Managing payroll manually is risky. Durkkas transforms payroll into a structured, automated, and compliant workflow — delivering accuracy and efficiency every month.
                    </p>
                </motion.div>

                {/* Timeline Cards - Creative Grid */}
                <div className="relative">
                    {/* Desktop Timeline Line */}
                    <div className="hidden lg:block absolute top-32 left-0 right-0 h-1 bg-gradient-to-r from-blue-200 via-blue-400 to-blue-200" />

                    {/* Cards Grid */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 relative z-10">
                        {/* Card 1 */}
                        <motion.div
                            initial={{ opacity: 0, y: 30, scale: 0.9 }}
                            whileInView={{ opacity: 1, y: 0, scale: 1 }}
                            viewport={{ once: false }}
                            transition={{ duration: 0.6 }}
                            className="group relative"
                        >
                            <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-blue-400 rounded-2xl opacity-0 group-hover:opacity-20 transition duration-500 blur" />
                            <div className="relative bg-white rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-2xl transition-all border border-slate-100 h-full cursor-pointer">
                                {/* Badge */}
                                <div className="absolute -top-3 -right-3 w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-500 rounded-full flex items-center justify-center text-white font-black text-lg shadow-lg">
                                    1
                                </div>
                                
                              

                             <div className="mb-4">
                                    <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center mb-4 group-hover:bg-blue-200 transition">
                                        <Cpu size={24} className="text-blue-600" />
                                    </div>
                                    <p className="text-xs font-bold text-blue-600 uppercase tracking-widest">Phase 1</p>
                                </div>
                                <h3 className="text-lg md:text-xl font-black text-slate-900 mb-3 group-hover:text-blue-600 transition">
                                    Smart Payroll Automation
                                </h3>
                                <p className="text-sm text-slate-600 leading-relaxed mb-4">
                                    Automatically gather attendance, leave data, and salary components into one system.
                                </p>
                                <p className="text-xs font-semibold text-slate-500">25th – 27th Every Month</p>
                            </div>
                        </motion.div>

                        {/* Card 2 */}
                        <motion.div
                            initial={{ opacity: 0, y: 30, scale: 0.9 }}
                            whileInView={{ opacity: 1, y: 0, scale: 1 }}
                            viewport={{ once: false }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="group relative md:mt-8"
                        >
                            <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-blue-400 rounded-2xl opacity-0 group-hover:opacity-20 transition duration-500 blur" />
                            <div className="relative bg-white rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-2xl transition-all border border-slate-100 h-full cursor-pointer">
                                {/* Badge */}
                                <div className="absolute -top-3 -right-3 w-16 h-16 bg-gradient-to-br from-green-600 to-green-500 rounded-full flex items-center justify-center text-white font-black text-lg shadow-lg">
                                    2
                                </div>
                               

                                <div className="mb-4">
                                    <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center mb-4 group-hover:bg-green-200 transition">
                                        <BarChart3 size={24} className="text-green-600" />
                                    </div>
                                    <p className="text-xs font-bold text-green-600 uppercase tracking-widest">Phase 2</p>
                                </div>
                                <h3 className="text-lg md:text-xl font-black text-slate-900 mb-3 group-hover:text-green-600 transition">
                                    Accurate Calculations
                                </h3>
                                <p className="text-sm text-slate-600 leading-relaxed mb-4">
                                    Intelligent engine calculates salaries, taxes, PF, and ESI with precision.
                                </p>
                                <p className="text-xs font-semibold text-slate-500">28th – 29th Every Month</p>
                            </div>
                        </motion.div>

                        {/* Card 3 */}
                        <motion.div
                            initial={{ opacity: 0, y: 30, scale: 0.9 }}
                            whileInView={{ opacity: 1, y: 0, scale: 1 }}
                            viewport={{ once: false }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="group relative"
                        >
                            <div className="absolute -inset-0.5 bg-gradient-to-r from-amber-600 to-amber-400 rounded-2xl opacity-0 group-hover:opacity-20 transition duration-500 blur" />
                            <div className="relative bg-white rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-2xl transition-all border border-slate-100 h-full cursor-pointer">
                                {/* Badge */}
                                <div className="absolute -top-3 -right-3 w-16 h-16 bg-gradient-to-br from-amber-600 to-amber-500 rounded-full flex items-center justify-center text-white font-black text-lg shadow-lg">
                                    3
                                </div>
                                

                                <div className="mb-4">
                                    <div className="w-12 h-12 rounded-xl bg-amber-100 flex items-center justify-center mb-4 group-hover:bg-amber-200 transition">
                                        <Shield size={24} className="text-amber-600" />
                                    </div>
                                    <p className="text-xs font-bold text-amber-600 uppercase tracking-widest">Phase 3</p>
                                </div>
                                <h3 className="text-lg md:text-xl font-black text-slate-900 mb-3 group-hover:text-amber-600 transition">
                                    Compliance & Control
                                </h3>
                                <p className="text-sm text-slate-600 leading-relaxed mb-4">
                                    Built-in validation ensures statutory alignment before payroll approval.
                                </p>
                                <p className="text-xs font-semibold text-slate-500">29th – 30th Every Month</p>
                            </div>
                        </motion.div>

                        {/* Card 4 */}
                        <motion.div
                            initial={{ opacity: 0, y: 30, scale: 0.9 }}
                            whileInView={{ opacity: 1, y: 0, scale: 1 }}
                            viewport={{ once: false }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className="group relative md:mt-8"
                        >
                            <div className="absolute -inset-0.5 bg-gradient-to-r from-teal-600 to-teal-400 rounded-2xl opacity-0 group-hover:opacity-20 transition duration-500 blur" />
                            <div className="relative bg-white rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-2xl transition-all border border-slate-100 h-full cursor-pointer">
                                {/* Badge */}
                                <div className="absolute -top-3 -right-3 w-16 h-16 bg-gradient-to-br from-teal-600 to-teal-500 rounded-full flex items-center justify-center text-white font-black text-lg shadow-lg">
                                    4
                                </div>
                               

                                <div className="mb-4">
                                    <div className="w-12 h-12 rounded-xl bg-teal-100 flex items-center justify-center mb-4 group-hover:bg-teal-200 transition">
                                        <CheckCircle2 size={24} className="text-teal-600" />
                                    </div>
                                    <p className="text-xs font-bold text-teal-600 uppercase tracking-widest">Phase 4</p>
                                </div>
                                <h3 className="text-lg md:text-xl font-black text-slate-900 mb-3 group-hover:text-teal-600 transition">
                                    On-Time Disbursement
                                </h3>
                                <p className="text-sm text-slate-600 leading-relaxed mb-4">
                                    Employees receive accurate salaries directly to bank accounts securely.
                                </p>
                                <p className="text-xs font-semibold text-slate-500">Last Working Day</p>
                            </div>
                        </motion.div>
                    </div>
                </div>

              
            </section>

            {/* ===== SECTION 3: INTERACTIVE DASHBOARD ===== */}
            <section className="relative z-10 py-12 px-4 md:px-10 lg:px-24 max-w-[1600px] mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false }}
                    className="text-center max-w-3xl mx-auto mb-12"
                >
                    <h2 className="text-4xl md:text-5xl font-black text-slate-800 mb-4">
                        Everything You Need in One System
                    </h2>
                    <p className="text-lg text-slate-600">Explore our powerful features designed to streamline your payroll operations</p>
                </motion.div>

                {/* DESKTOP LAYOUT */}
                <div className="hidden lg:grid lg:grid-cols-12 gap-6 rounded-3xl overflow-hidden bg-white shadow-2xl border border-slate-100">
                    {/* LEFT SIDEBAR - NAVIGATION */}
                    <div className="lg:col-span-4 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-6 md:p-8 lg:rounded-3xl lg:rounded-r-none flex flex-col">
                        <h3 className="text-lg font-black text-white mb-8 uppercase tracking-wider flex items-center gap-2">
                            <div className="w-1 h-6 bg-gradient-to-b from-emerald-400 to-blue-500 rounded-full" />
                            Features
                        </h3>

                        {/* Feature Navigation */}
                        <div className="space-y-3 flex-1">
                            {coreFeatures.map((feature, index) => (
                                <motion.button
                                    key={index}
                                    onClick={() => setSelectedFeature(index)}
                                    whileHover={{ x: 8 }}
                                    whileTap={{ scale: 0.96 }}
                                    className={`w-full text-left p-4 rounded-xl transition-all duration-300 group flex items-center gap-3 ${
                                        selectedFeature === index
                                            ? "bg-gradient-to-r from-emerald-500 to-blue-600 shadow-lg shadow-emerald-500/20"
                                            : "bg-slate-700/30 hover:bg-slate-700/60"
                                    }`}
                                >
                                    <div className={`flex-shrink-0 p-2 rounded-lg transition-all ${
                                        selectedFeature === index 
                                            ? "bg-white/20" 
                                            : "bg-slate-600/30 group-hover:bg-slate-600/50"
                                    }`}>
                                        {React.createElement(feature.icon, { size: 20, className: selectedFeature === index ? "text-white" : "text-slate-300" })}
                                    </div>
                                    <div className="flex-1">
                                        <p className={`font-bold text-sm transition-all ${selectedFeature === index ? "text-white" : "text-slate-200 group-hover:text-white"}`}>
                                            {feature.title}
                                        </p>
                                    </div>
                                    {selectedFeature === index && (
                                        <motion.div
                                            layoutId="activeIndicator"
                                            className="w-2 h-2 rounded-full bg-white"
                                            initial={{ scale: 0 }}
                                            animate={{ scale: 1 }}
                                        />
                                    )}
                                </motion.button>
                            ))}
                        </div>

                        {/* Bottom CTA */}
                        <motion.button
                            onClick={() => setIsDemoOpen(true)}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="w-full mt-8 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-bold py-3 px-4 rounded-xl transition-all flex items-center justify-center gap-2 shadow-lg shadow-blue-500/20"
                        >
                            <Zap size={18} />
                            Request Demo
                        </motion.button>
                    </div>

                    {/* RIGHT CONTENT - ANIMATED DETAILS */}
                    <div className="lg:col-span-8 p-6 md:p-8 flex flex-col justify-between">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={selectedFeature}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                transition={{ duration: 0.3 }}
                                className="flex-1"
                            >
                                {(() => {
                                    const CurrentIcon = coreFeatures[selectedFeature].icon;
                                    return (
                                        <>
                                            {/* Feature Icon - Large */}
                                            <div className="flex items-center justify-between mb-8">
                                                <div>
                                                    <div className="w-16 h-16 bg-gradient-to-br from-emerald-100 to-blue-100 rounded-2xl flex items-center justify-center mb-4 group-hover:shadow-lg transition-all">
                                                        <CurrentIcon size={32} className="text-emerald-600" />
                                                    </div>
                                                    <h3 className="text-3xl md:text-4xl font-black text-slate-900 mb-2">
                                                        {coreFeatures[selectedFeature].title}
                                                    </h3>
                                                    <p className="text-lg text-slate-600 leading-relaxed">
                                                        {coreFeatures[selectedFeature].description}
                                                    </p>
                                                </div>
                                            </div>

                                            {/* Feature Benefits */}
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-8">
                                                {[
                                                    "Automated & Accurate",
                                                    "Real-time Updates",
                                                    "Full Compliance",
                                                    "Easy Integration"
                                                ].map((benefit, idx) => (
                                                    <motion.div
                                                        key={idx}
                                                        initial={{ opacity: 0, y: 10 }}
                                                        animate={{ opacity: 1, y: 0 }}
                                                        transition={{ delay: 0.1 + idx * 0.05 }}
                                                        className="flex items-center gap-3 p-3 bg-gradient-to-r from-emerald-50 to-blue-50 rounded-xl border border-emerald-100"
                                                    >
                                                        <div className="w-2 h-2 rounded-full bg-emerald-500 flex-shrink-0" />
                                                        <span className="text-sm font-semibold text-slate-700">{benefit}</span>
                                                    </motion.div>
                                                ))}
                                            </div>

                                            {/* Dashboard Preview */}
                                            <div className="mt-8 relative h-56 md:h-64 bg-gradient-to-br from-blue-100 via-purple-50 to-blue-50 rounded-2xl overflow-hidden border-2 border-blue-200 shadow-lg">
                                                {/* Animated Background */}
                                                <motion.div
                                                    animate={{ backgroundPosition: ["0% 0%", "100% 100%"] }}
                                                    transition={{ duration: 12, repeat: Infinity, repeatType: "reverse" }}
                                                    className="absolute inset-0 opacity-30"
                                                    style={{
                                                        backgroundImage: "linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, rgba(168, 85, 247, 0.1) 50%, rgba(59, 130, 246, 0.1) 100%)",
                                                        backgroundSize: "200% 200%"
                                                    }}
                                                />

                                                {/* Dashboard Content */}
                                                <div className="relative h-full p-4 md:p-6 flex flex-col">
                                                    {/* Header */}
                                                    <div className="flex items-center justify-between mb-4">
                                                        <h4 className="text-sm md:text-base font-bold text-slate-700">Payroll Dashboard</h4>
                                                        <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
                                                    </div>

                                                    {/* Metrics Cards */}
                                                    <div className="grid grid-cols-3 gap-2 md:gap-3 mb-4">
                                                        {[
                                                            { label: "Employees", value: "245", icon: "👥", color: "from-blue-400" },
                                                            { label: "Processed", value: "98%", icon: "✓", color: "from-green-400" },
                                                            { label: "Pending", value: "5", icon: "⏱", color: "from-orange-400" }
                                                        ].map((metric, idx) => (
                                                            <motion.div
                                                                key={idx}
                                                                initial={{ opacity: 0, y: 10 }}
                                                                animate={{ opacity: 1, y: 0 }}
                                                                transition={{ delay: 0.1 + idx * 0.1 }}
                                                                className={`bg-gradient-to-br ${metric.color} to-white/40 backdrop-blur-md rounded-lg p-3 md:p-4 border border-white/50 shadow-lg`}
                                                            >
                                                                <div className="text-xl md:text-2xl mb-1">{metric.icon}</div>
                                                                <p className="text-2xl md:text-3xl font-black text-slate-800">{metric.value}</p>
                                                                <p className="text-xs md:text-sm text-slate-600 font-semibold">{metric.label}</p>
                                                            </motion.div>
                                                        ))}
                                                    </div>

                                                    {/* Chart Bars */}
                                                    <div className="flex-1 flex items-end gap-2 md:gap-3">
                                                        {[60, 75, 45, 90, 70, 85].map((height, idx) => (
                                                            <motion.div
                                                                key={idx}
                                                                initial={{ height: 0 }}
                                                                animate={{ height: `${height}%` }}
                                                                transition={{ delay: 0.3 + idx * 0.05, duration: 0.8 }}
                                                                className={`flex-1 rounded-t-md shadow-md cursor-pointer transition-all hover:shadow-lg ${
                                                                    idx % 2 === 0 
                                                                        ? "bg-gradient-to-t from-blue-500 to-blue-300" 
                                                                        : "bg-gradient-to-t from-purple-500 to-purple-300"
                                                                }`}
                                                            />
                                                        ))}
                                                    </div>
                                                </div>

                                                {/* Corner Accent */}
                                                <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-blue-300/20 to-transparent rounded-tl-full" />
                                            </div>
                                        </>
                                    );
                                })()}
                            </motion.div>
                        </AnimatePresence>

                        {/* CTA Button */}
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => setIsDemoOpen(true)}
                            className="mt-8 w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-bold py-3 px-6 rounded-xl transition-all flex items-center justify-center gap-2 shadow-lg"
                        >
                            Learn More
                            <ArrowRight size={18} />
                        </motion.button>
                    </div>
                </div>

                {/* MOBILE & TABLET LAYOUT */}
                <div className="lg:hidden rounded-3xl overflow-hidden bg-white shadow-2xl border border-slate-100">
                    {/* MOBILE: Horizontal Tab Navigation */}
                    <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 p-4 overflow-x-auto">
                        <div className="flex gap-3 min-w-max">
                            {coreFeatures.map((feature, index) => (
                                <motion.button
                                    key={index}
                                    onClick={() => {
                                        setSelectedFeature(index);
                                        setTimeout(() => {
                                            const contentEl = document.getElementById(`mobile-content-${index}`);
                                            contentEl?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                                        }, 100);
                                    }}
                                    whileTap={{ scale: 0.95 }}
                                    className={`flex-shrink-0 px-4 py-3 rounded-lg whitespace-nowrap transition-all duration-300 flex items-center gap-2 text-sm font-bold ${
                                        selectedFeature === index
                                            ? "bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-lg"
                                            : "bg-slate-700/50 text-slate-200 hover:bg-slate-700/70"
                                    }`}
                                >
                                    {React.createElement(feature.icon, { size: 16, className: selectedFeature === index ? "text-white" : "text-slate-200" })}
                                    <span className="hidden sm:inline">{feature.title}</span>
                                    <span className="sm:hidden inline">
                                        {feature.title.split(' ')[0]}
                                    </span>
                                </motion.button>
                            ))}
                        </div>
                    </div>

                    {/* MOBILE: Content Area */}
                    <div className="p-6" id={`mobile-content-${selectedFeature}`}>
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={selectedFeature}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                transition={{ duration: 0.3 }}
                                className="space-y-4"
                            >
                                {(() => {
                                    const CurrentIcon = coreFeatures[selectedFeature].icon;
                                    return (
                                        <>
                                            {/* Title & Icon */}
                                            <div className="flex items-start gap-3">
                                                <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-blue-50 rounded-xl flex items-center justify-center flex-shrink-0">
                                                    <CurrentIcon size={24} className="text-blue-600" />
                                                </div>
                                                <div>
                                                    <h3 className="text-xl font-black text-slate-900">
                                                        {coreFeatures[selectedFeature].title}
                                                    </h3>
                                                    <p className="text-sm text-slate-600 mt-1">
                                                        {coreFeatures[selectedFeature].description}
                                                    </p>
                                                </div>
                                            </div>

                                            {/* Benefits */}
                                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                                {[
                                                    "Automated & Accurate",
                                                    "Real-time Updates",
                                                    "Full Compliance",
                                                    "Easy Integration"
                                                ].map((benefit, idx) => (
                                                    <motion.div
                                                        key={idx}
                                                        initial={{ opacity: 0, x: -10 }}
                                                        animate={{ opacity: 1, x: 0 }}
                                                        transition={{ delay: 0.05 + idx * 0.05 }}
                                                        className="flex items-center gap-2 p-2 bg-blue-50 rounded-lg border border-blue-100"
                                                    >
                                                        <div className="w-2 h-2 rounded-full bg-blue-500 flex-shrink-0" />
                                                        <span className="text-xs sm:text-sm font-semibold text-slate-700">{benefit}</span>
                                                    </motion.div>
                                                ))}
                                            </div>

                                            {/* Mini Dashboard */}
                                            <div className="relative bg-gradient-to-br from-blue-100 via-blue-50 to-purple-50 rounded-xl overflow-hidden border-2 border-blue-200 mt-4 shadow-md">
                                                {/* Animated Background */}
                                                <motion.div
                                                    animate={{ backgroundPosition: ["0% 0%", "100% 100%"] }}
                                                    transition={{ duration: 12, repeat: Infinity, repeatType: "reverse" }}
                                                    className="absolute inset-0 opacity-30"
                                                    style={{
                                                        backgroundImage: "linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, rgba(168, 85, 247, 0.1) 50%, rgba(59, 130, 246, 0.1) 100%)",
                                                        backgroundSize: "200% 200%"
                                                    }}
                                                />

                                                {/* Dashboard Content */}
                                                <div className="relative p-4 space-y-3">
                                                    {/* Header with Live Status */}
                                                    <div className="flex items-center justify-between">
                                                        <span className="font-bold text-sm text-slate-800">Live Dashboard</span>
                                                        <motion.div 
                                                            animate={{ scale: [1, 1.2, 1] }}
                                                            transition={{ duration: 2, repeat: Infinity }}
                                                            className="w-2.5 h-2.5 rounded-full bg-green-500"
                                                        />
                                                    </div>

                                                    {/* Quick Metrics */}
                                                    <div className="grid grid-cols-3 gap-2">
                                                        {[
                                                            { label: "Active", value: "245", color: "bg-blue-400" },
                                                            { label: "Done", value: "98%", color: "bg-green-400" },
                                                            { label: "Pending", value: "5", color: "bg-orange-400" }
                                                        ].map((metric, idx) => (
                                                            <motion.div
                                                                key={idx}
                                                                initial={{ scale: 0 }}
                                                                animate={{ scale: 1 }}
                                                                transition={{ delay: 0.1 + idx * 0.1 }}
                                                                className={`${metric.color} bg-opacity-20 rounded-lg p-2 text-center border border-opacity-30 ${metric.color}`}
                                                            >
                                                                <p className="font-black text-sm text-slate-800">{metric.value}</p>
                                                                <p className="text-xs text-slate-600 font-semibold">{metric.label}</p>
                                                            </motion.div>
                                                        ))}
                                                    </div>

                                                    {/* Bar Chart */}
                                                    <div className="pt-2">
                                                        <p className="text-xs font-bold text-slate-700 mb-2">Processing Trend</p>
                                                        <div className="flex items-end justify-between h-24 gap-1.5 bg-white/40 rounded-lg p-2">
                                                            {[60, 75, 45, 90, 70, 85].map((height, idx) => (
                                                                <motion.div
                                                                    key={idx}
                                                                    initial={{ height: "5%" }}
                                                                    animate={{ height: `${height}%` }}
                                                                    transition={{ delay: 0.2 + idx * 0.05, duration: 0.8 }}
                                                                    whileHover={{ boxShadow: "0 0 10px rgba(59, 130, 246, 0.6)" }}
                                                                    className={`flex-1 rounded-t ${
                                                                        idx % 2 === 0 
                                                                            ? "bg-gradient-to-t from-blue-500 to-blue-300" 
                                                                            : "bg-gradient-to-t from-purple-500 to-purple-300"
                                                                    } cursor-pointer shadow-md hover:shadow-lg transition-all`}
                                                                />
                                                            ))}
                                                        </div>
                                                    </div>

                                                    {/* Footer Stats */}
                                                    <div className="border-t border-blue-200 pt-2 grid grid-cols-2 gap-2 text-center text-xs">
                                                        <div>
                                                            <p className="font-black text-blue-600">99.9%</p>
                                                            <p className="text-slate-600">Uptime</p>
                                                        </div>
                                                        <div>
                                                            <p className="font-black text-green-600">24/7</p>
                                                            <p className="text-slate-600">Monitored</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* CTA */}
                                            <motion.button
                                                whileHover={{ scale: 1.02 }}
                                                whileTap={{ scale: 0.95 }}
                                                onClick={() => setIsDemoOpen(true)}
                                                className="w-full mt-6 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-bold py-3 rounded-xl transition-all"
                                            >
                                                Learn More
                                            </motion.button>
                                        </>
                                    );
                                })()}
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>

                {/* Feature Stats Row */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false }}
                    transition={{ delay: 0.4 }}
                    className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4"
                >
                    {[
                        { value: "99.9%", label: "Uptime" },
                        { value: "24/7", label: "Support" },
                        { value: "256-bit", label: "Encryption" },
                        { value: "ISO 27001", label: "Certified" }
                    ].map((stat, idx) => (
                        <motion.div
                            key={idx}
                            whileHover={{ y: -4 }}
                            className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-2xl p-6 text-center border border-slate-200 hover:border-emerald-300 transition-all"
                        >
                            <p className="text-2xl md:text-3xl font-black bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">
                                {stat.value}
                            </p>
                            <p className="text-sm text-slate-600 font-semibold mt-2">{stat.label}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </section>

            {/* ===== SECTION 4: HOW DURKKAS WORKS ===== */}
            <section className="relative z-10 py-12 px-6 md:px-12 lg:px-24 max-w-[1600px] mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false }}
                    className="text-center max-w-4xl mx-auto mb-12"
                >
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 mb-3">
                        Simple Process.<br />
                        <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
                            Powerful Results.
                        </span>
                    </h2>
                    <p className="text-base text-slate-600 mt-4">Follow our streamlined process to get your payroll up and running in minutes</p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
                    {/* Connecting Lines for Desktop */}
                    <svg className="hidden lg:block absolute top-20 left-0 w-full h-12 pointer-events-none" preserveAspectRatio="none">
                        <motion.line
                            x1="5%"
                            y1="24"
                            x2="95%"
                            y2="24"
                            stroke="url(#gradient)"
                            strokeWidth="3"
                            initial={{ strokeDasharray: 1000, strokeDashoffset: 1000 }}
                            whileInView={{ strokeDashoffset: 0 }}
                            viewport={{ once: false }}
                            transition={{ duration: 1.5 }}
                        />
                        <defs>
                            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                <stop offset="0%" stopColor="#3B82F6" />
                                <stop offset="100%" stopColor="#93C5FD" />
                            </linearGradient>
                        </defs>
                    </svg>

                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false }}
                            transition={{ delay: index * 0.15 }}
                            className="group relative"
                        >
                            {/* Card Container */}
                            <div className="flex flex-col items-center justify-center h-full">
                                {/* Circular Badge - Top */}
                                <motion.div
                                    whileHover={{ scale: 1.15, y: -5 }}
                                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                                    className="relative mb-6 z-10"
                                >
                                    {/* Outer Ring */}
                                    <div className="absolute inset-0 w-20 h-20 bg-gradient-to-br from-blue-100 to-blue-50 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                    
                                    {/* Badge */}
                                    <div className="relative w-20 h-20 rounded-full bg-gradient-to-br from-blue-600 to-blue-500 flex items-center justify-center shadow-xl shadow-blue-500/30 border-4 border-white group-hover:shadow-2xl group-hover:shadow-blue-500/50 transition-all">
                                        <div className="absolute inset-1 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center">
                                            <span className="text-white font-black text-3xl">{step.number}</span>
                                        </div>
                                    </div>

                                    {/* Checkmark animation on hover */}
                                    <motion.div
                                        initial={{ scale: 0, opacity: 0 }}
                                        whileHover={{ scale: 1, opacity: 1 }}
                                        className="absolute -top-2 -right-2 w-7 h-7 bg-white rounded-full flex items-center justify-center shadow-lg border-2 border-blue-600"
                                    >
                                        <span className="text-blue-600 font-bold text-sm">✓</span>
                                    </motion.div>
                                </motion.div>

                                {/* Main Card */}
                                <motion.div
                                    whileHover={{ y: -8, boxShadow: "0 20px 40px rgba(59, 130, 246, 0.2)" }}
                                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                                    className="w-full bg-gradient-to-br from-white to-blue-50 rounded-2xl p-6 md:p-8 border-2 border-blue-100 shadow-lg group-hover:border-blue-300 group-hover:shadow-xl transition-all relative overflow-hidden"
                                >
                                    {/* Background gradient on hover */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-transparent opacity-0 group-hover:opacity-50 transition-opacity duration-300" />

                                    {/* Content */}
                                    <div className="relative z-10">
                                        <h3 className="text-lg md:text-xl font-black text-slate-900 mb-2 text-center">
                                            {step.title}
                                        </h3>
                                        <p className="text-sm text-slate-600 text-center leading-relaxed mb-3">
                                            {step.description}
                                        </p>

                                        {/* Feature dots */}
                                        <div className="flex justify-center gap-2">
                                            {[1, 2, 3].map((dot) => (
                                                <motion.div
                                                    key={dot}
                                                    initial={{ scale: 0 }}
                                                    whileHover={{ scale: 1.2 }}
                                                    className={`w-2 h-2 rounded-full ${
                                                        dot <= index + 1
                                                            ? "bg-blue-600"
                                                            : "bg-blue-200"
                                                    } transition-colors`}
                                                />
                                            ))}
                                        </div>
                                    </div>

                                    {/* Decorative corner accent */}
                                    <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-blue-100 to-transparent rounded-bl-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                </motion.div>
                            </div>

                            {/* Mobile vertical connector */}
                            {index < steps.length - 1 && (
                                <div className="md:hidden flex justify-center my-3">
                                    <svg width="2" height="20" viewBox="0 0 2 20" className="stroke-blue-300">
                                        <line x1="1" y1="0" x2="1" y2="20" strokeWidth="2" stroke="url(#lineGrad)" />
                                        <defs>
                                            <linearGradient id="lineGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                                                <stop offset="0%" stopColor="#3B82F6" />
                                                <stop offset="100%" stopColor="#93C5FD" />
                                            </linearGradient>
                                        </defs>
                                    </svg>
                                </div>
                            )}
                        </motion.div>
                    ))}
                </div>

                {/* Bottom CTA Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false }}
                    transition={{ delay: 0.5 }}
                    className="mt-12 bg-gradient-to-r from-blue-600 to-blue-500 rounded-3xl p-6 md:p-8 shadow-2xl shadow-blue-500/30 text-center text-white relative overflow-hidden group"
                >
                    {/* Animated background */}
                    <motion.div
                        animate={{ backgroundPosition: ["0% 0%", "100% 100%"] }}
                        transition={{ duration: 8, repeat: Infinity, repeatType: "reverse" }}
                        className="absolute inset-0 opacity-20"
                        style={{
                            backgroundImage: "linear-gradient(45deg, rgba(255,255,255,0.1) 25%, transparent 25%, transparent 50%, rgba(255,255,255,0.1) 50%, rgba(255,255,255,0.1) 75%, transparent 75%, transparent)",
                            backgroundSize: "40px 40px"
                        }}
                    />
                    
                    <div className="relative z-10">
                        <h3 className="text-2xl md:text-3xl font-black mb-3">Ready to Transform Your Payroll?</h3>
                        <p className="text-blue-100 text-sm mb-6 max-w-2xl mx-auto">
                            Follow these 4 simple steps and automate your entire payroll process today
                        </p>
                        <motion.button
                            onClick={() => setIsDemoOpen(true)}
                            whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(255,255,255,0.3)" }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-white text-blue-600 hover:bg-blue-50 font-black py-3 px-8 rounded-xl transition-all shadow-lg text-sm md:text-base"
                        >
                            Get Started Now
                        </motion.button>
                    </div>
                </motion.div>
            </section>

            {/* ===== NEW SECTION 4.5: PAYROLL METRICS & ANALYTICS ===== */}
            <section className="relative z-10 py-12 px-4 md:px-12 lg:px-24 max-w-[1600px] mx-auto">
                <div className="grid md:grid-cols-2 gap-8 lg:gap-16 items-center">
                    {/* LEFT: Visualizations */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: false }}
                        transition={{ duration: 0.8 }}
                        className="space-y-8"
                    >
                        {/* Combined Charts Card */}
                        <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg border border-slate-100 overflow-hidden">
                            {/* Header with Tabs */}
                            <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-200">
                                <h4 className="text-sm font-bold text-slate-600 uppercase tracking-widest">Payroll Analytics</h4>
                                <div className="flex gap-2">
                                    <motion.button
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="px-4 py-2 text-xs font-bold rounded-lg bg-blue-100 text-blue-700 border border-blue-200"
                                    >
                                        Distribution
                                    </motion.button>
                                    <motion.button
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="px-4 py-2 text-xs font-bold rounded-lg bg-slate-100 text-slate-600 border border-slate-200 hover:bg-slate-200 transition"
                                    >
                                        Efficiency
                                    </motion.button>
                                </div>
                            </div>

                            {/* Tab Content - Pie Chart */}
                            <div>
                                <div className="mb-4">
                                    <h5 className="text-sm font-bold text-slate-700 mb-2">Salary Distribution by Component</h5>
                                    <p className="text-xs text-slate-500">Total Annual CTC: ₹50L</p>
                                </div>
                                
                                <div className="flex flex-col lg:flex-row gap-8 items-center">
                                    {/* Pie Chart */}
                                    <div className="flex-shrink-0">
                                        <div className="flex items-center justify-center h-48 w-48">
                                            <svg width="160" height="160" viewBox="0 0 160 160" className="drop-shadow-lg">
                                                {/* Pie Chart Segments with Animation */}
                                                <motion.circle
                                                    cx="80"
                                                    cy="80"
                                                    r="50"
                                                    fill="none"
                                                    stroke="#3B82F6"
                                                    strokeWidth="35"
                                                    pathLength="1"
                                                    initial={{ strokeDashoffset: 157 }}
                                                    whileInView={{ strokeDashoffset: 0 }}
                                                    viewport={{ once: false }}
                                                    transition={{ duration: 2, ease: "easeInOut" }}
                                                    style={{
                                                        strokeDasharray: "78.5 314",
                                                        transform: "rotate(-90deg)",
                                                        transformOrigin: "80px 80px"
                                                    }}
                                                />
                                                <motion.circle
                                                    cx="80"
                                                    cy="80"
                                                    r="50"
                                                    fill="none"
                                                    stroke="#10B981"
                                                    strokeWidth="35"
                                                    pathLength="1"
                                                    initial={{ strokeDashoffset: 157 }}
                                                    whileInView={{ strokeDashoffset: 0 }}
                                                    viewport={{ once: false }}
                                                    transition={{ duration: 2.2, ease: "easeInOut", delay: 0.2 }}
                                                    style={{
                                                        strokeDasharray: "117.75 314",
                                                        transform: "rotate(70deg)",
                                                        transformOrigin: "80px 80px"
                                                    }}
                                                />
                                                <motion.circle
                                                    cx="80"
                                                    cy="80"
                                                    r="50"
                                                    fill="none"
                                                    stroke="#F59E0B"
                                                    strokeWidth="35"
                                                    pathLength="1"
                                                    initial={{ strokeDashoffset: 157 }}
                                                    whileInView={{ strokeDashoffset: 0 }}
                                                    viewport={{ once: false }}
                                                    transition={{ duration: 2.4, ease: "easeInOut", delay: 0.4 }}
                                                    style={{
                                                        strokeDasharray: "117.75 314",
                                                        transform: "rotate(211deg)",
                                                        transformOrigin: "80px 80px"
                                                    }}
                                                />
                                                <motion.circle 
                                                    cx="80" 
                                                    cy="80" 
                                                    r="30" 
                                                    fill="white"
                                                    initial={{ scale: 0 }}
                                                    whileInView={{ scale: 1 }}
                                                    viewport={{ once: false }}
                                                    transition={{ duration: 0.5, delay: 0.6 }}
                                                />
                                                <motion.text 
                                                    x="80" 
                                                    y="85" 
                                                    textAnchor="middle"
                                                    className="text-xs font-bold fill-slate-900"
                                                    initial={{ opacity: 0 }}
                                                    whileInView={{ opacity: 1 }}
                                                    viewport={{ once: false }}
                                                    transition={{ duration: 0.5, delay: 0.8 }}
                                                >
                                                    ₹50L
                                                </motion.text>
                                            </svg>
                                        </div>
                                    </div>

                                    {/* Legend with animated labels */}
                                    <div className="space-y-3 flex-1">
                                        {[
                                            { color: "bg-blue-500", label: "Base Salary", percent: "40%", amount: "₹20L" },
                                            { color: "bg-green-500", label: "Benefits", percent: "37.5%", amount: "₹18.75L" },
                                            { color: "bg-amber-500", label: "Bonus", percent: "22.5%", amount: "₹11.25L" }
                                        ].map((item, idx) => (
                                            <motion.div
                                                key={idx}
                                                initial={{ opacity: 0, x: -20 }}
                                                whileInView={{ opacity: 1, x: 0 }}
                                                viewport={{ once: false }}
                                                transition={{ delay: 0.7 + idx * 0.1 }}
                                                className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-50 transition cursor-pointer group"
                                            >
                                                <div className={`w-4 h-4 ${item.color} rounded-full flex-shrink-0`} />
                                                <div className="flex-1">
                                                    <div className="flex items-center justify-between">
                                                        <span className="text-sm font-bold text-slate-700 group-hover:text-slate-900">{item.label}</span>
                                                        <span className="text-xs font-bold text-slate-500">{item.percent}</span>
                                                    </div>
                                                    <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden mt-1">
                                                        <motion.div
                                                            className={`h-full ${item.color}`}
                                                            initial={{ width: 0 }}
                                                            whileInView={{ width: item.percent }}
                                                            viewport={{ once: false }}
                                                            transition={{ duration: 1, delay: 0.7 + idx * 0.15 }}
                                                        />
                                                    </div>
                                                    <p className="text-xs text-slate-500 mt-1">{item.amount}</p>
                                                </div>
                                            </motion.div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Divider */}
                            <div className="my-8 border-t-2 border-slate-100" />

                            {/* Bar Chart - Processing Efficiency */}
                            <div>
                                <div className="mb-6">
                                    <h5 className="text-sm font-bold text-slate-700 mb-2">Monthly Processing Efficiency Trend</h5>
                                    <p className="text-xs text-slate-500">12-Month Performance Improvement</p>
                                </div>

                                <div>
                                    {/* Bar Chart with animated bars */}
                                    <div className="h-48 flex items-end justify-between gap-1.5 px-2 mb-4">
                                        {[
                                            { month: "J", value: 20, delay: 0 },
                                            { month: "F", value: 35, delay: 0.05 },
                                            { month: "M", value: 28, delay: 0.1 },
                                            { month: "A", value: 42, delay: 0.15 },
                                            { month: "M", value: 55, delay: 0.2 },
                                            { month: "J", value: 48, delay: 0.25 },
                                            { month: "J", value: 65, delay: 0.3 },
                                            { month: "A", value: 72, delay: 0.35 },
                                            { month: "S", value: 68, delay: 0.4 },
                                            { month: "O", value: 75, delay: 0.45 },
                                            { month: "N", value: 80, delay: 0.5 },
                                            { month: "D", value: 85, delay: 0.55 }
                                        ].map((bar, i) => (
                                            <motion.div
                                                key={i}
                                                className="flex-1 relative group"
                                                initial={{ height: 0 }}
                                                whileInView={{ height: `${bar.value}%` }}
                                                viewport={{ once: false }}
                                                transition={{ duration: 0.8, delay: bar.delay, ease: "easeOut" }}
                                            >
                                                <div className="w-full h-full bg-gradient-to-t from-blue-600 via-blue-500 to-blue-400 rounded-t-md shadow-md hover:shadow-lg transition-all relative cursor-pointer">
                                                    <motion.div
                                                        className="absolute -top-6 left-1/2 -translate-x-1/2 text-xs font-bold text-slate-700 bg-white px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition"
                                                        whileHover={{ y: -4 }}
                                                    >
                                                        {bar.value}%
                                                    </motion.div>
                                                </div>
                                            </motion.div>
                                        ))}
                                    </div>

                                    {/* Month Labels */}
                                    <div className="flex justify-between items-center text-xs text-slate-500 px-2">
                                        <span className="font-bold">Jan</span>
                                        <span>Feb</span>
                                        <span>Mar</span>
                                        <span>Apr</span>
                                        <span>May</span>
                                        <span>Jun</span>
                                        <span>Jul</span>
                                        <span>Aug</span>
                                        <span>Sep</span>
                                        <span>Oct</span>
                                        <span>Nov</span>
                                        <span className="font-bold">Dec</span>
                                    </div>

                                    {/* Stats Footer */}
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: false }}
                                        transition={{ delay: 1 }}
                                        className="mt-6 grid grid-cols-3 gap-4 p-4 bg-gradient-to-r from-blue-50 to-slate-50 rounded-lg border border-blue-100"
                                    >
                                        <div className="text-center">
                                            <p className="text-xs text-slate-500 font-semibold">Start</p>
                                            <p className="text-lg font-black text-blue-600 mt-1">20%</p>
                                        </div>
                                        <div className="text-center border-l border-r border-slate-200">
                                            <p className="text-xs text-slate-500 font-semibold">Avg</p>
                                            <p className="text-lg font-black text-slate-800 mt-1">56%</p>
                                        </div>
                                        <div className="text-center">
                                            <p className="text-xs text-slate-500 font-semibold">End</p>
                                            <p className="text-lg font-black text-green-600 mt-1">85% ↑</p>
                                        </div>
                                    </motion.div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* RIGHT: Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: false }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 mb-6">
                            Real-Time Payroll Intelligence
                        </h2>
                        <p className="text-sm md:text-base text-slate-600 mb-8 leading-relaxed">
                            Track every payroll metric in real-time. From salary distributions to processing efficiency, monitor your complete payroll health with interactive dashboards.
                        </p>

                        <div className="space-y-4 mb-44">
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: false }}
                                transition={{ delay: 0.3 }}
                                className="flex items-start gap-3 p-4 bg-blue-50 rounded-xl border border-blue-100 hover:border-blue-300 transition-all cursor-pointer group"
                            >
                                <div className="w-2 h-2 rounded-full bg-blue-600 flex-shrink-0 mt-2" />
                                <div>
                                    <h4 className="font-bold text-slate-800 text-sm mb-1">Instant Salary Analytics</h4>
                                    <p className="text-xs text-slate-600">View salary distribution across all employees instantly</p>
                                </div>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: false }}
                                transition={{ delay: 0.4 }}
                                className="flex items-start gap-3 p-4 bg-green-50 rounded-xl border border-green-100 hover:border-green-300 transition-all cursor-pointer group"
                            >
                                <div className="w-2 h-2 rounded-full bg-green-600 flex-shrink-0 mt-2" />
                                <div>
                                    <h4 className="font-bold text-slate-800 text-sm mb-1">Processing Speed Tracking</h4>
                                    <p className="text-xs text-slate-600">Monitor month-over-month payroll processing improvements</p>
                                </div>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: false }}
                                transition={{ delay: 0.5 }}
                                className="flex items-start gap-3 p-4 bg-amber-50 rounded-xl border border-amber-100 hover:border-amber-300 transition-all cursor-pointer group"
                            >
                                <div className="w-2 h-2 rounded-full bg-amber-600 flex-shrink-0 mt-2" />
                                <div>
                                    <h4 className="font-bold text-slate-800 text-sm mb-1">Compliance Metrics</h4>
                                    <p className="text-xs text-slate-600">Track statutory compliance and audit readiness in real-time</p>
                                </div>
                            </motion.div>
                        </div>

                        {/* Right-side cards row (two cards) */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: false }}
                                transition={{ delay: 0.6 }}
                                className="p-4 rounded-2xl bg-gradient-to-br from-white to-blue-50 border border-blue-100 shadow-md hover:shadow-lg transition-all"
                            >
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center">
                                            <AlertCircle size={20} className="text-blue-600" />
                                        </div>
                                        <div>
                                            <p className="text-sm font-bold text-slate-800">Payroll Alerts</p>
                                            <p className="text-xs text-slate-500">Critical notifications for failed runs & anomalies</p>
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <p className="text-lg font-black text-red-500">3</p>
                                        <p className="text-xs text-slate-500">Unresolved</p>
                                    </div>
                                </div>
                                <div className="mt-3">
                                    <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                                        <motion.div className="h-full bg-gradient-to-r from-red-400 to-red-300" initial={{ width: 0 }} animate={{ width: "30%" }} transition={{ duration: 1 }} />
                                    </div>
                                </div>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: false }}
                                transition={{ delay: 0.7 }}
                                className="p-4 rounded-2xl bg-gradient-to-br from-white to-blue-50 border border-blue-100 shadow-md hover:shadow-lg transition-all"
                            >
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center">
                                            <Users size={20} className="text-blue-600" />
                                        </div>
                                        <div>
                                            <p className="text-sm font-bold text-slate-800">Team Health</p>
                                            <p className="text-xs text-slate-500">Payslip access, pending approvals, and engagement</p>
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <p className="text-lg font-black text-blue-600">92%</p>
                                        <p className="text-xs text-slate-500">Active</p>
                                    </div>
                                </div>
                                <div className="mt-3">
                                    <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                                        <motion.div className="h-full bg-gradient-to-r from-emerald-400 to-blue-400" initial={{ width: 0 }} animate={{ width: "92%" }} transition={{ duration: 1 }} />
                                    </div>
                                </div>
                            </motion.div>
                        </div>

                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false }}
                            transition={{ delay: 0.6 }}
                            className="bg-gradient-to-r from-blue-100 to-blue-50 border border-blue-200 rounded-xl p-4 md:p-6"
                        >
                            <p className="text-sm text-slate-700 font-semibold">
                                💡 <span className="ml-2">Get actionable insights with Durkkas analytics — make data-driven decisions for your HR strategy.</span>
                            </p>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* ===== SECTION 5: BENEFITS FOR YOUR BUSINESS ===== */}
            <section className="relative z-10 py-12 px-6 md:px-12 lg:px-24 max-w-[1600px] mx-auto bg-gradient-to-r from-blue-50 to-emerald-50 rounded-3xl">
                <div className="grid md:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: false }}
                    >
                        <h2 className="text-4xl md:text-5xl font-black text-slate-800 mb-8">
                            Designed for Growth-Focused Companies
                        </h2>

                        <div className="space-y-4 mb-10">
                            {benefits.map((benefit, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: false }}
                                    transition={{ delay: index * 0.1 }}
                                    className="flex items-center gap-4"
                                >
                                    <div className="w-8 h-8 rounded-full bg-emerald-600 flex items-center justify-center flex-shrink-0">
                                        <CheckCircle2 size={18} className="text-white" />
                                    </div>
                                    <span className="text-lg text-slate-700 font-semibold">{benefit}</span>
                                </motion.div>
                            ))}
                        </div>

                        <p className="text-lg text-slate-600 leading-relaxed">
                            Whether you're a startup or an enterprise, Durkkas adapts to your needs and grows with your business.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: false }}
                        className="relative h-96"
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-emerald-400 to-blue-500 rounded-3xl shadow-2xl" />
                        <div className="absolute inset-4 bg-white rounded-2xl p-8 flex flex-col items-center justify-center">
                            <TrendingUp size={64} className="text-emerald-600 mb-4" />
                            <h3 className="text-2xl font-black text-slate-800 text-center">Scale Your Business</h3>
                            <p className="text-slate-600 text-center mt-2 text-sm font-semibold">Grow without payroll complexity</p>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* ===== SECTION 6: SECURITY & RELIABILITY ===== */}
            <section className="relative z-10 py-16 px-6 md:px-12 lg:px-24 max-w-[1600px] mx-auto overflow-hidden">
                {/* Background Animated Grid */}
                <div className="absolute inset-0 opacity-5">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-purple-600 to-blue-600" style={{
                        backgroundImage: "linear-gradient(0deg, rgba(59,130,246,.05) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,.05) 1px, transparent 1px)",
                        backgroundSize: "50px 50px"
                    }} />
                </div>

                {/* Content */}
                <div className="relative z-10">
                    {/* Header */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false }}
                        className="text-center max-w-4xl mx-auto mb-16"
                    >
                        <div className="inline-block mb-4">
                            <motion.div
                                animate={{ y: [0, -5, 0] }}
                                transition={{ duration: 3, repeat: Infinity }}
                                className="w-14 h-14 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center shadow-lg shadow-blue-500/50"
                            >
                                <Lock size={28} className="text-white" />
                            </motion.div>
                        </div>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 mb-4">
                            Enterprise-Grade<br />
                            <span className="bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent">
                                Security You Can Trust
                            </span>
                        </h2>
                        <p className="text-lg text-slate-600 leading-relaxed">
                            Payroll data is sensitive. Durkkas protects your information with advanced encryption, secure cloud infrastructure, and strict access controls.
                        </p>
                    </motion.div>

                    {/* Security Features - Unique 3D Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                        {securityFeatures.map((feature, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30, rotateX: 20 }}
                                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                                viewport={{ once: false }}
                                transition={{ delay: index * 0.1, duration: 0.6 }}
                                whileHover={{ y: -12, boxShadow: "0 25px 50px rgba(59, 130, 246, 0.3)" }}
                                className="group relative"
                            >
                                {/* Card Background */}
                                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-purple-600/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                
                                {/* Card Border Glow */}
                                <div className="absolute inset-0 rounded-2xl border border-blue-200 opacity-0 group-hover:opacity-100 transition-opacity duration-300 group-hover:shadow-lg" style={{
                                    boxShadow: "inset 0 0 20px rgba(59, 130, 246, 0.1), 0 0 20px rgba(59, 130, 246, 0.2)"
                                }} />

                                {/* Main Card */}
                                <div className="relative bg-gradient-to-br from-white to-blue-50/50 backdrop-blur-md rounded-2xl p-8 border border-blue-100/50 group-hover:border-blue-300 transition-all h-full flex flex-col">
                                    {/* Top Badge */}
                                    <motion.div
                                        whileHover={{ scale: 1.1, rotate: 10 }}
                                        className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-100 to-blue-50 flex items-center justify-center mb-6 group-hover:shadow-lg group-hover:shadow-blue-400/30 transition-all relative"
                                    >
                                        {/* Icon Container */}
                                        <motion.div
                                            animate={{ 
                                                filter: ["drop-shadow(0 0 10px rgba(59, 130, 246, 0.5))", "drop-shadow(0 0 20px rgba(59, 130, 246, 0.8))"]
                                            }}
                                            transition={{ duration: 2, repeat: Infinity }}
                                        >
                                            <feature.icon size={28} className="text-blue-600" />
                                        </motion.div>
                                        
                                        {/* Rotating Rings */}
                                        <motion.div
                                            animate={{ rotate: 360 }}
                                            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                                            className="absolute inset-0 rounded-full border border-blue-300 opacity-0 group-hover:opacity-100 transition-opacity"
                                        />
                                        <motion.div
                                            animate={{ rotate: -360 }}
                                            transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                                            className="absolute inset-1 rounded-full border border-blue-200 opacity-0 group-hover:opacity-50 transition-opacity"
                                        />
                                    </motion.div>

                                    {/* Content */}
                                    <h3 className="text-xl font-black text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                                        {feature.title}
                                    </h3>
                                    <p className="text-sm text-slate-600 leading-relaxed flex-1 mb-4">
                                        {feature.description}
                                    </p>

                                    {/* Security Level Indicator */}
                                    <div className="flex items-center gap-2">
                                        <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Security Level</span>
                                        <div className="flex gap-1">
                                            {[1, 2, 3].map((bar) => (
                                                <motion.div
                                                    key={bar}
                                                    initial={{ scaleY: 0.5 }}
                                                    animate={{ scaleY: 1 }}
                                                    transition={{ delay: bar * 0.1, repeat: Infinity, repeatType: "reverse", duration: 2 }}
                                                    className={`w-1 h-3 rounded-full ${bar === 1 ? "bg-green-400" : bar === 2 ? "bg-blue-500" : "bg-blue-600"}`}
                                                />
                                            ))}
                                        </div>
                                    </div>

                                    {/* Hover Glow Line */}
                                    <motion.div
                                        initial={{ scaleX: 0 }}
                                        whileHover={{ scaleX: 1 }}
                                        transition={{ type: "spring", stiffness: 300 }}
                                        className="absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r from-blue-400 to-blue-600 rounded-b-2xl origin-left"
                                    />
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Trust Badges Section */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: false }}
                        transition={{ delay: 0.4 }}
                        className="bg-gradient-to-r from-blue-600 to-blue-500 rounded-3xl p-8 md:p-12 relative overflow-hidden group"
                    >
                        {/* Animated Background */}
                        <div className="absolute inset-0 opacity-10">
                            <motion.div
                                animate={{ x: [0, 100, 0] }}
                                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                                className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent"
                                style={{ width: "100%" }}
                            />
                        </div>

                        {/* Content */}
                        <div className="relative z-10">
                            <h3 className="text-2xl md:text-3xl font-black text-white mb-8 text-center">
                                🔐 Trust & Compliance Certified
                            </h3>

                            {/* Badges Grid */}
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                                {[
                                    { icon: "🔒", label: "256-bit AES", desc: "Encryption" },
                                    { icon: "☁️", label: "Cloud", desc: "Secure" },
                                    { icon: "✅", label: "ISO 27001", desc: "Certified" },
                                    { icon: "🛡️", label: "99.9%", desc: "Uptime" }
                                ].map((badge, idx) => (
                                    <motion.div
                                        key={idx}
                                        whileHover={{ scale: 1.08, rotateY: 10 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="bg-white/20 backdrop-blur-md hover:bg-white/30 rounded-xl p-4 text-center border border-white/30 cursor-pointer transition-all group/badge"
                                    >
                                        <motion.div
                                            animate={{ y: [0, -5, 0] }}
                                            transition={{ duration: 2, delay: idx * 0.2, repeat: Infinity }}
                                            className="text-3xl md:text-4xl mb-2"
                                        >
                                            {badge.icon}
                                        </motion.div>
                                        <p className="text-white font-black text-sm md:text-base">{badge.label}</p>
                                        <p className="text-white/80 text-xs md:text-sm">{badge.desc}</p>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        {/* Corner Accents */}
                        <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full blur-3xl -mr-20 -mt-20" />
                        <div className="absolute bottom-0 left-0 w-40 h-40 bg-white/10 rounded-full blur-3xl -ml-20 -mb-20" />
                    </motion.div>

                    {/* Security Info Cards - Bottom Row */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false }}
                        transition={{ delay: 0.6 }}
                        className="mt-12 grid md:grid-cols-3 gap-6"
                    >
                        {[
                            { title: "Data Privacy", icon: "👤", bgFrom: "from-blue-50", bgTo: "to-blue-100", border: "border-blue-200" },
                            { title: "Compliance Ready", icon: "📋", bgFrom: "from-purple-50", bgTo: "to-purple-100", border: "border-purple-200" },
                            { title: "24/7 Monitoring", icon: "👁️", bgFrom: "from-indigo-50", bgTo: "to-indigo-100", border: "border-indigo-200" }
                        ].map((item, idx) => (
                            <motion.div
                                key={idx}
                                whileHover={{ scale: 1.05 }}
                                className={`bg-gradient-to-br ${item.bgFrom} ${item.bgTo} rounded-xl p-6 ${item.border} border group cursor-pointer`}
                            >
                                <motion.div
                                    animate={{ scale: [1, 1.1, 1] }}
                                    transition={{ duration: 2, repeat: Infinity }}
                                    className="text-4xl mb-3"
                                >
                                    {item.icon}
                                </motion.div>
                                <h4 className="font-black text-slate-900">{item.title}</h4>
                                <motion.div
                                    initial={{ scaleX: 0 }}
                                    whileHover={{ scaleX: 1 }}
                                    className={`h-1 rounded-full mt-2 origin-left ${
                                        idx === 0 ? "bg-blue-600" : idx === 1 ? "bg-purple-600" : "bg-indigo-600"
                                    }`}
                                />
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

    

            {/* Demo Modal */}
            <DemoRequestModal isOpen={isDemoOpen} onClose={() => setIsDemoOpen(false)} />

            <style jsx global>{`
                @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;700;900&display=swap');
                body {
                    background-color: #fff !important;
                    font-family: 'Outfit', sans-serif;
                }
            `}</style>
        </div>
    );
};

export default PayrollPage;
