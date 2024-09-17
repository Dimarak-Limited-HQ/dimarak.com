import React from 'react';
import { FaStar, FaThumbsUp, FaUserShield, FaHandshake } from 'react-icons/fa';

const reasons = [
    { icon: <FaStar className="text-4xl text-white" />, title: 'Quality Service', description: 'We deliver high-quality service that exceeds expectations.' },
    { icon: <FaThumbsUp className="text-4xl text-white" />, title: 'Customer Satisfaction', description: 'Our focus is on achieving complete customer satisfaction with every project.' },
    { icon: <FaUserShield className="text-4xl text-white" />, title: 'Reliable & Trustworthy', description: 'We are known for our reliability and trustworthiness in every engagement.' },
    { icon: <FaHandshake className="text-4xl text-white" />, title: 'Partnership Approach', description: 'We work closely with you to build lasting partnerships and achieve your goals.' },
];

const WhyChooseUs: React.FC = () => {
    return (
        <section className="py-16 px-6  dark:bg-dark">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-3xl font-bold mb-12 text-body dark:text-white">Why Choose <span className='text-accent' >Dimarak</span>?</h2>
                <div className="grid grid-cols-1 bg-primary  dark:bg-dark border rounded-[20px] border-gray-200 sm:grid-cols-2 lg:grid-cols-4">
                    {reasons.map((reason, index) => (
                        <div
                            key={index}
                            className="dark:bg-dark   dark:border-gray-700 p-6 flex flex-col  justify-center rounded-lg"
                        >
                            <div className="mb-4 ">
                                {reason.icon}
                            </div>
                            <h3 className="text-xl font-semibold text-white dark:text-white mb-2">{reason.title}</h3>
                            <p className="text-white text-sm dark:text-gray-300">{reason.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
