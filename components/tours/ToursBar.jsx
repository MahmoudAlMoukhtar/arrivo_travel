import React from "react";
import TourButton from "./helpers/TourButton";

const ToursBar = ({buttons, setCountry}) => {
  return (
    <div className="mt-[32px] px-2 w-fit md:mx-auto">
      <div className="overflow-x-scroll scrollbar-hide">
        <div className=" max-w-[701px] flex bg-orange p-[4px] rounded-[40px]">
          {buttons.map((b, i) => (
            <TourButton
              key={i}
              name={b.name}
              text={b.text}
              setCountry={setCountry}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ToursBar;
/* <div className="w-[343px] flex bg-orange p-[4px] rounded-[40px]"></div> */
