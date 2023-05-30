import React from "react";
import SlickSlider from "./sub/SlickSlider";
import Image from "next/image";
import ViewRatings from "./sub/ViewRating";
import RevsImgs from "./reviews/RevsImgs";

const backendHost = process.env.NEXT_PUBLIC_BACKEND_HOST;

const revs = [
  {
    rating: 5,
    title: "قمة في الذوق.",
    description:
      "أشكر شركة للسياحة على على هذه الخدمات المميزة التي قدمتها، كانت رحلة أكثر من رائعة وسأعود وأتعامل معهم مرة أخرى، قمة في الذوق.",
    img: "revs/1.png",
    name: "منى أحمد",
    country: "الكويت",
  },
  {
    rating: 3.5,
    title: "ابداع.",
    description: "رحلة جميلة و رائعة إلى مدينة أنطاليا....",
    img: "revs/2.jpg",
    name: "مشعل نصر",
    country: "تركيا",
  },
];

const Reviews = () => {
  const settings = {
    // dots: true,
    // infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,

    // swipeToSlide: false,

    // fade: true,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "ease-in-out",

    // centerPadding: 30,

    pauseOnHover: true,
    nextArrow: <SamplePrevArrow />,
    prevArrow: <SampleNextArrow />,

    rtl: true,
  };
  return (
    <div className="py-[80px] bg-[#F5F8FB]">
      <div className="wrapper">
        <div className="flex flex-col gap-[4px]">
          <p className="text-orange font-bold-500 text-[16px]">عملاء سعداء</p>
          <h2 className="text-[24px] sm:text-[48px] md:text-[36px] font-bold-600">
            غير مقتنع؟ اسمع <br className="hidden sm:block" /> من عملائنا
          </h2>
        </div>
        <div className="grid grid-cols-12 gap-[20px]">
          <div className="col-span-12 md:col-span-5 lg:col-span-5">
            <SlickSlider settings={settings}>
              {revs.map((rev, i) => (
                <div key={i} dir="rtl" className="my-[26px] cursor-grab">
                  <div className="flex flex-col gap-[40px]">
                    <div className="flex flex-col gap-[20px]">
                      <ViewRatings rating={{avg: rev.rating}} />
                      <h3 className="text-[#3E444D] font-bold-600 text-[24px] sm:text-[18px]">
                        {rev.title}
                      </h3>
                      <p className="text-[16px] text-grey h-[96px] ">
                        {rev.description}
                      </p>
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="flex gap-[16px] items-center">
                        <div className="relative h-[88px] w-[88px]">
                          <Image
                            alt=""
                            src={`/images/reviews/${rev.img}`}
                            fill
                            className="rounded-full"
                          />
                        </div>
                        <div className="flex flex-col gap-y-[4px]">
                          <h6 className="text-[16px] font-bold-600 text-[#3E444D] ">
                            {rev.name}
                          </h6>
                          <p className="text-[12px] text-grey">{rev.country}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </SlickSlider>
          </div>
          <div className="col-span-12 md:col-span-7 lg:col-span-7 md:mt-[-100px] hidden md:block">
            <RevsImgs />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;

function SampleNextArrow(props) {
  const {className, style, onClick} = props;
  // console.log(className);
  return (
    <div
      onClick={onClick}
      className="absolute bottom-[50px] sm:bottom-[83px] left-0 z-[999] bg-transparent"
    >
      <div className="w-[40px] h-[40px]  cursor-pointer hover:scale-[0.95] duration-300 ease-in bg-white relative">
        <Image alt="" src="/icons/slick/arrow.png" fill />
      </div>
    </div>
  );
}

function SamplePrevArrow(props) {
  const {className, style, onClick} = props;
  return (
    <div
      className="absolute bottom-[50px] sm:bottom-[83px] left-[48px] z-[999] bg-transparent"
      onClick={onClick}
    >
      <div className="w-[40px] h-[40px] cursor-pointer hover:scale-[0.95] duration-300 ease-in bg-white relative">
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
/* src={`/${backendHost}/images/reviews/${rev.img}`} */
