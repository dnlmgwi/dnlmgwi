import React from 'react';
import ExperienceSection from '../components/ExperienceSection';
import { 
    contactLinks, 
    workExperience, 
    sideProjects,
    speaking,
    volunteering,
    education,
    awards,
    features,
    certifications,
    LinkItem
} from '../data/siteData';
import { ArrowUpRight } from 'iconoir-react';

const ContactLinkItem: React.FC<{item: LinkItem}> = ({ item }) => (
    <div className="grid grid-cols-3 gap-4 items-baseline">
        <span className="text-neutral-500 dark:text-neutral-400 text-sm col-span-1">{item.label}</span>
        <div className="col-span-2">
            <a href={item.href} target="_blank" rel="noopener noreferrer" className="font-semibold text-neutral-900 dark:text-white inline-flex items-center gap-2 hover:underline decoration-brand-green underline-offset-2 transition-colors break-all group">
                <span>{item.value}</span>
                <ArrowUpRight width={12} height={12} className="inline-block" />
            </a>
        </div>
    </div>
);


const ExperiencePage: React.FC = () => {
    return (
        <div className="py-20 md:py-24">
            <div className="max-w-4xl mx-auto">
                 <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-16 text-center" style={{ textWrap: 'balance' }}>
                    My Journey & Experience
                </h1>

                <section className="mb-16">
                    <h2 className="text-3xl font-bold mb-8 border-b border-neutral-200 dark:border-neutral-800 pb-4">Contact</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
                        {contactLinks.map(link => (
                            <ContactLinkItem key={link.label} item={link} />
                        ))}
                    </div>
                </section>
                
                <ExperienceSection title="Work Experience" items={workExperience} />
                <ExperienceSection title="Side Projects" items={sideProjects} />
                <ExperienceSection title="Speaking" items={speaking} />
                <ExperienceSection title="Volunteering" items={volunteering} />
                <ExperienceSection title="Education" items={education} />
                <ExperienceSection title="Awards" items={awards} />
                <ExperienceSection title="Features" items={features} />
                <ExperienceSection title="Certifications" items={certifications} />
            </div>
        </div>
    );
};

export default ExperiencePage;