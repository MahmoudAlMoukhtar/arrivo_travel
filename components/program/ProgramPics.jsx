import Image from "next/image";
import React, {useEffect, useState} from "react";

const backendHost = process.env.NEXT_PUBLIC_BACKEND_HOST;

const imgs = ["pro-1.png", "pro-2.png", "pro-3.png", "pro-4.png", "pro-5.png"];

const ProgramPics = () => {
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
  return (
    <div className="py-[10px] md:py-[20px]">
      <div className="bigbox relative">
        {isSmallScreen ? (
          <div className="grid grid-cols-12 grid-rows-4 gap-4 md:h-[476px]">
            <div className="col-span-12 md:col-span-6 row-span-4 h-[520px] sm:h-[300px] md:h-auto relative">
              <Image
                src={`/images/programs/${imgs[0]}`}
                alt=""
                className="object-cover rounded-[12px] hover:opacity-[0.9]"
                fill
              />
            </div>
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

        <button className="absolute bottom-[10px] left-[10px] md:bottom-[15px] md:left-[15px] flex justify-center items-center gap-[8px] h-[40px] py-[10px] px-[16px] bg-white text-black border-0 outline-none rounded-[8px]">
          <span className="text-[12px]">أظهر المزيد من الصور</span>
          <Image src="/icons/camera.png" height={20} width={20} alt="" />
        </button>
      </div>
    </div>
  );
};

export default ProgramPics;
/*src={`${backendHost}/images/programs/${imgs[0]}`}*/
