import Image from "next/image";
import React from "react";
import OneLocation from "./helpers/OneLocation";

const locs = [
  { img: "loc-1.png", name: "دير سوميلا" },
  { img: "loc-2.png", name: "مغار شال" },
  { img: "loc-3.png", name: "مرتفعات سلطان مراد" },
  { img: "loc-4.png", name: "قرية إيدر" },
  { img: "loc-5.png", name: "قرية هامسي كوري" },
  { img: "loc-6.png", name: "بحيرة أوزنجول" },
  { img: "loc-7.png", name: "نهر و وادي الرياح" },
  { img: "loc-8.png", name: "شلال بولفيت" },
];

const TripPlaces = () => {
  return (
    <div className="flex flex-col gap-[20px] mb-[40px] md:mb-[50px]">
      <div className="flex items-center gap-x-[8px]">
        <Image
          alt=""
          src="/icons/map.png"
          height={24}
          width={24}
          className="shrink-0"
        />
        <h2 className="text-[28px] font-bold">
          من أبرز الأماكن التي سنزورها :
        </h2>
      </div>
      <div className="grid grid-cols-12 gap-[12px] md:gap-[20px]">
        {locs.map((loc, i) => (
          <OneLocation key={i} loc={loc} />
        ))}
      </div>
    </div>
  );
};

export default TripPlaces;
