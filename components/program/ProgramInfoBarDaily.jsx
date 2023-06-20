import React, {useEffect, useRef, useState} from "react";
import BarButton from "./helpers/BarButton";

const ProgramInfoBarDaily = () => {
  const programInfoRef = useRef(null);
  const [activeLink, setActiveLink] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      // Calculate the offset top of each section
      const summaryElement = document.getElementById("summary");
      const summaryOffsetTop = summaryElement
        ? summaryElement.offsetTop - 100
        : 0;

      const programElement = document.getElementById("program");
      const programOffsetTop = programElement
        ? programElement.offsetTop - 300
        : 0;

      const priceIncludeElement = document.getElementById("priceInclude");
      const priceIncludeOffsetTop = priceIncludeElement
        ? priceIncludeElement.offsetTop - 300
        : 0;

      const importantInfoElement = document.getElementById("importantInfo");
      const importantInfoOffsetTop = importantInfoElement
        ? importantInfoElement.offsetTop - 300
        : 0;

      const typiesCarsElement = document.getElementById("typiesCars");
      const typiesCarsOffsetTop = typiesCarsElement
        ? typiesCarsElement.offsetTop - 300
        : 0;

      const ratingsElement = document.getElementById("ratings");
      const ratingsOffsetTop = ratingsElement
        ? ratingsElement.offsetTop - 300
        : 0;

      const faqElement = document.getElementById("faq");
      const faqOffsetTop = faqElement ? faqElement.offsetTop - 300 : 0;

      // Update the active link based on the current scroll position
      if (
        window.pageYOffset >= summaryOffsetTop &&
        window.pageYOffset < priceIncludeOffsetTop
      ) {
        setActiveLink("summary");
      } else if (
        window.pageYOffset >= priceIncludeOffsetTop &&
        window.pageYOffset < programOffsetTop
      ) {
        setActiveLink("priceInclude");
      } else if (
        window.pageYOffset >= programOffsetTop &&
        window.pageYOffset < importantInfoOffsetTop
      ) {
        setActiveLink("program");
      } else if (
        window.pageYOffset >= importantInfoOffsetTop &&
        window.pageYOffset < typiesCarsOffsetTop
      ) {
        setActiveLink("importantInfo");
      } else if (
        window.pageYOffset >= typiesCarsOffsetTop &&
        window.pageYOffset < ratingsOffsetTop
      ) {
        setActiveLink("typiesCars");
      } else if (
        window.pageYOffset >= ratingsOffsetTop &&
        window.pageYOffset < faqOffsetTop
      ) {
        setActiveLink("ratings");
      } else if (window.pageYOffset >= faqOffsetTop) {
        setActiveLink("faq");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`sticky top-0 z-[2000] bg-white overflow-x-scroll scrollbar-hide`}
      ref={programInfoRef}
    >
      <div className="min-w-[900px] flex">
        <BarButton
          id="summary"
          name="summary"
          text="ملخص"
          active={activeLink === "summary"}
        />
        <BarButton
          id="priceInclude"
          name="priceInclude"
          text="السعر يشمل"
          active={activeLink === "priceInclude"}
        />
        <BarButton
          id="program"
          name="program"
          text="برنامج الرحلة"
          active={activeLink === "program"}
        />

        <BarButton
          id="importantInfo"
          name="importantInfo"
          text="معلومات مهمة"
          active={activeLink === "importantInfo"}
        />
        <BarButton
          id="typiesCars"
          name="typiesCars"
          text="أنواع السيارات"
          active={activeLink === "typiesCars"}
        />
        <BarButton
          id="ratings"
          name="ratings"
          text="تقييمات العملاء"
          active={activeLink === "ratings"}
        />
        <BarButton
          id="faq"
          name="faq"
          text="أسئلة شائعة"
          active={activeLink === "faq"}
        />
      </div>
    </div>
  );
};

export default ProgramInfoBarDaily;
