import React from 'react';
import { Link } from 'react-router-dom';
const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  return <footer className="bg-neutral-50 py-8 border-t border-neutral-200">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <Link to="/" className="text-2xl font-bold">
              EF.
            </Link>
          </div>
          
          <nav className="flex space-x-6 mb-4 md:mb-0">
            <Link to="/" className="text-neutral-700 hover:text-primary-500 transition-colors">
              Home
            </Link>
            <Link to="/about" className="text-neutral-700 hover:text-primary-500 transition-colors">
              About Me
            </Link>
            <Link to="/#work" className="text-neutral-700 hover:text-primary-500 transition-colors">
              Work
            </Link>
            <Link to="/contact" className="text-neutral-700 hover:text-primary-500 transition-colors">
              Contact
            </Link>
          </nav>
          
          <div className="flex space-x-4">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-neutral-700 hover:text-primary-500 transition-colors">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16 8C17.5913 8 19.1174 8.63214 20.2426 9.75736C21.3679 10.8826 22 12.4087 22 14V21H18V14C18 13.4696 17.7893 12.9609 17.4142 12.5858C17.0391 12.2107 16.5304 12 16 12C15.4696 12 14.9609 12.2107 14.5858 12.5858C14.2107 12.9609 14 13.4696 14 14V21H10V14C10 12.4087 10.6321 10.8826 11.7574 9.75736C12.8826 8.63214 14.4087 8 16 8Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M6 9H2V21H6V9Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M4 6C5.10457 6 6 5.10457 6 4C6 2.89543 5.10457 2 4 2C2.89543 2 2 2.89543 2 4C2 5.10457 2.89543 6 4 6Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-neutral-700 hover:text-primary-500 transition-colors">
              
            </a>
          </div>
        </div>
        
        <div className="mt-8 text-center text-neutral-600 text-sm">
          <p>&copy; {currentYear} EF. All rights reserved.</p>
        </div>
      </div>
    </footer>;
};
export default Footer;