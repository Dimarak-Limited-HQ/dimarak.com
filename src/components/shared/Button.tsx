import Link from "next/link";
import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    href: string;
    bg?: boolean; 
}

const Button: React.FC<ButtonProps> = ({ children, href = '/', bg = false, ...props }) => {
    return (
        <Link href={href} passHref>
            <span
                role="button"
                className={`border-2 rounded-full py-2 px-4 transition ease-in-out duration-700
                    ${bg
                        ? 'bg-primary text-white border-primary'
                        : 'bg-white text-link border-blue-500 dark:bg-dark dark:text-white dark:border-white dark:hover:bg-gray-900'
                    } 
                    hover:bg-link hover:text-white`}
                {...props}
            >
                {children}
            </span>
        </Link>
    );
}

export default Button;
