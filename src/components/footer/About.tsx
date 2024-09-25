import React from 'react';

import SocialIcons from '../shared/Socials';
import Logo from '../shared/Logo';

const AboutUs: React.FC = () => {
    return (
        <div>
            <Logo />
            <p className="mb-4 dark:text-gray-300 text-paragraph">
                A forward-thinking technology company committed to transforming local businesses into modern, competitive enterprises through innovative solutions.
            </p>
            <SocialIcons/>
        </div>
    );
};

export default AboutUs;
