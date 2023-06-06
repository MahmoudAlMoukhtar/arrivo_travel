import Image from "next/image";
import Link from "next/link";

const countries = [
  {
    img: "Background-4.jpg",
    title: "TRABZAON",
  },

  {
    img: "Background-3.jpg",
    title: "ISTANBUL",
  },
  {
    img: "Background-2.jpg",
    title: "RIZE",
  },
  {
    img: "Background-1.jpg",
    title: "ANADOLU",
  },
  {
    img: "Background.jpg",
    title: "EGE-DENIZ",
  },
];

const ProgramsBanner = () => {
  return (
    <div className="">
      <div className="bigbox relative">
        <div className="grid grid-cols-12 grid-rows-4 gap-4 md:h-[476px]">
          <div className="col-span-12 md:col-span-12 row-span-4 h-[520px] sm:h-[476px] md:h-auto relative">
            <Image
              src="/images/programs/programs-banner-sm.jpg"
              alt=""
              className="relative sm:hidden"
              fill
            />
            <Image
              src="/images/programs/BackgroundProgramsBanner.jpg"
              alt=""
              className="relative hidden sm:block"
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
              className="flex flex-col items-center absolute top-[40%] sm:top-[30%] left-[50%] w-full wrapper"
              style={{transform: "translate(-50%, -50%)"}}
            >
              <h1 className="text-[32px] sm:text-[56px] flex flex-col items-center font-bold">
                البرامج السياحية
              </h1>
              <p className="text-[#475467] text-[14px] md:text-md text-center">
                أفضل الأماكن السياحية في تركيا الشمالية ضمن برامج سياحية كاملة.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="overflow-x-scroll scrollbar-hide translate-y-[-200px]">
        <div className="flex gap-[16px] justify-center items-center">
          {countries.map((c, i) => (
            <Link key={i} href={"/"} className="rounded-[20px] shadow-md">
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
    </div>
  );
};

export default ProgramsBanner;
