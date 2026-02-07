'use client';

import { useState, useEffect } from 'react';
import { profileConfig } from '@/config/profile';
import ThemeToggle from './ThemeToggle';

export default function Header() {
  const [activeSection, setActiveSection] = useState<string>('me');

  // Track which section is currently visible
  useEffect(() => {
    const sections = ['me', 'projects', 'skills', 'contact'];

    const updateActiveSection = () => {
      // Find which section is currently most visible
      let currentSection = 'me';
      const scrollPosition = window.scrollY + window.innerHeight / 3; // Check at 1/3 from top

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const { top } = element.getBoundingClientRect();
          const absoluteTop = top + window.scrollY;

          if (scrollPosition >= absoluteTop) {
            currentSection = sectionId;
          }
        }
      }

      setActiveSection(currentSection);
    };

    // Update on mount and scroll
    updateActiveSection();
    window.addEventListener('scroll', updateActiveSection);

    return () => {
      window.removeEventListener('scroll', updateActiveSection);
    };
  }, []);

  // Smooth scroll handler for navigation links
  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-foreground/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo/Brand - Top Left */}
          <div className="flex-shrink-0">
            <a
              href="#"
              className="text-xl font-bold text-foreground hover:text-foreground/80 transition-colors duration-200"
            >
              {profileConfig.name.split(' ')[0]}
              <span className="text-blue-500">.</span>
            </a>
          </div>

          {/* Navigation Links - Center/Right */}
          <nav className="hidden md:flex items-center space-x-8">
            <a
              href="#me"
              onClick={(e) => handleSmoothScroll(e, 'me')}
              className={`transition-colors duration-200 text-sm font-medium ${
                activeSection === 'me'
                  ? 'text-blue-600 dark:text-blue-400 font-semibold'
                  : 'text-foreground/70 hover:text-foreground'
              }`}
            >
              Me
            </a>
            <a
              href="#projects"
              onClick={(e) => handleSmoothScroll(e, 'projects')}
              className={`transition-colors duration-200 text-sm font-medium ${
                activeSection === 'projects'
                  ? 'text-blue-600 dark:text-blue-400 font-semibold'
                  : 'text-foreground/70 hover:text-foreground'
              }`}
            >
              Projects
            </a>
            <a
              href="#skills"
              onClick={(e) => handleSmoothScroll(e, 'skills')}
              className={`transition-colors duration-200 text-sm font-medium ${
                activeSection === 'skills'
                  ? 'text-blue-600 dark:text-blue-400 font-semibold'
                  : 'text-foreground/70 hover:text-foreground'
              }`}
            >
              Skills
            </a>
            <a
              href="#contact"
              onClick={(e) => handleSmoothScroll(e, 'contact')}
              className={`transition-colors duration-200 text-sm font-medium ${
                activeSection === 'contact'
                  ? 'text-blue-600 dark:text-blue-400 font-semibold'
                  : 'text-foreground/70 hover:text-foreground'
              }`}
            >
              Contact
            </a>
          </nav>

          {/* CTA Button and Theme Toggle - Right */}
          <div className="flex items-center space-x-4">
            <a
              href="#contact"
              onClick={(e) => handleSmoothScroll(e, 'contact')}
              className="hidden sm:inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors duration-200"
            >
              Looking for talent?
            </a>

            {/* Theme Toggle Button */}
            <ThemeToggle />

            {/* Mobile Menu Button (placeholder for future feature) */}
            <button
              className="md:hidden p-2 text-foreground/70 hover:text-foreground transition-colors duration-200"
              aria-label="Open menu"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
