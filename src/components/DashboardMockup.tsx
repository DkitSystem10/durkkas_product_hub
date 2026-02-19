import React from 'react';
import {
    Search, LayoutGrid, Users, CreditCard, Users2,
    MessageSquare, Bell, ChevronDown, Play,
    TrendingUp, PieChart as PieIcon
} from 'lucide-react';

const DashboardMockup = () => {
    return (
        <div className="relative w-full max-w-[1100px] mx-auto mt-6 md:mt-10 perspective-1000 px-4 md:px-0">
            {/* Main Application Window */}
            <div className="bg-white rounded-[1.5rem] md:rounded-[2rem] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.15)] border border-gray-100 overflow-hidden flex flex-col md:flex-row h-auto md:h-[600px] animate-fade-in-up">

                {/* Sidebar - Hidden on mobile */}
                <div className="hidden md:flex w-[220px] border-r border-gray-50 p-5 flex-col gap-6 flex-shrink-0 bg-white">
                    <div className="flex items-center gap-2 px-1">
                        <div className="w-7 h-7 rounded-lg bg-primary flex items-center justify-center text-white font-bold text-sm">D</div>
                        <span className="font-bold text-lg tracking-tight text-[#172B4D]">DURKKAS</span>
                    </div>

                    <div className="relative">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={14} />
                        <input
                            type="text"
                            placeholder="Search..."
                            className="w-full bg-gray-50 border-none rounded-xl py-2 pl-9 pr-4 text-xs focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                            disabled
                        />
                    </div>

                    <nav className="flex flex-col gap-0.5">
                        {[
                            { icon: LayoutGrid, label: "Dashboard", active: true },
                            { icon: Users, label: "Students", count: "24" },
                            { icon: CreditCard, label: "Payments" },
                            { icon: Users2, label: "Team" },
                            { icon: MessageSquare, label: "Chat", count: "3" },
                            { icon: Bell, label: "Notifications" },
                        ].map((item, i) => (
                            <div
                                key={i}
                                className={`flex items-center justify-between p-2.5 rounded-xl cursor-default transition-all ${item.active ? 'bg-primary/5 text-primary' : 'text-gray-500 hover:bg-gray-50'}`}
                            >
                                <div className="flex items-center gap-3">
                                    <item.icon size={16} className={item.active ? 'text-primary' : 'text-gray-400'} />
                                    <span className="text-xs font-semibold">{item.label}</span>
                                </div>
                                {item.count && (
                                    <span className={`text-[9px] font-bold px-1.5 py-0.5 rounded-full ${item.active ? 'bg-primary text-white' : 'bg-gray-100 text-gray-500'}`}>
                                        {item.count}
                                    </span>
                                )}
                            </div>
                        ))}
                    </nav>

                    <div className="mt-auto p-3 bg-gray-50 rounded-2xl flex items-center gap-3">
                        <div className="w-9 h-9 rounded-full bg-blue-100 border-2 border-white overflow-hidden shadow-sm shrink-0">
                            <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix" alt="User" />
                        </div>
                        <div className="overflow-hidden">
                            <p className="text-[10px] font-bold text-[#172B4D] truncate">Master Admin</p>
                            <p className="text-[9px] text-gray-400 truncate">admin@durkkas.com</p>
                        </div>
                    </div>
                </div>

                {/* Main Content Area - Tightened */}
                <div className="flex-grow bg-[#F8FAFC] p-4 md:p-8 overflow-hidden relative">
                    <div className="flex justify-between items-center mb-6">
                        <div>
                            <p className="text-[8px] md:text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">Welcome back,</p>
                            <h2 className="text-xl md:text-2xl font-black text-[#172B4D] tracking-tighter">Enterprise Hub</h2>
                        </div>
                        <div className="flex gap-4">
                            <div className="flex -space-x-2">
                                {[1, 2, 3].map(i => (
                                    <div key={i} className="w-6 h-6 md:w-7 md:h-7 rounded-full border-2 border-white bg-gray-200 overflow-hidden shadow-sm hover:z-10 transition-all cursor-default">
                                        <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${i * 123}`} alt="User" />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-6">
                        {/* Next Activity Card */}
                        <div className="bg-white p-4 md:p-6 rounded-[1.2rem] md:rounded-[1.5rem] shadow-sm border border-gray-50 relative overflow-hidden group">
                            <div className="absolute top-0 right-0 p-3">
                                <span className="bg-primary/10 text-primary text-[7px] md:text-[8px] font-black px-2 py-0.5 rounded-full uppercase tracking-wider">In Progress</span>
                            </div>
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-8 h-8 md:w-10 md:h-10 rounded-xl bg-primary/5 flex items-center justify-center text-primary">
                                    <Play size={14} fill="currentColor" />
                                </div>
                                <div>
                                    <p className="text-[8px] md:text-[9px] font-bold text-gray-400 uppercase">Current Session</p>
                                    <h4 className="text-xs md:text-sm font-bold text-[#172B4D]">Strategic CRM Review</h4>
                                </div>
                            </div>
                            <div className="flex items-center justify-between pt-4 border-t border-gray-50">
                                <div className="flex items-center gap-2 text-gray-500 font-semibold text-xs">
                                    <Bell size={12} />
                                    <span>2:30 PM - 4:00 PM</span>
                                </div>
                                <button className="text-primary text-xs font-bold hover:underline">
                                    Join Now
                                </button>
                            </div>
                        </div>

                        {/* Quick Stats Card */}
                        <div className="bg-white p-6 rounded-[1.5rem] shadow-sm border border-gray-50">
                            <div className="flex items-center justify-between mb-4">
                                <h4 className="text-sm font-bold text-[#172B4D] flex items-center gap-2">
                                    <TrendingUp size={16} className="text-emerald-500" />
                                    Performance
                                </h4>
                                <span className="text-[9px] font-bold text-emerald-500 bg-emerald-50 px-1.5 py-0.5 rounded-full">+12.4%</span>
                            </div>
                            <div className="flex items-end gap-1 h-14">
                                {[35, 65, 45, 85, 55, 95, 75, 55, 65, 80].map((h, i) => (
                                    <div
                                        key={i}
                                        className="flex-grow bg-primary/10 rounded-t-sm transition-all duration-1000 group-hover:bg-primary/20"
                                        style={{ height: `${h}%` }}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Revenue Section */}
                    <div className="bg-white p-6 rounded-[1.5rem] shadow-sm border border-gray-50 h-32">
                        <div className="flex justify-between items-center mb-4">
                            <h4 className="text-sm font-bold text-[#172B4D]">Branch Revenue History</h4>
                        </div>
                        <div className="relative h-16 flex items-end">
                            <svg className="w-full h-full" viewBox="0 0 400 100" preserveAspectRatio="none">
                                <path
                                    d="M0,80 Q50,40 100,70 T200,30 T300,50 T400,20"
                                    fill="none"
                                    stroke="url(#gradient)"
                                    strokeWidth="4"
                                    strokeLinecap="round"
                                />
                                <defs>
                                    <linearGradient id="gradient" x1="0" y1="0" x2="1" y2="0">
                                        <stop offset="0%" stopColor="#2563EB" />
                                        <stop offset="100%" stopColor="#A855F7" />
                                    </linearGradient>
                                </defs>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>

            {/* Floating Mobile Analytics - Tightened */}
            <div className="absolute top-[10%] right-[-60px] w-[280px] bg-[#111827] rounded-[2.5rem] p-3 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] border-4 border-[#2D3344] hidden xl:block animate-float origin-bottom-right">
                <div className="bg-white rounded-[2rem] h-[480px] p-5 flex flex-col gap-6">
                    <div className="flex justify-between items-center">
                        <div className="w-7 h-7 rounded-lg bg-gray-50 flex items-center justify-center text-[#172B4D]">
                            <LayoutGrid size={14} />
                        </div>
                        <h4 className="font-black text-[#172B4D] text-md tracking-tighter">Analytics</h4>
                        <div className="w-7 h-7 rounded-full overflow-hidden border border-gray-100">
                            <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix" alt="User" />
                        </div>
                    </div>

                    <div className="bg-gray-50 rounded-2xl p-5">
                        <div className="flex justify-between items-center mb-4">
                            <p className="text-[8px] font-black text-gray-400 uppercase tracking-widest leading-none">Market Share</p>
                        </div>

                        <div className="relative w-32 h-32 mx-auto flex items-center justify-center">
                            <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
                                <circle className="text-primary/10" strokeWidth="12" stroke="currentColor" fill="transparent" r="40" cx="50" cy="50" />
                                <circle className="text-primary" strokeWidth="12" strokeDasharray="251.2" strokeDashoffset="62.8" strokeLinecap="round" stroke="currentColor" fill="transparent" r="40" cx="50" cy="50" />
                            </svg>
                            <div className="absolute flex flex-col items-center">
                                <span className="text-xl font-black text-[#172B4D] tracking-tighter">75%</span>
                                <span className="text-[8px] font-bold text-gray-400 uppercase tracking-widest">Growth</span>
                            </div>
                        </div>
                    </div>

                    <div className="mt-auto">
                        <div className="flex justify-between items-end mb-3">
                            <div>
                                <p className="text-[8px] font-black text-gray-400 uppercase tracking-widest">Valuation</p>
                                <h4 className="text-2xl font-black text-[#172B4D] tracking-tighter">$2.4M</h4>
                            </div>
                        </div>
                        <div className="w-full h-1 bg-gray-100 rounded-full overflow-hidden">
                            <div className="w-3/4 h-full bg-primary" />
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
                @keyframes float {
                    0%, 100% { transform: translateY(0) rotate(0deg); }
                    50% { transform: translateY(-15px) rotate(1deg); }
                }
                .perspective-1000 {
                    perspective: 1500px;
                }
                .animate-float {
                    animation: float 6s ease-in-out infinite;
                }
            `}</style>
        </div>
    );
};

export default DashboardMockup;
