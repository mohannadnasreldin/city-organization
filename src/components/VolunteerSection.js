import React from 'react';

const VolunteerSection = () => {
  return (
    <section id="volunteer" className="bg-gradient-to-r from-green-400 via-green-500 to-green-600 py-16 px-6 md:px-24 text-center text-white" dir="rtl">
      <div className="max-w-7xl mx-auto bg-white p-10 rounded-3xl shadow-2xl transition-all duration-500 transform hover:scale-105">
        <h2 className="text-4xl font-extrabold text-red-600 mb-8 tracking-wide">
          فوائد العمل التطوعي
        </h2>
        <p className="text-lg md:text-xl text-gray-700 mb-8 leading-relaxed">
          التطوع هو أساس نجاحنا، ونحن ندعوكم للانضمام إلينا والمساهمة في مشاريعنا لتحقيق أهدافنا المشتركة.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
          {[
            "خدمة المجتمع",
            "اكتساب خبرات جديدة",
            "تكوين علاقات جديدة",
            "استغلال وقت الفراغ",
            "اكتساب مهارات العمل الجماعي",
            "اكتساب شعور الانتماء للمجتمع",
            "اضافة للسيرة الذاتية",
            "كسب الأجر والثواب",
          ].map((benefit, index) => (
            <div
              key={index}
              className="p-4 bg-green-50 text-black rounded-lg shadow-md hover:bg-green-100 hover:shadow-lg transition-all duration-300"
            >
              <p className="text-lg font-medium">{benefit}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VolunteerSection;
