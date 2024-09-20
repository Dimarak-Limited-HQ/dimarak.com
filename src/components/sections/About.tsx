import React from "react";
import Image from "next/image";

const data = [
  {
    title: "Tailored Solutions",
    image: "/svg/tailored.svg",
    description:
      "We understand that every business is unique. Our solutions are customized to meet the specific challenges and goals of each client.",
  },
  {
    title: "End-to-End Service",
    image: "/svg/services.svg",
    description:
      "From initial consultation to final implementation, we offer comprehensive support at every stage of your project.",
  },
  {
    title: "Expert Team",
    image: "/svg/teamwork.svg",
    description:
      "Our team is composed of experienced professionals who are experts in their respective fields, ensuring that you receive the best possible service.",
  },
  {
    title: "Commitment to Quality",
    image: "/svg/quality-broken.svg",
    description:
      "We are committed to delivering products and services that meet the highest standards of quality and reliability.",
  },
  {
    title: "Focus on Growth",
    image: "/svg/growth-filled.svg",
    description:
      "Our solutions are designed not only to solve immediate problems but also to support long-term growth and success.",
  },
];

const About: React.FC = () => {
  return (
    <section className="mx-24 mt-24">
      <p className="text-2xl font-bold mb-14">
        Why Choosen <span className="text-[#FFB74D]">DIMARAK</span>?
      </p>

      <div className="bg-primary rounded-3xl flex gap-4 p-4  z-10">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-start justify-center gap-4"
          >
            <Image src={item.image} alt={item.title} width={50} height={50} />
            <p className="text-white font-bold">{item.title}</p>
            <p className="text-white text-sm">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default About;
