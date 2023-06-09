import React, {useEffect, useRef, useState} from "react";
import BarButton from "./helpers/BarButton";

const ProgramInfoBar = () => {
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

      const stayElement = document.getElementById("stay");
      const stayOffsetTop = stayElement ? stayElement.offsetTop - 300 : 0;

      const ratingsElement = document.getElementById("ratings");
      const ratingsOffsetTop = ratingsElement
        ? ratingsElement.offsetTop - 300
        : 0;

      const termsElement = document.getElementById("terms");
      const termsOffsetTop = termsElement ? termsElement.offsetTop - 300 : 0;

      const faqElement = document.getElementById("faq");
      const faqOffsetTop = faqElement ? faqElement.offsetTop - 300 : 0;

      // Update the active link based on the current scroll position
      if (
        window.pageYOffset >= summaryOffsetTop &&
        window.pageYOffset < programOffsetTop
      ) {
        setActiveLink("summary");
      } else if (
        window.pageYOffset >= programOffsetTop &&
        window.pageYOffset < stayOffsetTop
      ) {
        setActiveLink("program");
      } else if (
        window.pageYOffset >= stayOffsetTop &&
        window.pageYOffset < ratingsOffsetTop
      ) {
        setActiveLink("stay");
      } else if (
        window.pageYOffset >= ratingsOffsetTop &&
        window.pageYOffset < termsOffsetTop
      ) {
        setActiveLink("ratings");
      } else if (
        window.pageYOffset >= termsOffsetTop &&
        window.pageYOffset < faqOffsetTop
      ) {
        setActiveLink("terms");
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
          id="program"
          name="program"
          text="برنامج الرحلة"
          active={activeLink === "program"}
        />
        <BarButton
          id="stay"
          name="stay"
          text="الإقامة"
          active={activeLink === "stay"}
        />
        <BarButton
          id="ratings"
          name="ratings"
          text="تقييمات العملاء"
          active={activeLink === "ratings"}
        />
        <BarButton
          id="terms"
          name="terms"
          text="شروط و أحكام"
          active={activeLink === "terms"}
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

export default ProgramInfoBar;
