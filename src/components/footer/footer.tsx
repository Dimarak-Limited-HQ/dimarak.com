import Image from 'next/image';
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

export const Footer = () => {
  return (
    <footer className="bg-white text-dark">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between mb-24">
          <div className="mb-6 md:mb-0">
            <Image
              src="/Dimarak.png"
              className="me-3"
              alt="Dimarak Logo"
              width={150}
              height={150}
            />
            <p className="my-2 text-gray-700 text-sm w-1/2">
              A forward-thinking technology company committed to transforming
              local businesses into modern, competitive enterprises through
              innovative solutions.
            </p>

            <div className="flex justify-start space-x-6 mt-4">
              <a href="https://facebook.com" aria-label="Facebook">
                <FaFacebook className="text-gray-600 text-2xl" />
              </a>
              <a href="https://twitter.com" aria-label="X">
                <FaXTwitter className="text-gray-500 text-2xl" />
              </a>
              <a href="https://instagram.com" aria-label="Instagram">
                <FaInstagram className="text-gray-500 text-2xl" />
              </a>
              <a href="https://linkedin.com" aria-label="LinkedIn">
                <FaLinkedin className="text-gray-700 text-2xl" />
              </a>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
              <h2 className="mb-6 text-lg font-semibold text-dark">Company</h2>
              <ul className="text-gray-600 dark:text-gray-600 font-medium">
                <li className="mb-2 text-sm">
                  <a href="/products" className="hover:underline">
                    Products
                  </a>
                </li>
                <li className="mb-2 text-sm">
                  <a href="/about" className="hover:underline">
                    About us
                  </a>
                </li>
                <li className="mb-2 text-sm">
                  <a href="/services" className="hover:underline">
                    Services
                  </a>
                </li>
                <li className="mb-2 text-sm">
                  <a href="/contact" className="hover:underline">
                    contact us
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-lg font-semibold text-dark">Support</h2>
              <ul className="text-gray-600 dark:text-gray-600 font-medium">
                <li className="mb-2 text-sm">
                  <a href="#" className="hover:underline ">
                    Help and Support
                  </a>
                </li>
                <li className="mb-2 text-sm">
                  <a href="#" className="hover:underline">
                    FAQ
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-lg font-semibold text-dark">
                Get in touch
              </h2>
              <ul className="text-gray-600 dark:text-gray-600 font-medium">
                <li className="mb-2 text-sm">
                  <a href="#" className="hover:underline">
                    123 DIMARAK Avenue, Accra, Ghana
                  </a>
                </li>
                <li className="mb-2 text-sm">
                  <a href="#" className="hover:underline">
                    Email: info@dimarak.com
                  </a>
                </li>
                <li className="mb-2 text-sm">
                  <a href="#" className="hover:underline">
                    Phone: +233 123 456 789
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="mb-6 border-gray-200 sm:mx-auto dark:border-gray-500 lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-700 sm:text-center dark:text-gray-700">
            © Copyright 2024,All Rights Reserved by DIMARAK.
          </span>
          <div className="flex mt-4 sm:justify-between sm:mt-0 items-center">
            <span className="text-sm text-gray-700 dark:text-gray-700 mx-2">
              Privacy Policy
            </span>
            <span className="text-sm text-gray-700 dark:text-gray-700 mx-2">
              Cookie Notice
            </span>
            <span className="text-sm text-gray-700 dark:text-gray-700 mx-2">
              Do not sell my personal information
            </span>
            <span className="text-sm text-gray-700 dark:text-gray-700 mx-2">
              Terms of use
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
