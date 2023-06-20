import Image from "next/image";
import React from "react";

const ProgramCancel = ({openModal}) => {
  return (
    <div className="flex flex-col gap-[20px] mt-[46px]">
      <div className="flex items-center gap-x-[8px]">
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9 4V7M23 4V7M4 25V10C4 9.20435 4.31607 8.44129 4.87868 7.87868C5.44129 7.31607 6.20435 7 7 7H25C25.7956 7 26.5587 7.31607 27.1213 7.87868C27.6839 8.44129 28 9.20435 28 10V25M4 25C4 25.7956 4.31607 26.5587 4.87868 27.1213C5.44129 27.6839 6.20435 28 7 28H25C25.7956 28 26.5587 27.6839 27.1213 27.1213C27.6839 26.5587 28 25.7956 28 25M4 25V15C4 14.2044 4.31607 13.4413 4.87868 12.8787C5.44129 12.3161 6.20435 12 7 12H25C25.7956 12 26.5587 12.3161 27.1213 12.8787C27.6839 13.4413 28 14.2044 28 15V25"
            stroke="black"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M12.7998 23.2003L19.1998 16.8003M12.7998 16.8003L19.1998 23.2003"
            stroke="black"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>

        <h2 className="text-[24px] sm:text-[28px] lg:text-[36px] font-bold">
          سياسة إلغاء الرحلة :
        </h2>
      </div>
      <p className="text-[#475467]">
        إذا لم يكن هناك خيار آخر غير الإلغاء ، فنحن نود التأكد من أنك على دراية
        بالرسوم المحتملة المتضمنة. توضح النظرة العامة أدناه رسوم إلغاء هذه
        الجولة اعتمادًا على المدة التي تلغيها قبل تاريخ المغادرة.
      </p>
      <button
        onClick={openModal}
        className="outline-none text-orange py-[12px] px-[20px] border border-orange rounded-[8px] hover:bg-orange hover:text-white duration-300 ease-out w-[122px]"
      >
        إلغاء الرحلة
      </button>
    </div>
  );
};

export default ProgramCancel;
