import { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
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
            <a href="#" className="text-gray-800 hover:text-[#0B7077] font-medium">Home</a>
            <a href="#" className="text-gray-800 hover:text-[#0B7077] font-medium">About Us</a>
            <a href="#" className="text-gray-800 hover:text-[#0B7077] font-medium">Courses</a>
            <a href="#" className="text-gray-800 hover:text-[#0B7077] font-medium">Contact</a>
          </nav>

          {/* Auth Buttons - Always visible on desktop */}
          <div className="flex space-x-4 ml-8">
            <a 
              href="/login" 
              className="px-4 py-2 rounded-md font-medium transition-colors
              text-gray-800 hover:text-[#0B7077] hover:bg-gray-100 border border-gray-300"
            >
              Login
            </a>
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
            <a href="#" className="text-gray-800 hover:text-[#0B7077] py-2">Home</a>
            <a href="#" className="text-gray-800 hover:text-[#0B7077] py-2">About Us</a>
            <a href="#" className="text-gray-800 hover:text-[#0B7077] py-2">Courses</a>
            <a href="#" className="text-gray-800 hover:text-[#0B7077] py-2">Contact</a>
            {/* Mobile Auth Buttons - Only in dropdown on small screens */}
            <div className="pt-4 border-t border-gray-200 mt-2">
              <a 
                href="/login" 
                className="block w-full text-center py-2 rounded-md font-medium transition-colors
                text-gray-800 hover:bg-gray-100 border border-gray-300 mb-2"
              >
                Login
              </a>
              <a 
                href="/signup" 
                className="block w-full text-center py-2 rounded-md font-medium transition-colors
                bg-[#0B7077] text-white hover:bg-blue-700"
              >
                Sign Up
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;