import { useState } from 'react';
import { Link } from "react-router-dom";
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Handler for navigation items that don't have real links yet
  const handleNavigationClick = (e, section) => {
    e.preventDefault();
    console.log(`Navigating to: ${section}`);
    // You can replace this with actual navigation logic
  };

  return (
    <header className="bg-white shadow-md relative">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <span className="text-2xl font-bold text-[#0B7077]">EduVibe</span>
        </div>

        {/* Desktop Navigation - visible on medium screens and up */}
        <div className="hidden md:flex items-center space-x-8">
          <nav className="flex space-x-8">
            <button 
              onClick={(e) => handleNavigationClick(e, 'Home')}
              className="text-gray-800 hover:text-[#0B7077] font-medium bg-transparent border-none cursor-pointer p-0"
            >
              Home
            </button>
            <button 
              onClick={(e) => handleNavigationClick(e, 'About Us')}
              className="text-gray-800 hover:text-[#0B7077] font-medium bg-transparent border-none cursor-pointer p-0"
            >
              About Us
            </button>
            <button 
              onClick={(e) => handleNavigationClick(e, 'Courses')}
              className="text-gray-800 hover:text-[#0B7077] font-medium bg-transparent border-none cursor-pointer p-0"
            >
              Courses
            </button>
            <button 
              onClick={(e) => handleNavigationClick(e, 'Contact')}
              className="text-gray-800 hover:text-[#0B7077] font-medium bg-transparent border-none cursor-pointer p-0"
            >
              Contact
            </button>
          </nav>

          {/* Auth Buttons - Always visible on desktop */}
          <div className="flex space-x-4 ml-8">
            <Link
              to="/login" 
              className="px-4 py-2 rounded-md font-medium transition-colors
              text-gray-800 hover:text-[#0B7077] hover:bg-gray-100 border border-gray-300"
            >
              Login
            </Link>
            <a 
              href="/signup" 
              className="px-4 py-2 rounded-md font-medium transition-colors
              bg-[#0B7077] text-white hover:bg-blue-700"
            >
              Sign Up
            </a>
          </div>
        </div>

        {/* Mobile menu button - visible on small screens */}
        <div className="md:hidden flex items-center space-x-4">
          {/* Auth Buttons - Visible on mobile too */}
          <div className="hidden sm:flex space-x-2">
            <a href="/login" className="px-3 py-1 text-sm text-gray-800">Login</a>
            <a href="/signup" className="px-3 py-1 text-sm bg-[#0B7077] text-white rounded">Sign Up</a>
          </div>
          <button 
            onClick={toggleMenu}
            className="text-gray-800 focus:outline-none"
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu - appears when hamburger is clicked */}
      {isMenuOpen && (
        <div className="md:hidden bg-white py-2 px-4 shadow-lg">
          <div className="flex flex-col space-y-3">
            <button 
              onClick={(e) => handleNavigationClick(e, 'Home')}
              className="text-gray-800 hover:text-[#0B7077] py-2 text-left bg-transparent border-none cursor-pointer"
            >
              Home
            </button>
            <button 
              onClick={(e) => handleNavigationClick(e, 'About Us')}
              className="text-gray-800 hover:text-[#0B7077] py-2 text-left bg-transparent border-none cursor-pointer"
            >
              About Us
            </button>
            <button 
              onClick={(e) => handleNavigationClick(e, 'Courses')}
              className="text-gray-800 hover:text-[#0B7077] py-2 text-left bg-transparent border-none cursor-pointer"
            >
              Courses
            </button>
            <button 
              onClick={(e) => handleNavigationClick(e, 'Contact')}
              className="text-gray-800 hover:text-[#0B7077] py-2 text-left bg-transparent border-none cursor-pointer"
            >
              Contact
            </button>
            {/* Mobile Auth Buttons - Only in dropdown on small screens */}
            <div className="pt-4 border-t border-gray-200 mt-2">
              <Link
                href="/login" 
                className="block w-full text-center py-2 rounded-md font-medium transition-colors
                text-gray-800 hover:bg-gray-100 border border-gray-300 mb-2"
              >
                Login
              </Link>
              <Link
                to="/signup" 
                className="block w-full text-center py-2 rounded-md font-medium transition-colors
                bg-[#0B7077] text-white hover:bg-blue-700"
              >
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;