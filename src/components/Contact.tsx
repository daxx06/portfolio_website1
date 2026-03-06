"use client";

import { motion } from "framer-motion";
import { Send, MapPin, Mail, Phone, Smile } from "lucide-react";
import { useState } from "react";

export default function Contact() {
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
    const [formData, setFormData] = useState({ name: "", email: "", businessType: "", message: "" });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("loading");

        try {
            const res = await fetch("/api/leads", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            if (res.ok) {
                setStatus("success");
                setFormData({ name: "", email: "", businessType: "", message: "" });
            } else {
                setStatus("error");
            }
        } catch (error) {
            setStatus("error");
        }
    };

    return (
        <section id="contact" className="py-section bg-warning relative border-t-8 border-foreground overflow-hidden">
            {/* Pop-art background dots */}
            <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(#2D1B33 2px, transparent 2px)", backgroundSize: "30px 30px" }}></div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
                    {/* Text Column */}
                    <div className="relative">
                        {/* Decorative floating shapes */}
                        <motion.div
                            animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute -top-12 -left-12 w-24 h-24 bg-danger rounded-full border-4 border-foreground shadow-[4px_4px_0px_0px_rgba(45,27,51,1)] z-[-1]"
                        />
                        <motion.div
                            animate={{ y: [0, 20, 0], rotate: [0, -15, 0] }}
                            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                            className="absolute bottom-12 -right-8 w-32 h-32 bg-accent rotate-12 border-4 border-foreground shadow-[4px_4px_0px_0px_rgba(45,27,51,1)] z-[-1]"
                        />

                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, rotate: -6 }}
                            whileInView={{ opacity: 1, scale: 1, rotate: -3 }}
                            viewport={{ once: true }}
                            className="inline-block sticker-badge px-8 py-3 mb-8 bg-white text-foreground shadow-[4px_4px_0px_0px_rgba(45,27,51,1)] text-lg"
                        >
                            Let&apos;s Build Somethin&apos; Crazy
                        </motion.div>

                        <motion.h2
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="text-7xl md:text-[8rem] font-heading text-foreground uppercase leading-[0.8] mb-12"
                            style={{ textShadow: "6px 6px 0px rgba(0,0,0,0.15)" }}
                        >
                            SAY <br />
                            <span className="text-white">HELLO!</span>
                        </motion.h2>

                        <div className="space-y-6 bg-white/60 p-8 rounded-[2rem] border-4 border-foreground shadow-[8px_8px_0px_0px_rgba(45,27,51,1)] backdrop-blur-sm relative rotate-1 hover:rotate-0 transition-transform">
                            <div className="absolute -top-6 -right-6 w-16 h-16 bg-accent rounded-full flex items-center justify-center border-4 border-foreground shadow-[4px_4px_0px_0px_rgba(45,27,51,1)] rotate-12">
                                <Smile className="w-8 h-8 text-white" />
                            </div>

                            {[
                                { icon: <Mail className="w-6 h-6 text-background" />, text: "hello@webx.agency", bg: "bg-danger" },
                                { icon: <Phone className="w-6 h-6 text-background" />, text: "+91 6395515756", bg: "bg-foreground" },
                                { icon: <MapPin className="w-6 h-6 text-background" />, text: "Dehradun, India", bg: "bg-accent" },
                            ].map((item, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.2 + (i * 0.1) }}
                                    className="flex items-center gap-6 text-foreground font-sans font-bold text-xl md:text-2xl"
                                >
                                    <div className={`w-14 h-14 rounded-full ${item.bg} flex items-center justify-center border-4 border-foreground shadow-[2px_2px_0px_0px_rgba(45,27,51,1)]`}>
                                        {item.icon}
                                    </div>
                                    <span>{item.text}</span>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Form Column */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="bg-white p-10 md:p-14 rounded-[3rem] border-4 border-foreground shadow-[16px_16px_0px_0px_rgba(45,27,51,1)] relative z-10 -rotate-1"
                    >
                        {status === "success" ? (
                            <div className="text-center py-16">
                                <div className="w-32 h-32 bg-success rounded-full border-4 border-foreground flex items-center justify-center mx-auto mb-8 shadow-[4px_4px_0px_0px_rgba(45,27,51,1)] rotate-12">
                                    <span className="text-6xl">🎉</span>
                                </div>
                                <h3 className="text-4xl font-heading mb-4 text-foreground uppercase">Sweet!<br />Received.</h3>
                                <p className="text-surface-dark/70 font-sans font-bold text-xl">We&apos;ll be in touch with you shortly to mix up something great.</p>
                                <button
                                    onClick={() => setStatus("idle")}
                                    className="mt-10 font-sans font-bold uppercase tracking-widest text-lg px-8 py-4 border-4 border-foreground rounded-full bg-warning shadow-[6px_6px_0px_0px_rgba(45,27,51,1)] hover:translate-x-1 hover:translate-y-1 hover:shadow-[2px_2px_0px_0px_rgba(45,27,51,1)] transition-all"
                                >
                                    Send Another
                                </button>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-8">
                                <div className="space-y-2">
                                    <label className="text-sm font-sans font-bold uppercase tracking-widest text-surface-dark/60 ml-2 sm:ml-4">What's your name?</label>
                                    <input
                                        required
                                        type="text"
                                        value={formData.name}
                                        onChange={e => setFormData({ ...formData, name: e.target.value })}
                                        className="w-full bg-background border-4 border-foreground rounded-full px-5 py-4 sm:px-8 sm:py-5 outline-none focus:border-accent font-sans font-bold text-base sm:text-lg focus:shadow-[6px_6px_0px_0px_rgba(0,107,107,1)] transition-all"
                                        placeholder="Jane Doe"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-sans font-bold uppercase tracking-widest text-surface-dark/60 ml-2 sm:ml-4">How can we reach you?</label>
                                    <input
                                        required
                                        type="email"
                                        value={formData.email}
                                        onChange={e => setFormData({ ...formData, email: e.target.value })}
                                        className="w-full bg-background border-4 border-foreground rounded-full px-5 py-4 sm:px-8 sm:py-5 outline-none focus:border-danger font-sans font-bold text-base sm:text-lg focus:shadow-[6px_6px_0px_0px_rgba(230,57,70,1)] transition-all"
                                        placeholder="jane@company.com"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-sans font-bold uppercase tracking-widest text-surface-dark/60 ml-2 sm:ml-4">Your Industry</label>
                                    <select
                                        required
                                        value={formData.businessType}
                                        onChange={e => setFormData({ ...formData, businessType: e.target.value })}
                                        className="w-full bg-background border-4 border-foreground rounded-full px-5 py-4 sm:px-8 sm:py-5 outline-none focus:border-accent font-sans font-bold text-base sm:text-lg focus:shadow-[6px_6px_0px_0px_rgba(0,107,107,1)] transition-all appearance-none cursor-pointer"
                                    >
                                        <option value="" disabled>Select your vibe</option>
                                        <option value="Restaurant">Restaurant / Cafe</option>
                                        <option value="Health">Healthcare / Clinic</option>
                                        <option value="Fitness">Fitness / Gym</option>
                                        <option value="Startup">Tech Startup</option>
                                        <option value="Other">Other Magic</option>
                                    </select>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-sans font-bold uppercase tracking-widest text-surface-dark/60 ml-2 sm:ml-4">Tell us the dream</label>
                                    <textarea
                                        required
                                        rows={4}
                                        value={formData.message}
                                        onChange={e => setFormData({ ...formData, message: e.target.value })}
                                        className="w-full bg-background border-4 border-foreground rounded-[2rem] px-5 py-4 sm:px-8 sm:py-5 outline-none focus:border-accent font-sans font-bold text-base sm:text-lg focus:shadow-[6px_6px_0px_0px_rgba(0,107,107,1)] transition-all resize-none"
                                        placeholder="Tell us what you're trying to build..."
                                    />
                                </div>

                                {status === "error" && (
                                    <p className="text-danger font-sans font-bold text-sm text-center">Oops! The internet goblins ate your message. Try again?</p>
                                )}

                                <button
                                    disabled={status === "loading"}
                                    type="submit"
                                    className="w-full h-20 rounded-full bg-foreground text-background font-heading text-2xl tracking-wide border-4 border-foreground shadow-[8px_8px_0px_0px_rgba(45,27,51,1)] hover:translate-x-1 hover:translate-y-1 hover:shadow-[2px_2px_0px_0px_rgba(45,27,51,1)] transition-all flex items-center justify-center gap-4 disabled:opacity-50 disabled:cursor-not-allowed uppercase hover:bg-accent hover:text-white"
                                >
                                    {status === "loading" ? "SENDING..." : "SEND IT"}
                                    {!status && <Send className="w-8 h-8" />}
                                </button>
                            </form>
                        )}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
