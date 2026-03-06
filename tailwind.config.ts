import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "var(--background)",     // Warm Off-White
                foreground: "var(--foreground)",     // Deep Eggplant / Dark text
                "surface-dark": "var(--surface-dark)", // Deep Eggplant background
                "surface-light": "var(--surface-light)", // Light text
                border: "var(--border)",
                accent: "var(--accent)",             // Teal
                warning: "var(--warning)",           // Sunshine Yellow
                danger: "var(--danger)",             // Coral
            },
            fontFamily: {
                sans: ["var(--font-body)", "sans-serif"],
                heading: ["var(--font-heading)", "sans-serif"],
            },
            spacing: {
                "section": "160px",
                "section-sm": "100px",
            },
            borderRadius: {
                '4xl': '2rem',
                '5xl': '3rem',
                'pill': '9999px',
            },
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'chicken-wire': 'url("data:image/svg+xml,%3Csvg width=\'40\' height=\'40\' viewBox=\'0 0 40 40\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M20 20.5V18H0v-2h20v-2H0v-2h20v-2H0V8h20V6H0V4h20V2H0V0h22v20h18v-2h-18v-2h18v-2h-18v-2h18V8h-18V6h18V4h-18V2h18V0H22v20.5zM0 22h20v2H0v-2zm0 4h20v2H0v-2zm0 4h20v2H0v-2zm0 4h20v2H0v-2zm0 4h20v2H0v-2zm22-16h18v2h-18v-2zm0 4h18v2h-18v-2zm0 4h18v2h-18v-2zm0 4h18v2h-18v-2zm0 4h18v2h-18v-2z\' fill=\'%23000000\' fill-opacity=\'0.03\' fill-rule=\'evenodd\'/%3E%3C/svg%3E")',
            },
            animation: {
                'ticker': 'ticker 30s linear infinite',
                'blob-float': 'blob-float 8s ease-in-out infinite alternate',
                'spin-slow': 'spin 12s linear infinite',
                'bounce-soft': 'bounce-soft 2s infinite',
            },
            keyframes: {
                ticker: {
                    '0%': { transform: 'translateX(0)' },
                    '100%': { transform: 'translateX(-50%)' },
                },
                'blob-float': {
                    '0%': { transform: 'translate(0px, 0px) scale(1)' },
                    '33%': { transform: 'translate(30px, -50px) scale(1.1)' },
                    '66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
                    '100%': { transform: 'translate(0px, 0px) scale(1)' },
                },
                'bounce-soft': {
                    '0%, 100%': {
                        transform: 'translateY(-5%)',
                        animationTimingFunction: 'cubic-bezier(0.8, 0, 1, 1)',
                    },
                    '50%': {
                        transform: 'translateY(0)',
                        animationTimingFunction: 'cubic-bezier(0, 0, 0.2, 1)',
                    }
                }
            }
        },
    },
    plugins: [],
};
export default config;
