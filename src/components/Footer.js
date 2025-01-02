import React from 'react';
import { FaFacebook, FaTelegram, FaWhatsapp, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-green-900 text-white py-12 px-6 md:px-20" dir="rtl">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">

        {/* Contact Info Section */}
        <div className="text-center md:text-right">
          <h3 className="text-xl font-semibold text-center text-yellow-300 mb-4">معلومات الاتصال</h3>
          <p className="text-gray-300">
            للتواصل معنا: يمكنكم إرسال رسالة عبر البريد الإلكتروني أو متابعتنا على وسائل التواصل الاجتماعي.
          </p>
          <div className="flex justify-center space-x-6 rtl:space-x-reverse mt-4">
            <a
              href="https://t.me/+OBhoac22F3g1Y2M0"
              className="text-yellow-300 hover:scale-110 transition-transform duration-300"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit our Telegram page"
            >
              <FaTelegram size={40} />
            </a>
            <a
              href="https://chat.whatsapp.com/F18u5uuJHZpEIzjCrnLC9t"
              className="text-yellow-300 hover:scale-110 transition-transform duration-300"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit our WhatsApp group"
            >
              <FaWhatsapp size={40} />
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=61569368545936"
              className="text-yellow-300 hover:scale-110 transition-transform duration-300"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit our Facebook page"
            >
              <FaFacebook size={40} />
            </a>
          </div>
          <p className="mt-4 text-gray-300">
            <FaPhoneAlt className="inline-block ml-2 text-lg text-yellow-300" />
            رقم الهاتف:{' '}
            <a
              href="https://wa.me/01211101073"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mr-2 text-lg text-yellow-300"
              aria-label="WhatsApp link to 01211101073"
            >
              01211101073
            </a>
          </p>
          <p className="text-gray-300">
  <FaMapMarkerAlt className="inline-block mr-1 text-yellow-300 text-lg" />
  العنوان:{' '}
  <a
    href="https://maps.app.goo.gl/erAgwPeMpS2JMtZWA"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Open location in Google Maps"
    className="inline-block mr-2 text-lg text-yellow-300 truncate"
  >
    قطعة 4 بلوك 12 بجوار المنارة للخضروات والفاكهة - منتجع النخيل، مدخل 2
  </a>
</p>
          <p className="text-gray-300">
            📧 البريد الإلكتروني:{' '}
            <a
              href="mailto:citydevelopmentassociation@gmail.com"
              className="inline-block mr-2 text-lg text-yellow-300"
            >
              citydevelopmentassociation@gmail.com
            </a>
          </p>
        </div>

        {/* Speed Links Section */}
        <nav>
          <h3 className="text-xl font-semibold text-center text-yellow-300 mb-4">روابط سريعة</h3>
          <ul className="justify-center text-center">
            <li>
              <a
                href="https://www.cairo.gov.eg/ar/Hay_AlSalamSecond/Pages/default.aspx"
                className="text-yellow-300 hover:underline hover:scale-105 transition-transform duration-300"
              >
                حي ثان السلام
              </a>
            </li>
            <li>
              <a
                href="https://www.cairo.gov.eg/"
                className="text-yellow-300 hover:underline hover:scale-105 transition-transform duration-300"
              >
                محافظة القاهرة
              </a>
            </li>
            <li>
              <a
                href="https://facebook.com/HayElsalam2/?locale=ar_AR"
                className="text-yellow-300 hover:underline hover:scale-105 transition-transform duration-300"
              >
                الصفحة الرسمية لحي ثان السلام
              </a>
            </li>
            <li>
              <a
                href="https://www.shakwa.eg/GCP/Default.aspx"
                className="text-yellow-300 hover:underline hover:scale-105 transition-transform duration-300"
              >
                بوابة الشكاوي الحكومية
              </a>
            </li>
            <li>
              <a
                href="https://lgs.gov.eg/"
                className="text-yellow-300 hover:underline hover:scale-105 transition-transform duration-300"
              >
                بوابة خدمات المحليات
              </a>
            </li>
            <li>
              <a
                href="https://digital.gov.eg/"
                className="text-yellow-300 hover:underline hover:scale-105 transition-transform duration-300"
              >
                بوابة مصر الرقمية
              </a>
            </li>
          </ul>
        </nav>
      </div>

      {/* Footer Bottom Section */}
      <div className="text-center mt-8 text-gray-400">
        <p className="text-sm text-gray-300 mt-4">
          © {new Date().getFullYear()} جمعية تنمية المدينة لخدمات البيئة - جميع الحقوق محفوظة
        </p>
        <p className="text-sm text-gray-300">مشهر برقم: ١٢١٩٨ لسنة ٢٠٢٤</p>
      </div>
    </footer>
  );
};

export default Footer;
