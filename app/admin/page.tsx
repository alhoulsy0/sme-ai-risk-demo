"use client";

import { Navbar } from "@/components/Navbar";
import { motion } from "framer-motion";
import { Save, Upload } from "lucide-react";

export default function AdminPage() {
    return (
        <div className="min-h-screen bg-zinc-50 pb-20">
            <Navbar />

            <div className="container mx-auto max-w-4xl px-4 pt-12">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="mb-8 flex items-center justify-between">
                        <div>
                            <h1 className="text-3xl font-bold text-gray-900">
                                Knowledge Base Admin
                            </h1>
                            <p className="text-gray-600">
                                Update the regulatory content and risk rules without coding.
                            </p>
                        </div>
                        <div className="rounded-full bg-canada-red/10 px-4 py-1 text-sm font-medium text-canada-red">
                            Admin Access
                        </div>
                    </div>

                    <div className="grid gap-8">
                        {/* Content Editor */}
                        <div className="rounded-2xl bg-white p-8 shadow-lg">
                            <h2 className="mb-6 text-xl font-bold text-gray-900">
                                Update Risk Rules
                            </h2>
                            <div className="mb-6">
                                <label className="mb-2 block text-sm font-medium text-gray-700">
                                    Risk Logic (JSON/Text)
                                </label>
                                <textarea
                                    className="h-64 w-full rounded-xl border-2 border-gray-200 p-4 font-mono text-sm outline-none transition-all focus:border-canada-red focus:ring-4 focus:ring-canada-red/10"
                                    defaultValue={`{
  "high_risk_keywords": ["PII", "biometric", "hiring", "credit"],
  "medium_risk_keywords": ["internal", "optimization", "analytics"],
  "compliance_standards": ["AIDA", "GDPR", "PIPEDA"]
}`}
                                />
                            </div>
                            <div className="flex justify-end gap-4">
                                <button className="flex items-center gap-2 rounded-lg border border-gray-200 px-4 py-2 font-medium text-gray-700 hover:bg-gray-50">
                                    <Upload className="h-4 w-4" /> Import File
                                </button>
                                <button className="flex items-center gap-2 rounded-lg bg-canada-red px-6 py-2 font-bold text-white hover:bg-red-700">
                                    <Save className="h-4 w-4" /> Save Changes
                                </button>
                            </div>
                        </div>

                        {/* Recent Updates Log */}
                        <div className="rounded-2xl bg-white p-8 shadow-lg">
                            <h2 className="mb-6 text-xl font-bold text-gray-900">
                                Recent Updates
                            </h2>
                            <div className="space-y-4">
                                {[1, 2, 3].map((i) => (
                                    <div key={i} className="flex items-center justify-between border-b border-gray-100 pb-4 last:border-0 last:pb-0">
                                        <div>
                                            <p className="font-medium text-gray-900">Updated compliance rules for AIDA</p>
                                            <p className="text-sm text-gray-500">Modified by Admin • 2 hours ago</p>
                                        </div>
                                        <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-700">
                                            Published
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
