"use client";

import React, { useState, useEffect } from 'react';
import { Zap, GraduationCap, Users, ArrowRight, CheckCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface EngineSectionProps {
    color: 'red' | 'blue' | 'green';
    icon: React.ElementType;
    badge: string;
    shortcut?: string;
    title: string;
    description: string;
    features: string[];
    link: string;
    imageRight: boolean;
    isLast?: boolean;
}

const ThreeEngines = () => {
    return (
        <section className="py-32 bg-slate-50 relative overflow-hidden font-outfit">

            {/* Premium Ambient Background Effects */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-blue-50 rounded-full blur-[100px] opacity-60" />
                <div className="absolute top-[20%] left-[-10%] w-[600px] h-[600px] bg-purple-50 rounded-full blur-[120px] opacity-40" />
                <div className="absolute bottom-[-10%] right-[10%] w-[500px] h-[500px] bg-indigo-50 rounded-full blur-[100px] opacity-50" />
            </div>

            <div className="container mx-auto px-6 relative z-10">

                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, margin: "-100px" }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    className="text-center mb-24"
                >
                    <div className="inline-block px-5 py-2.5 bg-white border border-blue-100 text-blue-700 rounded-full text-sm font-bold mb-6 uppercase tracking-widest shadow-sm">
                        The Complete Suite
                    </div>
                    <h2 className="text-4xl sm:text-5xl lg:text-[56px] font-bold text-[#1e293b] mb-6 tracking-tight leading-[1.12]">
                        One Platform. Three Engines.
                    </h2>
                    <p className="text-lg sm:text-xl lg:text-[22px] text-gray-600 max-w-3xl mx-auto leading-[1.6] font-medium">
                        Everything you need to run a modern institution, unified under one roof.
                    </p>
                </motion.div>

                {/* Engine 1: CRM - Image Right */}
                <EngineSection
                    color="red"
                    icon={Zap}
                    badge="Growth Engine"
                    shortcut="CRM"
                    title="Turn Prospects Into Customers"
                    description="Automate your entire sales pipeline. From the first enquiry to final enrollment, track every interaction using intelligent workflows."
                    features={[
                        'Lead capture from multiple channels',
                        'Intelligent pipeline tracking',
                        'Automated follow-up reminders',
                        'Real-time sales analytics'
                    ]}
                    link="/products#crm"
                    imageRight={true}
                />

                {/* Engine 2: EMS - Image Left */}
                <EngineSection
                    color="blue"
                    icon={GraduationCap}
                    badge="Academic Engine"
                    shortcut="EMS"
                    title="Deliver Education at Scale"
                    description="A unified learning platform where students access everything in one place. Create courses once, deploy to 50+ branches instantly."
                    features={[
                        'Centralized course repository',
                        'Unified student dashboard',
                        'Auto-graded assessments',
                        'Permanent identity system'
                    ]}
                    link="/products#ems"
                    imageRight={false}
                />

                {/* Engine 3: HRMS - Image Right */}
                <EngineSection
                    color="green"
                    icon={Users}
                    badge="Workforce Engine"
                    shortcut="HRMS"
                    title="Manage Your Team Effortlessly"
                    description="Automate payroll, track attendance, and manage your entire workforce from a single dashboard. No more spreadsheets."
                    features={[
                        'Automated payroll processing',
                        'Biometric attendance integration',
                        'Leave management system',
                        'Performance tracking & KPIs'
                    ]}
                    link="/products#hrms"
                    imageRight={true}
                    isLast={true}
                />

            </div>
        </section>
    );
};

// Reusable Engine Section Component with Scroll Trigger Animations
const EngineSection = ({ color, icon: Icon, badge, shortcut, title, description, features, link, imageRight, isLast = false }: EngineSectionProps) => {

    const [showShortcut, setShowShortcut] = useState(false);

    useEffect(() => {
        if (!shortcut) return;
        const interval = setInterval(() => {
            setShowShortcut(prev => !prev);
        }, 3000);
        return () => clearInterval(interval);
    }, [shortcut]);

    const colorClasses = {
        red: {
            badge: 'bg-red-50 text-red-700 border-red-100',
            check: 'text-red-600',
            button: 'bg-red-600 hover:bg-red-700 shadow-red-200',
            gradient: 'from-red-50 to-white',
            border: 'border-red-100',
            icon: 'text-red-500'
        },
        blue: {
            badge: 'bg-blue-50 text-blue-700 border-blue-100',
            check: 'text-blue-600',
            button: 'bg-blue-600 hover:bg-blue-700 shadow-blue-200',
            gradient: 'from-blue-50 to-white',
            border: 'border-blue-100',
            icon: 'text-blue-500'
        },
        green: {
            badge: 'bg-green-50 text-green-700 border-green-100',
            check: 'text-green-600',
            button: 'bg-green-600 hover:bg-green-700 shadow-green-200',
            gradient: 'from-green-50 to-white',
            border: 'border-green-100',
            icon: 'text-green-500'
        }
    };

    const colors = colorClasses[color];

    return (
        <div className={`grid lg:grid-cols-2 gap-16 items-center ${isLast ? '' : 'mb-32'}`}>

            {/* Text Content */}
            <motion.div
                initial={{ opacity: 0, x: imageRight ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false, margin: "-20%" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className={imageRight ? 'order-1' : 'order-1 lg:order-2'}
            >
                <div className={`inline-flex items-center gap-2 px-4 py-2 ${colors.badge} border rounded-full text-sm font-bold mb-6 uppercase tracking-wider min-w-[140px] transition-all duration-500`}>
                    <Icon size={16} />
                    <div className="relative overflow-hidden h-5 flex items-center">
                        <AnimatePresence mode="wait">
                            <motion.span
                                key={showShortcut ? 'shortcut' : 'badge'}
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                exit={{ y: -20, opacity: 0 }}
                                transition={{ duration: 0.4 }}
                                className="block"
                            >
                                {showShortcut && shortcut ? shortcut : badge}
                            </motion.span>
                        </AnimatePresence>
                    </div>
                </div>
                <h3 className="text-4xl lg:text-[48px] font-bold text-[#1e293b] mb-6 tracking-tight leading-[1.12]">
                    {title}
                </h3>
                <p className="text-lg text-gray-600 leading-[1.7] mb-8 font-medium">
                    {description}
                </p>
                <ul className="space-y-4 mb-8">
                    {features.map((feature, i) => (
                        <motion.li
                            key={i}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: false }}
                            transition={{ duration: 0.5, delay: 0.1 * i }}
                            className="flex items-start gap-3"
                        >
                            <CheckCircle className={`${colors.check} flex-shrink-0 mt-1`} size={20} />
                            <span className="text-gray-700 text-[18px] font-medium">{feature}</span>
                        </motion.li>
                    ))}
                </ul>
                <motion.a
                    href={link}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`inline-flex items-center gap-2 px-8 py-4 ${colors.button} text-white font-bold text-[16px] rounded-xl transition-all group shadow-lg ${colors.button.split(' ').find(c => c.startsWith('shadow'))}`}
                >
                    Access {shortcut || badge.split(' ')[0]}
                    <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </motion.a>
            </motion.div>

            {/* Image/Visual - Slide Up Trigger */}
            <motion.div
                initial={{ opacity: 0, y: 60, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: false, margin: "-20%" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className={`relative ${imageRight ? 'order-2' : 'order-2 lg:order-1'}`}
            >
                <div className={`aspect-[4/3] bg-white rounded-2xl border ${colors.border} flex items-center justify-center shadow-2xl shadow-${color}-100/50`}>
                    <div className="absolute inset-0 bg-gradient-to-br from-white to-slate-50 opacity-50 rounded-2xl" />
                    <div className="text-center relative z-10">
                        <motion.div
                            whileHover={{ scale: 1.1, rotate: 5 }}
                            transition={{ duration: 0.3 }}
                        >
                            <Icon className={`w-24 h-24 ${colors.icon} mx-auto mb-4 opacity-100`} strokeWidth={1.5} />
                        </motion.div>
                        <p className={`${colors.icon} font-bold text-xl tracking-wide`}>{badge} Preview</p>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default ThreeEngines;
