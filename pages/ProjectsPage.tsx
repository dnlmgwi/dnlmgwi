import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { useProjects } from '../hooks/useProjects';
import { PortfolioItem as PortfolioItemType } from '../data/siteData';
import LazyImage from '../components/LazyImage';

const PortfolioItem: React.FC<{ item: PortfolioItemType; }> = ({ item }) => (
    <Link to={`/project/${item.id}`} className="group rounded-3xl overflow-hidden aspect-[4/5] block relative">
        <LazyImage 
            src={item.imageUrl} 
            alt={item.title} 
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 absolute inset-0" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/10"></div>
        <div className="absolute bottom-6 left-6 text-white z-20">
            <p className="text-brand-green font-semibold text-sm mb-1">{item.year}</p>
            <h3 className="text-2xl font-bold transition-transform duration-300 group-hover:-translate-y-1">{item.title}</h3>
            <p className="text-neutral-300 text-sm">{item.category}</p>
        </div>
    </Link>
);


const ProjectsPage: React.FC = () => {
  const { projects, loading, error } = useProjects();
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = useMemo(() => {
    const allCategories = projects.map(item => item.category);
    return ['All', ...Array.from(new Set(allCategories))];
  }, [projects]);

  const filteredItems = useMemo(() => {
    if (activeCategory === 'All') {
      return projects;
    }
    return projects.filter(item => item.category === activeCategory);
  }, [activeCategory, projects]);

  if (loading) {
    return (
      <div className="flex-grow flex items-center justify-center text-center">
        <p>Loading...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex-grow flex items-center justify-center text-center">
        <p>Error fetching projects.</p>
      </div>
    );
  }

  return (
    <section className="py-20 md:py-24">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-5xl md:text-6xl font-bold leading-tight" style={{ textWrap: 'balance' }}>
          My Work
        </h1>
        <p className="mt-6 text-neutral-600 dark:text-neutral-400 text-lg max-w-2xl mx-auto">
          Here's a selection of my projects. I've worked on branding, UI/UX, and web design for a variety of clients.
        </p>
      </div>

      <div className="flex justify-center flex-wrap gap-3 my-12">
        {categories.map(category => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-5 py-2 text-sm font-semibold rounded-full transition-colors ${
              activeCategory === category
                ? 'bg-brand-green text-black'
                : 'bg-white dark:bg-[#1c1c1c] text-neutral-600 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredItems.map(item => (
          <PortfolioItem key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
};

export default ProjectsPage;