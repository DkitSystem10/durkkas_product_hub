"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
    ArrowRight,
    BadgeCheck,
    BellRing,
    Building2,
    CalendarDays,
    CheckCircle2,
    ClipboardCheck,
    FileSpreadsheet,
    Fingerprint,
    Landmark,
    ShieldCheck
} from "lucide-react";
import Navbar from "@/components/Navbar";
import DemoRequestModal from "@/components/DemoRequestModal";

const statutoryCards = [
    {
        title: "PF Auto Workflow",
        desc: "UAN mapping, monthly contribution logic, and ECR-ready output in one flow.",
        badge: "EPFO Ready",
        tone: "from-blue-500 to-cyan-500"
    },
    {
        title: "ESI Validation Grid",
        desc: "Eligibility checks, wage threshold rules, and challan preparation without manual errors.",
        badge: "ESIC Sync",
        tone: "from-emerald-500 to-teal-500"
    },
    {
        title: "PT Compliance Rules",
        desc: "State-wise slabs and branch mapping with real-time deduction previews.",
        badge: "State Logic",
        tone: "from-fuchsia-500 to-violet-500"
    }
];

const compliancePillars = [
    {
        icon: Landmark,
        title: "Rule Engine",
        desc: "Built-in updates for PF, ESI, PT, LWF and region-specific policy checks."
    },
    {
        icon: Fingerprint,
        title: "Audit Trail",
        desc: "Every override, revision, and approval action is stored with timestamp and user trace."
    },
    {
        icon: BellRing,
        title: "Deadline Alerts",
        desc: "Due-date reminders for challans, returns, and employee declarations."
    },
    {
        icon: FileSpreadsheet,
        title: "Form Outputs",
        desc: "Download compliance reports in structured formats for filing and review."
    }
];

const timeline = [
    {
        month: "01",
        label: "Statutory Setup",
        detail: "PF, ESI, PT, LWF master setup with employee and branch mapping.",
        leftLabel: "Employer & Branch Onboarding",
        leftDetail: "Establishment codes, branch hierarchy, and statutory registration alignment.",
        rightLabel: "Employee Compliance Mapping",
        rightDetail: "UAN/ESI/IP details, category tagging, and eligibility master validation."
    },
    {
        month: "02",
        label: "Monthly Processing",
        detail: "Accurate PF/ESI/PT/LWF deductions with wage limit and eligibility checks.",
        leftLabel: "Payroll Deduction Engine",
        leftDetail: "Auto PF/ESI/PT/LWF calculation using slab, ceiling, and contribution rules.",
        rightLabel: "Exception Handling",
        rightDetail: "Arrear, NCP days, and threshold-crossing validation before lock and approval."
    },
    {
        month: "03",
        label: "Filing Support",
        detail: "Challan preparation, return-ready reports, and due-date compliance tracking.",
        leftLabel: "Challan & Return Prep",
        leftDetail: "ECR-ready files, PT statements, and ESI return packs generated in one flow.",
        rightLabel: "Deadline Governance",
        rightDetail: "Due-date checklist, branch reminders, and escalation alerts for missed actions."
    },
    {
        month: "04",
        label: "Audit & Closure",
        detail: "Notice support, reconciliation, Form 16 support, and year-end statutory records.",
        leftLabel: "Audit Reconciliation",
        leftDetail: "Ledger-to-challan reconciliation and correction logs with traceable approvals.",
        rightLabel: "Year-End Statutory Pack",
        rightDetail: "Form support, compliance summaries, and downloadable audit-ready archives."
    }
];

const boardStats = [
    { label: "Compliance Accuracy", value: "99.2%" },
    { label: "Return Prep Time", value: "-68%" },
    { label: "Audit Readiness", value: "Always On" }
];

const trustBlocks = [
    { icon: ShieldCheck, title: "Encrypted Records", text: "Payroll and statutory records are secured end-to-end." },
    { icon: BadgeCheck, title: "Policy-Aligned Logic", text: "Rules are mapped to current statutory structures." },
    { icon: ClipboardCheck, title: "Review Controls", text: "Dual-level approvals reduce manual compliance risk." }
];

