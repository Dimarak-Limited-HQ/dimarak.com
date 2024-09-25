import React from 'react';
import Button from '../shared/Button';

const NewsletterSignup: React.FC = () => {
    return (
        <div>
            <h3 className="text-xl font-bold mb-4 dark:text-white  text-dark">Newsletter Signup</h3>
            <p className="mb-4 dark:text-gray-300  text-paragraph">Subscribe to our newsletter to receive the latest updates and offers.</p>
            <form>
                <input
                    type="email"
                    placeholder="Enter your email"
                    className="p-2 px-4 mb-8 w-full rounded-[20px] bg-gray-100 border border-gray-300 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary"
                />
               <Button bg href={''}>
                Subscribe
               </Button>
            </form>
        </div>
    );
};

export default NewsletterSignup;
