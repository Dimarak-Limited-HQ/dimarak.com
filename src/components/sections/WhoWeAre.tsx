import Image from "next/image";
import Button from "../shared/Button";

export default function WhoWeAre() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between px-6 py-12 bg-whitedark:bg-dark transition-colors duration-300">
      <div className="w-full md:w-1/2 relative h-auto">
        <Image
          src="/chooseUs.jpg"
          alt="Why Choose Us"
          className="rounded-lg w-full h-auto"
          width={500}
          height={500}
        />
        <div className="absolute left-0 bottom-0 bg-black bg-opacity-50 text-white p-4 rounded-lg w-[50%] hidden md:block">
          <ul className="space-y-2">
            <li className="flex items-center space-x-2">
              <span>Custom Solutions</span>
            </li>
            <hr className="border-gray-400 dark:border-gray-600" />
            <li className="flex items-center space-x-2">
              <span>Cutting-Edge Design</span>
            </li>
            <hr className="border-gray-400 dark:border-gray-600" />
            <li className="flex items-center space-x-2">
              <span>SEO Optimization</span>
            </li>
            <hr className="border-gray-400 dark:border-gray-600" />
            <li className="flex items-center space-x-2">
              <span>Responsive Design</span>
            </li>
            <hr className="border-gray-400 dark:border-gray-600" />
            <li className="flex items-center space-x-2">
              <span>Innovative Technology</span>
            </li>
            <hr className="border-gray-400 dark:border-gray-600" />
            <li className="flex items-center space-x-2">
              <span>Security and Reliability</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="w-full md:w-1/2 mt-8 md:mt-0 md:ml-8">
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
            <h4 className="text-3xl font-bold text-gray-900 dark:text-white">
              100+
            </h4>
            <p className="text-gray-600 dark:text-gray-400">Projects Done</p>
          </div>
          <div className="text-center">
            <h4 className="text-3xl font-bold text-gray-900 dark:text-white">
              50+
            </h4>
            <p className="text-gray-600 dark:text-gray-400">Happy Clients</p>
          </div>
          <div className="text-center">
            <h4 className="text-3xl font-bold text-gray-900 dark:text-white">
              4.8
            </h4>
            <p className="text-gray-600 dark:text-gray-400">Client Reviews</p>
          </div>
        </div>

        <hr className="border-gray-300 dark:border-gray-600 mb-7" />

        <Button href="/discover-more" bg={true}>
          Discover More
        </Button>
      </div>
    </section>
  );
}
