import Image from "next/image";
import React from "react";

const BreadCrumb = () => {
  return (
    <div className="w-full">
      <div className="wrapper">
        <div className="mt-[30px] md:mt-[50px] flex items-center gap-[4px] text-[12px]">
          <div className="stage flex gap-[4px]">
            <span>الرئيسية</span>
          </div>
          <div className="stage flex gap-[4px]">
            <Image src="/icons/arrow.png" height={20} width={20} alt="/" />
            <span>البرامج السياحية</span>
          </div>
          <div className="stage flex gap-[4px]">
            <Image src="/icons/arrow.png" height={20} width={20} alt="/" />
            <span className="text-orange">الشمال التركي</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BreadCrumb;
