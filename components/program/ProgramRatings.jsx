import React from "react";
import SlickSlider from "../sub/SlickSlider";
import Image from "next/image";
import {motion} from "framer-motion";
import Link from "next/link";
import ViewRatings from "../sub/ViewRating";

const revs = [
  {
    rating: 5,
    title: "قمة في الذوق.",
    description:
      "أشكر شركة للسياحة على على هذه الخدمات المميزة التي قدمتها، كانت رحلة أكثر من رائعة وسأعود وأتعامل معهم مرة أخرى، قمة في الذوق.",
    img: "revs/1.png",
    name: "منى أحمد",
    country: "الكويت",
    createdAt: "10 سبتمبر 2022",
  },
  {
    rating: 3.5,
    title: "ابداع.",
    description: "رحلة جميلة و رائعة إلى مدينة أنطاليا....",
    img: "revs/2.jpg",
    name: "مشعل نصر",
    country: "تركيا",
    createdAt: "10 سبتمبر 2022",
  },
  {
    rating: 3.5,
    title: "ابداع.",
    description: "رحلة جميلة و رائعة إلى مدينة أنطاليا....",
    img: "revs/2.jpg",
    name: "مشعل نصر",
    country: "تركيا",
    createdAt: "10 سبتمبر 2022",
  },
  {
    rating: 3.5,
    title: "ابداع.",
    description: "رحلة جميلة و رائعة إلى مدينة أنطاليا....",
    img: "revs/2.jpg",
    name: "مشعل نصر",
    country: "تركيا",
    createdAt: "10 سبتمبر 2022",
  },
];

const PersonReview = ({rev}) => {
  return (
    <div
      dir="rtl"
      className="cursor-grab w-[334px] h-[272px] bg-[#F4F7FD] p-[24px] scale-x-[-1]   mx-[5px] lg:mx-[10px] rounded-[16px]"
    >
      <div className="flex flex-col gap-[16px]">
        <div className="flex flex-col gap-[8px]">
          <div className="flex justify-between items-start">
            <div className="flex flex-col gap-[8px] w-full">
              <h3 className="text-[#3E444D] font-bold-600 text-[16px]">
                {`"${rev.title}"`}
              </h3>
              <ViewRatings rating={{avg: rev.rating}} w={14} h={13} />
            </div>
            <p className="text-[12px] text-[#475467] w-full text-end">
              {rev.createdAt}
            </p>
          </div>
          <p className="text-[14px] text-grey h-[96px] ">{rev.description}</p>
        </div>
        <div className="flex justify-between items-center">
          <div className="flex gap-[16px] items-center">
            <div className="relative h-[56px] w-[56px]">
              <Image
                alt=""
                src={`/images/reviews/${rev.img}`}
                fill
                className="rounded-full"
              />
            </div>
            <div className="flex flex-col gap-y-[8px]">
              <h6 className="text-[16px] font-bold-600">{rev.name}</h6>
              <p className="text-[12px] text-grey">{rev.country}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ProgramRatings = () => {
  const settings = {
    // dots: true,
    // infinite: true,
    speed: 800,
    slidesToShow: 2.5,
    slidesToScroll: 1,
    initialSlide: 0,

    // swipeToSlide: false,

    //fade: true,
    autoplay: true,
    autoplaySpeed: 7500,
    cssEase: "ease",

    // centerPadding: 30,

    pauseOnHover: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,

    responsive: [
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 1.7,
          slidesToScroll: 1,
          initialSlide: 0,
          // infinite: true,
          // dots: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1.6,
          slidesToScroll: 1,
          // infinite: true,
          // dots: true,
        },
      },
      {
        breakpoint: 955,
        settings: {
          slidesToShow: 1.3,
          slidesToScroll: 1,
          // infinite: true,
          // dots: true,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 1.1,
          slidesToScroll: 1,
          // infinite: true,
          // dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1.9,
          slidesToScroll: 1,
          // infinite: true,
          // dots: true,
        },
      },

      {
        breakpoint: 690,
        settings: {
          slidesToShow: 1.7,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 610,
        settings: {
          slidesToShow: 1.5,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 550,
        settings: {
          slidesToShow: 1.3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1.2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    rtl: true,
  };

  return (
    <div id="ratings" className="py-[80px]">
      <div className="flex items-center gap-x-[8px]">
        <svg
          width="32"
          height="32"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9 12.75L11.25 15L15 9.75M21 12C21 13.1819 20.7672 14.3522 20.3149 15.4442C19.8626 16.5361 19.1997 17.5282 18.364 18.364C17.5282 19.1997 16.5361 19.8626 15.4442 20.3149C14.3522 20.7672 13.1819 21 12 21C10.8181 21 9.64778 20.7672 8.55585 20.3149C7.46392 19.8626 6.47177 19.1997 5.63604 18.364C4.80031 17.5282 4.13738 16.5361 3.68508 15.4442C3.23279 14.3522 3 13.1819 3 12C3 9.61305 3.94821 7.32387 5.63604 5.63604C7.32387 3.94821 9.61305 3 12 3C14.3869 3 16.6761 3.94821 18.364 5.63604C20.0518 7.32387 21 9.61305 21 12Z"
            stroke="#000"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <h2 className="text-[24px] sm:text-[28px] lg:text-[36px] font-bold">
          تقييمات العملاء:
        </h2>
      </div>
      <div className="mt-[24px] scale-x-[-1] relative" dir="rtl">
        <SlickSlider settings={settings}>
          {revs.map((rev, i) => (
            <PersonReview rev={rev} key={i} />
          ))}
        </SlickSlider>
      </div>
    </div>
  );
};

export default ProgramRatings;

function SampleNextArrow(props) {
  const {className, style, onClick} = props;
  // console.log(className);
  return (
    <div
      onClick={onClick}
      className="absolute top-[-60px] scale-x-[-1] right-0 z-[999] bg-white"
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
      className="absolute top-[-60px] scale-x-[-1] right-[48px] z-[999] bg-white"
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
