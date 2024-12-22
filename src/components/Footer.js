import React from 'react';
import qrImage from '../assets/qr.jpg';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 px-6 md:px-20">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0">
        
        {/* Contact Info Section */}
        <div className="text-center md:text-left">
          <h3 className="text-xl font-semibold text-yellow-400 mb-4">معلومات الاتصال</h3>
          <p className="text-gray-300">يمكنكم التواصل معنا عبر البريد الإلكتروني أو وسائل التواصل الاجتماعي.</p>
        </div>

        {/* QR Code Section */}
        <div className="text-center">
          <h3 className="text-xl font-semibold text-yellow-400 mb-4">رمز الاستجابة السريعة (QR)</h3>
          <img src={qrImage} alt="QR Code" className="w-[220px] h-[220px] md:w-[250px] md:h-[250px] mx-auto mb-6 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300" />
          <p className="text-lg md:text-xl text-gray-300">
            حساب إنستا باي: <strong className="text-yellow-400">nzalshrif@instapay</strong>
          </p>
        </div>

      </div>
      <div className="text-center mt-8 text-gray-400">
        <p>© 2024 جميع الحقوق محفوظة</p>
      </div>
    </footer>
  );
};

export default Footer;
