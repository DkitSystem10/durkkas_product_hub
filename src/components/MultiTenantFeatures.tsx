import React from 'react';
import { ShieldCheck, Layers, GitBranch, LayoutGrid } from 'lucide-react';

const MultiTenantFeatures = () => {
    const features = [
        {
            title: "Strict Data Isolation",
            description: "Enterprise-grade multi-tenancy ensures every company and branch's data is logically isolated and secured.",
            Icon: ShieldCheck,
            color: "#0052CC"
        },
        {
            title: "Role-Driven Hierarchy",
            description: "From Platform Admins to Branch Managers, control access with a sophisticated 10-level role system.",
            Icon: Layers,
            color: "#00C853"
        },
        {
            title: "Infinite Branch Support",
            description: "Scale horizontally. Add new branches, centers, or offices instantly with localized data control.",
            Icon: GitBranch,
            color: "#FB8C00"
        },
        {
            title: "White-Label Core",
            description: "A flexible architecture designed to be branded and customized for any organization worldwide.",
            Icon: LayoutGrid,
            color: "#8E24AA"
        }
    ];

    return (
        <section className="py-24 bg-transparent relative overflow-hidden">
            {/* Soft background orbs */}
            <div className="absolute top-1/2 left-0 w-80 h-80 bg-blue-100/10 rounded-full blur-[120px] -translate-x-1/2" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <span className="text-primary font-bold text-xs uppercase tracking-[0.3em] mb-4 block">Architected for Scale</span>
                    <h2 className="text-4xl lg:text-5xl font-black text-[#172B4D] mb-6 tracking-tighter">
                        One Platform. Infinite Managed Instances.
                    </h2>
                    <p className="text-gray-500 font-medium text-lg tracking-tight">
                        DURKKAS isn't just an app—it's a multi-tenant framework built to power the next generation of global organizations.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    {features.map((feature, index) => (
                        <div key={index} className="flex flex-col items-center text-center group">
                            <div
                                className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 shadow-sm"
                                style={{ backgroundColor: `${feature.color}10` }}
                            >
                                <feature.Icon size={32} style={{ color: feature.color }} />
                            </div>
                            <h4 className="text-xl font-bold text-[#172B4D] mb-3">{feature.title}</h4>
                            <p className="text-gray-500 text-sm leading-relaxed font-medium">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default MultiTenantFeatures;
