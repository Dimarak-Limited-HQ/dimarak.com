'use client';
import { FiMenu, FiX } from 'react-icons/fi';

interface MobileMenuButtonProps {
    drawerOpen: boolean;
    toggleDrawer: () => void;
}

const MobileMenuButton: React.FC<MobileMenuButtonProps> = ({ drawerOpen, toggleDrawer }) => {
    return (
        <button onClick={toggleDrawer} className="text-link dark:text-white md:hidden">
            {drawerOpen ? <FiX size={30} /> : <FiMenu size={30} />}
        </button>
    );
};

export default MobileMenuButton;
