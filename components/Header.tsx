import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../contexts/ThemeContext';
import { SunLight, HalfMoon, Menu, Xmark } from 'iconoir-react';

const LogoIcon: React.FC = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="12" fill="#c0ff00"/>
        <path d="M12 7V17M12 7C10.3431 7 9 8.34315 9 10C9 11.6569 12 14 12 14M12 7C13.6569 7 15 8.34315 15 10C15 11.6569 12 14 12 14" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);

const NavMenu: React.FC<{ isOpen: boolean; onClose: () => void; }> = ({ isOpen, onClose }) => {
    const handleNavClick = () => {
        onClose();
    };

    return (
        <div className={`fixed inset-0 bg-zinc-50/80 dark:bg-black/80 backdrop-blur-md z-50 transform transition-transform duration-500 ease-in-out ${isOpen ? 'translate-y-0' : '-translate-y-full'}`}>
            <div className="container mx-auto px-6 sm:px-10 lg:px-16 h-full flex flex-col justify-center items-center">
                <nav className="flex flex-col items-center gap-8">
                    <Link to="/" onClick={handleNavClick} className="text-5xl font-bold text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors duration-300">Home</Link>
                    <Link to="/projects" onClick={handleNavClick} className="text-5xl font-bold text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors duration-300">Projects</Link>
                    <Link to="/experience" onClick={handleNavClick} className="text-5xl font-bold text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors duration-300">Experience</Link>
                    <Link to="/about" onClick={handleNavClick} className="text-5xl font-bold text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors duration-300">About</Link>
                    <Link to="/contact" onClick={handleNavClick} className="text-5xl font-bold text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors duration-300">Contact</Link>
                </nav>
            </div>
        </div>
    );
};


const Header: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { theme, toggleTheme } = useTheme();

    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }

        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isMenuOpen]);

  return (
    <>
    <header className="sticky top-0 md:top-6 z-[60] py-2">
       <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center gap-3 bg-white/70 dark:bg-[#1c1c1c]/70 backdrop-blur-sm border border-neutral-200 dark:border-neutral-700/80 rounded-full py-2 px-4 transition-colors hover:border-neutral-300 dark:hover:border-neutral-600">
            <LogoIcon />
            <span className="font-bold text-lg">Daniel</span>
          </Link>
          <div className="flex items-center gap-2">
            <button onClick={toggleTheme} aria-label="Toggle theme" className="bg-white/70 dark:bg-[#1c1c1c]/70 backdrop-blur-sm border border-neutral-200 dark:border-neutral-700/80 rounded-full p-3 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors">
                {theme === 'light' ? <HalfMoon width={24} height={24} strokeWidth={2} /> : <SunLight width={24} height={24} strokeWidth={2} />}
            </button>
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu" className="bg-white/70 dark:bg-[#1c1c1c]/70 backdrop-blur-sm border border-neutral-200 dark:border-neutral-700/80 rounded-full p-3 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors">
                {isMenuOpen ? <Xmark width={24} height={24} strokeWidth={2} /> : <Menu width={24} height={24} strokeWidth={2} />}
            </button>
          </div>
        </div>
      </div>
    </header>
    <NavMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </>
  );
};

export default Header;