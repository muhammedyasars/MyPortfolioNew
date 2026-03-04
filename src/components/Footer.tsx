import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { portfolioData } from '../data/portfolioData';
export function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-dark border-t border-gray-800 py-12 mt-12">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 flex flex-col items-center">
        <div className="text-2xl font-bold text-accent tracking-wider mb-6">
          YASAR
        </div>

        <div className="flex space-x-6 mb-8">
          <a
            href={portfolioData.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-accent transition-colors">

            <FaGithub size={24} />
          </a>
          <a
            href={portfolioData.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-accent transition-colors">

            <FaLinkedin size={24} />
          </a>
          <a
            href={portfolioData.socials.email}
            className="text-gray-400 hover:text-accent transition-colors">

            <FaEnvelope size={24} />
          </a>
        </div>

        <p className="text-gray-500 text-sm text-center">
          &copy; {currentYear} {portfolioData.personal.name}. All rights
          reserved.
        </p>
      </div>
    </footer>);

}