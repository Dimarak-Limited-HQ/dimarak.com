// components/SocialIcons.tsx
import React from 'react';
import { RiTwitterXLine, RiGithubLine, RiLinkedinLine, RiFacebookBoxFill } from "react-icons/ri";

const SocialIcons: React.FC = () => {
    return (
        <div className="flex dark:text-white space-x-4">
            <a href="https://github.com/dimarak" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="hover:text-blue-500 transform transition-transform duration-300 hover:scale-110">
                <RiGithubLine size={24} />
            </a>
            <a href="http://linkedin.com/in/dimarak" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-blue-500 transform transition-transform duration-300 hover:scale-110">
                <RiLinkedinLine size={24} />
            </a>
            <a href="https://twitter.com/dimarak" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="hover:text-blue-500 transform transition-transform duration-300 hover:scale-110">
                <RiTwitterXLine size={24} />
            </a>
            <a href="mailto:dimaraklimited@gmail.com" aria-label="Email" className="hover:text-blue-500 transform transition-transform duration-300 hover:scale-110">
                <RiFacebookBoxFill size={24} />
            </a>
        </div>
    );
};

export default SocialIcons;
