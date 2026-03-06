"use client";

import { motion, Variants } from "framer-motion";
import { Monitor, Cpu, Code2, Zap, BarChart } from "lucide-react";

const services = [
    {
        icon: <Monitor className="w-10 h-10 text-background" strokeWidth={2.5} />,
        title: "Website Development",
        description: "High-performance, custom-coded websites that look delicious and convert visitors into clients.",
        color: "bg-warning",
    },
    {
        icon: <Cpu className="w-10 h-10 text-background" strokeWidth={2.5} />,
        title: "AI Automations",
        description: "Streamline your workflows with intelligent agents. Let the robots do the boring work.",
        color: "bg-danger",
    },
    {
        icon: <Code2 className="w-10 h-10 text-background" strokeWidth={2.5} />,
        title: "Web Applications",
        description: "Scalable SaaS platforms and internal tools tailored specifically to your business needs.",
        color: "bg-accent",
    },
    {
        icon: <Zap className="w-10 h-10 text-background" strokeWidth={2.5} />,
        title: "Process Automation",
        description: "Eliminate manual tasks with precision-engineered operational pipelines.",
        color: "bg-danger",
    },
    {
        icon: <BarChart className="w-10 h-10 text-background" strokeWidth={2.5} />,
        title: "SEO & Performance",
        description: "Lightning-fast load times and advanced SEO strategies to dominate search rankings.",
        color: "bg-warning",
    },
];

export default function Services() {
    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: { staggerChildren: 0.1 },
        },
    };

    const itemVariants: Variants = {
        hidden: { opacity: 0, scale: 0.8, y: 50 },
        show: { opacity: 1, scale: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 12, mass: 1 } },
    };

    return (
        <section className="py-section bg-background relative border-b-8 border-foreground overflow-hidden">
            {/* Playful background blobs */}
            <div className="absolute top-[-100px] right-[-100px] w-96 h-96 bg-warning/20 rounded-full blur-3xl pointer-events-none"></div>
            <div className="absolute bottom-[-100px] left-[-100px] w-[500px] h-[500px] bg-accent/10 rounded-full blur-3xl pointer-events-none"></div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="mb-20 flex flex-col md:flex-row justify-between items-end gap-10">
                    <div>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
                            whileInView={{ opacity: 1, scale: 1, rotate: -3 }}
                            viewport={{ once: true }}
                            className="inline-block sticker-badge px-5 py-2 text-sm mb-6"
                        >
                            Our Capabilities
                        </motion.div>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-5xl md:text-7xl font-heading text-foreground uppercase leading-[0.9]"
                        >
                            WE BUILD ENGINES <br />
                            <span className="text-surface-dark/40">NOT JUST PAGES.</span>
                        </motion.h2>
                    </div>
                </div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            className={`boutique-card p-10 relative overflow-hidden group bg-white ${index === 0 ? 'md:col-span-2 lg:col-span-2' : ''}`}
                        >
                            <div className="relative z-10">
                                <div className={`mb-8 w-20 h-20 rounded-[2rem] flex items-center justify-center shadow-[4px_4px_0px_0px_rgba(45,27,51,0.2)] group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300 ${service.color}`}>
                                    {service.icon}
                                </div>

                                <h3 className="text-3xl font-heading text-foreground mb-4">
                                    {service.title}
                                </h3>

                                <p className="text-surface-dark/80 font-sans leading-relaxed text-lg max-w-md font-medium">
                                    {service.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
