import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
export function Experience() {
  return (
    <section
      id="experience"
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
          Experience
        </h2>
        <div className="w-20 h-1 bg-accent mx-auto rounded-full"></div>
      </motion.div>

      <div className="max-w-4xl mx-auto relative">
        {/* Vertical Line */}
        <div className="absolute left-0 md:left-8 top-0 bottom-0 w-0.5 bg-gray-800"></div>

        <div className="space-y-12">
          {portfolioData.experience.map((exp, index) =>
          <motion.div
            key={index}
            initial={{
              opacity: 0,
              x: -30
            }}
            whileInView={{
              opacity: 1,
              x: 0
            }}
            viewport={{
              once: true,
              margin: '-50px'
            }}
            transition={{
              duration: 0.6,
              delay: index * 0.2
            }}
            className="relative pl-8 md:pl-24">

              {/* Timeline Dot */}
              <div className="absolute left-[-5px] md:left-[27px] top-6 w-3 h-3 rounded-full bg-accent ring-4 ring-dark"></div>

              <div className="bg-dark-card border border-gray-800 rounded-2xl p-6 md:p-8 hover:border-gray-700 transition-colors">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-1">
                      {exp.role}
                    </h3>
                    <h4 className="text-xl text-accent font-medium">
                      {exp.company}
                    </h4>
                  </div>
                  <div className="mt-2 md:mt-0 px-4 py-1.5 bg-dark rounded-full border border-gray-700 text-gray-400 text-sm font-medium inline-block">
                    {exp.period}
                  </div>
                </div>

                <ul className="space-y-3">
                  {exp.responsibilities.map((resp, i) =>
                <li key={i} className="flex items-start text-gray-300">
                      <span className="text-accent mr-3 mt-1.5 text-xs">●</span>
                      <span className="leading-relaxed">{resp}</span>
                    </li>
                )}
                </ul>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>);

}