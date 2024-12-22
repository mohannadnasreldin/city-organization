import React from 'react';
import logo from '../assets/logo.png';

const Header = () => {
  const handleScroll = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="bg-gray-900 text-white py-6 px-8 md:px-12 md:py-8 flex justify-between items-center shadow-xl" dir="rtl">
      {/* Logo Section */}
      <img
        src={logo}
        alt="Logo"
        className="w-[120px] h-[120px] md:w-[150px] md:h-[150px] object-contain"
      />

      {/* Navigation Section */}
      <nav className="flex space-x-6 space-x-reverse text-lg font-semibold">
        <button
          onClick={() => handleScroll('activities')}
          className="focus:outline-none transition-all duration-300 ease-in-out hover:text-yellow-400"
        >
          الأنشطة
        </button>
        <button
          onClick={() => handleScroll('about')}
          className="focus:outline-none transition-all duration-300 ease-in-out hover:text-yellow-400"
        >
          عن الجمعية
        </button>
        <button
          onClick={() => handleScroll('donate')}
          className="focus:outline-none transition-all duration-300 ease-in-out hover:text-yellow-400"
        >
          للتبرع
        </button>
      </nav>
    </header>
  );
};

export default Header;
