"use client";

import { motion } from "framer-motion";
import { CheckCircle2, X } from "lucide-react";
import { useState } from "react";

const planFeatures = [
    { name: "Custom Next.js & React Build", standard: true, enterprise: true },
    { name: "Playful & Premium Animations", standard: true, enterprise: true },
    { name: "Mobile Responsive Matrix", standard: true, enterprise: true },
    { name: "Basic SEO & Analytics", standard: true, enterprise: true },
    { name: "30 Days Post-Launch Support", standard: true, enterprise: true },
    { name: "Custom AI Workflows & Agents", standard: false, enterprise: true },
    { name: "Complete SaaS Dashboards", standard: false, enterprise: true },
    { name: "Database & Auth Systems", standard: false, enterprise: true },
    { name: "Unlimited Revisions", standard: false, enterprise: true },
    { name: "Priority Slack Channel", standard: false, enterprise: true },
    { name: "Quarterly Performance Audits", standard: false, enterprise: true },
];

export default function Pricing() {
    const [isMonthly, setIsMonthly] = useState(false);

    return (
        <section id="pricing" className="py-section bg-surface-dark text-background relative border-b-8 border-foreground overflow-hidden">
            {/* Playful background blob */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/20 rounded-full blur-[100px] pointer-events-none z-0"></div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="inline-block sticker-badge px-6 py-2 mb-6 bg-warning text-foreground border-foreground shadow-[4px_4px_0px_0px_rgba(253,248,241,0.2)]"
                    >
                        Invest In Your Growth
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-5xl md:text-7xl font-heading uppercase leading-[0.9] mb-8"
                    >
                        COMPARATIVE <br />
                        <span className="text-warning">PRICING.</span>
                    </motion.h2>

                    {/* Toggle Switch */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="flex items-center justify-center"
                    >
                        <div className="bg-white border-4 border-foreground p-2 rounded-full inline-flex relative shadow-[4px_4px_0px_0px_rgba(253,248,241,0.2)]">
                            <button
                                onClick={() => setIsMonthly(false)}
                                className={`relative z-10 px-8 py-3 rounded-full font-sans font-bold uppercase tracking-widest text-sm transition-colors ${!isMonthly ? "text-background" : "text-foreground/70 hover:text-foreground"
                                    }`}
                            >
                                One-Time Build
                            </button>
                            <button
                                onClick={() => setIsMonthly(true)}
                                className={`relative z-10 px-8 py-3 rounded-full font-sans font-bold uppercase tracking-widest text-sm transition-colors ${isMonthly ? "text-background" : "text-foreground/70 hover:text-foreground"
                                    }`}
                            >
                                Monthly Partner
                            </button>

                            {/* Animated Background Pill */}
                            <motion.div
                                className="absolute top-2 bottom-2 w-[calc(50%-8px)] bg-danger rounded-full -z-0"
                                animate={{
                                    left: isMonthly ? "calc(50% + 4px)" : "8px",
                                }}
                                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                            />
                        </div>
                    </motion.div>
                </div>

                {/* Comparative Table Layout for desktop, stacked for mobile */}
                <div className="w-full overflow-x-auto pb-8 -mb-8">
                    <div className="max-w-6xl mx-auto min-w-[300px] md:min-w-[900px] xl:w-full bg-white rounded-[2.5rem] border-4 border-foreground shadow-[12px_12px_0px_0px_rgba(253,248,241,0.2)] overflow-hidden text-foreground">
                        <div className="grid grid-cols-1 md:grid-cols-3 divide-y-4 md:divide-y-0 md:divide-x-4 divide-foreground">
                            {/* Features Column (Hidden on mobile) */}
                            <div className="hidden md:block col-span-1 bg-background p-10">
                                <h3 className="text-3xl font-heading mb-12 invisible">Features</h3>
                                <ul className="space-y-6 font-sans font-medium text-lg text-surface-dark">
                                    {planFeatures.map((f, i) => (
                                        <li key={i} className="h-8 flex items-center">{f.name}</li>
                                    ))}
                                </ul>
                            </div>

                            {/* Standard Plan */}
                            <div className="col-span-1 p-10 flex flex-col items-center bg-white relative">
                                <h3 className="text-3xl font-heading uppercase text-center mb-2">Standard Dev</h3>
                                <p className="text-center opacity-70 font-sans font-medium mb-6 min-h-[48px]">For ongoing maintenance & feature rollouts</p>

                                <div className="text-center mb-8 pb-8 border-b-4 border-foreground/10 w-full">
                                    <div className="text-5xl font-heading tracking-tight mb-2">
                                        ₹3,000
                                    </div>
                                </div>

                                <ul className="space-y-6 mb-10 w-full font-sans font-medium md:text-center">
                                    {planFeatures.map((f, i) => (
                                        <li key={i} className="min-h-8 flex items-center md:justify-center justify-between gap-4">
                                            <span className="md:hidden text-surface-dark/80 text-sm">{f.name}</span>
                                            {f.standard ?
                                                <CheckCircle2 className="w-6 h-6 text-accent shrink-0" /> :
                                                <X className="w-6 h-6 text-foreground/30 shrink-0" />
                                            }
                                        </li>
                                    ))}
                                </ul>

                                <button className="mt-auto w-full py-5 rounded-full font-sans font-bold uppercase tracking-widest border-4 bg-background text-foreground border-foreground hover:bg-accent hover:border-foreground transition-all shadow-[4px_4px_0px_0px_rgba(45,27,51,1)] hover:translate-x-1 hover:translate-y-1 hover:shadow-[2px_2px_0px_0px_rgba(45,27,51,1)]">
                                    Select Standard
                                </button>
                            </div>

                            {/* Enterprise Plan */}
                            <div className="col-span-1 p-10 flex flex-col items-center bg-warning relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-white/20 rounded-full blur-2xl"></div>

                                <div className="sticker-badge absolute top-4 -right-8 rotate-45 px-10 py-1 bg-danger text-white text-xs shadow-none border-b-4">
                                    VIP
                                </div>

                                <h3 className="text-3xl font-heading uppercase text-center mb-2 relative z-10">Enterprise</h3>
                                <p className="text-center opacity-80 font-sans font-medium mb-6 min-h-[48px] relative z-10">Full technical partnership & scaling</p>

                                <div className="text-center mb-8 pb-8 border-b-4 border-foreground/20 w-full relative z-10">
                                    <div className="text-5xl font-heading tracking-tight mb-2">
                                        ₹20,000
                                    </div>
                                </div>

                                <ul className="space-y-6 mb-10 w-full font-sans font-medium md:text-center relative z-10">
                                    {planFeatures.map((f, i) => (
                                        <li key={i} className="min-h-8 flex items-center md:justify-center justify-between gap-4">
                                            <span className="md:hidden text-surface-dark/80 text-sm">{f.name}</span>
                                            {f.enterprise ?
                                                <CheckCircle2 className="w-6 h-6 text-foreground shrink-0" /> :
                                                <X className="w-6 h-6 text-foreground/30 shrink-0" />
                                            }
                                        </li>
                                    ))}
                                </ul>

                                <button className="mt-auto relative z-10 w-full py-5 rounded-full font-sans font-bold uppercase tracking-widest border-4 bg-danger text-white border-foreground hover:bg-foreground hover:text-background transition-all shadow-[4px_4px_0px_0px_rgba(45,27,51,1)] hover:translate-x-1 hover:translate-y-1 hover:shadow-[2px_2px_0px_0px_rgba(45,27,51,1)]">
                                    Go Enterprise
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
