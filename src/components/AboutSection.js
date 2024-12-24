import React from 'react';

const AboutSection = () => {
  return (
    <section id="about" className="bg-gradient-to-r from-green-400 via-green-500 to-green-600 py-16 px-6 md:px-24 text-center text-white" dir="rtl">
      <div className="max-w-5xl mx-auto bg-white p-8 rounded-3xl shadow-2xl transform transition-all hover:scale-105">
        <h2 className="text-4xl font-extrabold text-red-600 mb-6 tracking-wide transition-transform duration-300 hover:scale-110">
          عن الجمعية
        </h2>
        <header className="mb-8">
          <h1 className="text-5xl font-extrabold text-green-700">
            جمعية تنمية المدينة لخدمات البيئة
          </h1>
          <p className="text-lg md:text-xl text-green-600 mt-2">
            نقدم لكم رؤية شاملة عن مشاريعنا وأنشطتنا التي تهدف إلى تحسين البيئة وتنمية المجتمع.
          </p>
        </header>

        <p className="text-lg md:text-xl leading-relaxed mb-6 text-gray-700">
          جمعية تنمية المدينة لخدمات البيئة المشهرة برقم ١٢١٩٨ لسنة ٢٠٢٤ تحت مظلة وزارة التضامن الاجتماعي 
        </p>
        <p className="text-lg md:text-xl leading-relaxed text-gray-700">
          نحن نؤمن بأن العمل الجماعي والتعاون مع الأفراد والمؤسسات المحلية يساعد في تحقيق أهدافنا وتحقيق تغيير 
          إيجابي في المجتمع. نرحب دائمًا بالأفكار الجديدة والمقترحات التي تساهم في تنمية البيئة المحلية.
        </p>
      </div>
    </section>
  );
};

export default AboutSection;
