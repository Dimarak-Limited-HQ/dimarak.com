'use client';
import NavLinks from './NavLinks';
import Link from 'next/link';

interface DrawerProps {
    isOpen: boolean;
    toggleDrawer: () => void;
}

const Drawer: React.FC<DrawerProps> = ({ isOpen, toggleDrawer }) => {
    return (
        <>
            {/* Mobile Drawer */}
            <div
                className={`fixed top-0 left-0 h-full w-64 bg-white dark:bg-dark shadow-lg transform ${isOpen ? 'translate-x-0' : '-translate-x-full'
                    } transition-transform duration-300 ease-in-out z-60`}
            >
                <div className="p-6">
                    <NavLinks onClick={toggleDrawer} isMobile />
                    <div className="mt-8 space-y-4">
                        <Link href="/sign-in" passHref>
                            <span
                                onClick={toggleDrawer}
                                className="px-4 py-2 rounded-full border-2 border-link text-link dark:text-white hover:bg-link hover:text-white transition-all cursor-pointer"
                            >
                                Sign In
                            </span>
                        </Link>

                        <Link href="/sign-up" passHref>
                            <span
                                onClick={toggleDrawer}
                                className="px-4 py-2 rounded-full border-2 border-link text-link dark:text-white hover:bg-link hover:text-white transition-all cursor-pointer"
                            >
                                Sign Up
                            </span>
                        </Link>
                    </div>
                </div>
            </div>

            {/* Drawer Overlay */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black opacity-50 z-50 md:hidden"
                    onClick={toggleDrawer}
                ></div>
            )}
        </>
    );
};

export default Drawer;
