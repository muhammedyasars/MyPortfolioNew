'use client';

import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
function AnimatedCounter({ value }: {value: number;}) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: '-50px'
  });
  useEffect(() => {
    if (isInView) {
      let start = 0;
      const duration = 2000; // 2 seconds
      const increment = value / (duration / 16); // 60fps
      const timer = setInterval(() => {
        start += increment;
        if (start >= value) {
          setCount(value);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);
      return () => clearInterval(timer);
    }
  }, [isInView, value]);
  return <span ref={ref}>{count}</span>;
}
export function Stats() {
  return (
    <section className="py-12 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {portfolioData.stats.map((stat, index) =>
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
            delay: index * 0.1
          }}
          className="bg-dark-card border border-gray-800 rounded-xl p-8 flex flex-col items-center justify-center text-center hover:border-gray-700 transition-colors">

            <div className="text-4xl md:text-5xl font-bold text-accent mb-2 flex items-center">
              <AnimatedCounter value={stat.value} />
              <span>+</span>
            </div>
            <div className="text-gray-400 font-medium">{stat.label}</div>
          </motion.div>
        )}
      </div>
    </section>);

}