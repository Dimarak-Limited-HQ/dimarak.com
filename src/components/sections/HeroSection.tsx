import React from 'react';
import Link from 'next/link';

const HeroSection: React.FC = () => {
    return (
        <section className="relative h-[80vh] flex items-center bg-hero-pattern bg-cover bg-center px-6">
            <div className="relative ml-5 z-10 text-left text-white max-w-2xl">
                <h1 className="text-3xl md:text-5xl font-bold mb-2 text-body">
                    Transforming Local Businesses Through
                </h1>
                <h2 className="text-2xl md:text-4xl text-primary font-semibold mb-4">
                    Innovation
                </h2>
                <p className="text-lg md:text-xl mb-6 text-body">
                    We specialize in modern solutions for local enterprises.
                </p>

                <div className="flex space-x-4">
                    <Link href="/services" passHref>
                        <span className="px-6 py-3 bg-primary text-white rounded-full hover:bg-sky-600 transition cursor-pointer">
                            Get Started
                        </span>
                    </Link>

                    <Link href="/about" passHref>
                        <span className="px-6 py-3 border-2 border-white text-white rounded-full hover:bg-white hover:text-dark transition cursor-pointer">
                            Learn More
                        </span>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
