
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-sm py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">
          EF.
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/" className="animated-underline text-neutral-900 hover:text-primary-500 transition-colors">
            Home
          </Link>
          <Link to="/about" className="animated-underline text-neutral-900 hover:text-primary-500 transition-colors">
            About Me
          </Link>
          <Link to="/#work" className="animated-underline text-neutral-900 hover:text-primary-500 transition-colors">
            Work
          </Link>
          <Link to="/contact" className="animated-underline text-neutral-900 hover:text-primary-500 transition-colors">
            Contact
          </Link>
        </nav>

        {/* Mobile menu button */}
        <button 
          className="md:hidden text-neutral-900"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          >
            {mobileMenuOpen ? (
              <path d="M18 6L6 18M6 6l12 12" />
            ) : (
              <path d="M3 12h18M3 6h18M3 18h18" />
            )}
          </svg>
        </button>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-white shadow-md md:hidden animate-fade-in">
            <div className="flex flex-col py-4">
              <Link 
                to="/" 
                className="px-4 py-3 hover:bg-neutral-100"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/about" 
                className="px-4 py-3 hover:bg-neutral-100"
                onClick={() => setMobileMenuOpen(false)}
              >
                About Me
              </Link>
              <Link 
                to="/#work" 
                className="px-4 py-3 hover:bg-neutral-100"
                onClick={() => setMobileMenuOpen(false)}
              >
                Work
              </Link>
              <Link 
                to="/contact" 
                className="px-4 py-3 hover:bg-neutral-100"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
