"use client";

import React from 'react';
import { motion } from 'framer-motion';

const Logo = ({
    className = "",
    color = "dynamic",
    inline = false,
    text = "DURKKAS",
    animate = true
}: {
    className?: string,
    color?: "dynamic" | "white",
    inline?: boolean,
    text?: string,
    animate?: boolean
}) => {
    const [isMounted, setIsMounted] = React.useState(false);

    React.useEffect(() => {
        setIsMounted(true);
    }, []);

    // Zoho / Google Style: Bold, Rounded, Primary Colors
    const colors = ['#1A73E8', '#EA4335', '#FBBC04', '#1A73E8', '#1A73E8', '#EA4335', '#FBBC04'];

    const letters = text.split('').map((char, index) => ({
        char,
        color: colors[index % colors.length]
    }));

    const content = (
        <span className={`flex-shrink-0 font-bold tracking-tight select-none ${className} ${!inline ? 'hover:scale-[1.02] active:scale-95 transition-transform' : ''}`}>
            {letters.map((item, index) => (
                <motion.span
                    key={index}
                    initial={(animate && isMounted) ? { opacity: 0, scale: 0.8 } : { opacity: 1, scale: 1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={(animate && isMounted) ? {
                        duration: 0.3,
                        delay: index * 0.1,
                        ease: "easeOut"
                    } : {}}
                    style={{ color: color === "white" ? "white" : item.color, display: "inline-block" }}
                >
                    {item.char}
                </motion.span>
            ))}
        </span>
    );

    if (inline) {
        return content;
    }

    return (
        <a href="/" className="inline-flex items-center">
            {content}
        </a>
    );
};

export default Logo;
