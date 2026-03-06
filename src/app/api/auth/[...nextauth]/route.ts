import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions: NextAuthOptions = {
    providers: [
        CredentialsProvider({
            name: "Admin Login",
            credentials: {
                email: { label: "Email", type: "email", placeholder: "admin@webx.com" },
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials) {
                // This relies on environment variables for a single admin login
                // Perfect for a simple portfolio/agency site without needing a full Users DB table
                const adminEmail = process.env.ADMIN_EMAIL || "admin@webx.com";
                const adminPassword = process.env.ADMIN_PASSWORD || "admin123";

                if (
                    credentials?.email === adminEmail &&
                    credentials?.password === adminPassword
                ) {
                    return { id: "1", name: "Admin", email: adminEmail };
                }

                return null; // Login failed
            }
        })
    ],
    pages: {
        signIn: '/admin/login',
    },
    session: {
        strategy: "jwt",
    },
    secret: process.env.NEXTAUTH_SECRET || "fallback_secret_for_development_only",
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
