import React, {useEffect, useState} from "react";
import ToursBar from "./tours/ToursBar";
import Image from "next/image";
import useProgramFilter from "../hooks/useProgramFilter";
import {motion} from "framer-motion";
import Link from "next/link";
import PrevTitle from "./PrevTitle";

const Tour = ({tour, createPersonsArabic}) => {
  const displayedStations = tour.tripStations.slice(0, 2); // Display only the first two stations

  if (tour.tripStations.length > 2) {
    displayedStations.push("والمزيد...");
  }

  const formattedStations = displayedStations.join(" - "); // Join the stations separated by '-'

  return (
    <div className="min-w-[285px] sm:col-span-6 md:col-span-4 xl:col-span-3">
      <Link
        href={`/travels-programs/${tour._id}`}
        dir="rtl"
        className="relative shadow-md flex flex-col bg-white rounded-[12px]"
      >
        <div className="relative h-[245px] w-full">
          <Image
            alt=""
            src={`/images/${tour.img}`}
            fill
            className="rounded-t-[12px]"
          />
          <div className="absolute top-[16px] right-[16px]">
            <button className="outline-none bg-[#A05921] text-white py-[12px] px-[20px] flex items-center justify-center text-[12px] rounded-[12px]">
              {tour.offer}
            </button>
          </div>
        </div>
        <div className="p-[16px] flex flex-col gap-[16px]">
          {/* first part */}
          <div className="flex flex-col gap-[8px]">
            <div className="flex justify-between items-center">
              <h6 className="font-bold-600 text-[16px]">{tour.title}</h6>
            </div>
            <p className="text-[12px] text-grey">{formattedStations}</p>
            <div className="flex gap-x-[4px] items-center text-[12px] text-grey">
              <Image alt="" src="/icons/daily/car.svg" height={20} width={20} />
              رحلة خاصة
            </div>
          </div>
          {/* second part */}
          <div className="flex gap-x-[16px] items-center">
            <p className="price font-bold-600 text-[36px]">
              <span>$</span>
              {tour.price}
            </p>
            <div className="flex flex-col gap-[2px] text-[12px] text-grey">
              <p>{createPersonsArabic(tour.persons)}</p>
              <div className="flex gap-x-[4px] pr-[8px]">
                <Image
                  alt=""
                  src="/icons/daily/clock.svg"
                  height={20}
                  width={20}
                />
                <p className="flex gap-x-1">
                  {tour.hours}
                  <span>ساعات</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

const Tours = () => {
  const [arrowWhite, setArrowWhite] = useState(false);

  const {filteredPrograms, country, setCountry} = useProgramFilter("istanbul");

  const createPersonsArabic = persons => {
    const {from, to} = persons;
    let toReturn = "";

    //handle lower limit
    if (from == 1) {
      toReturn += "شخص";
    } else if (from == 2) {
      toReturn += "شخصين";
    } else {
      toReturn += `${from} ${to == 0 ? "أشخاص" : ""}`;
    }

    // handle upper limit
    if (to == 0) {
      toReturn += `${from == 1 ? "واحد" : ""}`;
    } else {
      toReturn += ` - ${to} أشخاص`;
    }

    return toReturn;
  };
  const animateVariants = {
    hidden: {
      opacity: 0,
      translateY: -30,
    },
    show: {
      opacity: 1,
      translateY: 0,
      transition: {
        delay: 0.4,
        duration: 0.4,
      },
    },
  };
  useEffect(() => {}, [setCountry, filteredPrograms]);
  const firstSix = filteredPrograms.slice(0, 8);

  return (
    <div className="py-[80px] ">
      <div className="flex flex-col items-center">
        <div className="wrapper">
          <div className="flex flex-col gap-y-[16px] items-center justify-center">
            <div className="flex flex-col items-center gap-[6px]">
              <PrevTitle prevTitle={"سيارة مع سائق"} />
              <h2 className="text-[28px] md:text-[36px] font-bold-600">
                الرحلات السياحية
              </h2>
            </div>
            <p className="md:max-w-[519px] text-[16px] text-grey text-center">
              تجربة سياحية مميزة مع سائق خاص لتذهب إلى الأماكن السياحية الرائعة
              بكل راحة وأمان. احجز رحلتك الآن واستمتع بتجربة فريدة من نوعها.
            </p>
          </div>
        </div>
        <ToursBar setCountry={setCountry} />
      </div>
      {/* actual tours */}
      <div className="wrapper">
        <motion.div
          key={country}
          variants={animateVariants}
          initial="hidden"
          animate="show"
          transition={{duration: 0.5}}
          className="mt-8 flex overflow-x-scroll scrollbar-hide pb-3 sm:flex-none sm:grid sm:grid-cols-12 gap-[12px]"
        >
          {firstSix.map((tour, i) => (
            <Tour
              key={i}
              tour={tour}
              createPersonsArabic={createPersonsArabic}
            />
          ))}
        </motion.div>
        <Link
          href={"/travels-programs?type=programs"}
          className="w-full mt-4 flex items-center justify-center"
        >
          <button
            onMouseOver={() => setArrowWhite(true)}
            onMouseOut={() => setArrowWhite(false)}
            className="py-[12px] px-[20px] rounded-[8px] border-[1px] hover:bg-[#F08631] hover:text-white border-[#F08631] text-[#F08631] flex items-center gap-x-[4px]  text-[16px] transtion duration-200"
          >
            كل البرامج السياحية
            <svg
              width="25"
              height="24"
              viewBox="0 0 25 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M12.5 2.75024C5.563 2.75024 3.25 5.06324 3.25 12.0002C3.25 18.9372 5.563 21.2502 12.5 21.2502C19.437 21.2502 21.75 18.9372 21.75 12.0002C21.75 5.06324 19.437 2.75024 12.5 2.75024Z"
                stroke={arrowWhite ? "#fff" : "#F6882F"}
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M13.9414 8.52856C13.9414 8.52856 10.4554 10.9206 10.4554 12.0006C10.4554 13.0806 13.9414 15.4706 13.9414 15.4706"
                stroke={arrowWhite ? "#fff" : "#F6882F"}
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Tours;
