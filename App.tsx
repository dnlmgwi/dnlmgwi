import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import ProjectsPage from './pages/ProjectsPage';
import ProjectDetailsPage from './pages/ProjectDetailsPage';
import ExperiencePage from './pages/ExperiencePage';

const App: React.FC = () => {
  return (
    <Router>
      <div className="bg-zinc-50 dark:bg-[#111111] text-neutral-900 dark:text-white min-h-screen flex flex-col transition-colors duration-300">
        <Header />
        <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 w-full flex-grow flex flex-col">
          <main className="flex-grow flex flex-col">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/experience" element={<ExperiencePage />} />
              <Route path="/projects" element={<ProjectsPage />} />
              <Route path="/project/:id" element={<ProjectDetailsPage />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </div>
    </Router>
  );
};

export default App;