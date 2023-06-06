import React, {useEffect, useRef, useState} from "react";
import BarButton from "./helpers/BarButton";

const ProgramInfoBar = () => {
  const programInfoRef = useRef(null);
  const [activeLink, setActiveLink] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      // Calculate the offset top of each section
      const summaryOffsetTop =
        document.getElementById("summary").offsetTop - 100;
      const programOffsetTop =
        document.getElementById("program").offsetTop - 300;
      const stayOffsetTop = document.getElementById("stay").offsetTop - 300;
      const ratingsOffsetTop =
        document.getElementById("ratings").offsetTop - 300;
      const termsOffsetTop = document.getElementById("terms").offsetTop - 300;
      const faqOffsetTop = document.getElementById("faq").offsetTop - 300;

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
