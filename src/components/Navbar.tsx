"use client";

import React, { useState, useEffect } from 'react';
import Logo from './Logo';
import { Menu, X, ChevronDown, Search, ArrowRight, BookOpen, LifeBuoy, Users } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [hoveredLink, setHoveredLink] = useState<string | null>(null);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const resources = [
        { name: 'Blog', description: 'Latest updates & stories', href: '/blog', icon: BookOpen },
        { name: 'Help Center', description: 'Guides & documentation', href: '/help', icon: LifeBuoy }, // Using Building2 as generic placeholder or HelpCircle if available
        { name: 'Community', description: 'Join the discussion', href: '/community', icon: Users } // Using Menu as placeholder, ideally Users
    ];

    // Better icons for resources
    const resourceIcons = {
        'Blog': BookOpen,
        'Help Center': Search, // Using Search as Help/Find
        'Community': ArrowRight // Placeholder
    };

    const navLinks = [
        { name: "Products", href: "/products", hasDropdown: true },
        { name: "Enterprise", href: "/enterprise", hasDropdown: false },
        { name: "Resources", href: "#", hasDropdown: true, items: resources },
        { name: "Contact", href: "/contact", hasDropdown: false },
    ];

    return (
        <>
            <motion.nav
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.5 }}
                className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 font-outfit ${isScrolled
                    ? 'h-[80px] bg-[#002B5B]/95 backdrop-blur-xl border-b border-white/10 shadow-xl shadow-blue-900/20'
                    : 'h-[90px] bg-[#002B5B] border-b border-white/5'
                    }`}>
                <div className="container mx-auto px-6 h-full flex justify-between items-center relative">

                    {/* LEFT: Branding */}
                    <div className="flex items-center gap-12">
                        <motion.div whileHover={{ scale: 1.05 }} className="relative z-10 flex items-center gap-2">
                            <Logo className="text-3xl" color="dynamic" />
                        </motion.div>

                        {/* CENTER: Navigation (Desktop) */}
                        <div className="hidden lg:flex items-center gap-8">
                            {navLinks.map((link) => (
                                <div
                                    key={link.name}
                                    className="relative group"
                                    onMouseEnter={() => setHoveredLink(link.name)}
                                    onMouseLeave={() => setHoveredLink(null)}
                                >
                                    <a
                                        href={link.href}
                                        className="flex items-center gap-1.5 py-4"
                                    >
                                        <span className="text-lg font-bold text-blue-100/80 group-hover:text-white transition-colors tracking-wide">
                                            {link.name}
                                        </span>
                                        {link.hasDropdown && (
                                            <ChevronDown size={14} className={`text-blue-300/60 group-hover:text-white transition-transform duration-300 ${hoveredLink === link.name ? 'rotate-180' : ''}`} />
                                        )}
                                    </a>

                                    {/* Dropdown Menu */}
                                    <AnimatePresence>
                                        {link.name === "Resources" && hoveredLink === "Resources" && (
                                            <motion.div
                                                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                                exit={{ opacity: 0, y: 10, scale: 0.95 }}
                                                transition={{ duration: 0.2 }}
                                                className="absolute top-full left-0 w-[280px] bg-white rounded-xl shadow-2xl border border-blue-50 overflow-hidden"
                                            >
                                                <div className="p-2">
                                                    {resources.map((item, idx) => (
                                                        <a
                                                            key={idx}
                                                            href={item.href}
                                                            className="flex items-start gap-4 p-3 rounded-lg hover:bg-blue-50 transition-colors group/item"
                                                        >
                                                            <div className="w-10 h-10 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center flex-shrink-0 group-hover/item:bg-blue-600 group-hover/item:text-white transition-colors">
                                                                <item.icon size={20} />
                                                            </div>
                                                            <div>
                                                                <h4 className="text-[#0f172a] font-bold text-sm mb-0.5 group-hover/item:text-blue-700">
                                                                    {item.name}
                                                                </h4>
                                                                <p className="text-slate-500 text-xs font-medium">
                                                                    {item.description}
                                                                </p>
                                                            </div>
                                                        </a>
                                                    ))}
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* RIGHT: Actions */}
                    <div className="flex items-center gap-6">

                        {/* Search Icon */}
                        <div className="hidden xl:flex items-center relative">
                            <Search className="text-blue-200/50 hover:text-white transition-colors cursor-pointer" size={20} />
                        </div>

                        <div className="hidden sm:block w-[1px] h-6 bg-white/10" />

                        <div className="flex items-center gap-4">

                            {/* High-Contrast "White" CTA */}
                            <motion.a
                                href="/#featured-apps"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="relative overflow-hidden px-6 py-2.5 bg-white text-[#002B5B] rounded-lg shadow-lg shadow-blue-900/40 group cursor-pointer"
                            >
                                <span className="relative z-10 text-[14px] font-bold flex items-center gap-2">
                                    Access Your Apps
                                    <ArrowRight size={16} className="text-[#0052CC] group-hover:translate-x-1 transition-transform" />
                                </span>
                            </motion.a>
                        </div>

                        {/* Mobile Toggle */}
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="lg:hidden p-2 text-white hover:bg-white/10 rounded-lg transition-colors"
                        >
                            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </motion.nav>

            {/* Mobile Menu - Deep Blue Theme */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[90] bg-[#002B5B] pt-[90px] px-6 lg:hidden overflow-y-auto"
                    >
                        <div className="flex flex-col gap-2 mt-4">
                            {navLinks.map((link, i) => (
                                <motion.a
                                    key={link.name}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.05 }}
                                    href={link.href}
                                    onClick={() => setIsMenuOpen(false)}
                                    className="flex items-center justify-between p-4 rounded-xl hover:bg-white/5 border border-transparent hover:border-white/10 group"
                                >
                                    <span className="text-xl font-bold text-blue-100 group-hover:text-white transition-colors">
                                        {link.name}
                                    </span>
                                    {link.hasDropdown && <ChevronDown size={20} className="text-blue-300 group-hover:text-white -rotate-90" />}
                                </motion.a>
                            ))}
                        </div>

                        <div className="mt-8 pt-8 border-t border-white/10 flex flex-col gap-4">
                            <a
                                href="/#featured-apps"
                                onClick={() => setIsMenuOpen(false)}
                                className="w-full py-4 bg-white text-[#002B5B] font-bold rounded-xl shadow-lg transition-colors text-center"
                            >
                                Access Your Apps
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;
