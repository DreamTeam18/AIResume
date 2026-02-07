'use client';

import { useState, useEffect } from 'react';
import { profileConfig } from '@/config/profile';
import ThemeToggle from './ThemeToggle';
import { Star, X } from 'lucide-react';

export default function Header() {
  const [activeSection, setActiveSection] = useState<string>('me');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Track which section is currently visible
  useEffect(() => {
    const sections = ['me', 'projects', 'skills', 'contact'];

    const updateActiveSection = () => {
      // Find which section is currently most visible
      let currentSection = 'me';
      const scrollPosition = window.scrollY + window.innerHeight / 3; // Check at 1/3 from top

      // Special case: if we're near the bottom of the page, activate the last section
      const isNearBottom = window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 50;
      if (isNearBottom) {
        currentSection = sections[sections.length - 1];
      } else {
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
    // Close mobile menu after navigation
    setIsMobileMenuOpen(false);
  };

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      const mobileMenu = document.getElementById('mobile-menu');
      const hamburgerButton = document.getElementById('hamburger-button');

      if (isMobileMenuOpen && mobileMenu && hamburgerButton) {
        if (!mobileMenu.contains(target) && !hamburgerButton.contains(target)) {
          setIsMobileMenuOpen(false);
        }
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMobileMenuOpen]);

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

          {/* CTA Button, Star Icon, and Theme Toggle - Right */}
          <div className="flex items-center space-x-4">
            <a
              href="#contact"
              onClick={(e) => handleSmoothScroll(e, 'contact')}
              className="hidden sm:inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors duration-200"
            >
              Looking for talent?
            </a>

            {/* Star/Bookmark Icon */}
            <button
              className="p-2 text-foreground/70 hover:text-yellow-500 transition-colors duration-200"
              aria-label="Bookmark this page"
            >
              <Star className="w-5 h-5" />
            </button>

            {/* Theme Toggle Button */}
            <ThemeToggle />

            {/* Mobile Menu Button */}
            <button
              id="hamburger-button"
              onClick={toggleMobileMenu}
              className="md:hidden p-2 text-foreground/70 hover:text-foreground transition-colors duration-200"
              aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
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

      {/* Mobile Menu Panel - Slides in from right */}
      <div
        id="mobile-menu"
        className={`fixed top-0 right-0 h-full w-64 bg-background border-l border-foreground/10 shadow-2xl md:hidden transform transition-transform duration-300 ease-in-out z-50 ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Close Button */}
          <div className="flex justify-end p-4 border-b border-foreground/10">
            <button
              onClick={toggleMobileMenu}
              className="p-2 text-foreground/70 hover:text-foreground transition-colors duration-200"
              aria-label="Close menu"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-col space-y-1 p-4">
            <a
              href="#me"
              onClick={(e) => handleSmoothScroll(e, 'me')}
              className={`px-4 py-3 text-base font-medium rounded-lg transition-colors duration-200 ${
                activeSection === 'me'
                  ? 'bg-blue-600 text-white'
                  : 'text-foreground/70 hover:text-foreground hover:bg-foreground/5'
              }`}
            >
              Me
            </a>
            <a
              href="#projects"
              onClick={(e) => handleSmoothScroll(e, 'projects')}
              className={`px-4 py-3 text-base font-medium rounded-lg transition-colors duration-200 ${
                activeSection === 'projects'
                  ? 'bg-blue-600 text-white'
                  : 'text-foreground/70 hover:text-foreground hover:bg-foreground/5'
              }`}
            >
              Projects
            </a>
            <a
              href="#skills"
              onClick={(e) => handleSmoothScroll(e, 'skills')}
              className={`px-4 py-3 text-base font-medium rounded-lg transition-colors duration-200 ${
                activeSection === 'skills'
                  ? 'bg-blue-600 text-white'
                  : 'text-foreground/70 hover:text-foreground hover:bg-foreground/5'
              }`}
            >
              Skills
            </a>
            <a
              href="#contact"
              onClick={(e) => handleSmoothScroll(e, 'contact')}
              className={`px-4 py-3 text-base font-medium rounded-lg transition-colors duration-200 ${
                activeSection === 'contact'
                  ? 'bg-blue-600 text-white'
                  : 'text-foreground/70 hover:text-foreground hover:bg-foreground/5'
              }`}
            >
              Contact
            </a>
          </nav>

          {/* CTA Button in Mobile Menu */}
          <div className="px-4 mt-auto mb-4">
            <a
              href="#contact"
              onClick={(e) => handleSmoothScroll(e, 'contact')}
              className="block w-full text-center px-4 py-3 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors duration-200"
            >
              Looking for talent?
            </a>
          </div>
        </div>
      </div>

      {/* Overlay - Darkens background when mobile menu is open */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 md:hidden z-40 transition-opacity duration-300"
          onClick={toggleMobileMenu}
          aria-hidden="true"
        />
      )}
    </header>
  );
}
