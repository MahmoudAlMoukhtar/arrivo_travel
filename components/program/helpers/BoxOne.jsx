import Image from "next/image";
import Link from "next/link";
import React from "react";

const BoxOne = ({shouldRenderMobileView}) => {
  const shareText = "Check out this awesome trip!";

  function handleFacebookClick() {
    console.log(window.location.href);
    const url = `https://www.facebook.com/sharer.php?u=${encodeURIComponent(
      "https://github.com/MahmoudAlMoukhtar/arrivo_travel"
    )}&quote=${encodeURIComponent(shareText)}`;
    window.open(url, "_blank", "width=600,height=400");
  }

  function handleWhatsAppClick() {
    const shareUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(
      shareText
    )} ${encodeURIComponent(
      "https://github.com/MahmoudAlMoukhtar/arrivo_travel"
    )}`;
    const link = document.createElement("a");
    link.href = shareUrl;
    link.target = "_blank";
    document.body.appendChild(link);
    link.click();
  }

  return (
    <div
      className={
        shouldRenderMobileView
          ? "flex flex-col justify-center gap-[20px]  px-[16px] border-[#E9EAEC] rounded-t-[32px] translate-y-[-100px] bg-[#fff] border-[0px] pt-[40px]"
          : "flex flex-col justify-center gap-[20px] py-[20px] px-[16px] border border-[#E9EAEC] rounded-[16px] "
      }
      style={
        !shouldRenderMobileView
          ? {boxShadow: "0px 6px 12px rgba(91, 116, 130, 0.1)"}
          : {boxShadow: ""}
      }
    >
      {shouldRenderMobileView && (
        <h1 className="text-[30px] md:text-[36px] font-bold">
          رحلة الشمال التركي الشاملة
        </h1>
      )}
      <div className="flex items-center gap-x-2 text-[16px]">
        <Image src="/icons/star.png" height={19} width={20} alt="" />
        <span>5.0</span>
        <span>.</span>
        <span className="">
          <span>19 </span>تقييم
        </span>
      </div>
      <p className="text-[16px] text-[#636973]">
        رحلة العمر نضمن لك فيها السعادة. نوفر لكم الأسعار المناسبة و الملائمة.
      </p>
      <div className="flex  md:justify-between md:flex-col xl:flex-row gap-4">
        <Link
          href={"/travels-programs/program/timings-prices"}
          className="flex gap-[4px] items-center justify-center h-[40px] md:h-[48px] py-[6px] md:py-[12px] px-[16px] md:px-[20px] bg-orange text-white text-[14px] md:text-[16px] rounded-[8px] hover:shadow"
        >
          <div className="h-[20px] w-[20px] md:h-[24px] md:w-[24px] relative">
            <Image alt="" src="/icons/date.png" fill />
          </div>
          <p>شاهد التوفر و الأسعار</p>
        </Link>
        <div className="flex xl:justify-center items-center gap-[20px] lg:gap-[10px]">
          <button className="flex items-center justify-center w-full lg:h-[48px] p-[6px] md:p-[12px] rounded-[8px] border border-solid border-orange">
            <div className="h-[20px] w-[20px] md:h-[24px] md:w-[24px] relative">
              <Image alt="" src="/icons/save.svg" fill />
            </div>
          </button>
          <button
            onClick={handleWhatsAppClick}
            className="flex items-center justify-center w-full lg:h-[48px] p-[6px] md:p-[12px] rounded-[8px] border border-solid border-orange"
          >
            <div className="h-[20px] w-[20px] md:h-[24px] md:w-[24px] relative">
              <Image alt="" src="/icons/share.png" fill />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default BoxOne;
