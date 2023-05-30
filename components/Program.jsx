import React, {useEffect, useState} from "react";
import ProgramPics from "./program/ProgramPics";
import ProgramInfoBar from "./program/ProgramInfoBar";
import {useG} from "../context/OurContext";
import ProgramSider from "./program/ProgramSider";
import ProgramSummary from "./program/ProgramSummary";
import TripProgram from "./program/TripProgram";
import ProgramStay from "./program/ProgramStay";
import ProgramRatings from "./program/ProgramRatings";
import ProgramTerms from "./program/ProgramTerms";
import ProgramCancel from "./program/ProgramCancel";
import ProgramFaq from "./program/ProgramFaq";
import BoxOne from "./program/helpers/BoxOne";
import SimilarTrips from "./SimilarTrips";

const travelData = {
  type: "program",
};

const Program = () => {
  const {programBar} = useG();
  const [shouldRenderMobileView, setShouldRenderMobileView] = useState(false);

  useEffect(() => {
    function handleResize() {
      const isScreenSizeBelowBreakpoint = window.innerWidth < 768;
      setShouldRenderMobileView(isScreenSizeBelowBreakpoint);
    }
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const renderMainContent = () => (
    <React.Fragment>
      <ProgramSummary />
      <TripProgram />
      <ProgramStay />
      <ProgramRatings />
      <ProgramTerms />
      <ProgramFaq />
    </React.Fragment>
  );

  const renderSideContent = () => <ProgramSider />;

  const renderInfoBar = () =>
    shouldRenderMobileView ? (
      <React.Fragment>
        <BoxOne
          titlTrip="رحلة الشمال التركي الشاملة"
          shouldRenderMobileView={shouldRenderMobileView}
        />
        <ProgramInfoBar />
      </React.Fragment>
    ) : (
      <ProgramInfoBar />
    );

  return (
    <div className="py-[10px] md:py-[20px]">
      <div className="wrapper">
        {!shouldRenderMobileView && (
          <h1 className="text-[30px] md:text-[36px] font-bold">
            رحلة الشمال التركي الشاملة
          </h1>
        )}
        <ProgramPics />
        {renderInfoBar()}

        <div className="mt-4 grid grid-cols-12 gap-4">
          {shouldRenderMobileView ? (
            <React.Fragment>
              <div className="col-span-12 md:col-span-5 lg:col-span-4">
                {renderSideContent()}
              </div>
              <div className="col-span-12 md:col-span-7 lg:col-span-8">
                {renderMainContent()}
              </div>
            </React.Fragment>
          ) : (
            <React.Fragment>
              <div className="col-span-12 md:col-span-7 lg:col-span-8">
                {renderMainContent()}
              </div>
              <div className="col-span-12 md:col-span-5 lg:col-span-4">
                {renderSideContent()}
              </div>
            </React.Fragment>
          )}
        </div>
      </div>
      <SimilarTrips />
    </div>
  );
};

export default Program;

// import React, {useEffect, useState} from "react";
// import ProgramPics from "./program/ProgramPics";
// import ProgramInfoBar from "./program/ProgramInfoBar";
// import {useG} from "../context/OurContext";
// import ProgramSider from "./program/ProgramSider";
// import ProgramSummary from "./program/ProgramSummary";
// import TripProgram from "./program/TripProgram";
// import ProgramStay from "./program/ProgramStay";
// import ProgramRatings from "./program/ProgramRatings";
// import ProgramTerms from "./program/ProgramTerms";
// import ProgramCancel from "./program/ProgramCancel";
// import ProgramFaq from "./program/ProgramFaq";
// import BoxOne from "./program/helpers/BoxOne";
// import SimilarTrips from "./SimilarTrips";

// const travelData = {
//   type: "program",
// };

// const Program = () => {
//   const {programBar} = useG();
//   const isProgramTravel = travelData.type === "program";
//   const [isSmallScreen, setIsSmallScreen] = useState(false);

//   useEffect(() => {
//     // Check screen size on mount and whenever it changes
//     function handleResize() {
//       setIsSmallScreen(window.innerWidth < 768); // Set breakpoint as per your requirement
//     }
//     window.addEventListener("resize", handleResize);
//     handleResize(); // Call the function initially as well
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);
//   return (
//     <div className="py-[10px] md:py-[20px]">
//       <div className="wrapper">
//         <h1 className="text-[30px] md:text-[36px] font-bold">
//           رحلة الشمال التركي الشاملة
//         </h1>
//         <ProgramPics />
//         {/* bar */}
//         {isSmallScreen ? (
//           <React.Fragment>
//             <BoxOne
//               titlTrip="رحلة الشمال التركي الشاملة"
//               isSmallScreen={isSmallScreen}
//             />
//             <ProgramInfoBar />
//           </React.Fragment>
//         ) : (
//           <ProgramInfoBar />
//         )}

//         {/* content */}
//         <div className="mt-4 grid grid-cols-12 gap-4">
//           {isSmallScreen ? (
//             <React.Fragment>
//               <div className="col-span-12 md:col-span-5 lg:col-span-4">
//                 <ProgramSider isSmallScreen={isSmallScreen} />
//               </div>
//               {isProgramTravel ? (
//                 <div className="col-span-12 md:col-span-7 lg:col-span-8">
//                   <ProgramSummary />
//                   <TripProgram />
//                   <ProgramStay />
//                   <ProgramRatings />
//                   <ProgramTerms />
//                   <ProgramFaq />
//                 </div>
//               ) : (
//                 <div className="col-span-12 md:col-span-7 lg:col-span-8">
//                   <ProgramSummary />
//                   <TripProgram />
//                   <ProgramStay />
//                   <ProgramRatings />
//                   <ProgramTerms />
//                   <ProgramFaq />
//                 </div>
//               )}
//             </React.Fragment>
//           ) : (
//             <React.Fragment>
//               {/* main */}
//               {isProgramTravel ? (
//                 <div className="col-span-12 md:col-span-7 lg:col-span-8">
//                   <ProgramSummary />
//                   <TripProgram />
//                   <ProgramStay />
//                   <ProgramRatings />
//                   <ProgramTerms />
//                   <ProgramFaq />
//                 </div>
//               ) : (
//                 <div className="col-span-12 md:col-span-7 lg:col-span-8">
//                   <ProgramSummary />
//                   <TripProgram />
//                   <ProgramStay />
//                   <ProgramRatings />
//                   <ProgramTerms />
//                   <ProgramFaq />
//                 </div>
//               )}

//               {/* side */}
//               <div className="col-span-12 md:col-span-5 lg:col-span-4">
//                 <ProgramSider />
//               </div>
//             </React.Fragment>
//           )}
//         </div>
//       </div>
//       <SimilarTrips />
//     </div>
//   );
// };

// export default Program;
/* 
<div className="col-span-12 md:col-span-7 lg:col-span-8">
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
*/
/* 

     <div className="col-span-12 md:col-span-7 lg:col-span-8">
            <ProgramSummary />
            <ProgramProgram />
            <ProgramStay />
            <ProgramRatings />
            <ProgramTerms />
            <ProgramCancel />
            <ProgramFaq />
          </div>
*/
