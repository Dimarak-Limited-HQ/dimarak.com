'use client';
import NavLinks from './NavLinks';
import SignInSignUpLinks from './SignInSignUpLinks';

interface DrawerProps {
    isOpen: boolean;
    toggleDrawer: () => void;
}

const Drawer: React.FC<DrawerProps> = ({ isOpen, toggleDrawer }) => {
    return (
        <>
            {/* Mobile Drawer */}
            <div
                className={`fixed top-0 left-0 h-screen w-[80%] bg-white dark:bg-dark shadow-lg transform ${isOpen ? 'translate-x-0' : '-translate-x-full'
                    } transition-transform duration-300 ease-in-out z-60`}
            >
                <div className="p-6 bg-white dark:bg-dark">
                    <NavLinks onClick={toggleDrawer} isMobile />
                </div>

                {/* Mobile Sign In and Sign Up Links */}
                <div className="p-6">
                    <SignInSignUpLinks isMobile />
                </div>
            </div>
        </>
    );
};

export default Drawer;
