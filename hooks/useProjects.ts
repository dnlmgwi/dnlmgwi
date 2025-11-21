import { useState, useEffect } from 'react';
import { pb } from '../lib/pocketbase';
import { portfolioItems, PortfolioItem } from '../data/siteData';

export const useProjects = () => {
    const [projects, setProjects] = useState<PortfolioItem[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const records = await pb.collection('portfolio_items').getFullList();
                setProjects(records as unknown as PortfolioItem[]);
            } catch (err) {
                console.error('Failed to fetch from PocketBase, falling back to local data.', err);
                setProjects(portfolioItems);
            } finally {
                setLoading(false);
            }
        };

        fetchProjects();
    }, []);

    return { projects, loading, error };
};
