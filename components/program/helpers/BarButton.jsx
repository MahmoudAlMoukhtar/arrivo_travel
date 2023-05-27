import React from "react";
import { useG } from "../../../context/OurContext";

const BarButton = ({ name, text }) => {
  const { programBar, setProgramBar } = useG();

  return (
    <button
      onClick={() => setProgramBar(name)}
      className={`outline-none py-[16px] px-[20px] h-[45px] text-[14px] border-b border-[#C8CBD0] flex items-center justify-center ${
        programBar === name && "font-semibold border-b-[3px]  border-b-orange"
      }`}
    >
      <span className={`${programBar === name && "text-orange"}`}>{text}</span>
    </button>
  );
};

export default BarButton;
