'use client';
import ThemeToggle from './ThemeToggle'; // Assuming you already have a ThemeToggle component
import Button from '../shared/Button';
interface SignInSignUpLinksProps {
    isMobile?: boolean;
}

const SignInSignUpLinks: React.FC<SignInSignUpLinksProps> = ({ isMobile = false }) => {
  

    return (
        <div className={`flex space-x-4 ${isMobile ? 'items-center justify-start' : 'items-center justify-end '}`}>
         <ThemeToggle />
            <Button href="/sign-in">
                Sign In
            </Button>
            <Button href="/sign-up" bg>
                Sign Up
            </Button>
        </div>
    );
};

export default SignInSignUpLinks;
