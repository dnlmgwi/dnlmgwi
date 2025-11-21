import React from 'react';
import { motion } from 'framer-motion';

interface ScrollerItem {
  name: string;
  year?: string;
  handle?: string;
  imageUrl?: string;
}

interface InfiniteScrollerProps {
  items: ScrollerItem[];
  title?: string;
  variant?: 'default' | 'overlay';
  className?: string;
  speed?: 'slow' | 'normal' | 'fast';
}

const InfiniteScroller: React.FC<InfiniteScrollerProps> = ({
  items,
  title,
  variant = 'default',
  className = '',
  speed = 'normal',
}) => {
  const isOverlay = variant === 'overlay';

  const speedConfig = {
    slow: 60,
    normal: 40,
    fast: 20,
  };

  const animationDuration = speedConfig[speed];

  const containerClasses = `w-full ${!isOverlay
    ? 'mt-12 border-neutral-200 dark:border-neutral-700'
    : 'absolute bottom-0 left-0 py-8 bg-gradient-to-t from-neutral-900/80 to-transparent'
    } ${className}`;

  const titleClasses = `text-xl font-light mb-6 tracking-wider text-center ${!isOverlay
    ? 'text-neutral-800 dark:text-neutral-200'
    : 'text-white/70'
    }`;

  const itemTextClasses = `text-lg font-medium tracking-wider ${!isOverlay
    ? 'text-neutral-700 dark:text-neutral-300'
    : 'text-white'
    }`;

  const subTextClasses = `text-xs mt-1 ${!isOverlay
    ? 'text-neutral-500 dark:text-neutral-400'
    : 'text-white/70'
    }`;

  const renderItem = (item: ScrollerItem, index: number | string) => {
    return (
      <div key={index} className="flex-shrink-0 flex items-center justify-center">
        {item.imageUrl ? (
          <img
            src={item.imageUrl}
            alt={item.name}
            className="h-24 w-auto object-contain opacity-50 hover:opacity-100 transition-opacity duration-300 grayscale hover:grayscale-0"
            loading="lazy"
          />
        ) : (
          <div className="text-center">
            <div className={itemTextClasses}>
              {item.name}
            </div>
            {item.year && (
              <div className={subTextClasses}>
                {item.year}
              </div>
            )}
            {item.handle && (
              <div className={subTextClasses}>
                {item.handle}
              </div>
            )}
          </div>
        )}
      </div>
    );
  };

  const scrollerVariants = {
    animate: {
      x: ['0%', '-100%'],
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

  return (
    <div className={containerClasses}>
      {title && <h2 className={titleClasses}>{title}</h2>}

      <div className="relative w-full overflow-hidden flex">
        <div
          className={`absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none ${!isOverlay
              ? 'bg-gradient-to-r from-zinc-50 dark:from-[#111111] to-transparent'
              : 'bg-gradient-to-r from-neutral-900/80 to-transparent'
            }`}
        />
        <div
          className={`absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none ${!isOverlay
              ? 'bg-gradient-to-l from-zinc-50 dark:from-[#111111] to-transparent'
              : 'bg-gradient-to-l from-neutral-900/80 to-transparent'
            }`}
        />
        <motion.div
          className="flex flex-none gap-x-16 pr-16"
          variants={scrollerVariants}
          animate="animate"
        >
          {items.map((item, index) => renderItem(item, index))}
        </motion.div>
        <motion.div
          className="flex flex-none gap-x-16 pr-16"
          variants={scrollerVariants}
          animate="animate"
        >
          {items.map((item, index) => renderItem(item, `duplicate-${index}`))}
        </motion.div>
      </div>
    </div>
  );
};

export default InfiniteScroller;
