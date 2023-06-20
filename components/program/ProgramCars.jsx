import Image from "next/image";
import React from "react";
//import OneLocation from "./helpers/OneLocation";

const cars = [
  {img: "car-1.jpg", name: "دير سوميلا"},
  {img: "car-2.jpg", name: "مغار شال"},
  {img: "car-3.jpg", name: "مرتفعات سلطان مراد"},
  {img: "car-4.jpg", name: "قرية إيدر"},
  {img: "car-5.jpg", name: "قرية هامسي كوري"},
  {img: "car-6.jpg", name: "بحيرة أوزنجول"},
  {img: "car-7.jpg", name: "نهر و وادي الرياح"},
  {img: "car-8.jpg", name: "شلال بولفيت"},
];

const ProgramCars = () => {
  return (
    <div
      id="typiesCars"
      className="flex flex-col gap-[20px] mb-[40px] md:mb-[50px]"
    >
      <div className="flex flex-col gap-[28px]">
        <div className="flex items-center gap-x-[8px]">
          <div>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14 16H9M19 16H22V12.85C22.0007 12.6121 21.9165 12.3816 21.7625 12.2002C21.6085 12.0187 21.3949 11.8981 21.16 11.86L16 11L13.3 7.40005C13.2069 7.27585 13.0861 7.17505 12.9472 7.10562C12.8084 7.03619 12.6552 7.00005 12.5 7.00005H5.24C4.86727 6.99745 4.50123 7.09907 4.18318 7.29344C3.86513 7.4878 3.60772 7.76718 3.44 8.10005L2.64 9.73005C2.22015 10.5647 2.00099 11.4858 2 12.42V16H4"
                stroke="black"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M6.5 19C7.88071 19 9 17.8807 9 16.5C9 15.1193 7.88071 14 6.5 14C5.11929 14 4 15.1193 4 16.5C4 17.8807 5.11929 19 6.5 19Z"
                stroke="black"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M16.5 19C17.8807 19 19 17.8807 19 16.5C19 15.1193 17.8807 14 16.5 14C15.1193 14 14 15.1193 14 16.5C14 17.8807 15.1193 19 16.5 19Z"
                stroke="black"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>

          <h2 className="text-[24px] sm:text-[28px] lg:text-[36px] font-bold">
            أنواع السيارات:
          </h2>
        </div>
        <p className="text-[#636973]">
          السيارات متوفرين بحجمين بـ 8 مقاعد أو 14 مقعد إلى 19 مقعد. و ستكون
          الرحلة بسيارات حديثة.
        </p>
      </div>
      <div className="grid grid-cols-12 gap-[12px] md:gap-[20px]">
        {cars.map((car, i) => (
          <div
            key={i}
            className="col-span-6 lg:col-span-3 flex flex-col gap-[4px]"
          >
            <div className="w-full aspect-square h-[183px] relative">
              <Image
                alt=""
                src={`/images/cars/${car.img}`}
                className="object-cover rounded-[8px]"
                fill
              />
            </div>
            {/* <h6 className="text-[16px] text-[#3E444D]">{car.name}</h6> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProgramCars;
