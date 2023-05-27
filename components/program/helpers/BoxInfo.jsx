import Image from "next/image";
import React from "react";
import InfoQuick from "./InfoQuick";

const BoxInfo = () => {
  return (
    <div className="flex flex-col justify-center gap-[20px] p-[28px] border border-[#E9EAEC] rounded-[16px] shadow-md">
      <InfoQuick title="نوع الرحلة" value="رحلة خاصة." icon="bag.png" />
      <InfoQuick
        title="مدة الرحلة"
        value="07 أيام و 06 ليالي."
        icon="date-orange.png"
      />
      <InfoQuick title="حجم المجموعة" value="من 05 إلى 07." icon="group.png" />
      <InfoQuick
        title="العمر المسموح به"
        value="بين 10 و 90 سنة."
        icon="one.png"
      />
    </div>
  );
};

export default BoxInfo;
