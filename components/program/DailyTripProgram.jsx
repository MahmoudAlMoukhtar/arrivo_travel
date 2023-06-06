import Image from "next/image";
import React, {useEffect, useState} from "react";

const DetailsStations = ({p}) => {
  const SectionDetailProgramDay = ({d}) => {
    return (
      <div className="flex flex-col max-w-[697px] pb-1 bg-[#fff]">
        <div className="flex items-start gap-x-[21px] w-full">
          <span className="h-[8px] w-[8px] bg-[#1D6891] rounded-full mt-2 translate-x-[+2px]"></span>
          <h2 className="text-[14px] font-bold text-[#636973]">{d}</h2>
        </div>
      </div>
    );
  };

  return (
    <div className="flex gap-10 border-r-2 border-[#98A2B3] mr-1">
      <div className="w-full">
        <div className="flex flex-col gap-4 mr-[-2px]">
          {p.detailsStation.map((d, i) => (
            <SectionDetailProgramDay key={i} d={d} />
          ))}
        </div>
      </div>
    </div>
  );
};

const StationTrip = ({programTrip, p, i}) => {
  const [showDetailsTrip, setShowDetailsTrip] = useState(true);
  const [nextProgramHeight, setNextProgramHeight] = useState(null);

  useEffect(() => {
    if (i < programTrip.length - 1) {
      const nextProgramElement = document.getElementById(`program-${i + 1}`);

      if (nextProgramElement) {
        setNextProgramHeight(nextProgramElement.clientHeight);
      }
    }
  }, [i]);
  return (
    <div className="flex flex-col gap-[16px] w-full relative">
      <div
        id={`program-${i}`}
        onClick={() => setShowDetailsTrip(!showDetailsTrip)}
        className={`flex justify-start items-start gap-[12px]  ${
          p.detailsStation && "cursor-pointer"
        } w-full`}
      >
        <div className="relative h-full">
          <svg
            className={i == programTrip.length - 1 ? "" : "mb-6"}
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
                  : i == programTrip.length - 1
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

        <h6 className="text-[#000] text-[14px] font-bold">{p.titleStation}</h6>
      </div>
      {showDetailsTrip && p.detailsStation && <DetailsStations p={p} i={i} />}
    </div>
  );
};

const Activite = ({a, i}) => {
  return (
    <div key={i} className="flex items-center gap-[8px]">
      <div>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9 12.75L11.25 15L15 9.75M21 12C21 13.1819 20.7672 14.3522 20.3149 15.4442C19.8626 16.5361 19.1997 17.5282 18.364 18.364C17.5282 19.1997 16.5361 19.8626 15.4442 20.3149C14.3522 20.7672 13.1819 21 12 21C10.8181 21 9.64778 20.7672 8.55585 20.3149C7.46392 19.8626 6.47177 19.1997 5.63604 18.364C4.80031 17.5282 4.13738 16.5361 3.68508 15.4442C3.23279 14.3522 3 13.1819 3 12C3 9.61305 3.94821 7.32387 5.63604 5.63604C7.32387 3.94821 9.61305 3 12 3C14.3869 3 16.6761 3.94821 18.364 5.63604C20.0518 7.32387 21 9.61305 21 12Z"
            stroke="#12B76A"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <p className="text-[16px] text-[#636973]">{a}</p>
    </div>
  );
};

const DailyTripProgram = ({dailyTripProgram}) => {
  const {activities, programTrip} = dailyTripProgram;
  return (
    <div className="flex items-start justify-start gap-[44px]">
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
          <h2 className="text-[20px] font-bold">برنامج الرحلة :</h2>
        </div>
        <div className="flex flex-col items-start gap-[12px]">
          {programTrip.map((p, i) => (
            <StationTrip p={p} i={i} key={i} programTrip={programTrip} />
          ))}
        </div>
      </div>
      <div
        id="activity"
        className="flex flex-col gap-[20px] mb-[40px] md:mb-[50px]"
      >
        <div className="flex items-center gap-x-[8px]">
          <Image alt="" src="/icons/info.png" height={24} width={24} />
          <h2 className="text-[20px] font-bold">الأنشطة خلال الرحلة :</h2>
        </div>
        <div className="flex flex-col items-start gap-[12px]">
          {activities.map((a, i) => (
            <Activite a={a} i={i} key={i} programTrip={programTrip} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default DailyTripProgram;
