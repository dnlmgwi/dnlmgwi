import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useProjects } from '../hooks/useProjects';

const PortfolioItem: React.FC<{ id: number; imageUrl: string; title: string; year: string; category: string; }> = ({ id, imageUrl, title, year, category }) => (
    <Link to={`/project/${id}`} className="group rounded-3xl overflow-hidden aspect-[4/5] block relative">
        <img src={imageUrl} alt={title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/10"></div>
        <div className="absolute bottom-6 left-6 text-white">
            <p className="text-brand-green font-semibold text-sm mb-1">{year}</p>
            <h3 className="text-2xl font-bold transition-transform duration-300 group-hover:-translate-y-1">{title}</h3>
            <p className="text-neutral-300 text-sm">{category}</p>
        </div>
    </Link>
);

const PROJECTS_TO_SHOW = 3;

const Portfolio: React.FC = () => {
    const { projects, loading, error } = useProjects();
    const [visibleCount, setVisibleCount] = useState(PROJECTS_TO_SHOW);

    const visibleItems = projects.slice(0, visibleCount);
    const hasMore = visibleCount < projects.length;

    const handleLoadMore = () => {
        setVisibleCount(prevCount => prevCount + PROJECTS_TO_SHOW);
    };

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
        <section className="py-16">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {visibleItems.map((item) => (
                    <PortfolioItem 
                        key={item.id} 
                        id={item.id} 
                        imageUrl={item.imageUrl} 
                        title={item.title} 
                        year={item.year}
                        category={item.category}
                    />
                ))}
            </div>
            {(hasMore || projects.length > PROJECTS_TO_SHOW) && (
                <div className="mt-12 flex flex-col sm:flex-row justify-center items-center gap-4">
                    {hasMore && (
                         <button 
                            onClick={handleLoadMore}
                            className="bg-white dark:bg-[#1c1c1c] border border-neutral-200 dark:border-neutral-700/80 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors text-neutral-900 dark:text-white font-semibold py-3 px-6 rounded-full"
                        >
                            Load More
                        </button>
                    )}
                    <Link 
                        to="/projects"
                        className="flex items-center justify-center gap-2 bg-brand-green hover:brightness-90 transition-all text-black font-semibold py-3 px-6 rounded-full"
                    >
                        View All Projects
                    </Link>
                </div>
            )}
        </section>
    );
};

export default Portfolio;