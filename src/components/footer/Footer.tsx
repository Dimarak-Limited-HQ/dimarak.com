import React from 'react';
import AboutUs from './About';
import ContactUs from './ContactUs';
import QuickLinks from './QuickLinks';
import NewsletterSignup from './NewsletterSignup';

const Footer: React.FC = () => {
    return (
        <footer className="bg-white dark:bg-dark text-gray-800 py-12 px-10">
            <div className="max-w-8xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
                <AboutUs />
                <ContactUs />
                <QuickLinks />
                <NewsletterSignup />
            </div>
            <div className="text-center mt-8 text-gray-600 text-sm">
                <p>&copy; {new Date().getFullYear()} Dimarak. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
