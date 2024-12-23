import React from 'react';
import { useParams } from 'react-router-dom';

const activities = [
  { id: 1, title: "حماية البيئة و المحافظة عليها", image: "https://images.unsplash.com/photo-1659004249963-1c1bdecfcbb8?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", details:"١- توعية المواطنين بكيفية المحافظة على البيئة\n٢- اقامة الخدمات التي تساعد علي المحافظة علي البيئة\n٣- المشاركة في صيانة المرافق\n٤- المشاركة في تنظيم المرور" },
  { id: 2, title: "الخدمات الثقافية و العلمية و الدينية", image: "https://images.unsplash.com/photo-1598335624134-5bceb5de202d?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", details:"١- إقامة الندوات و المحاضرات الثقافية و العلمية و الدينية\n٢- إنشاء المكتبات الثقافية و العلمية و الدينية\n٣- فتح فصول لتحفيظ القرآن الكريم\n٤- تنظيم رحلات ثقافية و ترفيهية لأعضاء الجمعية\n٥- القيام برحلات الحج و العمرة لأعضاء الجمعية\n٦- إقامة دورات تدريبية في تعليم وصيانة الحاسب الآلي\n ٧- إصدار مجلة تعبر عن انشطة الجمعية" },
  { id: 3, title: "حماية المستهلك", image: "https://images.unsplash.com/photo-1551731409-43eb3e517a1a?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", details:"١- توعية المواطنين بحقوقهم قبل المنتجين و البائعين\n٢- المشاركة في محاربة الغش و التهرب الضريبي\n٣- المعاونة في رفع جودة الصناعة المصرية\n٤-إقامة المعارض و الاسواق للسلع الاستهلاكية و المعمرة" },
];

const ActivityDetails = () => {
  const { id } = useParams();
  const activity = activities.find((activity) => activity.id === parseInt(id));

  if (!activity) {
    return <p>Activity not found.</p>;
  }

  const detailsLines = activity.details.split('\n');

  return (
    <section className="py-12 px-6 md:px-20 text-center rtl">
      <div className="max-w-4xl mx-auto bg-green-50 p-6 rounded-lg shadow-lg">
        <img
          src={activity.image}
          alt={activity.title}
          className="w-full h-64 sm:h-80 md:h-96 object-contain rounded-md mb-4"
        />
        <h1 className="text-2xl font-semibold text-green-700">{activity.title}</h1>
        {detailsLines.length > 0 && (
          <div className="mt-4 text-black">
            {detailsLines.map((line, index) => (
              <p key={index} className="mb-2">{line}</p>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default ActivityDetails;
