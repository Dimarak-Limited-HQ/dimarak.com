"use client"; // Add this line to the top of your file
import React from 'react';
import { motion } from 'framer-motion';
import Button from '../shared/Button';

const HeroSection: React.FC = () => {
  // Animation variants for the text and buttons
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="relative h-[90vh] flex items-center px-10 bg-gradient-to-r from-blue-900 via-purple-800 to-pink-600 bg-no-repeat bg-center">
      {/* Artistic Background Overlay */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Abstract SVG or Pattern */}
        <svg
          className="absolute left-0 top-0 w-full h-full opacity-20"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 800 600"
        >
          <g fill="none" stroke="white" strokeWidth="0.5">
            <path d="M0 300 Q200 500 400 300 Q600 100 800 300" />
            <path d="M0 100 Q200 300 400 100 Q600 -100 800 100" />
          </g>
        </svg>

        {/* Gradient Overlay for Artistic Look */}
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 to-purple-900 opacity-80"></div>
      </div>

      {/* Content Section with Animations */}
      <div className="relative z-10 w-full md:w-1/2 space-y-6 text-left">
        <motion.h1
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-5xl font-extrabold leading-tight text-white md:text-6xl"
        >
          Transforming <span className="text-blue-300">Local</span> Businesses
        </motion.h1>
        <motion.h2
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-5xl font-extrabold leading-tight bg-gradient-to-r from-yellow-500 to-red-500 bg-clip-text text-transparent"
        >
          Through Innovation
        </motion.h2>
        <motion.p
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-lg text-gray-200 mt-4"
        >
          We specialize in modern solutions for local enterprises, enabling them to thrive in the digital age.
        </motion.p>

        {/* Call to Action Buttons */}
        <div className="flex mt-6 space-x-4">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <Button href="/contact" bg>
              Contact Us
            </Button>
          </motion.div>
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <Button href="/services">Our Services</Button>
          </motion.div>
        </div>
      </div>

      {/* Image Grid with Bubble Animation */}
      <div className="relative hidden md:block md:w-1/2">
        <div className="relative flex justify-center items-center">
          {/* Main image in the center */}
          <motion.img
            src="/whyChooseUs.jpg"
            alt="Main Tech Innovation"
            className="w-48 h-48 object-cover rounded-full transform hover:scale-105 transition duration-500 ease-in-out"
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.05 }}
          />

          {/* Surrounding images with bubble effect */}
          <motion.img
            src="/ui.png"
            alt="UI Design"
            className="absolute w-20 h-20 object-cover rounded-full animate-bubble-1"
            style={{ top: '-60px', left: '60px' }}
            initial={{ y: 0 }}
            animate={{ y: [-5, 5, -5] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <motion.img
            src="/web.png"
            alt="Web Development"
            className="absolute w-20 h-20 object-cover rounded-full animate-bubble-2"
            style={{ top: '-60px', right: '60px' }}
            initial={{ y: 0 }}
            animate={{ y: [-5, 5, -5] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <motion.img
            src="/Services2.png"
            alt="Service Innovation"
            className="absolute w-20 h-20 object-cover rounded-full animate-bubble-3"
            style={{ bottom: '-60px', left: '60px' }}
            initial={{ y: 0 }}
            animate={{ y: [-5, 5, -5] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <motion.img
            src="/Services3.png"
            alt="Tech Solution"
            className="absolute w-20 h-20 object-cover rounded-full animate-bubble-4"
            style={{ bottom: '-60px', right: '60px' }}
            initial={{ y: 0 }}
            animate={{ y: [-5, 5, -5] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
