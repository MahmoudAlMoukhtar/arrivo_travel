import React from "react";
import ProgramPics from "./program/ProgramPics";
import ProgramInfoBar from "./program/ProgramInfoBar";
import { useG } from "../context/OurContext";
import ProgramSider from "./program/ProgramSider";
import ProgramSummary from "./program/ProgramSummary";
import ProgramProgram from "./program/ProgramProgram";
import ProgramStay from "./program/ProgramStay";
import ProgramRatings from "./program/ProgramRatings";
import ProgramTerms from "./program/ProgramTerms";
import ProgramCancel from "./program/ProgramCancel";
import ProgramFaq from "./program/ProgramFaq";

const Program = () => {
  const { programBar } = useG();

  return (
    <div className="py-[10px] md:py-[20px]">
      <div className="wrapper">
        <h1 className="text-[30px] md:text-[36px] font-bold">
          رحلة الشمال التركي الشاملة
        </h1>
        <ProgramPics />
        {/* bar */}
        <ProgramInfoBar />

        {/* content */}
        <div className="mt-4 grid grid-cols-12 gap-4">
          {/* main */}
          <div className="col-span-12 md:col-span-8">
            {programBar === "summary" ? (
              <ProgramSummary />
            ) : programBar === "program" ? (
              <ProgramProgram />
            ) : programBar === "stay" ? (
              <ProgramStay />
            ) : programBar === "ratings" ? (
              <ProgramRatings />
            ) : programBar === "terms" ? (
              <ProgramTerms />
            ) : programBar === "cancel" ? (
              <ProgramCancel />
            ) : (
              <ProgramFaq />
            )}
          </div>

          {/* side */}
          <div className="col-span-12 md:col-span-4">
            <ProgramSider />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Program;
