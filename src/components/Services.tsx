"use client";

import { motion, useScroll, useTransform, Variants } from "framer-motion";
import { useRef } from "react";

// --- Custom Animated Graphics Components ---

const SeoGraphic = () => {
    return (
        <div className="relative w-full h-80 bg-background rounded-[2rem] border-4 border-foreground shadow-[8px_8px_0px_0px_rgba(45,27,51,1)] overflow-hidden flex items-end justify-center gap-4 p-8">
            {[40, 70, 50, 90, 120].map((height, i) => (
                <motion.div
                    key={i}
                    initial={{ height: 0 }}
                    whileInView={{ height: `${height}%` }}
                    transition={{ delay: i * 0.1, duration: 0.8, type: "spring", bounce: 0.4 }}
                    viewport={{ once: true }}
                    className="w-12 bg-warning border-4 border-foreground rounded-t-xl shadow-[4px_0px_0px_0px_rgba(45,27,51,0.2)]"
                    style={{ transformOrigin: "bottom" }}
                />
            ))}
            {/* Upward trending line */}
            <motion.svg
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 1 }}
                transition={{ delay: 0.5, duration: 1.5, ease: "easeInOut" }}
                viewport={{ once: true }}
                className="absolute inset-0 w-full h-full pointer-events-none"
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
            >
                <path d="M 10 80 Q 30 70 40 50 T 70 30 T 90 10" fill="none" stroke="var(--danger)" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
            </motion.svg>
        </div>
    );
};

const WebDevGraphic = () => {
    return (
        <div className="relative w-full h-80 bg-accent rounded-[2rem] border-4 border-foreground shadow-[8px_8px_0px_0px_rgba(45,27,51,1)] overflow-hidden flex items-center justify-center">
            {/* Spinning geometric shapes */}
            <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="relative w-48 h-48"
            >
                <div className="absolute inset-0 border-8 border-warning border-dashed rounded-full" />
                <motion.div
                    animate={{ rotate: -720 }}
                    transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-4 border-4 border-background rounded-xl"
                />
                <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute inset-16 bg-danger rounded-full border-4 border-foreground shadow-[4px_4px_0px_0px_rgba(45,27,51,1)]"
                />
            </motion.div>
        </div>
    );
};

const AiAutomationGraphic = () => {
    return (
        <div className="relative w-full h-80 bg-danger rounded-[2rem] border-4 border-foreground shadow-[8px_8px_0px_0px_rgba(45,27,51,1)] overflow-hidden flex items-center justify-center">
            {/* Network nodes */}
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                {[
                    { id: 1, cx: 20, cy: 30 }, { id: 2, cx: 80, cy: 20 },
                    { id: 3, cx: 50, cy: 50 }, { id: 4, cx: 30, cy: 80 },
                    { id: 5, cx: 70, cy: 70 }
                ].map((node) => (
                    <motion.circle
                        key={`node-${node.id}`}
                        cx={node.cx} cy={node.cy} r={6}
                        fill="var(--warning)"
                        stroke="var(--foreground)"
                        strokeWidth="2"
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        transition={{ type: "spring", delay: node.id * 0.1 }}
                    />
                ))}
                {[
                    { x1: 20, y1: 30, x2: 50, y2: 50 },
                    { x1: 80, y1: 20, x2: 50, y2: 50 },
                    { x1: 30, y1: 80, x2: 50, y2: 50 },
                    { x1: 70, y1: 70, x2: 50, y2: 50 },
                    { x1: 20, y1: 30, x2: 30, y2: 80 },
                    { x1: 80, y1: 20, x2: 70, y2: 70 }
                ].map((line, i) => (
                    <motion.line
                        key={`line-${i}`}
                        x1={line.x1} y1={line.y1} x2={line.x2} y2={line.y2}
                        stroke="var(--background)"
                        strokeWidth="2"
                        strokeDasharray="4 4"
                        initial={{ pathLength: 0 }}
                        whileInView={{ pathLength: 1 }}
                        transition={{ duration: 1, delay: 0.5 + (i * 0.1) }}
                    />
                ))}
            </svg>
            <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                className="w-16 h-16 bg-background rounded-[1rem] border-4 border-foreground shadow-[4px_4px_0px_0px_rgba(45,27,51,1)] flex items-center justify-center z-10"
            >
                <div className="w-6 h-6 bg-warning rounded-full animate-ping" />
            </motion.div>
        </div>
    );
};

