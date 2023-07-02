import Image from "next/image";
import React from "react";

import {motion} from "framer-motion";

const opaciVariants = {
  hidden: {
    opacity: 0,
    y: 20,
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
      delayChildren: 0.2,
      staggerChildren: 0.2,
      duration: 0.2,
    },
  },
};

const serviceVariants = {
  hidden: {translateY: -20, opacity: 0},
  show: {
    translateY: 0,
    opacity: 1,
    transition: {duration: 0.4},
  },
};
const KnowUs = () => {
  return (
    <div className="bg-[#F4F7FD]">
      <div className="wrapper border-b">
        <div className="py-[80px]">
          <div className="flex flex-col gap-[48px]">
            <div className="flex flex-col md:items-center w-full">
              <p className="text-orange font-bold-500 text-[16px]">
                تعرف علينا
              </p>

              <h1 className="text-[32px] sm:text-[48px] flex flex-col md:items-center font-bold">
                من نحن
              </h1>
              <p className="text-[#475467] text-[14px] md:text-md md:text-center md:w-[540px]">
                ولأننا نسعى لراحتكم وتمتعكم برحلات فريدة نقدم لكم مجموعة من
                الخدمات المميزة بجودة عالية في رحلات غير إعتيادية لاكتشاف
                العالم.
              </p>
            </div>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="show"
              className="grid grid-cols-12 gap-x-[25px] sm:gap-x-[20px] gap-y-[32px]"
            >
              {/* one item */}
              <div className=" col-span-12 sm:col-span-6 lg:col-span-3 flex flex-col md:items-center gap-[12px] p-1 md:p-2  duration-500 rounded-md ">
                <motion.div
                  variants={serviceVariants}
                  className="animate__animated animate__zoomIn"
                >
                  <Image
                    alt=""
                    src="/icons/About us/Large/Icon-3.svg"
                    height={44}
                    width={44}
                  />
                </motion.div>
                <div className=" md:w-[285px] lg:w-auto flex flex-col md:items-center">
                  <h4 className="font-bold-600 text-[28px]">الرسالة</h4>
                  <p className="text-[14px] text-grey md:text-center">
                    ولأننا نسعى لراحتكم وتمتعكم برحلات فريدة نقدم لكم مجموعة من
                    الخدمات المميزة بجودة عالية في رحلات غير إعتيادية لاكتشاف
                    العالم.
                  </p>
                </div>
              </div>
              {/* one item */}
              <div className="col-span-12 sm:col-span-6 lg:col-span-3 flex flex-col md:items-center gap-[12px] p-1 md:p-2  duration-500 rounded-md ">
                <motion.div
                  variants={serviceVariants}
                  className="animate__animated animate__zoomIn"
                >
                  <Image
                    alt=""
                    src="/icons/About us/Large/Icon-2.svg"
                    height={44}
                    width={44}
                  />
                </motion.div>
                <div className=" md:w-[285px] lg:w-auto flex flex-col md:items-center">
                  <h4 className="font-bold-600 text-[28px]">الرؤية</h4>
                  <p className="text-[14px] text-grey md:text-center">
                    ولأننا نسعى لراحتكم وتمتعكم برحلات فريدة نقدم لكم مجموعة من
                    الخدمات المميزة بجودة عالية في رحلات غير إعتيادية لاكتشاف
                    العالم.
                  </p>
                </div>
              </div>
              {/* one item */}
              <div className="col-span-12 sm:col-span-6 lg:col-span-3 flex flex-col md:items-center gap-[12px] p-1 md:p-2  duration-500 rounded-md ">
                <motion.div
                  variants={serviceVariants}
                  className="animate__animated animate__zoomIn"
                >
                  <Image
                    alt=""
                    src="/icons/About us/Large/Icon-1.svg"
                    height={44}
                    width={44}
                  />
                </motion.div>
                <div className=" md:w-[285px] lg:w-auto flex flex-col md:items-center">
                  <h4 className="font-bold-600 text-[28px]">القيم</h4>
                  <p className="text-[14px] text-grey md:text-center">
                    ولأننا نسعى لراحتكم وتمتعكم برحلات فريدة نقدم لكم مجموعة من
                    الخدمات المميزة بجودة عالية في رحلات غير إعتيادية لاكتشاف
                    العالم.
                  </p>
                </div>
              </div>
              {/* one item */}
              <div className="col-span-12 sm:col-span-6 lg:col-span-3 flex flex-col md:items-center gap-[12px] p-1 md:p-2  duration-500 rounded-md ">
                <motion.div
                  variants={serviceVariants}
                  className="animate__animated animate__zoomIn"
                >
                  <Image
                    alt=""
                    src="/icons/About us/Large/Icon.svg"
                    height={44}
                    width={44}
                  />
                </motion.div>
                <div className=" md:w-[285px] lg:w-auto flex flex-col md:items-center">
                  <h4 className="font-bold-600 text-[28px]">الأهداف</h4>
                  <p className="text-[14px] text-grey md:text-center">
                    ولأننا نسعى لراحتكم وتمتعكم برحلات فريدة نقدم لكم مجموعة من
                    الخدمات المميزة بجودة عالية في رحلات غير إعتيادية لاكتشاف
                    العالم.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KnowUs;
/* 
motion.div
              variants={opaciVariants}
              initial="hidden"
              whileInView="show"
*/
