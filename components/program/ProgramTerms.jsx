import Image from "next/image";
import React from "react";

const termsData = [
  "في كل غرفة يمكن إضافة طفل تحت 6 سنوات و رضيع مجانا.",
  "يمكن توفير غرف متصلة للعائلات إذا توفر ذلك.",
  "يمكن تغير مكان الإقامة او نوع الغرف و تبديله بالخيارات الأخرى. أو المقترحة من طرفكم.",
  "يمكن تعديل جدول الرحلات أيضا مع أننا قمنا بإعداد أفضلهم.",
  "يمكنكم طلب عرض خاص بكم إن لم تجدوا ما يناسب من هذه العروض.",
  `ستضاف رحلات طول المدة في العروض الأطول مدة. ستعطى الغرف المذكورة في الجدول
للأعداد الأكبر.`,
];

const Term = ({t}) => {
  return (
    <div className="flex items-center gap-[8px] text-[16px] text-[#475467]">
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M9 12.75L11.25 15L15 9.75M21 12C21 13.1819 20.7672 14.3522 20.3149 15.4442C19.8626 16.5361 19.1997 17.5282 18.364 18.364C17.5282 19.1997 16.5361 19.8626 15.4442 20.3149C14.3522 20.7672 13.1819 21 12 21C10.8181 21 9.64778 20.7672 8.55585 20.3149C7.46392 19.8626 6.47177 19.1997 5.63604 18.364C4.80031 17.5282 4.13738 16.5361 3.68508 15.4442C3.23279 14.3522 3 13.1819 3 12C3 9.61305 3.94821 7.32387 5.63604 5.63604C7.32387 3.94821 9.61305 3 12 3C14.3869 3 16.6761 3.94821 18.364 5.63604C20.0518 7.32387 21 9.61305 21 12Z"
          stroke="#12B76A"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      {t}
    </div>
  );
};

const ProgramTerms = () => {
  return (
    <div id="terms" className="flex flex-col gap-[20px]">
      <div className="flex items-center gap-x-[8px]">
        <Image
          alt=""
          src="/icons/program/FrameTerms.svg"
          height={32}
          width={32}
          className="shrink-0"
        />
        <h2 className="text-[24px] sm:text-[28px] lg:text-[36px] font-bold">
          شروط و أحكام :
        </h2>
      </div>
      <p className="text-[#475467]">
        العرض ساري لفترة محدودة يمكن حجز العرض من الآن لأي من الأشهر يونيو
        ويوليو وأغسطس وسبتمر.
      </p>
      <div className="flex flex-col gap-[20px]">
        <h3 className="text-[14px] sm:text-[18px] font-bold">
          التعديل الممكن على البرامج السياحية :
        </h3>
        <div className="flex flex-col gap-[16px]">
          {termsData.map((t, i) => (
            <Term t={t} key={i} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProgramTerms;
