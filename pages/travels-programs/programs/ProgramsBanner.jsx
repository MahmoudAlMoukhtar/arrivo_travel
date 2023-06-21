import Image from "next/image";
import Link from "next/link";
import {useRouter} from "next/router";
import {useEffect} from "react";

const countries = [
  {
    img: "Background-4.jpg",
    titleAr: "طرابزون",
    title: "TRABZAON",
    slug: "trabzaon",
    banner: "/images/programs/Tourism  programmes/Large/Background.jpg",
    mdBanner: "/images/programs/Tourism  programmes/Medium/Background.jpg",
  },

  {
    img: "Background-3.jpg",
    titleAr: "اسطنبول",
    title: "ISTANBUL",
    slug: "istanbul",
    banner: "/images/programs/Tourism  programmes/Large/Background.jpg",
    smBanner: "/images/programs/Tourism  programmes/Small/Background.jpg",
  },
  {
    img: "Background-2.jpg",
    titleAr: "ريزا",
    title: "RIZE",
    slug: "rize",
    banner: "/images/programs/Tourism  programmes/Large/Background.jpg",
    mdBanner: "/images/programs/Tourism  programmes/Medium/Background.jpg",
    smBanner: "/images/programs/Tourism  programmes/Small/Background.jpg",
  },
  {
    img: "Background-1.jpg",
    titleAr: "أناضول",
    title: "ANADOLU",
    slug: "anadolu",
    banner: "/images/programs/Tourism  programmes/Large/Background.jpg",
    mdBanner: "/images/programs/Tourism  programmes/Medium/Background.jpg",
    smBanner: "/images/programs/Tourism  programmes/Small/Background.jpg",
  },
  {
    img: "Background.jpg",
    titleAr: "دينيز",
    title: "EGE-DENIZ",
    slug: "ege-deniz",
    banner: "/images/programs/Tourism  programmes/Large/Background.jpg",
    mdBanner: "/images/programs/Tourism  programmes/Medium/Background.jpg",
    smBanner: "/images/programs/Tourism  programmes/Small/Background.jpg",
  },
];

