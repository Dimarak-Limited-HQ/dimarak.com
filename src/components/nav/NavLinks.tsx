'use client';
import Link from 'next/link';
import {usePathname} from 'next/navigation';

const navLinks = [
    { label: 'Home', link: '/' },
    { label: 'About', link: '/about' },
    { label: 'Services', link: '/services' },
];

interface NavLinksProps {
    onClick?: () => void;
    isMobile?: boolean;
}

const NavLinks: React.FC<NavLinksProps> = ({ onClick, isMobile = false }) => {
    const currentPath = usePathname();

    return (
        <ul className={`flex ${isMobile ? 'flex-col space-y-8 mt-20' : 'items-center space-x-8'}`}>
            {navLinks.map((navlink, id) => (
                <li key={id}>
                    <Link href={navlink.link} passHref>
                        <span
                            onClick={onClick}
                            className={`font-medium cursor-pointer ${currentPath === navlink.link
                                    ? 'text-primary dark:text-voilet'
                                    : 'text-link dark:text-white'
                                } hover:text-primary dark:hover:text-voilet`}
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
