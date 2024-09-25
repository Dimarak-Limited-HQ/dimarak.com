import React from 'react';

const QuickLinks: React.FC = () => {
    return (
        <div>
            <h3 className="text-xl font-bold mb-4 dark:text-white text-dark">Quick Links</h3>
            <ul className='dark:text-gray-300 text-paragraph'>
                <li className="mb-2">
                    <a href="/" className="hover:text-primary">Home</a>
                </li>
                <li className="mb-2">
                    <a href="/about" className="hover:text-primary">About Us</a>
                </li>
                <li className="mb-2">
                    <a href="/services" className="hover:text-primary">Services</a>
                </li>
                <li className="mb-2">
                    <a href="/contact" className="hover:text-primary">Contact</a>
                </li>
            </ul>
        </div>
    );
};

export default QuickLinks;
