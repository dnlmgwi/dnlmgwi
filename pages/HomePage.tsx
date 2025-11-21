import React, { useRef } from 'react';
import VideoHero from '../components/VideoHero';
import Brands from '../components/Brands';
import About from '../components/About';
import Portfolio from '../components/Portfolio';
import Toolkit from '../components/Toolkit';
import { heroVideoConfig } from '../data/siteData';

const HomePage: React.FC = () => {
  const portfolioRef = useRef<HTMLDivElement>(null);

  const handleScrollToPortfolio = () => {
    portfolioRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="flex flex-col flex-grow">
      <VideoHero config={heroVideoConfig} onSeeWorks={handleScrollToPortfolio} />
      <Brands />
      <About onSeeWorks={handleScrollToPortfolio} />
      <Toolkit />
      <div ref={portfolioRef}>
        <Portfolio />
      </div>
    </div>
  );
};

export default HomePage;