"use client";

import { motion } from "framer-motion";

import { useId } from "react";

interface CircularBadgeProps {
    text: string;
    className?: string;
    size?: number;
}

export default function CircularBadge({ text, className = "", size = 160 }: CircularBadgeProps) {
    const radius = size * 0.4;
    const cx = size / 2;
    const cy = size / 2;
    const pathId = useId();

    return (
        <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className={`relative flex items-center justify-center select-none ${className}`}
            style={{ width: size, height: size }}
        >
            <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} className="absolute inset-0 pointer-events-none overflow-visible">
                <path
                    id={pathId}
                    d={`
                        M ${cx}, ${cy}
                        m -${radius}, 0
                        a ${radius},${radius} 0 1,1 ${radius * 2},0
                        a ${radius},${radius} 0 1,1 -${radius * 2},0
                    `}
                    fill="none"
                    stroke="none"
                />
                <text className="font-heading uppercase tracking-widest text-[16px] fill-current">
                    <textPath href={`#${pathId}`} startOffset="0%">
                        {text}
                    </textPath>
                </text>
            </svg>
        </motion.div>
    );
}
