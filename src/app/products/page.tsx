"use client";

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import {
    ChevronRight,
    Search,
    LayoutGrid,
    ChevronDown,
    BadgeDollarSign,
    Wallet,
    Users2,
    GraduationCap
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const categories = [
    { id: 'sales', name: 'Sales', icon: BadgeDollarSign },
    { id: 'finance', name: 'Finance', icon: Wallet },
    { id: 'hr', name: 'Human Resources', icon: Users2 },
    { id: 'education', name: 'Education', icon: GraduationCap },
];

const productsData: Record<string, any[]> = {
    sales: [
        {
            name: "CRM",
            description: "Comprehensive CRM platform for customer-facing teams.",
            logo: "/CRM.png",
        }
    ],
    finance: [
        {
            name: "Payroll",
            description: "Automate your entire payroll process with statutory compliance.",
            logo: "/HRMS.png",
        }
    ],
    hr: [
        {
            name: "Payroll Management",
            description: "Unified payroll processing with automatic tax calculations.",
            logo: "/HRMS.png",
        },
        {
            name: "Statutory Management",
            description: "Stay compliant with PF, ESI, and PT regulations automatically handled.",
            logo: "/HRMS.png",
        },
        {
            name: "Attendance Management",
            description: "Track office and remote attendance with geo-fencing.",
            logo: "/HRMS.png",
        },
        {
            name: "Reports Management",
            description: "Visual HR analytics and custom reports for data-driven decisions.",
            logo: "/HRMS.png",
        }
    ],
    education: [
        {
            name: "EMS",
            description: "Unified education management. Deploy student dashboards across infinite campuses.",
            logo: "/EMS.png",
        }
    ]
};

const ProductsPage = () => {
    const [activeTab, setActiveTab] = useState('sales');
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const activeCategory = categories.find(c => c.id === activeTab);

    return (
        <div className="min-h-screen bg-[#FDFDFD] font-outfit">
            <Navbar />

            <main className="pt-20 flex flex-col lg:flex-row min-h-screen">

                {/* Zoho-Style Mobile Category Selector */}
                <div className="lg:hidden bg-white border-b border-gray-100 sticky top-20 z-[70]">
                    <div className="px-6 py-4">
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="w-full flex items-center justify-between group"
                        >
                            <div className="flex items-center gap-3">
                                <div className="p-2 bg-blue-50 rounded-lg text-primary">
                                    {activeCategory && <activeCategory.icon size={20} />}
                                </div>
                                <span className="text-[17px] font-black text-[#172B4D] tracking-tight">
                                    {activeCategory?.name}
                                </span>
                            </div>
                            <ChevronDown
                                size={20}
                                className={`text-gray-400 transition-transform duration-300 ${isMenuOpen ? 'rotate-180' : ''}`}
                            />
                        </button>
                    </div>

                    <AnimatePresence>
                        {isMenuOpen && (
                            <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 'auto', opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                className="overflow-hidden border-t border-gray-50 bg-[#F9FAFB]"
                            >
                                <div className="p-3 grid grid-cols-1 gap-2">
                                    {categories.map((cat) => (
                                        <button
                                            key={cat.id}
                                            onClick={() => {
                                                setActiveTab(cat.id);
                                                setIsMenuOpen(false);
                                            }}
                                            className={`flex items-center gap-4 px-4 py-4 rounded-xl transition-all ${activeTab === cat.id
                                                ? 'bg-white shadow-sm text-primary'
                                                : 'text-gray-600 hover:bg-gray-100'
                                                }`}
                                        >
                                            <div className={`p-2 rounded-lg ${activeTab === cat.id ? 'bg-blue-50 text-primary' : 'bg-gray-100 text-gray-400'}`}>
                                                <cat.icon size={18} />
                                            </div>
                                            <span className="text-[15px] font-bold tracking-tight">{cat.name}</span>
                                            {activeTab === cat.id && <ChevronRight size={16} className="ml-auto" />}
                                        </button>
                                    ))}
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>

                {/* Left Sidebar - Exact Zoho Desktop Look */}
                <div className="hidden lg:block w-[320px] border-r border-gray-100 flex-shrink-0 bg-white">
                    <div className="sticky top-20 h-[calc(100vh-80px)] p-8 flex flex-col">
                        <div className="relative mb-10 group">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-primary transition-colors" size={20} />
                            <input
                                type="text"
                                placeholder="Search products..."
                                className="w-full bg-gray-50 border border-transparent rounded-xl py-3 pl-11 pr-4 text-[15px] focus:bg-white focus:border-primary/20 focus:ring-4 focus:ring-primary/5 outline-none transition-all placeholder:text-gray-400"
                            />
                        </div>

                        <div className="flex-grow">
                            <p className="text-[11px] font-black text-gray-400 uppercase tracking-[0.2em] mb-4 px-2">Marketplace Categories</p>
                            <nav className="flex flex-col gap-1.5">
                                {categories.map((cat) => (
                                    <button
                                        key={cat.id}
                                        onClick={() => setActiveTab(cat.id)}
                                        className={`group flex items-center gap-3.5 px-5 py-4 rounded-[18px] text-[16px] font-bold transition-all ${activeTab === cat.id
                                            ? 'bg-blue-50 text-primary shadow-[0_4px_12px_rgba(0,82,204,0.08)]'
                                            : 'text-[#475467] hover:bg-gray-50 hover:text-primary'
                                            }`}
                                    >
                                        <div className={`p-2 rounded-xl transition-colors ${activeTab === cat.id ? 'bg-primary text-white' : 'bg-gray-100 text-gray-400 group-hover:bg-blue-50 group-hover:text-primary'}`}>
                                            <cat.icon size={18} />
                                        </div>
                                        {cat.name}
                                        <ChevronRight size={18} className={`ml-auto transition-all ${activeTab === cat.id ? 'translate-x-0 opacity-100' : '-translate-x-2 opacity-0'}`} />
                                    </button>
                                ))}
                            </nav>
                        </div>

                        <div className="mt-auto pt-8 border-t border-gray-50">
                            <div className="bg-primary/5 rounded-2xl p-6 text-center">
                                <p className="text-xs font-bold text-primary uppercase tracking-widest mb-2">Need Help?</p>
                                <p className="text-[13px] text-gray-600 mb-4">Can't find what you're looking for?</p>
                                <button
                                    onClick={() => window.dispatchEvent(new CustomEvent('open-durkkas-chat'))}
                                    className="text-sm font-black text-primary hover:underline hover:scale-105 transition-transform"
                                >
                                    Chat with us
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Main Content Area */}
                <div className="flex-grow p-6 md:p-12 lg:p-20 bg-[#FDFDFD]">
                    <div className="max-w-6xl mx-auto">
                        <header className="mb-12 md:mb-20">
                            <div className="flex items-center gap-4 mb-4">
                                <div className="w-12 h-1 bg-primary rounded-full" />
                                <span className="text-xs font-black text-primary uppercase tracking-[0.4em]">Products Hub</span>
                            </div>
                            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#172B4D] tracking-tighter leading-tight">
                                {activeCategory?.name} Solutions
                            </h2>
                            <p className="mt-6 text-lg md:text-xl text-gray-500 max-w-2xl font-medium leading-relaxed">
                                Explore our purpose-built tools for {activeCategory?.name.toLowerCase()} teams to streamline operations and accelerate performance.
                            </p>
                        </header>

                        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-8 md:gap-12">
                            {productsData[activeTab]?.map((product, idx) => (
                                <motion.div
                                    layout
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.4, delay: idx * 0.1 }}
                                    key={product.name}
                                    className="bg-white rounded-[3rem] p-8 md:p-12 border border-gray-100 shadow-[0_4px_30px_rgba(0,0,0,0.03)] hover:shadow-[0_30px_70px_rgba(0,0,0,0.1)] transition-all duration-500 flex flex-col group relative overflow-hidden"
                                >
                                    {/* Subtle decorative background element */}
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-primary/10 transition-colors" />

                                    <div className="relative z-10 flex flex-col gap-8">
                                        <div className="w-20 h-20 md:w-24 md:h-24 flex-shrink-0 flex items-center justify-center transform group-hover:scale-110 transition-transform duration-500">
                                            <img src={product.logo} alt={product.name} className="w-full h-full object-contain" />
                                        </div>

                                        <div>
                                            <h3 className="text-2xl md:text-3xl font-black text-[#172B4D] tracking-tighter uppercase mb-4 group-hover:text-primary transition-colors">
                                                {product.name}
                                            </h3>
                                            <p className="text-gray-500 text-[16px] md:text-lg leading-relaxed font-medium mb-8">
                                                {product.description}
                                            </p>

                                            <button className="flex items-center gap-2 text-primary font-black text-sm uppercase tracking-widest group/btn">
                                                Access {product.name}
                                                <ChevronRight size={18} className="transform group-hover/btn:translate-x-2 transition-transform" />
                                            </button>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default ProductsPage;
