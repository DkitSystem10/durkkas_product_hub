"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ProfileCard from "./ProfileCard";

const HeroAnimation = () => {
    const [isHovered, setIsHovered] = useState(false);

    const profileData = [
        {
            name: "CRM",
            LogoComponent: (
                <img src="/CRM.png" alt="CRM" className="w-[85%] h-[85%] object-contain" />
            ),
            lessons: ["Vendor", "B2B", "Partners", "Career Guidance"],
            cardBg: "bg-[#0052CC]",
            idleRotate: -8,
            idleX: -10,
            fanX: -260,
            fanY: 40,
            fanRotate: -20,
        },
        {
            name: "HRMS",
            LogoComponent: (
                <img src="/HRMS.png" alt="HRMS" className="w-[85%] h-[85%] object-contain" />
            ),
            lessons: ["Payroll Management", "Staturory Management", "Attendance management", "Reports Manage management"],
            cardBg: "bg-[#00C853]",
            idleRotate: 0,
            idleX: 0,
            fanX: 0,
            fanY: -60,
            fanRotate: 0,
        },
        {
            name: "EMS",
            LogoComponent: (
                <img src="/EMS.png" alt="EMS" className="w-[85%] h-[85%] object-contain" />
            ),
            lessons: ["AI Full Stack Dev", "AI Finance", "AI Digital Marketing", "AI Logistics"],
            cardBg: "bg-[#FB8C00]",
            idleRotate: 8,
            idleX: 10,
            fanX: 260,
            fanY: 40,
            fanRotate: 20,
        },
    ];

    return (
        <div
            className="relative w-full h-[650px] flex items-center justify-center cursor-pointer group"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* Dynamic Background Mesh to emphasize the 'Power' of the product */}
            <div className={`absolute inset-0 transition-all duration-1000 blur-[150px] -z-10 bg-gradient-to-tr from-blue-400/20 via-purple-400/10 to-transparent ${isHovered ? 'opacity-60 scale-110' : 'opacity-30 scale-100'}`} />

            {/* The Deck Hub */}
            <div className="relative">
                {profileData.map((profile, index) => (
                    <motion.div
                        key={index}
                        initial={false}
                        animate={{
                            x: isHovered ? profile.fanX : profile.idleX,
                            y: isHovered ? profile.fanY : index * 0, // Perfectly stacked
                            rotate: isHovered ? profile.fanRotate : profile.idleRotate,
                            scale: isHovered ? 1.05 : 1 - (index * 0.03),
                            zIndex: isHovered ? (index === 1 ? 50 : 40) : (40 - index),
                            filter: !isHovered && index !== 1 ? "brightness(0.9)" : "brightness(1)",
                        }}
                        transition={{
                            type: "spring",
                            stiffness: 180,
                            damping: 24,
                            mass: 0.8
                        }}
                        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px]"
                    >
                        <ProfileCard
                            name={profile.name}
                            LogoComponent={profile.LogoComponent}
                            lessons={profile.lessons}
                            cardBg={profile.cardBg}
                            avatarBg="white"
                        />
                    </motion.div>
                ))}
            </div>

            {/* Interaction UX - Floating Hint */}
            <AnimatePresence>
                {!isHovered && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        className="absolute bottom-10 flex flex-col items-center gap-4"
                    >
                        <div className="w-10 h-10 rounded-full border border-gray-100 flex items-center justify-center overflow-hidden bg-white/50 backdrop-blur-sm">
                            <motion.div
                                animate={{ y: [0, 5, 0] }}
                                transition={{ duration: 1.5, repeat: Infinity }}
                                className="w-1 h-3 bg-primary rounded-full"
                            />
                        </div>
                        <span className="text-[10px] font-black uppercase tracking-[0.5em] text-gray-400">
                            Discover Ecosystem
                        </span>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default HeroAnimation;
