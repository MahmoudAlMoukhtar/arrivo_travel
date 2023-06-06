import Image from "next/image";
import Link from "next/link";

const Tour = ({tour, createPersonsArabic}) => {
  const displayedStations = tour.tripStations.slice(0, 2); // Display only the first two stations

  if (tour.tripStations.length > 2) {
    displayedStations.push("والمزيد...");
  }

  const formattedStations = displayedStations.join(" - "); // Join the stations separated by '-'
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
        duration: 0.4,
      },
    },
  };
  return (
    <div className="min-w-[285px] col-span-12 sm:col-span-6  xl:col-span-4">
      <Link
        href={`/travels-programs/${tour._id}`}
        dir="rtl"
        className="relative flex flex-col bg-white rounded-[12px]"
        style={{
          boxShadow: "0px 4px 8px rgba(91, 116, 130, 0.08)",
          border: "1px solid rgba(152, 162, 179, 0.25)",
        }}
      >
        <div className="relative h-[245px] w-full">
          <Image
            alt=""
            src={`/images/${tour.img}`}
            fill
            className="rounded-t-[12px]"
          />
          <div className="absolute top-[16px] right-[16px]">
            <button className="outline-none bg-[#F08631] text-white py-[12px] px-[20px] flex items-center justify-center text-[12px] rounded-[12px]">
              {tour.offer}
            </button>
          </div>
        </div>
        <div className="p-[16px] flex flex-col gap-[16px]">
          {/* first part */}
          <div className="flex flex-col gap-[8px]">
            <div className="flex justify-between items-center">
              <h6 className="font-bold-600 text-[16px]">{tour.title}</h6>
              {/* <div className="flex gap-x-[4px] text-[12px] items-center text-grey">
                          <Image
                            alt=""
                            src="/icons/star.svg"
                            height={20}
                            width={20}
                          />
                          <span>{tour.rating.avg}</span>
                          <span>.</span>
                          <span>
                            <span>{tour.rating.count}</span> تقييم
                          </span>
                        </div> */}
            </div>
            <p className="text-[12px] text-grey">{formattedStations}</p>
            <div className="flex gap-x-[4px] items-center text-[12px] text-grey">
              <Image alt="" src="/icons/daily/car.svg" height={20} width={20} />
              رحلة خاصة
            </div>
          </div>
          {/* second part */}
          <div className="flex gap-x-[16px] items-center">
            <p className="price font-bold-600 text-[36px]">
              <span>$</span>
              {tour.price}
            </p>
            <div className="flex flex-col gap-[2px] text-[12px] text-grey">
              <p>{createPersonsArabic(tour.persons)}</p>
              <div className="flex gap-x-[4px] pr-[8px]">
                <Image
                  alt=""
                  src="/icons/daily/clock.svg"
                  height={20}
                  width={20}
                />
                <p className="flex gap-x-1">
                  {tour.hours}
                  <span>ساعات</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};
export default Tour;
