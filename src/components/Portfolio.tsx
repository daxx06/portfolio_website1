"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const projects = [
    {
        title: "Neon Nexus",
        category: "E-Commerce",
        image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1000&auto=format&fit=crop", // Top down tech/neon abstract
        color: "bg-warning",
        textColor: "text-foreground",
        rotation: "rotate-1",
    },
    {
        title: "Aura Health",
        category: "Web Application",
        image: "https://images.unsplash.com/photo-1531853121101-cb94c8ed218d?q=80&w=1000&auto=format&fit=crop", // Top down organic
        color: "bg-danger",
        textColor: "text-white",
        rotation: "-rotate-2",
    },
    {
        title: "FinFlow",
        category: "SaaS Dashboard",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop", // Top down desk/clean
        color: "bg-accent",
        textColor: "text-white",
        rotation: "rotate-2",
    },
];

export default function Portfolio() {
    return (
        <section id="portfolio" className="py-section bg-background relative border-b-8 border-foreground">
            {/* Subtle Texture Overlay */}
            <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(#2D1B33 2px, transparent 2px)", backgroundSize: "40px 40px" }}></div>

            <div className="container mx-auto px-6 max-w-7xl relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
                    <div>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8, rotate: 10 }}
                            whileInView={{ opacity: 1, scale: 1, rotate: 5 }}
                            viewport={{ once: true }}
                            className="inline-block px-6 py-2 mb-6 bg-accent text-white font-heading uppercase text-sm rounded-full border-4 border-foreground shadow-[3px_3px_0px_0px_rgba(45,27,51,1)]"
                        >
                            Selected Work
                        </motion.div>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-5xl md:text-7xl font-heading text-foreground uppercase leading-[0.9]"
                        >
                            PROOFS IN <br />
                            <span className="text-danger underline decoration-warning decoration-[6px] underline-offset-8">THE PUDDING.</span>
                        </motion.h2>
                    </div>

                    <motion.button
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="h-14 px-8 rounded-full bg-foreground text-background font-heading tracking-wide flex items-center gap-3 hover:bg-accent hover:text-white transition-colors border-4 border-transparent hover:border-foreground shadow-[4px_4px_0px_0px_rgba(45,27,51,0.2)] hover:shadow-[4px_4px_0px_0px_rgba(45,27,51,1)] hover:-translate-y-1 hover:-translate-x-1"
                    >
                        View Archive <ArrowUpRight className="w-5 h-5" />
                    </motion.button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 mt-16">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50, scale: 0.95 }}
                            whileInView={{ opacity: 1, y: 0, scale: 1 }}
                            transition={{ delay: index * 0.1, type: "spring", stiffness: 80, damping: 12 }}
                            viewport={{ once: true, margin: "-50px" }}
                            className={`group relative rounded-t-[10rem] rounded-b-[3rem] border-4 border-foreground shadow-[8px_8px_0px_0px_rgba(45,27,51,1)] ${project.rotation} hover:-rotate-1 transition-all duration-300 ${project.color} ${project.textColor} px-6 pb-12 pt-0 text-center flex flex-col items-center mt-20`}
                        >
                            {/* Circular Masked Top-Down Image */}
                            <div className="w-56 h-56 rounded-full border-4 border-foreground shadow-[4px_4px_0px_0px_rgba(45,27,51,1)] overflow-hidden bg-background -mt-28 mb-8 group-hover:scale-110 transition-transform duration-500 z-10 relative">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            <div className="relative z-0 flex-1 flex flex-col items-center justify-center">
                                <p className="font-heading text-sm mb-3 opacity-80 uppercase tracking-widest">{project.category}</p>
                                <h3 className="text-4xl md:text-5xl font-heading uppercase leading-[0.9] mb-8">{project.title}</h3>
                            </div>

                            <button className={`mt-auto px-8 py-4 rounded-full bg-background text-foreground font-sans font-bold uppercase tracking-widest text-sm hover:scale-105 transition-transform border-4 border-foreground shadow-[4px_4px_0px_0px_rgba(45,27,51,1)]`}>
                                View Project
                            </button>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
