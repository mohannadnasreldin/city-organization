import React from 'react';

const GoalsSection = () => {
  return (
    <section id="goals" className="bg-gradient-to-r from-green-400 via-green-500 to-green-600 py-16 px-6 md:px-24 text-center text-white" dir="rtl">
      <div className="max-w-7xl mx-auto bg-white p-10 rounded-3xl shadow-2xl transition-all duration-500 transform hover:scale-105">
        <h2 className="text-4xl font-extrabold text-red-600 mb-8 tracking-wide">
          أهداف الجمعية
        </h2>
        <p className="text-lg md:text-xl text-gray-700 mb-8 leading-relaxed">
          نهدف إلى تحقيق الأهداف التالية، التي تسهم في تحسين المجتمع وتحقيق التنمية المستدامة.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
          {[
            "إنشاء بيئة مستدامة توفر فرص الابتكار والتعاون ضمن المجتمع المحلي",
            "تعزيز جودة الحياة من خلال دعم الأنشطة البيئية والصحية والاجتماعية",
            "توفير برامج تدريبية وتوعوية لدعم التنمية المستدامة في المجتمع",
          ].map((goal, index) => (
            <div
              key={index}
              className="p-4 bg-green-50 text-black rounded-lg shadow-md hover:bg-green-100 hover:shadow-lg transition-all duration-300"
            >
              <p className="text-xs sm:text-lg font-medium">{goal}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GoalsSection;
