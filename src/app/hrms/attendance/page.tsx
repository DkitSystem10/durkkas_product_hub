"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
    CheckCircle2,
    Users,
    Calendar,
    Clock,
    MapPin,
    Fingerprint,
    Cloud,
    Eye,
    Server,
    Lock
} from "lucide-react";
import Navbar from "@/components/Navbar";
import DemoRequestModal from "@/components/DemoRequestModal";

const AttendancePage = () => {
    const [isMounted, setIsMounted] = useState(false);
    const [isDemoOpen, setIsDemoOpen] = useState(false);
    const [selectedFeature, setSelectedFeature] = useState(0);
    const [openWhyFeature, setOpenWhyFeature] = useState<number | null>(0);
    const [hoveredWhyFeature, setHoveredWhyFeature] = useState<number | null>(null);
    const [activeSecurity, setActiveSecurity] = useState(0);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) return null;

    const coreFeatures = [
        {
            icon: Fingerprint,
            title: "Biometric & Face Verification",
            description: "Accurate time‑records with fingerprint, face or mobile check‑in."
        },
        {
            icon: MapPin,
            title: "Geo‑Fencing & IP Restriction",
            description: "Allow clock‑in only from approved locations or networks."
        },
        {
            icon: Clock,
            title: "Real‑Time Dashboard",
            description: "See who’s in, late or absent at a glance – updated live."
        },
        {
            icon: Calendar,
            title: "Leave & Shift Patterns",
            description: "Integrate planned leaves and staggered shifts seamlessly."
        }
    ];

    const whyFeatures = [
        {
            icon: Users,
            title: "Reduce Buddy Punching",
            description: "Secure verification stops proxy attendance instantly."
        },
        {
            icon: Clock,
            title: "Improve Punctuality",
            description: "Automated alerts and reports help correct late arrivals."
        },
        {
            icon: Cloud,
            title: "Sync with Payroll",
            description: "One‑click export keeps salary calculations error‑free."
        }
    ];
    const steps = [
        {
            number: "1",
            icon: Fingerprint,
            title: "Fingerprint Verification",
            description: "Employees place finger on the device for secure identity validation."
        },
        {
            number: "2",
            icon: Calendar,
            title: "Quick Note Entry",
            description: "HR can add shift notes, late reasons, or manual remarks in seconds."
        },
        {
            number: "3",
            icon: Clock,
            title: "Check-In / Check-Out",
            description: "System records in-time and out-time automatically from attendance terminals."
        },
        {
            number: "4",
            icon: CheckCircle2,
            title: "Auto Attendance Summary",
            description: "Daily totals, overtime, and status are calculated and ready for payroll."
        }
    ];
    const securityFeatures = [
        {
            icon: Lock,
            title: "End‑to‑End Encryption",
            description: "All check‑in data is encrypted and tamper‑proof."
        },
        {
            icon: Eye,
            title: "Audit Trails",
            description: "Complete history of attendance changes and overrides."
        },
        {
            icon: Server,
            title: "99.9% Uptime",
            description: "Cloud‑hosted service with automatic backups."
        }
    ];

    const securityVisuals = [
        { tone: "from-blue-900 via-cyan-800 to-sky-700", metric: "AES-256", label: "Encryption Layer" },
        { tone: "from-slate-900 via-indigo-800 to-blue-700", metric: "100%", label: "Trace Coverage" },
        { tone: "from-emerald-900 via-teal-800 to-cyan-700", metric: "99.9%", label: "Service Uptime" }
    ];

    const activeSecurityData = securityFeatures[activeSecurity] ?? securityFeatures[0];
    const activeSecurityVisual = securityVisuals[activeSecurity] ?? securityVisuals[0];
    const ActiveSecurityIcon = activeSecurityData.icon;

    return (
        <div className="min-h-screen relative overflow-hidden font-outfit select-none bg-white">
            <Navbar />
            {/* ===== HERO ===== */}
            <section className="relative z-10 pt-[110px] pb-16 px-4 md:px-12 lg:px-24 max-w-[1600px] mx-auto overflow-hidden">
                <div className="absolute -top-20 -left-12 w-72 h-72 bg-gradient-to-br from-cyan-200 to-blue-400 rounded-full opacity-30 blur-3xl" />
                <div className="absolute -bottom-24 right-0 w-96 h-96 bg-gradient-to-tr from-emerald-200 to-sky-300 rounded-full opacity-25 blur-3xl" />

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center relative">
                    {/* Left: Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="max-w-xl"
                    >
                        <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 text-blue-700 text-xs font-bold tracking-wide uppercase border border-blue-100">
                            AI-Powered Attendance
                        </span>

                        <h1 className="mt-5 text-3xl md:text-5xl font-black text-slate-900 leading-tight">
                            <span className="text-blue-600">Track</span>{" "}
                            <span className="text-red-500">Every</span>{" "}
                            <span className="text-yellow-500">Shift</span>
                            <span className="block">
                                <span className="text-blue-600">Without</span>{" "}
                                <span className="text-red-500">Manual</span>{" "}
                                <span className="text-yellow-500">Follow-Up</span>
                            </span>
                        </h1>

                        <p className="mt-5 text-slate-600 text-sm md:text-base leading-relaxed">
                            Build a reliable attendance culture with biometric validation, live status tracking, and automatic payroll sync in one clean workflow.
                        </p>

                        <div className="mt-7 grid grid-cols-3 gap-3">
                            {[
                                { label: "Accuracy", value: "99.9%" },
                                { label: "Late Alert", value: "Instant" },
                                { label: "Payroll Sync", value: "1-Click" }
                            ].map((item) => (
                                <div key={item.label} className="rounded-xl border border-slate-200 bg-white px-3 py-3 shadow-sm">
                                    <p className="text-lg font-black text-slate-900">{item.value}</p>
                                    <p className="text-[11px] text-slate-500 uppercase tracking-wide">{item.label}</p>
                                </div>
                            ))}
                        </div>

                        <div className="mt-8 flex flex-col sm:flex-row gap-4">
                            <button
                                onClick={() => setIsDemoOpen(true)}
                                className="px-8 py-3 bg-blue-600 text-white rounded-lg font-bold hover:bg-blue-700 transition shadow-lg"
                            >
                                Get Free Trial
                            </button>
                            <button className="px-8 py-3 bg-white text-blue-600 rounded-lg border-2 border-blue-600 hover:bg-blue-50 transition font-bold">
                                Watch Demo
                            </button>
                        </div>
                    </motion.div>

                    {/* Right: Visual Stack */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative h-[520px] sm:h-[620px] lg:h-[460px]"
                    >
                        <div className="absolute inset-0 rounded-3xl overflow-hidden">

                            <motion.div
                                animate={{ y: [0, -8, 0] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute left-[4%] sm:left-[18%] top-[110px] sm:top-[70px] w-[160px] sm:w-[190px] md:w-[220px] rounded-[26px] bg-slate-900 p-2 shadow-2xl rotate-[-8deg] sm:rotate-[-10deg] z-20"
                            >
                                <div className="rounded-[21px] bg-white p-3">
                                    <p className="text-[10px] font-semibold text-slate-500">Attendance App</p>
                                    <div className="mt-2 space-y-2">
                                        <div className="h-2 rounded bg-slate-200 w-5/6" />
                                        <div className="h-11 rounded-lg bg-blue-50 border border-blue-100" />
                                        <div className="h-9 rounded-lg bg-cyan-50 border border-cyan-100" />
                                        <div className="h-9 rounded-lg bg-amber-50 border border-amber-100" />
                                    </div>
                                </div>
                            </motion.div>

                            <motion.div
                                animate={{ y: [0, 10, 0] }}
                                transition={{ duration: 4.6, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute left-1/2 top-[12px] sm:top-[18px] -translate-x-1/2 sm:-translate-x-[33%] w-[190px] sm:w-[220px] md:w-[240px] rounded-[30px] bg-slate-900 p-2 shadow-[0_20px_45px_rgba(0,0,0,0.35)] z-30"
                            >
                                <div className="rounded-[24px] bg-white overflow-hidden">
                                    <div className="px-4 pt-3 pb-2 border-b border-slate-100">
                                        <p className="text-[10px] text-slate-500 font-semibold">Today Login Hours</p>
                                        <p className="text-sm font-black text-slate-900">09h : 11m</p>
                                    </div>
                                    <div className="p-3 space-y-2.5">
                                        <div className="rounded-lg bg-violet-100 border border-violet-200 p-2">
                                            <p className="text-[10px] text-violet-700 font-semibold">Punch In / Out</p>
                                        </div>
                                        <div className="grid grid-cols-2 gap-2">
                                            <div className="rounded-md bg-emerald-50 border border-emerald-100 p-2">
                                                <p className="text-[10px] text-slate-500">Present</p>
                                                <p className="text-xs font-black text-emerald-700">214</p>
                                            </div>
                                            <div className="rounded-md bg-rose-50 border border-rose-100 p-2">
                                                <p className="text-[10px] text-slate-500">Absent</p>
                                                <p className="text-xs font-black text-rose-700">05</p>
                                            </div>
                                        </div>
                                        <div className="h-2 rounded bg-slate-200 w-full" />
                                    </div>
                                </div>
                            </motion.div>

                            {[
                                { name: "Biometric & Face Verification", pos: "left-1 top-2 sm:left-2 sm:top-3 rotate-[-6deg]", color: "bg-blue-600 text-white border-blue-600" },
                                { name: "Geo-Fencing & IP Restriction", pos: "right-1 top-20 sm:right-2 sm:top-16 rotate-[5deg]", color: "bg-red-500 text-white border-red-500" },
                                { name: "Real-Time Dashboard", pos: "right-1 bottom-20 sm:right-3 sm:bottom-28 rotate-[-4deg]", color: "bg-yellow-300 text-slate-900 border-yellow-400" },
                                { name: "Leave & Shift Patterns", pos: "left-1 bottom-9 sm:left-3 sm:bottom-14 rotate-[4deg]", color: "bg-blue-100 text-blue-800 border-blue-300" }
                            ].map((tag, idx) => (
                                <motion.div
                                    key={tag.name}
                                    animate={{ y: [0, idx % 2 === 0 ? -6 : 6, 0] }}
                                    transition={{ duration: 3.2 + idx * 0.3, repeat: Infinity, ease: "easeInOut" }}
                                    className={`absolute ${tag.pos} px-1 py-0.5 sm:px-1.5 sm:py-1 rounded-xl border shadow-lg z-40 max-w-[140px] sm:max-w-[178px]`}
                                >
                                    <span className={tag.color + " px-1.5 py-1 sm:px-2 sm:py-1 rounded-lg inline-block text-[10px] sm:text-xs font-black"}>
                                        {tag.name}
                                    </span>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>
            {/* ===== HERO ANALYTICS STRIP ===== */}
            <section className="px-4 md:px-12 lg:px-24 max-w-[1600px] mx-auto pb-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false }}
                    className="rounded-3xl border border-slate-200 bg-white p-5 md:p-7 shadow-xl"
                >
                    <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 items-stretch">
                        <div className="lg:w-[42%] rounded-2xl bg-gradient-to-br from-blue-50 via-white to-yellow-50 border border-slate-200 p-5">
                            <p className="text-xs uppercase tracking-widest text-slate-500 font-bold">Attendance Snapshot</p>
                            <h3 className="mt-2 text-xl font-black text-slate-900">Live Workforce Graph</h3>

                            <div className="mt-5 space-y-3">
                                {[
                                    { name: "Present", value: 82, color: "bg-blue-500", tone: "text-blue-600" },
                                    { name: "Late", value: 12, color: "bg-red-500", tone: "text-red-500" },
                                    { name: "On Leave", value: 6, color: "bg-yellow-400", tone: "text-yellow-600" }
                                ].map((item) => (
                                    <div key={item.name}>
                                        <div className="flex items-center justify-between mb-1">
                                            <p className="text-sm font-bold text-slate-700">{item.name}</p>
                                            <p className={`text-sm font-black ${item.tone}`}>{item.value}%</p>
                                        </div>
                                        <div className="h-2.5 rounded-full bg-slate-100 overflow-hidden">
                                            <div className={`h-full ${item.color}`} style={{ width: `${item.value}%` }} />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="flex-1 rounded-2xl border border-slate-200 bg-white p-4 md:p-5">
                            <div className="flex items-center justify-between mb-3">
                                <p className="text-sm font-black text-slate-900">Animated Attendance Share</p>
                                <p className="text-xs font-bold text-slate-500">Live % Split</p>
                            </div>

                            <div className="rounded-xl bg-slate-50 border border-slate-200 p-4">
                                <div className="flex flex-col sm:flex-row items-center gap-5">
                                    <motion.div
                                        animate={{ rotate: [0, 360] }}
                                        transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
                                        className="w-[170px] h-[170px] rounded-full shadow-[0_10px_24px_rgba(15,23,42,0.18)]"
                                        style={{
                                            background:
                                                "conic-gradient(#ff1f1f 0% 25.5%, #2fd4da 25.5% 50.4%, #f20ff2 50.4% 67.6%, #ff9b1a 67.6% 77%, #a56a43 77% 82.3%, #6c8f99 82.3% 86.7%, #ff6f1a 86.7% 90.8%, #1f7fdd 90.8% 98.5%, #1a8a2e 98.5% 100%)"
                                        }}
                                    />

                                    <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-xs font-bold">
                                        {[
                                            { name: "Present", pct: "25.5%", tone: "text-red-600" },
                                            { name: "On Time", pct: "24.9%", tone: "text-cyan-600" },
                                            { name: "Check-Out", pct: "17.2%", tone: "text-fuchsia-600" },
                                            { name: "Late", pct: "9.4%", tone: "text-orange-500" },
                                            { name: "Half Day", pct: "5.3%", tone: "text-amber-700" },
                                            { name: "Remote", pct: "4.4%", tone: "text-slate-600" },
                                            { name: "Leave", pct: "3.1%", tone: "text-orange-600" },
                                            { name: "Shift Swap", pct: "7.7%", tone: "text-blue-600" },
                                            { name: "Other", pct: "1.5%", tone: "text-green-700" }
                                        ].map((item) => (
                                            <div key={item.name} className="flex items-center justify-between gap-2 min-w-[120px]">
                                                <span className="text-slate-600">{item.name}</span>
                                                <span className={item.tone}>{item.pct}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </section>
            {/* ===== CORE FEATURES ===== */}
            <section className="py-16 px-4 md:px-12 lg:px-24 max-w-[1600px] mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false }}
                    className="text-center mb-12"
                >
                    <span className="inline-flex px-4 py-1.5 rounded-full bg-cyan-50 border border-cyan-100 text-cyan-700 text-xs font-bold uppercase tracking-wide">
                        Attendance Stack
                    </span>
                    <h2 className="text-3xl md:text-4xl font-black text-slate-900 mt-4">
                        Features Built for Attendance
                    </h2>
                    <p className="text-sm text-slate-600 mt-3 max-w-2xl mx-auto">
                        Smart modules designed to validate check-ins, monitor live status, and keep HR operations audit-ready.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {coreFeatures.map((f, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 28 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false }}
                            transition={{ duration: 0.5, delay: idx * 0.08 }}
                            onMouseEnter={() => setSelectedFeature(idx)}
                            className={`group relative rounded-2xl border p-6 h-full transition-all duration-300 ${selectedFeature === idx
                                    ? "border-cyan-200 bg-gradient-to-b from-white to-cyan-50 shadow-xl"
                                    : "border-slate-200 bg-white shadow-md hover:shadow-lg"
                                }`}
                        >
                            <div className={`absolute top-0 left-0 h-full w-1 rounded-l-2xl transition-all duration-300 ${selectedFeature === idx ? "bg-cyan-500" : "bg-transparent group-hover:bg-cyan-300"}`} />

                            <div className="flex items-start justify-between gap-3 mb-5">
                                <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-cyan-100 text-cyan-700">
                                    <f.icon size={22} />
                                </div>
                                <span className="text-[10px] font-bold text-slate-500 bg-slate-100 px-2 py-1 rounded-full uppercase tracking-wide">
                                    Module {idx + 1}
                                </span>
                            </div>

                            <h3 className="text-lg font-black text-slate-900 leading-snug mb-2">
                                {f.title}
                            </h3>
                            <p className="text-sm text-slate-600 leading-relaxed mb-5">
                                {f.description}
                            </p>

                            <div className="mt-auto">
                                <div className="h-1.5 rounded-full bg-slate-200 overflow-hidden">
                                    <div
                                        className="h-full bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full transition-all duration-500"
                                        style={{ width: `${70 + idx * 8}%` }}
                                    />
                                </div>
                                <p className="text-[11px] text-slate-500 mt-2">Reliability score: {88 + idx * 3}%</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>
            {/* ===== WHY CHOOSE ===== */}
            <section className="py-16 px-4 md:px-12 lg:px-24 max-w-[1600px] mx-auto bg-blue-50">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false }}
                    className="text-center mb-12"
                >
                    <span className="px-4 py-2 bg-blue-100 text-blue-700 text-xs font-bold rounded-full uppercase tracking-widest">
                        Why Durkkas
                    </span>
                    <h2 className="text-3xl md:text-4xl font-black text-blue-950 mt-4">
                        Attendance Made Simple and Secure
                    </h2>
                </motion.div>

                <div className="relative overflow-hidden rounded-[30px] bg-gradient-to-br from-blue-100 via-sky-50 to-indigo-100 border border-blue-200 p-5 sm:p-7">
                    <div className="absolute -top-20 -right-16 w-72 h-72 rounded-full bg-blue-300/60 blur-3xl" />
                    <div className="absolute -bottom-24 -left-20 w-80 h-80 rounded-full bg-indigo-300/50 blur-3xl" />

                    {(() => {
                        const activeIdx = hoveredWhyFeature ?? openWhyFeature ?? 0;
                        const active = whyFeatures[activeIdx];
                        const ActiveIcon = active.icon;

                        return (
                            <div className="relative">
                                <div className="flex flex-wrap justify-center gap-3 mb-7">
                                    {whyFeatures.map((item, idx) => {
                                        const isActive = idx === activeIdx;
                                        return (
                                            <button
                                                key={item.title}
                                                onMouseEnter={() => setHoveredWhyFeature(idx)}
                                                onMouseLeave={() => setHoveredWhyFeature(null)}
                                                onClick={() => setOpenWhyFeature(idx)}
                                                className={`px-5 py-2.5 rounded-full text-sm md:text-base font-extrabold transition border shadow-sm ${isActive
                                                        ? "bg-blue-700 text-white border-blue-700"
                                                        : "bg-white/95 text-slate-700 border-slate-300 hover:bg-blue-600 hover:text-white hover:border-blue-600"
                                                    }`}
                                            >
                                                {item.title}
                                            </button>
                                        );
                                    })}
                                </div>

                                <motion.div
                                    key={activeIdx}
                                    initial={{ opacity: 0, y: 8 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.25 }}
                                    className="grid md:grid-cols-2 gap-6 items-center"
                                >
                                    <div className="relative min-h-[250px] rounded-3xl bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-700 p-6 overflow-hidden">
                                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,rgba(255,255,255,0.24),transparent_45%)]" />
                                        <div className="absolute top-6 right-6 w-24 h-24 rounded-full border border-white/30" />
                                        <div className="absolute top-10 right-10 w-3 h-3 rounded-full bg-cyan-200" />

                                        <div className="relative z-10">
                                            <div className="w-16 h-16 rounded-2xl bg-white/20 text-blue-100 flex items-center justify-center mb-5">
                                                <ActiveIcon size={30} />
                                            </div>
                                            <p className="text-xs uppercase tracking-widest text-blue-200">Active Pillar</p>
                                            <h3 className="mt-2 text-2xl font-black text-white leading-tight">{active.title}</h3>
                                            <p className="mt-3 text-sm text-slate-200 leading-relaxed">{active.description}</p>
                                        </div>
                                    </div>

                                    <div className="space-y-4">
                                        <div className="rounded-2xl bg-blue-50 border border-blue-200 p-4">
                                            <p className="text-xs uppercase text-blue-600 mb-1">Impact</p>
                                            <p className="text-lg font-black text-blue-900">{90 + activeIdx * 3}% Workforce Discipline</p>
                                        </div>
                                        <div className="rounded-2xl bg-blue-50 border border-blue-200 p-4">
                                            <p className="text-xs uppercase text-blue-600 mb-1">Processing</p>
                                            <p className="text-lg font-black text-blue-900">{82 + activeIdx * 5}% Faster Attendance Cycle</p>
                                        </div>
                                        <div className="rounded-2xl bg-blue-50 border border-blue-200 p-4">
                                            <p className="text-xs uppercase text-blue-600 mb-1">Reliability</p>
                                            <p className="text-lg font-black text-blue-900">{96 - activeIdx}% Data Confidence Score</p>
                                        </div>
                                    </div>
                                </motion.div>

                                <div className="mt-7 h-2 rounded-full bg-white/80 border border-blue-200 overflow-hidden">
                                    <motion.div
                                        key={`why-progress-${activeIdx}`}
                                        initial={{ width: "30%" }}
                                        animate={{ width: `${42 + activeIdx * 26}%` }}
                                        transition={{ duration: 0.35 }}
                                        className="h-full bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-500"
                                    />
                                </div>
                            </div>
                        );
                    })()}
                </div>
            </section>

            {/* ===== STEPS TIMELINE ===== */}
            <section className="py-16 md:py-20 px-4 md:px-12 lg:px-24 max-w-[1600px] mx-auto">
                <div className="relative overflow-hidden rounded-[28px] px-5 sm:px-8 lg:px-10 py-12 md:py-14 bg-gradient-to-r from-blue-100 via-sky-100 to-indigo-100 border border-blue-200">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(59,130,246,0.22),transparent_55%)]" />

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false }}
                        className="relative text-center mb-10"
                    >
                        <h2 className="text-3xl md:text-4xl font-black text-blue-900">
                            Get Started in Three Steps
                        </h2>
                        <div className="mt-5 flex flex-wrap justify-center gap-2">
                            <span className="px-3 py-1 rounded-full bg-white border border-blue-200 text-xs text-blue-700">Fingerprint Tap</span>
                            <span className="px-3 py-1 rounded-full bg-white border border-blue-200 text-xs text-blue-700">Note Entry</span>
                            <span className="px-3 py-1 rounded-full bg-white border border-blue-200 text-xs text-blue-700">Check-In / Check-Out</span>
                        </div>
                    </motion.div>

                    <div className="relative grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
                        {steps.map((s, idx) => (
                            <motion.div
                                key={s.number}
                                initial={{ opacity: 0, y: 28 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: false }}
                                transition={{ duration: 0.45, delay: idx * 0.08 }}
                                className="relative"
                            >
                                <div className="absolute -top-6 -right-4 w-24 h-24 rounded-full border border-blue-300/45" />
                                <div className="absolute -top-4 -right-1.5 w-2.5 h-2.5 rounded-full bg-blue-300" />

                                <div className="relative h-full rounded-[24px] border border-blue-200 bg-white/85 backdrop-blur-sm px-7 py-8 text-left shadow-[0_12px_24px_rgba(30,64,175,0.15)]">
                                    <div className="absolute top-4 left-4 w-8 h-8 rounded-full bg-blue-100 border border-blue-200 text-blue-700 text-sm font-black flex items-center justify-center">
                                        {s.number}
                                    </div>

                                    <div className="mb-5 flex justify-center">
                                        <div className="relative">
                                            <div className="absolute -inset-3 rounded-full bg-blue-300/25 blur-xl" />
                                            <s.icon size={34} className="relative text-blue-600" />
                                        </div>
                                    </div>
                                    <p className="text-[16px] md:text-[18px] leading-snug font-semibold text-blue-900 mb-3">
                                        {s.title}
                                    </p>
                                    <p className="text-sm leading-relaxed text-slate-600">
                                        {s.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ===== SECURITY ===== */}
            <section className="py-16 px-4 md:px-12 lg:px-24 max-w-[1600px] mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl md:text-4xl font-black text-slate-900">
                        Data Security You Can Trust
                    </h2>
                    <p className="text-sm text-slate-600 mt-3 max-w-2xl mx-auto"> Scroll through the left panels and the right preview updates instantly with matching visuals and details.
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
                    <div className="space-y-5">
                        {securityFeatures.map((item, idx) => (
                            <motion.div
                                key={item.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                onViewportEnter={() => setActiveSecurity(idx)}
                                onMouseEnter={() => setActiveSecurity(idx)}
                                viewport={{ amount: 0.55 }}
                                transition={{ duration: 0.45, delay: idx * 0.08 }}
                                className={`rounded-2xl border p-5 transition-all duration-300 cursor-pointer ${activeSecurity === idx
                                        ? "border-cyan-200 bg-cyan-50 shadow-lg"
                                        : "border-slate-200 bg-white hover:border-cyan-100"
                                    }`}
                            >
                                <div className="flex items-start gap-4">
                                    <div className={`w-11 h-11 rounded-xl flex items-center justify-center ${activeSecurity === idx ? "bg-cyan-100 text-cyan-700" : "bg-slate-100 text-slate-600"}`}>
                                        <item.icon size={20} />
                                    </div>
                                    <div>
                                        <p className="text-xs text-slate-500 font-semibold uppercase tracking-wide mb-1">Security Layer {idx + 1}</p>
                                        <h3 className="text-lg font-black text-slate-900">{item.title}</h3>
                                        <p className="text-sm text-slate-600 mt-2 leading-relaxed">{item.description}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    <div className="lg:sticky lg:top-24">
                        <motion.div
                            key={activeSecurity}
                            initial={{ opacity: 0.25, scale: 0.98 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.35 }}
                            className={`relative overflow-hidden rounded-3xl p-6 sm:p-7 bg-gradient-to-br ${activeSecurityVisual.tone} shadow-2xl min-h-[340px]`}
                        >
                            <div className="absolute -top-12 -right-10 w-48 h-48 rounded-full bg-white/10 blur-2xl" />
                            <div className="absolute -bottom-20 -left-10 w-56 h-56 rounded-full bg-white/10 blur-2xl" />

                            <div className="relative z-10">
                                <div className="w-12 h-12 rounded-xl bg-white/20 text-white flex items-center justify-center mb-5">
                                    <ActiveSecurityIcon size={22} />
                                </div>
                                <p className="text-xs uppercase tracking-widest text-cyan-100 mb-2">Live Security Preview</p>
                                <h3 className="text-2xl font-black text-white leading-tight">{activeSecurityData.title}</h3>
                                <p className="text-sm text-blue-100 mt-3 max-w-md">{activeSecurityData.description}</p>

                                <div className="mt-7 grid grid-cols-2 gap-3">
                                    <div className="rounded-xl bg-white/15 border border-white/20 p-3">
                                        <p className="text-[11px] uppercase tracking-wide text-blue-100">Metric</p>
                                        <p className="text-xl font-black text-white">{activeSecurityVisual.metric}</p>
                                    </div>
                                    <div className="rounded-xl bg-white/15 border border-white/20 p-3">
                                        <p className="text-[11px] uppercase tracking-wide text-blue-100">Scope</p>
                                        <p className="text-sm font-bold text-white">{activeSecurityVisual.label}</p>
                                    </div>
                                </div>

                                <div className="mt-6 space-y-2">
                                    <div className="h-2 rounded-full bg-white/20 overflow-hidden">
                                        <motion.div
                                            key={`a-${activeSecurity}`}
                                            initial={{ width: "25%" }}
                                            animate={{ width: `${78 + activeSecurity * 7}%` }}
                                            transition={{ duration: 0.45 }}
                                            className="h-full bg-cyan-200"
                                        />
                                    </div>
                                    <div className="h-2 rounded-full bg-white/20 overflow-hidden">
                                        <motion.div
                                            key={`b-${activeSecurity}`}
                                            initial={{ width: "20%" }}
                                            animate={{ width: `${65 + activeSecurity * 8}%` }}
                                            transition={{ duration: 0.45, delay: 0.06 }}
                                            className="h-full bg-emerald-200"
                                        />
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            <DemoRequestModal isOpen={isDemoOpen} onClose={() => setIsDemoOpen(false)} />
        </div>
    );
};

export default AttendancePage;
