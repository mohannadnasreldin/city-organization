import React from 'react';

const AboutSection = () => {
    return (
        <section id="about" className="bg-gray-100 py-12 px-6 md:px-20 text-gray-800" dir="rtl">
            <div className="max-w-5xl mx-auto text-center">
                <h2 className="text-3xl font-semibold text-blue-600 mb-6">عن الجمعية</h2>
                <p className="text-lg md:text-xl leading-relaxed text-gray-700">
                    مرحباً بكم في جمعيتنا المدنية. نحن ملتزمون بتحسين جودة الحياة لجميع السكان من خلال مختلف المبادرات والبرامج التي تهدف إلى تعزيز التواصل المجتمعي، التمكين الاقتصادي، والحفاظ على البيئة. نحن نؤمن أن العمل المشترك يمكن أن يصنع فرقاً حقيقياً.
                </p>
            </div>
        </section>
    );
};

export default AboutSection;
