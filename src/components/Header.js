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

        {/* Navigation Links */}
        <nav className="flex space-x-4 space-x-reverse text-white text-lg font-semibold">
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