const services = [
    {
        title: "Traffic & SEO",
        description: "We don't just build sites; we build magnets. Dominating search results to pull qualified leads directly to your digital doorstep.",
        Graphic: SeoGraphic,
        color: "bg-warning",
        textColor: "text-foreground",
    },
    {
        title: "Bespoke Web Systems",
        description: "High-performance, custom-coded web applications that look absolutely delicious and are engineered to convert window-shoppers into paying clients.",
        Graphic: WebDevGraphic,
        color: "bg-accent",
        textColor: "text-white",
    },
    {
        title: "AI Workflows",
        description: "Stop doing the boring work yourself. We build intelligent agents and operational pipelines that automate your ugliest backend chores.",
        Graphic: AiAutomationGraphic,
        color: "bg-danger",
        textColor: "text-white",
    }
];

export default function Services() {
    return (
        <section className="py-section bg-background relative border-b-8 border-foreground overflow-hidden">
            {/* Subtle Texture Overlay */}
            <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(#2D1B33 2px, transparent 2px)", backgroundSize: "40px 40px" }}></div>

            <div className="container mx-auto px-6 max-w-7xl relative z-10">
                <div className="text-center mb-20 md:mb-32 flex flex-col items-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
                        whileInView={{ opacity: 1, scale: 1, rotate: -3 }}
                        viewport={{ once: true }}
                        className="inline-block sticker-badge px-6 py-2 text-sm mb-6 border-4 border-background shadow-[3px_3px_0px_0px_rgba(45,27,51,1)]"
                    >
                        The Secret Sauce
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-5xl md:text-7xl lg:text-[6rem] font-heading text-foreground uppercase leading-[0.9]"
                    >
                        HOW WE BOOST <br />
                        <span className="text-transparent" style={{ WebkitTextStroke: "2px var(--foreground)" }}>YOUR BUSINESS.</span>
                    </motion.h2>
                </div>

                <div className="flex flex-col gap-24 md:gap-40">
                    {services.map((service, index) => {
                        const isEven = index % 2 !== 0; // Alternate left/right
                        return (
                            <div key={index} className={`flex flex-col ${isEven ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-12 lg:gap-20`}>
                                {/* Graphic Side */}
                                <motion.div
                                    initial={{ opacity: 0, x: isEven ? 50 : -50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true, margin: "-100px" }}
                                    transition={{ type: "spring", stiffness: 60, damping: 15 }}
                                    className="w-full md:w-1/2"
                                >
                                    <service.Graphic />
                                </motion.div>

                                {/* Text Side */}
                                <motion.div
                                    initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true, margin: "-100px" }}
                                    transition={{ type: "spring", stiffness: 60, damping: 15, delay: 0.2 }}
                                    className="w-full md:w-1/2 flex flex-col items-start"
                                >
                                    <div className={`w-16 h-16 rounded-[1.5rem] border-4 border-foreground shadow-[4px_4px_0px_0px_rgba(45,27,51,1)] flex items-center justify-center font-heading text-2xl mb-6 ${service.color} ${service.textColor} -rotate-3`}>
                                        0{index + 1}
                                    </div>
                                    <h3 className="text-4xl md:text-5xl font-heading uppercase text-foreground mb-4 leading-tight">
                                        {service.title}
                                    </h3>
                                    <p className="text-xl text-surface-dark/80 font-sans font-medium leading-relaxed max-w-lg">
                                        {service.description}
                                    </p>
                                </motion.div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
