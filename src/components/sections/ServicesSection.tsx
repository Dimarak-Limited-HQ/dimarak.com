'use client';
import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

const services = [
  {
    title: 'Software Engineering',
    description: 'We build fast and scalable software applications - Websites and mobile apps',
    imageSrc: '/web.png',
  },
  {
    title: 'Electronics',
    description: 'We develop and build efficient electronic product prototypes',
    imageSrc: '/electronics.png',
  },
  {
    title: 'Mobile App Development',
    description: 'We develop intuitive mobile applications that deliver seamless user experiences.',
    imageSrc: '/mobile.png',
  },
  {
    title: 'Consulting Services',
    description: 'Our experts provide strategic consulting to help you navigate complex business challenges.',
    imageSrc: '/ui.png',
  },
];

const ServicesSection: React.FC = () => {
  const [inView, setInView] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null); // State to track hovered card
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInView(true);
            observer.disconnect(); // Stop observing once in view
          }
        });
      },
      {
        root: null,
        threshold: 0.1, // Trigger when 10% of the element is in view
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [ref]);

  return (
    <section className="p-16 px-6 bg-gray-50 dark:bg-dark" ref={ref}>
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row">

        <div className="flex-1 md:mr-8">
          <h2 className="text-lg font-bold mb-4 pt-3 text-[#6CC417]">SERVICES</h2>
          {services.map((service, index) => (
            <motion.div
              key={index}
              className={`mb-6 p-4 border rounded-lg dark:bg-dark border-gray-200 dark:border-gray-600 ${hoveredIndex === index ? 'bg-gray-200 dark:bg-gray-700' : ''}`} // Highlight the hovered service
              initial={{ opacity: 0 }} // Start invisible
              animate={inView ? { opacity: 1, transition: { delay: 0.5, duration: 0.5 } } : {}}
            >
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {service.description} {/* Show description only if hovered */}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-4 relative">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="dark:bg-dark border border-gray-200 dark:border-gray-600 p-6 rounded-lg text-center w-full"
              initial={{ opacity: 0, scale: 0.8, y: 20 }} // Start slightly below and invisible
              animate={
                inView
                  ? {
                    opacity: 1,
                    scale: 1,
                    y: 0,
                    transition: {
                      delay: index * 0.1, // Staggered entrance
                      duration: 0.5,
                    },
                  }
                  : {}
              }
              exit={{
                opacity: 0,
                scale: 0.8,
                y: 20, // Move down when exiting
                transition: { duration: 0.5 },
              }}
              whileHover={{
                scale: 1.05, // Scale up slightly on hover
                rotateY: 15, // Slight rotation to create a flipping effect
                boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.2)', // Add shadow
                transition: {
                  type: 'spring',
                  stiffness: 300,
                  damping: 10,
                },
              }}
              onMouseEnter={() => setHoveredIndex(index)} // Set hovered index on mouse enter
              onMouseLeave={() => setHoveredIndex(null)} // Clear hovered index on mouse leave
            >
              <div className="mb-4">
                <img
                  src={service.imageSrc}
                  alt={service.title}
                  className="w-full h-40 object-cover rounded-lg"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
                {service.title}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
