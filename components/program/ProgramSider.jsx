import React from "react";
import BoxOne from "./helpers/BoxOne";
import BoxInfo from "./helpers/BoxInfo";

const ProgramSider = () => {
  return (
    <div className="flex flex-col gap-y-4 md:gap-y-6">
      <BoxOne />
      <BoxInfo />
    </div>
  );
};

export default ProgramSider;
