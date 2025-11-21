import { socialLinks } from '@/data/siteData';
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-8 mt-16 border-t border-neutral-200 dark:border-neutral-800">
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
        <p className="text-neutral-500 dark:text-neutral-500 text-sm">
          © {new Date().getFullYear()} Daniel Mgawi. All rights reserved.
        </p>
        <div className="flex items-center gap-4">
          {socialLinks.filter(link => link.href).map(link => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;