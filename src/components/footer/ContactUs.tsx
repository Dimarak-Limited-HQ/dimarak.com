import React from 'react';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

const ContactUs: React.FC = () => {
    return (
        <div>
            <h3 className="text-xl font-bold dark:text-white  mb-4 text-dark">Contact Us</h3>
            <ul className=' text-paragraph'>
                <li className="flex items-center mb-2">
                    <span>1234 Business St, Suite 100, City, Country</span>
                </li>
                <li className="flex items-center mb-2">
                    <span>Phone: </span>
                    <a href="tel:+123456789" className="hover:text-primary" > +123 456 789</a>
                </li>
                <li className="flex items-center">
                    <span>Email:</span>
                    <a href="mailto:info@company.com" className="hover:text-primary"> info@company.com</a>
                </li>
            </ul>
        </div>
    );
};

export default ContactUs;
