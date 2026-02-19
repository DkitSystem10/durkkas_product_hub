"use client";

import React from 'react';
import { Check, ArrowRight, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

const PricingSection = () => {
    const tiers = [
        {
            name: 'Starter',
            price: 'Free',
            period: 'forever',
            description: 'Perfect for single-branch pilot programs',
            features: [
                '1 Branch',
                'Up to 50 Students',
                'Basic CRM & EMS',
                'Email Support',
                '5 GB Storage',
                'Community Access'
            ],
            cta: 'Start Free',
            highlighted: false
        },
        {
            name: 'Growth',
            price: '$99',
            period: 'per month',
            description: 'For expanding institutions',
            features: [
                'Up to 5 Branches',
                'Up to 500 Students',
                'Full CRM, EMS & HRMS',
                'Priority Support',
                '50 GB Storage',
                'Advanced Analytics',
                'Custom Branding',
                'API Access'
            ],
            cta: 'Start 14-Day Trial',
            highlighted: true
        },
        {
            name: 'Enterprise',
            price: 'Custom',
            period: 'contact sales',
            description: 'Infinite scale for global universities',
            features: [
                'Unlimited Branches',
                'Unlimited Students',
                'Full Platform Access',
                'Dedicated Support',
                'Unlimited Storage',
                'Custom Integrations',
                'White-Label Options',
                'SLA Guarantee',
                'Dedicated Account Manager'
            ],
            cta: 'Contact Sales',
            highlighted: false
        }
    ];

    return (
        <section className="py-32 bg-gradient-to-b from-white to-gray-50">
            <div className="container mx-auto px-6">

                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="text-center mb-20"
                >
                    <h2 className="text-4xl sm:text-5xl lg:text-[56px] font-bold text-[#1e293b] mb-6 tracking-tight leading-[1.2]">
                        Simple, Transparent Pricing
                    </h2>
                    <p className="text-lg sm:text-xl lg:text-[20px] text-gray-600 max-w-3xl mx-auto leading-[1.6] font-normal">
                        Choose the plan that fits your institution. Scale up or down anytime.
                    </p>
                </motion.div>

                {/* Pricing Cards */}
                <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {tiers.map((tier, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{
                                duration: 0.5,
                                delay: index * 0.15,
                                ease: "easeOut"
                            }}
                            whileHover={{
                                y: tier.highlighted ? -8 : -12,
                                transition: { duration: 0.2 }
                            }}
                            className={`relative p-8 rounded-2xl border-2 transition-all ${tier.highlighted
                                    ? 'border-blue-600 bg-white shadow-2xl scale-105'
                                    : 'border-gray-200 bg-white hover:border-blue-200 hover:shadow-xl'
                                }`}
                        >
                            {/* Popular Badge */}
                            {tier.highlighted && (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4, delay: 0.3 }}
                                    className="absolute -top-4 left-1/2 -translate-x-1/2"
                                >
                                    <span className="inline-flex items-center gap-1 px-4 py-1 bg-blue-600 text-white text-xs font-bold rounded-full uppercase tracking-wider">
                                        <Sparkles size={12} />
                                        Most Popular
                                    </span>
                                </motion.div>
                            )}

                            {/* Tier Name */}
                            <h3 className="text-[24px] font-bold text-[#1e293b] mb-2 tracking-tight">
                                {tier.name}
                            </h3>

                            {/* Description */}
                            <p className="text-[14px] text-gray-600 mb-6">
                                {tier.description}
                            </p>

                            {/* Price */}
                            <div className="mb-6">
                                <div className="flex items-baseline gap-2">
                                    <span className="text-5xl font-black text-[#1e293b] tracking-tight">
                                        {tier.price}
                                    </span>
                                    {tier.period !== 'contact sales' && (
                                        <span className="text-gray-500 text-sm">
                                            /{tier.period}
                                        </span>
                                    )}
                                </div>
                                {tier.period === 'contact sales' && (
                                    <span className="text-gray-500 text-sm">{tier.period}</span>
                                )}
                            </div>

                            {/* CTA Button */}
                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className={`w-full py-3 px-6 rounded-xl font-bold text-[15px] mb-8 transition-all flex items-center justify-center gap-2 group ${tier.highlighted
                                        ? 'bg-blue-600 text-white hover:bg-blue-700 shadow-lg shadow-blue-600/30'
                                        : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                                    }`}
                            >
                                {tier.cta}
                                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                            </motion.button>

                            {/* Features List */}
                            <ul className="space-y-3">
                                {tier.features.map((feature, i) => (
                                    <motion.li
                                        key={i}
                                        initial={{ opacity: 0, x: -10 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{
                                            duration: 0.3,
                                            delay: 0.5 + (index * 0.15) + (i * 0.05),
                                            ease: "easeOut"
                                        }}
                                        className="flex items-start gap-3 text-[15px] text-gray-700"
                                    >
                                        <Check className={`flex-shrink-0 mt-0.5 ${tier.highlighted ? 'text-blue-600' : 'text-gray-400'}`} size={18} />
                                        <span>{feature}</span>
                                    </motion.li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>

                {/* Bottom Note */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    className="text-center mt-12"
                >
                    <p className="text-gray-600 text-[15px]">
                        All plans include SSL encryption, automatic backups, and 99.99% uptime SLA.
                    </p>
                </motion.div>

            </div>
        </section>
    );
};

export default PricingSection;
