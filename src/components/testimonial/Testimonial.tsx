'use client';

import Button from '../shared/Button';

import Image from 'next/image';
import { FaStar } from 'react-icons/fa';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { useState, useEffect } from 'react';

export default function Testimonials() {
  const testimonials = [
    {
      image: '/Ellipse-2.png',
      alt: 'Avatar-1',
      quote:
        'The team at DIMARAK is exceptional. They truly understand our needs and deliver beyond expectations.',
      name: 'Liam Brown',
      title: 'Manager at Brown Enterprises',
    },
    {
      image: '/Ellipse-3.png',
      alt: 'Avatar-2',
      quote:
        "DIMARAK's solutions have transformed our business. The team is incredibly responsive and talented.",
      name: 'Isabella Rossi',
      title: 'Director at Rossi Group',
    },
    {
      image: '/Ellipse-4.png',
      alt: 'Avatar-4',
      quote:
        'Working with DIMARAK has been a game-changer. Their expertise helped us scale effortlessly.',
      name: 'Alex Müller',
      title: 'CTO of Müller Innovations',
    },
    {
      image: '/Ellipse-2.png',
      alt: 'Avatar-3',
      quote:
        'DIMARAK exceeded our expectations with their innovative solutions and excellent customer service.',
      name: 'Emily Clark',
      title: 'CEO at Clark Industries',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(3);

  useEffect(() => {
    const updateVisibleCount = () => {
      if (window.innerWidth < 768) {
        setVisibleCount(1);
      } else {
        setVisibleCount(3);
      }
    };

    updateVisibleCount();
    window.addEventListener('resize', updateVisibleCount);

    return () => window.removeEventListener('resize', updateVisibleCount);
  }, []);

  const visibleTestimonials = testimonials.slice(
    currentIndex,
    currentIndex + visibleCount
  );

  const handleNext = () => {
    if (currentIndex < testimonials.length - visibleCount) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div className="bg-[#C8D4DF] dark:bg-dark pt-12 pb-24 relative">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12 md:mb-36">
          <div className="w-full md:w-1/2 text-center md:text-left md:ml-10">
            <div className="text-base font-extrabold text-gray-700 dark:text-gray-200">
              4.5/5.0
              <span className="text-yellow-400 mx-1 relative bottom-1 space-x-1">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} className="inline" />
                ))}
              </span>
              <span className="text-yellow-400 text-lg mr-1">5</span>
              (Based on 3265 ratings)
            </div>
            <p className="text-gray-700 dark:text-gray-300 mt-2 text-sm">
              Hear from our customers using our product and services about how
              DIMARAK helped or is helping them improve their businesses.
            </p>
          </div>

          <div className="w-full md:w-1/2 text-center md:text-right mt-6 md:mt-0 md:mr-10">
            <Button href="/visit-review" bg={true}>
              View Review
            </Button>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-center items-stretch space-y-8 md:space-y-0 md:space-x-8 overflow-x-hidden">
          {visibleTestimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-xl shadow-lg p-8 text-center w-full md:w-80 flex flex-col justify-between flex-grow"
              style={{ minHeight: '400px' }}
            >
              <div className="w-24 h-24 mx-auto mb-4">
                <Image
                  src={testimonial.image}
                  alt={testimonial.alt}
                  className="rounded-full"
                  width={96}
                  height={96}
                />
              </div>
              <p className="text-gray-700 dark:text-gray-300 mb-4 flex-grow">
                &quot;{testimonial.quote}&quot;
              </p>
              <div className="flex items-center justify-center space-x-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} className="text-yellow-400" />
                ))}
                <span className="ml-2 text-yellow-400">5</span>
              </div>
              <p className="font-extrabold text-lg text-gray-800 dark:text-gray-800">
                {testimonial.name}
              </p>
              <p className="text-gray-500 dark:text-gray-400 text-base">
                {testimonial.title}
              </p>
            </div>
          ))}
        </div>

        <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-4 px-4">
          <button
            onClick={handlePrev}
            disabled={currentIndex === 0}
            className="p-3 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:bg-gray-100 dark:hover:bg-gray-700 disabled:opacity-50"
          >
            <IoIosArrowBack className="text-gray-500 dark:text-gray-300 text-xl" />
          </button>

          <button
            onClick={handleNext}
            disabled={currentIndex >= testimonials.length - visibleCount}
            className="p-3 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:bg-gray-100 dark:hover:bg-gray-700 disabled:opacity-50"
          >
            <IoIosArrowForward className="text-gray-500 dark:text-gray-300 text-xl" />
          </button>
        </div>
      </div>
    </div>
  );
}
