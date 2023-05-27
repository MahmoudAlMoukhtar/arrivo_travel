import Image from "next/image";
import React, {useState} from "react";
import {useG} from "../../context/OurContext";

const Offer = () => {
  const [view, setView] = useState(true);
  const {screenWidth} = useG();

  return (
    view && (
      <div className="bg-[#072F45]  text-white flex justify-between items-center gap-[12px] px-2 md:px-0">
        <div className="hidden md:inline relative h-[64px] w-[64px] overflow-hidden">
          <Image
            alt="/"
            src="/icons/offer/explore.svg"
            width={64}
            height={64}
            // fixed
            className="transform -translate-y-[1/4]"
            // className="w-full object-top "
          />
        </div>
        <div className="flex items-center gap-x-[16px] py-[8px] md:py-[12px]">
          <h1 className="text-[20px] md:text-[28px]">عروض الاسبوع</h1>
          <div className="flex-1 flex flex-col lg:flex-row lg:items-center gap-x-[16px]">
            <h4 className="text-[14px] md:text-[16px]">
              خصم يصل الى{" "}
              <span className="font-bold-600 text-[20px] md:text-[28px]">
                50%
              </span>
            </h4>
            <div className="bg-[#1D6891] flex justify-center items-center md:h-[40px] px-[5px] md:px-[20px] py-[5px] md:py-[10px] rounded-[8px] text-[14px] md:text-[16px] text-white">
              العرض ساري لغاية 7 يوليو
              <span className="hidden md:inline"> -2023</span>
            </div>
          </div>
        </div>
        <div
          onClick={() => setView(false)}
          className="md:ml-6 relative h-[18px] md:h-[24px] w-[18px] md:w-[24px] rounded-full bg-[#1D6891] flex items-center justify-center cursor-pointer hover:bg-red-600 duration-300"
        >
          <Image
            alt="/"
            src="/icons/offer/close.svg"
            width={screenWidth > 500 ? 16 : 12}
            height={screenWidth > 500 ? 16 : 12}
            // fixed
            className="transform -translate-y-[1/4]"
            // className="w-full object-top "
          />
        </div>
      </div>
    )
  );
};

export default Offer;
