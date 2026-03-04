import React from 'react';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { portfolioData } from '../data/portfolioData';
export function About() {
  return (
    <section
      id="about"
      className="py-20 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto">

      <motion.div
        initial={{
          opacity: 0,
          y: 30
        }}
        whileInView={{
          opacity: 1,
          y: 0
        }}
        viewport={{
          once: true,
          margin: '-100px'
        }}
        transition={{
          duration: 0.6
        }}
        className="flex flex-col items-center text-center max-w-4xl mx-auto">

        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto rounded-full"></div>
        </div>

        <div className="bg-dark-card border border-gray-800 rounded-2xl p-8 md:p-12 relative overflow-hidden">
          {/* Decorative background element */}
          <div className="absolute -top-24 -right-24 w-48 h-48 bg-accent/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-accent/10 rounded-full blur-3xl"></div>

          <p className="text-gray-300 text-lg md:text-xl leading-relaxed mb-8 relative z-10">
            {portfolioData.personal.about}
          </p>

          <div className="inline-flex items-center space-x-2 bg-dark border border-gray-700 px-6 py-3 rounded-full relative z-10">
            <FaMapMarkerAlt className="text-accent" />
            <span className="text-gray-300 font-medium">
              {portfolioData.personal.location}
            </span>
          </div>
        </div>
      </motion.div>
    </section>);

}