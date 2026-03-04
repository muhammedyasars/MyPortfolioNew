'use client';

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
export function Navbar() {
  const [activeSection, setActiveSection] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      // Determine active section
      const sections = portfolioData.navLinks.map((link) => link.href);
      let current = '';
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            current = section;
            break;
          }
        }
      }
      if (current) {
        setActiveSection(current);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const scrollToSection = (id: string) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-dark/90 backdrop-blur-md border-b border-gray-800 py-4' : 'bg-transparent py-6'}`}>

      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 flex justify-between items-center">
        {/* Logo */}
        <div
          className="text-2xl font-bold text-accent cursor-pointer tracking-wider"
          onClick={() => scrollToSection('home')}>

         MUHAMMED YASAR
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          {portfolioData.navLinks.map((link) =>
          <button
            key={link.name}
            onClick={() => scrollToSection(link.href)}
            className={`text-sm font-medium transition-colors hover:text-accent ${activeSection === link.href ? 'text-accent' : 'text-gray-300'}`}>

              {link.name}
            </button>
          )}
        </div>

        {/* Hire Me Button (Desktop) */}
        <div className="hidden md:block">
          <button
            onClick={() => scrollToSection('contact')}
            className="bg-accent hover:bg-orange-600 text-white px-6 py-2 rounded-full font-medium transition-colors">

            Hire Me
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu">

          <div className="w-6 h-5 flex flex-col justify-between">
            <span
              className={`block h-0.5 w-full bg-white transition-transform ${isMobileMenuOpen ? 'rotate-45 translate-y-2.5' : ''}`}>
            </span>
            <span
              className={`block h-0.5 w-full bg-white transition-opacity ${isMobileMenuOpen ? 'opacity-0' : ''}`}>
            </span>
            <span
              className={`block h-0.5 w-full bg-white transition-transform ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}>
            </span>
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen &&
        <motion.div
          initial={{
            opacity: 0,
            height: 0
          }}
          animate={{
            opacity: 1,
            height: 'auto'
          }}
          exit={{
            opacity: 0,
            height: 0
          }}
          className="md:hidden bg-dark-card border-b border-gray-800 overflow-hidden">

            <div className="px-4 py-6 flex flex-col space-y-4">
              {portfolioData.navLinks.map((link) =>
            <button
              key={link.name}
              onClick={() => scrollToSection(link.href)}
              className={`text-left text-lg font-medium py-2 transition-colors ${activeSection === link.href ? 'text-accent' : 'text-gray-300'}`}>

                  {link.name}
                </button>
            )}
              <button
              onClick={() => scrollToSection('contact')}
              className="bg-accent text-white px-6 py-3 rounded-full font-medium w-full mt-4">

                Hire Me
              </button>
            </div>
          </motion.div>
        }
      </AnimatePresence>
    </nav>);

}