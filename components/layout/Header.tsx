'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Experiences', path: '/experiences' },
  { name: 'Accommodation', path: '/accommodation' },
  { name: 'Explore', path: '/explore' },
  // { name: 'Contact', path: '/contact' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  // Check if we're on the home page
  const isHomePage = pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    // Set initial state
    handleScroll();
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Determine if nav should use white text
  // White text only on home page when not scrolled
  const useWhiteText = isHomePage && !isScrolled;

  // Background classes
  const bgClasses = isScrolled 
    ? 'bg-white/95 backdrop-blur-md shadow-lg' 
    : 'bg-transparent';

  // Text color classes for logo
  const logoTextClasses = useWhiteText 
    ? 'text-white' 
    : 'text-clay-800';

  const logoSubTextClasses = useWhiteText 
    ? 'text-white/90' 
    : 'text-clay-600';

  // Text color classes for nav items
  const getNavItemClasses = (isActive: boolean) => {
    if (useWhiteText) {
      return isActive 
        ? 'text-white' 
        : 'text-white/80 hover:text-white';
    }
    return isActive 
      ? 'text-clay-700' 
      : 'text-gray-600 hover:text-clay-700';
  };

  // Mobile menu button color
  const mobileMenuIconClasses = useWhiteText 
    ? 'text-white' 
    : 'text-clay-800';

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${bgClasses}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/">
            <motion.div
              className="flex items-center space-x-3"
              whileHover={{ scale: 1.05 }}
            >
              <div className="w-12 h-12 bg-clay-600 rounded-full flex items-center justify-center">
                {/* <span className="text-2xl">🌾</span> */}
                <img src='/images/logo/logo.png'/>
              </div>
              <div>
                <h1 className={`font-display text-xl font-bold transition-colors ${logoTextClasses}`}>
                  Echo Home Relax
                </h1>
                <p className={`text-xs transition-colors ${logoSubTextClasses}`}>
                  Authentic Village Experience
                </p>
              </div>
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => {
              const isActive = pathname === item.path;
              return (
                <Link key={item.path} href={item.path}>
                  <motion.span
                    className={`relative font-medium transition-colors ${getNavItemClasses(isActive)}`}
                    whileHover={{ y: -2 }}
                  >
                    {item.name}
                    {isActive && (
                      <motion.div
                        className={`absolute -bottom-1 left-0 right-0 h-0.5 ${
                          useWhiteText ? 'bg-white' : 'bg-clay-600'
                        }`}
                        layoutId="underline"
                      />
                    )}
                  </motion.span>
                </Link>
              );
            })}
            <motion.a
              href="/contact"
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                useWhiteText
                  ? 'bg-white text-clay-700 hover:bg-white/90'
                  : 'bg-clay-600 text-white hover:bg-clay-700'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Book Now
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className={`transition-colors ${mobileMenuIconClasses}`} size={28} />
            ) : (
              <Menu className={`transition-colors ${mobileMenuIconClasses}`} size={28} />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              className="lg:hidden mt-4 py-4 bg-white rounded-2xl shadow-xl"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
            >
              {navItems.map((item, index) => {
                const isActive = pathname === item.path;
                return (
                  <motion.div
                    key={item.path}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      href={item.path}
                      className={`block px-6 py-3 transition-colors ${
                        isActive
                          ? 'text-clay-700 font-semibold bg-clay-50'
                          : 'text-gray-600 hover:bg-clay-50'
                      }`}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                );
              })}
              <div className="px-6 pt-4">
                <a
                  href="/contact"
                  className="block text-center bg-clay-600 text-white px-6 py-3 rounded-full font-medium hover:bg-clay-700 transition"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Book Now
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
}