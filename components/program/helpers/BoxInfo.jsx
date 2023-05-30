import Image from "next/image";
import React from "react";
import InfoQuick from "./InfoQuick";

const BoxInfo = () => {
  return (
    <div
      className="flex flex-col justify-center gap-[20px] p-[28px] border border-[#E9EAEC] rounded-[16px] shadow-md"
      style={{boxShadow: "0px 6px 12px rgba(91, 116, 130, 0.1)"}}
    >
      <InfoQuick title="نوع الرحلة" value="رحلة خاصة." icon="bag.png" />
      <hr className="h-[1px] bg-[#E9EAEC]" />
      <InfoQuick
        title="مدة الرحلة"
        value="07 أيام و 06 ليالي."
        icon="date-orange.png"
      />
      <hr className="h-[1px] bg-[#E9EAEC]" />
      <InfoQuick title="حجم المجموعة" value="من 05 إلى 07." icon="group.png" />
    </div>
  );
};

export default BoxInfo;
/* 
  <InfoQuick
        title="العمر المسموح به"
        value="بين 10 و 90 سنة."
        icon="one.png"
      />
*/
