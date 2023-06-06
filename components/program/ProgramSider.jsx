import React from "react";
import BoxOne from "./helpers/BoxOne";
import BoxInfo from "./helpers/BoxInfo";

const ProgramSider = ({shouldRenderMobileView}) => {
  return (
    <div className="flex flex-col gap-y-4 md:gap-y-6 md:sticky  md:top-8 z-[2000] bg-white">
      {shouldRenderMobileView ? (
        <BoxInfo />
      ) : (
        <React.Fragment>
          <BoxOne />

          <BoxInfo />
        </React.Fragment>
      )}
    </div>
  );
};

export default ProgramSider;
