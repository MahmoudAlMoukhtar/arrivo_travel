import Image from "next/image";
import React, {useEffect, useState} from "react";

const programDailyTrip = [
  {
    day: "الأول",
    titleStation: "المبيت في أوزنجول",
    descriptionStation: "الاستقبال من المطار والمبيت في أوزنجول",
    detailsStation: {
      programTrip:
        "تبدأ من موقع الإقامة برفقة سائق خاص لزيارة مزارات متنوعة تشمل مزرعة خيول، بحيرة أوزنجول وشلالاتها، حديقة ألعاب، ورؤية مناظر بديعة من أعلى قمة. يتضمن البرنامج تناول وجبات واستكشاف القرية والأسواق وركوب القوارب في البحيرة. تنتهي الرحلة بالعودة للإقامة للراحة... شاهد المزيد",
      mostiImportantPlacesToVisit:
        "مزرعة الخيول - شلالات اوزنجول - حديقة الألعاب - قمة اوزنجول - بحيرة  اوزنجول - تراس اوزنجول. ",
      activitiesThatCanBeDone:
        "الرافتينغ- (رياضة التجديف) - الزبلاين والمرجحات- الكشتة.",
      Residence: "فندق دوغام سويت  او . فندق مشابه (لليلتين).",
    },
  },
  {
    day: "الثاني",
    titleStation: "المبيت في أوزنجول",
    descriptionStation: "الاستقبال من المطار والمبيت في أوزنجول",
    detailsStation: {
      programTrip:
        "تبدأ من موقع الإقامة برفقة سائق خاص لزيارة مزارات متنوعة تشمل مزرعة خيول، بحيرة أوزنجول وشلالاتها، حديقة ألعاب، ورؤية مناظر بديعة من أعلى قمة. يتضمن البرنامج تناول وجبات واستكشاف القرية والأسواق وركوب القوارب في البحيرة. تنتهي الرحلة بالعودة للإقامة للراحة... شاهد المزيد",
      mostiImportantPlacesToVisit:
        "مزرعة الخيول - شلالات اوزنجول - حديقة الألعاب - قمة اوزنجول - بحيرة  اوزنجول - تراس اوزنجول. ",
      activitiesThatCanBeDone:
        "الرافتينغ- (رياضة التجديف) - الزبلاين والمرجحات- الكشتة.",
      Residence: "فندق دوغام سويت  او . فندق مشابه (لليلتين).",
    },
  },
  {
    day: "الثالث",
    titleStation: "المبيت في أوزنجول",
    descriptionStation: "الاستقبال من المطار والمبيت في أوزنجول",
    detailsStation: {
      programTrip:
        "تبدأ من موقع الإقامة برفقة سائق خاص لزيارة مزارات متنوعة تشمل مزرعة خيول، بحيرة أوزنجول وشلالاتها، حديقة ألعاب، ورؤية مناظر بديعة من أعلى قمة. يتضمن البرنامج تناول وجبات واستكشاف القرية والأسواق وركوب القوارب في البحيرة. تنتهي الرحلة بالعودة للإقامة للراحة... شاهد المزيد",
      mostiImportantPlacesToVisit:
        "مزرعة الخيول - شلالات اوزنجول - حديقة الألعاب - قمة اوزنجول - بحيرة  اوزنجول - تراس اوزنجول. ",
      activitiesThatCanBeDone:
        "الرافتينغ- (رياضة التجديف) - الزبلاين والمرجحات- الكشتة.",
      Residence: "فندق دوغام سويت  او . فندق مشابه (لليلتين).",
    },
  },
  {
    day: "الرابع",
    titleStation: "المبيت في أوزنجول",
    descriptionStation: "الاستقبال من المطار والمبيت في أوزنجول",
    detailsStation: {
      programTrip:
        "تبدأ من موقع الإقامة برفقة سائق خاص لزيارة مزارات متنوعة تشمل مزرعة خيول، بحيرة أوزنجول وشلالاتها، حديقة ألعاب، ورؤية مناظر بديعة من أعلى قمة. يتضمن البرنامج تناول وجبات واستكشاف القرية والأسواق وركوب القوارب في البحيرة. تنتهي الرحلة بالعودة للإقامة للراحة... شاهد المزيد",
      mostiImportantPlacesToVisit:
        "مزرعة الخيول - شلالات اوزنجول - حديقة الألعاب - قمة اوزنجول - بحيرة  اوزنجول - تراس اوزنجول. ",
      activitiesThatCanBeDone:
        "الرافتينغ- (رياضة التجديف) - الزبلاين والمرجحات- الكشتة.",
      Residence: "فندق دوغام سويت  او . فندق مشابه (لليلتين).",
    },
  },
];

