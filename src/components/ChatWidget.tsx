"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send, Bot, User, ChevronRight } from 'lucide-react';

const ChatWidget = ({ isOpenInitially = false }: { isOpenInitially?: boolean }) => {
    const [isOpen, setIsOpen] = useState(isOpenInitially);
    const [message, setMessage] = useState('');
    const [chatHistory, setChatHistory] = useState([
        { role: 'bot', text: 'Hello! Welcome to DURKKAS Innovations. I am your product assistant. Ask me anything about our CRM, HRMS, or EMS modules!' }
    ]);

    const knowledgeBase: { keywords: string[], answer: string }[] = [
        {
            keywords: ['access', 'get started', 'login', 'account', 'sign up'],
            answer: "To access any DURKKAS app, you need a Tenant ID and verified credentials. You can get started by clicking 'Access Your Apps' on the homepage or emailing enquiry@durkkas.com for a trial instance."
        },
        {
            keywords: ['crm', 'sales', 'leads', 'pipeline'],
            answer: "DURKKAS CRM helps you manage leads and sales. You can access it via the 'Sales' tab in your dashboard once your organization is onboarded. It includes automated follow-ups and real-time pipeline tracking."
        },
        {
            keywords: ['hrms', 'payroll', 'attendance', 'salary', 'statutory'],
            answer: "Our HRMS engine handles everything from Biometric Attendance to Payroll processing and Statutory compliance (PF/ESI). Admins can configure these in the 'Finance' and 'HR' modules of the platform."
        },
        {
            keywords: ['ems', 'education', 'school', 'college', 'student', 'dashboard'],
            answer: "EMS is our Academic Engine. It provides custom dashboards for Students, Tutors, and Branch Admins. You can deploy courses globally and track student performance in real-time."
        },
        {
            keywords: ['price', 'cost', 'subscription', 'plan', 'free'],
            answer: "DURKKAS offers modular pricing. You only pay for the engines you use (CRM, HRMS, or EMS). For a detailed quote based on your organization size, please connect with our sales team at pricing@durkkas.com."
        },
        {
            keywords: ['how', 'use', 'tutorial', 'help', 'guide'],
            answer: "We provide dedicated training for your team during onboarding. You can also access our 'Documentation' and 'Academy' sections under the Resources menu for step-by-step guides."
        }
    ];

    const getBotResponse = (userText: string) => {
        const lowerText = userText.toLowerCase();

        // Find matching answer based on keywords
        const match = knowledgeBase.find(item =>
            item.keywords.some(keyword => lowerText.includes(keyword))
        );

        if (match) return match.answer;

        return "I'm not quite sure about that specific detail. Let me connect you with a specialist! You can also try searching for keywords like 'Access', 'CRM', 'HRMS', or 'Pricing'.";
    };

    React.useEffect(() => {
        const handleOpenChat = () => setIsOpen(true);
        window.addEventListener('open-durkkas-chat', handleOpenChat);
        return () => window.removeEventListener('open-durkkas-chat', handleOpenChat);
    }, []);

    const suggestions = [
        "What is DURKKAS CRM?",
        "How to request a demo?",
        "Pricing for Enterprise",
        "Technical Support"
    ];

    const toggleChat = () => setIsOpen(!isOpen);

    const handleSendMessage = (e?: React.FormEvent) => {
        e?.preventDefault();
        const userInput = message.trim();
        if (!userInput) return;

        // Add user message
        const userMsg = { role: 'user', text: userInput };
        setChatHistory(prev => [...prev, userMsg]);
        setMessage('');

        // Get and Add Bot Response
        setTimeout(() => {
            const botText = getBotResponse(userInput);
            setChatHistory(prev => [...prev, { role: 'bot', text: botText }]);
        }, 800); // 800ms delay for natural feel
    };

    return (
        <>
            {/* Floating Action Button */}
            <motion.button
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={toggleChat}
                className="fixed bottom-8 right-8 w-16 h-16 bg-[#0052CC] text-white rounded-full shadow-2xl flex items-center justify-center z-[100] cursor-pointer hover:bg-blue-700 transition-colors"
            >
                {isOpen ? <X size={28} /> : <MessageCircle size={28} />}
            </motion.button>

            {/* Chat Panel */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 100, scale: 0.9, x: 20 }}
                        animate={{ opacity: 1, y: 0, scale: 1, x: 0 }}
                        exit={{ opacity: 0, y: 100, scale: 0.9, x: 20 }}
                        className="fixed bottom-28 right-8 w-[380px] h-[600px] bg-white rounded-[2.5rem] shadow-[0_20px_60px_rgba(0,0,0,0.15)] border border-slate-100 flex flex-col overflow-hidden z-[100]"
                    >
                        {/* Header */}
                        <div className="bg-[#0052CC] p-8 text-white relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2" />
                            <div className="flex items-center gap-4 relative z-10">
                                <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-md">
                                    <Bot size={24} />
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg">DURKKAS Support</h3>
                                    <p className="text-white/70 text-sm flex items-center gap-1.5">
                                        <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                                        Always active
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Messages Body */}
                        <div className="flex-grow overflow-y-auto p-6 space-y-4 bg-slate-50/50">
                            {chatHistory.map((chat, i) => (
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    key={i}
                                    className={`flex ${chat.role === 'user' ? 'justify-end' : 'justify-start'}`}
                                >
                                    <div className={`max-w-[80%] p-4 rounded-2xl text-[15px] leading-relaxed shadow-sm ${chat.role === 'user'
                                        ? 'bg-[#0052CC] text-white rounded-tr-none'
                                        : 'bg-white text-slate-700 rounded-tl-none border border-slate-100'
                                        }`}>
                                        {chat.text}
                                    </div>
                                </motion.div>
                            ))}

                            {/* Suggestions */}
                            {chatHistory.length === 1 && (
                                <div className="pt-4 space-y-2">
                                    {suggestions.map((s, i) => (
                                        <button
                                            key={i}
                                            onClick={() => {
                                                setMessage(s);
                                                // Trigger handleSendMessage after setting state - simplified for demo
                                            }}
                                            className="w-full text-left p-3 text-sm font-semibold text-slate-500 bg-white border border-slate-100 rounded-xl hover:border-blue-200 hover:text-[#0052CC] transition-all flex items-center justify-between group"
                                        >
                                            {s}
                                            <ChevronRight size={14} className="opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0" />
                                        </button>
                                    ))}
                                </div>
                            )}
                        </div>

                        {/* Input Area */}
                        <form onSubmit={handleSendMessage} className="p-6 bg-white border-t border-slate-100">
                            <div className="relative">
                                <input
                                    type="text"
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                    placeholder="Type your message..."
                                    className="w-full bg-slate-100 border-none rounded-2xl py-4 pl-6 pr-14 text-sm focus:ring-2 focus:ring-blue-100 outline-none transition-all"
                                />
                                <button
                                    type="submit"
                                    className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-[#0052CC] text-white rounded-xl flex items-center justify-center hover:bg-blue-700 transition-colors shadow-lg"
                                >
                                    <Send size={18} />
                                </button>
                            </div>
                        </form>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default ChatWidget;
