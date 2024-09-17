import React from "react";
import Image from "next/image";

const IconSection: React.FC = () => {
  return (
    <section className="mx-24 flex justify-center items-center mt-4 border-t border-b">
      {/* First experience */}
      <div className="flex flex-col gap-3 items-center border-r py-8 px-10 w-[25%]">
        <Image src="/svg/growth.svg" alt="growth" width={60} height={60} />
        <p className="text-4xl font-bold">500+</p>
        <p className="text-[#6B7280]">Business Transformed</p>
      </div>

      {/* Second experience */}
      <div className="flex flex-col gap-3 items-center border-r py-8 px-10 w-[25%]">
        <Image
          src="/svg/experience.svg"
          alt="experience"
          width={60}
          height={60}
        />
        <p className="text-4xl font-bold">1+</p>
        <p className="text-[#6B7280]">Years of Innovation</p>
      </div>

      {/* Third experience */}
      <div className="flex flex-col gap-3 items-center border-r py-8 px-10 w-[25%]">
        <Image src="/svg/complete.svg" alt="projects" width={60} height={60} />
        <p className="text-4xl font-bold">3+</p>
        <p className="text-[#6B7280]">Projects Delivered</p>
      </div>

      {/* Fourth experience */}
      <div className="flex flex-col gap-3 items-center py-8 px-10 w-[25%]">
        <Image
          src="/svg/customer-review.svg"
          alt="customer review"
          width={60}
          height={60}
        />
        <p className="text-4xl font-bold">98+</p>
        <p className="text-[#6B7280]">Client Satisfaction</p>
      </div>
    </section>
  );
};

export default IconSection;
