import React from "react";

import Button from "../shared/Button";

const Company: React.FC = () => {
  return (
    <section className="flex gap-8 mx-24 mt-24">
      <div className="h-[200px] w-[80%] flex justify-center items-center">
        <div className="flex flex-col justify-center">
          <p className="mb-4">
            <span className="text-[#FFB74D]">DIMARAK</span> Company Limited is a
            forward-thinking technology company committed to transforming local
            businesses into modern, competitive enterprises through innovative
            solutions. We are dedicated to empowering local businesses by delivering innovative solutions tailored to their unique needs.Our team of experienced professionals ensures your business thrives in competitive market.

          </p>
          <Button href="/#" bg={false}>
            Get Started
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Company;
