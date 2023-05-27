import Image from "next/image";
import React from "react";

import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0.8 },
  show: {
    opacity: 1,
    transition: {
      delayChildren: 0.4,
      staggerChildren: 0.5,
      duration: 0.2,
    },
  },
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0, translateX: "-100px" },
  show: {
    opacity: 1,
    scale: 1,
    translateX: 0,
    transition: { duration: 0.5 },
  },
  onHover: {
    scale: 1.08,
    zIndex: 99,
    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
    transition: { duration: 0.6 },
  },
};

const RevsImgs = () => {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      className="flex flex-col items-center justify-center gap-[10px]"
    >
      <div className="flex items-end justify-center flex-wrap gap-[10px] ">
        <motion.div
          variants={imageVariants}
          initial="hidden"
          whileInView="show"
          whileHover="onHover"
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
          variants={imageVariants}
          initial="hidden"
          whileInView="show"
          whileHover="onHover"
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
          variants={imageVariants}
          initial="hidden"
          whileInView="show"
          whileHover="onHover"
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
          variants={imageVariants}
          initial="hidden"
          whileInView="show"
          whileHover="onHover"
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
          variants={imageVariants}
          initial="hidden"
          whileInView="show"
          whileHover="onHover"
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
    </motion.div>
  );
};

export default RevsImgs;
