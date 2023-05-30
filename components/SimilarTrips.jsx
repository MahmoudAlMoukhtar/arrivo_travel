import React, {useRef, useState} from "react";
import SlickSlider from "./sub/SlickSlider";
import Image from "next/image";
import {motion} from "framer-motion";
import Link from "next/link";

const destins = [
  {
    img: "dests/5.png",
    title: "أنطاليا",
    rating: {
      avg: 5.0,
      count: 19,
    },
    description: "رحلة جميلة و رائعة إلى مدينة أنطاليا",
    price: 4170,
    persons: {from: 3, to: 8},
    hours: 10,
    offer: "العرض الإقتصادي ",
  },
  {
    img: "dests/trabzon.png",
    title: "طرابزون",
    rating: {
      avg: 5.0,
      count: 19,
    },
    description: "رحلة جميلة و رائعة إلى مدينة طرابزون",
    price: 1610,
    persons: {from: 2, to: 0},
    hours: 10,
    offer: "العرض الإقتصادي ",
  },
  {
    img: "dests/2.png",
    title: "الشمال التركي",
    rating: {
      avg: 5.0,
      count: 19,
    },
    description: "أوزنجول - إيدر - طرابزون ",
    price: 1690,
    persons: {from: 6, to: 7},
    hours: 10,
    offer: "العرض الفاخر العائلي ",
  },
  {
    img: "dests/3.png",
    title: "الشمال التركي",
    rating: {
      avg: 5.0,
      count: 19,
    },
    description: "رحلة جميلة و رائعة إلى مدينة طرابزون",
    price: 3490,
    persons: {from: 6, to: 8},
    hours: 10,
    offer: "العرض الإقتصادي ",
  },
  {
    img: "dests/4.png",
    title: "الشمال التركي",
    rating: {
      avg: 5.0,
      count: 19,
    },
    description: "رحلة جميلة و رائعة إلى مدينة طرابزون",
    price: 2270,
    persons: {from: 6, to: 8},
    hours: 10,
    offer: "العرض الإقتصادي ",
  },
];
const titleVariants = {
  hidden: {
    opacity: 0,
    y: -20,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.5,
      duration: 0.6,
    },
  },
};

const SimilarTrips = () => {
  const settings = {
    // dots: true,
    // infinite: true,
    speed: 800,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,

    // swipeToSlide: false,

    // fade: true,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "ease",

    // centerPadding: 30,

    pauseOnHover: true,
    nextArrow: <SamplePrevArrow />,
    prevArrow: <SampleNextArrow />,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          initialSlide: 0,
          // infinite: true,
          // dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          // infinite: true,
          // dots: true,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1.15,
          slidesToScroll: 1,
        },
      },
    ],
    // rtl: true,
  };

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

  return (
    <div className="py-[80px]">
      <div className="wrapper">
        <div className="flex justify-between items-center">
          <div className="flex flex-col gap-[4px]">
            <p className="text-orange font-bold-500 text-[16px]">
              شاهد خيارات اخرى
            </p>
            <h2 className=" text-[24px] sm:text-[28px] md:text-[36px] lg:[48px] font-bold-600">
              عروض مشابهة
            </h2>
          </div>
        </div>
        <div className="mt-[48px] scale-x-[-1] sm:scale-x-[1]" dir="rtl">
          <SlickSlider settings={settings}>
            {destins.map((dest, i) => (
              <Link
                href={`/travels-programs/${dest._id}`}
                key={i}
                className="mb-4 scale-x-[-1] sm:scale-x-[1]"
              >
                <div
                  dir="rtl"
                  className="relative shadow-md flex flex-col bg-white rounded-[12px] mx-[5px] lg:mx-[10px]"
                >
                  <div className="relative h-[245px] w-full">
                    <Image
                      alt=""
                      src={`/images/${dest.img}`}
                      fill
                      className="rounded-t-[12px]"
                    />
                    <div className="absolute top-[16px] right-[16px]">
                      <button className="outline-none bg-[#F08631] text-white py-[12px] px-[20px] flex items-center justify-center text-[12px] rounded-[12px]">
                        {dest.offer}
                      </button>
                    </div>
                  </div>
                  <div className="p-[16px] flex flex-col gap-[16px]">
                    {/* first part */}
                    <div className="flex flex-col gap-[8px]">
                      <div className="flex justify-between items-center">
                        <h6 className="font-bold-600 text-[16px]">
                          {dest.title}
                        </h6>
                        <div className="flex gap-x-[4px] text-[12px] items-center text-grey">
                          <Image
                            alt=""
                            src="/icons/star.svg"
                            height={20}
                            width={20}
                          />
                          <span>{dest.rating.avg}</span>
                          <span>.</span>
                          <span>
                            <span>{dest.rating.count}</span> تقييم
                          </span>
                        </div>
                      </div>
                      <p className="text-[12px] text-grey">
                        {dest.description}
                      </p>
                      <div className="flex gap-x-[4px] items-center text-[12px] text-grey">
                        <Image
                          alt=""
                          src="/icons/daily/car.svg"
                          height={20}
                          width={20}
                        />
                        رحلة خاصة
                      </div>
                    </div>
                    {/* second part */}
                    <div className="flex gap-x-[16px] items-center">
                      <p className="price font-bold-600 text-[36px]">
                        <span>$</span>
                        {dest.price}
                      </p>
                      <div className="flex flex-col gap-[2px] text-[12px] text-grey">
                        <p>{createPersonsArabic(dest.persons)}</p>
                        <div className="flex gap-x-[4px] pr-[8px]">
                          <Image
                            alt=""
                            src="/icons/daily/clock.svg"
                            height={20}
                            width={20}
                          />
                          <p className="flex gap-x-1">
                            {dest.hours}
                            <span>ساعات</span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </SlickSlider>
        </div>
      </div>
    </div>
  );
};

export default SimilarTrips;

function SampleNextArrow(props) {
  const {className, style, onClick} = props;
  // console.log(className);
  return (
    <div
      onClick={onClick}
      className="absolute top-[-50px] right-[48px] sm:left-0 z-[999] bg-white"
    >
      <div className="w-[40px] h-[40px]  cursor-pointer hover:scale-[0.95] duration-300 ease-in relative">
        <Image alt="" src="/icons/slick/arrow.png" fill />
      </div>
    </div>
  );
}

function SamplePrevArrow(props) {
  const {className, style, onClick} = props;
  return (
    <div
      className="absolute top-[-50px] right-0 sm:left-[48px] z-[999] bg-white"
      onClick={onClick}
    >
      <div className="w-[40px] h-[40px] cursor-pointer hover:scale-[0.95] duration-300 ease-in relative">
        <Image
          alt=""
          src="/icons/slick/arrow.png"
          className="rotate-[180deg]"
          fill
        />
      </div>
    </div>
  );
}
