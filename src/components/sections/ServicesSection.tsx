'use client';
import React from 'react';

const services = [
    {
        title: 'Software Engineering',
        description: 'We build fast and scalable software applications - Websites and mobile apps',
        imageSrc: '/web.png', // Replace with actual image paths
    },
    {
        title: 'Digital Marketing',
        description: 'Boost your online presence with targeted marketing strategies tailored to your audience.',
        imageSrc: '/electronics.png',
    },
    {
        title: 'Mobile App Development',
        description: 'We develop intuitive mobile applications that deliver seamless user experiences.',
        imageSrc: '/mobile.png',
    },
    {
        title: 'Consulting Services',
        description: 'Our experts provide strategic consulting to help you navigate complex business challenges.',
        imageSrc: '/ui.png',
    },
];

const ServicesSection: React.FC = () => {
    return (
        <section className="py-16 px-6 bg-gray-50 dark:bg-dark">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-3xl font-bold mb-12 text-body dark:text-white">Services</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className=" dark:bg-dark border border-gray-200 dark:border-gray-600 p-6 rounded-lg text-center"
                        >
                            <div className="mb-4">
                                <img
                                    src={service.imageSrc}
                                    alt={service.title}
                                    className="w-full h-40 object-cover rounded-lg"
                                />
                            </div>
                            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">{service.title}</h3>
                            <p className="text-gray-600 dark:text-gray-300">{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServicesSection;
