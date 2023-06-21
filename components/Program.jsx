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
import ReactModal from "react-modal";
import ProgramInfoBarDaily from "./program/ProgramInfoBarDaily";

const CancelDetail = ({days, title, description, end}) => {
  return (
    <div className="flex justify-start items-center gap-[12px] w-full">
      <div className="relative h-full">
        <div className="w-[32px] h-[32px] rounded-full p-[2px] bg-[#092F44] text-white text-center">
          {days}
        </div>
        {!end && (
          <div
            style={{
              position: "absolute",
              top: "100%",
              left: "50%",
              width: "1px",
              backgroundColor: "#98A2B3",
              height: `28px`,
            }}
          />
        )}
      </div>
      <div className="flex justify-between items-center  rounded-[8px] py-[8px] px-[16px] w-full">
        <div className="flex justify-start items-center gap-[8px] ">
          <div className="flex flex-col ">
            <h6 className="text-[#475467] text-[12px]">{title}</h6>
            <p className="text-[12px]">{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const Program = ({type, openModal, modalIsOpen, closeModal}) => {
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
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      width: shouldRenderMobileView ? "90%" : "675px",
      height: shouldRenderMobileView ? "" : "656px",
      backgroundColor: "#fff",
      zIndex: 999999,
      position: "fixed",
      borderRadius: "16px",
    },
    overlay: {
      zIndex: 88888,
      position: "fixed",
      backgroundColor: "rgba(0, 0, 0, 0.5)",
    },
  };

  const renderMainContent = () => {
    if (isProgramTravel) {
      return (
        <React.Fragment>
          <ProgramSummary isProgramTravel={isProgramTravel} />
          <TripProgram />
          <ProgramStay />
          <ProgramRatings />
          <ProgramTerms />
          <ProgramCancel openModal={openModal} />
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
            doesNotInclude={[
              "التذاكر للمناطق التي تحتاج تذاكر دخولية.",
              "المصاريف الشخصية.",
              "تذاكر دخول الأماكن الأثرية.",
              "الطعام و الشراب.",
            ]}
          />
          <ProgramCars />
          <ProgramRatings />
          <ProgramCancel openModal={openModal} />
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
        {type === "program" ? <ProgramInfoBar /> : <ProgramInfoBarDaily />}
      </React.Fragment>
    ) : type === "program" ? (
      <ProgramInfoBar />
    ) : (
      <ProgramInfoBarDaily />
      
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
      <ReactModal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
        style={customStyles}
      >
        <div className="flex flex-col gap-[40px]">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-x-[8px]">
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9 4V7M23 4V7M4 25V10C4 9.20435 4.31607 8.44129 4.87868 7.87868C5.44129 7.31607 6.20435 7 7 7H25C25.7956 7 26.5587 7.31607 27.1213 7.87868C27.6839 8.44129 28 9.20435 28 10V25M4 25C4 25.7956 4.31607 26.5587 4.87868 27.1213C5.44129 27.6839 6.20435 28 7 28H25C25.7956 28 26.5587 27.6839 27.1213 27.1213C27.6839 26.5587 28 25.7956 28 25M4 25V15C4 14.2044 4.31607 13.4413 4.87868 12.8787C5.44129 12.3161 6.20435 12 7 12H25C25.7956 12 26.5587 12.3161 27.1213 12.8787C27.6839 13.4413 28 14.2044 28 15V25"
                  stroke="black"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M12.7998 23.2003L19.1998 16.8003M12.7998 16.8003L19.1998 23.2003"
                  stroke="black"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>

              <h2 className="text-[16px] sm:text-[28px] font-bold">
                أنت على وشك إلغاء الرحلة
              </h2>
            </div>
            <button onClick={closeModal}>
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8 24L24 8M8 8L24 24"
                  stroke="black"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
          </div>

          <div className="flex flex-col gap-[24px]">
            <p>
              نحن نتفهم هذه الأوقات غير المؤكدة ونريد التأكد من أنك تشعر بالثقة
              بشأن خياراتك إذا تغيرت خططك.
            </p>
            <div className="flex flex-col gap-[12px]">
              <h4 className="text-[14px] sm:text-[18px] font-bold">
                إلغاء الرحلة
              </h4>
              <p>
                إذا لم يكن هناك خيار آخر غير الإلغاء ، فنحن نود التأكد من أنك
                على دراية بالرسوم المحتملة المتضمنة. توضح النظرة العامة أدناه
                رسوم إلغاء هذه الجولة اعتمادًا على مدى تقدمك قبل تاريخ المغادرة
                الذي قمت بإلغاءه.
              </p>
            </div>
            <div className="flex flex-col items-start gap-[12px]">
              <CancelDetail
                days={45}
                title={"ما يصل إلى 45 يومًا قبل المغادرة"}
                description={"تخسر 10٪ من تكلفة الرحلة"}
              />
              <CancelDetail
                days={44}
                title={"44 يومًا قبل المغادرة"}
                description={"تخسر 40٪ من تكلفة الرحلة"}
              />
              <CancelDetail
                days={29}
                title={"29 يومًا قبل المغادرة"}
                description={"تخسر 70٪ من تكلفة الرحلة"}
              />
              <CancelDetail
                end={true}
                days={14}
                title={"14 يومًا قبل المغادرة"}
                description={"تخسر 100٪ من تكلفة الرحلة"}
              />
            </div>
            <div className="flex items-center justify-between gap-[10px]">
              <div>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3 14H6C6.53043 14 7.03914 14.2107 7.41421 14.5858C7.78929 14.9609 8 15.4696 8 16V19C8 19.5304 7.78929 20.0391 7.41421 20.4142C7.03914 20.7893 6.53043 21 6 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V12C3 9.61305 3.94821 7.32387 5.63604 5.63604C7.32387 3.94821 9.61305 3 12 3C14.3869 3 16.6761 3.94821 18.364 5.63604C20.0518 7.32387 21 9.61305 21 12V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H18C17.4696 21 16.9609 20.7893 16.5858 20.4142C16.2107 20.0391 16 19.5304 16 19V16C16 15.4696 16.2107 14.9609 16.5858 14.5858C16.9609 14.2107 17.4696 14 18 14H21"
                    stroke="black"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
              <p className="text-[#475467]">
                هل تحتاج إلى مساعدة؟ نوفر لك خدمة
                <span className="text-[#F08631]">دعم العملاء</span>
                على مدار الساعة طوال أيام الأسبوع.
              </p>
            </div>
          </div>
        </div>
      </ReactModal>
    </div>
  );
};

export default Program;
