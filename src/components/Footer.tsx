import React from 'react';
import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import Logo from './Logo';

const Footer = () => {
    return (
        <footer className="bg-[#111827] text-gray-400 py-20 font-outfit relative overflow-hidden">
            {/* Subtle background glow */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/5 rounded-full blur-[100px] translate-x-1/2 -translate-y-1/2" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
                    {/* Brand Column */}
                    <div className="space-y-6">
                        <div className="flex items-center gap-3">
                            <Logo className="text-2xl" />
                        </div>
                        <p className="text-sm leading-relaxed max-w-xs">
                            The comprehensive product suite built to manage every aspect of your business. Trusted by enterprises worldwide.
                        </p>
                        <div className="flex gap-4">
                            {[Linkedin, Twitter, Facebook, Instagram].map((Icon, i) => (
                                <a key={i} href="#" className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300">
                                    <Icon size={18} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Products Column */}
                    <div>
                        <h4 className="text-white font-black text-xs uppercase tracking-[0.3em] mb-8">Products</h4>
                        <ul className="space-y-4">
                            {[
                                { name: "DURKKAS CRM", link: "/products" },
                                { name: "DURKKAS HRMS", link: "/products" },
                                { name: "DURKKAS EMS", link: "/products" },
                                { name: "DURKKAS Payroll", link: "/products" },
                                { name: "DURKKAS Statutory", link: "/products" }
                            ].map((item, i) => (
                                <li key={i}>
                                    <a href={item.link} className="text-sm font-medium hover:text-white transition-colors flex items-center gap-2 group">
                                        <div className="w-1 h-1 rounded-full bg-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                                        {item.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Company Column */}
                    <div>
                        <h4 className="text-white font-black text-xs uppercase tracking-[0.3em] mb-8">Resources</h4>
                        <ul className="space-y-4">
                            {[
                                { name: "Documentation", link: "/resources" },
                                { name: "Developer SDK", link: "/resources" },
                                { name: "Sub-modules", link: "/resources" },
                                { name: "Academy", link: "/resources" }
                            ].map((item, i) => (
                                <li key={i}>
                                    <a href={item.link} className="text-sm font-medium hover:text-white transition-colors">
                                        {item.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Support Column - Status Removed */}
                    <div>
                        <h4 className="text-white font-black text-xs uppercase tracking-[0.3em] mb-8">Support</h4>
                        <ul className="space-y-4">
                            {[
                                { name: "Help Center", link: "#" },
                                { name: "Community", link: "#" },
                                { name: "Security", link: "#" }
                            ].map((item, i) => (
                                <li key={i}>
                                    <a href={item.link} className="text-sm font-medium hover:text-white transition-colors">
                                        {item.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
                    <p className="text-xs font-medium tracking-tight text-center md:text-left flex items-center gap-1">
                        © {new Date().getFullYear()} <Logo inline text="DURKKAS" className="text-[10px]" /> Multi-Tenant OS. All rights reserved.
                    </p>
                    <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-xs font-bold uppercase tracking-widest">
                        <a href="#" className="hover:text-white transition-colors">Privacy</a>
                        <a href="#" className="hover:text-white transition-colors">Terms</a>
                        <a href="#" className="hover:text-white transition-colors">Cookies</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
