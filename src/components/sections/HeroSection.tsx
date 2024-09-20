import React from "react";
import Button from "../shared/Button";

const HeroSection: React.FC = () => {
  return (
    <section className="relative h-[90vh] flex items-center mt-[40px] bg-hero-pattern px-6 bg-contain bg-no-repeat bg-right-center">
      <div
        className="absolute inset-0 bg-cover bg-no-repeat bg-right-center bg-[url('/hero-dark.png')]"
        aria-hidden="true"
      />
      <div className="absolute left-0 h-[90vh] w-full">
        <div className="h-[90vh] text-4xl bg-white text-white bg-opacity-0 dark:bg-black dark:bg-opacity-70 dark:text-white md:text-5xl font-bold mb-2">
          <div className="flex flex-col justify-center items-center h-[90vh]">
            <div>Transforming Local</div>
            <span className="bg-gradient-three-color bg-clip-text text-transparent">
              Businesses Through
            </span>
            <div>Innovation</div>
            <div className="text-[16px] dark:text-white font-bold mt-6 text-white">
              {" "}
              We specialize in modern solutions for local enterprises.
            </div>
            <div className="flex text-[16px] mt-10 space-x-4">
              <Button href="/contact" bg>
                Contact Us
              </Button>
              <Button href="/services">Our Services</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
