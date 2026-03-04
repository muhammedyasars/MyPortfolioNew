import React, { Children } from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
const containerVariants = {
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};
const itemVariants = {
  hidden: {
    opacity: 0,
    y: 20
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5
    }
  }
};
export function Skills() {
  return (
    <section
      id="skills"
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
          My Skills
        </h2>
        <div className="w-20 h-1 bg-accent mx-auto rounded-full"></div>
      </motion.div>

      <div className="space-y-16">
        {portfolioData.skills.map((category, categoryIndex) =>
        <motion.div
          key={categoryIndex}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            margin: '-50px'
          }}
          variants={containerVariants}
          className="flex flex-col">

            <div className="flex items-center space-x-3 mb-6">
              <category.icon className="text-accent text-2xl" />
              <h3 className="text-2xl font-semibold text-white">
                {category.category}
              </h3>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {category.items.map((skill, skillIndex) =>
            <motion.div
              key={skillIndex}
              variants={itemVariants}
              className="bg-dark-card border border-gray-800 rounded-xl p-4 flex items-center space-x-4 hover:border-accent hover:scale-[1.02] transition-all duration-300 group cursor-default">

                  <div className="w-10 h-10 rounded-lg bg-dark flex items-center justify-center text-gray-400 group-hover:text-accent transition-colors">
                    <skill.icon size={20} />
                  </div>
                  <span className="text-gray-300 font-medium group-hover:text-white transition-colors">
                    {skill.name}
                  </span>
                </motion.div>
            )}
            </div>
          </motion.div>
        )}
      </div>
    </section>);

}