import React from 'react';

const AboutSection = () => {
  return (
    <section id="about" className="bg-green-100 py-12 px-6 md:px-20 text-green-900" dir="rtl">
        
      <div className="max-w-5xl mx-auto text-center">
      <h2 className="text-3xl font-bold text-red-600 mb-6">
          عن الجمعية
        </h2>
        <header className="mb-8">
          <h1 className="text-4xl font-bold text-green-700">
            جمعية تنمية المدينة لخدمات البيئة
          </h1>
          <p className="text-lg md:text-xl text-green-600 mt-2">
            نقدم لكم رؤية شاملة عن مشاريعنا وأنشطتنا التي تهدف إلى تحسين البيئة وتنمية المجتمع.
          </p>
        </header>


        <p className="text-lg md:text-xl leading-relaxed mb-6">
          جمعية تنمية المدينة لخدمات البيئة المشهرة برقم ١٢١٩٨ لسنة ٢٠٢٤ تحت مظلة وزارة التضامن الاجتماعي 
        </p>
        <p className="text-lg md:text-xl leading-relaxed">
          نحن نؤمن بأن العمل الجماعي والتعاون مع الأفراد والمؤسسات المحلية يساعد في تحقيق أهدافنا وتحقيق تغيير 
          إيجابي في المجتمع. نرحب دائمًا بالأفكار الجديدة والمقترحات التي تساهم في تنمية البيئة المحلية.
        </p>
      </div>
    </section>
  );
};

export default AboutSection;
