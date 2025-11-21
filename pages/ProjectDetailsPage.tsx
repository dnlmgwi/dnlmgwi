import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useProject } from '../hooks/useProject';
import { ArrowLeft, ArrowUpRight } from 'iconoir-react';
import LazyImage from '../components/LazyImage';

const ProjectDetailsPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { project, loading, error } = useProject(id);

  if (loading) {
    return (
      <div className="flex-grow flex items-center justify-center text-center">
        <p>Loading...</p>
      </div>
    );
  }

  if (error || !project) {
    return (
      <div className="flex-grow flex items-center justify-center text-center">
        <div>
          <h1 className="text-4xl font-bold">Project Not Found</h1>
          <p className="mt-4 text-neutral-500">Sorry, we couldn't find the project you're looking for.</p>
          <Link to="/projects" className="mt-8 inline-block bg-brand-green text-black font-semibold px-6 py-3 rounded-full">
            Back to Projects
          </Link>
        </div>
      </div>
    );
  }

  return (
    <section className="py-20 md:py-24 animate-fade-in">
      <div className="max-w-4xl mx-auto">
        <Link to="/projects" className="flex items-center gap-2 text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors mb-8 group">
          <ArrowLeft width={20} height={20} />
          <span className="group-hover:underline">Back to projects</span>
        </Link>

        <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-2" style={{ textWrap: 'balance' }}>
          {project.title}
        </h1>
        <p className="text-lg text-neutral-500 dark:text-neutral-400 mb-8">{project.category}</p>

        <div className="rounded-3xl overflow-hidden aspect-video mb-12 border border-neutral-200 dark:border-neutral-800">
            <LazyImage 
                src={project.imageUrl} 
                alt={project.title} 
                className="w-full h-full object-cover" 
            />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="md:col-span-2 space-y-4 text-neutral-600 dark:text-neutral-300 text-lg">
                <h2 className="text-2xl font-bold text-neutral-900 dark:text-white border-b border-neutral-200 dark:border-neutral-800 pb-2 mb-4">About the Project</h2>
                <p>{project.description}</p>
                <ul className="list-disc list-inside space-y-2">
                    {project.details.map((detail, index) => (
                        <li key={index}>{detail}</li>
                    ))}
                </ul>
            </div>
            <div className="md:col-span-1 space-y-6">
                <div>
                    <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-3">Technologies Used</h3>
                    <div className="flex flex-wrap gap-2">
                        {project.technologies.map(tech => (
                            <span key={tech} className="bg-white dark:bg-[#1c1c1c] border border-neutral-200 dark:border-neutral-700/80 text-neutral-600 dark:text-neutral-300 text-sm font-medium px-3 py-1 rounded-full">
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>

                {(project.liveUrl || project.sourceUrl) && (
                    <div>
                        <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-3">Links</h3>
                        <div className="space-y-2">
                            {project.liveUrl && (
                                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-neutral-700 dark:text-brand-green hover:text-black dark:hover:brightness-90 font-semibold transition-all">
                                    <span>Live Preview</span>
                                    <ArrowUpRight width={16} height={16} strokeWidth={2} />
                                </a>
                            )}
                             {project.sourceUrl && (
                                <a href={project.sourceUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-neutral-700 dark:text-brand-green hover:text-black dark:hover:brightness-90 font-semibold transition-all">
                                    <span>Source Code</span>
                                    <ArrowUpRight width={16} height={16} strokeWidth={2} />
                                </a>
                            )}
                        </div>
                    </div>
                )}
            </div>
        </div>

        {project.figmaEmbedUrl && (
            <div className="mt-16">
                <h2 className="text-2xl font-bold text-neutral-900 dark:text-white border-b border-neutral-200 dark:border-neutral-800 pb-2 mb-4">Interactive Prototype</h2>
                <div className="aspect-video bg-white dark:bg-[#1c1c1c] rounded-2xl overflow-hidden border border-neutral-200 dark:border-neutral-800 mt-6">
                    <iframe
                        style={{ border: 'none' }}
                        title={`Figma Prototype for ${project.title}`}
                        width="100%"
                        height="100%"
                        src={project.figmaEmbedUrl}
                        allowFullScreen
                    ></iframe>
                </div>
            </div>
        )}
      </div>
    </section>
  );
};

export default ProjectDetailsPage;