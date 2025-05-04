import React from "react";

const dressStyles = [
  [
    { label: "Casual", image: "/dress-style-grid/P1.png" },
    { label: "Formal", image: "/dress-style-grid/P2.png" }
  ],
  [ 
    { label: "Party", image: "/dress-style-grid/P3.png" },
    { label: "Gym", image: "/dress-style-grid/P4.png" }
  ]
];

export const DressStyleGrid = () => { 
  return (
    <div className="bg-gray-100 rounded-3xl px-11 py-15 my-7 mx-27.5">
      <h2 className="text-3xl font-extrabold text-center mb-11">
        BROWSE BY DRESS STYLE
      </h2>

      <div className="">
        {dressStyles.map((row, index) => (
          <div key={index} className="flex gap-4 mb-4">
            <div key={row[0].label} className={"relative rounded-xl overflow-hidden hover:scale-105 transition-transform w-1/3"}>
              <img
                src={row[0].image}
                alt={row[0].label}
                className="w-full h-60 object-cover"
              />
              <span className="absolute top-4 left-8 text-black font-semibold text-lg">
                {row[0].label}
              </span>
            </div>

            <div key={row[1].label} className={"relative rounded-xl overflow-hidden hover:scale-105 transition-transform " + "w-2/3"}>
              <img
                src={row[1].image}
                alt={row[1].label}
                className="w-full h-60 object-cover"
              />
              <span className="absolute top-4 left-8 text-black font-semibold text-lg">
                {row[1].label}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};