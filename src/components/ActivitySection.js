import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const activities = [
  { id: 1, title: "حماية البيئة و المحافظة عليها", image: "https://images.unsplash.com/photo-1659004249963-1c1bdecfcbb8?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { id: 2, title: "الخدمات الثقافية و العلمية و الدينية", image: "https://images.unsplash.com/photo-1598335624134-5bceb5de202d?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { id: 3, title: "حماية المستهلك", image: "https://images.unsplash.com/photo-1551731409-43eb3e517a1a?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
];

const ActivitySection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    // Preload images here
    activities.forEach(activity => {
      const img = new Image();
      img.src = activity.image; // This triggers preloading
    });

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex === activities.length - 1 ? 0 : prevIndex + 1));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="activities" className="bg-white py-12 px-6 md:px-20 text-center">
      <div className="relative max-w-4xl mx-auto">
        <div
          className="bg-green-50 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 cursor-pointer"
          onClick={() => navigate(`/activity/${activities[currentIndex].id}`)}
        >
          <img
            src={activities[currentIndex].image}
            alt={activities[currentIndex].title}
            className="w-full h-64 sm:h-80 md:h-96 object-contain rounded-md mb-4"
          />
          <p className="text-lg font-semibold text-red-700">{activities[currentIndex].title}</p>
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
