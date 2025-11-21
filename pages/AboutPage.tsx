import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'iconoir-react';

const ContactButton: React.FC<{className?: string; }> = ({ className }) => (
    <Link to="/contact" className={`inline-flex items-center gap-2 bg-brand-green hover:brightness-90 transition-all text-black font-semibold py-3 px-6 rounded-full ${className}`}>
        <div className="bg-black/20 rounded-full p-1">
            <ArrowRight color="black" width={20} height={20} />
        </div>
        <span>Get in Touch</span>
    </Link>
);

const AboutPage: React.FC = () => {
  return (
    <section className="py-20 md:py-32">
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
        <div className="lg:col-span-2">
            <div className="rounded-3xl overflow-hidden aspect-[4/5]">
                <img src="https://i.imgur.com/k2A4V0i.png" alt="Daniel Mgawi" className="w-full h-full object-cover" />
            </div>
        </div>
        <div className="lg:col-span-3">
            <h1 className="text-5xl md:text-6xl font-bold leading-tight" style={{ textWrap: 'balance' }}>
                A Bit About Me
            </h1>
            <div className="mt-8 space-y-4 text-neutral-600 dark:text-neutral-300 text-lg">
                <p>
                    I'm Daniel, a Lilongwe-based Developer & Designer (Brand & UI/UX) with over 8 years of experience in turning complex problems into beautiful, intuitive digital experiences. My passion lies at the intersection of design, technology, and human psychology—crafting interfaces that are not only visually stunning but also deeply user-centric.
                </p>
                <p>
                    From startups to established enterprises, I've helped businesses define their brand identity, connect with their audience, and achieve their goals. My process is collaborative and strategic, ensuring every design decision is backed by research and purpose.
                </p>
                <p>
                    When I'm not designing, you can find me exploring London's art galleries, trying out new coffee shops, or getting lost in a good book.
                </p>
            </div>
            <ContactButton className="mt-10" />
        </div>
      </div>
    </section>
  );
};

export default AboutPage;