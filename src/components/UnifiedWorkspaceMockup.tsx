"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Search,
    Bell,
    Calendar,
    Grid,
    Plus,
    Filter,
    ChevronDown,
    MoreHorizontal,
    LayoutDashboard,
    FileText,
    BarChart2,
    CheckCircle2,
    User2,
    Settings,
    Clock,
    ChevronLeft,
    ChevronRight,
    Megaphone,
    Gavel,
    TrendingUp
} from 'lucide-react';

const hubs = [
    {
        id: 'legal',
        title: 'Legal Hub',
        heading: 'Agreements',
        color: '#00BCD4',
        type: 'kanban',
        teams: [
            { name: "HR", color: "#FF9800", icon: "HR" },
            { name: "Development", color: "#9C27B0", icon: "De" },
            { name: "Legal", color: "#00BCD4", icon: "Le", active: true },
            { name: "Finance", color: "#673AB7", icon: "Fi" }
        ],
        data: {
            open: [
                { title: "Terms of Use", user: "Finn Connor", date: "06/28/2026" },
                { title: "Liability Waiver", user: "Amelia Burrows", date: "06/11/2026" }
            ],
            progress: [
                { title: "Change to Terms", user: "Amelia Burrows", date: "06/05/2026" },
                { title: "Privacy Policy", user: "Benjamin Smith", date: "06/03/2026" }
            ],
            closed: [
                { title: "Contract duration", user: "Finn Connor", date: "05/31/2026" },
                { title: "Acceptable use", user: "Emily Nguyen", date: "05/31/2026" }
            ]
        },
        lead: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200"
    },
    {
        id: 'marketing',
        title: 'Marketing Hub',
        heading: 'Campaigns',
        color: '#2196F3',
        type: 'list',
        teams: [
            { name: "Design", color: "#E91E63", icon: "Ds" },
            { name: "Marketing", color: "#2196F3", icon: "Ma", active: true },
            { name: "Content", color: "#4CAF50", icon: "Co" },
            { name: "Social", color: "#00BCD4", icon: "So" }
        ],
        data: [
            { title: "Cherry Blossom Season Meta Ads", user: "Finn Connor", status: "Completed", type: "Meta Ads" },
            { title: "Wonders of the World Trip Instagram Ads", user: "Amelia Burrows", status: "In Progress", type: "Instagram Ads" },
            { title: "Australia Diving Trip Facebook Ads", user: "Chloe Martinez", status: "Completed", type: "Facebook Ads" },
            { title: "South America (Mixed Group) Google Ads", user: "Daniel Brown", status: "Active", type: "Google Ads" }
        ],
        lead: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200"
    },
    {
        id: 'sales',
        title: 'Sales Hub',
        heading: 'Deals & Pipeline',
        color: '#F44336',
        type: 'kanban',
        teams: [
            { name: "Regional", color: "#FF5722", icon: "Re" },
            { name: "Sales", color: "#F44336", icon: "Sa", active: true },
            { name: "Partners", color: "#3F51B5", icon: "Pa" },
            { name: "Enterprise", color: "#607D8B", icon: "En" }
        ],
        data: {
            open: [
                { title: "Global Logisics Deal", user: "Sarah Jenkins", date: "Today" },
                { title: "Cloud Migration Project", user: "Mike Ross", date: "Tomorrow" }
            ],
            progress: [
                { title: "AI Integration POC", user: "Sarah Jenkins", date: "In 2 days" }
            ],
            closed: [
                { title: "Security Audit Q3", user: "Harvey Specter", date: "Closed" }
            ]
        },
        lead: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200"
    }
];

