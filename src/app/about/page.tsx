'use client'
import React from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';


const About: React.FC = () => {
    const router = useRouter();

    // Team data
    const team = [
        {
            name: 'Michael Iddrisu',
            position: 'CEO & Co-Founder',
            imageSrc: '/mike.jpeg',
            description: 'John has over 20 years of experience leading companies and shaping the future of business innovation. His expertise in technology and business strategy drives our success.',
            id: 1,
        },
        {
            name: 'Richmond Adu-Kyere',
            position: 'CTO & Co-Founder',
            imageSrc: '/richmond.jpg',
            description: 'Jane is a tech visionary, having led the development of groundbreaking tech solutions for various industries. She is passionate about using technology to solve real-world problems.',
            id: 2,
        },
        {
            name: 'Sarfo Kusi',
            position: 'CTO & Co-Founder',
            imageSrc: '/richmond.jpg',
            description: 'Jane is a tech visionary, having led the development of groundbreaking tech solutions for various industries. She is passionate about using technology to solve real-world problems.',
            id: 3,
        },
        {
            name: 'Emmmanuel Sedem',
            position: 'Lead Graphic Designer',
            imageSrc: '/sedem.jpg',
            description: 'Jane is a tech visionary, having led the development of groundbreaking tech solutions for various industries. She is passionate about using technology to solve real-world problems.',
            id: 3,
        },
    ];

    const navigateToDetails = (id: number) => {
        router.push(`/team/${id}`);
    };

    return (
        <section className=" dark:bg-dark py-16 px-6">
            <div className="max-w-7xl mx-auto text-center">
                <h1 className="text-5xl font-extrabold mt-20 text-gray-800 dark:text-white ">
                    About Us
                </h1>
            </div>
            {/* Mission, Vision, Values without Images */}
            <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                {/* Mission */}
                <div className="p-8 bg-white border dark:bg-dark rounded-lg  text-center">
                    <h2 className="text-3xl font-bold text-primary mb-4">Our Mission</h2>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                        To deliver cutting-edge solutions that address the challenges faced by local businesses while fostering growth through innovation.
                    </p>
                </div>

                {/* Vision */}
                <div className="p-8 bg-white border dark:bg-dark rounded-lg text-center">
                    <h2 className="text-3xl font-bold text-primary mb-4">Our Vision</h2>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                        We envision a future where local businesses leverage modern solutions to compete globally and flourish sustainably.
                    </p>
                </div>

                {/* Values */}
                <div className="p-8 bg-white border dark:bg-dark rounded-lg text-center">
                    <h2 className="text-3xl font-bold text-primary mb-4">Our Values</h2>
                    <ul className="list-disc pl-5 text-gray-700 dark:text-gray-300 leading-relaxed text-left">
                        <li>Innovation & Excellence</li>
                        <li>Integrity & Transparency</li>
                        <li>Collaboration & Partnership</li>
                        <li>Client-Centric Approach</li>
                    </ul>
                </div>
            </div>

            {/* Team Section */}
            <div className="mt-16 max-w-7xl mx-auto text-center">
                <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-8">Meet Our Team</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {team.map((member) => (
                        <div
                            key={member.id}
                            className="bg-white dark:bg-dark border p-6 rounded-lg cursor-pointer hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
                            onClick={() => navigateToDetails(member.id)}
                        >
                            <Image
                                src={member.imageSrc}
                                alt={member.name}
                                className="w-40 h-40 mx-auto rounded-full object-cover mb-4"
                                width={160}
                                height={160}
                            />
                            <h3 className="text-xl font-semibold text-primary mb-2">{member.name}</h3>
                            <p className="text-gray-600 dark:text-gray-300">{member.position}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default About;
