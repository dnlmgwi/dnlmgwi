import React from 'react';
// Fix: Corrected import path for ExperienceItem. The type is exported from siteData.ts, not the empty experienceData.ts file.
import { ExperienceItem } from '../data/siteData';
import { ArrowUpRight } from 'iconoir-react';

interface ExperienceSectionProps {
  title: string;
  items: ExperienceItem[];
}

const ExperienceSection: React.FC<ExperienceSectionProps> = ({ title, items }) => {
  return (
    <section className="mb-16">
      <h2 className="text-3xl font-bold mb-8 border-b border-neutral-200 dark:border-neutral-800 pb-4">{title}</h2>
      <div className="space-y-8">
        {items.map((item, index) => (
          <div key={index} className="grid grid-cols-1 md:grid-cols-4 gap-x-8 gap-y-2">
            <div className="md:col-span-1">
              <span className="text-neutral-500 dark:text-neutral-400 text-sm">{item.date}</span>
            </div>
            <div className="md:col-span-3">
              <h3 className="font-bold text-lg text-neutral-900 dark:text-white">
                {item.href ? (
                  <a href={item.href} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 hover:underline decoration-brand-green underline-offset-2 transition-colors group">
                    <span>{item.title}</span>
                    <ArrowUpRight width={12} height={12} className="inline-block" />
                  </a>
                ) : (
                  item.title
                )}
              </h3>
              {item.subtitle && <p className="text-neutral-500 dark:text-neutral-400 mt-1 text-sm">{item.subtitle}</p>}
              {item.description && <p className="text-neutral-600 dark:text-neutral-300 mt-2 text-base leading-relaxed">{item.description}</p>}
              {item.attachments && item.attachments.length > 0 && (
                <div className="mt-4">
                  <a href={item.href} target="_blank" rel="noopener noreferrer">
                    <img src={item.attachments[0].url} alt={`${item.title} attachment`} className="rounded-lg max-w-[200px] border-2 border-transparent hover:border-brand-green transition-colors" />
                  </a>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExperienceSection;
