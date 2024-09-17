import React from 'react';
import { FaBusinessTime, FaCalendarAlt, FaProjectDiagram, FaGlobe } from 'react-icons/fa'; // Using React Icons for demo

const milestones = [
    { value: '500+', label: 'Businesses Transformed', icon: <FaBusinessTime className="text-4xl text-primary" /> },
    { value: '15', label: 'Years of Innovation', icon: <FaCalendarAlt className="text-4xl text-primary" /> },
    { value: '1000+', label: 'Projects Completed', icon: <FaProjectDiagram className="text-4xl text-primary" /> },
    { value: '50+', label: 'Global Partners', icon: <FaGlobe className="text-4xl text-primary" /> },
];

const BusinessMilestones: React.FC = () => {
    return (
        <section className="py-16 px-6">
            <div className="max-w-7xl mx-auto text-center">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
                    {milestones.map((milestone, index) => (
                        <div
                            key={index}
                            className={`bg-white dark:bg-dark border-t border-b border-gray-200 dark:border-gray-700 p-6 flex flex-col items-center justify-center 
                                ${index === 0 ? '' : 'border-l'} 
                                ${index === milestones.length - 1 ? '' : 'border-r'} 
                                `}
                        >
                            <div className="mb-4">
                                {milestone.icon}
                            </div>
                            <span className="text-4xl font-bold text-link dark:text-white">{milestone.value}</span>
                            <span className="text-gray-600 dark:text-gray-300 mt-2">{milestone.label}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default BusinessMilestones;
