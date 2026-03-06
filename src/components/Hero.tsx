"use client";

import { motion, Variants } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import { Float, MeshWobbleMaterial, Cone, Torus, Sphere, Octahedron } from "@react-three/drei";
import { ArrowRight, Sparkles } from "lucide-react";
import CircularBadge from "./CircularBadge";

const PlayfulBackground = () => {
    return (
        <div className="absolute inset-0 z-0 opacity-100 pointer-events-none overflow-hidden">
            <Canvas camera={{ position: [0, 0, 8], fov: 40 }}>
                <ambientLight intensity={1.5} />
                <directionalLight position={[10, 10, 5]} intensity={2} color="#FDF8F1" />
                <directionalLight position={[-10, -10, -5]} intensity={1.5} color="#FFD700" />

                {/* Wobbly floating cone (Playful geometry) */}
                <Float speed={3} rotationIntensity={3} floatIntensity={4}>
                    <Cone args={[1, 2, 16]} position={[4, 2, -2]} rotation={[Math.PI / 4, 0, 0]}>
                        <MeshWobbleMaterial
                            color="#E63946" // Coral
                            roughness={0.2}
                            {...{ wobble: 1, speed: 2 } as any}
                        />
                    </Cone>
                </Float>

                {/* Chunky Donut */}
                <Float speed={2} rotationIntensity={4} floatIntensity={3}>
                    <Torus args={[1.2, 0.5, 16, 32]} position={[-4, -1, -3]} rotation={[0, Math.PI / 2, 0]}>
                        <MeshWobbleMaterial
                            color="#006B6B" // Teal
                            roughness={0.4}
                            {...{ wobble: 0.5, speed: 1.5 } as any}
                        />
                    </Torus>
                </Float>

            </Canvas>
        </div>
    );
};

export default function Hero() {
    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.2, // Slight delay to let canvas load visually
            },
        },
    };

    const itemVariants: Variants = {
        hidden: { opacity: 0, y: 40, scale: 0.95 },
        show: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: { type: "spring", stiffness: 80, damping: 12, mass: 1.2 }
        },
    };

    return (
        <section className="relative min-h-screen flex items-center pt-24 pb-section bg-background overflow-hidden border-b-8 border-foreground">
            {/* Subtle Texture Overlay */}
            <div className="absolute inset-0 bg-chicken-wire opacity-30 pointer-events-none z-0"></div>

            <PlayfulBackground />

            <div className="container mx-auto px-6 relative z-10 flex flex-col items-center text-center">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="show"
                    className="max-w-6xl relative"
                >
                    <motion.div variants={itemVariants} className="mb-6 flex justify-center relative">
                        {/* The new circular rotating badge floating over the hero text */}
                        <div className="absolute -top-32 -right-10 md:-right-32 lg:-right-48 z-20 text-danger opacity-90 hidden sm:block">
                            <CircularBadge text="FASTEST SITES • CRAFTED WITH LOVE • " size={200} />
                        </div>

                        <span className="sticker-badge px-6 py-2 text-sm tracking-widest gap-2 rotate-[-2deg]">
                            <Sparkles className="w-4 h-4" />
                            Freshest Code in Town
                        </span>
                    </motion.div>

                    <motion.h1
                        variants={itemVariants}
                        className="text-6xl md:text-8xl lg:text-[9rem] font-heading mb-6 tracking-wide leading-[0.9] text-foreground"
                        style={{ textShadow: "4px 4px 0px rgba(0,0,0,0.1)" }}
                    >
                        SWEETEN<br />
                        YOUR <span className="text-accent underline decoration-warning decoration-[8px] underline-offset-8">BRAND.</span>
                    </motion.h1>

                    <motion.p
                        variants={itemVariants}
                        className="text-xl md:text-2xl text-surface-dark/80 mb-12 max-w-2xl mx-auto font-sans font-medium tracking-tight"
                    >
                        We mix bespoke websites, high-converting applications, and AI automations.
                        <strong> All natural ingredients, handcrafted for growth.</strong>
                    </motion.p>

                    <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                        <a href="#contact" className="h-16 px-10 rounded-full bg-danger text-background font-sans font-bold uppercase text-lg tracking-widest border-4 border-foreground shadow-[6px_6px_0px_0px_rgba(45,27,51,1)] hover:translate-x-1 hover:translate-y-1 hover:shadow-[2px_2px_0px_0px_rgba(45,27,51,1)] transition-all flex items-center gap-3">
                            Start Mixing
                            <ArrowRight className="w-6 h-6" strokeWidth={3} />
                        </a>

                        <a href="#portfolio" className="h-16 flex items-center justify-center px-10 rounded-full bg-danger text-background font-sans font-bold uppercase text-lg tracking-widest border-4 border-foreground shadow-[6px_6px_0px_0px_rgba(45,27,51,1)] hover:translate-x-1 hover:translate-y-1 hover:shadow-[2px_2px_0px_0px_rgba(45,27,51,1)] transition-all hover:bg-foreground hover:text-background">
                            View Menu
                        </a>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
