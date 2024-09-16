import React from "react";
import Image from "next/image";
import Button from "../shared/Button";

const Services: React.FC = () => {
  return (
    <section className="flex gap-8 mx-24 mt-24">
      <div className="relative w-[50%] h-[50%]">
        <Image
          src="/team_background.png"
          alt="Software Development"
          className="absolute top-8 left-0"
          objectFit="fill"
          width={335}
          height={167}
        />

        <Image
          src="/team_image.png"
          alt="Software Development"
          className="absolute top-0 left-0"
          objectFit="fill"
          width={335}
          height={167}
        />
      </div>
      <div className="h-[200px] flex justify-center items-center">
        <div className="flex flex-col justify-center">
          <p className="mb-4">
            <span className="text-[#FFB74D]">DIMARAK</span> Company Limited is a
            forward-thinking technology company committed to transforming local
            businesses into modern, competitive enterprises through innovative
            solutions.
          </p>
          <Button href="/#" bg={false}>
            Get Started
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;
