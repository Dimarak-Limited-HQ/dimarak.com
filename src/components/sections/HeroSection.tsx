import React from "react";
import Button from "../shared/Button";

const HeroSection: React.FC = () => {
  return (
    <section className="relative h-[90vh] flex items-center mt-[40px] bg-hero-pattern px-6 bg-contain bg-no-repeat bg-right-center">
      <div
        className="absolute inset-0 bg-cover bg-no-repeat bg-right-center  bg-[url('/hero-light.png')]  dark:bg-[url('/hero-dark.png')]"
        aria-hidden="true"
      />
      <div className="absolute left-0 h-[90vh] w-full dark:bg-black dark:bg-opacity-70">
        <div className="relative dark:text-white ml-5 z-10 text-left text-white max-w-2xl">
          <div className="px-4 max-w-[230px] my-5 py-2 rounded-[10px] bg-[#FFB74D]">
            Your Success, Our Priority
          </div>
          <h1 className="text-4xl dark:text-white md:text-5xl font-bold mb-2 text-body">
            Transforming Local{" "}
            <span className="bg-gradient-three-color bg-clip-text text-transparent">
              Businesses Through
            </span>
          </h1>
          <h1 className="text-4xl dark:text-white md:text-5xl font-bold mb-2 text-body">
            Innovation
          </h1>
          <p className="text-lg dark:text-white mt-9 md:text-xl mb-6 text-body">
            We specialize in modern solutions for local enterprises.
          </p>

          <div className="flex mt-10 space-x-4">
            <Button href="/contact" bg>
              Contact Us
            </Button>
            <Button href="/services">Our Services</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
