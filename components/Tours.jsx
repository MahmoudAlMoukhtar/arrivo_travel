import React from "react";
import ToursBar from "./tours/ToursBar";
import Image from "next/image";
import useProgramFilter from "../hooks/useProgramFilter";
import {motion} from "framer-motion";

const Tour = ({tour, createPersonsArabic}) => {
  const displayedStations = tour.tripStations.slice(0, 2); // Display only the first two stations

  if (tour.tripStations.length > 2) {
    displayedStations.push("والمزيد...");
  }

  const formattedStations = displayedStations.join(" - "); // Join the stations separated by '-'
  const animateVariants = {
    hidden: {
      opacity: 0,
      translateY: -30,
    },
    show: {
      opacity: 1,
      translateY: 0,
      transition: {
        delay: 0.7,
        duration: 0.4,
      },
    },
  };
  return (
    <motion.div
      variants={animateVariants}
      initial="hidden"
      whileInView="show"
      className="min-w-[285px] sm:col-span-12 md:col-span-4 lg:col-span-3"
    >
      <div
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
              {/* <div className="flex gap-x-[4px] text-[12px] items-center text-grey">
                          <Image
                            alt=""
                            src="/icons/star.svg"
                            height={20}
                            width={20}
                          />
                          <span>{tour.rating.avg}</span>
                          <span>.</span>
                          <span>
                            <span>{tour.rating.count}</span> تقييم
                          </span>
                        </div> */}
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
      </div>
    </motion.div>
  );
};

const Tours = () => {
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

  const firstSix = filteredPrograms.slice(0, 8);

  return (
    <div className="py-[80px] ">
      <div className="flex flex-col items-center">
        <div className="wrapper">
          <div className="flex flex-col gap-y-[16px] items-center justify-center">
            <div className="flex flex-col items-center gap-[6px]">
              <p className="text-orange font-bold-500 text-[16px]">
                سيارة مع سائق
              </p>
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
        <div className="mt-8 flex overflow-x-scroll scrollbar-hide pb-3 sm:flex-none sm:grid sm:grid-cols-12 gap-[12px]">
          {firstSix.map((tour, i) => (
            <Tour
              key={i}
              tour={tour}
              createPersonsArabic={createPersonsArabic}
            />
          ))}
          {/* button all */}
        </div>
        <div className="w-full mt-4 flex">
          <button className="mr-auto py-[12px] px-[20px] rounded-[8px] bg-[#072F45] text-white flex items-center gap-x-[4px] bluish-hover text-[16px]">
            كل البرامج السياحية
            <Image
              alt=""
              src="/icons/tours/circle_arrow.svg"
              height={24}
              width={24}
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Tours;
