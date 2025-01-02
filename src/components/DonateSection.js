import React from 'react';
import qrImage from '../assets/qr.jpg';

const DonateSection = () => {
  return (
    <section id="donate" className="bg-gradient-to-r from-green-400 via-green-500 to-green-600 py-16 px-6 md:px-24 text-center text-white" dir="rtl">
      <div className="max-w-7xl mx-auto bg-white p-8 rounded-3xl shadow-2xl transition-all duration-500 transform hover:scale-105">
        <h2 className="text-4xl font-extrabold text-red-600 mb-6 tracking-wide">
          للتبرع لجمعية تنمية المدينة
        </h2>
        <p className="text-xl md:text-2xl mb-8 leading-relaxed text-gray-700">
          دعمكم يعزز قدرتنا على تحسين البيئة وخدمة المجتمع. يمكنكم المساهمة في تحقيق أهدافنا من خلال انستاباي.
        </p>
        <div className="mb-6">
          <img
            src={qrImage}
            alt="QR Code"
            className="hidden sm:block w-48 h-48 md:w-56 md:h-56 mx-auto rounded-lg shadow-lg transform hover:scale-110 transition-all duration-300 shadow-xl"
            />
        </div>
        <p className="text-lg mt-4 text-gray-700">
          حساب إنستا باي: 
          <a className="font-bold text-red-600 hover:underline" href='https://ipn.eg/C/Q/nzalshrif/instapay?ISIGN=23052602MEQCIC4FTlKduNTonhACSuGPHAQbINhyaBjivOxV4Q+QDXyrAiB/lKQ9RUIVPHyNjxow65Gm2A+PLPPgNcC2jGH818m8ww=='>
            nzalshrif@instapay
          </a>
        </p>
      </div>
    </section>
  );
};

export default DonateSection;
