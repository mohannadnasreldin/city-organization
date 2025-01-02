import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/logo.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleNavigationAndScroll = (sectionId) => {
    navigate('/');
    setTimeout(() => {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-gradient-to-r from-green-400 via-green-500 to-green-600 backdrop-blur-md text-black py-4 px-6 md:py-6 md:px-12 flex justify-center items-center" dir="rtl">
      {/* Logo and Navigation Container */}
      <div className="flex flex-col items-center space-y-4 w-full md:w-auto">
        {/* Logo */}
        <a href="/" aria-label="Home">
          <img src={logo} alt="شعار الجمعية" className="w-48 h-48 md:w-64 md:h-64 object-contain bg-gray-50 shadow-lg rounded-full" />
        </a>
        
        {/* Menu Button for Mobile */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-white focus:outline-none"
          aria-label="Toggle menu"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        {/* Navigation Links for Mobile (conditional rendering based on isMenuOpen) */}
        {isMenuOpen && (
          <nav className="flex flex-col items-center space-y-4 text-white text-lg font-semibold md:hidden">
            <button
              onClick={() => handleNavigationAndScroll('activities')}
              className="hover:text-red-600 focus:outline-none transition duration-300"
              aria-label="Scroll to الأنشطة"
            >
              الأنشطة
            </button>
            <button
              onClick={() => handleNavigationAndScroll('goals')}
              className="hover:text-red-600 focus:outline-none transition duration-300"
              aria-label="Scroll to الأهداف"
            >
              الأهداف
            </button>
            <button
              onClick={() => handleNavigationAndScroll('volunteer')}
              className="hover:text-red-600 focus:outline-none transition duration-300"
              aria-label="Scroll to المتطوعين"
            >
              العمل التطوعي
            </button>
            <button
              onClick={() => handleNavigationAndScroll('about')}
              className="hover:text-red-600 focus:outline-none transition duration-300"
              aria-label="Scroll to عن الجمعية"
            >
              عن الجمعية
            </button>
            <button
              onClick={() => handleNavigationAndScroll('founders')}
              className="hover:text-red-600 focus:outline-none transition duration-300"
              aria-label="Scroll to لاعضاء مجلس الادارة"
            >
              اعضاء مجلس الادارة
            </button>
            <button
              onClick={() => handleNavigationAndScroll('donate')}
              className="hover:text-red-600 focus:outline-none transition duration-300"
              aria-label="Scroll to للتبرع"
            >
              للتبرع
            </button>
          </nav>
        )}

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex space-x-4 md:space-x-reverse text-white text-lg font-semibold">
          <button
            onClick={() => handleNavigationAndScroll('activities')}
            className="hover:text-red-600 focus:outline-none transition duration-300"
            aria-label="Scroll to الأنشطة"
          >
            الأنشطة
          </button>
          <button
            onClick={() => handleNavigationAndScroll('goals')}
            className="hover:text-red-600 focus:outline-none transition duration-300"
            aria-label="Scroll to الأهداف"
          >
            الأهداف
          </button>
          <button
            onClick={() => handleNavigationAndScroll('volunteer')}
            className="hover:text-red-600 focus:outline-none transition duration-300"
            aria-label="Scroll to المتطوعين"
          >
            العمل التطوعي
          </button>
          <button
            onClick={() => handleNavigationAndScroll('about')}
            className="hover:text-red-600 focus:outline-none transition duration-300"
            aria-label="Scroll to عن الجمعية"
          >
            عن الجمعية
          </button>
          <button
            onClick={() => handleNavigationAndScroll('founders')}
            className="hover:text-red-600 focus:outline-none transition duration-300"
            aria-label="Scroll to لاعضاء مجلس الادارة"
          >
            اعضاء مجلس الادارة
          </button>
          <button
            onClick={() => handleNavigationAndScroll('donate')}
            className="hover:text-red-600 focus:outline-none transition duration-300"
            aria-label="Scroll to للتبرع"
          >
            للتبرع
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
