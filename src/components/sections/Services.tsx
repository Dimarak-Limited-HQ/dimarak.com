import React from "react";
import Image from "next/image";

const Services: React.FC = () => {
  return (
    <section className="mx-24 mt-24">
      <p className="font-bold text-2xl mb-10">SERVICES</p>
      <div className="flex justify-between">
        {/* First card */}
        <div className="bg-white p-2 rounded-md border shadow-md w-[30%]">
          <Image
            src="/Services1.png"
            alt="Softwere Development"
            objectFit="fill"
            width={335}
            height={167}
          />
          <p className="text-[#6B7280] mt-2">Software Development</p>
        </div>

        {/* Second card */}
        <div className="bg-white p-2 rounded-md border shadow-md w-[30%]">
          <Image
            src="/Services2.png"
            alt="Softwere Development"
            objectFit="cover"
            width={335}
            height={167}
          />
          <p className="text-[#6B7280] mt-2">
            Electronics Design and Manufacturing
          </p>
        </div>

        {/* Third card */}
        <div className="bg-white p-2 rounded-md border shadow-md w-[30%]">
          <Image
            src="/Services3.png"
            alt="Softwere Development"
            objectFit="cover"
            width={335}
            height={167}
          />
          <p className="text-[#6B7280] mt-2">Software Development</p>
        </div>
      </div>
    </section>
  );
};

export default Services;
