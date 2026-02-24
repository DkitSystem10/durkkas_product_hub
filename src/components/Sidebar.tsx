"use client";

import React from 'react';
import {
    LayoutDashboard,
    Users,
    Briefcase,
    BarChart3,
    Settings,
    LogOut,
    Search,
    ChevronRight,
    Users2,
    BookOpen,
    HelpCircle
} from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Sidebar = () => {
    const pathname = usePathname();

    const menuItems = [
        { icon: LayoutDashboard, label: 'Dashboard', href: '/crm' },
        { icon: Users, label: 'Leads', href: '/crm/leads' },
        { icon: Briefcase, label: 'Business', href: '/crm/business' },
        { icon: Users2, label: 'Partners', href: '/crm/partners' },
        { icon: BookOpen, label: 'Courses', href: '/crm/courses' },
        { icon: BarChart3, label: 'Reports', href: '/crm/reports' },
    ];

    const bottomItems = [
        { icon: Settings, label: 'Settings', href: '/crm/settings' },
        { icon: HelpCircle, label: 'Support', href: '/crm/support' },
    ];

    return (
        <aside className="w-64 h-screen bg-white border-r border-slate-100 flex flex-col fixed left-0 top-0 z-40">
            {/* Logo */}
            <div className="p-6 flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white shadow-lg shadow-blue-500/20">
                    <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
                        <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
                    </svg>
                </div>
                <div className="flex flex-col">
                    <span className="font-black text-slate-800 tracking-tighter text-xl">DURKKAS</span>
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest leading-none">Sales Hub</span>
                </div>
            </div>

            {/* Quick Search */}
            <div className="px-4 mb-6">
                <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
                    <input
                        type="text"
                        placeholder="Search workspace..."
                        className="w-full bg-slate-50 border-none rounded-xl py-2.5 pl-10 pr-4 text-xs font-medium focus:ring-2 focus:ring-blue-500/10 outline-none"
                    />
                </div>
            </div>

            {/* Navigation */}
            <nav className="flex-grow px-3 space-y-1">
                <p className="px-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2">Main Menu</p>
                {menuItems.map((item) => {
                    const isActive = pathname === item.href;
                    return (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={`flex items-center justify-between p-3 rounded-xl transition-all group ${isActive ? 'bg-blue-50 text-blue-600' : 'text-slate-500 hover:bg-slate-50 hover:text-slate-900'}`}
                        >
                            <div className="flex items-center gap-3">
                                <item.icon size={20} className={isActive ? 'text-blue-600' : 'text-slate-400 group-hover:text-slate-600'} />
                                <span className="text-sm font-bold tracking-tight">{item.label}</span>
                            </div>
                            {isActive && <ChevronRight size={14} className="text-blue-600" />}
                        </Link>
                    );
                })}
            </nav>

            {/* Bottom Links */}
            <div className="p-3 border-t border-slate-50 space-y-1">
                {bottomItems.map((item) => (
                    <Link
                        key={item.href}
                        href={item.href}
                        className="flex items-center gap-3 p-3 rounded-xl text-slate-500 hover:bg-slate-50 hover:text-slate-900 transition-all group"
                    >
                        <item.icon size={20} className="text-slate-400 group-hover:text-slate-600" />
                        <span className="text-sm font-bold tracking-tight">{item.label}</span>
                    </Link>
                ))}
            </div>

            {/* User Profile Summary */}
            <div className="p-4 bg-slate-50 mx-3 mb-4 rounded-2xl flex items-center gap-3 border border-slate-100">
                <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 overflow-hidden shadow-sm">
                    <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Admin" alt="Admin" />
                </div>
                <div className="flex-grow overflow-hidden">
                    <p className="text-xs font-black text-slate-800 truncate">Vasanth Admin</p>
                    <p className="text-[10px] font-bold text-slate-400 truncate uppercase">Superuser</p>
                </div>
                <button className="p-2 text-slate-400 hover:text-red-500 transition-colors">
                    <LogOut size={16} />
                </button>
            </div>
        </aside>
    );
};

export default Sidebar;
