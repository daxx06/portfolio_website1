"use client";

import { motion } from "framer-motion";
import { Sparkles, ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <motion.header
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-background/90 backdrop-blur-md border-b-4 border-foreground shadow-[0px_4px_0px_0px_rgba(45,27,51,1)] py-4" : "bg-transparent py-6"
                }`}
        >
            <div className="container mx-auto px-6 flex justify-between items-center">
                <a href="#" className="flex items-center gap-2 group">
                    <div className="w-10 h-10 bg-accent rounded-full border-2 border-foreground shadow-[2px_2px_0px_0px_rgba(45,27,51,1)] flex items-center justify-center group-hover:rotate-12 transition-transform">
                        <Sparkles className="w-5 h-5 text-white" />
                    </div>
                    <span className="font-heading text-2xl tracking-wider text-foreground uppercase">WebX</span>
                </a>

                <nav className="hidden md:flex items-center gap-8 font-sans font-bold text-lg uppercase tracking-widest text-surface-dark/80">
                    <a href="#portfolio" className="hover:text-foreground hover:-translate-y-1 transition-transform">Work</a>
                    <a href="#pricing" className="hover:text-foreground hover:-translate-y-1 transition-transform">Pricing</a>
                </nav>

                <a
                    href="#contact"
                    className="h-10 sm:h-12 px-3 sm:px-6 rounded-full bg-warning text-foreground font-sans font-bold uppercase tracking-widest text-[11px] sm:text-base border-2 border-foreground shadow-[4px_4px_0px_0px_rgba(45,27,51,1)] hover:translate-x-1 hover:translate-y-1 hover:shadow-[1px_1px_0px_0px_rgba(45,27,51,1)] transition-all flex items-center gap-1 sm:gap-2 shrink-0"
                >
                    <span className="hidden sm:inline">Contact Us</span>
                    <span className="sm:hidden">Let's Talk</span>
                    <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4" strokeWidth={3} />
                </a>
            </div>
        </motion.header>
    );
}
