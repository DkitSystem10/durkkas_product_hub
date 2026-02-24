"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    X, User, Mail, Phone, Building2, Users, BarChart3,
    CheckCircle2, ArrowRight, Star, TrendingUp, Shield, Zap
} from 'lucide-react';

// ─── Types ────────────────────────────────────────────────────────────────────
interface DemoRequestModalProps {
    isOpen: boolean;
    onClose: () => void;
}

// ─── Left-panel stats ─────────────────────────────────────────────────────────
const STATS = [
    { icon: TrendingUp, value: '3.2×', label: 'Avg revenue growth in Year 1' },
    { icon: BarChart3, value: '1,000+', label: 'Live CRM lead nodes managed' },
    { icon: Users, value: '50+', label: 'Industries served across India' },
];

const TESTIMONIAL = {
    text: '"DURKKAS transformed how our sales team works — pipeline visibility, AI scoring, and GST invoicing all in one place. Our close rate jumped 40% in 90 days."',
    name: 'Karthik Subramaniam',
    role: 'Director of Sales, TechNova Solutions',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Karthik',
};

const TEAM_SIZES = ['1–10', '11–50', '51–200', '201–500', '500+'];
const CURRENT_CRMS = ['Excel / Google Sheets', 'Zoho CRM', 'Salesforce', 'HubSpot', 'Custom / In-house', 'No CRM yet'];
const SOURCES = ['Google Search', 'LinkedIn', 'Colleague Referral', 'Social Media', 'Event / Webinar', 'Other'];

