import React from 'react';
import { motion } from 'framer-motion';
import { toolkitItems } from '../data/siteData';

const Toolkit: React.FC = () => {
    const animationDuration = 80; // Slower speed

    const scrollerVariants = {
        animate: {
            x: [0, -180 * toolkitItems.length], // Adjusted for wider items
            transition: {
                x: {
                    repeat: Infinity,
                    repeatType: "loop",
                    duration: animationDuration,
                    ease: "linear",
                },
            },
        },
    };

    const renderItem = (item: typeof toolkitItems[0], index: number | string) => (
        <div key={index} className="flex-shrink-0">
            <div className="bg-white dark:bg-[#1c1c1c] border border-neutral-200 dark:border-neutral-800 rounded-2xl p-6 flex flex-col items-center justify-center gap-4 w-36 h-36 transition-all duration-300 hover:border-brand-green/50 dark:hover:border-brand-green/50 hover:bg-neutral-100 dark:hover:bg-[#222222] hover:-translate-y-1">
                <div className="w-16 h-16 flex items-center justify-center text-neutral-700 dark:text-neutral-300">
                    {item.icon}
                </div>
                <span className="font-semibold text-neutral-800 dark:text-neutral-200 text-center text-xs">{item.name}</span>
            </div>
        </div>
    );

    return (
        <section className="py-20 md:py-28">
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-4xl md:text-5xl font-bold leading-tight" style={{ textWrap: 'balance' }}>
                    My Digital Toolkit
                </h2>
                <p className="mt-6 text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
                    A collection of the primary technologies, frameworks, and tools I use to design and build modern, high-performance web applications.
                </p>
            </div>

            <div className="relative w-full overflow-hidden mt-16 min-h-fit">
                <div className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none bg-gradient-to-r from-zinc-50 dark:from-[#111111] to-transparent" />
                <div className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none bg-gradient-to-l from-zinc-50 dark:from-[#111111] to-transparent" />

                <motion.div
                    className="flex flex-none gap-x-8 pr-8"
                    variants={scrollerVariants}
                    animate="animate"
                >
                    {toolkitItems.map((item, index) => renderItem(item, index))}
                    {toolkitItems.map((item, index) => renderItem(item, `duplicate-${index}`))}
                </motion.div>
            </div>
        </section>
    );
}

export default Toolkit;