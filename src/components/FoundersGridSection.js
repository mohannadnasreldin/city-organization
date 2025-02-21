import React from "react";

const foundersGridData = [
  "نصرالدين زغلول", "رزقه عبده", "ياسر عبد الحميد", "خالد شعبان",
  "أيمن أبو الفتوح", "خالد منير", "شريف أحمد", "محمد سيد",
  "أسيل رضا", "رشا عبد الرؤوف", "أحمد سمير", "رمضان جمعة",
  "أيمن محمد","محمود فوزي", "مصطفي محمد", "كريم محمد" 
];

const FoundersGridSection = () => {
  return (
    <section
      id="founders-grid"
      className="bg-gradient-to-r from-green-400 via-green-500 to-green-600 py-20 px-6 md:px-24 text-center text-white"
      dir="rtl"
    >
      <div className="max-w-7xl mx-auto bg-white p-8 rounded-3xl shadow-2xl transition-all duration-500 transform hover:scale-105">
        {/* Title and Description */}
        <div className="mb-12">
          <h2 className="text-4xl font-extrabold text-red-600 mb-4">
            قائمة المؤسسين
          </h2>
          <p className="text-lg md:text-xl text-green-600">
            تعرف على الأعضاء المؤسسيين الذين يشكلون نواة الجمعية.
          </p>
        </div>

        {/* 4x4 Static Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {foundersGridData.map((name, index) => (
            <div
              key={index}
              className="bg-green-50 text-gray-800 p-4 rounded-xl shadow-lg text-center"
            >
              <h3 className="text-md font-semibold text-red-600">
                {name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FoundersGridSection;
