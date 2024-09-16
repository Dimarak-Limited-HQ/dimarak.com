import React from 'react';
import Button from '../shared/Button';

const HeroSection: React.FC = () => {
    return (
        <section className="relative h-[80vh] flex items-center bg-hero-pattern bg-cover bg-center px-6">

            

            <div className="relative dark:text-white ml-5 z-10 text-left  text-white max-w-2xl">
                <h1 className="text-3xl dark:text-white  md:text-5xl font-bold mb-2 text-body">
                    Transforming Local Businesses Through
                </h1>
                <h2 className="text-2xl md:text-4xl text-primary font-semibold mb-4">
                    Innovation
                </h2>
                <p className="text-lg dark:text-white mt-9  md:text-xl mb-6 text-body">
                    We specialize in modern solutions for local enterprises.
                </p>

                <div className="flex mt-10 space-x-4">
                    <Button href="/contact" bg>
                        Contact Us
                    </Button>

                    <Button href="/services">
                        Our Services
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
