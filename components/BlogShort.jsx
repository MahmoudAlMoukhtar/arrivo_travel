import Image from "next/image";
import React, {useState} from "react";
import SlickSlider from "./sub/SlickSlider";
import {motion} from "framer-motion";

const posts = [
  {
    img: "/1.png",
    title: "دير سوميلا، اكتشف أكثر الأماكن إثارة للدهشة في طرابزون",
    description:
      "ولأننا نسعى لراحتكم وتمتعكم برحلات فريدة نقدم لكم مجموعة من حجوزات الإقامة المنتوعة بلإضل الأماكن والأسعار بأجمل الأماكن الساحية. ",
    author: "أشرف ماهر",
    createdAt: 1683999494,
  },
  {
    img: "/2.png",
    title: "دير سوميلا، اكتشف أكثر الأماكن إثارة للدهشة في طرابزون",
    description:
      "ولأننا نسعى لراحتكم وتمتعكم برحلات فريدة نقدم لكم مجموعة من حجوزات الإقامة المنتوعة بلإضل الأماكن والأسعار بأجمل الأماكن الساحية. ",
    author: "أشرف ماهر",
    createdAt: 1683999494,
  },
  {
    img: "/3.png",
    title: "دير سوميلا، اكتشف أكثر الأماكن إثارة للدهشة في طرابزون",
    description:
      "ولأننا نسعى لراحتكم وتمتعكم برحلات فريدة نقدم لكم مجموعة من حجوزات الإقامة المنتوعة بلإضل الأماكن والأسعار بأجمل الأماكن الساحية. ",
    author: "أشرف ماهر",
    createdAt: 1683999494,
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
      delay: 0.2,
      duration: 0.6,
    },
  },
};

const animateVariants = {
  hidden: {
    opacity: 0,
    translateY: -30,
  },
  show: {
    opacity: 1,
    translateY: 0,
    transition: {
      delay: 0.7,
      duration: 0.8,
    },
  },
};

const Blog = ({post}) => {
  const [arrowWhite, setArrowWhite] = useState(false);
  return (
    <div className="mb-4 ">
      <div
        dir="rtl"
        className="relative border shadow-md flex flex-col gap-[20px] bg-white rounded-[12px] mx-[5px] p-[16px]"
      >
        <div className="relative h-[276px] w-full">
          <Image
            alt=""
            src={`/images/blog${post.img}`}
            fill
            className="rounded-t-[12px]"
          />
        </div>
        <div className="flex flex-col gap-[12px]">
          <h6 className="font-bold-600 text-[18px]">{post.title}</h6>
          <p className="text-[12px] text-grey">
            <span className="">{post.author}.</span> قبل{" "}
            <span className="">12</span> ساعة.
          </p>
          <p className="text-[14px] text-grey">{post.description}</p>
        </div>
        <button
          onMouseOver={() => setArrowWhite(true)}
          onMouseOut={() => setArrowWhite(false)}
          className="flex items-center gap-x-[4px] py-[8px] px-[20px] border border-orange w-fit rounded-[8px] border-solid text-orange hover:bg-[#F08631] hover:text-white transtion duration-200"
        >
          أكمل القراءة
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11.25 9L8.25 12M8.25 12L11.25 15M8.25 12H15.75M21 12C21 13.1819 20.7672 14.3522 20.3149 15.4442C19.8626 16.5361 19.1997 17.5282 18.364 18.364C17.5282 19.1997 16.5361 19.8626 15.4442 20.3149C14.3522 20.7672 13.1819 21 12 21C10.8181 21 9.64778 20.7672 8.55585 20.3149C7.46392 19.8626 6.47177 19.1997 5.63604 18.364C4.80031 17.5282 4.13738 16.5361 3.68508 15.4442C3.23279 14.3522 3 13.1819 3 12C3 9.61305 3.94821 7.32387 5.63604 5.63604C7.32387 3.94821 9.61305 3 12 3C14.3869 3 16.6761 3.94821 18.364 5.63604C20.0518 7.32387 21 9.61305 21 12Z"
              stroke={arrowWhite ? "#fff" : "#F6882F"}
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

const BlogShort = () => {
  const settings = {
    // dots: true,
    // infinite: true,
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,

    // swipeToSlide: false,

    // fade: true,
    autoplay: true,
    autoplaySpeed: 7500,
    cssEase: "linear",

    // centerPadding: 30,

    pauseOnHover: true,
    nextArrow: <SamplePrevArrow />,
    prevArrow: <SampleNextArrow />,

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
          slidesToShow: 2,
          slidesToScroll: 1,
          // infinite: true,
          // dots: true,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    rtl: true,
  };
  return (
    <div className="py-[80px] bg-[#F5F8FB]">
      <div className="wrapper">
        <div className="flex flex-col gap-y-[16px] lg:items-center lg:justify-center">
          <div className="flex flex-col lg:items-center gap-[6px]">
            <p className="text-orange font-bold-500 text-[16px]">المقالات</p>
            <h2 className="text-[28px] md:text-[36px] font-bold-600">
              أبرز المقالات
            </h2>
          </div>
        </div>
        <div className="mt-[48px]" dir="rtl">
          <SlickSlider settings={settings}>
            {posts.reverse().map((post, i) => (
              <Blog post={post} key={i} />
            ))}
          </SlickSlider>
        </div>
      </div>
    </div>
  );
};

export default BlogShort;

function SampleNextArrow(props) {
  const {className, style, onClick} = props;
  // console.log(className);
  return (
    <div
      onClick={onClick}
      className="absolute top-[-100px] left-0 z-[999] bg-white"
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
      className="absolute top-[-100px] left-[48px] z-[999] bg-white"
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
/* 
motion.h2
              variants={titleVariants}
              initial="hidden"
              whileInView="show"
*/
/* 
motion.div
          variants={animateVariants}
          initial="hidden"
          whileInView="show"
*/
