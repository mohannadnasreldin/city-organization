import React from 'react';
import logo from '../assets/logo.png';

const Header = () => {
  const handleScroll = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="bg-green-50 shadow-md backdrop-blur-md text-gray-900 py-6 px-8 md:px-12 flex justify-between items-center shadow-lg" dir="rtl">
      <img src={logo} alt="Logo" className="w-20 h-20 md:w-24 md:h-24 object-contain" />
      <nav className="flex space-x-4 space-x-reverse text-lg font-semibold">
        <button
          onClick={() => handleScroll('activities')}
          className="hover:text-green-300 transition duration-300"
        >
          الأنشطة
        </button>
        <button
          onClick={() => handleScroll('about')}
          className="hover:text-green-300 transition duration-300"
        >
          عن الجمعية
        </button>
        <button
          onClick={() => handleScroll('donate')}
          className="hover:text-green-300 transition duration-300"
        >
          للتبرع
        </button>
      </nav>
    </header>
  );
};

export default Header;
