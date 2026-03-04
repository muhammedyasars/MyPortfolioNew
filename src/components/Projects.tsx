import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
export function Projects() {
  return (
    <section
      id="projects"
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
        className="mb-16 text-center">

        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Featured Projects
        </h2>
        <div className="w-20 h-1 bg-accent mx-auto rounded-full"></div>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {portfolioData.projects.map((project, index) =>
        <motion.div
          key={index}
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
            margin: '-50px'
          }}
          transition={{
            duration: 0.6,
            delay: index * 0.2
          }}
          className="bg-dark-card border border-gray-800 rounded-2xl p-8 hover:border-accent transition-all duration-300 group flex flex-col h-full">

            <h3 className="text-2xl font-bold text-white mb-6 group-hover:text-accent transition-colors">
              {project.name}
            </h3>

            <div className="flex flex-wrap gap-2 mb-8">
              {project.techStack.map((tech, i) =>
            <span
              key={i}
              className="bg-accent/10 text-accent px-3 py-1 rounded-full text-sm font-medium border border-accent/20">

                  {tech}
                </span>
            )}
            </div>

            <div className="flex-grow">
              <h4 className="text-gray-400 font-medium mb-4 uppercase tracking-wider text-sm">
                Key Features
              </h4>
              <ul className="space-y-3">
                {project.features.map((feature, i) =>
              <li key={i} className="flex items-start text-gray-300">
                    <svg
                  className="w-5 h-5 text-accent mr-3 mt-0.5 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24">

                      <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7">
                  </path>
                    </svg>
                    <span>{feature}</span>
                  </li>
              )}
              </ul>
            </div>
          </motion.div>
        )}
      </div>
    </section>);

}