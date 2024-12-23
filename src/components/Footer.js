import React from 'react';
import { FaFacebook } from 'react-icons/fa';
import { FaTelegram } from 'react-icons/fa';
import { FaWhatsapp } from 'react-icons/fa';
import wp from '../assets/wp qr.jpg';
import telegram from '../assets/telegram qr.jpg';
import facebook from '../assets/facebook qrcode.png';
import { FaPhoneAlt } from 'react-icons/fa';
const Footer = () => {
  return (
    <footer className="bg-green-900 text-white py-12 px-6 md:px-20" dir="rtl">
      <div className="max-w-5xl mx-auto flex flex-col items-center space-y-8 md:space-y-0">

        {/* Contact Info Section */}
        <div className="text-center">
          <h3 className="text-xl font-semibold text-yellow-300 mb-4">معلومات الاتصال</h3>
          <p className="text-gray-300">
            للتواصل معنا: يمكنكم إرسال رسالة عبر البريد الإلكتروني أو متابعتنا على وسائل التواصل الاجتماعي.
          </p>
          <div className="flex justify-center space-x-4 rtl:space-x-reverse mt-4">
            <img
              src={wp}
              alt="WhatsApp QR Code"
              className="w-[120px] h-[120px] md:w-[150px] md:h-[150px] rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300"
            />
            <img
              src={telegram}
              alt="Telegram QR Code"
              className="w-[120px] h-[120px] md:w-[150px] md:h-[150px] rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300"
            />
            <img
              src={facebook}
              alt="Facebook QR Code"
              className="w-[120px] h-[120px] md:w-[150px] md:h-[150px] rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300"
            />
          </div>
          <p className="mt-4 text-gray-300">
            
          <FaPhoneAlt className="inline-block ml-2 text-lg text-yellow-300" />
          <strong>رقم الهاتف:</strong> <a href="https://wa.me/01211101073" target="_blank" rel="noopener noreferrer" className="inline-block mr-2 text-lg text-yellow-300" aria-label="WhatsApp link to 01211101073">01211101073</a>
          </p>
          <p className="text-gray-300">
            📍 <strong>العنوان:</strong> <a href='https://maps.app.goo.gl/erAgwPeMpS2JMtZWA' target="_blank" className="inline-block mr-2 text-lg text-yellow-300"> قطعة 4 بلوك 12 بجوار المنارة للخضروات والفاكهة - منتجع النخيل، مدخل 2 </a>
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
            aria-label="Visit our Telegram page"
          >
            <FaTelegram size={40} />
          </a>
          <a
            href="https://chat.whatsapp.com/F18u5uuJHZpEIzjCrnLC9t"
            className="text-green-500 hover:scale-110 transition-transform duration-300"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit our WhatsApp group"
          >
            <FaWhatsapp size={40} />
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=61569368545936"
            className="text-blue-300 hover:scale-110 transition-transform duration-300"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit our Facebook page"
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
