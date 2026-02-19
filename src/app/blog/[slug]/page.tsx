"use client";

import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, User, Clock, Share2, Facebook, Twitter, Linkedin } from 'lucide-react';
import Link from 'next/link';

const BlogPostPage = ({ params }: { params: Promise<{ slug: string }> }) => {
    const { slug } = React.use(params);

    // Simulate fetching post data based on slug (or just show generic content for now)
    const post = {
        title: "Why Multi-Tenancy is the Future of Enterprise EdTech",
        date: "Feb 14, 2025",
        readTime: "5 min read",
        author: "Engineering Team",
        category: "Architecture",
        content: (
            <>
                <p className="mb-6">
                    In the rapidly evolving landscape of educational technology, institutions are facing a critical challenge:
                    how to scale operations across multiple campuses without drowning in administrative complexity. The answer lies in
                    <strong> Multi-Tenant Architecture</strong>.
                </p>

                <h3 className="text-2xl font-bold text-[#0f172a] mb-4 mt-8">The Single-Tenant Trap</h3>
                <p className="mb-6">
                    Traditionally, EdTech solutions were built as single-tenant applications. Each school or branch got its own
                    installation, database, and server instance. While this offers isolation, it creates a maintenance nightmare.
                    Updating software across 50 branches meant 50 separate deployments.
                </p>

                <h3 className="text-2xl font-bold text-[#0f172a] mb-4 mt-8">Enter Multi-Tenancy</h3>
                <p className="mb-6">
                    Our platform utilizes a robust multi-tenant architecture where a single instance of the software serves multiple
                    tenants (schools/branches). Crucially, each tenant's data is isolated and invisible to others, ensuring
                    bank-grade security and privacy.
                </p>

                <blockquote className="border-l-4 border-blue-500 pl-6 py-2 my-8 italic text-slate-700 bg-blue-50 rounded-r-lg">
                    "Scalability isn't just about handling more users; it's about handling complexity with elegance.
                    Multi-tenancy allows us to push updates instantly to thousands of institutions."
                </blockquote>

                <h3 className="text-2xl font-bold text-[#0f172a] mb-4 mt-8">Key Benefits</h3>
                <ul className="list-disc pl-6 space-y-3 mb-8">
                    <li><strong>Instant Updates:</strong> Features are deployed once and available everywhere.</li>
                    <li><strong>Cost Efficiency:</strong> Shared infrastructure reduces hosting costs significantly.</li>
                    <li><strong>Unified Analytics:</strong> aggregating data across branches becomes trivial.</li>
                </ul>

                <p className="mb-6">
                    As we move forward, the demand for connected, scalable, and secure educational ecosystems will only grow.
                    Our platform is built to meet that demand head-on.
                </p>
            </>
        )
    };

    return (
        <main className="font-outfit bg-white min-h-screen">
            <Navbar />

            {/* Reading Progress Bar (Simulated) */}
            <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 1.5, ease: "circOut" }}
                className="fixed top-0 left-0 h-1 bg-blue-600 z-[110] origin-left"
            />

            <article className="pt-32 pb-20">
                <div className="container mx-auto px-6 max-w-4xl">

                    {/* Breadcrumb / Back */}
                    <Link href="/blog" className="inline-flex items-center gap-2 text-slate-500 hover:text-blue-600 font-medium mb-8 transition-colors">
                        <ArrowLeft size={18} />
                        Back to Blog
                    </Link>

                    {/* Header */}
                    <div className="mb-10 text-center">
                        <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-bold mb-4 uppercase tracking-wide">
                            {post.category}
                        </span>
                        <h1 className="text-3xl md:text-5xl font-bold text-[#0f172a] mb-6 leading-tight">
                            {post.title}
                        </h1>

                        <div className="flex items-center justify-center gap-6 text-sm text-slate-500 font-medium">
                            <div className="flex items-center gap-2">
                                <User size={16} className="text-blue-500" />
                                {post.author}
                            </div>
                            <div className="flex items-center gap-2">
                                <Calendar size={16} className="text-blue-500" />
                                {post.date}
                            </div>
                            <div className="flex items-center gap-2">
                                <Clock size={16} className="text-blue-500" />
                                {post.readTime}
                            </div>
                        </div>
                    </div>

                    {/* Featured Image */}
                    <div className="w-full h-[400px] bg-gradient-to-br from-blue-600 to-indigo-800 rounded-2xl mb-12 shadow-xl flex items-center justify-center relative overflow-hidden">
                        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-20"></div>
                        <span className="text-white/20 text-9xl font-bold select-none">Blog</span>
                    </div>

                    {/* Content Body */}
                    <div className="prose prose-lg prose-slate mx-auto text-slate-600 leading-relaxed">
                        {post.content}
                    </div>

                    {/* Share & Footer */}
                    <div className="mt-16 pt-8 border-t border-slate-100 flex flex-col md:flex-row items-center justify-between gap-6">
                        <div className="flex items-center gap-4">
                            <span className="text-slate-900 font-bold">Share this article:</span>
                            <div className="flex gap-2">
                                <button className="p-2 rounded-full bg-slate-100 hover:bg-blue-100 hover:text-blue-600 transition-colors">
                                    <Twitter size={18} />
                                </button>
                                <button className="p-2 rounded-full bg-slate-100 hover:bg-blue-100 hover:text-blue-600 transition-colors">
                                    <Linkedin size={18} />
                                </button>
                                <button className="p-2 rounded-full bg-slate-100 hover:bg-blue-100 hover:text-blue-600 transition-colors">
                                    <Facebook size={18} />
                                </button>
                            </div>
                        </div>

                        <div className="flex items-center gap-2">
                            <span className="text-slate-500 text-sm">Tags:</span>
                            <span className="px-3 py-1 bg-slate-100 rounded-full text-xs font-bold text-slate-600">SaaS</span>
                            <span className="px-3 py-1 bg-slate-100 rounded-full text-xs font-bold text-slate-600">Engineering</span>
                        </div>
                    </div>

                </div>
            </article>

            {/* Newsletter CTA */}
            <section className="bg-[#002B5B] py-20 text-center">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold text-white mb-4">Enjoyed the read?</h2>
                    <p className="text-blue-200 mb-8 max-w-xl mx-auto">Join 5,000+ engineers receiving scale-focused insights weekly.</p>
                    <button className="px-8 py-3 bg-white text-[#002B5B] font-bold rounded-xl hover:bg-blue-50 transition-colors shadow-lg">
                        Subscribe to Newsletter
                    </button>
                </div>
            </section>
        </main>
    );
};

export default BlogPostPage;
