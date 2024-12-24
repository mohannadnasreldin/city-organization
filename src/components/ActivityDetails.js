import React from 'react';
import { useParams } from 'react-router-dom';

const activities = [
  { id: 1, title: "حماية البيئة و المحافظة عليها", image: "https://images.akhbarelyom.com/images/images/large/20240908130824715.jpg", details:"١- توعية المواطنين بكيفية المحافظة على البيئة\n٢- اقامة الخدمات التي تساعد علي المحافظة علي البيئة\n٣- المشاركة في صيانة المرافق\n٤- المشاركة في تنظيم المرور" },
  { id: 2, title: "الخدمات الثقافية و العلمية و الدينية", image: "https://mliesl.edu/assets/images/what-is-mli/image-gallery/westwood-class-8.jpg", details:"١- إقامة الندوات و المحاضرات الثقافية و العلمية و الدينية\n٢- إنشاء المكتبات الثقافية و العلمية و الدينية\n٣- فتح فصول لتحفيظ القرآن الكريم\n٤- تنظيم رحلات ثقافية و ترفيهية لأعضاء الجمعية\n٥- القيام برحلات الحج و العمرة لأعضاء الجمعية\n٦- إقامة دورات تدريبية في تعليم وصيانة الحاسب الآلي\n ٧- إصدار مجلة تعبر عن انشطة الجمعية" },
  { id: 3, title: "حماية المستهلك", image: "https://ammannet.net/sites/default/files/styles/news_landing/public/2023-09/6c675cdf-9e8f-43e8-a8cd-1ca535d0bade.jpg?h=8d16384a&itok=SmEhX_oE", details:"١- توعية المواطنين بحقوقهم قبل المنتجين و البائعين\n٢- المشاركة في محاربة الغش و التهرب الضريبي\n٣- المعاونة في رفع جودة الصناعة المصرية\n٤-إقامة المعارض و الاسواق للسلع الاستهلاكية و المعمرة" },
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
