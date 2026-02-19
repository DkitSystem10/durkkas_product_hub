import React from 'react';
import { ShieldCheck, Zap, Layers, Globe } from 'lucide-react';
import ProductCard from './ProductCard';

const productsData = [
    {
        name: "CRM",
        tagline: "Build relationships & close deals",
        description: "Our multi-tenant CRM centralizes lead management with branch attribution, helping you track interactions and automate growth across your entire network.",
        imageSrc: "/CRM.png"
    },
    {
        name: "HRMS",
        tagline: "Empower your workforce",
        description: "From hiring to payroll, our HRMS provides a role-driven hierarchy that simplifies global compliance, attendance, and employee management.",
        imageSrc: "/HRMS.png"
    },
    {
        name: "EMS",
        tagline: "Future of academic management",
        description: "A complete education ecosystem with AI-powered learning paths and student portals, designed to manage multiple campuses and institutions seamlessly.",
        imageSrc: "/EMS.png"
    },
];

const ProductGrid = () => {
    return (
        <section id="products" className="font-outfit overflow-hidden">
            {/* 1. BLUE HEADER & APPS SECTION */}
            <div className="bg-[#0052CC] py-32 relative overflow-hidden">
                {/* Background Decoration */}
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10 pointer-events-none">
                    <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-white rounded-full blur-[120px]" />
                </div>

                <div className="container mx-auto px-6 relative z-10">
                    <div className="max-w-3xl mx-auto mb-20 px-4 text-center">
                        <h2 className="text-5xl sm:text-7xl font-bold mb-6 tracking-tight leading-none text-white animate-fade-in">
                            Some of our most popular apps
                        </h2>
                        <p className="text-xl sm:text-2xl text-white/90 font-medium mb-10 tracking-tight">
                            Take your pick—we've got you covered.
                        </p>
                        <div className="w-16 h-1 bg-[#FFB400] mx-auto rounded-full" />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                        {productsData.map((product, index) => (
                            <div key={index} className="transform transition-all duration-500 hover:scale-[1.02]">
                                <ProductCard {...product} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* 2. WHITE ARCHITECTURE SECTION */}
            <div className="bg-white py-32 relative">
                <div className="container mx-auto px-6 relative z-10">
                    <div className="text-center mb-16">
                        <span className="text-primary font-bold text-xs uppercase tracking-[0.4em] mb-4 block">Scalable Architecture</span>
                        <h3 className="text-4xl font-black text-[#172B4D] tracking-tighter">Powered by a Single Multi-Tenant Core</h3>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
                        {[
                            {
                                icon: ShieldCheck,
                                title: "Total Isolation",
                                desc: "Every branch and company operates in a strictly isolated environment with dedicated data schemas.",
                                color: "text-blue-600"
                            },
                            {
                                icon: Globe,
                                title: "Global Reach",
                                desc: "Instantly deploy new instances for any country or region with localized configurations.",
                                color: "text-emerald-600"
                            },
                            {
                                icon: Layers,
                                title: "Centralized Control",
                                desc: "Monitor entire ecosystems from a single 'Master Admin' dashboard with unified reporting.",
                                color: "text-purple-600"
                            },
                            {
                                icon: Zap,
                                title: "Instant Scale",
                                desc: "Add infinite tenants without touching the codebase. Our system scales horizontally on demand.",
                                color: "text-orange-600"
                            }
                        ].map((item, i) => (
                            <div key={i} className="flex flex-col items-center text-center">
                                <div className={`mb-6 p-4 rounded-2xl bg-gray-50 ${item.color} shadow-inner`}>
                                    <item.icon size={28} />
                                </div>
                                <h4 className="text-lg font-bold text-[#172B4D] mb-3">{item.title}</h4>
                                <p className="text-sm text-gray-500 leading-relaxed font-medium px-4">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProductGrid;
