import { useState, useEffect } from 'react';
import { pb } from '../lib/pocketbase';
import { portfolioItems, PortfolioItem } from '../data/siteData';

export const useProject = (id: string | undefined) => {
    const [project, setProject] = useState<PortfolioItem | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
        const fetchProject = async () => {
            if (!id) {
                setLoading(false);
                return;
            }

            try {
                const record = await pb.collection('portfolio_items').getOne(id);
                setProject(record as unknown as PortfolioItem);
            } catch (err) {
                console.error('Failed to fetch from PocketBase, falling back to local data.', err);
                const localProject = portfolioItems.find(p => p.id === Number(id));
                if (localProject) {
                    setProject(localProject);
                } else {
                    setError(new Error('Project not found'));
                }
            } finally {
                setLoading(false);
            }
        };

        fetchProject();
    }, [id]);

    return { project, loading, error };
};
