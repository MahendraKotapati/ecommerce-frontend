import { DRESS_STYLE } from "@/utils/Constant";
import { useRouter } from "next/router";
import React from "react";

const dressStyles = [
  [
    { label: "Casual", dressStyle: DRESS_STYLE.CASUAL, image: "/images/dress-style-grid/P1.jpg" },
    { label: "Formal", dressStyle: DRESS_STYLE.FORMAL, image: "/images/dress-style-grid/P2.jpg" }
  ],
  [ 
    { label: "Party", dressStyle: DRESS_STYLE.PARTY, image: "/images/dress-style-grid/p3.jpg" },
    { label: "Gym", dressStyle: DRESS_STYLE.GYM, image: "/images/dress-style-grid/P4.jpg" }
  ]
];

export const DressStyleGrid = () => { 


  const router = useRouter();
      
  const goToPage = (url: string) => {
      router.push(url);
  };

  return (
    <div className="bg-gray-100 rounded-3xl px-11 py-15 my-7 mx-27.5 max-sm:mx-4 max-sm:px-4 max-sm:py-4">
      <h2 className="text-3xl font-extrabold text-center mb-11">
        BROWSE BY DRESS STYLE
      </h2>

      <div>
        {dressStyles.map((row, index) => (
          <div key={index} className={`flex gap-4 mb-4 ${index%2==1 ? 'flex-row-reverse' : 'flex-row'} max-sm:flex-col`}>
            <div key={row[0].label} onClick={() => goToPage(`/category/${-1}?filter=${row[0].dressStyle}`)} className={"relative rounded-xl overflow-hidden transform transition-transform duration-200 hover:scale-110 w-1/3 cursor-pointer max-sm:w-full"}>
              <img
                src={row[0].image}
                alt={row[0].label}
                className="w-full h-60 object-cover"
              />
              <span className="absolute top-4 left-8 text-white font-semibold text-lg">
                {row[0].label}
              </span>
            </div>

            <div key={row[1].label} onClick={() => goToPage(`/category/${-1}?filter=${row[1].dressStyle}`)} className={"relative rounded-xl overflow-hidden transform transition-transform duration-200 hover:scale-110 cursor-pointer " + "w-2/3 max-sm:w-full"}>
              <img
                src={row[1].image}
                alt={row[1].label}
                className="w-full h-60 object-cover"
              />
              <span className="absolute top-4 left-8 text-white font-semibold text-lg">
                {row[1].label}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};