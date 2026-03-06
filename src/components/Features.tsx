"use client";

import { motion } from "framer-motion";
import { Rocket, Target, Users, Zap, Award, Coffee } from "lucide-react";

const features = [
    { title: "Crazy Fast Delivery", icon: <Rocket className="w-6 h-6" />, desc: "We ship world-class systems in weeks, not months. Speed is our love language." },
    { title: "Conversion First", icon: <Target className="w-6 h-6" />, desc: "Every pixel is engineered to turn casual window-shoppers into paying clients." },
    { title: "Boutique Experience", icon: <Users className="w-6 h-6" />, desc: "You work directly with the founders. No account managers, no broken telephone." },
    { title: "AI-Powered", icon: <Zap className="w-6 h-6" />, desc: "We integrate cutting-edge AI to automate your ugliest backend chores." },
    { title: "Award Winning Code", icon: <Award className="w-6 h-6" />, desc: "Clean, scalable, documented, and ready for you to take over when you want." },
    { title: "Zero Bullshit", icon: <Coffee className="w-6 h-6" />, desc: "Straight talk, transparent pricing, and coffee-fueled late-night deliveries." },
];

export default function Features() {
    return (
        <section className="py-section-sm bg-accent text-white relative border-b-8 border-foreground overflow-hidden">
            <div className="absolute -top-40 -right-40 w-96 h-96 bg-warning/20 rounded-full blur-[100px] pointer-events-none"></div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, rotate: -5 }}
                        whileInView={{ opacity: 1, scale: 1, rotate: 2 }}
                        viewport={{ once: true }}
                        className="inline-block bg-danger text-white border-4 border-background px-6 py-2 rounded-full font-heading uppercase tracking-widest text-sm mb-6 shadow-[4px_4px_0px_0px_rgba(253,248,241,0.5)]"
                    >
                        The WebX Promise
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-6xl font-heading text-background max-w-4xl mx-auto leading-[0.9]"
                    >
                        WHY DO TOP FOUNDERS <span className="text-warning">WORK WITH US?</span>
                    </motion.h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1, type: "spring", stiffness: 100 }}
                            viewport={{ once: true }}
                            className="flex flex-col gap-4 bg-surface-dark/10 p-8 rounded-[2rem] border-4 border-transparent hover:border-warning hover:bg-surface-dark/20 transition-all duration-300"
                        >
                            <div className="w-16 h-16 rounded-[1.5rem] bg-warning text-foreground flex items-center justify-center border-4 border-foreground shadow-[4px_4px_0px_0px_rgba(45,27,51,1)] -rotate-3 hover:rotate-3 transition-transform">
                                {feature.icon}
                            </div>
                            <div>
                                <h3 className="text-2xl font-heading mb-2 text-background uppercase">{feature.title}</h3>
                                <p className="text-white/80 font-sans font-medium leading-relaxed">{feature.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
