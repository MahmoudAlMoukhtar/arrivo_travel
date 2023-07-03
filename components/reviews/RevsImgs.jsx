import Image from "next/image";
import React from "react";
import {motion} from "framer-motion";

const RevsImgs = () => {
  const animateVariants = {
    hidden: {translateY: -20, opacity: 0},
    show: {
      translateY: 0,
      opacity: 1,
      transition: {duration: 0.7, delay: 0.2},
    },
  };
  return (
    <div className="flex flex-col items-center justify-center gap-[10px]">
      <div className="flex items-end justify-center flex-wrap gap-[10px] ">
        <motion.div
          variants={animateVariants}
          initial="hidden"
          whileInView="show"
          whileHover={{x: +20, y: -20}}
          className="relative w-[130.99px] h-[118.85px] md:h-[112.45px] md:w-[123.94px] lg:h-[184.4px] lg:w-[203.24px]"
        >
          <Image
            alt=""
            src="/images/reviews/aya.png"
            className="object-cover rounded-[12px] "
            fill
          />
        </motion.div>
        <motion.div
          variants={animateVariants}
          initial="hidden"
          whileInView={{
            translateY: 0,
            opacity: 1,
            transition: {duration: 1, delay: 0.3},
          }}
          whileHover={{x: -20, y: -20}}
          className="relative w-[141.85px] h-[183.38px] md:h-[173.52px] md:w-[134.22px] lg:h-[284.53px] lg:w-[220.09px]"
        >
          <Image
            alt=""
            src="/images/reviews/car.png"
            className="object-cover rounded-[12px] "
            fill
          />
        </motion.div>
      </div>
      <div className="flex items-start justify-center flex-wrap gap-[10px] ">
        <motion.div
          variants={animateVariants}
          initial="hidden"
          whileInView={{
            translateY: 0,
            opacity: 1,
            transition: {duration: 1, delay: 0.4},
          }}
          whileHover={{x: +20, y: +10}}
          className="relative w-[90px] h-[98px] md:h-[92.5px] md:w-[134.22px] lg:h-[151.68px] lg:w-[220.09px]"
        >
          <Image
            alt=""
            src="/images/reviews/date.png"
            className="object-cover rounded-[12px]"
            fill
          />
        </motion.div>
        <motion.div
          variants={animateVariants}
          initial={{translateY: +20, opacity: 0}}
          whileInView={{
            translateY: 0,
            opacity: 1,
            transition: {duration: 1, delay: 0.5},
          }}
          whileHover={{x: +5, y: +20}}
          className="relative w-[141.85px] h-[183.38px] md:h-[173.52px] md:w-[134.22px] lg:h-[284.53px] lg:w-[220.09px]"
        >
          <Image
            alt=""
            src="/images/reviews/trab.png"
            className="object-cover rounded-[12px]"
            fill
          />
        </motion.div>
        <motion.div
          variants={animateVariants}
          initial={{x: +20, opacity: 0}}
          whileInView={{
            x: 0,
            opacity: 1,
            transition: {duration: 1, delay: 0.6},
          }}
          whileHover={{x: -10, y: -20}}
          className="relative w-[90px] h-[98px] md:h-[92.5px] md:w-[134.22px] lg:h-[151.68px] lg:w-[220.09px]"
        >
          <Image
            alt=""
            src="/images/reviews/sat.png"
            className="object-cover rounded-[12px]"
            fill
          />
        </motion.div>
      </div>
    </div>
  );
};

export default RevsImgs;
