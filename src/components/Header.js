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
    <header className="bg-transparent backdrop-blur-md text-black py-4 px-6 md:py-6 md:px-12 flex justify-between items-center" dir="rtl">
      {/* Logo */}
      <a href="/" aria-label="Home">
        <img src={logo} alt="شعار الجمعية" className="w-48 h-48 md:w-64 md:h-64 object-contain" />
      </a>

      {/* Burger Menu */}
      <div className="md:hidden flex items-center">
        <button
          onClick={toggleMenu}
          className="text-black focus:outline-none"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          ) : (
            <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          )}
        </button>
      </div>

      {/* Navigation Links */}
      <nav className="hidden md:flex space-x-4 space-x-reverse text-lg font-semibold">
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

      {/* Dropdown for Mobile */}
      <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} absolute top-16 right-0 bg-white shadow-lg rounded-lg w-48 p-4`}>
        <button
          onClick={() => handleNavigationAndScroll('activities')}
          className="w-full text-right hover:text-red-600 focus:outline-none transition duration-300"
          aria-label="Scroll to الأنشطة"
        >
          الأنشطة
        </button>
        <button
          onClick={() => handleNavigationAndScroll('goals')}
          className="w-full text-right hover:text-red-600 focus:outline-none transition duration-300"
          aria-label="Scroll to الأهداف"
        >
          الأهداف
        </button>
        <button
          onClick={() => handleNavigationAndScroll('about')}
          className="w-full text-right hover:text-red-600 focus:outline-none transition duration-300"
          aria-label="Scroll to عن الجمعية"
        >
          عن الجمعية
        </button>
        <button
          onClick={() => handleNavigationAndScroll('donate')}
          className="w-full text-right hover:text-red-600 focus:outline-none transition duration-300"
          aria-label="Scroll to للتبرع"
        >
          للتبرع
        </button>
      </div>
    </header>
  );
};

export default Header;
