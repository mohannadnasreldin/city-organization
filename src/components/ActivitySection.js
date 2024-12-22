import React, { useState, useEffect } from 'react';

const activities = [
  {
    id: 1,
    title: "نشاط 1",
    image: "https://via.placeholder.com/300", // Replace with your image URL
  },
  {
    id: 2,
    title: "نشاط 2",
    image: "https://via.placeholder.com/300", // Replace with your image URL
  },
  {
    id: 3,
    title: "نشاط 3",
    image: "https://via.placeholder.com/300", // Replace with your image URL
  },
];

const ActivitySection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide logic
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === activities.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval); // Cleanup on component unmount
  }, []);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === activities.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? activities.length - 1 : prevIndex - 1
    );
  };

  return (
    <section id='activities' className="bg-white p-6 text-center">
      <div className="relative">
        {/* Carousel Item */}
        <div className="bg-gray-100 p-4 rounded-lg shadow-md transition-all duration-700 ease-in-out">
          <img
            src={activities[currentIndex].image}
            alt={activities[currentIndex].title}
            className="w-full h-48 object-cover rounded-md mb-4"
          />
          <p className="text-lg font-bold">{activities[currentIndex].title}</p>
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={handlePrev}
          className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-800 text-white px-3 py-1 rounded-full hover:bg-gray-600"
        >
          ◀
        </button>
        <button
          onClick={handleNext}
          className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-800 text-white px-3 py-1 rounded-full hover:bg-gray-600"
        >
          ▶
        </button>
      </div>

      {/* Dots Indicator */}
      <div className="flex justify-center mt-4">
        {activities.map((_, index) => (
          <span
            key={index}
            className={`h-3 w-3 mx-1 rounded-full transition-all duration-300 ${
              currentIndex === index ? "bg-blue-500" : "bg-gray-400"
            }`}
          ></span>
        ))}
      </div>
    </section>
  );
};

export default ActivitySection;
