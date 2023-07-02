import React from "react";
import SlickSlider from "../sub/SlickSlider";
import Image from "next/image";
import {motion} from "framer-motion";
import Link from "next/link";

const locs = [
  {img: "loc-1.png", name: "دير سوميلا"},
  {img: "loc-2.png", name: "مغار شال"},
  {img: "loc-3.png", name: "مرتفعات سلطان مراد"},
  {img: "loc-4.png", name: "قرية إيدر"},
  {img: "loc-5.png", name: "قرية هامسي كوري"},
  {img: "loc-6.png", name: "بحيرة أوزنجول"},
  {img: "loc-7.png", name: "نهر و وادي الرياح"},
  {img: "loc-8.png", name: "شلال بولفيت"},
];
const Location = ({loc}) => {
  return (
    <div
      dir="rtl"
      className="w-[183px] flex flex-col gap-[16px] bg-white rounded-[12px] scale-x-[-1]"
    >
      <Image
        alt=""
        width={183}
        height={183}
        src={`/images/locations/${loc.img}`}
        className="w-[183px] h-[183px] rounded-[12px]"
      />
      <div className=" flex flex-col gap-[12px]">
        {/* first part */}
        <div className="flex flex-col items-start gap-[8px]">
          <p className="font-bold text-[16px]">{loc.name}</p>
        </div>
      </div>
    </div>
  );
};

const TripLocationsSlider = ({isSmallScreen}) => {
  const settings = {
    // dots: true,
    // infinite: true,
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,

    //   // swipeToSlide: false,

    // fade: true,
    autoplay: true,
    autoplaySpeed: 7500,
    cssEase: "ease",

    //   // centerPadding: 30,

    pauseOnHover: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,

    responsive: [
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          initialSlide: 0,
          // infinite: true,
          // dots: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2.3,
          slidesToScroll: 1,
          initialSlide: 0,
          // infinite: true,
          // dots: true,
        },
      },
      {
        breakpoint: 860,
        settings: {
          slidesToShow: 1.8,
          slidesToScroll: 1,
          initialSlide: 0,
          // infinite: true,
          // dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3.1,
          slidesToScroll: 1,
          // infinite: true,
          // dots: true,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 2.6,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 2.1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 420,
        settings: {
          slidesToShow: 1.8,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="flex flex-col  mb-[48px]">
      <div className="flex items-center gap-x-[8px]">
        <Image
          alt=""
          src="/icons/map.png"
          height={32}
          width={32}
          className="shrink-0"
        />
        {isSmallScreen ? (
          <h2 className="text-[24px] sm:text-[28px] lg:text-[36px] font-bold">
            من أبرز الأماكن التي <br />
            ستزورها:
          </h2>
        ) : (
          <h2 className="text-[24px] sm:text-[28px] lg:text-[36px] font-bold">
            من أبرز الأماكن التي ستزورها:
          </h2>
        )}
      </div>
      <div className="mt-[24px] scale-x-[-1] relative" dir="rtl">
        <SlickSlider settings={settings}>
          {locs.map((loc, i) => (
            <Location loc={loc} key={i} />
          ))}
        </SlickSlider>
      </div>
    </div>
  );
};

export default TripLocationsSlider;

function SampleNextArrow(props) {
  const {className, style, onClick} = props;
  // console.log(className);
  return (
    <div
      onClick={onClick}
      className="absolute top-[-60px] right-0 z-[999] bg-white scale-x-[-1]"
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
      className="absolute top-[-60px] right-[48px] z-[999] bg-white scale-x-[-1]"
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
