import Image from "next/image";
import Link from "next/link";
import {useEffect} from "react";
import {motion} from "framer-motion";
import PrevTitle from "./PrevTitle";
const Service = ({
  service,
  children,
  reverse,
  preTitle,
  title,
  description,
  imageSrc,
  url,
}) => {
  useEffect(() => {
    setTimeout(() => {
      const element = document.querySelector(".service_image");
      if (element) {
        element.classList.add("animate__animated", "animate__bounceOutLeft");
      }
    }, 500);
  });
  const variants = {
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 20,
        duration: 0.5,
      },
    },
    hidden: {
      opacity: 0,
      scale: 0.5,
    },
  };
  return (
    <div
      className={`flex items-center justify-between flex-col-reverse  ${
        reverse ? "lg:flex-row-reverse" : "lg:flex-row"
      }`}
    >
      <div className="flex flex-col items-start  gap-[24px]">
        <div className="flex flex-col gap-[4px]">
          <PrevTitle prevTitle={preTitle} />
          <h2 className=" text-[24px] sm:text-[28px] md:text-[36px]  font-bold-600">
            {title}
          </h2>
        </div>
        <div className="flex flex-col gap-4 lg:w-[590px]">
          <p className="text-[#475467]">{description}</p>
          {children}
          {
            <Link
              href={`${url}`}
              className="bg-[#F08631] w-full md:w-[154px] py-[14px] px-[20px] text-white rounded-[8px] text-center"
            >
              تصفح الحجوزات
            </Link>
          }
        </div>
      </div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={variants}
        className="animate__zoomIn"
      >
        <Image
          alt=""
          width={590}
          height={590}
          className="w-[400px] lg:w-[590px] hidden sm:block"
          src={imageSrc}
        />
      </motion.div>
    </div>
  );
};

export default Service;
