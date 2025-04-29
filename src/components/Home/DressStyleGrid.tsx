import React from "react";

const dressStyles = [
  { label: "Casual", image: "/dress-style-grid/P1.png" },
  { label: "Formal", image: "/dress-style-grid/P2.png" },
  { label: "Party", image: "/dress-style-grid/P3.png" },
  { label: "Gym", image: "/dress-style-grid/P4.png" },
];

export const DressStyleGrid = () => { 
  return (
    <div className="bg-gray-100 rounded-3xl p-6 max-w-5xl mx-auto">
      <h2 className="text-2xl md:text-3xl font-extrabold text-center mb-6">
        BROWSE BY DRESS STYLE
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {dressStyles.map(({ label, image }) => (
          <div
            key={label}
            className="relative rounded-xl overflow-hidden hover:scale-105 transition-transform"
          >
            <img
              src={image}
              alt={label}
              className="w-full h-48 object-cover"
            />
            <span className="absolute top-2 left-2 text-black font-semibold text-lg">
              {label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};