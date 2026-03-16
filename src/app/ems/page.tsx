"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BarChart3,
  Bell,
  BookOpen,
  CheckCircle2,
  ClipboardCheck,
  ClipboardList,
  GraduationCap,
  Layers,
  Shield,
  Users,
  Video
} from "lucide-react";
import Navbar from "@/components/Navbar";
import DemoRequestModal from "@/components/DemoRequestModal";

const emsSections = [
  {
    id: "dashboard",
    badge: "Dashboard Overview",
    title: "EMS Dashboard Overview",
    body:
      "Unified view of courses, students, enrollments, live classes, and performance signals.",
    cta: "Open EMS Dashboard",
    accent: "from-blue-600 via-cyan-500 to-indigo-600"
  },
  {
    id: "courses",
    badge: "Course Management",
    title: "Effortless Course Creation & Management",
    body:
      "Create, organize, and manage courses with a powerful course management system. Define course structure, assign tutors, manage categories, and monitor course performance from a centralized interface.",
    cta: "Manage Courses",
    accent: "from-blue-600 via-emerald-400 to-green-500"
  },
  {
    id: "modules",
    badge: "Module & Lesson",
    title: "Structured Learning with Modules & Lessons",
    body:
      "Design your courses with an organized module and lesson structure. Upload learning materials, videos, and resources to provide students with a step-by-step guided learning experience.",
    cta: "Create Modules",
    accent: "from-yellow-400 via-amber-400 to-red-500"
  },
  {
    id: "enrollment",
    badge: "Student Enrollment",
    title: "Seamless Student Enrollment System",
    body:
      "Easily manage student registrations and course enrollments. Track student progress, enrollment status, and course activity to ensure a smooth learning journey.",
    cta: "Manage Enrollments",
    accent: "from-red-500 via-rose-500 to-orange-400"
  },
  {
    id: "live-classes",
    badge: "Live Classes",
    title: "Interactive Live Classes & Smart Attendance Tracking",
    body:
      "Schedule and manage live classes with integrated attendance tracking. Monitor student participation and ensure engagement through real-time class management tools.",
    cta: "Schedule Live Class",
    accent: "from-blue-700 via-indigo-600 to-sky-500"
  },
  {
    id: "assignments",
    badge: "Assignment Management",
    title: "Powerful Assignment Management System",
    body:
      "Create and distribute assignments easily. Set deadlines, attach course modules, and manage assignment submissions through a structured workflow designed for tutors and administrators.",
    cta: "Create Assignment",
    accent: "from-yellow-400 via-orange-400 to-red-500"
  },
  {
    id: "reports",
    badge: "Reports & Analytics",
    title: "Reports & Analytics Dashboard",
    body:
      "Monitor attendance, grading progress, and engagement trends with export-ready reports and real-time dashboards.",
    cta: "View Reports",
    accent: "from-blue-500 via-indigo-600 to-cyan-500"
  },

];

const sectionBg = [
  "bg-white",
  "bg-[#f6f8fb]",
  "bg-white",
  "bg-[#f9fbff]",
  "bg-white",
  "bg-[#fff8f2]",
  "bg-white",
  "bg-[#f9fbff]",
  "bg-white",
  "bg-[#fff9f0]"
];

const courseTabs = [
  {
    label: "Course Builder",
    detail:
      "Drag, drop, and publish modular courses with structured outcomes and tutor mapping.",
    previewTitle: "Course Blueprint",
    previewBody:
      "Instantly assemble modules, assign tutors, and publish outcomes with one flow.",
    metricLabel: "Metric",
    metricValue: "100%",
    scopeLabel: "Scope",
    scopeValue: "Template Coverage"
  },
  {
    label: "Tutor Assign",
    detail:
      "Match tutors by skill tags, availability, and batch load for faster launch.",
    previewTitle: "Tutor Matching",
    previewBody:
      "Auto-map tutors to courses with skills, availability, and workload balance.",
    metricLabel: "Metric",
    metricValue: "92%",
    scopeLabel: "Scope",
    scopeValue: "Skill Match"
  },
  {
    label: "Publish & Track",
    detail:
      "Release updates instantly and monitor course health with completion insights.",
    previewTitle: "Release Watch",
    previewBody:
      "Track live course launches with completion, drop-off, and engagement signals.",
    metricLabel: "Metric",
    metricValue: "96%",
    scopeLabel: "Scope",
    scopeValue: "Live Coverage"
  }
];

