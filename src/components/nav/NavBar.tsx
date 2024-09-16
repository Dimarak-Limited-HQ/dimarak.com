'use client';
import React, { useState } from 'react';
import ThemeToggle from './ThemeToggle';
import LogoSection from './LogoSection';
import NavLinks from './NavLinks';
import MobileMenuButton from './MobileMenuButton';
import Drawer from './Drawer';
import Link from 'next/link';

const NavBar: React.FC = () => {
    const [drawerOpen, setDrawerOpen] = useState(false);

    const toggleDrawer = () => {
        setDrawerOpen(!drawerOpen);
    };

    return (
        <nav className="h-[70px] fixed top-0 left-0 w-full flex items-center justify-between bg-white bg-opacity-70 dark:bg-dark dark:bg-opacity-70 border-b border-gray-200 dark:border-gray-600 px-4 z-50">
            <LogoSection />
            <MobileMenuButton drawerOpen={drawerOpen} toggleDrawer={toggleDrawer} />

            <div className="hidden md:flex flex-1 justify-center">
                <NavLinks />
            </div>


            <div className="hidden md:flex items-center justify-end flex-1 space-x-4">
                <ThemeToggle />
                <Link href="/sign-in" passHref>
                    <span className="px-4 py-2 rounded-full border-2 border-primary text-link dark:text-white hover:bg-link hover:text-white transition-all">
                        Sign In
                    </span>
                </Link>

                <Link href="/sign-up" passHref>
                    <span className="px-4 py-2 rounded-full bg-primary border-2 border-primary text-white dark:text-white hover:bg-link hover:text-white transition-all">
                        Sign Up
                    </span>
                </Link>
            </div>
            <Drawer isOpen={drawerOpen} toggleDrawer={toggleDrawer} />
        </nav>
    );
};

export default NavBar;
