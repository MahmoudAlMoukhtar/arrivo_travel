import Image from "next/image";
import React from "react";

const InfoQuick = ({icon, title, value}) => {
  return (
    <>
      <div className="flex items-center gap-x-2 text-[16px]">
        <Image src={`/icons/${icon}`} height={24} width={24} alt="" />
        <div className="flex flex-col gap-[4px]">
          <span className="text-[14px] text-[#636973]">{title}</span>
          <span className="text-[16px]">{value}</span>
        </div>
      </div>
    </>
  );
};

export default InfoQuick;
