import Image from "next/image";
import Button from "../shared/Button";

const WhyChooseUs = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between py-12 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="md:w-1/2 w-full px-6 md:px-12 text-left">
        <h2 className="text-sm font-bold mb-4 text-[#6CC417]">WHY CHOOSE US</h2>
        <h3 className="text-3xl font-semibold text-gray-800 dark:text-gray-100 mb-4">
          Crafting&nbsp;
          <span className="font-extrabold bg-gradient-three-color bg-clip-text text-transparent">
            Digital Experiences
          </span>
          <br /> That Matter
        </h3>
        <p className="text-gray-600 dark:text-gray-300 mb-8">
          Building robust, high-performing websites with cutting-edge
          technology, delivering seamless functionality and exceptional user
          experiences.
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
      </div>

      <div className="lg:w-1/2 w-full relative px-4 sm:px-6 lg:px-12 mt-8 sm:mt-12 lg:mt-0">
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
              Our advanced cybersecurity solutions help businesses safeguard
              critical data while optimizing operational workflows.
            </p>

            <Button href="/discover-more" bg={true}>
              Discover More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;

// import React from 'react';
// import { FaStar, FaThumbsUp, FaUserShield, FaHandshake } from 'react-icons/fa';

// const reasons = [
//   {
//     icon: <FaStar className="text-4xl text-white" />,
//     title: 'Quality Service',
//     description: 'We deliver high-quality service that exceeds expectations.',
//   },
//   {
//     icon: <FaThumbsUp className="text-4xl text-white" />,
//     title: 'Customer Satisfaction',
//     description:
//       'Our focus is on achieving complete customer satisfaction with every project.',
//   },
//   {
//     icon: <FaUserShield className="text-4xl text-white" />,
//     title: 'Reliable & Trustworthy',
//     description:
//       'We are known for our reliability and trustworthiness in every engagement.',
//   },
//   {
//     icon: <FaHandshake className="text-4xl text-white" />,
//     title: 'Partnership Approach',
//     description:
//       'We work closely with you to build lasting partnerships and achieve your goals.',
//   },
// ];

// const WhyChooseUs: React.FC = () => {
//   return (
//     <section className="py-16 px-6  dark:bg-dark">
//       <div className="max-w-7xl mx-auto">
//         <h2 className="text-3xl font-bold mb-12 text-body dark:text-white">
//           Why Choose <span className="text-accent">Dimarak</span>?
//         </h2>
//         <div className="grid grid-cols-1 bg-primary  dark:bg-dark border rounded-[20px] border-gray-200 sm:grid-cols-2 lg:grid-cols-4">
//           {reasons.map((reason, index) => (
//             <div
//               key={index}
//               className="dark:bg-dark   dark:border-gray-700 p-6 flex flex-col  justify-center rounded-lg"
//             >
//               <div className="mb-4 ">{reason.icon}</div>
//               <h3 className="text-xl font-semibold text-white dark:text-white mb-2">
//                 {reason.title}
//               </h3>
//               <p className="text-white text-sm dark:text-gray-300">
//                 {reason.description}
//               </p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default WhyChooseUs;
