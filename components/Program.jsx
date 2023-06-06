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
import PriceDetails from "./program/PriceDetails";
import DailyTripProgram from "./program/DailyTripProgram";
import ProgramNotes from "./program/ProgramNotes";
import ProgramCars from "./program/ProgramCars";

const Program = ({type}) => {
  //const {programBar} = useG();
  const isProgramTravel = type === "program";
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

  const renderMainContent = () => {
    if (isProgramTravel) {
      return (
        <React.Fragment>
          <ProgramSummary isProgramTravel={isProgramTravel} />
          <TripProgram />
          <ProgramStay />
          <ProgramRatings />
          <ProgramTerms />
          <ProgramFaq />
        </React.Fragment>
      );
    } else {
      return (
        <React.Fragment>
          <ProgramSummary isProgramTravel={isProgramTravel} />
          <PriceDetails
            details={{
              includes: [
                "سيارة خاصة مع سائق.",
                "شامل الوقود.",
                "شامل طعام و مصروف السائق.",
                "مواقف السيارة - الإرشادات.",
                "مدة الرحلة  10 - 12 ساعة يوميا.",
              ],
              doesNotInclude: [
                "التذاكر للمناطق التي تحتاج تذاكر دخولية.",
                "المصاريف الشخصية.",
                "تذاكر دخول الأماكن الأثرية.",
                "الطعام و الشراب.",
              ],
            }}
            good={true}
          />
          <DailyTripProgram
            dailyTripProgram={{
              programTrip: [
                {
                  day: "الأول",
                  titleStation: "طرابزون.",
                },
                {
                  day: "الثاني",
                  titleStation: "معمل الشاي.",
                },
                {
                  day: "الثالث",
                  titleStation: "مزرعة الخيول.",
                  descriptionStation: "الاستقبال من المطار والمبيت في أوزنجول",
                  detailsStation: [
                    "شلالات أوزنجول.",
                    "تراس أوزنجول.",
                    "وقت حر.",
                  ],
                },
                {
                  day: "الرابع",
                  titleStation: "بحيرة أوزنجول.",
                  descriptionStation: "الاستقبال من المطار والمبيت في أوزنجول",
                  detailsStation: [
                    "شلالات أوزنجول.",
                    "تراس أوزنجول.",
                    "وقت حر.",
                  ],
                },
              ],
              activities: [
                "ركوب الخيل.",
                "مدينة الألعاب.",
                "ركوب الدراجات.",
                "الطيران الشراعي ( الباراشوت ).",
              ],
            }}
          />
          <ProgramNotes
            notes={[
              "أي إزعاج من السائق يتم تبديله مباشرة.",
              "يمكن التعديل على الجدول إذا رغبتم في تعديل الأماكن.",
              "يمكن التوقف متى أردتم في مسار الرحلة.",
              "السائق : خاص و ذو خبرة و كفاءة و حسن تعامل.",
            ]}
          />
          <ProgramCars />
          <ProgramRatings />
          <ProgramFaq />
        </React.Fragment>
      );
    }
  };

  const renderSideContent = () => (
    <ProgramSider shouldRenderMobileView={shouldRenderMobileView} />
  );

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
        <ProgramPics isProgramTravel={isProgramTravel} />
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
