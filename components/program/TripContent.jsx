import Image from "next/image";
import React from "react";
import OneContent from "./helpers/OneContent";

const conts = [
  {
    icon: "locs.png",
    title: "إقامة مميزة بأماكن خيالية",
    details: "نوفر لكم إقامة مميزة بأماكن خيالية و بأسعار مناسبة لكم.",
  },
  {
    icon: "hotel.png",
    title: "إقامة مميزة بأماكن خيالية",
    details: "نوفر لكم إقامة مميزة بأماكن خيالية و بأسعار مناسبة لكم.",
  },
  {
    icon: "garson.png",
    title: "سائق خاص طول المدة",
    details: "نوفر لكم إقامة مميزة بأماكن خيالية و بأسعار مناسبة لكم.",
  },
  {
    icon: "food.png",
    title: "وجبة الإفطار بأماكن الإقامة",
    details: "نوفر لكم وجبة إفطار لذيذة لكم.",
  },
  {
    icon: "car.png",
    title: "رحلات سياحية متنوعة و توصيل",
    details: "رحلات سياحية متنوعة و توصيل.",
  },
];

const TripContent = () => {
  return (
    <div className="flex flex-col gap-[20px] mb-[40px] md:mb-[50px]">
      <div className="flex items-center gap-x-[8px]">
        <Image
          alt=""
          src="/icons/info.png"
          height={24}
          width={24}
          className="shrink-0"
        />
        <h2 className="text-[24px] sm:text-[28px] lg:text-[36px] font-bold">
          محتويات الرحلة :
        </h2>
      </div>
      <div className="grid grid-cols-12 gap-[12px]">
        {conts.map((cont, i) => (
          <OneContent key={i} cont={cont} />
        ))}
      </div>
    </div>
  );
};

export default TripContent;
