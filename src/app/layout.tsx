import type { Metadata } from "next";
import { Outfit, Bowlby_One_SC } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Providers } from "@/components/Providers";

const outfit = Outfit({ subsets: ["latin"], variable: "--font-body" });
const bowlby = Bowlby_One_SC({ subsets: ["latin"], weight: "400", variable: "--font-heading" });

export const metadata: Metadata = {
  title: "WebX | Creative Digital Agency",
  description: "Websites & Automations That Grow Your Business",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={cn(outfit.variable, bowlby.variable, "antialiased bg-background text-foreground selection:bg-warning selection:text-foreground")}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
