import Image from "next/image";
import React, {useEffect} from "react";
import {useG} from "../context/OurContext";

import {motion} from "framer-motion";
import Link from "next/link";
import PrevTitle from "./PrevTitle";

const Hero = () => {
  const {screenWidth} = useG();
  useEffect(() => {
    const animateCards = (cardSelector, delay) => {
      setTimeout(() => {
        const element = document.querySelector(cardSelector);
        if (element) {
          element.classList.add("animate__animated", "animate__jackInTheBox");
        }
      }, delay);
    };

    animateCards(".card1", 200);
    animateCards(".card2", 300);
    animateCards(".card3", 400);
  }, []);

  return (
    <div className="test py-[80px]">
      <div className="wrapper">
        <div className="grid grid-cols-12 sm:grid-cols-5 gap-y-[80px] gap-x-[10px]">
          {/* klam */}
          <div className="col-span-12 sm:col-span-5 lg:col-span-2 flex flex-col items-center justify-center lg:items-start gap-[20px] md:max-w-[570px] md:mx-auto relative">
            <div className="flex flex-col items-center lg:items-start">
              <PrevTitle prevTitle={"إحجز رحلتك الآن"} />
              <h2 className="text-center lg:text-right text-[44px] md:text-[56px] font-bold-600">
                إنضم إلى الرحلة وإستمتع بجمال تركيا
              </h2>
            </div>
            <p className="text-grey text-center lg:text-right text-[16px] ">
              لتحقيق أقصى استفادة من مغامرتك ، ما عليك سوى المغادرة والذهاب إلى
              حيث تريد. نحن ننتظرك.
            </p>
            <motion.button whileHover={{scale: 1.1}} whileTap={{scale: 0.9}}>
              <Link
                href={"/travels-programs?type=programs"}
                className="testButton py-[12px] px-[20px] h-[48px] flex items-center justify-center  rounded-[8px] bg-orange hover:bg-[#B94700] transtion duration-200 font-bold-500 text-[16px] text-white gap-[8px]"
              >
                <span>إكتشف أحدث العروض</span>
                <Image
                  src="/icons/go.svg"
                  alt="arrivo"
                  height={24}
                  width={24}
                />
              </Link>
            </motion.button>
            {/* lawlawa */}
            <div className="absolute bottom-[-25px] md:bottom-[-32px] lg:bottom-[-36px] left-0 md:left-[10px] lg:left-[130px] ">
              <motion.div
                initial={{rotate: +45, x: -50, y: -20}}
                whileInView={{rotate: +0, x: 0, y: 0}}
                // use a spring transition with a bounce effect
                transition={{
                  type: "spring",
                  bounce: 0.5,
                  duration: 2,
                  delay: 0.2,
                }}
                // scale up the image when hovering over it
                whileHover={{scale: 1.2}}
                className="h-[47.35px] w-[97.3px] md:w-[165.74px] md:h-[80.66px] relative "
              >
                <Image
                  src={`/icons/designs/${
                    screenWidth > 768 ? "big-arr.svg" : "arr.svg"
                  }`}
                  alt="arrivo"
                  fill
                />
              </motion.div>
            </div>
          </div>
          {/* images */}
          <div className="cards col-span-12 sm:col-span-5 lg:col-span-3">
            <div className="grid grid-cols-12 gap-[12px]">
              <div className="card1 order-2 md:order-1 col-span-6 sm:col-span-4 h-[226px] md:h-[342px] relative hover:translate-y-[-10px] transition duration-[0.5s]">
                <Link href={`/travels-programs?type=programs&country=trabzaon`}>
                  <Image
                    src="/images/hero/tabzon.png"
                    alt="trabzon"
                    fill
                    className="object-cover rounded-[12px]"
                  />
                  <div className="absolute right-[16px] bottom-[16px]">
                    <span className="text-white text-[14px] md:text-[28px] font-bold-600 ">
                      طرابزون
                    </span>
                  </div>
                </Link>
              </div>
              <div className="card2 order-1 md:order-2 col-span-12 sm:col-span-4 h-[175px] md:h-[342px] relative hover:translate-y-[-10px] transition duration-[0.5s]">
                <Link href={`/travels-programs?type=programs&country=rize`}>
                  <Image
                    src={`/images/hero/${
                      screenWidth > 768 ? "riza.png" : "riza-mob.png"
                    }`}
                    alt="riza"
                    fill
                    className="object-cover rounded-[12px]"
                  />
                  <div className="absolute right-[16px] bottom-[16px]">
                    <span className="text-white text-[14px] md:text-[28px] font-bold-600 ">
                      ريزا
                    </span>
                  </div>
                </Link>
              </div>
              <div className="card3 order-3 md:order-3 col-span-6 sm:col-span-4 h-[226px] md:h-[342px] relative hover:translate-y-[-10px] transition duration-[0.5s]">
                <Link href={`/travels-programs?type=programs&country=istanbul`}>
                  <Image
                    src="/images/hero/istab.png"
                    alt="istanbul"
                    fill
                    className="object-cover rounded-[12px]"
                  />
                  <div className="absolute right-[16px] bottom-[16px]">
                    <span className="text-white text-[14px] md:text-[28px] font-bold-600 ">
                      اسطنبول
                    </span>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
