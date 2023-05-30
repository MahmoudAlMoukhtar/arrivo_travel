import React from "react";
import BoxOne from "./helpers/BoxOne";
import BoxInfo from "./helpers/BoxInfo";

const ProgramSider = ({isSmallScreen}) => {
  return (
    <div className="flex flex-col gap-y-4 md:gap-y-6">
      {isSmallScreen ? (
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
