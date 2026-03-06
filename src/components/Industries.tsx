"use client";

import { motion } from "framer-motion";
import { Coffee, Dumbbell, Stethoscope, Lightbulb } from "lucide-react";

const industries = [
    { name: "Restaurants & Cafes", icon: <Coffee className="w-8 h-8" />, color: "bg-warning", rotation: "-rotate-2" },
    { name: "Fitness & Gyms", icon: <Dumbbell className="w-8 h-8" />, color: "bg-danger text-white", rotation: "rotate-3" },
    { name: "Healthcare & Clinics", icon: <Stethoscope className="w-8 h-8" />, color: "bg-accent text-white", rotation: "-rotate-1" },
    { name: "Startups", icon: <Lightbulb className="w-8 h-8" />, color: "bg-white", rotation: "rotate-2" },
];

export default function Industries() {
    return (
        <section className="py-section-sm bg-surface-dark text-surface-light relative border-b-8 border-warning overflow-hidden">
            {/* Background pattern */}
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjEiIGZpbGw9IiNGRkQ3MDAiIGZpbGwtb3BhY2l0eT0iMC4xIi8+PC9zdmc+')] opacity-50"></div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-block sticker-badge bg-accent text-white border-warning px-6 py-2 mb-6 shadow-[4px_4px_0px_0px_rgba(255,215,0,1)]"
                    >
                        Who We Serve
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        className="text-4xl md:text-6xl font-heading text-background max-w-4xl mx-auto leading-tight"
                    >
                        BUILT FOR BUSINESSES THAT WANT TO <span className="text-warning">STAND OUT.</span>
                    </motion.h2>
                </div>

                <div className="flex flex-wrap justify-center gap-6 md:gap-10">
                    {industries.map((industry, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.5, y: 40 }}
                            whileInView={{ opacity: 1, scale: 1, y: 0 }}
                            whileHover={{ scale: 1.05, rotate: 0 }}
                            transition={{
                                type: "spring",
                                stiffness: 100,
                                damping: 10,
                                delay: index * 0.1
                            }}
                            viewport={{ once: true }}
                            className={`${industry.color} ${industry.rotation} px-8 py-6 rounded-[2rem] border-4 border-background flex items-center gap-4 shadow-[8px_8px_0px_0px_rgba(253,248,241,0.2)] hover:shadow-[12px_12px_0px_0px_rgba(253,248,241,0.3)] transition-all cursor-pointer`}
                        >
                            <div className="opacity-80">
                                {industry.icon}
                            </div>
                            <span className="font-heading text-xl tracking-wide">{industry.name}</span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
