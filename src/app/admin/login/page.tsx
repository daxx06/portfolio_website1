"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { Loader2, ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function Login() {
    const router = useRouter();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError("");

        const res = await signIn("credentials", {
            email,
            password,
            redirect: false,
        });

        if (res?.error) {
            setError("Invalid credentials");
            setLoading(false);
        } else {
            router.push("/admin");
            router.refresh();
        }
    };

    return (
        <div className="min-h-screen bg-background flex flex-col items-center justify-center p-6 relative">
            <div className="absolute top-6 left-6">
                <Link href="/" className="flex items-center text-foreground/60 hover:text-accent transition-colors font-mono text-xs uppercase tracking-widest">
                    <ArrowLeft className="w-4 h-4 mr-2" /> Back to Site
                </Link>
            </div>

            <div className="w-full max-w-md glass p-10 rounded-3xl border border-white/5 relative z-10">
                <div className="mb-10 text-center">
                    <h1 className="text-3xl font-black uppercase tracking-tight mb-2">WebX Admin</h1>
                    <p className="text-foreground/50 text-sm font-mono uppercase tracking-widest">Authorized Personnel Only</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label className="block text-xs font-mono uppercase text-foreground/50 mb-2">Email</label>
                        <input
                            type="email"
                            required
                            className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-foreground focus:outline-none focus:border-accent/50 transition-colors"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>

                    <div>
                        <label className="block text-xs font-mono uppercase text-foreground/50 mb-2">Password</label>
                        <input
                            type="password"
                            required
                            className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-foreground focus:outline-none focus:border-accent/50 transition-colors"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>

                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full bg-accent text-background font-bold uppercase tracking-wider text-sm py-4 rounded-xl flex items-center justify-center hover:bg-emerald-300 transition-colors disabled:opacity-50"
                    >
                        {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : "Access Dashboard"}
                    </button>

                    {error && <p className="text-red-400 text-sm text-center mt-4">{error}</p>}
                </form>
            </div>

            {/* Background glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-accent/5 rounded-full blur-[120px] pointer-events-none z-0"></div>
        </div>
    );
}
