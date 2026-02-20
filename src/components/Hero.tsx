"use client";

import React from "react";
import { ArrowRight } from "lucide-react";

const Hero = () => {
    return (
        <section className="relative pt-24 pb-8 lg:pt-48 lg:pb-12 overflow-hidden bg-gradient-to-b from-blue-50/30 via-white to-white">

            {/* Background Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-100/20 rounded-full blur-[150px] pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">

                {/* Trust Badge */}
                <div className="flex justify-center mb-8">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-blue-100 shadow-sm">
                        <div className="flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-2 w-2 rounded-full bg-blue-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                        </div>
                        <span className="text-sm font-semibold text-gray-700">Advanced Multi-Tenant Product</span>
                    </div>
                </div>

                {/* Main Headline */}
                <div className="text-center max-w-5xl mx-auto mb-10 md:mb-12">
                    <h1 className="text-4xl sm:text-6xl lg:text-[72px] font-bold text-[#1e293b] leading-[1.2] md:leading-[1.15] mb-6 tracking-tight">
                        Master Your Entire{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500">
                            Business Ecosystem
                        </span>
                    </h1>
                    <p className="text-base sm:text-xl lg:text-[22px] text-gray-600 leading-[1.6] max-w-3xl mx-auto font-normal px-2 md:px-0">
                        Launch your enterprise ecosystem in seconds. A powerful, white-label ready platform designed to unify CRM, HRMS, and EMS across infinite branches and organizations.
                    </p>
                </div>

                {/* CTA Buttons */}
                <div className="flex justify-center">
                    <a
                        href="/#featured-apps"
                        className="group w-full sm:w-auto px-10 py-4 bg-blue-600 text-white font-bold text-[16px] rounded-xl shadow-lg shadow-blue-600/30 hover:bg-blue-700 hover:shadow-xl hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2"
                    >
                        Access Your Apps
                        <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                    </a>
                </div>

            </div>
        </section>
    );
};

export default Hero;
