import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const projectsData = [
  {
    title: "تطوير مداخل المدينة",
    details: "تشجير جوانب المداخل، زراعة الزهور، تجميل الأرصفة، وإضاءة محسنة."
  },
  {
    title: "تشجير جوانب المداخل وإزالة التالف واللحاف",
    details: "تحسين مظهر المداخل بزراعة الأشجار والزهور وإزالة النباتات التالفة."
  },
  {
    title: "زراعة الزهور الجديدة لجعل المداخل مظهرًا أجمل",
    details: "إضافة الزهور المناسبة بألوان متناسقة لجعل المدينة أكثر جمالًا."
  },
  {
    title: "تركيب شبكة الري وصيانة التربة لضمان الصلابة والاستواء",
    details: "تجهيز بنية تحتية متكاملة لضمان استدامة المساحات الخضراء."
  },
  {
    title: "إعادة طلاء الأعمدة وتحسين الشكل العام",
    details: "طلاء أعمدة الإنارة وتجديد مظهر المداخل لتبدو أكثر إشراقًا."
  },
  {
    title: "تنسيق الورود وزراعتها بتصميم جمالي",
    details: "تصميم مساحات خضراء جمالية بتحسين تنسيق الورود والنباتات."
  },
  {
    title: "إنشاء شبكة ري متكاملة للحفاظ على الزرع بشكل دائم",
    details: "وضع نظام ري حديث لضمان ري متكامل ومستدام للأشجار والنباتات."
  },
  {
    title: "إضاءة المداخل لتحسين الرؤية والشكل",
    details: "تركيب إضاءة محسنة في المداخل لتوفير رؤية واضحة وسلامة أكبر."
  },
  {
    title: "وضع يافطات إرشادية للمداخل باسم المدينة",
    details: "إضافة لوحات تعريفية بأسماء المناطق لتحسين التوجيه والتعريف بالمدينة."
  },
  {
    title: "تخصيص عمال دائمين لنظافة المداخل وري الزرع",
    details: "تعيين فريق صيانة دائم لضمان نظافة المداخل وصيانة المساحات الخضراء."
  }
];

const ProjectsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextProject = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projectsData.length);
  };

  const prevProject = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? projectsData.length - 1 : prevIndex - 1
    );
  };

  return (
    <section
      id="projects-section"
      className="bg-gradient-to-r from-green-400 via-green-500 to-green-600 py-20 px-6 md:px-24 text-center text-white"
      dir="rtl"
    >
      <div className="max-w-7xl mx-auto bg-white p-8 rounded-3xl shadow-2xl transition-all duration-500 transform hover:scale-105">
        <div className="mb-12">
          <h2 className="text-4xl font-extrabold text-red-600 mb-4">المشاريع الحالية</h2>
          <p className="text-lg md:text-xl text-green-600">تعرف على المشاريع التي يتم العمل عليها حاليًا من قبل فريقنا.</p>
        </div>

        {/* Carousel */}
        <div className="relative flex items-center justify-center">
          <button onClick={prevProject} className="absolute left-0 bg-green-600 p-3 rounded-full shadow-lg">
            <FaChevronLeft className="text-white text-xl" />
          </button>
          <div className="bg-green-50 text-gray-800 p-6 rounded-xl shadow-lg text-center w-80">
            <h3 className="text-md font-semibold text-red-600">{projectsData[currentIndex].title}</h3>
            <p className="text-sm text-black mt-2">{projectsData[currentIndex].details}</p>
          </div>
          <button onClick={nextProject} className="absolute right-0 bg-green-600 p-3 rounded-full shadow-lg">
            <FaChevronRight className="text-white text-xl" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
