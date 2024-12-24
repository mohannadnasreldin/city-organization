import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const activities = [
  { id: 1, title: "حماية البيئة و المحافظة عليها", image: "https://images.akhbarelyom.com/images/images/large/20240908130824715.jpg" },
  { id: 2, title: "الخدمات الثقافية و العلمية و الدينية", image: "https://mliesl.edu/assets/images/what-is-mli/image-gallery/westwood-class-8.jpg" },
  { id: 3, title: "حماية المستهلك", image: "https://ammannet.net/sites/default/files/styles/news_landing/public/2023-09/6c675cdf-9e8f-43e8-a8cd-1ca535d0bade.jpg?h=8d16384a&itok=SmEhX_oE" },
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
    <section id="activities" className="bg-gradient-to-r from-green-400 via-green-500 to-green-600 py-16 px-6 md:px-24 text-center text-white">
      <div className="relative max-w-4xl mx-auto">
        <div
          className="bg-white p-6 rounded-3xl shadow-xl transition-all duration-500 transform hover:scale-105 cursor-pointer"
          onClick={() => navigate(`/activity/${activities[currentIndex].id}`)}
        >
          <div className="relative">
            <img
              src={activities[currentIndex].image}
              alt={activities[currentIndex].title}
              className="w-full h-64 sm:h-80 md:h-96 object-cover rounded-xl transition-all duration-500"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 rounded-xl">
              <p className="text-2xl font-bold text-white">{activities[currentIndex].title}</p>
            </div>
          </div>
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={() => setCurrentIndex((prevIndex) => (prevIndex === 0 ? activities.length - 1 : prevIndex - 1))}
          className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-green-700 text-white p-3 rounded-full hover:bg-green-600 transition-all"
        >
          ◀
        </button>

        <button
          onClick={() => setCurrentIndex((prevIndex) => (prevIndex === activities.length - 1 ? 0 : prevIndex + 1))}
          className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-green-700 text-white p-3 rounded-full hover:bg-green-600 transition-all"
        >
          ▶
        </button>
      </div>

      {/* Dot Indicators */}
      <div className="flex justify-center mt-6 space-x-3">
        {activities.map((_, index) => (
          <span
            key={index}
            className={`h-3 w-3 rounded-full transition-all duration-300 ${currentIndex === index ? "bg-green-300 scale-125" : "bg-green-100"}`}
          ></span>
        ))}
      </div>
    </section>
  );
};

export default ActivitySection;
