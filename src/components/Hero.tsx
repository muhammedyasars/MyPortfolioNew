import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaDownload } from 'react-icons/fa';
import { portfolioData } from '../data/portfolioData';
import profileImage from '../assets/profile-image.png';
export function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  return (
    <section
      id="home"
      className="min-h-screen flex items-center pt-20 pb-12 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto overflow-hidden">

      <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
        {/* Left Content */}
        <motion.div
          initial={{
            opacity: 0,
            x: -50
          }}
          animate={{
            opacity: 1,
            x: 0
          }}
          transition={{
            duration: 0.8,
            staggerChildren: 0.2
          }}
          className="flex flex-col space-y-6 z-10">

          <motion.p
            initial={{
              opacity: 0,
              y: 20
            }}
            animate={{
              opacity: 1,
              y: 0
            }}
            className="text-gray-400 text-lg">

            Hi I am
          </motion.p>

          <motion.h1
            initial={{
              opacity: 0,
              y: 20
            }}
            animate={{
              opacity: 1,
              y: 0
            }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">

            {portfolioData.personal.name}
          </motion.h1>

          <motion.h2
            initial={{
              opacity: 0,
              y: 20
            }}
            animate={{
              opacity: 1,
              y: 0
            }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-accent to-orange-300 bg-clip-text text-transparent pb-2">

            {portfolioData.personal.role}
          </motion.h2>

          <motion.div
            initial={{
              opacity: 0,
              y: 20
            }}
            animate={{
              opacity: 1,
              y: 0
            }}
            className="flex space-x-4 pt-4">

            <a
              href={portfolioData.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full border border-gray-600 flex items-center justify-center text-gray-300 hover:text-accent hover:border-accent transition-colors">

              <FaGithub size={18} />
            </a>
            <a
              href={portfolioData.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full border border-gray-600 flex items-center justify-center text-gray-300 hover:text-accent hover:border-accent transition-colors">

              <FaLinkedin size={18} />
            </a>
            <a
              href={portfolioData.socials.email}
              className="w-10 h-10 rounded-full border border-gray-600 flex items-center justify-center text-gray-300 hover:text-accent hover:border-accent transition-colors">

              <FaEnvelope size={18} />
            </a>
          </motion.div>

          <motion.div
            initial={{
              opacity: 0,
              y: 20
            }}
            animate={{
              opacity: 1,
              y: 0
            }}
            className="flex flex-wrap gap-4 pt-6">

            <button
              onClick={scrollToContact}
              className="bg-accent hover:bg-orange-600 text-white px-8 py-3 rounded-full font-medium transition-colors flex items-center gap-2">

              Hire Me
            </button>
            <a
              href="/Muhammed-Yasar-S-CV.pdf"
              download="Muhammed-Yasar-S-CV.pdf"
              className="border border-gray-500 hover:border-accent text-white px-8 py-3 rounded-full font-medium transition-colors flex items-center gap-2">
              <FaDownload size={18} />
              Download CV
            </a>
          </motion.div>
        </motion.div>

        {/* Right Content - Image */}
        <motion.div
          initial={{
            opacity: 0,
            x: 50
          }}
          animate={{
            opacity: 1,
            x: 0
          }}
          transition={{
            duration: 0.8,
            delay: 0.2
          }}
          className="relative flex justify-center items-center lg:justify-end">

          {/* Profile Image - Full Transparent PNG */}
          <div 
            className="relative w-full max-w-[400px] md:max-w-[450px] lg:max-w-[500px] h-auto"
            style={{
              filter: 'drop-shadow(0 20px 40px rgba(0, 0, 0, 0.6))'
            }}>
            <img
              src={profileImage.src}
              alt={portfolioData.personal.name}
              className="w-full h-auto object-contain"
              width={500}
              height={650}
              style={{
                maxHeight: '65vh',
                transform: 'scale(1.02)'
              }}
            />
          </div>
        </motion.div>
      </div>
    </section>);

}