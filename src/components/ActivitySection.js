import React, { useState, useEffect, useMemo } from 'react';

const activities = [
  { id: 1, title: "حملة تنظيف الشوارع", image: "https://images.unsplash.com/photo-1659004249963-1c1bdecfcbb8?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { id: 2, title: "زراعة الأشجار", image: "https://images.unsplash.com/photo-1598335624134-5bceb5de202d?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { id: 3, title: "ورش توعية بيئية", image: "https://images.unsplash.com/photo-1551731409-43eb3e517a1a?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { id: 4, title: "حملات توعية صحية", image: "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { id: 5, title: "رحلات سياحية", image: "https://images.unsplash.com/photo-1543746746-46047c4f4bb0?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { id: 6, title: "دورات تدريبية", image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { id: 7, title: "مساعدات للمحتاجين", image: "https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
];

const ActivitySection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Preloading images
  const preloadedImages = useMemo(() => {
    return activities.map(activity => new Image().src = activity.image);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex === activities.length - 1 ? 0 : prevIndex + 1));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="activities" className="bg-white py-12 px-6 md:px-20 text-center">
      <div className="relative max-w-4xl mx-auto">
        <div className="bg-green-50 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
          <img
            src={activities[currentIndex].image}
            alt={activities[currentIndex].title}
            className="w-full h-64 sm:h-80 md:h-96 object-contain rounded-md mb-4"
          />
          <p className="text-lg font-semibold text-green-700">{activities[currentIndex].title}</p>
        </div>

        <button
          onClick={() => setCurrentIndex((prevIndex) => (prevIndex === 0 ? activities.length - 1 : prevIndex - 1))}
          className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-green-700 text-white px-4 py-2 rounded-full hover:bg-green-600 transition-all"
        >
          ◀
        </button>

        <button
          onClick={() => setCurrentIndex((prevIndex) => (prevIndex === activities.length - 1 ? 0 : prevIndex + 1))}
          className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-green-700 text-white px-4 py-2 rounded-full hover:bg-green-600 transition-all"
        >
          ▶
        </button>
      </div>

      <div className="flex justify-center mt-4 space-x-2">
        {activities.map((_, index) => (
          <span
            key={index}
            className={`h-3 w-3 rounded-full transition-all duration-300 ${currentIndex === index ? "bg-green-500" : "bg-green-300"}`}
          ></span>
        ))}
      </div>
    </section>
  );
};

export default ActivitySection;
