import React from 'react';
import qrImage from '../assets/qr.jpg';

const DonateSection = () => {
    return (
        <section id="donate" className="bg-blue-700 py-16 px-8 md:px-20 text-white" dir="rtl">
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-4xl font-extrabold text-yellow-400 mb-6">للتبرع</h2>
                <p className="text-xl md:text-2xl mb-8 leading-relaxed text-gray-200">
                    دعمكم يعزز من قدرتنا على تنفيذ المبادرات المجتمعية وتحقيق أهدافنا الخيرية. يمكنكم المساهمة في تحسين الحياة في مجتمعنا من خلال مسح رمز الاستجابة السريعة (QR) التالي للتبرع بسهولة.
                </p>
                <div className="mb-6">
                    <img src={qrImage} alt="QR Code" className="w-[220px] h-[220px] md:w-[250px] md:h-[250px] mx-auto rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300" />
                </div>
                <p className="text-lg md:text-xl text-gray-300 mb-6">
                    امسح رمز الاستجابة السريعة (QR) للتبرع بسهولة من خلال هاتفك.
                </p>
                <p className="text-lg md:text-xl text-gray-300">
                    حساب إنستا باي: <strong className="text-yellow-400">nzalshrif@instapay</strong>
                </p>
            </div>
        </section>
    );
};

export default DonateSection;
