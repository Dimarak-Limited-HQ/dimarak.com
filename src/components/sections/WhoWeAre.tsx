"use client"; // Add this line to the top of your file
import { motion } from "framer-motion";
import Image from "next/image";
import Button from "../shared/Button";

export default function WhoWeAre() {
  // Animation variants for floating images
  const floatAnimation = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: [-5, 5, -5],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <section className="relative flex flex-col md:flex-row items-center justify-between px-6 py-12 bg-gradient-to-r from-blue-900 via-purple-800 to-pink-600 bg-no-repeat bg-center">
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

      <motion.div
        className="relative z-10 w-full md:w-1/2 h-auto"
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: "easeInOut" }}
      >
        <Image
          src="/chooseUs.jpg"
          alt="Why Choose Us"
          className="rounded-lg w-full h-auto"
          width={500}
          height={500}
        />
        <motion.div
          className="absolute left-0 bottom-0 bg-black bg-opacity-50 text-white p-4 rounded-lg w-[50%] hidden md:block"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          <ul className="space-y-2">
            {["Custom Solutions", "Cutting-Edge Design", "SEO Optimization", "Responsive Design", "Innovative Technology", "Security and Reliability"].map(
              (item, index) => (
                <li key={index} className="flex items-center space-x-2">
                  <span>{item}</span>
                  <hr className="border-gray-400 dark:border-gray-600" />
                </li>
              )
            )}
          </ul>
        </motion.div>

        {/* Adding floating decorative images */}
        <motion.img
          src="/art1.png"
          alt="Art Decoration 1"
          className="absolute top-[-20px] left-[-30px] w-12 h-12"
          variants={floatAnimation}
          initial="hidden"
          animate="visible"
        />
        <motion.img
          src="/art2.png"
          alt="Art Decoration 2"
          className="absolute bottom-[-40px] right-[-30px] w-16 h-16"
          variants={floatAnimation}
          initial="hidden"
          animate="visible"
        />
      </motion.div>

      <motion.div
        className="relative z-10 w-full md:w-1/2 mt-8 md:mt-0 md:ml-8"
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: "easeInOut" }}
      >
        <h2 className="text-sm font-bold mb-4 text-[#6CC417]">WHO WE ARE</h2>

        <h3 className="text-3xl font-semibold mb-4 text-gray-800 dark:text-gray-300">
          Innovative Solutions for Your <br />{" "}
          <span className="font-extrabold bg-gradient-three-color bg-clip-text text-transparent">
            Online Success
          </span>
        </h3>

        <p className="text-gray-600 dark:text-gray-400 mb-6">
          Accelerate Your business Success with Powerful Web & Mobile
          Applications.
        </p>

        <hr className="border-gray-300 dark:border-gray-600 mb-6" />

        <div className="flex space-x-8 mb-6">
          <div className="text-center">
            <motion.h4
              className="text-3xl font-bold text-gray-900 dark:text-white"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              100+
            </motion.h4>
            <p className="text-gray-600 dark:text-gray-400">Projects Done</p>
          </div>
          <div className="text-center">
            <motion.h4
              className="text-3xl font-bold text-gray-900 dark:text-white"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              50+
            </motion.h4>
            <p className="text-gray-600 dark:text-gray-400">Happy Clients</p>
          </div>
          <div className="text-center">
            <motion.h4
              className="text-3xl font-bold text-gray-900 dark:text-white"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              4.8
            </motion.h4>
            <p className="text-gray-600 dark:text-gray-400">Client Reviews</p>
          </div>
        </div>

        <hr className="border-gray-300 dark:border-gray-600 mb-7" />

        <Button href="/discover-more" bg={true}>
          Discover More
        </Button>
      </motion.div>
    </section>
  );
}
