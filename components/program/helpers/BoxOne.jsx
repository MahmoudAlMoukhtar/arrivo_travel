import Image from "next/image";
import React from "react";

const BoxOne = () => {
  return (
    <div className="flex flex-col justify-center gap-[20px] py-[20px] px-[16px] border border-[#E9EAEC] rounded-[16px] shadow-md">
      <div className="flex items-center gap-x-2 text-[16px]">
        <Image src="/icons/star.png" height={19} width={20} alt="" />
        <span>5.0</span>
        <span>.</span>
        <span className="underline">
          <span>19 </span>تقييم
        </span>
      </div>
      <p className="text-[16px] text-[#636973]">
        رحلة العمر نضمن لك فيها السعادة. نوفر لكم الأسعار المناسبة و الملائمة.
      </p>
      <div className="flex justify-between gap-x-2 md:gap-x-4">
        <button className="flex gap-[4px] items-center justify-center md:h-[48px] py-[6px] md:py-[12px] px-[10px] md:px-[20px] bg-orange text-white text-[14px] md:text-[16px] rounded-[8px] hover:shadow">
          <div className="h-[20px] w-[20px] md:h-[24px] md:w-[24px] relative">
            <Image alt="" src="/icons/date.png" fill />
          </div>
          <span>شاهد التوفر و الأسعار</span>
        </button>
        <button className="flex items-center justify-center md:h-[48px] p-[6px] md:p-[12px] rounded-[8px] border border-solid border-orange">
          <div className="h-[20px] w-[20px] md:h-[24px] md:w-[24px] relative">
            <Image alt="" src="/icons/save.svg" fill />
          </div>
        </button>
        <button className="flex items-center justify-center md:h-[48px] p-[6px] md:p-[12px] rounded-[8px] border border-solid border-orange">
          <div className="h-[20px] w-[20px] md:h-[24px] md:w-[24px] relative">
            <Image alt="" src="/icons/share.png" fill />
          </div>
        </button>
      </div>
    </div>
  );
};

export default BoxOne;
