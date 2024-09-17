import React, { useState, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaTh } from 'react-icons/fa';  // Import the 9-dot grid icon

const productLinks = [
    { label: 'Restduino', imageSrc: '/images/restduino.jpg', link: '/products/restduino' },
    { label: 'Xonbay', imageSrc: '/images/xonbay.jpg', link: '/products/xonbay' },
    { label: 'Mobile Apps', imageSrc: '/images/mobile-apps.jpg', link: '/products/mobile-apps' },
    { label: 'Cloud Solutions', imageSrc: '/images/cloud-solutions.jpg', link: '/products/cloud-solutions' },
    { label: 'AI Solutions', imageSrc: '/images/ai-solutions.jpg', link: '/products/ai-solutions' },
    { label: 'Web Development', imageSrc: '/images/web-development.jpg', link: '/products/web-development' },
];

const ProductDropdown: React.FC = () => {
    const [showDropdown, setShowDropdown] = useState(false);
    const timerRef = useRef<NodeJS.Timeout | null>(null);

    const handleMouseEnter = () => {
        if (timerRef.current) {
            clearTimeout(timerRef.current);
        }
        setShowDropdown(true);
    };

    const handleMouseLeave = () => {
        timerRef.current = setTimeout(() => {
            setShowDropdown(false);
        }, 200);
    };

    return (
        <li
            className="relative flex items-center space-x-2"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            style={{ listStyle: 'none' }} // Removes bullet points from the list
        >
            {/* Adding the 9-dot grid icon with accent color */}
            <div className='bg-[#BDE6FF] mr-5 dark:bg-dark dark:border rounded-[20px] gap-2 py-2 flex items-center px-5'>
                <FaTh className="text-lg text-primary dark:text-white" />
                <span className="text-link  dark:text-white font-medium hover:text-primary dark:hover:text-accent cursor-pointer">
                    Products
                </span>
            </div> 

            {showDropdown && (
                <div
                    className="absolute top-full left-0 bg-white dark:bg-gray-800 shadow-lg rounded-lg mt-2 w-[600px] py-4 px-6 grid grid-cols-3 gap-6 z-50"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    {productLinks.map((product, index) => (
                        <Link href={product.link} key={index} passHref>
                            <div className="flex flex-col items-center cursor-pointer">
                                <Image
                                    src={product.imageSrc}
                                    alt={product.label}
                                    width={80}
                                    height={80}
                                    className="rounded-md"
                                />
                                <span className="mt-3 text-link dark:text-white font-medium">
                                    {product.label}
                                </span>
                            </div>
                        </Link>
                    ))}
                </div>
            )}
        </li>
    );
};

export default ProductDropdown;
