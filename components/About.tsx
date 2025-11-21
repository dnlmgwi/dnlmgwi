import React from 'react';
import { ArrowRight } from 'iconoir-react';

const SeeMyWorksButton: React.FC<{className?: string; onClick?: () => void; }> = ({ className, onClick }) => (
    <button onClick={onClick} className={`flex items-center gap-2 bg-brand-green hover:brightness-90 transition-all text-black font-semibold py-3 px-6 rounded-full ${className}`}>
        <div className="bg-black/20 rounded-full p-1">
            <ArrowRight color="black" width={20} height={20} />
        </div>
        <span>See my works</span>
    </button>
);

const About: React.FC<{ onSeeWorks: () => void; }> = ({ onSeeWorks }) => {
  return (
    <section className="py-20 md:py-28">
      <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
        <h2 className="text-4xl md:text-5xl font-bold leading-tight" style={{ textWrap: 'balance' }}>
          Crafting Meaningful Brands & Intuitive Digital Experiences That Stand Out
        </h2>
        <p className="mt-6 text-neutral-600 dark:text-neutral-400 max-w-2xl">
          I'm Daniel, a Lilongwe-based Developer & Designer (Brand & UI/UX) passionate about crafting visually compelling identities and seamless digital experiences. With a strategic approach and a keen eye for detail, I help businesses stand out and connect with their audience. Let's create something remarkable together.
        </p>
        <SeeMyWorksButton className="mt-8" onClick={onSeeWorks} />
      </div>
    </section>
  );
};

export default About;