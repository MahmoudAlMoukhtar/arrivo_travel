import Image from "next/image";
import React from "react";
import {useG} from "../context/OurContext";

import {motion} from "framer-motion";
import Link from "next/link";

const animateVariants = {
  hidden: {
    opacity: 0,
    y: -15,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.2,
      duration: 0.6,
    },
  },
};

const containerVariants = {
  hidden: {opacity: 0.8},
  show: {
    opacity: 1,
    transition: {
      delayChildren: 0.8,
      staggerChildren: 0.5,
      duration: 0.2,
    },
  },
};

const imageVariants = {
  hidden: {translateX: "-1200px"},
  show: {
    translateX: 0,
    transition: {type: "spring", stiffness: 30, duration: 0.6},
  },
};

const buttonVariants = {
  initial: {
    scale: 0.9,
    boxShadow: "0 0 0 rgba(0, 0, 0, 0.2)",
  },
  hover: {
    scale: 1,
    boxShadow: "0 6px 12px rgba(0, 0, 0, 0.2)",
    backgroundColor: "#F6882F",
    transition: {
      duration: 0.3,
      yoyo: Infinity,
      ease: "easeInOut",
    },
  },
  infinite: {
    scale: [1, 1.03, 1],
    backgroundColor: ["#F6882F", "#D45C00", "#B94700", "#F6882F"],
    transition: {
      delay: 1,
      duration: 2.5,
      repeat: Infinity,
      ease: "linear",
    },
  },
};

const Hero = () => {
  const {screenWidth} = useG();
  return (
    <div className="py-[80px]">
      <div className="wrapper">
        <div className="grid grid-cols-12 sm:grid-cols-5 gap-y-[80px] gap-x-[10px]">
          {/* klam */}
          <motion.div
            variants={animateVariants}
            initial="hidden"
            whileInView="show"
            className="col-span-12 sm:col-span-5 lg:col-span-2 flex flex-col items-center justify-center lg:items-start gap-[20px] md:max-w-[570px] md:mx-auto relative"
          >
            <div className="">
              <p className="text-[16px] font-bold-500 text-center lg:text-right text-orange ">
                إحجز رحلتك الآن
              </p>
              <h2 className="text-center lg:text-right text-[44px] md:text-[56px] font-bold-600">
                إنضم إلى الرحلة وإستمتع بجمال تركيا
              </h2>
            </div>
            <p className="text-grey text-center lg:text-right text-[16px] ">
              لتحقيق أقصى استفادة من مغامرتك ، ما عليك سوى المغادرة والذهاب إلى
              حيث تريد. نحن ننتظرك.
            </p>
            <motion.button
              variants={buttonVariants}
              initial="initial"
              whileHover="hover"
              animate="infinite"
              className="py-[12px] px-[20px] h-[48px] flex items-center justify-center  rounded-[8px] bg-orange font-bold-500 text-[16px] text-white gap-[8px]"
            >
              <span>إكتشف أحدث العروض</span>
              <Image src="/icons/go.svg" alt="arrivo" height={24} width={24} />
            </motion.button>
            {/* lawlawa */}
            <div className="absolute bottom-[-25px] md:bottom-[-32px] lg:bottom-[-36px] left-0 md:left-[10px] lg:left-[130px]">
              <div className="h-[47.35px] w-[97.3px] md:w-[165.74px] md:h-[80.66px] relative ">
                <Image
                  src={`/icons/designs/${
                    screenWidth > 768 ? "big-arr.svg" : "arr.svg"
                  }`}
                  alt="arrivo"
                  fill
                />
              </div>
            </div>
          </motion.div>
          {/* images */}
          <div className="col-span-12 sm:col-span-5 lg:col-span-3 ">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="show"
              className="grid grid-cols-12 gap-[12px]"
            >
              <motion.div
                variants={imageVariants}
                className="order-2 md:order-1 col-span-6 sm:col-span-4 h-[226px] md:h-[342px] relative"
              >
                <Link href={"/"}>
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
              </motion.div>
              <motion.div
                variants={imageVariants}
                className="order-1 md:order-2 col-span-12 sm:col-span-4 h-[175px] md:h-[342px] relative"
              >
                <Link href={"/"}>
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
              </motion.div>
              <motion.div
                variants={imageVariants}
                className="order-3 md:order-3 col-span-6 sm:col-span-4 h-[226px] md:h-[342px] relative"
              >
                <Link href={"/"}>
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
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