const UnifiedWorkspaceMockup = () => {
    const [currentHubIndex, setCurrentHubIndex] = useState(0);
    const [direction, setDirection] = useState(0);
    const currentHub = hubs[currentHubIndex];

    const paginate = (newDirection: number) => {
        setDirection(newDirection);
        setCurrentHubIndex((prevIndex) => (prevIndex + newDirection + hubs.length) % hubs.length);
    };

    return (
        <div className="relative group/main">
            {/* Carousel Controls */}
            <button
                onClick={() => paginate(-1)}
                className="absolute left-[-80px] top-1/2 -translate-y-1/2 w-14 h-14 bg-white rounded-full shadow-xl flex items-center justify-center text-slate-400 hover:text-blue-600 hover:scale-110 transition-all z-50 border border-slate-100"
            >
                <ChevronLeft size={32} />
            </button>
            <button
                onClick={() => paginate(1)}
                className="absolute right-[-80px] top-1/2 -translate-y-1/2 w-14 h-14 bg-white rounded-full shadow-xl flex items-center justify-center text-slate-400 hover:text-blue-600 hover:scale-110 transition-all z-50 border border-slate-100"
            >
                <ChevronRight size={32} />
            </button>

            <motion.div
                key={currentHubIndex}
                initial={{ opacity: 0, x: direction * 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="w-full max-w-[1400px] mx-auto rounded-[32px] overflow-hidden shadow-[0_40px_120px_rgba(0,0,0,0.15)] border border-slate-200 bg-white relative"
            >
                <div className="flex h-[800px]">
                    {/* Sidebar */}
                    <div className="w-[280px] bg-[#1E293B] flex flex-col">
                        <div className="p-6 flex items-center gap-3">
                            <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white font-bold">D</div>
                            <span className="text-white font-black tracking-tight text-lg">DURKKAS CRM</span>
                        </div>

                        <nav className="px-3 space-y-1">
                            {[
                                { icon: LayoutDashboard, label: "Home" },
                                { icon: BarChart2, label: "Analytics" },
                                { icon: FileText, label: "Reports" },
                                { icon: Clock, label: "Requests" }
                            ].map((item, i) => (
                                <div key={i} className="flex items-center gap-3 p-3 text-slate-400 hover:text-white hover:bg-white/5 rounded-xl transition-all cursor-pointer">
                                    <item.icon size={20} />
                                    <span className="text-sm font-bold">{item.label}</span>
                                </div>
                            ))}
                        </nav>

                        <div className="mt-8 px-6">
                            <div className="flex items-center justify-between mb-4">
                                <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Team Hubs</span>
                                <Plus size={14} className="text-slate-500 cursor-pointer" />
                            </div>
                            <div className="space-y-2">
                                {currentHub.teams.map((team, i) => (
                                    <div key={i} className={`flex items-center justify-between p-2.5 rounded-xl transition-all ${team.active ? 'bg-blue-600/10 text-blue-400 border border-blue-600/20' : 'text-slate-400 hover:text-white hover:bg-white/5'}`}>
                                        <div className="flex items-center gap-3">
                                            <div className="w-8 h-8 rounded-lg flex items-center justify-center text-[10px] font-black" style={{ backgroundColor: team.color, color: 'white' }}>
                                                {team.icon}
                                            </div>
                                            <span className="text-sm font-bold">{team.name}</span>
                                        </div>
                                        {team.active && <CheckCircle2 size={14} />}
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="mt-auto p-6 border-t border-white/5">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full border-2 border-slate-500 overflow-hidden">
                                    <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Admin" alt="User" />
                                </div>
                                <div className="flex-grow overflow-hidden">
                                    <p className="text-white text-xs font-black truncate">DURKKAS Team</p>
                                    <p className="text-slate-500 text-[10px] font-bold truncate">Enterprise Managed</p>
                                </div>
                                <Settings className="text-slate-500 cursor-pointer hover:text-white" size={18} />
                            </div>
                        </div>
                    </div>

                    {/* Main Content */}
                    <div className="flex-1 bg-[#F8FAFC] flex flex-col">
                        {/* Inner Top Bar */}
                        <div className="h-20 bg-white border-b border-slate-100 flex items-center justify-between px-8">
                            <div className="flex items-center gap-8">
                                <h2 className="text-xl font-black text-slate-800 tracking-tight">{currentHub.heading}</h2>
                                <div className="flex items-center gap-2 bg-slate-50 p-1 rounded-xl">
                                    <button className="px-4 py-2 bg-white shadow-sm rounded-lg text-xs font-black text-blue-600">All Items</button>
                                    <button className="px-4 py-2 text-xs font-bold text-slate-400">My Queue</button>
                                </div>
                            </div>

                            <div className="flex items-center gap-4">
                                <div className="relative">
                                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
                                    <input type="text" placeholder={`Search ${currentHub.heading.toLowerCase()}...`} className="bg-slate-50 border-none rounded-xl py-2.5 pl-10 pr-4 text-xs font-medium w-64 focus:ring-2 focus:ring-blue-500/10" />
                                </div>
                                <button className="p-2.5 text-slate-400 hover:bg-slate-50 rounded-xl relative">
                                    <Bell size={20} />
                                    <span className="absolute top-2.5 right-2.5 w-2 h-2 bg-red-500 rounded-full border-2 border-white" />
                                </button>
                                <button className="flex items-center gap-2 px-6 py-2.5 bg-blue-600 text-white font-black rounded-xl shadow-lg shadow-blue-500/20 hover:bg-blue-700 transition-all">
                                    <span>Create New</span>
                                    <ChevronDown size={14} />
                                </button>
                            </div>
                        </div>

                        {/* Content Body */}
                        <div className="p-8 overflow-y-auto">
                            {currentHub.type === 'kanban' ? (
                                <div className="grid grid-cols-3 gap-8">
                                    {Object.entries(currentHub.data as any).map(([col, cards]: [string, any], idx) => (
                                        <div key={idx} className="space-y-6">
                                            <div className="flex items-center justify-between pb-4 border-b border-slate-200">
                                                <h3 className="text-xs font-black text-slate-400 uppercase tracking-widest flex items-center gap-2">
                                                    {col} <span className="bg-slate-100 text-slate-600 px-2 py-0.5 rounded-full text-[10px] font-black">{cards.length}</span>
                                                </h3>
                                                <MoreHorizontal className="text-slate-300" size={16} />
                                            </div>
                                            {cards.map((card: any, i: number) => (
                                                <div key={i} className="bg-white p-5 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-all cursor-pointer group">
                                                    <h4 className="text-sm font-black text-slate-800 mb-4 group-hover:text-blue-600 transition-colors">{card.title}</h4>
                                                    <div className="flex items-center justify-between">
                                                        <div className="flex items-center gap-2">
                                                            <div className="w-6 h-6 rounded-full bg-slate-100 overflow-hidden">
                                                                <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${card.user}`} alt="User" />
                                                            </div>
                                                            <span className="text-[10px] font-bold text-slate-500">{card.user}</span>
                                                        </div>
                                                        <div className="text-[10px] font-bold text-slate-400">{card.date}</div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    ))}
                                </div>
                            ) : (
                                <div className="space-y-4">
                                    <div className="flex items-center justify-between mb-6 bg-white p-4 rounded-2xl border border-slate-100 shadow-sm">
                                        <div className="flex gap-4">
                                            <div className="px-3 py-1.5 bg-blue-50 text-blue-600 rounded-lg text-xs font-black">Active (12)</div>
                                            <div className="px-3 py-1.5 text-slate-400 text-xs font-bold">Planned (4)</div>
                                            <div className="px-3 py-1.5 text-slate-400 text-xs font-bold">Ended (48)</div>
                                        </div>
                                        <TrendingUp size={20} className="text-slate-300" />
                                    </div>
                                    {(currentHub.data as any).map((item: any, i: number) => (
                                        <div key={i} className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex items-center justify-between hover:border-blue-200 transition-colors group cursor-pointer">
                                            <div className="flex items-center gap-6">
                                                <div className="w-3 h-3 rounded-full bg-blue-500" />
                                                <div>
                                                    <h4 className="text-sm font-black text-slate-800 mb-1">{item.title}</h4>
                                                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{item.type}</p>
                                                </div>
                                            </div>
                                            <div className="flex items-center gap-12">
                                                <div className="text-right">
                                                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest leading-none mb-1">Owner</p>
                                                    <p className="text-xs font-black text-slate-700">{item.user}</p>
                                                </div>
                                                <div className={`px-4 py-2 rounded-full text-[10px] font-black uppercase tracking-widest ${item.status === 'Completed' ? 'bg-emerald-50 text-emerald-600' : 'bg-blue-50 text-blue-600'}`}>
                                                    {item.status}
                                                </div>
                                                <MoreHorizontal className="text-slate-300 opacity-0 group-hover:opacity-100 transition-opacity" />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                {/* Floating Overlay Badge */}
                <motion.div
                    layoutId="badge"
                    className="absolute bottom-10 right-10 bg-blue-600 rounded-[32px] p-6 shadow-2xl flex items-center gap-6 group cursor-pointer border-4 border-white z-50 transition-all hover:scale-105"
                >
                    <div className="text-white">
                        <p className="text-[10px] font-black uppercase tracking-widest text-white/70">Team</p>
                        <h5 className="text-3xl font-black tracking-tighter">{currentHub.title}</h5>
                    </div>
                    <div className="w-20 h-20 rounded-full border-4 border-white/30 overflow-hidden shadow-inner group-hover:rotate-12 transition-transform">
                        <img src={currentHub.lead} alt="Team Lead" className="w-full h-full object-cover" />
                    </div>
                </motion.div>
            </motion.div>
        </div>
    );
};

export default UnifiedWorkspaceMockup;