// ─── Component ────────────────────────────────────────────────────────────────
const DemoRequestModal = ({ isOpen, onClose }: DemoRequestModalProps) => {
    const [form, setForm] = useState({
        name: '', email: '', phone: '', company: '',
        teamSize: '', currentCrm: '', source: '', requirements: '',
        consent: false,
    });
    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState<Record<string, string>>({});

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value, type } = e.target;
        setForm(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value,
        }));
        if (errors[name]) setErrors(prev => { const n = { ...prev }; delete n[name]; return n; });
    };

    const validate = () => {
        const e: Record<string, string> = {};
        if (!form.name.trim()) e.name = 'Full name is required';
        if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Valid email required';
        if (!form.phone.trim() || !/^\+?[\d\s\-()]{8,15}$/.test(form.phone)) e.phone = 'Valid phone number required';
        if (!form.company.trim()) e.company = 'Company name is required';
        if (!form.teamSize) e.teamSize = 'Please select team size';
        if (!form.consent) e.consent = 'Please accept the privacy policy';
        return e;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const errs = validate();
        if (Object.keys(errs).length) { setErrors(errs); return; }
        setLoading(true);
        await new Promise(r => setTimeout(r, 1800));
        setLoading(false);
        setSubmitted(true);
    };

    const handleClose = () => {
        onClose();
        setTimeout(() => { setSubmitted(false); setForm({ name: '', email: '', phone: '', company: '', teamSize: '', currentCrm: '', source: '', requirements: '', consent: false }); setErrors({}); }, 400);
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        key="backdrop"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={handleClose}
                        className="fixed inset-0 z-[400] bg-black/60 backdrop-blur-sm"
                    />

                    {/* Modal */}
                    <motion.div
                        key="modal"
                        initial={{ opacity: 0, scale: 0.94, y: 30 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.94, y: 30 }}
                        transition={{ type: 'spring', stiffness: 300, damping: 28 }}
                        className="fixed inset-0 z-[401] flex items-center justify-center p-4 sm:p-6 pointer-events-none"
                    >
                        <div
                            className="pointer-events-auto w-full max-w-[920px] max-h-[95vh] bg-white rounded-3xl overflow-hidden shadow-[0_40px_120px_rgba(0,0,0,0.3)] flex flex-col lg:flex-row"
                            onClick={e => e.stopPropagation()}
                        >
                            {/* ══ LEFT PANEL ════════════════════════════════ */}
                            <div className="hidden lg:flex flex-col justify-between bg-gradient-to-br from-[#001A4D] via-[#002B5B] to-[#0040A0] text-white p-10 w-[360px] flex-shrink-0 relative overflow-hidden">

                                {/* Glow */}
                                <div className="absolute -top-20 -left-20 w-80 h-80 bg-blue-500/20 rounded-full blur-[80px] pointer-events-none" />
                                <div className="absolute bottom-0 right-0 w-60 h-60 bg-indigo-600/20 rounded-full blur-[60px] pointer-events-none" />

                                <div className="relative z-10">
                                    {/* Badge */}
                                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-blue-500/20 border border-blue-400/30 rounded-full text-[11px] font-bold uppercase tracking-widest text-blue-200 mb-8">
                                        <Zap size={10} fill="currentColor" /> DURKKAS CRM
                                    </span>

                                    <h2 className="font-[family-name:var(--font-outfit)] font-black text-[28px] leading-tight mb-3 tracking-tight">
                                        Get expert help to <span className="text-blue-300">transform your sales engine</span>
                                    </h2>
                                    <p className="text-blue-200/70 text-[13px] font-medium leading-relaxed mb-10">
                                        Our CRM specialists will walk you through a live demo tailored to your industry, team size, and growth goals.
                                    </p>

                                    {/* Stats */}
                                    <div className="space-y-5 mb-10">
                                        {STATS.map((s, i) => (
                                            <div key={i} className="flex items-center gap-4">
                                                <div className="w-11 h-11 bg-blue-500/20 border border-blue-400/20 rounded-2xl flex items-center justify-center flex-shrink-0">
                                                    <s.icon size={20} className="text-blue-300" />
                                                </div>
                                                <div>
                                                    <p className="font-[family-name:var(--font-outfit)] font-black text-white text-[18px] leading-none">{s.value}</p>
                                                    <p className="text-blue-300/70 text-[11px] font-medium mt-0.5">{s.label}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Testimonial */}
                                <div className="relative z-10 bg-white/5 border border-white/10 rounded-2xl p-5">
                                    <div className="flex gap-1 mb-3">
                                        {[...Array(5)].map((_, i) => <Star key={i} size={12} className="text-yellow-400" fill="#FACC15" />)}
                                    </div>
                                    <p className="text-blue-100 text-[12px] font-medium leading-relaxed mb-4 italic">{TESTIMONIAL.text}</p>
                                    <div className="flex items-center gap-3">
                                        <img src={TESTIMONIAL.avatar} alt={TESTIMONIAL.name} className="w-9 h-9 rounded-full bg-blue-800" />
                                        <div>
                                            <p className="font-bold text-white text-[12px]">{TESTIMONIAL.name}</p>
                                            <p className="text-blue-400 text-[10px] font-medium">{TESTIMONIAL.role}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* ══ RIGHT PANEL (FORM) ═══════════════════════ */}
                            <div className="flex-1 flex flex-col overflow-hidden">

                                {/* Header */}
                                <div className="flex items-center justify-between px-6 sm:px-8 py-5 border-b border-slate-100 flex-shrink-0">
                                    <div>
                                        <h3 className="font-[family-name:var(--font-outfit)] font-black text-slate-900 text-[20px] sm:text-[22px] leading-tight">
                                            Request a Demo
                                        </h3>
                                        <p className="text-slate-400 text-[12px] font-medium mt-0.5">
                                            We'll set up a personalised 30-min CRM walkthrough for your team
                                        </p>
                                    </div>
                                    <button
                                        onClick={handleClose}
                                        className="w-9 h-9 flex items-center justify-center rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-all flex-shrink-0"
                                        aria-label="Close"
                                    >
                                        <X size={20} />
                                    </button>
                                </div>

                                {/* Body */}
                                <div className="flex-1 overflow-y-auto px-6 sm:px-8 py-6">
                                    <AnimatePresence mode="wait">
                                        {submitted ? (
                                            /* ── Success State ── */
                                            <motion.div
                                                key="success"
                                                initial={{ opacity: 0, scale: 0.9 }}
                                                animate={{ opacity: 1, scale: 1 }}
                                                className="flex flex-col items-center justify-center min-h-[360px] text-center"
                                            >
                                                <motion.div
                                                    initial={{ scale: 0 }}
                                                    animate={{ scale: 1 }}
                                                    transition={{ type: 'spring', stiffness: 260, damping: 18, delay: 0.1 }}
                                                    className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mb-6"
                                                >
                                                    <CheckCircle2 size={44} className="text-green-500" />
                                                </motion.div>
                                                <h4 className="font-[family-name:var(--font-outfit)] font-black text-slate-800 text-[24px] mb-3">
                                                    Demo Request Confirmed! 🎉
                                                </h4>
                                                <p className="text-slate-500 text-[14px] leading-relaxed max-w-sm mb-8">
                                                    Our CRM specialist will reach out to <strong className="text-slate-700">{form.email}</strong> within <strong className="text-slate-700">2 business hours</strong> to schedule your personalised demo.
                                                </p>
                                                <div className="flex flex-col sm:flex-row gap-3 w-full max-w-[320px]">
                                                    <button
                                                        onClick={handleClose}
                                                        className="flex-1 py-3 bg-[#0061FE] text-white rounded-xl font-bold text-[14px] hover:bg-blue-700 transition-colors"
                                                    >
                                                        Done
                                                    </button>
                                                    <a
                                                        href="/crm"
                                                        className="flex-1 py-3 bg-slate-100 text-slate-700 rounded-xl font-bold text-[14px] hover:bg-slate-200 transition-colors text-center"
                                                    >
                                                        Explore CRM
                                                    </a>
                                                </div>
                                            </motion.div>
                                        ) : (
                                            /* ── Form ── */
                                            <motion.form
                                                key="form"
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                onSubmit={handleSubmit}
                                                className="space-y-4"
                                                noValidate
                                            >
                                                {/* Row 1: Name + Email */}
                                                <div className="grid sm:grid-cols-2 gap-4">
                                                    <Field label="Your Full Name *" error={errors.name}>
                                                        <FieldInput icon={<User size={15} />} name="name" placeholder="Karthik Subramaniam" value={form.name} onChange={handleChange} hasError={!!errors.name} />
                                                    </Field>
                                                    <Field label="Work Email *" error={errors.email}>
                                                        <FieldInput icon={<Mail size={15} />} name="email" type="email" placeholder="karthik@company.com" value={form.email} onChange={handleChange} hasError={!!errors.email} />
                                                    </Field>
                                                </div>

                                                {/* Row 2: Phone + Company */}
                                                <div className="grid sm:grid-cols-2 gap-4">
                                                    <Field label="Phone Number *" error={errors.phone}>
                                                        <FieldInput icon={<Phone size={15} />} name="phone" placeholder="+91 98765 43210" value={form.phone} onChange={handleChange} hasError={!!errors.phone} />
                                                    </Field>
                                                    <Field label="Company Name *" error={errors.company}>
                                                        <FieldInput icon={<Building2 size={15} />} name="company" placeholder="TechNova Solutions" value={form.company} onChange={handleChange} hasError={!!errors.company} />
                                                    </Field>
                                                </div>

                                                {/* Row 3: Team Size + Current CRM */}
                                                <div className="grid sm:grid-cols-2 gap-4">
                                                    <Field label="Sales Team Size *" error={errors.teamSize}>
                                                        <FieldSelect name="teamSize" value={form.teamSize} onChange={handleChange} hasError={!!errors.teamSize} options={TEAM_SIZES} placeholder="— Select size —" icon={<Users size={15} />} />
                                                    </Field>
                                                    <Field label="Current CRM / Tool">
                                                        <FieldSelect name="currentCrm" value={form.currentCrm} onChange={handleChange} hasError={false} options={CURRENT_CRMS} placeholder="— Select current tool —" icon={<BarChart3 size={15} />} />
                                                    </Field>
                                                </div>

                                                {/* How did you hear */}
                                                <Field label="How did you hear about DURKKAS CRM?">
                                                    <FieldSelect name="source" value={form.source} onChange={handleChange} hasError={false} options={SOURCES} placeholder="— Select source —" icon={<Zap size={15} />} />
                                                </Field>

                                                {/* Requirements */}
                                                <Field label="What are your key CRM requirements?">
                                                    <textarea
                                                        name="requirements"
                                                        value={form.requirements}
                                                        onChange={handleChange}
                                                        rows={3}
                                                        placeholder="E.g. Lead scoring, WhatsApp automation, GST invoicing, migration from Zoho..."
                                                        className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-[13.5px] font-medium text-slate-800 placeholder:text-slate-400 outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100 resize-none transition-all font-[family-name:var(--font-inter)]"
                                                    />
                                                </Field>

                                                {/* Consent */}
                                                <div className="flex items-start gap-3">
                                                    <input
                                                        type="checkbox"
                                                        name="consent"
                                                        id="consent"
                                                        checked={form.consent}
                                                        onChange={handleChange}
                                                        className="mt-1 w-4 h-4 rounded border-slate-300 text-blue-600 cursor-pointer accent-blue-600"
                                                    />
                                                    <label htmlFor="consent" className={`text-[12px] leading-relaxed cursor-pointer ${errors.consent ? 'text-red-500' : 'text-slate-500'}`}>
                                                        By submitting this form, I agree to DURKKAS's{' '}
                                                        <a href="/privacy" className="text-blue-600 hover:underline font-semibold">Privacy Policy</a>
                                                        {' '}and consent to being contacted about CRM products and services.
                                                        {errors.consent && <span className="block text-red-500 mt-0.5 font-medium">{errors.consent}</span>}
                                                    </label>
                                                </div>

                                                {/* Submit */}
                                                <motion.button
                                                    type="submit"
                                                    disabled={loading}
                                                    whileTap={{ scale: 0.98 }}
                                                    className="w-full py-4 bg-[#0061FE] text-white rounded-xl font-[family-name:var(--font-outfit)] font-black text-[15px] hover:bg-blue-700 disabled:opacity-70 transition-all shadow-lg shadow-blue-500/25 flex items-center justify-center gap-2 mt-2"
                                                >
                                                    {loading ? (
                                                        <>
                                                            <motion.div
                                                                animate={{ rotate: 360 }}
                                                                transition={{ duration: 0.8, repeat: Infinity, ease: 'linear' }}
                                                                className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                                                            />
                                                            Submitting...
                                                        </>
                                                    ) : (
                                                        <>
                                                            Book My Free CRM Demo
                                                            <ArrowRight size={18} />
                                                        </>
                                                    )}
                                                </motion.button>

                                                <p className="text-center text-[11px] text-slate-400 flex items-center justify-center gap-1.5 pb-2">
                                                    <Shield size={11} className="text-slate-300" />
                                                    Your information is 100% secure and never shared. India-hosted, SOC 2 certified.
                                                </p>
                                            </motion.form>
                                        )}
                                    </AnimatePresence>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};

// ─── Field wrapper ────────────────────────────────────────────────────────────
const Field = ({ label, error, children }: { label: string; error?: string; children: React.ReactNode }) => (
    <div className="flex flex-col gap-1.5">
        <label className="text-[12px] font-bold text-slate-600 uppercase tracking-wide">{label}</label>
        {children}
        {error && <p className="text-red-500 text-[11px] font-medium">{error}</p>}
    </div>
);

// ─── Text input ───────────────────────────────────────────────────────────────
const FieldInput = ({
    icon, name, type = 'text', placeholder, value, onChange, hasError
}: {
    icon: React.ReactNode; name: string; type?: string;
    placeholder: string; value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void; hasError: boolean;
}) => (
    <div className={`flex items-center gap-3 px-4 py-3 bg-slate-50 border rounded-xl transition-all focus-within:ring-2 focus-within:ring-blue-100 ${hasError ? 'border-red-400 focus-within:border-red-400' : 'border-slate-200 focus-within:border-blue-400'}`}>
        <span className="text-slate-400 flex-shrink-0">{icon}</span>
        <input
            type={type}
            name={name}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            className="flex-grow bg-transparent text-[13.5px] font-medium text-slate-800 placeholder:text-slate-400 outline-none font-[family-name:var(--font-inter)]"
        />
    </div>
);

// ─── Select input ─────────────────────────────────────────────────────────────
const FieldSelect = ({
    name, value, onChange, options, placeholder, icon, hasError
}: {
    name: string; value: string; onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
    options: string[]; placeholder: string; icon: React.ReactNode; hasError: boolean;
}) => (
    <div className={`flex items-center gap-3 px-4 py-3 bg-slate-50 border rounded-xl transition-all focus-within:ring-2 focus-within:ring-blue-100 ${hasError ? 'border-red-400' : 'border-slate-200 focus-within:border-blue-400'}`}>
        <span className="text-slate-400 flex-shrink-0">{icon}</span>
        <select
            name={name}
            value={value}
            onChange={onChange}
            className="flex-grow bg-transparent text-[13.5px] font-medium text-slate-800 outline-none appearance-none cursor-pointer font-[family-name:var(--font-inter)]"
        >
            <option value="" disabled>{placeholder}</option>
            {options.map(o => <option key={o} value={o}>{o}</option>)}
        </select>
    </div>
);

export default DemoRequestModal;
