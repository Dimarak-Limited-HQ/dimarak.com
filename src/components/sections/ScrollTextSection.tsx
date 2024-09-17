"use client";
import React from "react";
import { FaIndustry, FaRocket, FaLaptopCode } from "react-icons/fa";

const ScrollingTextSection: React.FC = () => {
    return (
        <section className="relative py-2">
            <div className="container mx-auto text-center">
                <div className="overflow-hidden relative">
                    <div className="scrolling-text whitespace-nowrap">
                        <div className="inline-flex items-center space-x-12 animate-scroll">
                            <div className="flex items-center space-x-2">
                                <FaLaptopCode className="text-sky-500 text-2xl" />
                                <span className="text-xl font-semibold dark:text-white text-dark">
                                    Empowering Over 500+ Local Businesses
                                </span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <FaIndustry className="text-sky-500 text-2xl" />
                                <span className="text-xl font-semibold dark:text-white text-dark">
                                    Transforming Industries with Innovation
                                </span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <FaRocket className="text-sky-500 text-2xl" />
                                <span className="text-xl font-semibold dark:text-white text-dark">
                                    Building the Future with Technology
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
        .scrolling-text {
          display: inline-block;
          white-space: nowrap;
        }

        @keyframes scroll {
          0% {
            transform: translateX(100%);
          }
          100% {
            transform: translateX(-100%);
          }
        }

        .animate-scroll {
          animation: scroll 15s linear infinite;
        }
      `}</style>
        </section>
    );
};

export default ScrollingTextSection;
