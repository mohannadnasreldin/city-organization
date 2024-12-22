import React from 'react';
import { FaFacebook } from 'react-icons/fa';
import { FaTelegram } from 'react-icons/fa';
import { FaWhatsapp } from 'react-icons/fa';
import qrImage from '../assets/qr.jpg';
import wp from '../assets/wp qr.jpg';
import telegram from '../assets/telegram qr.jpg';

const Footer = () => {
  return (
    <footer className="bg-green-900 text-white py-12 px-6 md:px-20" dir="rtl">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0">
        
        {/* Contact Info Section */}
        <div className="text-center md:text-right">
          <h3 className="text-xl font-semibold text-yellow-300 mb-4">معلومات الاتصال</h3>
          <p className="text-gray-300">
            للتواصل معنا: يمكنكم إرسال رسالة عبر البريد الإلكتروني أو متابعتنا على وسائل التواصل الاجتماعي.
          </p>
          <div className="flex justify-center md:justify-start space-x-4 rtl:space-x-reverse mt-4">
            <img
              src={wp}
              alt="WP QR Code"
              className="w-[120px] h-[120px] md:w-[150px] md:h-[150px] rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300"
            />
            <img
              src={telegram}
              alt="Telegram QR Code"
              className="w-[120px] h-[120px] md:w-[150px] md:h-[150px] rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300"
            />
          </div>
          <p className="mt-4 text-gray-300">
            📞 <strong>رقم الهاتف:</strong> 01211101073
          </p>
          <p className="text-gray-300">
            📍 <strong>العنوان:</strong> قطعة 4 بلوك 12 بجوار المنارة للخضروات والفاكهة - منتجع النخيل، مدخل 2
          </p>
          
        </div>

        {/* QR Code Section */}
        <div className="text-center">
          <h3 className="text-xl font-semibold text-yellow-300 mb-4">رمز الاستجابة السريعة (QR)</h3>
          <img
            src={qrImage}
            alt="QR Code"
            className="w-[220px] h-[220px] md:w-[250px] md:h-[250px] mx-auto mb-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300"
          />
          <p className="text-lg md:text-xl text-gray-300">
            حساب إنستا باي: <strong className="text-yellow-300">nzalshrif@instapay</strong>
          </p>
        </div>

      </div>

      {/* Social Media Section */}
      <div className="text-center mt-8 text-gray-400">
        <div className="flex justify-center space-x-6 rtl:space-x-reverse mt-4">
          <a
            href="https://t.me/+OBhoac22F3g1Y2M0"
            className="text-blue-300 hover:scale-110 transition-transform duration-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTelegram size={40} />
          </a>
          <a
            href="https://chat.whatsapp.com/F18u5uuJHZpEIzjCrnLC9t"
            className="text-green-500 hover:scale-110 transition-transform duration-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp size={40} />
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=61569368545936"
            className="text-blue-300 hover:scale-110 transition-transform duration-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook size={40} />
          </a>
        </div>

        <p className="text-sm text-gray-300 mt-4">
          © ٢٠٢٤ جمعية تنمية المدينة لخدمات البيئة - جميع الحقوق محفوظة
        </p>
        <p className="text-sm text-gray-300">
          مشهر برقم: ١٢١٩٨ لسنة ٢٠٢٤
        </p>
      </div>
    </footer>
  );
};

export default Footer;
