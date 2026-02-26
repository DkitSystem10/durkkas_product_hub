"use client";

import React from 'react';
import {
    Bell,
    Calendar,
    Settings,
    MessageCircle,
    Plus
} from 'lucide-react';

const TopBar = ({ title }: { title: string }) => {
    return (
        <header className="h-20 bg-white border-b border-slate-100 flex items-center justify-between px-8 fixed top-0 right-0 left-64 z-30">
            <div>
                <h1 className="text-2xl font-black text-slate-800 tracking-tighter">{title}</h1>
                <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest leading-none">System Operational</span>
                </div>
            </div>

            <div className="flex items-center gap-6">
                <div className="flex items-center gap-2 p-1.5 bg-slate-50 rounded-xl border border-slate-100">
                    <button className="p-2 text-slate-400 hover:bg-white hover:text-blue-600 hover:shadow-sm rounded-lg transition-all">
                        <Calendar size={20} />
                    </button>
                    <button className="p-2 text-slate-400 hover:bg-white hover:text-blue-600 hover:shadow-sm rounded-lg transition-all relative">
                        <MessageCircle size={20} />
                        <span className="absolute top-2 right-2 w-2 h-2 bg-blue-600 rounded-full border-2 border-white" />
                    </button>
                    <button className="p-2 text-slate-400 hover:bg-white hover:text-blue-600 hover:shadow-sm rounded-lg transition-all relative">
                        <Bell size={20} />
                        <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white" />
                    </button>
                </div>

                <div className="h-8 w-px bg-slate-100" />

                <button className="flex items-center gap-3 px-6 py-3 bg-blue-600 text-white font-black rounded-xl shadow-lg shadow-blue-500/20 hover:bg-blue-700 transition-all hover:scale-105 active:scale-95 group">
                    <Plus size={18} className="group-hover:rotate-90 transition-transform" />
                    <span>New Lead</span>
                </button>
            </div>
        </header>
    );
};

export default TopBar;
