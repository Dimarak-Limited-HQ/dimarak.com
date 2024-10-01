'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Button from '../shared/Button';

const fadeInLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
};

const fadeInRight = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
};

const WhyChooseUs = () => {
  return (
    <section className="relative flex flex-col md:flex-row items-center justify-between py-12 bg-gradient-to-r from-blue-900 via-purple-800 to-pink-600 bg-no-repeat bg-center">
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

      {/* Left Text Section with fadeInLeft animation */}
      <motion.div
        className="md:w-1/2 w-full px-6 md:px-12 text-left relative z-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInLeft}
      >
        <h2 className="text-sm font-bold mb-4 text-[#6CC417]">WHY CHOOSE US</h2>
        <h3 className="text-3xl font-semibold text-gray-800 dark:text-gray-100 mb-4">
          Crafting&nbsp;
          <span className="font-extrabold bg-gradient-three-color bg-clip-text text-transparent">
            Digital Experiences
          </span>
          <br /> That Matter
        </h3>
        <p className="text-gray-600 dark:text-gray-300 mb-8">
          Building robust, high-performing websites with cutting-edge technology, delivering seamless functionality and exceptional user experiences.
        </p>

        <ul className="space-y-6 text-gray-800 dark:text-gray-100">
          <li>
            <span className="font-semibold">Expertise and experience</span>
            <hr className="border-gray-300 dark:border-gray-700 my-2" />
          </li>
          <li>
            <span className="font-semibold">Comprehensive Services</span>
            <hr className="border-gray-300 dark:border-gray-700 my-2" />
          </li>
          <li>
            <span className="font-semibold">Client-Centric Approach</span>
            <hr className="border-gray-300 dark:border-gray-700 my-2" />
          </li>
          <li>
            <span className="font-semibold">Increased Conversion Rates</span>
            <hr className="border-gray-300 dark:border-gray-700 my-2" />
          </li>
        </ul>
      </motion.div>

      {/* Right Image Section with fadeInRight animation */}
      <motion.div
        className="lg:w-1/2 w-full relative px-4 sm:px-6 lg:px-12 mt-8 sm:mt-12 lg:mt-0 z-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInRight}
      >
        <div className="relative h-[300px] sm:h-[400px] w-full">
          <Image
            src="/whyChooseUs.jpg"
            alt="Why Choose Us"
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
          <div className="absolute inset-0 flex flex-col items-start justify-center bg-black bg-opacity-50 text-white p-3 sm:p-4 rounded-lg text-left pl-6 sm:pl-8 lg:pl-16">
            <h4 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#6CC417]">
              Cyber Security
            </h4>
            <p className="text-lg sm:text-xl lg:text-2xl mt-2 font-semibold">
              Streamlining Processes <br /> for Business Efficiency
            </p>
            <p className="mt-4 mb-6 text-sm sm:text-sm lg:text-base">
              Our advanced cybersecurity solutions help businesses safeguard critical data while optimizing operational workflows.
            </p>

            <Button href="/discover-more" bg={true}>
              Discover More
            </Button>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default WhyChooseUs;
