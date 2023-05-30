import Image from "next/image";
import Link from "next/link";
import React, {useRef, useState} from "react";

function SamplePrevArrow({className, style, onClick}) {
  return (
    <div className="z-[999] bg-white" onClick={onClick}>
      <div className="w-[30px] h-[30px] cursor-pointer hover:scale-[0.95] duration-300 ease-in relative">
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

function SampleNextArrow({className, style, onClick}) {
  // console.log(className);
  return (
    <div onClick={onClick} className=" bg-white">
      <div className="w-[30px] h-[30px]  cursor-pointer hover:scale-[0.95] duration-300 ease-in relative">
        <Image alt="" src="/icons/slick/arrow.png" fill />
      </div>
    </div>
  );
}

const Places = () => {
  const scrollRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = event => {
    setIsDragging(true);
    setStartX(event.pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = event => {
    if (!isDragging) {
      return;
    }
    event.preventDefault();
    const x = event.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 3;
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseMoveBtn = (event, direction) => {
    event.preventDefault();
    const delta = direction === "left" ? -300 : 300;
    scrollRef.current.scrollLeft += delta;
  };
  return (
    <div className="py-[80px] bg-[#F5F8FB] ">
      <div className="wrapper">
        <div className="flex flex-col lg:flex-row lg:items-center gap-[20px]">
          <div className="flex flex-col sm:flex-row lg:flex-col items-start md:items-center gap-[20px] lg:max-w-[387px]">
            <div className="relative sm:w-fit">
              <p className="text-orange font-bold-500 text-[16px] ">
                تصفح حسب الوجهة
              </p>
              <h2 className="font-bold-600 text-[32px]  md:text-[48px]">
                وجهات سياحية مميزة جدا
              </h2>
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-grey text-[16px]">
                أكثر الأماكن المميزة والخلابة في الشمال التركي مع{" "}
                <span className="font-bold-600 text-orange">
                  إطلالات طبيعية ساحرة
                </span>{" "}
                تخطف الألباب.
              </p>
              <div className="flex items-center justify-cneter">
                <SamplePrevArrow
                  onClick={event => handleMouseMoveBtn(event, "right")}
                />
                <SampleNextArrow
                  onClick={event => handleMouseMoveBtn(event, "left")}
                />
              </div>
            </div>
          </div>
          {/* actuall places here */}
          <div
            ref={scrollRef}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
            className="overflow-x-scroll scroll-smooth py-[10px] scrollbar-hide"
          >
            <div className="min-w-fit flex flex-row gap-x-[20px]">
              <Link
                href={"/"}
                className="rounded-[20px] p-[16px] bg-white shadow-md"
              >
                <div className="h-[368px] w-[311px] sm:h-[468px] sm:w-[387px] relative">
                  <Image alt="" src="/images/places/tra.png" fill />
                  <div className="absolute bottom-[20px] md:bottom-[64px] w-full text-center font-bold-600 text-[14px] md:text-[28px] text-white">
                    TRABZON
                  </div>
                </div>
              </Link>
              <Link
                href={"/"}
                className="rounded-[20px] p-[16px] bg-white shadow-md"
              >
                <div className="h-[368px] w-[311px] sm:h-[468px] sm:w-[387px] relative">
                  <Image alt="" src="/images/places/istanbu.png" fill />
                  <div className="absolute bottom-[20px] md:bottom-[64px] font-bold-600 text-[14px] md:text-[28px] w-full text-center text-white">
                    ISTANBUL
                  </div>
                </div>
              </Link>
              <Link
                href={"/"}
                className="rounded-[20px] p-[16px] bg-white shadow-md"
              >
                <div className="h-[368px] w-[311px] sm:h-[468px] sm:w-[387px] relative">
                  <Image alt="" src="/images/places/cloud.png" fill />
                  <div className="absolute bottom-[20px] md:bottom-[64px] w-full text-center font-bold-600 text-[14px] md:text-[28px] text-white">
                    PLACE
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Places;
