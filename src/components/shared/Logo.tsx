'use client';
import React from 'react';
import Image from 'next/image';
import { useTheme } from 'next-themes';

const Logo: React.FC = () => {
    const { theme } = useTheme();

    return (
        <div
            className={`logo w-250 h-200 ${theme === 'dark' ? 'filter invert' : ''}`}
        >
            <Image
                src="/svg/logo.svg"
                alt="logo"
                width={200}
                height={200}
            />
        </div>
    );
};

export default Logo;
