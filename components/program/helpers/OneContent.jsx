import Image from "next/image";
import React from "react";

const OneContent = ({ cont }) => {
  const { icon, title, details } = cont;
  return (
    <div className="col-span-12 md:col-span-6 flex items-center gap-x-2 text-[16px]">
      <Image src={`/icons/${icon}`} height={48} width={48} alt="" />
      <div className="flex flex-col gap-[4px]">
        <span className="text-[16px] font-bold">{title}</span>
        <span className="text-[12px] text-[#636973]">{details}</span>
      </div>
    </div>
  );
};

export default OneContent;
