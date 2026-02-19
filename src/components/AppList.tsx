"use client";

import React from 'react';
import { motion } from 'framer-motion';
import {
    ChevronRight,
    Users,
    LayoutDashboard,
    UserCheck,
    Clock,
    Wallet,
    Scale,
    BarChart3
} from 'lucide-react';
import Link from 'next/link';

const AppList = () => {
    const apps = [
        {
            id: 'crm',
            title: 'CRM',
            description: 'Comprehensive CRM platform for customer-facing teams.',
            icon: Users,
            color: 'text-blue-600',
            bg: 'bg-blue-50'
        },
        {
            id: 'ems',
            title: 'EMS',
            description: 'Enterprise Management System for core operations.',
            icon: LayoutDashboard,
            color: 'text-teal-600',
            bg: 'bg-teal-50'
        },
        {
            id: 'hrms',
            title: 'HRMS',
            description: 'Modern Human Resource Management System.',
            icon: UserCheck,
            color: 'text-indigo-600',
            bg: 'bg-indigo-50'
        },
        {
            id: 'attendance',
            title: 'Attendance',
            description: 'Smart biometric & face verification attendance.',
            icon: Clock,
            color: 'text-emerald-600',
            bg: 'bg-emerald-50'
        },
        {
            id: 'payroll',
            title: 'Payroll',
            description: 'Automated payroll & tax compliance.',
            icon: Wallet,
            color: 'text-rose-600',
            bg: 'bg-rose-50'
        },
        {
            id: 'statutory',
            title: 'Statutory',
            description: 'Legal & regulatory compliance management.',
            icon: Scale,
            color: 'text-amber-600',
            bg: 'bg-amber-50'
        },
        {
            id: 'reports',
            title: 'Reports',
            description: 'Advanced AI-powered business intelligence.',
            icon: BarChart3,
            color: 'text-purple-600',
            bg: 'bg-purple-50'
        }
    ];

    return (
        <section id="featured-apps" className="py-20 bg-white scroll-mt-24">
            <div className="container mx-auto px-6 max-w-4xl">

                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-10"
                >
                    <span className="text-[12px] font-bold text-slate-400 uppercase tracking-[0.2em]">Featured Apps</span>
                </motion.div>

                <div className="flex flex-col border-t border-slate-100">
                    {apps.map((app, index) => {
                        const Icon = app.icon;
                        return (
                            <motion.div
                                key={app.id}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <Link
                                    href={`/products?category=${app.id}`}
                                    className="group flex items-center justify-between py-10 border-b border-slate-100 hover:bg-slate-50/50 transition-all px-4 -mx-4 rounded-xl"
                                >
                                    <div className="flex items-center gap-8">
                                        <div className={`w-16 h-16 ${app.bg} rounded-2xl flex items-center justify-center border border-slate-100/50 shadow-sm group-hover:scale-110 transition-transform duration-300`}>
                                            <Icon className={app.color} size={32} strokeWidth={1.5} />
                                        </div>
                                        <div>
                                            <h3 className="text-2xl font-bold text-[#0f172a] mb-1 group-hover:text-blue-600 transition-colors">
                                                {app.title}
                                            </h3>
                                            <p className="text-[15px] md:text-lg text-slate-500 font-medium">
                                                {app.description}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <span className="opacity-0 group-hover:opacity-100 transition-opacity text-blue-600 font-bold text-sm hidden md:block">
                                            Access {app.title}
                                        </span>
                                        <ChevronRight className="text-slate-300 group-hover:text-blue-600 group-hover:translate-x-1 transition-all" size={24} />
                                    </div>
                                </Link>
                            </motion.div>
                        );
                    })}
                </div>

                <div className="mt-12 flex justify-center">
                    <Link href="/products" className="text-blue-600 font-bold hover:underline flex items-center gap-2">
                        View all products <ChevronRight size={18} />
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default AppList;
