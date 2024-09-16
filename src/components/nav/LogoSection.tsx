'use client';
import Link from 'next/link';
import Logo from '../shared/logo';

const LogoSection: React.FC = () => {
    return (
        <div className="flex flex-1">
            <Link href="/" passHref>
                <span id="logo" className="cursor-pointer">
                    <Logo />
                </span>
            </Link>
        </div>
    );
};

export default LogoSection;
