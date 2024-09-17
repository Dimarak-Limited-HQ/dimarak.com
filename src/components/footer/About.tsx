import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa';
import SocialIcons from '../shared/Socials';
import Logo from '../shared/logo';

const AboutUs: React.FC = () => {
    return (
        <div>
            <Logo />
            <p className="mb-4 dark:text-white text-paragraph">
                A forward-thinking technology company committed to transforming local businesses into modern, competitive enterprises through innovative solutions.            </p>
            <SocialIcons/>
        </div>
    );
};

export default AboutUs;