const ProgramsBanner = ({selectedType}) => {
  const router = useRouter();
  const {type, country} = router.query;
  let bannerBackgroun = selectedType.image;
  let mdBannerBackgroun = selectedType.image;
  let smBannerBackgroun = "/images/programs/programs-banner-sm.jpg";
  const selecteCountry = countries.find(c => c.slug === country);
  if (selecteCountry) {
    bannerBackgroun = selecteCountry.banner;
    mdBannerBackgroun = selecteCountry.mdBanner;
    smBannerBackgroun = selecteCountry.smBanner;
  }

  useEffect(() => {
    setTimeout(() => {
      document
        .querySelector(".dir1")
        .classList.add("animate__animated", "animate__flash");
    }, 400);
    setTimeout(() => {
      document
        .querySelector(".dir2")
        .classList.add("animate__animated", "animate__flash");
    }, 600);
    setTimeout(() => {
      document
        .querySelector(".dir3")
        .classList.add("animate__animated", "animate__flash");
    }, 800);
    setTimeout(() => {
      document
        .querySelector(".dir4")
        .classList.add("animate__animated", "animate__flash");
    }, 1000);
    setTimeout(() => {
      document
        .querySelector(".dir5")
        .classList.add("animate__animated", "animate__flash");
    }, 1200);
  }, []);

  return (
    <div className="">
      <div className="bigbox relative">
        <div className="grid grid-cols-12 grid-rows-4 gap-4 md:h-[476px]">
          <div className="col-span-12 md:col-span-12 row-span-4 h-[520px] sm:h-[476px] md:h-auto relative">
            <Image
              src={smBannerBackgroun}
              alt=""
              className="relative block sm:hidden"
              fill
            />
            <Image
              src={mdBannerBackgroun}
              alt=""
              className="relative hidden sm:block  md:hidden"
              fill
            />

            <Image
              src={bannerBackgroun}
              alt=""
              className="relative hidden md:block"
              fill
            />
            {/* <Image
              src="/images/programs/programs-banner-sm.jpg"
              alt=""
              className="relative"
              fill
            /> */}
            <div
              className="absolute inset-0 bg-gradient-to-b from-transparent to-white"
              style={{
                background:
                  "linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.0086472) 5.22%, rgba(255, 255, 255, 0.03551) 10.43%, rgba(255, 255, 255, 0.0816599) 15.65%, rgba(255, 255, 255, 0.147411) 20.86%, rgba(255, 255, 255, 0.231775) 26.08%, rgba(255, 255, 255, 0.331884) 31.29%, rgba(255, 255, 255, 0.442691) 36.51%, rgba(255, 255, 255, 0.557309) 41.73%, rgba(255, 255, 255, 0.668116) 46.94%, rgba(255, 255, 255, 0.768225) 52.16%, rgba(255, 255, 255, 0.852589) 57.37%, rgba(255, 255, 255, 0.91834) 62.59%, rgba(255, 255, 255, 0.96449) 67.8%, rgba(255, 255, 255, 0.991353) 73.02%, #FFFFFF 78.24%), linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.0086472) 5.22%, rgba(255, 255, 255, 0.03551) 10.43%, rgba(255, 255, 255, 0.0816599) 15.65%, rgba(255, 255, 255, 0.147411) 20.86%, rgba(255, 255, 255, 0.231775) 26.08%, rgba(255, 255, 255, 0.331884) 31.29%, rgba(255, 255, 255, 0.442691) 36.51%, rgba(255, 255, 255, 0.557309) 41.73%, rgba(255, 255, 255, 0.668116) 46.94%, rgba(255, 255, 255, 0.768225) 52.16%, rgba(255, 255, 255, 0.852589) 57.37%, rgba(255, 255, 255, 0.91834) 62.59%, rgba(255, 255, 255, 0.96449) 67.8%, rgba(255, 255, 255, 0.991353) 73.02%, #FFFFFF 78.24%)",
              }}
            />

            <div
              className={`flex flex-col items-center absolute ${
                country
                  ? "top-[50%] sm:top-[50%]"
                  : type === "daily-trips"
                  ? "top-[40%] sm:top-[40%]"
                  : "top-[40%] sm:top-[30%]"
              }  left-[50%] w-full wrapper`}
              style={{transform: "translate(-50%, -50%)"}}
            >
              <h1 className="text-[32px] sm:text-[56px] flex flex-col items-center font-bold">
                {country ? selecteCountry.titleAr : selectedType.title}
              </h1>
              <p className="text-[#475467] text-[14px] md:text-md text-center">
                أفضل الأماكن السياحية في تركيا الشمالية ضمن برامج سياحية كاملة.
              </p>
            </div>
          </div>
        </div>
      </div>
      {!country && (
        <div className="overflow-x-scroll scrollbar-hide translate-y-[-200px] ">
          <div className="flex gap-[16px] justify-center items-center">
            {countries.map((c, i) => (
              <Link
                key={i}
                href={`/travels-programs?type=programs&country=${c.slug}`}
                className={`dir${i + 1} rounded-[20px] shadow-md`}
              >
                <div className=" h-[160px] w-[160px] lg:h-[232px] lg:w-[224px] relative">
                  <Image
                    alt=""
                    src={`/images/programs/${c.img}`}
                    className="relative"
                    fill
                  />
                  <div
                    className="absolute inset-0 bg-gradient-to-b from-transparent to-black rounded-[10px] "
                    style={{
                      background:
                        "linear-gradient(180deg, rgba(0, 0, 0, 0) 57.55%, rgba(0, 0, 0, 0.8) 100%)",
                    }}
                  />
                  <div className="absolute bottom-[20px] md:bottom-[10px] w-full text-center font-bold-[600] text-[20px] text-white">
                    {c.title}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProgramsBanner;