const PropgramTripFile = () => {
  const [hoverBtn, setHoverBtn] = useState(false);
  return (
    <div
      id="section_file_program"
      className="flex flex-col sm:flex-row justify-center sm:justify-between sm:text-start text-center items-center gap-[14px]"
    >
      <div id="file_program_content" className="flex flex-col gap-[4px]">
        <h5 className="text-[18px] font-bold">هل تريد قرائته لاحقا؟</h5>
        <p className="text-[##475467] text-[12px]">
          قم بتنزيل كتيب PDF لهذه الجولة وابدأ التخطيط للجولة
        </p>
      </div>
      <button
        onMouseOver={() => setHoverBtn(true)}
        onMouseOut={() => setHoverBtn(false)}
        className="flex justify-center gap-[8px] py-[12px] px-[20px] border-[1px] border-[#F08631] rounded-[8px] hover:bg-orange hover:text-white duration-300 ease-out text-[#F08631] font-[500] w-full sm:w-auto"
      >
        <svg
          width="18"
          height="18"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1 14.5V16.75C1 17.3467 1.23705 17.919 1.65901 18.341C2.08097 18.7629 2.65326 19 3.25 19H16.75C17.3467 19 17.919 18.7629 18.341 18.341C18.7629 17.919 19 17.3467 19 16.75V14.5M14.5 10L10 14.5M10 14.5L5.5 10M10 14.5V1"
            stroke={hoverBtn ? "#fff" : "#F08631"}
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        تحميل برنامج الرحلة
      </button>
    </div>
  );
};

const DetailsStations = ({p}) => {
  const SectionDetailProgramDay = ({title, details}) => {
    return (
      <div className="flex flex-col max-w-[697px]">
        <div className="flex items-start gap-x-[21px] w-full">
          <span className="h-[8px] w-[8px] bg-[#092F44] rounded-full mt-2 translate-x-[+2px]"></span>
          <h2 className="text-[14px] font-bold">{title}</h2>
        </div>
        <p className="text-[12px] text-[#475467] pr-8">{details}</p>
      </div>
    );
  };

  return (
    <div className="flex gap-10 border-r-2 border-[#98A2B3] mr-1">
      <div className="w-full  pl-8 mr-8">
        <div className="flex flex-col gap-4 mr-4">
          <SectionDetailProgramDay
            title="برنامج الرحلة :"
            details={p.detailsStation.programTrip}
          />

          <SectionDetailProgramDay
            title="أبرز الأماكن التي سنزورها :"
            details={p.detailsStation.mostiImportantPlacesToVisit}
          />
          <SectionDetailProgramDay
            title="الإقامة :"
            details={p.detailsStation.Residence}
          />
        </div>
      </div>
    </div>
  );
};

