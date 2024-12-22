import React from 'react';
import qrImage from '../assets/qr.jpg';

const DonateSection = () => {
  return (
    <section id="donate" className="bg-green-700 py-16 px-8 md:px-20 text-white" dir="rtl">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold text-yellow-300 mb-6">
          للتبرع لجمعية تنمية المدينة
        </h2>
        <p className="text-xl md:text-2xl mb-8 leading-relaxed">
          دعمكم يعزز قدرتنا على تحسين البيئة وخدمة المجتمع. يمكنكم المساهمة في تحقيق أهدافنا من خلال مسح رمز الاستجابة السريعة التالي.
        </p>
        <div className="mb-6">
          <img
            src={qrImage}
            alt="QR Code"
            className="w-48 h-48 md:w-56 md:h-56 mx-auto rounded-lg shadow-lg transform hover:scale-105 transition-transform"
          />
        </div>
        <p className="text-lg mt-6">
          امسح رمز الاستجابة السريعة للتبرع بسهولة.
        </p>
        <p className="text-lg mt-4">
          حساب إنستا باي: <strong className="text-yellow-300">nzalshrif@instapay</strong>
        </p>
      </div>
    </section>
  );
};

export default DonateSection;
