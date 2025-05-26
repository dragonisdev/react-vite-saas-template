import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-background/80 backdrop-blur-md border-b border-white/10 py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <a href="#" className="flex items-center">
            <svg
              className="w-8 h-8 mr-2"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M16 2L2 9L16 16L30 9L16 2Z" fill="#8250FF" />
              <path
                d="M2 16L16 23L30 16"
                stroke="#8250FF"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M2 23L16 30L30 23"
                stroke="#8250FF"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className="text-xl font-bold">Deployify</span>
          </a>
        </div>

        <nav className="hidden md:flex items-center space-x-8">
          <a href="#features" className="text-sm text-white/80 hover:text-white transition-colors">
            Features
          </a>
          <a href="#how-it-works" className="text-sm text-white/80 hover:text-white transition-colors">
            How It Works
          </a>
          <a href="#pricing" className="text-sm text-white/80 hover:text-white transition-colors">
            Pricing
          </a>
          <a href="#faq" className="text-sm text-white/80 hover:text-white transition-colors">
            FAQ
          </a>
        </nav>

        <div className="hidden md:flex items-center space-x-4">
          <a href="#" className="text-sm text-white/80 hover:text-white transition-colors">
            Login
          </a>
          <a href="#" className="btn-primary">
            Sign Up
          </a>
        </div>

        <button
          onClick={toggleMenu}
          className="md:hidden text-white/80 hover:text-white p-2"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.2 }}
          className="md:hidden bg-background/95 backdrop-blur-lg border-b border-white/10"
        >
          <div className="container mx-auto py-4 flex flex-col space-y-4">
            <a
              href="#features"
              className="text-sm text-white/80 hover:text-white py-2 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Features
            </a>
            <a
              href="#how-it-works"
              className="text-sm text-white/80 hover:text-white py-2 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              How It Works
            </a>
            <a
              href="#pricing"
              className="text-sm text-white/80 hover:text-white py-2 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Pricing
            </a>
            <a
              href="#faq"
              className="text-sm text-white/80 hover:text-white py-2 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              FAQ
            </a>
            <div className="pt-4 border-t border-white/10 flex flex-col space-y-4">
              <a
                href="#"
                className="text-sm text-white/80 hover:text-white py-2 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Login
              </a>
              <a href="#" className="btn-primary text-center" onClick={() => setIsOpen(false)}>
                Sign Up
              </a>
            </div>
          </div>
        </motion.div>
      )}
    </header>
  );
};