export default function StatutoryPage() {
    const [isDemoOpen, setIsDemoOpen] = useState(false);

    return (
        <div className="min-h-screen bg-white font-outfit select-none isolate">
            <div className="relative z-[400]">
                <Navbar />
            </div>

            {/* SECTION 1: Hero */}
            <section className="relative pt-[110px] pb-8 px-4 md:px-12 lg:px-24 max-w-[1600px] mx-auto overflow-hidden">
                <div className="absolute -top-24 left-1/4 w-80 h-80 bg-cyan-200/40 rounded-full blur-3xl" />
                <div className="absolute bottom-0 right-10 w-96 h-96 bg-blue-200/40 rounded-full blur-3xl" />

                <div className="relative grid lg:grid-cols-2 gap-10 items-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                    >
                        <span className="inline-flex items-center gap-2  px-4 py-2 rounded-full bg-blue-50 text-blue-700 border border-blue-100 text-xs font-black tracking-wide uppercase">
                            Statutory Management Platform
                        </span>
                        <h1 className="mt-5 text-3xl md:text-3xl lg:text-5xl font-black text-slate-900 leading-[1.05] tracking-tight">
                            <span className="text-blue-600">One</span>{" "}
                            <span className="text-block-600">Command</span>{" "}
                            <span className="text-yellow-500">Center</span>
                            <span className="block">
                                for <span className="text-blue-600">PF</span>,{" "}
                                <span className="text-red-600">ESI</span>,{" "}
                                <span className="text-yellow-500">PT</span> Compliance
                            </span>
                        </h1>
                        <p className="mt-5 text-slate-600 text-sm md:text-base max-w-xl leading-relaxed">
                            Automate recurring statutory tasks, control filing timelines, and keep payroll fully compliant with
                            a single high-visibility workflow.
                        </p>
                        <div className="mt-8 flex flex-wrap gap-3">
                            <button
                                onClick={() => setIsDemoOpen(true)}
                                className="px-7 py-3 rounded-xl bg-blue-600 text-white font-bold hover:bg-blue-700 hover:scale-105 active:scale-95 transition-all inline-flex items-center gap-2"
                            >
                                Request Demo <ArrowRight size={17} />
                            </button>
                            <a
                                href="/hrms/payroll"
                                className="px-7 py-3 rounded-xl border-2 border-slate-300 text-slate-700 font-bold hover:border-blue-300 hover:text-blue-600 hover:scale-105 transition-all"
                            >
                                View Payroll Module
                            </a>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.92 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.7, delay: 0.1 }}
                        className="relative"
                    >
                        <div className="pointer-events-none absolute -top-12 left-1/2 -translate-x-1/2 w-[82%] h-24 bg-cyan-300/30 blur-3xl rounded-full" />

                        <motion.div
                            animate={{ y: [0, -10, 0], rotate: [0, -2, 0] }}
                            transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute -left-2 top-10 z-20 rounded-xl bg-blue-600 text-white px-4 py-2 shadow-xl"
                        >
                            <p className="text-xs font-black tracking-wide">PF</p>
                            <p className="text-[11px] text-blue-100">Auto Filed</p>
                        </motion.div>

                        <motion.div
                            animate={{ y: [0, 12, 0], rotate: [0, 2, 0] }}
                            transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
                            className="absolute -right-3 top-24 z-20 rounded-xl bg-red-500 text-white px-4 py-2 shadow-xl"
                        >
                            <p className="text-xs font-black tracking-wide">ESI</p>
                            <p className="text-[11px] text-red-100">Validated</p>
                        </motion.div>

                        <motion.div
                            animate={{ y: [0, -8, 0], x: [0, 4, 0] }}
                            transition={{ duration: 4.1, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                            className="absolute right-10 -bottom-5 z-20 rounded-xl bg-yellow-400 text-slate-900 px-4 py-2 shadow-xl"
                        >
                            <p className="text-xs font-black tracking-wide">PT</p>
                            <p className="text-[11px] text-slate-700">State Sync</p>
                        </motion.div>

                        <motion.div
                            animate={{ y: [0, -9, 0] }}
                            transition={{ duration: 3.6, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
                            className="absolute right-8 -top-4 z-20 rounded-2xl border border-white/70 bg-white/90 backdrop-blur px-4 py-3 shadow-xl min-w-[185px]"
                        >
                            <div className="flex items-center justify-between">
                                <p className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">PF Challan</p>
                                <div className="relative w-3 h-3">
                                    <motion.span
                                        animate={{ scale: [1, 2.2], opacity: [0.65, 0] }}
                                        transition={{ duration: 1.3, repeat: Infinity, ease: "easeOut" }}
                                        className="absolute inset-0 rounded-full bg-rose-400"
                                    />
                                    <span className="absolute inset-0 rounded-full bg-rose-500 shadow-[0_0_10px_rgba(244,63,94,0.7)]" />
                                </div>
                            </div>
                            <p className="text-sm font-black text-slate-900 mt-1">Due in 2 Days</p>
                            <div className="mt-2.5 h-1.5 bg-slate-200 rounded-full overflow-hidden">
                                <motion.div
                                    initial={{ width: "0%" }}
                                    animate={{ width: ["0%", "84%", "0%"] }}
                                    transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
                                    className="h-full bg-gradient-to-r from-rose-500 to-orange-400"
                                />
                            </div>
                        </motion.div>

                        <motion.div
                            animate={{ y: [0, 10, 0], rotate: [0, 1.2, 0] }}
                            transition={{ duration: 4.4, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
                            className="absolute -left-5 bottom-16 z-20 rounded-2xl border border-cyan-100 bg-cyan-50 px-4 py-3 shadow-lg"
                        >
                            <p className="text-[11px] font-bold text-cyan-700 uppercase tracking-wider">ECR</p>
                            <p className="text-sm font-black text-cyan-900 mt-1">File Ready</p>
                        </motion.div>

                        <motion.div
                            animate={{ y: [0, -10, 0], x: [0, -4, 0] }}
                            transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
                            className="absolute -right-5 bottom-20 z-20 rounded-2xl border border-emerald-100 bg-emerald-50 px-4 py-3 shadow-lg"
                        >
                            <p className="text-[11px] font-bold text-emerald-700 uppercase tracking-wider">Return</p>
                            <p className="text-sm font-black text-emerald-900 mt-1">ESI Approved</p>
                        </motion.div>

                        <div className="rounded-[30px] border border-slate-200 bg-white p-4 sm:p-6 shadow-[0_24px_60px_rgba(2,132,199,0.2)]">
                            <div className="rounded-2xl bg-gradient-to-br from-slate-900 via-blue-900 to-cyan-800 p-6">
                                <p className="text-cyan-100 text-xs font-bold uppercase tracking-widest">Compliance Pulse</p>
                                <div className="mt-5 grid sm:grid-cols-3 gap-3">
                                    {boardStats.map((stat) => (
                                        <div
                                            key={stat.label}
                                            className="rounded-xl bg-white/10 border border-white/20 px-3 py-3 hover:bg-white/20 transition-all"
                                        >
                                            <p className="text-white text-xl font-black">{stat.value}</p>
                                            <p className="text-cyan-100 text-[11px] font-medium">{stat.label}</p>
                                        </div>
                                    ))}
                                </div>
                                <div className="mt-5 rounded-xl bg-white/10 border border-white/20 p-3">
                                    <div className="flex items-center justify-between text-[11px] text-cyan-100 mb-2">
                                        <span>Monthly Filing Health</span>
                                        <span>94%</span>
                                    </div>
                                    <div className="h-2 rounded-full bg-white/20 overflow-hidden">
                                        <motion.div
                                            initial={{ width: 0 }}
                                            animate={{ width: "94%" }}
                                            transition={{ duration: 1.1, delay: 0.5 }}
                                            className="h-full bg-gradient-to-r from-cyan-300 to-blue-300"
                                        />
                                    </div>
                                </div>

                                <div className="mt-4 grid grid-cols-3 gap-2">
                                    {["PF Queue", "ESI Queue", "PT Queue"].map((q, idx) => (
                                        <div key={q} className="rounded-lg bg-white/10 border border-white/15 p-2">
                                            <p className="text-[10px] text-cyan-100">{q}</p>
                                            <motion.div
                                                initial={{ width: "15%" }}
                                                animate={{ width: `${72 + idx * 8}%` }}
                                                transition={{ duration: 1.2, delay: 0.2 + idx * 0.12 }}
                                                className="h-1.5 mt-2 rounded-full bg-cyan-300"
                                            />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 16, repeat: Infinity, ease: "linear" }}
                            className="pointer-events-none absolute -top-6 -right-6 w-24 h-24 rounded-full border border-cyan-300/40"
                        />
                        <motion.div
                            animate={{ rotate: -360 }}
                            transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
                            className="pointer-events-none absolute -bottom-8 left-10 w-20 h-20 rounded-full border border-blue-300/30"
                        />
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 9, repeat: Infinity, ease: "linear" }}
                            className="pointer-events-none absolute top-1/2 -translate-y-1/2 -right-8 w-4 h-4 rounded-full bg-cyan-300/70 shadow-[0_0_25px_rgba(34,211,238,0.9)]"
                        />
                        <motion.div
                            animate={{ rotate: -360 }}
                            transition={{ duration: 11, repeat: Infinity, ease: "linear" }}
                            className="pointer-events-none absolute top-[36%] -left-6 w-3.5 h-3.5 rounded-full bg-blue-400/70 shadow-[0_0_20px_rgba(59,130,246,0.8)]"
                        />
                    </motion.div>
                </div>
            </section>

            {/* SECTION 2: Feature Gradient Cards */}
            <section className="py-6 px-4 md:px-12 lg:px-24 max-w-[1600px] mx-auto">
                <div className="grid md:grid-cols-3 gap-5">
                    {statutoryCards.map((card, idx) => (
                        <motion.div
                            key={card.title}
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            whileHover={{ y: -8 }}
                            className="group rounded-[24px] border border-slate-200 bg-white p-5 overflow-hidden relative"
                        >
                            <div className={`absolute top-0 left-0 h-1.5 w-full bg-gradient-to-r ${card.tone}`} />
                            <span className="inline-block px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-[11px] font-bold">
                                {card.badge}
                            </span>
                            <h3 className="mt-4 text-2xl font-black text-slate-900 group-hover:text-blue-700 transition-colors">
                                {card.title}
                            </h3>
                            <p className="mt-3 text-sm text-slate-600 leading-relaxed">{card.desc}</p>
                            <div className="mt-6 h-1 rounded-full bg-slate-100 overflow-hidden">
                                <div className="h-full w-0 group-hover:w-full transition-all duration-500 bg-gradient-to-r from-blue-500 to-cyan-500" />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* SECTION 3: Compliance Pillars */}
            <section className="py-8 px-4 md:px-12 lg:px-24 max-w-[1600px] mx-auto">
                <div className="rounded-[30px] bg-[#f6f8fb] border border-slate-200 p-6 md:p-10">
                    <div className="text-center max-w-3xl mx-auto mb-10">
                        <h2 className="text-3xl md:text-4xl font-black text-slate-900">Core Compliance Pillars</h2>
                        <p className="mt-3 text-slate-600 text-sm md:text-base">
                            Visual compliance map with connected nodes and numbered statutory responsibilities.
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-[360px_1fr] gap-10 items-center">
                        <div className="relative mx-auto w-[260px] h-[260px]">
                            <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
                                className="absolute inset-0 rounded-full border-2 border-dashed border-slate-400/70"
                            />
                            <div className="absolute inset-[36px] rounded-full bg-gradient-to-br from-[#2d2f8f] to-[#2a6bd6] shadow-[0_20px_40px_rgba(45,47,143,0.35)] flex items-center justify-center text-center p-6">
                                <p className="text-white text-sm font-black leading-snug">
                                    Key Statutory
                                    <br />
                                    Compliance
                                    <br />
                                    Pillars
                                </p>
                            </div>
                        </div>

                        <div className="space-y-5">
                            {compliancePillars.slice(0, 3).map((pillar, idx) => {
                                const styles = [
                                    {
                                        badge: "bg-red-500",
                                        ring: "border-red-200",
                                        line: "bg-red-400",
                                        card: "border-red-200 shadow-[0_8px_20px_rgba(239,68,68,0.15)]"
                                    },
                                    {
                                        badge: "bg-amber-500",
                                        ring: "border-amber-200",
                                        line: "bg-amber-400",
                                        card: "border-amber-200 shadow-[0_8px_20px_rgba(245,158,11,0.18)]"
                                    },
                                    {
                                        badge: "bg-cyan-500",
                                        ring: "border-cyan-200",
                                        line: "bg-cyan-400",
                                        card: "border-cyan-200 shadow-[0_8px_20px_rgba(6,182,212,0.18)]"
                                    }
                                ][idx];

                                return (
                                    <motion.div
                                        key={pillar.title}
                                        initial={{ opacity: 0, x: 24 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: idx * 0.1 }}
                                        whileHover={{ x: 6 }}
                                        className="relative pl-12"
                                    >
                                        <div className={`absolute left-0 top-1/2 -translate-y-1/2 w-8 h-0.5 ${styles.line}`} />
                                        <div className={`absolute left-8 top-1/2 -translate-y-1/2 w-4 h-4 rounded-full border-2 bg-white ${styles.ring}`} />

                                        <div className={`rounded-full border bg-white px-6 py-4 ${styles.card} hover:scale-[1.01] transition-all`}>
                                            <div className="flex items-center gap-4">
                                                <div className={`w-9 h-9 rounded-full ${styles.badge} text-white text-sm font-black flex items-center justify-center`}>
                                                    {idx + 1}
                                                </div>
                                                <div>
                                                    <h3 className="text-base md:text-lg font-black text-slate-900">{pillar.title}</h3>
                                                    <p className="text-xs md:text-sm text-slate-600 mt-0.5">{pillar.desc}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 4: Timeline Strip */}
            <section className="py-8 px-4 md:px-12 lg:px-24 max-w-[1600px] mx-auto">
                <div className="rounded-[30px] border border-blue-100 bg-gradient-to-br from-[#f8fbff] via-white to-[#eef6ff] p-6 md:p-10 overflow-hidden">
                    <div className="text-center mb-10">
                        <h2 className="text-3xl md:text-4xl font-black text-slate-900">Monthly Filing Timeline</h2>
                        <p className="text-slate-600 text-sm md:text-base mt-2">
                            Blue-white visual flow with connected time nodes for each statutory stage.
                        </p>
                    </div>

                    <div className="space-y-8">
                        {timeline.map((step, idx) => {
                            const isLeft = idx % 2 === 0;
                            const accents = [
                                { tone: "text-yellow-400", dot: "bg-yellow-400", line: "bg-blue-500" },
                                { tone: "text-red-400", dot: "bg-red-400", line: "bg-blue-500" },
                                { tone: "text-yellow-400", dot: "bg-yellow-400", line: "bg-blue-500" },
                                { tone: "text-red-400", dot: "bg-red-400", line: "bg-blue-500" }
                            ][idx];

                            return (
                                <motion.div
                                    key={step.month}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.08 }}
                                    className={`grid items-center gap-4 md:gap-8 ${isLeft ? "md:grid-cols-[1fr_180px_1fr]" : "md:grid-cols-[1fr_180px_1fr]"}`}
                                >
                                    <div className={isLeft ? "" : "md:order-3"}>
                                        <div className="rounded-2xl border border-blue-200 bg-white p-5 shadow-[0_12px_28px_rgba(37,99,235,0.10)] hover:-translate-y-1 transition-all">
                                            <p className="text-[11px] uppercase tracking-widest font-black text-blue-600">Step {step.month}</p>
                                            <h3 className="mt-2 text-2xl font-black text-slate-900">{step.label}</h3>
                                            <p className="mt-2 text-sm text-slate-600 leading-relaxed">{step.detail}</p>
                                        </div>
                                    </div>

                                    <div className="relative h-[140px] flex items-center justify-center md:order-2">
                                        <motion.div
                                            animate={{ rotate: isLeft ? 360 : -360 }}
                                            transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                                            className={`absolute w-[118px] h-[118px] rounded-full border-[4px] border-transparent ${isLeft ? "border-l-current border-b-current" : "border-r-current border-t-current"} ${accents.tone}`}
                                        />
                                        <motion.div
                                            animate={{ scale: [1, 1.06, 1] }}
                                            transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
                                            className="relative w-[88px] h-[88px] rounded-full bg-gradient-to-br from-blue-700 to-blue-500 text-white border-4 border-dashed border-white shadow-[0_10px_25px_rgba(30,64,175,0.35)] flex items-center justify-center text-center"
                                        >
                                            <p className="text-xs font-black leading-tight">
                                                Service
                                            </p>
                                        </motion.div>

                                        <div className={`hidden md:block absolute top-1/2 -translate-y-1/2 h-1 ${accents.line} ${isLeft ? "left-[-44px] w-[44px]" : "right-[-44px] w-[44px]"}`} />
                                        <div className={`hidden md:block absolute top-1/2 -translate-y-1/2 w-3.5 h-3.5 rounded-full ${accents.dot} ${isLeft ? "left-[-52px]" : "right-[-52px]"}`} />
                                    </div>

                                    <div className={isLeft ? "md:order-3" : "md:order-1"}>
                                        <div className="rounded-2xl border border-slate-200/80 bg-blue-50/50 p-4">
                                            <p className="text-[11px] uppercase tracking-widest font-bold text-slate-500">Service Deliverable</p>
                                            <p className="mt-1 text-lg font-black text-blue-700">
                                                {isLeft ? timeline[idx]?.leftLabel : timeline[idx]?.rightLabel}
                                            </p>
                                            <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                                                {isLeft ? timeline[idx]?.leftDetail : timeline[idx]?.rightDetail}
                                            </p>
                                            <div className="mt-3 h-1.5 rounded-full bg-white overflow-hidden">
                                                <motion.div
                                                    initial={{ width: "10%" }}
                                                    animate={{ width: ["10%", "90%", "10%"] }}
                                                    transition={{ duration: 2.6, repeat: Infinity, ease: "easeInOut", delay: idx * 0.15 }}
                                                    className={`${idx % 2 === 0 ? "bg-yellow-400" : "bg-red-400"} h-full`}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* SECTION 5: Trust Grid */}
            <section className="py-8 px-4 md:px-12 lg:px-24 max-w-[1600px] mx-auto">
                <div className="rounded-[30px] bg-gradient-to-br from-[#f7fbff] via-white to-[#eef4ff] border border-blue-200 p-6 md:p-10 relative overflow-hidden">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.14),transparent_45%)]" />

                    <div className="relative mb-10">
                        <h2 className="text-3xl md:text-4xl font-black text-slate-900 text-center">Trust & Visibility Highlights</h2>
                        <p className="mt-2 text-center text-slate-600 text-sm md:text-base">
                            Compliance milestones presented in an editorial timeline format.
                        </p>
                    </div>

                    <div className="relative">
                        <div className="hidden md:block absolute left-0 right-0 top-4 border-t border-dashed border-blue-400/70" />
                        <div className="grid md:grid-cols-4 gap-5 md:gap-6 relative">
                            {[...trustBlocks, { icon: BellRing, title: "Proactive Alerts Network", text: "Escalation-ready reminders ensure no filing deadline is missed across branches." }].map((item, idx) => (
                                <motion.div
                                    key={item.title}
                                    initial={{ opacity: 0, y: 24 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.08 }}
                                    whileHover={{ y: -8 }}
                                    className="relative pt-10 md:pt-14 group"
                                >
                                    <div className={`hidden md:block absolute left-1/2 -translate-x-1/2 top-4 h-10 border-l border-dashed ${idx % 2 === 0 ? "border-yellow-400/85" : "border-red-400/85"}`} />
                                    <div className={`hidden md:block absolute left-1/2 -translate-x-1/2 top-0 w-5 h-5 rounded-full border-2 shadow-[0_0_18px_rgba(59,130,246,0.35)] ${idx % 2 === 0 ? "bg-yellow-400 border-yellow-200" : "bg-red-400 border-red-200"}`} />

                                    <div className="h-full rounded-[18px] bg-white border border-dashed border-blue-300 p-5 shadow-[0_14px_30px_rgba(37,99,235,0.16)] hover:border-blue-500 transition-all">
                                        <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${idx % 2 === 0 ? "bg-yellow-50 text-yellow-600" : "bg-red-50 text-red-600"}`}>
                                            <item.icon size={24} />
                                        </div>
                                        <h3 className={`mt-4 text-[28px] leading-tight font-black ${idx % 2 === 0 ? "text-yellow-500" : "text-red-500"}`}>
                                            {idx + 1 < 10 ? `0${idx + 1}` : idx + 1}
                                        </h3>
                                        <h4 className="mt-1 text-xl font-black text-slate-900 leading-tight">{item.title}</h4>
                                        <p className="mt-3 text-sm text-slate-600 leading-relaxed">{item.text}</p>
                                        <div className="mt-4 h-1 rounded-full bg-blue-100 overflow-hidden">
                                            <div className={`h-full w-0 group-hover:w-full transition-all duration-500 ${idx % 2 === 0 ? "bg-gradient-to-r from-yellow-400 to-yellow-300" : "bg-gradient-to-r from-red-500 to-red-300"}`} />
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 6: Comparative Block */}
            <section className="py-8 px-4 md:px-12 lg:px-24 max-w-[1600px] mx-auto">
                <div className="rounded-[30px] border border-blue-200 bg-gradient-to-br from-white via-[#f5f9ff] to-[#ecf4ff] p-6 md:p-10 overflow-hidden relative">
                    <div className="absolute -top-16 right-16 w-64 h-64 rounded-full bg-blue-200/35 blur-3xl" />
                    <div className="absolute -bottom-24 left-12 w-72 h-72 rounded-full bg-cyan-200/30 blur-3xl" />

                    <div className="text-center mb-10 relative">
                        <h2 className="text-3xl md:text-4xl font-black text-slate-900">Compliance Impact Split</h2>
                        <p className="mt-2 text-slate-600 text-sm md:text-base">
                            Side-by-side experience view with a live statutory efficiency meter.
                        </p>
                    </div>

                    <div className="relative grid lg:grid-cols-[1fr_250px_1fr] gap-6 lg:gap-8 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -24 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="rounded-2xl border border-red-200 bg-white p-6 shadow-[0_14px_34px_rgba(239,68,68,0.10)]"
                        >
                            <p className="text-red-500 text-xs font-black uppercase tracking-widest">Without Structured Statutory</p>
                            <ul className="mt-4 space-y-3 text-slate-700 text-sm">
                                <li className="flex items-start gap-2"><span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-red-400" />Deadline misses and penalty risk</li>
                                <li className="flex items-start gap-2"><span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-red-400" />Manual deductions and reconciliation loops</li>
                                <li className="flex items-start gap-2"><span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-red-400" />Audit history scattered in sheets</li>
                            </ul>
                            <div className="mt-5 rounded-xl bg-red-50 border border-red-100 p-3">
                                <p className="text-[11px] uppercase tracking-widest font-bold text-red-500">Risk Pressure</p>
                                <div className="mt-2 h-2 rounded-full bg-red-100 overflow-hidden">
                                    <motion.div
                                        initial={{ width: "40%" }}
                                        animate={{ width: ["40%", "82%", "40%"] }}
                                        transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
                                        className="h-full bg-red-400"
                                    />
                                </div>
                            </div>
                        </motion.div>

                        <div className="relative h-[270px] flex items-center justify-center">
                            <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
                                className="absolute w-[210px] h-[210px] rounded-full border-2 border-dashed border-blue-300"
                            />
                            <motion.div
                                animate={{ rotate: -360 }}
                                transition={{ duration: 11, repeat: Infinity, ease: "linear" }}
                                className="absolute w-[160px] h-[160px] rounded-full border-2 border-dashed border-yellow-400/80"
                            />
                            <div className="relative w-[120px] h-[120px] rounded-full bg-gradient-to-br from-blue-600 to-blue-800 text-white flex flex-col items-center justify-center shadow-[0_18px_40px_rgba(37,99,235,0.35)]">
                                <p className="text-[11px] uppercase tracking-widest text-blue-100">Efficiency</p>
                                <p className="text-3xl font-black leading-none mt-1">94%</p>
                            </div>
                            <div className="absolute top-4 right-8 px-3 py-1 rounded-full text-[11px] font-bold bg-yellow-300 text-slate-900">
                                Faster Filing
                            </div>
                            <div className="absolute bottom-5 left-6 px-3 py-1 rounded-full text-[11px] font-bold bg-red-100 text-red-600 border border-red-200">
                                Low Risk Drift
                            </div>
                        </div>

                        <motion.div
                            initial={{ opacity: 0, x: 24 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="rounded-2xl border border-blue-200 bg-white p-6 shadow-[0_14px_34px_rgba(59,130,246,0.12)]"
                        >
                            <p className="text-blue-600 text-xs font-black uppercase tracking-widest">With Durkkas Statutory</p>
                            <ul className="mt-4 space-y-3 text-slate-700 text-sm">
                                <li className="flex items-start gap-2"><CheckCircle2 size={16} className="text-blue-500 mt-0.5" />Filing calendar with auto reminders</li>
                                <li className="flex items-start gap-2"><CheckCircle2 size={16} className="text-blue-500 mt-0.5" />Accurate PF/ESI/PT calculations by rule</li>
                                <li className="flex items-start gap-2"><CheckCircle2 size={16} className="text-blue-500 mt-0.5" />Centralized records and compliance exports</li>
                            </ul>
                            <div className="mt-5 rounded-xl bg-blue-50 border border-blue-100 p-3">
                                <p className="text-[11px] uppercase tracking-widest font-bold text-blue-600">Control Confidence</p>
                                <div className="mt-2 h-2 rounded-full bg-blue-100 overflow-hidden">
                                    <motion.div
                                        initial={{ width: "55%" }}
                                        animate={{ width: ["55%", "96%", "55%"] }}
                                        transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
                                        className="h-full bg-gradient-to-r from-blue-500 to-cyan-400"
                                    />
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* SECTION 7: Integration Mesh */}
            <section className="py-8 px-4 md:px-12 lg:px-24 max-w-[1600px] mx-auto">
                <div className="rounded-[30px] border border-blue-200 bg-gradient-to-br from-[#f9fbff] via-white to-[#edf5ff] p-6 md:p-10 overflow-hidden relative">
                    <div className="absolute -top-20 left-1/3 w-64 h-64 rounded-full bg-blue-200/30 blur-3xl" />

                    <div className="text-center mb-10 relative">
                        <h2 className="text-3xl md:text-4xl font-black text-slate-900">Connected With HRMS Stack</h2>
                        <p className="text-slate-600 mt-2 text-sm md:text-base">
                            One continuous pipeline from attendance capture to statutory output.
                        </p>
                    </div>

                    <div className="relative grid lg:grid-cols-[1fr_auto_1fr_auto_1fr] gap-4 lg:gap-3 items-stretch">
                        {[
                            {
                                icon: CalendarDays,
                                title: "Attendance Input",
                                sub: "Shift and wage base synced",
                                chip: "Live Feed",
                                chipTone: "bg-yellow-100 text-yellow-700"
                            },
                            {
                                icon: Building2,
                                title: "Payroll Engine",
                                sub: "Gross-to-net + deduction mapping",
                                chip: "Rule Applied",
                                chipTone: "bg-red-100 text-red-700"
                            },
                            {
                                icon: ClipboardCheck,
                                title: "Statutory Output",
                                sub: "Challans, returns, and reports",
                                chip: "Ready to File",
                                chipTone: "bg-blue-100 text-blue-700"
                            }
                        ].map((node, idx) => (
                            <React.Fragment key={node.title}>
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.08 }}
                                    whileHover={{ y: -6 }}
                                    className="group rounded-2xl border border-blue-200 bg-white p-5 shadow-[0_12px_28px_rgba(37,99,235,0.10)] hover:shadow-[0_16px_34px_rgba(37,99,235,0.18)] transition-all"
                                >
                                    <div className="flex items-center justify-between">
                                        <div className="w-11 h-11 rounded-xl bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all flex items-center justify-center">
                                            <node.icon size={20} />
                                        </div>
                                        <span className={`text-[11px] px-2.5 py-1 rounded-full font-bold ${node.chipTone}`}>
                                            {node.chip}
                                        </span>
                                    </div>

                                    <h3 className="mt-4 font-black text-slate-900 text-xl">{node.title}</h3>
                                    <p className="mt-1 text-sm text-slate-600">{node.sub}</p>

                                    <div className="mt-4 h-1.5 rounded-full bg-blue-100 overflow-hidden">
                                        <motion.div
                                            initial={{ width: "20%" }}
                                            animate={{ width: ["20%", "92%", "20%"] }}
                                            transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut", delay: idx * 0.2 }}
                                            className={`${idx === 0 ? "bg-yellow-400" : idx === 1 ? "bg-red-400" : "bg-blue-500"} h-full`}
                                        />
                                    </div>
                                </motion.div>

                                {idx < 2 && (
                                    <div className="hidden lg:flex items-center justify-center px-1">
                                        <motion.div
                                            animate={{ x: [0, 6, 0] }}
                                            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut", delay: idx * 0.2 }}
                                            className="w-10 h-10 rounded-full bg-white border border-blue-200 shadow-sm text-blue-600 flex items-center justify-center"
                                        >
                                            <ArrowRight size={18} />
                                        </motion.div>
                                    </div>
                                )}
                            </React.Fragment>
                        ))}
                    </div>
                </div>
            </section>

           
           

            <DemoRequestModal isOpen={isDemoOpen} onClose={() => setIsDemoOpen(false)} />
        </div>
    );
}
