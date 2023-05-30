import React from "react";
import BarButton from "./helpers/BarButton";

const ProgramInfoBar = () => {
  return (
    <div className="overflow-x-scroll scrollbar-hide">
      <div className="min-w-[900px] flex">
        <BarButton name="summary" text="ملخص" />
        <BarButton name="program" text="برنامج الرحلة" />
        <BarButton name="stay" text="الإقامة" />
        <BarButton name="ratings" text="تقييمات العملاء" />
        <BarButton name="terms" text="شروط و أحكام" />
        {/*         <BarButton name="cancel" text="سياسة إلغاء الرحلة" />*/}
        <BarButton name="faq" text="أسئلة شائعة" />
      </div>
    </div>
  );
};

export default ProgramInfoBar;
