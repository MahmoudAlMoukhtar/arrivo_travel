import React from "react";
import SlickSlider from "../sub/SlickSlider";
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
    days: 7,
    night: 6,
    offer: "العرض الإقتصادي ",
    type: "رحلة خاصة",
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
    days: 7,
    night: 6,
    offer: "العرض الإقتصادي ",
    type: "رحلة خاصة",
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
    days: 7,
    night: 6,
    offer: "العرض الفاخر العائلي ",
    type: "رحلة خاصة",
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
    days: 7,
    night: 6,
    offer: "العرض الإقتصادي ",
    type: "رحلة خاصة",
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
    days: 7,
    night: 6,
    offer: "العرض الإقتصادي ",
    type: "رحلة خاصة",
  },
];

const HotelTripStay = ({dest}) => {
  return (
    <div
      dir="rtl"
      className="w-[252px] md:w-[387px] flex flex-col gap-[16px] bg-white rounded-[12px] scale-x-[-1]"
    >
      <Image
        alt=""
        width={387}
        height={384}
        src={`/images/${dest.img}`}
        className="w-[252px] h-[240px] md:w-[387px] md:h-[384px] rounded-[12px]"
      />
      <div className=" flex flex-col gap-[12px]">
        {/* first part */}
        <div className="flex flex-col items-start gap-[8px]">
          <div className="flex gap-x-[4px] text-[12px] items-center">
            <h6 className="text-[#475467] text-[16px]">موقع الإقامة:</h6>
            <p className="font-bold text-[16px]">أوزنجول</p>
          </div>
          <div className="flex gap-x-[4px] text-[12px] items-center">
            <h6 className="text-[#475467] text-[16px]">الفندق:</h6>
            <p className="font-bold text-[16px]">Kilpa Hotel</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const ProgramStay = () => {
  const settings = {
    // dots: true,
    // infinite: true,
    speed: 800,
    slidesToShow: 2,
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
          slidesToShow: 1.5,
          slidesToScroll: 1,
          initialSlide: 0,
          // infinite: true,
          // dots: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1.2,
          slidesToScroll: 1,
          initialSlide: 0,
          // infinite: true,
          // dots: true,
        },
      },
      {
        breakpoint: 950,
        settings: {
          slidesToShow: 1.1,
          slidesToScroll: 1,
          initialSlide: 0,
          // infinite: true,
          // dots: true,
        },
      },
      {
        breakpoint: 860,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 0,
          // infinite: true,
          // dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2.25,
          slidesToScroll: 1,
          // infinite: true,
          // dots: true,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1.9,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1.5,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 420,
        settings: {
          slidesToShow: 1.3,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div id="stay" className="">
      <div className="flex items-center gap-x-[8px]">
        <Image
          alt=""
          src="/icons/program/FrameHotel.svg"
          height={32}
          width={32}
          className="shrink-0"
        />
        <h2 className="text-[24px] sm:text-[28px] lg:text-[36px] font-bold">
          أماكن الإقامة:
        </h2>
      </div>
      <div className="mt-[24px] scale-x-[-1] relative" dir="rtl">
        <SlickSlider settings={settings}>
          {destins.map((dest, i) => (
            <HotelTripStay dest={dest} key={i} />
          ))}
        </SlickSlider>
      </div>
    </div>
  );
};

export default ProgramStay;

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
