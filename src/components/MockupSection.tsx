"use client";

import React from 'react';
import DashboardMockup from './DashboardMockup';

const MockupSection = () => {
    return (
        <section className="py-0 bg-transparent relative z-10 overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="flex justify-center -mt-5">
                    <DashboardMockup />
                </div>
            </div>
        </section>
    );
};

export default MockupSection;
