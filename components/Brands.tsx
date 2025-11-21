import React from 'react';
import InfiniteScroller from './InfiniteScroller';
import { brands } from '../data/siteData';

const Brands: React.FC = () => {
    const brandItems = brands.map(brand => ({
        name: brand.name,
        imageUrl: brand.imageUrl,
    }));

    return (
        <section className="py-8" aria-labelledby="brands-heading">
            <h2 id="brands-heading" className="sr-only">Brands I've worked with</h2>
            <InfiniteScroller
                items={brandItems}
                title="Brands I've Worked With"
                variant="default"
            />
        </section>
    );
};

export default Brands;