function CoursesVisual() {
  const [activeTab, setActiveTab] = useState(0);
  const active = courseTabs[activeTab];

  return (
    <div className="relative w-full py-4 px-2">
      {/* Subtle Background Glows */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-30">
        <div className="absolute top-0 left-0 w-64 h-64 bg-blue-400/10 rounded-full blur-[80px]" />
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-red-400/10 rounded-full blur-[80px]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto flex flex-col gap-6">
        {/* Compact Horizontal Tabs */}
        <div className="flex flex-wrap md:flex-nowrap gap-3">
          {courseTabs.map((tab, index) => {
            const isActive = index === activeTab;
            const colors = [
              { border: "border-blue-400/40", bg: "bg-blue-50", icon: "text-blue-600", activeBg: "bg-blue-600", activeBorder: "border-blue-600" },
              { border: "border-yellow-400/40", bg: "bg-yellow-50", icon: "text-yellow-700", activeBg: "bg-yellow-500", activeBorder: "border-yellow-500" },
              { border: "border-red-400/40", bg: "bg-red-50", icon: "text-red-600", activeBg: "bg-red-600", activeBorder: "border-red-600" }
            ][index];

            return (
              <button
                key={tab.label}
                onClick={() => setActiveTab(index)}
                className={`flex-1 min-w-[140px] px-4 py-3 rounded-2xl border transition-all duration-300 flex items-center gap-3 ${isActive
                    ? `${colors.activeBorder} ${colors.activeBg} text-white shadow-lg shadow-black/5 scale-[1.02]`
                    : `border-slate-200 bg-white hover:border-slate-300 text-slate-600`
                  }`}
              >
                <div className={`h-8 w-8 rounded-lg flex items-center justify-center shrink-0 ${isActive ? 'bg-white/20' : colors.bg}`}>
                  <BookOpen size={16} className={isActive ? 'text-white' : colors.icon} />
                </div>
                <span className="text-sm font-black truncate">{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Compact Preview Card */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="rounded-[32px] border border-slate-100 bg-white p-6 md:p-8 shadow-[0_20px_50px_rgba(0,0,0,0.04)] relative overflow-hidden"
        >
          {/* Theme Corner Decor */}
          <div className={`absolute top-0 right-0 w-32 h-32 opacity-[0.05] -mr-10 -mt-10 rounded-full ${activeTab === 0 ? 'bg-blue-600' : activeTab === 1 ? 'bg-yellow-500' : 'bg-red-600'
            }`} />

          <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] items-center gap-8">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <span className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest ${activeTab === 0 ? 'bg-blue-100 text-blue-700' :
                    activeTab === 1 ? 'bg-yellow-100 text-yellow-700' :
                      'bg-red-100 text-red-700'
                  }`}>
                  Phase 0{activeTab + 1}
                </span>
                <div className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Active System</span>
              </div>

              <h3 className="text-2xl md:text-3xl font-black text-slate-900 leading-tight">
                {active.previewTitle}
              </h3>
              <p className="text-sm text-slate-500 font-medium max-w-xl leading-relaxed">
                {active.previewBody}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              {[
                { label: active.metricLabel, val: active.metricValue, color: activeTab === 0 ? 'text-blue-600' : activeTab === 1 ? 'text-yellow-600' : 'text-red-600' },
                { label: active.scopeLabel, val: active.scopeValue, color: 'text-slate-900' }
              ].map((stat, idx) => (
                <div key={idx} className="bg-slate-50 rounded-2xl p-4 min-w-[140px] border border-slate-100">
                  <p className="text-[9px] font-black uppercase tracking-widest text-slate-400 mb-1">{stat.label}</p>
                  <p className={`text-xl font-black ${stat.color}`}>{stat.val}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 flex items-center justify-between border-t border-slate-50 pt-6">
            <div className="flex gap-2">
              <div className="h-1.5 w-12 rounded-full bg-blue-500" />
              <div className="h-1.5 w-8 rounded-full bg-yellow-500" />
              <div className="h-1.5 w-6 rounded-full bg-red-500" />
            </div>
            <button className="text-xs font-black text-slate-900 flex items-center gap-2 hover:gap-3 transition-all group">
              Explore Capability <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

const enrollmentSteps = [
  {
    title: "Automated Enrollment Flow",
    desc: "Bulk import, batch allocation, and auto-level mapping in one pass.",
    accent: "from-blue-600 to-indigo-700",
    light: "bg-blue-50 text-blue-600",
    pulseTitle: "Enrollment Pulse",
    pulseValue: "1,240",
    regions: [
      { name: "Tamil Nadu", val: "42%" },
      { name: "Kerala", val: "28%" },
      { name: "Karnataka", val: "31%" }
    ],
    verified: "10,000+",
    progress: "w-4/5"
  },
  {
    title: "Smart Eligibility Filters",
    desc: "Screen students by prerequisites, score bands, and cohort rules.",
    accent: "from-yellow-500 to-amber-600",
    light: "bg-yellow-50 text-yellow-700",
    pulseTitle: "Eligibility Check",
    pulseValue: "865",
    regions: [
      { name: "Undergrad", val: "45%" },
      { name: "Postgrad", val: "35%" },
      { name: "Diploma", val: "20%" }
    ],
    verified: "5,200+",
    progress: "w-3/5"
  },
  {
    title: "Instant Verification",
    desc: "KYC checks, document validation, and approval status tracking.",
    accent: "from-red-500 to-rose-700",
    light: "bg-red-50 text-red-600",
    pulseTitle: "Verification Queue",
    pulseValue: "320",
    regions: [
      { name: "Pending", val: "15%" },
      { name: "Approved", val: "75%" },
      { name: "Rejected", val: "10%" }
    ],
    verified: "8,400+",
    progress: "w-[85%]"
  },
  {
    title: "Progress Sync",
    desc: "Real-time enrollment status across branches and course tracks.",
    accent: "from-blue-700 to-sky-600",
    light: "bg-blue-50 text-blue-700",
    pulseTitle: "Progress Hub",
    pulseValue: "4,500",
    regions: [
      { name: "Batch A", val: "40%" },
      { name: "Batch B", val: "35%" },
      { name: "Batch C", val: "25%" }
    ],
    verified: "72% Avg",
    progress: "w-[72%]"
  }
];

function EnrollmentVisual() {
  const [activeStep, setActiveStep] = useState(0);
  const active = enrollmentSteps[activeStep];

  return (
    <div className="relative w-full">
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-6 lg:gap-8">
        <motion.div
          key={activeStep}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className={`relative overflow-hidden rounded-[40px] border border-white/10 bg-gradient-to-br ${active.accent} p-8 md:p-10 text-white shadow-[0_30px_70px_rgba(0,0,0,0.2)]`}
        >
          {/* Background Decorative Blurs */}
          <div className="absolute -top-20 -right-20 h-64 w-64 rounded-full bg-white/10 blur-[100px]" />
          <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-black/10 blur-[80px]" />

          <div className="relative z-10 flex items-center justify-between">
            <p className="text-xs font-black uppercase tracking-[0.2em] text-white/80">{active.pulseTitle}</p>
            <span className="rounded-full bg-white/10 border border-white/20 px-4 py-1.5 text-[10px] font-black uppercase tracking-widest text-white shadow-lg backdrop-blur-md">
              Live Tracker
            </span>
          </div>

          <p className="mt-8 text-5xl font-black tracking-tighter">{active.pulseValue}</p>
          <p className="mt-2 text-sm text-white/70 font-medium">
            Dynamic processing for the <span className="text-white font-bold">{active.title}</span> stage.
          </p>

          <div className="mt-10 grid grid-cols-3 gap-4">
            {active.regions.map((region, i) => (
              <div key={region.name} className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm hover:bg-white/10 transition-colors">
                <p className="text-[10px] font-black uppercase tracking-widest text-white/60">{region.name}</p>
                <p className="mt-2 text-xl font-black">{region.val}</p>
                <div className="mt-2 h-1 w-full bg-white/10 rounded-full">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: region.val }}
                    className="h-full bg-white rounded-full"
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 p-6 rounded-[32px] border border-white/10 bg-white/5 backdrop-blur-md">
            <div className="flex justify-between items-end mb-4">
              <div>
                <p className="text-[10px] font-black uppercase tracking-widest text-white/60">Stage Threshold</p>
                <p className="mt-1 text-3xl font-black">{active.verified}</p>
              </div>
              <CheckCircle2 className="text-white/40 mb-1" size={32} />
            </div>
            <div className="h-3 rounded-full bg-white/10 overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: active.progress.replace('w-', '').replace('[', '').replace(']', '') }}
                className="h-full bg-gradient-to-r from-white via-white/80 to-white/40 shadow-[0_0_15px_rgba(255,255,255,0.5)]"
              />
            </div>
            <p className="mt-3 text-[10px] font-bold text-white/50 uppercase tracking-widest">Calculated Performance Metric</p>
          </div>
        </motion.div>

        <div className="flex flex-col gap-4">
          {enrollmentSteps.map((step, idx) => (
            <motion.button
              key={step.title}
              whileHover={{ x: 10 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setActiveStep(idx)}
              className={`group flex items-start gap-5 rounded-[32px] border p-6 transition-all duration-500 text-left ${activeStep === idx
                  ? "bg-white border-blue-100 shadow-[0_25px_60px_rgba(0,0,0,0.08)] scale-[1.02]"
                  : "bg-white/40 border-slate-100 hover:bg-white/80 hover:border-slate-200"
                }`}
            >
              <div className={`flex h-12 w-12 items-center justify-center rounded-2xl font-black text-lg transition-all duration-500 ${activeStep === idx ? step.accent.replace('from-', 'bg-') : 'bg-slate-200 text-slate-500 group-hover:scale-110'
                } ${activeStep === idx ? 'text-white' : ''}`}>
                {idx + 1}
              </div>
              <div className="flex-grow">
                <p className={`text-base font-black transition-colors ${activeStep === idx ? 'text-slate-900' : 'text-slate-500'}`}>
                  {step.title}
                </p>
                <p className={`mt-1 text-xs font-medium leading-relaxed transition-colors ${activeStep === idx ? 'text-slate-600' : 'text-slate-400'}`}>
                  {step.desc}
                </p>
              </div>
              {activeStep === idx && (
                <div className="mt-1">
                  <ArrowRight size={20} className="text-slate-900" />
                </div>
              )}
            </motion.button>
          ))}
        </div>
      </div>
    </div>
  );
}


function SectionVisual({ id }: { id: string }) {
  switch (id) {
    case "dashboard":
      return (
        <div className="relative h-[320px] w-full">
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute left-2 top-8 w-48 rounded-2xl border border-blue-300 bg-blue-100 p-4 shadow-xl"
          >
            <p className="text-xs font-black text-slate-500">EMS Courses</p>
            <p className="mt-2 text-2xl font-black text-blue-600">128</p>
            <div className="mt-3 h-2 rounded-full bg-blue-100">
              <div className="h-2 w-4/5 rounded-full bg-gradient-to-r from-blue-500 to-blue-300" />
            </div>
          </motion.div>
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
            className="absolute right-2 top-6 w-52 rounded-2xl border border-yellow-300 bg-yellow-100 p-4 shadow-xl"
          >
            <p className="text-xs font-black text-slate-500">EMS Students</p>
            <p className="mt-2 text-2xl font-black text-slate-900">4.2k</p>
            <div className="mt-3 flex gap-2">
              <div className="h-2 w-10 rounded-full bg-blue-300" />
              <div className="h-2 w-6 rounded-full bg-blue-500" />
            </div>
          </motion.div>
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 4.4, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
            className="absolute bottom-6 left-10 w-64 rounded-[26px] border border-red-300 bg-red-100 p-6 text-slate-900 shadow-xl"
          >
            <p className="text-xs font-bold uppercase tracking-widest text-slate-500">EMS Live Analytics</p>
            <div className="mt-4 grid grid-cols-3 gap-3">
              {[
                { label: "Active", value: "92%" },
                { label: "Completion", value: "78%" },
                { label: "Attendance", value: "88%" }
              ].map((item) => (
                <div key={item.label} className="rounded-xl bg-white p-2 text-center border border-blue-100">
                  <p className="text-lg font-black">{item.value}</p>
                  <p className="text-[10px] text-slate-500">{item.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      );
    case "courses":
      return <CoursesVisual />;
    case "modules":
      return (
        <div className="relative w-full py-4 px-2">
          {/* Enhanced Atmospheric Glows */}
          {/* Vibrant Multi-Color Atmosphere */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-20">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-400/20 rounded-full blur-[120px]" />
            <div className="absolute top-1/2 left-1/4 w-[400px] h-[400px] bg-yellow-400/10 rounded-full blur-[100px]" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-red-400/10 rounded-full blur-[120px]" />
          </div>

          <div className="relative z-10 grid grid-cols-1 md:grid-cols-6 gap-4 h-full max-w-7xl mx-auto">
            {/* 1. PRIMARY: DYNAMIC MODULE ARCHITECT (VIBRANT BLUE) */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.02, boxShadow: "0 20px 40px rgba(59,130,246,0.15)" }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="md:col-span-4 md:row-span-1 rounded-[32px] bg-blue-50/90 backdrop-blur-md border-[2px] border-blue-500/30 p-6 text-slate-900 relative overflow-hidden group cursor-pointer"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full -mr-20 -mt-20 blur-3xl group-hover:bg-blue-500/20 transition-colors" />
              
              <div className="relative z-10 flex flex-col h-full justify-between">
                <div>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="h-12 w-12 rounded-2xl bg-blue-600 text-white flex items-center justify-center border-4 border-white shadow-xl group-hover:rotate-6 transition-transform">
                      <Layers size={28} />
                    </div>
                    <span className="px-3 py-1 bg-blue-600 text-white rounded-full text-[10px] font-black uppercase tracking-widest shadow-md">Premium Builder</span>
                  </div>
                  <h3 className="text-3xl font-black mb-4 leading-tight tracking-tight">
                    Dynamic Module <br /> <span className="text-blue-600">Architect Pro</span>
                  </h3>
                  <p className="text-slate-600 max-w-lg font-medium leading-relaxed mb-6 text-sm">
                    Build high-fidelity course blueprints with our neural drag-and-drop engine. Define complex multi-path learning journeys and automated triggers.
                  </p>
                  <div className="grid grid-cols-2 gap-4 text-[11px] font-bold text-blue-500/70 mb-6">
                    <div className="flex items-center gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-blue-600" /> Layer Hierarchy
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-blue-600" /> Advanced Logic
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-blue-600" /> API Mesh Integration
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-blue-600" /> Neural Templates
                    </div>
                  </div>
                  
                  <div className="mt-4 grid grid-cols-3 gap-2">
                     {[
                       { label: 'Flow', val: '88%', col: 'blue' },
                       { label: 'Logic', val: '94%', col: 'emerald' },
                       { label: 'Nodes', val: '12', col: 'indigo' }
                     ].map(item => (
                       <div key={item.label} className="p-2 bg-white/40 rounded-xl border border-blue-100/50">
                          <p className="text-[8px] font-black text-slate-400 uppercase tracking-tighter">{item.label}</p>
                          <p className={`text-xs font-black text-${item.col}-600`}>{item.val}</p>
                       </div>
                     ))}
                  </div>

                  <div className="mt-4 p-4 bg-white/50 rounded-2xl border border-blue-100 flex items-center justify-between">
                     <div className="space-y-1">
                        <p className="text-[10px] font-black text-slate-400 uppercase">Resource Load</p>
                        <p className="text-sm font-black text-blue-600">Optimal (12%)</p>
                     </div>
                     <div className="flex gap-1 items-end h-8">
                        {[40, 70, 45, 90, 65, 80].map((h, i) => (
                          <div key={i} className="w-1.5 bg-blue-200 rounded-t-sm" style={{ height: `${h}%` }} />
                        ))}
                     </div>
                  </div>
                </div>
                <div className="mt-auto flex items-center justify-between border-t border-blue-500/10 pt-6">
                  <div className="flex -space-x-2">
                    {[1,2,3].map(i => (
                      <div key={i} className="h-8 w-8 rounded-full border-2 border-white bg-blue-100 flex items-center justify-center text-[10px] font-black text-blue-600">
                        {i === 3 ? '+' : 'U' + i}
                      </div>
                    ))}
                    <span className="ml-4 text-[10px] font-bold text-slate-400 self-center">+12 Engineers Active</span>
                  </div>
                  <button className="px-8 py-3 rounded-2xl bg-blue-600 text-white font-black text-xs hover:bg-blue-700 shadow-lg shadow-blue-500/30 transition-all active:scale-95 flex items-center gap-2">
                    Launch Hub <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            </motion.div>

            {/* 2. SECONDARY: LESSON STUDIO (VIBRANT YELLOW) */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.02, boxShadow: "0 20px 40px rgba(234,179,8,0.15)" }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="md:col-span-2 md:row-span-2 rounded-[32px] bg-yellow-50/90 backdrop-blur-md border-[2px] border-yellow-500/40 p-6 relative overflow-hidden group cursor-pointer"
            >
              <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-yellow-500/10 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-1000" />

              <div className="relative z-10 flex flex-col h-full">
                <div className="h-12 w-12 rounded-2xl bg-yellow-500 text-white flex items-center justify-center mb-6 border-4 border-white shadow-xl group-hover:scale-110 transition-transform">
                  <BookOpen size={28} />
                </div>
                <h4 className="text-2xl font-black text-slate-900 mb-4 tracking-tight">Interactive <br /><span className="text-yellow-600">Lesson Studio</span></h4>
                <p className="text-slate-600 font-medium leading-relaxed text-xs mb-8">
                  Engineered for engagement. Craft pixel-perfect lessons with integrated media blocks and live sync.
                </p>

                <div className="space-y-6 flex-grow p-6 bg-white rounded-[32px] border-[2px] border-yellow-200/50 shadow-inner">
                  {[
                    { label: "Sync Speed", val: "99.9%", color: "bg-yellow-500" },
                    { label: "AI Grading", val: "Verified", color: "bg-blue-500" },
                  ].map((feat) => (
                    <div key={feat.label} className="flex flex-col gap-2">
                      <div className="flex justify-between items-center px-1">
                        <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{feat.label}</span>
                        <span className="text-xs font-black text-slate-900">{feat.val}</span>
                      </div>
                      <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: '100%' }}
                          transition={{ duration: 1, delay: 0.5 }}
                          className={`h-full ${feat.color}`}
                        />
                      </div>
                    </div>
                  ))}

                  <div className="pt-4 border-t border-slate-100 mt-2">
                     <p className="text-[10px] font-black text-slate-400 uppercase mb-3">Asset Toolkit</p>
                     <div className="flex flex-wrap gap-2">
                        {['Video', 'Quiz', 'Doc', '3D'].map(tool => (
                          <span key={tool} className="px-2 py-1 bg-yellow-100 text-yellow-700 text-[9px] font-black rounded-md">{tool}</span>
                        ))}
                     </div>
                  </div>

                  <div className="mt-6 flex items-center justify-between px-2">
                     <div>
                        <p className="text-[10px] font-black text-slate-400 uppercase">Student Satisfaction</p>
                        <div className="flex gap-0.5 mt-1">
                           {[1,2,3,4,5].map(s => <div key={s} className="h-1.5 w-1.5 rounded-full bg-yellow-400" />)}
                        </div>
                     </div>
                      <p className="text-xs font-black text-slate-900">4.9/5.0</p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-100">
                     <p className="text-[10px] font-black text-slate-400 uppercase mb-4">Live Lesson Preview</p>
                     <div className="space-y-3">
                        {[
                          { name: 'Introduction to Logic', time: '12:44', status: 'Draft' },
                          { name: 'Neural Flow Patterns', time: '18:20', status: 'Live' }
                        ].map(lesson => (
                          <div key={lesson.name} className="flex items-center justify-between p-3 bg-yellow-50 rounded-2xl border border-yellow-100 group/item hover:bg-yellow-100 transition-colors">
                             <div className="flex items-center gap-3">
                                <div className={`h-2 w-2 rounded-full ${lesson.status === 'Live' ? 'bg-emerald-500' : 'bg-slate-300'}`} />
                                <p className="text-[11px] font-bold text-slate-700">{lesson.name}</p>
                             </div>
                             <span className="text-[9px] font-black text-slate-400">{lesson.time}</span>
                          </div>
                        ))}
                     </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* 3. TERTIARY: MODULAR INSIGHTS (VIBRANT RED) */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.02, boxShadow: "0 20px 40px rgba(239,68,68,0.15)" }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="md:col-span-2 md:row-span-1 rounded-[32px] bg-red-50/90 backdrop-blur-md border-[2px] border-red-500/40 p-6 text-slate-800 relative overflow-hidden group cursor-pointer"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-red-500/10 rounded-full -mr-10 -mt-10 blur-2xl" />
              <div className="flex justify-between items-start mb-4">
                <div className="h-10 w-10 rounded-xl bg-red-600 text-white flex items-center justify-center border-4 border-white shadow-lg group-hover:scale-110 transition-transform">
                  <BarChart3 size={24} />
                </div>
                <div className="flex flex-col items-end">
                  <span className="px-2 py-0.5 bg-red-600 text-white text-[9px] font-black uppercase tracking-widest rounded-md shadow-sm mb-2 flex items-center gap-1">
                    Live
                  </span>
                  <p className="text-xl font-black text-slate-900">94.8%</p>
                </div>
              </div>
              <h4 className="text-lg font-black mb-2 uppercase tracking-tight text-slate-900">System Insights</h4>
              <p className="text-slate-500 text-[11px] font-medium leading-relaxed max-w-xs mb-4">
                Visualize transitions and drop-off points with AI diagnostics.
              </p>
              
              <div className="grid grid-cols-2 gap-2 mb-4">
                 <div className="p-3 bg-red-100 rounded-2xl border border-red-200">
                    <p className="text-[9px] font-black text-red-600 uppercase">Retention</p>
                    <p className="text-lg font-black text-slate-900">88%</p>
                 </div>
                 <div className="p-3 bg-slate-100 rounded-2xl border border-slate-200">
                    <p className="text-[9px] font-black text-slate-600 uppercase">Avg Time</p>
                    <p className="text-lg font-black text-slate-900">42m</p>
                 </div>
              </div>

              <div className="flex items-center gap-3 p-3 bg-white/50 rounded-xl border border-red-100">
                 <div className="h-2 w-2 rounded-full bg-emerald-500 animate-ping" />
                 <p className="text-[10px] font-bold text-slate-500 uppercase tracking-tighter">Peak traffic detected in 3 nodes</p>
              </div>
            </motion.div>

            {/* 4. QUATERNARY: ADMIN CONTROL (VIBRANT BLUE VAR) */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.02, boxShadow: "0 20px 40px rgba(15,23,42,0.1)" }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="md:col-span-2 md:row-span-1 rounded-[32px] bg-slate-50/90 backdrop-blur-md border-[2px] border-slate-900/10 p-6 text-slate-800 relative overflow-hidden group cursor-pointer"
            >
              <div className="relative z-10 flex flex-col h-full items-start">
                <div className="flex items-center justify-between w-full mb-4">
                  <div className="h-10 w-10 rounded-xl bg-slate-900 text-white flex items-center justify-center border-4 border-white shadow-lg group-hover:scale-110 transition-transform">
                    <Shield size={24} />
                  </div>
                  <div className="h-2 w-16 rounded-full bg-slate-200 overflow-hidden">
                    <motion.div
                      initial={{ x: '-100%' }}
                      animate={{ x: '100%' }}
                      transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
                      className="h-full w-1/2 bg-blue-600 rounded-full"
                    />
                  </div>
                </div>
                <h4 className="text-lg font-black text-slate-900 uppercase tracking-tight mb-2">Institutional Admin</h4>
                <p className="text-slate-500 text-[11px] font-medium leading-relaxed mb-4">
                  Enterprise control over versioning and multi-tenancy access.
                </p>
                
                <div className="w-full space-y-2 mb-6">
                   {['Geo-Fencing', 'SAML SSO', 'Audit Logs'].map(sec => (
                     <div key={sec} className="flex items-center gap-2 text-[10px] font-bold text-slate-600">
                        <div className="h-1 w-1 rounded-full bg-emerald-500" /> {sec}
                     </div>
                   ))}
                </div>

                <div className="w-full p-3 bg-slate-900/5 rounded-2xl border border-slate-100 mb-6 flex items-center justify-between">
                   <p className="text-[9px] font-black text-slate-500 uppercase">System Integrity</p>
                   <span className="text-[10px] font-black text-emerald-600">SECURE</span>
                </div>

                
              </div>
            </motion.div>

            {/* 5. NEW: GLOBAL SEARCH (UTILITY) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.01 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
              className="md:col-span-6 rounded-[24px] bg-white/60 backdrop-blur-md border-[2px] border-slate-200/50 p-4 flex items-center justify-between group cursor-pointer"
            >
              <div className="flex items-center gap-4">
                 <div className="h-10 w-10 rounded-xl bg-slate-100 flex items-center justify-center text-slate-500">
                    <Layers size={20} />
                 </div>
                 <p className="text-sm font-black text-slate-400">Search modules, lessons, or student records...</p>
              </div>
              <div className="flex gap-2">
                 <span className="px-3 py-1 bg-slate-200/50 text-slate-500 text-[9px] font-black rounded-lg">⌘ K</span>
                 <span className="px-3 py-1 bg-blue-600 text-white text-[9px] font-black rounded-lg">SEARCH</span>
              </div>
            </motion.div>

            {/* 6. NEW: TASK AUTOMATOR (VIBRANT RED) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
              className="md:col-span-2 rounded-[28px] bg-red-50/90 backdrop-blur-md border-[2px] border-red-500/30 p-5 group cursor-pointer"
            >
               <div className="flex justify-between items-center mb-4">
                  <div className="h-10 w-10 rounded-xl bg-red-500 text-white flex items-center justify-center">
                     <Shield size={20} />
                  </div>
                  <div className="px-2 py-0.5 bg-emerald-100 text-emerald-600 text-[8px] font-black rounded uppercase">Active</div>
               </div>
               <h4 className="text-sm font-black text-slate-900 uppercase mb-2">Task Automator</h4>
               <p className="text-[10px] text-slate-500 font-medium mb-4">Schedule recurring content releases and automated grading.</p>
               <div className="h-1 w-full bg-red-100 rounded-full overflow-hidden">
                  <motion.div animate={{ width: ['20%', '90%', '20%'] }} transition={{ duration: 3, repeat: Infinity }} className="h-full bg-red-500" />
               </div>
            </motion.div>

            {/* 7. NEW: USER ACTIVITY (VIBRANT BLUE) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              viewport={{ once: true }}
              className="md:col-span-2 rounded-[28px] bg-blue-50/90 backdrop-blur-md border-[2px] border-blue-500/30 p-5 group cursor-pointer"
            >
               <div className="flex items-center gap-3 mb-4">
                  <div className="h-10 w-10 rounded-xl bg-blue-600 text-white flex items-center justify-center">
                     <BarChart3 size={20} />
                  </div>
                  <div>
                     <p className="text-[10px] font-black text-slate-400 uppercase">Live Usage</p>
                     <p className="text-sm font-black text-slate-900">4,284 <span className="text-[8px] text-emerald-500">↑12%</span></p>
                  </div>
               </div>
               <div className="flex gap-1 h-8 items-end">
                  {[30, 60, 40, 80, 50, 90, 70, 40, 60].map((h, i) => (
                    <div key={i} className="flex-1 bg-blue-200 rounded-t-[2px]" style={{ height: `${h}%` }} />
                  ))}
               </div>
            </motion.div>

            {/* 8. NEW: FEEDBACK LOOP (VIBRANT YELLOW) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              viewport={{ once: true }}
              className="md:col-span-2 rounded-[28px] bg-yellow-50/90 backdrop-blur-md border-[2px] border-yellow-500/30 p-5 group cursor-pointer relative overflow-hidden"
            >
               <div className="absolute top-2 right-2 h-2 w-2 rounded-full bg-yellow-500 animate-pulse" />
               <h4 className="text-sm font-black text-slate-900 uppercase mb-4">Feedback Loop</h4>
               <div className="space-y-2">
                  {[1, 2].map(i => (
                    <div key={i} className="flex items-center gap-2 p-2 bg-white rounded-xl border border-yellow-100">
                       <div className="h-6 w-6 rounded-lg bg-yellow-100 flex items-center justify-center text-[10px]">💬</div>
                       <div className="h-1.5 w-16 bg-slate-100 rounded-full" />
                    </div>
                  ))}
               </div>
               <p className="mt-3 text-[9px] font-black text-yellow-600 uppercase tracking-widest text-center">32 New Comments</p>
            </motion.div>
          </div>
        </div>
      );
    case "enrollment":
      return <EnrollmentVisual />;
    case "live-classes":
      return (
        <div className="relative w-full">
          {/* Decorative Background Glows */}
          <div className="absolute -top-20 -left-20 h-64 w-64 rounded-full bg-blue-400/10 blur-[100px]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-80 w-80 rounded-full bg-yellow-400/10 blur-[120px]" />
          <div className="absolute -bottom-20 -right-20 h-64 w-64 rounded-full bg-red-400/10 blur-[100px]" />

          <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-8 p-2">
            {[
              {
                title: "Interactive AI Sessions",
                desc: "Real-time concept breakdown with voice-enabled AI tutors.",
                time: "Live Now",
                attendees: "1.2k+",
                color: "blue",
                accent: "bg-blue-600",
                light: "bg-blue-50",
                border: "border-blue-100",
                text: "text-blue-600",
                shadow: "shadow-blue-500/20"
              },
              {
                title: "Expert Masterclass",
                desc: "Direct learning from industry leaders in dedicated virtual rooms.",
                time: "In 15 Mins",
                attendees: "850+",
                color: "yellow",
                accent: "bg-yellow-500",
                light: "bg-yellow-50",
                border: "border-yellow-200",
                text: "text-yellow-700",
                shadow: "shadow-yellow-500/20"
              },
              {
                title: "Doubt Clearing Hub",
                desc: "Instant resolution for complex queries with peer-to-peer sync.",
                time: "Upcoming",
                attendees: "400+",
                color: "red",
                accent: "bg-red-500",
                light: "bg-red-50",
                border: "border-red-100",
                text: "text-red-600",
                shadow: "shadow-red-500/20"
              }
            ].map((card, idx) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="group relative"
              >
                <div className={`h-full bg-white rounded-[32px] p-6 border-2 ${card.border} shadow-xl ${card.shadow} transition-all duration-500 hover:-translate-y-2 overflow-hidden flex flex-col`}>
                  {/* Card Accent Header */}
                  <div className={`absolute top-0 right-0 w-32 h-32 rounded-bl-[100px] ${card.light} opacity-50 group-hover:scale-110 transition-transform duration-700`} />

                  {/* Status & Icon */}
                  <div className="flex items-center justify-between mb-8">
                    <div className={`h-12 w-12 rounded-2xl ${card.accent} flex items-center justify-center text-white shadow-lg`}>
                      <Video size={22} />
                    </div>
                    <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full ${card.light} ${card.text} text-[10px] font-black uppercase tracking-widest`}>
                      <span className={`h-1.5 w-1.5 rounded-full ${card.accent} animate-pulse`} />
                      {card.time}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="relative z-10 flex-grow">
                    <h4 className="text-xl font-black text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                      {card.title}
                    </h4>
                    <p className="text-sm text-slate-500 leading-relaxed font-medium">
                      {card.desc}
                    </p>
                  </div>

                  {/* Stats Footer */}
                  <div className="mt-8 flex items-center justify-between pt-6 border-t border-slate-100">
                    <div className="flex -space-x-2">
                      {[1, 2, 3].map((i) => (
                        <div key={i} className={`h-8 w-8 rounded-full border-2 border-white ${card.accent} flex items-center justify-center text-[10px] text-white font-bold overflow-hidden`}>
                          <img src={`/images/${card.color}-user-${i}.png`} alt="" className="hidden" />
                          <Users size={12} />
                        </div>
                      ))}
                    </div>
                    <span className="text-[11px] font-black text-slate-400">
                      {card.attendees} Joining
                    </span>
                  </div>

                  {/* Bottom Progress Indicator */}
                  <div className={`absolute bottom-0 left-0 w-0 h-1.5 ${card.accent} group-hover:w-full transition-all duration-700 ease-out`} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      );
    case "assignments":
      return (
        <div className="relative w-full">
          <div className="text-center relative mb-12">
            <motion.span
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-2 text-xs font-black uppercase tracking-widest text-blue-600 border border-blue-100"
            >
              Workflow Automation
            </motion.span>
            <h3 className="mt-6 text-3xl md:text-5xl font-black text-slate-900 tracking-tight">
              Assignment <span className="text-blue-600">Mastery</span> Workflow
            </h3>
            <p className="mt-4 text-sm md:text-lg text-slate-500 max-w-2xl mx-auto leading-relaxed">
              Design, deploy, and grade assignments with a seamless automated engine that tracks every milestone.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 relative">
            {[
              {
                title: "Setup & Rubrics",
                desc: "Craft structured rubrics and weightage benchmarks in just a few clicks.",
                icon: <ClipboardList size={24} />,
                color: "from-blue-500 to-indigo-600",
                shadow: "shadow-blue-100",
                step: "01"
              },
              {
                title: "Distribute Tasks",
                desc: "Batch-wise rollout with smart scheduling and automated deadline alerts.",
                icon: <Users size={24} />,
                color: "from-emerald-400 to-teal-600",
                shadow: "shadow-emerald-100",
                step: "02"
              },
              {
                title: "Collect Work",
                desc: "Real-time submission portal with automated verification and anti-plagiarism checks.",
                icon: <Shield size={24} />,
                color: "from-amber-400 to-orange-600",
                shadow: "shadow-amber-100",
                step: "03"
              },
              {
                title: "Grade & Score",
                desc: "AI-assisted scoring engine with detailed feedback loops for personalized learning.",
                icon: <CheckCircle2 size={24} />,
                color: "from-red-500 to-rose-600",
                shadow: "shadow-red-100",
                step: "04"
              }
            ].map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="group relative"
              >
                <div className="h-full bg-white rounded-[32px] p-7 md:p-8 border border-slate-100 shadow-[0_20px_50px_rgba(30,64,175,0.03)] hover:shadow-[0_40px_80px_rgba(30,64,175,0.08)] transition-all duration-500 hover:-translate-y-3 flex flex-col">
                  {/* Step ID */}
                  <div className="absolute top-6 right-8 text-5xl font-black text-slate-100/90 group-hover:text-slate-500 transition-colors duration-500 select-none">
                    {item.step}
                  </div>

                  {/* Icon Container */}
                  <div className={`h-16 w-16 rounded-[22px] bg-gradient-to-br ${item.color} text-white flex items-center justify-center ${item.shadow} shadow-2xl mb-8 group-hover:rotate-6 transition-transform duration-500`}>
                    {item.icon}
                  </div>

                  <h4 className="text-xl font-black text-slate-900 mb-4 group-hover:text-blue-600 transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-sm text-slate-500 leading-relaxed font-medium flex-grow">
                    {item.desc}
                  </p>

                  <div className="mt-8">
                    <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: "100%" }}
                        transition={{ duration: 1.5, delay: 0.5 + (idx * 0.2) }}
                        className={`h-full bg-gradient-to-r ${item.color}`}
                      />
                    </div>
                  </div>
                </div>

                {/* Arrow Connector (Desktop) */}
                {idx < 3 && (
                  <div className="absolute top-1/2 -right-4 translate-x-1/2 -translate-y-1/2 hidden lg:flex items-center justify-center text-slate-200">
                    <ArrowRight size={24} />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      );
    case "analytics":
      return <AnalyticsReportsPanel />;
    case "admin":
      return (
        <div className="relative h-[320px] w-full">
          <motion.div
            className="absolute left-0 top-10 w-60 rounded-3xl border border-red-100 bg-white p-4 shadow-xl"
            whileHover={{ y: -6 }}
          >
            <p className="text-sm font-black text-slate-900">Roles & Access</p>
            <div className="mt-4 space-y-2">
              {["Admin", "Tutor", "Student"].map((role) => (
                <div key={role} className="flex items-center justify-between text-xs font-bold text-slate-600">
                  <span>{role}</span>
                  <span className="h-2 w-10 rounded-full bg-gradient-to-r from-red-400 to-yellow-400" />
                </div>
              ))}
            </div>
          </motion.div>
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 3.6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute right-6 bottom-10 grid gap-3"
          >
            {["Branches", "Permissions", "Settings"].map((item) => (
              <div key={item} className="rounded-2xl border border-amber-200 bg-white px-4 py-3 text-xs font-bold text-slate-600 shadow-lg">
                {item}
              </div>
            ))}
          </motion.div>
          <div className="absolute right-4 top-6 rounded-full bg-yellow-300 px-3 py-1 text-xs font-black text-slate-900">
            Admin Guard
          </div>
        </div>
      );
    case "reports":
      return (
        <div className="relative w-full overflow-hidden">
          <div className="grid grid-cols-1 gap-6">
            <div className="min-w-0 w-full space-y-5 overflow-hidden">
              <div className="rounded-[22px] border border-slate-200 bg-white p-5 shadow-sm">
                <div className="flex items-center justify-between text-sm font-bold text-slate-700">
                  <span>Animated Attendance Share</span>
                  <span className="text-xs text-slate-400">Live % Split</span>
                </div>
                <div className="mt-4 rounded-2xl border border-slate-100 bg-[#f9fbff] p-4">
                  <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-4 items-center">
                    <div className="mx-auto h-44 w-44 rounded-full bg-[conic-gradient(#ef4444_0_25.5%,#06b6d4_25.5%_49.4%,#f59e0b_49.4%_61.6%,#8b5cf6_61.6%_68.2%,#22c55e_68.2%_72.6%,#3b82f6_72.6%_80.3%,#a855f7_80.3%_90.7%,#f97316_90.7%_100%)] shadow-[0_20px_45px_rgba(15,23,42,0.18)]" />
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 text-sm">
                      {[
                        { label: "Present", value: "25.5%", color: "bg-red-500" },
                        { label: "On Time", value: "24.9%", color: "bg-sky-500" },
                        { label: "Check-Out", value: "17.2%", color: "bg-yellow-500" },
                        { label: "Late", value: "9.4%", color: "bg-indigo-500" },
                        { label: "Half Day", value: "5.3%", color: "bg-emerald-500" },
                        { label: "Remote", value: "4.4%", color: "bg-blue-500" },
                        { label: "Leave", value: "3.1%", color: "bg-purple-500" },
                        { label: "Shift Swap", value: "7.7%", color: "bg-orange-500" },
                        { label: "Other", value: "1.5%", color: "bg-lime-500" }
                      ].map((row) => (
                        <div key={row.label} className="flex items-center gap-3 text-slate-600 min-w-0">
                          <span className={`h-2.5 w-2.5 rounded-full shrink-0 ${row.color}`} />
                          <span className="font-semibold truncate">{row.label}</span>
                          <span className="ml-auto font-black text-slate-900 shrink-0">{row.value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    default:
      return null;
  }
}

function AnalyticsReportsPanel() {
  return (
    <div className="relative w-full">
      <div className="relative mx-auto max-w-5xl rounded-[32px] border border-blue-100 bg-gradient-to-br from-[#f7faff] via-white to-[#f1f6ff] p-6 md:p-8 shadow-[0_26px_70px_rgba(37,99,235,0.12)]">
        <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] items-center">
          <div className="rounded-[28px] border border-blue-100 bg-white p-6 shadow-[0_18px_50px_rgba(15,23,42,0.08)]">
            <span className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-2 text-[11px] font-black uppercase tracking-widest text-blue-600">
              Reports & Analytics
            </span>
            <h3 className="mt-5 text-3xl md:text-4xl font-black text-slate-900">
              Reports & Analytics Dashboard
            </h3>
            <p className="mt-4 text-sm text-slate-600">
              Monitor attendance, grading progress, and engagement trends with export-ready reports
              and real-time dashboards.
            </p>
            <div className="mt-6 flex flex-wrap gap-4 text-sm font-semibold text-slate-600">
              <span className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-blue-500" />
                Attendance
              </span>
              <span className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-red-500" />
                Grading
              </span>
              <span className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
                Engagement
              </span>
            </div>
          </div>

          <div className="rounded-[28px] border border-blue-100 bg-white p-6 shadow-[0_16px_36px_rgba(15,23,42,0.12)]">
            <div className="flex items-center justify-between text-xs font-black uppercase tracking-widest text-blue-600">
              <span>Live Report Highlights</span>
              <span className="text-slate-400">Realtime</span>
            </div>
            <div className="mt-6 space-y-4 text-sm font-semibold text-slate-700">
              {[
                { label: "Attendance Sync", value: "92%", tone: "bg-blue-500" },
                { label: "Grading Queue", value: "76%", tone: "bg-red-500" },
                { label: "Engagement Lift", value: "64%", tone: "bg-yellow-400" }
              ].map((item) => (
                <div key={item.label} className="rounded-2xl border border-slate-100 bg-[#f7faff] p-4">
                  <div className="flex items-center justify-between">
                    <p className="font-black text-slate-900">{item.label}</p>
                    <span className="text-slate-900 font-black">{item.value}</span>
                  </div>
                  <div className="mt-3 h-2 rounded-full bg-white">
                    <div className={`h-2 w-3/4 rounded-full ${item.tone}`} />
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-5 rounded-2xl border border-slate-100 bg-[#f7faff] p-3">
              <p className="text-[11px] font-bold text-slate-500">Live Pulse</p>
              <div className="mt-2 h-2 rounded-full bg-white">
                <div className="h-2 w-2/3 rounded-full bg-gradient-to-r from-blue-500 via-yellow-400 to-red-500" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function EmsPage() {
  const [isDemoOpen, setIsDemoOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white font-outfit select-none isolate">
      <div className="relative z-[400]">
        <Navbar />
      </div>

      {emsSections.map((section, index) => {
        const isReverse = index % 2 === 1;
        if (section.id === "dashboard") {
          return (
            <section
              key={section.id}
              id={section.id}
              className="relative overflow-hidden px-4 md:px-12 lg:px-24 pt-8 pb-3 md:pt-12 md:pb-6 bg-white"
            >
              {/* Pure white background: no glow overlays */}

              <div className="relative z-10 max-w-[1200px] mx-auto grid lg:grid-cols-[1.1fr_1fr] gap-12 items-center min-h-[560px] text-center lg:text-left">
                <div className="flex flex-col items-center lg:items-start">
                  <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 text-blue-700 border border-blue-100 text-[11px] font-black tracking-wide uppercase">
                    EMS • Dashboard Overview
                  </span>
                  <h1 className="mt-6 text-3xl md:text-5xl font-black leading-[1.05] tracking-tight text-slate-900">
                    <span className="text-blue-600">EMS</span>{" "}
                    <span className="text-slate-900">Dashboard</span>{" "}
                    <span className="text-yellow-600">Overview</span>{" "}
                    <span className="text-red-500">Hub</span>
                  </h1>
                  <p className="mt-4 text-[13px] md:text-sm text-slate-600 max-w-xl leading-relaxed">
                    Real-time EMS view for courses, batches, tutors, attendance, and learner progress.
                    Track what matters with clean analytics and instant alerts.
                  </p>

                  <div className="mt-8 flex flex-wrap items-center justify-center lg:justify-start gap-3">
                    <button className="px-6 py-3 rounded-xl bg-blue-600 text-white font-bold shadow-lg shadow-blue-600/30 hover:bg-blue-700 hover:scale-105 transition-all inline-flex items-center gap-2">
                      Open EMS <ArrowRight size={15} />
                    </button>
                    <button className="px-6 py-3 rounded-xl border border-slate-300 text-slate-700 font-bold hover:border-blue-300 hover:text-blue-700 hover:scale-105 transition-all">
                      EMS Preview
                    </button>
                  </div>

                  <div className="mt-8 flex flex-wrap justify-center lg:justify-start gap-4 text-[11px] font-black uppercase tracking-widest text-slate-500">
                    <span className="flex items-center gap-2"><BarChart3 size={14} /> Live KPIs</span>
                    <span className="flex items-center gap-2"><Users size={14} /> Batches</span>
                    <span className="flex items-center gap-2"><CheckCircle2 size={14} /> Attendance</span>
                  </div>
                </div>

                <div className="rounded-[28px] border border-blue-900 bg-[#1e3a8a] p-6 shadow-[0_24px_60px_rgba(30,58,138,0.35)]">
                  <SectionVisual id={section.id} />
                </div>
              </div>
            </section>
          );
        }
        if (section.id === "courses") {
          return (
            <section
              key={section.id}
              id={section.id}
              className={`relative overflow-hidden px-4 md:px-12 lg:px-24 py-10 md:py-12 ${sectionBg[index]}`}
            >
              <div className="absolute -top-24 right-10 h-64 w-64 rounded-full bg-blue-200/40 blur-3xl" />
              <div className="absolute bottom-0 left-10 h-64 w-64 rounded-full bg-cyan-200/30 blur-3xl" />

              <div className="max-w-[1600px] mx-auto">
                <div className="text-center max-w-3xl mx-auto">
                  <p className="text-xs font-black uppercase tracking-widest text-blue-600">
                    {section.badge}
                  </p>
                  <h2 className="mt-3 text-3xl md:text-4xl lg:text-5xl font-black text-slate-900">
                    {section.title}
                  </h2>
                  <p className="mt-3 text-sm md:text-base text-slate-600">
                    {section.body}
                  </p>
                </div>

                <div className="mt-10 rounded-[32px] border border-blue-100 bg-white p-6 shadow-[0_24px_60px_rgba(30,64,175,0.12)]">
                  <CoursesVisual />
                </div>
              </div>
            </section>
          );
        }

        if (section.id === "modules") {
          return (
            <section
              key={section.id}
              id={section.id}
              className="relative overflow-hidden px-4 md:px-12 lg:px-24 py-10 md:py-12 bg-white"
            >
              <div className="absolute -top-24 right-10 h-64 w-64 rounded-full bg-blue-200/30 blur-3xl" />
              <div className="absolute bottom-0 left-10 h-64 w-64 rounded-full bg-yellow-200/30 blur-3xl" />
              <div className="absolute top-10 left-1/2 h-48 w-48 -translate-x-1/2 rounded-full bg-red-200/20 blur-[80px]" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(59,130,246,0.08),transparent_45%),radial-gradient(circle_at_80%_30%,rgba(250,204,21,0.08),transparent_45%),radial-gradient(circle_at_60%_80%,rgba(239,68,68,0.06),transparent_50%)]" />

              <div className="max-w-[1400px] mx-auto">
                <div className="text-center max-w-3xl mx-auto">
                  <p className="text-xs font-black uppercase tracking-widest text-blue-600">
                    {section.badge}
                  </p>
                  <h2 className="mt-3 text-3xl md:text-4xl lg:text-5xl font-black text-blue-700">
                    {section.title}
                  </h2>
                  <p className="mt-3 text-sm md:text-base text-slate-600">
                    {section.body}
                  </p>
                </div>

                <div className="mt-8 flex flex-wrap items-center justify-center gap-3 text-xs font-bold text-slate-600">
                  {["Module Builder", "Lesson Flow", "Assessments", "Tutor Toolkit", "Progress Sync", "Live Rooms"].map((pill) => (
                    <span
                      key={pill}
                      className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-2"
                    >
                      <span className="h-2 w-2 rounded-full bg-blue-500" />
                      {pill}
                    </span>
                  ))}
                </div>

                <div className="mt-10 rounded-[32px] border border-blue-100 bg-white p-6 shadow-[0_24px_60px_rgba(30,64,175,0.12)]">
                  <SectionVisual id={section.id} />
                </div>
              </div>
            </section>
          );
        }
        if (section.id === "enrollment") {
          return (
            <section
              key={section.id}
              id={section.id}
              className="relative overflow-hidden px-4 md:px-12 lg:px-24 py-10 md:py-12 bg-[#f5f9ff]"
            >
              <div className="absolute -top-24 right-10 h-64 w-64 rounded-full bg-blue-200/60 blur-3xl" />
              <div className="absolute bottom-0 left-10 h-64 w-64 rounded-full bg-sky-200/60 blur-3xl" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(59,130,246,0.12),transparent_45%),radial-gradient(circle_at_80%_30%,rgba(147,197,253,0.12),transparent_45%)]" />

              <div className="max-w-[1400px] mx-auto">
                <div className="text-center max-w-3xl mx-auto">
                  <p className="text-xs font-black uppercase tracking-widest text-blue-700">
                    {section.badge}
                  </p>
                  <h2 className="mt-3 text-3xl md:text-4xl lg:text-5xl font-black text-slate-900">
                    {section.title}
                  </h2>
                  <p className="mt-3 text-sm md:text-base text-slate-600">
                    {section.body}
                  </p>
                </div>

                <div className="mt-10 rounded-[32px] border border-blue-100 bg-white p-6 shadow-[0_24px_60px_rgba(30,64,175,0.18)]">
                  <SectionVisual id={section.id} />
                </div>
              </div>
            </section>
          );
        }
        if (section.id === "live-classes") {
          return (
            <section
              key={section.id}
              id={section.id}
              className={`relative overflow-hidden px-4 md:px-12 lg:px-24 py-10 md:py-12 ${sectionBg[index]}`}
            >
              <div className="absolute -top-24 right-10 h-64 w-64 rounded-full bg-sky-200/30 blur-3xl" />
              <div className="absolute bottom-0 left-10 h-64 w-64 rounded-full bg-indigo-200/30 blur-3xl" />

              <div className="max-w-[1400px] mx-auto">
                <div className="text-center max-w-3xl mx-auto">
                  <p className="text-xs font-black uppercase tracking-widest text-slate-600">
                    {section.badge}
                  </p>
                  <h2 className="mt-3 text-3xl md:text-4xl lg:text-5xl font-black text-slate-900">
                    {section.title}
                  </h2>
                  <p className="mt-3 text-sm md:text-base text-slate-600">
                    {section.body}
                  </p>
                </div>

                <div className="mt-10 rounded-[32px] border border-slate-200 bg-white p-6 shadow-[0_24px_60px_rgba(30,64,175,0.15)]">
                  <SectionVisual id={section.id} />
                </div>
              </div>
            </section>
          );
        }
        if (section.id === "assignments") {
          return (
            <section
              key={section.id}
              id={section.id}
              className={`relative overflow-hidden px-4 md:px-12 lg:px-24 py-10 md:py-12 ${sectionBg[index]}`}
            >
              <div className="absolute -top-24 right-10 h-64 w-64 rounded-full bg-blue-200/30 blur-3xl" />
              <div className="absolute bottom-0 left-10 h-64 w-64 rounded-full bg-yellow-200/30 blur-3xl" />
              <div className="absolute right-32 bottom-10 h-52 w-52 rounded-full bg-red-200/20 blur-3xl" />

              <div className="max-w-[1400px] mx-auto">
                <div className="text-center max-w-3xl mx-auto">
                  <p className="text-xs font-black uppercase tracking-widest text-slate-600">
                    {section.badge}
                  </p>
                  <h2 className="mt-3 text-3xl md:text-4xl lg:text-5xl font-black text-slate-900">
                    {section.title}
                  </h2>
                  <p className="mt-3 text-sm md:text-base text-slate-600">
                    {section.body}
                  </p>
                </div>

                <div className="mt-10 rounded-[32px] border border-slate-200 bg-white p-6 shadow-[0_24px_60px_rgba(30,64,175,0.15)]">
                  <SectionVisual id={section.id} />
                </div>
              </div>
            </section>
          );
        }

        return (
          <section
            key={section.id}
            id={section.id}
            className={`relative overflow-hidden px-4 md:px-12 lg:px-24 py-10 md:py-12 ${sectionBg[index]}`}
          >
            <div className="absolute -top-24 right-10 h-64 w-64 rounded-full bg-blue-200/40 blur-3xl" />
            <div className="absolute bottom-0 left-10 h-64 w-64 rounded-full bg-yellow-200/30 blur-3xl" />

            <div className="max-w-[1600px] mx-auto grid lg:grid-cols-2 gap-10 items-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className={isReverse ? "lg:order-2" : "lg:order-1"}
              >
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-blue-700 border border-blue-100 text-xs font-black tracking-wide uppercase">
                  {section.badge}
                </span>
                <h2 className="mt-5 text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 leading-[1.05] tracking-tight">
                  {section.title}
                </h2>
                <p className="mt-5 text-slate-600 text-sm md:text-base max-w-xl leading-relaxed">
                  {section.body}
                </p>
                {section.id === "reports" && (
                  <div className="mt-6 flex flex-wrap items-center gap-4">
                    {[
                      { label: "Blue Sync", color: "bg-blue-500", ring: "ring-blue-200" },
                      { label: "Red Alerts", color: "bg-red-500", ring: "ring-red-200" },
                      { label: "Yellow Pulse", color: "bg-yellow-400", ring: "ring-yellow-200" }
                    ].map((chip) => (
                      <div key={chip.label} className="flex items-center gap-3">
                        <span
                          className={`h-11 w-11 rounded-full ${chip.color} ring-4 ${chip.ring} shadow-[0_10px_25px_rgba(15,23,42,0.12)]`}
                        />
                        <div>
                          <p className="text-xs font-black uppercase tracking-widest text-slate-500">
                            {chip.label}
                          </p>
                          <p className="text-sm font-bold text-slate-700">Live Indicator</p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
                <div className="mt-8 flex flex-wrap gap-3">
                  {section.id !== "reports" && (
                    <button
                      className={`px-7 py-3 rounded-xl bg-gradient-to-r ${section.accent} text-white font-bold hover:scale-105 active:scale-95 transition-all inline-flex items-center gap-2 shadow-lg`}
                    >
                      {section.cta} <ArrowRight size={17} />
                    </button>
                  )}
                  {section.id !== "reports" && (
                    <button
                      onClick={() => setIsDemoOpen(true)}
                      className="px-7 py-3 rounded-xl border-2 border-slate-300 text-slate-700 font-bold hover:border-blue-300 hover:text-blue-600 hover:scale-105 transition-all"
                    >
                      Request Demo
                    </button>
                  )}
                </div>

                <div className="mt-8 flex flex-wrap gap-4 text-xs font-bold uppercase tracking-widest text-slate-500">
                  {section.id === "dashboard" && (
                    <>
                      <span className="flex items-center gap-2"><BarChart3 size={14} /> Live Insights</span>
                      <span className="flex items-center gap-2"><GraduationCap size={14} /> Student Pulse</span>
                    </>
                  )}
                  {section.id === "courses" && (
                    <>
                      <span className="flex items-center gap-2"><BookOpen size={14} /> Course Builder</span>
                      <span className="flex items-center gap-2"><Users size={14} /> Tutor Match</span>
                    </>
                  )}
                  {section.id === "modules" && (
                    <>
                      <span className="flex items-center gap-2"><Layers size={14} /> Module Tree</span>
                      <span className="flex items-center gap-2"><BookOpen size={14} /> Lesson Flow</span>
                    </>
                  )}
                  {section.id === "enrollment" && (
                    <>
                      <span className="flex items-center gap-2"><Users size={14} /> Auto Enroll</span>
                      <span className="flex items-center gap-2"><CheckCircle2 size={14} /> Progress Sync</span>
                    </>
                  )}
                  {section.id === "live-classes" && (
                    <>
                      <span className="flex items-center gap-2"><Video size={14} /> Live Rooms</span>
                      <span className="flex items-center gap-2"><CheckCircle2 size={14} /> Attendance</span>
                    </>
                  )}
                  {section.id === "assignments" && (
                    <>
                      <span className="flex items-center gap-2"><ClipboardList size={14} /> Rubrics</span>
                      <span className="flex items-center gap-2"><CheckCircle2 size={14} /> Deadlines</span>
                    </>
                  )}
                  {section.id === "submissions" && (
                    <>
                      <span className="flex items-center gap-2"><ClipboardCheck size={14} /> Grading</span>
                      <span className="flex items-center gap-2"><ClipboardList size={14} /> Feedback</span>
                    </>
                  )}
                  {section.id === "notifications" && (
                    <>
                      <span className="flex items-center gap-2"><Bell size={14} /> Alerts</span>
                      <span className="flex items-center gap-2"><Users size={14} /> Broadcast</span>
                    </>
                  )}
                  {section.id === "analytics" && (
                    <>
                      <span className="flex items-center gap-2"><BarChart3 size={14} /> Reports</span>
                      <span className="flex items-center gap-2"><GraduationCap size={14} /> Trends</span>
                    </>
                  )}
                  {section.id === "admin" && (
                    <>
                      <span className="flex items-center gap-2"><Shield size={14} /> Access</span>
                      <span className="flex items-center gap-2"><Users size={14} /> Roles</span>
                    </>
                  )}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className={isReverse ? "lg:order-1" : "lg:order-2"}
              >
                <div className="rounded-[30px] border border-slate-200 bg-white/80 p-6 shadow-[0_24px_60px_rgba(30,64,175,0.15)]">
                  <SectionVisual id={section.id} />
                </div>
              </motion.div>
            </div>
          </section>
        );
      })}

      <DemoRequestModal isOpen={isDemoOpen} onClose={() => setIsDemoOpen(false)} />
    </div>
  );
}
