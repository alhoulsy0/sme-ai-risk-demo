"use client";

import { Navbar } from "@/components/Navbar";
import { motion } from "framer-motion";
import { Shield, BookOpen, Scale } from "lucide-react";
import Link from "next/link";

export default function LearnMorePage() {
    return (
        <div className="min-h-screen bg-zinc-50 pb-20">
            <Navbar />

            <div className="container mx-auto max-w-4xl px-4 pt-12">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center"
                >
                    <h1 className="mb-6 text-4xl font-bold text-gray-900 sm:text-5xl">
                        Why AI Governance Matters
                    </h1>
                    <p className="mb-16 text-xl text-gray-600">
                        As AI adoption grows, so does the need for responsible oversight.
                        The SME AI Risk Register helps Canadian businesses navigate this complex landscape.
                    </p>
                </motion.div>

                <div className="grid gap-8 md:grid-cols-3">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1, duration: 0.5 }}
                        className="rounded-2xl bg-white p-8 shadow-lg"
                    >
                        <div className="mb-4 inline-flex rounded-full bg-blue-100 p-3 text-blue-600">
                            <Shield className="h-8 w-8" />
                        </div>
                        <h3 className="mb-3 text-xl font-bold text-gray-900">Risk Mitigation</h3>
                        <p className="text-gray-600">
                            Identify potential vulnerabilities in your AI systems before they become liabilities.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                        className="rounded-2xl bg-white p-8 shadow-lg"
                    >
                        <div className="mb-4 inline-flex rounded-full bg-purple-100 p-3 text-purple-600">
                            <Scale className="h-8 w-8" />
                        </div>
                        <h3 className="mb-3 text-xl font-bold text-gray-900">Compliance</h3>
                        <p className="text-gray-600">
                            Align with emerging regulations like Canada's AIDA and global standards (EU AI Act).
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.5 }}
                        className="rounded-2xl bg-white p-8 shadow-lg"
                    >
                        <div className="mb-4 inline-flex rounded-full bg-green-100 p-3 text-green-600">
                            <BookOpen className="h-8 w-8" />
                        </div>
                        <h3 className="mb-3 text-xl font-bold text-gray-900">Education</h3>
                        <p className="text-gray-600">
                            Learn best practices for deploying AI tools responsibly within your organization.
                        </p>
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                    className="mt-16 text-center"
                >
                    <Link
                        href="/wizard"
                        className="inline-flex items-center justify-center rounded-full bg-canada-red px-8 py-4 text-lg font-bold text-white transition-all hover:bg-red-700 hover:shadow-lg"
                    >
                        Start Your Assessment
                    </Link>
                </motion.div>
            </div>
        </div>
    );
}
