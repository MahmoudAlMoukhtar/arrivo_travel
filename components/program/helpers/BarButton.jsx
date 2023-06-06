import React from "react";
import {useG} from "../../../context/OurContext";

const BarButton = ({name, text, active}) => {
  const {programBar, setProgramBar} = useG();

  return (
    <a
      href={`#${name}`}
      onClick={() => setProgramBar(name)}
      className={`outline-none py-[16px] px-[20px] h-[45px] text-[14px] border-b border-[#C8CBD0] flex items-center justify-center  ${
        active && "font-semibold border-b-[3px]  border-b-orange"
      }`}
    >
      <span className={`${active && "text-orange"}`}>{text}</span>
    </a>
  );
};

export default BarButton;
/* programBar === name || */
