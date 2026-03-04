import React from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';
import { portfolioData } from '../data/portfolioData';
export function Contact() {
  return (
    <section
      id="contact"
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
          Get In Touch
        </h2>
        <div className="w-20 h-1 bg-accent mx-auto rounded-full"></div>
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-12">
        {/* Contact Form */}
        <motion.div
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
            duration: 0.6
          }}>

          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div>
              <label
                htmlFor="name"
                className="block text-gray-400 mb-2 font-medium">

                Your Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full bg-dark-card border border-gray-700 focus:border-accent focus:ring-1 focus:ring-accent rounded-lg p-4 text-white outline-none transition-all"
                placeholder="John Doe" />

            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-gray-400 mb-2 font-medium">

                Your Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full bg-dark-card border border-gray-700 focus:border-accent focus:ring-1 focus:ring-accent rounded-lg p-4 text-white outline-none transition-all"
                placeholder="john@example.com" />

            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-gray-400 mb-2 font-medium">

                Message
              </label>
              <textarea
                id="message"
                rows={5}
                className="w-full bg-dark-card border border-gray-700 focus:border-accent focus:ring-1 focus:ring-accent rounded-lg p-4 text-white outline-none transition-all resize-none"
                placeholder="How can I help you?">
              </textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-accent hover:bg-orange-600 text-white font-bold py-4 rounded-lg transition-colors">

              Send Message
            </button>
          </form>
        </motion.div>

        {/* Contact Info */}
        <motion.div
          initial={{
            opacity: 0,
            x: 30
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
            duration: 0.6
          }}
          className="flex flex-col justify-center space-y-8">

          <div className="bg-dark-card border border-gray-800 p-6 rounded-2xl flex items-center space-x-6 hover:border-gray-700 transition-colors">
            <div className="w-14 h-14 bg-dark rounded-full flex items-center justify-center text-accent flex-shrink-0">
              <FaEnvelope size={24} />
            </div>
            <div>
              <h4 className="text-gray-400 text-sm font-medium mb-1">Email</h4>
              <a
                href={`mailto:${portfolioData.personal.email}`}
                className="text-white font-medium hover:text-accent transition-colors">

                {portfolioData.personal.email}
              </a>
            </div>
          </div>

          <div className="bg-dark-card border border-gray-800 p-6 rounded-2xl flex items-center space-x-6 hover:border-gray-700 transition-colors">
            <div className="w-14 h-14 bg-dark rounded-full flex items-center justify-center text-accent flex-shrink-0">
              <FaPhoneAlt size={24} />
            </div>
            <div>
              <h4 className="text-gray-400 text-sm font-medium mb-1">Phone</h4>
              <a
                href={`tel:${portfolioData.personal.phone}`}
                className="text-white font-medium hover:text-accent transition-colors">

                {portfolioData.personal.phone}
              </a>
            </div>
          </div>

          <div className="bg-dark-card border border-gray-800 p-6 rounded-2xl flex items-center space-x-6 hover:border-gray-700 transition-colors">
            <div className="w-14 h-14 bg-dark rounded-full flex items-center justify-center text-accent flex-shrink-0">
              <FaMapMarkerAlt size={24} />
            </div>
            <div>
              <h4 className="text-gray-400 text-sm font-medium mb-1">
                Location
              </h4>
              <p className="text-white font-medium">
                {portfolioData.personal.location}
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>);

}