'use client';
import Link from 'next/link';

const navLinks = [
    { label: 'Home', link: '/' },
    { label: 'About Us', link: '/about' },
    { label: 'Services', link: '/services' },
    { label: 'Contact', link: '/contact' },
];

interface NavLinksProps {
    onClick?: () => void;
    isMobile?: boolean;
}

const NavLinks: React.FC<NavLinksProps> = ({ onClick, isMobile = false }) => {
    return (
        <ul className={`flex ${isMobile ? 'flex-col space-y-8 mt-20' : 'items-center space-x-8'}`}>
            {navLinks.map((navlink, id) => (
                <li key={id}>
                    <Link href={navlink.link} passHref>
                        <span
                            onClick={onClick}
                            className="text-link dark:text-white font-medium hover:text-voilet dark:hover:text-voilet cursor-pointer"
                        >
                            {navlink.label}
                        </span>
                    </Link>
                </li>
            ))}
        </ul>
    );
};

export default NavLinks;
