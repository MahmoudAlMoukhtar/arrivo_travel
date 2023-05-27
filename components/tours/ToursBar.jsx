import React from "react";
import TourButton from "./helpers/TourButton";

const ToursBar = ({setCountry}) => {
  return (
    <div className="mt-[32px] px-2 w-fit md:mx-auto">
      <div className="overflow-x-scroll scrollbar-hide">
        <div className="w-[343px]  sm:w-[489px] flex bg-orange p-[4px] rounded-[40px]">
          <TourButton name="trabzon" text="طرابزون" setCountry={setCountry} />
          <TourButton name="istanbul" text="اسطنبول" setCountry={setCountry} />
          <TourButton name="antalya" text="انطاليا" setCountry={setCountry} />
          <TourButton
            name="groups"
            text="رحلات جماعية"
            setCountry={setCountry}
          />
          <TourButton name="kbodkia" text="كبودكيا" setCountry={setCountry} />
        </div>
      </div>
    </div>
  );
};

export default ToursBar;
/* <div className="w-[343px] flex bg-orange p-[4px] rounded-[40px]"></div> */
