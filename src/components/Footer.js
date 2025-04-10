import React from 'react';
import {
  FaFacebook,
  FaTelegram,
  FaWhatsapp,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-green-900 text-white py-12 px-6 md:px-20" dir="rtl">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Contact Info Section */}
        <div className="text-center md:text-right">
          <h3 className="text-xl font-semibold text-yellow-300 mb-4">
            معلومات الاتصال
          </h3>
          <p className="text-gray-300">
            للتواصل معنا، يمكنكم إرسال رسالة عبر البريد الإلكتروني أو متابعتنا
            على وسائل التواصل الاجتماعي.
          </p>
          <div className="flex justify-center space-x-6 rtl:space-x-reverse mt-4">
            <a
              href="https://t.me/+OBhoac22F3g1Y2M0"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit our Telegram page"
              className="text-yellow-300 hover:scale-110 transition-transform duration-300"
            >
              <FaTelegram size={40} />
            </a>
            {/* <a
              href="https://chat.whatsapp.com/F18u5uuJHZpEIzjCrnLC9t"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit our WhatsApp group"
              className="text-yellow-300 hover:scale-110 transition-transform duration-300"
            >
              <FaWhatsapp size={40} />
            </a> */}
            <a
              href="https://www.facebook.com/profile.php?id=61569368545936"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit our Facebook page"
              className="text-yellow-300 hover:scale-110 transition-transform duration-300"
            >
              <FaFacebook size={40} />
            </a>
          </div>
          {/* <p className="mt-4 text-gray-300">
            <FaPhoneAlt className="inline-block ml-2 text-yellow-300" />
            رقم الهاتف:{' '}
            <a
              href="https://wa.me/01211101073"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp link to 01211101073"
              className="text-yellow-300 hover:underline"
            >
              01211101073
            </a>
          </p> */}
          <p className="text-gray-300 mt-2">
  <FaMapMarkerAlt className="inline-block ml-2 text-yellow-300" />
  العنوان:{' '}
  <a
    href="https://maps.app.goo.gl/erAgwPeMpS2JMtZWA"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Open location in Google Maps"
    className="text-yellow-300 hover:underline break-words"
  >
    قطعة 4 بلوك 12 بجوار المنارة للخضروات والفاكهة - منتجع النخيل، مدخل 2
  </a>
</p>

          <p className="text-gray-300 mt-2">
            📧 البريد الإلكتروني:{' '}
            <a
              href="mailto:citydevelopmentassociation@gmail.com"
              className="text-yellow-300 hover:underline"
            >
              citydevelopmentassociation@gmail.com
            </a>
          </p>
        </div>

        {/* Quick Links Section */}
        <nav className="text-center md:text-right">
          <h3 className="text-xl font-semibold text-yellow-300 mb-4">
            روابط سريعة
          </h3>
          <ul>
            {[
              {
                text: 'حي ثان السلام',
                href: 'https://www.cairo.gov.eg/ar/Hay_AlSalamSecond/Pages/default.aspx',
              },
              {
                text: 'محافظة القاهرة',
                href: 'https://www.cairo.gov.eg/',
              },
              {
                text: 'الصفحة الرسمية لحي ثان السلام',
                href: 'https://facebook.com/HayElsalam2/?locale=ar_AR',
              },
              {
                text: 'بوابة الشكاوي الحكومية',
                href: 'https://www.shakwa.eg/GCP/Default.aspx',
              },
              {
                text: 'بوابة خدمات المحليات',
                href: 'https://lgs.gov.eg/',
              },
              {
                text: 'بوابة مصر الرقمية',
                href: 'https://digital.gov.eg/',
              },
            ].map((link, index) => (
              <li key={index} className="mt-2">
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-yellow-300 hover:underline hover:scale-105 transition-transform duration-300"
                >
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Footer Bottom Section */}
      <div className="text-center mt-8">
        <p className="text-sm text-gray-300">
          © {new Date().getFullYear()} جمعية تنمية المدينة لخدمات البيئة - جميع
          الحقوق محفوظة
        </p>
        <p className="text-sm text-gray-300">مشهر برقم: ١٢١٩٨ لسنة ٢٠٢٤</p>
        <p className="mt-2">
          © تم تصميم الموقع ورفعه بواسطة{' '}
          <a
            href="https://mohannadnasreldin.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="text-yellow-300 hover:underline hover:scale-105 transition-transform duration-300"
          >
            مهند نصر الدين الشريف
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
