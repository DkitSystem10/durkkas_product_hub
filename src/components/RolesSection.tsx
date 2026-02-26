"use client";

import React from 'react';
import { Crown, Building2, GraduationCap, UserCog, BookOpen, User } from 'lucide-react';
import { motion } from 'framer-motion';

const RolesSection = () => {

    const roles = [
        {
            icon: Crown,
            role: 'Platform Admin',
            color: 'bg-gradient-to-br from-purple-500 to-purple-600',
            description: 'The Super User. Manages all tenants, subscription plans, and global analytics.',
        },
        {
            icon: Building2,
            role: 'Company Admin',
            color: 'bg-gradient-to-br from-blue-500 to-blue-600',
            description: 'The CEO view. Full control over all branches, revenue, and master configurations.',
        },
        {
            icon: GraduationCap,
            role: 'Academic Manager',
            color: 'bg-gradient-to-br from-emerald-500 to-emerald-600',
            description: 'The Education Head. Controls global curriculum, course repositories, and faculty allocation.',
        },
        {
            icon: UserCog,
            role: 'Branch Admin',
            color: 'bg-gradient-to-br from-orange-500 to-orange-600',
            description: 'The Campus Director. Manages students and operations for a specific location.',
        },
        {
            icon: BookOpen,
            role: 'Tutor',
            color: 'bg-gradient-to-br from-teal-500 to-teal-600',
            description: 'The Faculty. Access restricted to their assigned batches and students.',
        },
        {
            icon: User,
            role: 'Student',
            color: 'bg-gradient-to-br from-pink-500 to-pink-600',
            description: 'The Learner. A personalized dashboard for their educational journey.',
        }
    ];

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const item = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
    };

    return (
        <section className="py-24 bg-white font-outfit">
            <div className="container mx-auto px-6">

                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl sm:text-5xl lg:text-[52px] font-bold text-[#0f172a] mb-6 tracking-tight leading-[1.1]">
                        Roles & Permissions
                    </h2>
                    <p className="text-lg sm:text-[18px] text-slate-600 font-medium max-w-3xl mx-auto leading-[1.6]">
                        A hierarchical permission structure designed for scale. From global admins to individual students, everyone has the right access.
                    </p>
                </motion.div>

                {/* Roles Grid - Exact Match to Reference */}
                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-50px" }}
                    className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                    {roles.map((data, index) => {
                        const Icon = data.icon;

                        return (
                            <motion.div
                                key={index}
                                variants={item}
                                whileHover={{ y: -5 }}
                                className="bg-white p-8 rounded-3xl border border-blue-100 hover:shadow-xl transition-all duration-300 flex flex-col items-start text-left h-full group"
                            >
                                {/* Icon Container */}
                                <div className={`w-14 h-14 ${data.color} rounded-xl flex items-center justify-center mb-6 shadow-sm group-hover:scale-105 transition-transform duration-300`}>
                                    <Icon className="text-white" size={28} strokeWidth={1.5} />
                                </div>

                                {/* Role Title */}
                                <h3 className="text-[22px] font-bold text-[#0f172a] mb-3 tracking-tight group-hover:text-blue-700 transition-colors">
                                    {data.role}
                                </h3>

                                {/* Description */}
                                <p className="text-[16px] text-slate-600 leading-[1.6] font-medium">
                                    {data.description}
                                </p>
                            </motion.div>
                        );
                    })}
                </motion.div>

            </div>
        </section>
    );
};

export default RolesSection;
