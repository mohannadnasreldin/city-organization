import React from "react";

const foundersData = [
  {
    name: "م/ نصرالدين زغلول حسين",
    role: "رئيس مجلس الادارة",
  },
  {
    name: "م/ أيمن ابو الفتوح احمد",
    role: "نائب رئيس مجلس الادارة",
  },
  {
    name: "ا/ رشا عبد الرؤف عبد الله",
    role: "أمين عام",
  },
  {
    name: "ا/ ياسر عبد الحميد عبد الرحيم",
    role: "أمين الصندوق",
  },
  {
    name: "ا/ رزقه عبده صادق",
    role: "عضو",
  },
  {
    name: "عميد/ خالد منير رياض",
    role: "عضو",
  },
  {
    name: "ا/ ايمن محمد رمضان",
    role: "عضو",
  },
  {
    name: "ا/ محمود فوزي محمود",
    role: "عضو",
  },
  {
    name: "م/ كريم محمد السيد",
    role: "عضو",
  },
];

const FoundersSection = () => {
  return (
    <section
      id="founders"
      className="bg-gradient-to-r from-green-400 via-green-500 to-green-600 py-20 px-6 md:px-24 text-center text-white"
      dir="rtl"
    >
      <div className="max-w-7xl mx-auto bg-white p-8 rounded-3xl shadow-2xl transition-all duration-500 transform hover:scale-105">
        {/* Title and Description */}
        <div className="mb-12">
          <h2 className="text-4xl font-extrabold text-red-600 mb-4">
            أعضاء مجلس الإدارة
          </h2>
          <p className="text-lg md:text-xl text-green-600">
            تعرف على فريق العمل الأساسي المسؤول عن تحقيق أهداف الجمعية وخدمة
            المجتمع.
          </p>
        </div>

        {/* Pyramid Layout */}
        <div className="space-y-8">
          {/* Top Row */}
          <div className="flex justify-center">
            <div className="bg-green-50 text-gray-800 p-6 rounded-xl shadow-lg w-60">
              <h3 className="text-md font-semibold mb-2 text-red-600">
                {foundersData[0].name}
              </h3>
              <p className="text-md text-black">
                {foundersData[0].role}
              </p>
            </div>
          </div>

          {/* Middle Row */}
          <div className="flex justify-center space-x-4 space-x-reverse flex-wrap md:flex-nowrap">
            {foundersData.slice(1, 4).map((founder, index) => (
              <div
                key={index}
                className="bg-green-50 text-gray-800 p-6 rounded-xl shadow-lg w-60 mb-4 md:mb-0"
              >
                <h3 className="text-md font-semibold mb-2 text-red-600">
                  {founder.name}
                </h3>
                <p className="text-md text-black">
                  {founder.role}
                </p>
              </div>
            ))}
          </div>

          {/* Last Row with 5 Cards */}
          <div className="flex justify-center space-x-4 space-x-reverse flex-wrap md:flex-nowrap">
            {foundersData.slice(4).map((founder, index) => (
              <div
                key={index}
                className="bg-green-50 text-gray-800 p-6 rounded-xl shadow-lg w-60 mb-4 md:mb-0"
              >
                <h3 className="text-md font-semibold mb-2 text-red-600">
                  {founder.name}
                </h3>
                <p className="text-md  text-black">
                  {founder.role}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FoundersSection;