const StationTrip = ({programDailyTrip, p, i}) => {
  const [showDetailsTrip, setShowDetailsTrip] = useState(false);
  const [nextProgramHeight, setNextProgramHeight] = useState(null);

  useEffect(() => {
    if (i < programDailyTrip.length - 1) {
      const nextProgramElement = document.getElementById(`program-${i + 1}`);

      if (nextProgramElement) {
        setNextProgramHeight(nextProgramElement.clientHeight);
      }
    }
  }, [i]);
  return (
    <div
      id={`program-${i}`}
      className="flex flex-col gap-[16px] w-full relative test"
    >
      <div
        onClick={() => setShowDetailsTrip(!showDetailsTrip)}
        className="flex justify-start items-center gap-[12px] cursor-pointer w-full"
      >
        <div className="relative h-full">
          <svg
            className={i == programDailyTrip.length - 1 ? "" : "mb-6"}
            width="12"
            height="15"
            viewBox="0 0 12 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3.10903 1.44763C4.92975 0.389721 7.16771 0.408211 8.97133 1.49607C10.7572 2.60609 11.8427 4.58714 11.8326 6.7182C11.791 8.83527 10.6271 10.8253 9.17224 12.3637C8.33254 13.2557 7.39319 14.0444 6.37338 14.7137C6.26835 14.7744 6.15331 14.8151 6.03392 14.8337C5.91901 14.8288 5.80711 14.7948 5.70831 14.7349C4.15137 13.7291 2.78546 12.4454 1.67629 10.9453C0.748172 9.69313 0.220878 8.18033 0.166016 6.61234L0.170171 6.38424C0.245951 4.33753 1.35335 2.46777 3.10903 1.44763ZM6.7554 4.86264C6.01524 4.54802 5.16188 4.71895 4.59378 5.29562C4.02567 5.87228 3.85488 6.74093 4.16115 7.49598C4.46742 8.25102 5.19033 8.74353 5.99235 8.74353C6.51777 8.74731 7.02284 8.53685 7.39502 8.15906C7.76721 7.78126 7.97558 7.26752 7.97373 6.73231C7.97653 5.91536 7.49556 5.17725 6.7554 4.86264Z"
              fill={
                i == 0
                  ? "#12B76A"
                  : i == programDailyTrip.length - 1
                  ? "#F04438"
                  : "#092F44"
              }
            />
          </svg>
          {nextProgramHeight && (
            <div
              style={{
                position: "absolute",
                top: "50%",
                left: "6px",
                width: "2px",
                backgroundColor: "#98A2B3",
                height: `${nextProgramHeight}px`,
              }}
            />
          )}
        </div>
        <div className="flex justify-between items-center bg-[#F4F7FD] rounded-[8px] py-[8px] px-[16px] w-full">
          <div className="flex justify-start items-center gap-[8px] ">
            <span className="w-[32px] h-[32px] rounded-full p-[2px] bg-[#092F44] text-white text-center">
              {i < 10 ? `0${i + 1}` : i + 1}
            </span>
            <div className="flex flex-col ">
              <h6 className="text-[#475467] text-[12px]">
                اليوم {`${p.day} : ${p.titleStation}`}
              </h6>
              <p className="text-[12px]">{p.descriptionStation}</p>
            </div>
          </div>
          <div className={showDetailsTrip ? "rotate-90" : ""}>
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13 5.5L8 10.5L3 5.5"
                stroke="black"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>
      {showDetailsTrip && <DetailsStations p={p} i={i} />}
    </div>
  );
};

const TripProgram = () => {
  return (
    <div
      id="program"
      className="flex flex-col gap-[20px] mb-[40px] md:mb-[50px]"
    >
      <div className="flex items-center gap-x-[8px]">
        <Image
          alt=""
          src="/icons/map.png"
          height={24}
          width={24}
          className="shrink-0"
        />
        <h2 className="text-[24px] sm:text-[28px] lg:text-[36px] font-bold">
          برنامج الرحلة :
        </h2>
      </div>
      <div className="flex flex-col items-start gap-[12px]">
        {programDailyTrip.map((p, i) => (
          <StationTrip
            p={p}
            i={i}
            key={i}
            programDailyTrip={programDailyTrip}
          />
        ))}
      </div>
      <PropgramTripFile />
    </div>
  );
};

export default TripProgram;
