'use client';
import React, { useState, useEffect } from 'react';
import { FaQuoteLeft, FaQuoteRight, FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const testimonials = [
    {
        name: 'John Doe',
        position: 'CEO, Company A',
        testimonial: 'Working with this team was a game-changer for our business. Their innovative solutions and dedication helped us achieve our goals efficiently.',
        imageSrc: '/images/john-doe.jpg',
    },
    {
        name: 'Jane Smith',
        position: 'Marketing Director, Company B',
        testimonial: 'The level of professionalism and expertise demonstrated was exceptional. We highly recommend their services to anyone looking to grow their business.',
        imageSrc: '/images/jane-smith.jpg',
    },
    {
        name: 'Alice Johnson',
        position: 'Product Manager, Company C',
        testimonial: 'An outstanding team with a clear focus on delivering results. Their approach to solving complex problems is both strategic and effective.',
        imageSrc: '/images/alice-johnson.jpg',
    },
    {
        name: 'Bob Brown',
        position: 'Founder, Company D',
        testimonial: 'Our experience with this company was fantastic. They exceeded our expectations and provided us with excellent support throughout the project.',
        imageSrc: '/images/bob-brown.jpg',
    },
    {
        name: 'Sophie Lee',
        position: 'COO, Company E',
        testimonial: 'Their work ethic and dedication to our success have been exceptional. We couldn’t be more pleased with the results they delivered.',
        imageSrc: '/images/sophie-lee.jpg',
    },
    {
        name: 'David Kim',
        position: 'CTO, Company F',
        testimonial: 'This team brought in fresh ideas and a new level of efficiency to our project. We would highly recommend their services to others.',
        imageSrc: '/images/david-kim.jpg',
    },
];

const ClientTestimonials: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [testimonialsToShow, setTestimonialsToShow] = useState(3); // Default to showing 3 testimonials

    const totalTestimonials = testimonials.length;

    // Function to calculate the number of testimonials based on window width
    const updateTestimonialsToShow = () => {
        const width = window.innerWidth;
        if (width < 640) {
            setTestimonialsToShow(1); // Show 1 testimonial on mobile
        } else if (width < 1024) {
            setTestimonialsToShow(2); // Show 2 testimonials on tablets
        } else {
            setTestimonialsToShow(3); // Show 3 testimonials on larger screens
        }
    };

    useEffect(() => {
        updateTestimonialsToShow(); // Set initial number of testimonials to show
        window.addEventListener('resize', updateTestimonialsToShow); // Update on resize

        return () => window.removeEventListener('resize', updateTestimonialsToShow);
    }, []);

    const nextTestimonial = () => {
        setCurrentIndex((prevIndex) => (prevIndex + testimonialsToShow) % totalTestimonials);
    };

    const prevTestimonial = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex - testimonialsToShow < 0 ? totalTestimonials - testimonialsToShow : prevIndex - testimonialsToShow
        );
    };

    return (
        <section className="py-16 px-6 bg-gray-100 dark:bg-gray-900">
            <div className="max-w-7xl mx-auto text-center">
                <h2 className="text-3xl font-bold mb-12 text-primary dark:text-white">What Our Clients Say</h2>

                {/* Slider container */}
                <div className="relative">
                    <div className="flex justify-center space-x-4">
                        {testimonials
                            .slice(currentIndex, currentIndex + testimonialsToShow)
                            .map((testimonial, index) => (
                                <div
                                    key={index}
                                    className="bg-white dark:bg-gray-800 shadow-lg border border-gray-200 dark:border-gray-700 p-6 rounded-lg flex flex-col items-center mx-4 w-80"
                                >
                                    <div className="flex items-center mb-4">
                                        <img
                                            src={testimonial.imageSrc}
                                            alt={testimonial.name}
                                            className="w-16 h-16 rounded-full object-cover mr-4"
                                        />
                                        <div>
                                            <h3 className="text-xl font-semibold text-link dark:text-white">
                                                {testimonial.name}
                                            </h3>
                                            <p className="text-gray-600 dark:text-gray-300">{testimonial.position}</p>
                                        </div>
                                    </div>
                                    <div className="relative">
                                        <p className="text-gray-800 dark:text-gray-100 italic">
                                            {testimonial.testimonial}
                                        </p>
                                    </div>
                                </div>
                            ))}
                    </div>

                    {/* Navigation arrows */}
                    <div className="flex justify-between mt-8">
                        <button
                            onClick={prevTestimonial}
                            className="p-2 bg-primary text-white rounded-full hover:bg-primary-dark"
                        >
                            <FaArrowLeft />
                        </button>
                        <button
                            onClick={nextTestimonial}
                            className="p-2 bg-primary text-white rounded-full hover:bg-primary-dark"
                        >
                            <FaArrowRight />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ClientTestimonials;
