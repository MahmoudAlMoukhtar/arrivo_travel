import Image from "next/image";
import React, {useEffect, useState} from "react";
import SlickSlider from "../sub/SlickSlider";
import Link from "next/link";

const backendHost = process.env.NEXT_PUBLIC_BACKEND_HOST;

const imgs = [
  "pro-1.png",
  "pro-2.png",
  "pro-3.png",
  "pro-4.png",
  "pro-5.png",
  "GalleryOzngol.jpg",
];

const ProgramPics = ({isProgramTravel}) => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [midScreen, setIsMidScreen] = useState(false);

  useEffect(() => {
    // Check screen size on mount and whenever it changes
    function handleResize() {
      setIsSmallScreen(window.innerWidth < 640); // Set breakpoint as per your requirement
      setIsMidScreen(window.innerWidth < 1024); // Set breakpoint as per your requirement
    }
    window.addEventListener("resize", handleResize);
    handleResize(); // Call the function initially as well
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const settings = {
    // dots: true,
    // infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,

    // swipeToSlide: false,

    //fade: true,
    autoplay: true,
    autoplaySpeed: 7500,
    cssEase: "ease",

    // centerPadding: 30,

    pauseOnHover: true,

    rtl: true,
  };
  return (
    <div className="py-[10px] md:py-[20px]">
      <div className="bigbox relative">
        {!isProgramTravel ? (
          <div className="grid grid-cols-12 grid-rows-4 gap-4 md:h-[476px]">
            <div className="col-span-12 md:col-span-12 row-span-4 h-[520px] sm:h-[476px] md:h-auto relative">
              <Image
                src={`/images/programs/${imgs[5]}`}
                alt=""
                className="object-cover rounded-[12px] hover:opacity-[0.9]"
                fill
              />
            </div>
          </div>
        ) : isSmallScreen ? (
          <div className="w-full relative">
            <SlickSlider settings={settings}>
              <div className="col-span-12 h-[520px] sm:h-[300px] md:h-auto relative w-full">
                <Image
                  src={`/images/programs/${imgs[0]}`}
                  alt=""
                  className="object-cover rounded-[12px] hover:opacity-[0.9]"
                  fill
                />
              </div>
              <div className="col-span-12 h-[520px] sm:h-[300px] md:h-auto relative w-full">
                <Image
                  src={`/images/programs/${imgs[1]}`}
                  alt=""
                  className="object-cover rounded-[12px] hover:opacity-[0.9]"
                  fill
                />
              </div>
              <div className="col-span-12 h-[520px] sm:h-[300px] md:h-auto relative w-full">
                <Image
                  src={`/images/programs/${imgs[2]}`}
                  alt=""
                  className="object-cover rounded-[12px] hover:opacity-[0.9]"
                  fill
                />
              </div>
              <div className="col-span-12 h-[520px] sm:h-[300px] md:h-auto relative w-full">
                <Image
                  src={`/images/programs/${imgs[3]}`}
                  alt=""
                  className="object-cover rounded-[12px] hover:opacity-[0.9]"
                  fill
                />
              </div>
            </SlickSlider>
          </div>
        ) : midScreen ? (
          <div className="grid grid-cols-12 grid-rows-2 gap-4 lg:h-[476px]">
            <div className="col-span-12 lg:col-span-6 row-span-4 h-[389px] lg:h-auto relative">
              <Image
                src={`/images/programs/${imgs[0]}`}
                alt=""
                className="object-cover rounded-[12px] hover:opacity-[0.9]"
                fill
              />
            </div>
            <div className="col-span-6 lg:col-span-3 h-[300px] lg:h-auto relative">
              <Image
                src={`/images/programs/${imgs[1]}`}
                alt=""
                className="object-cover rounded-[12px] hover:opacity-[0.9]"
                fill
              />
            </div>
            <div className="col-span-6 lg:col-span-3 h-[300px] lg:h-auto relative">
              <Image
                src={`/images/programs/${imgs[2]}`}
                alt=""
                className="object-cover rounded-[12px] hover:opacity-[0.9]"
                fill
              />
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-12 grid-rows-2 gap-4 md:h-[476px]">
            <div className="col-span-12 md:col-span-6 row-span-2 h-[300px] md:h-auto relative">
              <Image
                src={`/images/programs/${imgs[0]}`}
                alt=""
                className="object-cover rounded-[12px] hover:opacity-[0.9]"
                fill
              />
            </div>
            <div className="col-span-12 md:col-span-3 h-[300px] md:h-auto relative">
              <Image
                src={`/images/programs/${imgs[1]}`}
                alt=""
                className="object-cover rounded-[12px] hover:opacity-[0.9]"
                fill
              />
            </div>
            <div className="col-span-12 md:col-span-3 h-[300px] md:h-auto relative">
              <Image
                src={`/images/programs/${imgs[2]}`}
                alt=""
                className="object-cover rounded-[12px] hover:opacity-[0.9]"
                fill
              />
            </div>
            <div className="col-span-12 md:col-span-3 h-[300px] md:h-auto relative">
              <Image
                src={`/images/programs/${imgs[3]}`}
                alt=""
                className="object-cover rounded-[12px] hover:opacity-[0.9]"
                fill
              />
            </div>
            <div className="col-span-12 md:col-span-3 h-[300px] md:h-auto relative">
              <Image
                src={`/images/programs/${imgs[4]}`}
                alt=""
                className="object-cover rounded-[12px] hover:opacity-[0.9]"
                fill
              />
            </div>
          </div>
        )}

        <Link
          href="/travels-programs/program/travels-images"
          className="absolute bottom-[10px] left-[10px] md:bottom-[15px] md:left-[15px] flex justify-center items-center gap-[8px] h-[40px] py-[10px] px-[16px] bg-white text-black border-0 outline-none rounded-[8px]"
        >
          <span className="text-[12px]">أظهر المزيد من الصور</span>
          <Image src="/icons/camera.png" height={20} width={20} alt="" />
        </Link>
      </div>
    </div>
  );
};

export default ProgramPics;
/*src={`${backendHost}/images/programs/${imgs[0]}`}*/
