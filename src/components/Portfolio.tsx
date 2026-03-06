"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

const projects = [
    {
        title: "Neon Nexus",
        category: "E-Commerce",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop",
        color: "bg-warning",
        rotation: "rotate-1",
    },
    {
        title: "Aura Health",
        category: "Web Application",
        image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop",
        color: "bg-danger",
        rotation: "-rotate-2",
    },
    {
        title: "FinFlow",
        category: "SaaS Dashboard",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2670&auto=format&fit=crop",
        color: "bg-accent",
        rotation: "rotate-2",
    },
];

export default function Portfolio() {
    return (
        <section id="portfolio" className="py-section bg-background relative border-b-8 border-foreground">
            <div className="container mx-auto px-6 max-w-7xl">
                <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
                    <div>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8, rotate: 10 }}
                            whileInView={{ opacity: 1, scale: 1, rotate: 5 }}
                            viewport={{ once: true }}
                            className="inline-block sticker-badge px-6 py-2 mb-6 shadow-[3px_3px_0px_0px_rgba(45,27,51,1)]"
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
                            <span className="text-accent underline decoration-warning decoration-[6px] underline-offset-8">THE PUDDING.</span>
                        </motion.h2>
                    </div>

                    <motion.button
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="h-14 px-8 rounded-full bg-foreground text-background font-heading tracking-wide flex items-center gap-3 hover:bg-accent transition-colors border-2 border-transparent hover:border-foreground shadow-[4px_4px_0px_0px_rgba(45,27,51,0.2)] hover:shadow-[4px_4px_0px_0px_rgba(45,27,51,1)] hover:-translate-y-1 hover:-translate-x-1"
                    >
                        View Archive <ArrowUpRight className="w-5 h-5" />
                    </motion.button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50, scale: 0.95 }}
                            whileInView={{ opacity: 1, y: 0, scale: 1 }}
                            transition={{ delay: index * 0.1, type: "spring", stiffness: 80, damping: 12 }}
                            viewport={{ once: true, margin: "-50px" }}
                            className={`group relative overflow-hidden rounded-[2.5rem] border-4 border-foreground shadow-[8px_8px_0px_0px_rgba(45,27,51,1)] ${project.rotation} hover:rotate-0 transition-transform duration-300 bg-white`}
                        >
                            <div className="aspect-video relative overflow-hidden bg-foreground">
                                {/* Using standard img to bypass Next.js aggressive image downscaling which causes blur */}
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]"
                                />
                                {/* Warm overlay */}
                                <div className="absolute inset-0 bg-warning/10 group-hover:bg-transparent transition-colors duration-500"></div>
                            </div>

                            <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end">
                                <div className={`px-6 py-4 rounded-[1.5rem] border-4 border-foreground shadow-[4px_4px_0px_0px_rgba(45,27,51,1)] translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 ${project.color} text-foreground w-full flex justify-between items-center`}>
                                    <div>
                                        <p className="font-heading text-sm mb-1 opacity-80 uppercase tracking-widest">{project.category}</p>
                                        <h3 className="text-2xl font-bold font-sans">{project.title}</h3>
                                    </div>
                                    <div className="w-10 h-10 bg-background rounded-full flex items-center justify-center border-2 border-foreground shrink-0">
                                        <ArrowUpRight className="w-5 h-5 text-foreground" strokeWidth={3} />
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
