import Image from "next/image";
import Link from "next/link";

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

const TouristDestinations = () => {
  return (
    <div className="py-[80px] flex flex-col gap-[56px]">
      <div className="wrapper flex flex-col md:items-center w-full">
        <p className="text-orange font-bold-500 text-[16px]">
          نوفر لك أفضل البرامج
        </p>

        <h1 className="text-[32px] sm:text-[56px] flex flex-col md:items-center font-bold">
          البرامج السياحية
        </h1>
        <p className="text-[#475467] text-[14px] md:text-md md:text-center md:w-[540px]">
          ولأننا نسعى لراحتكم وتمتعكم برحلات فريدة نقدم لكم مجموعة من الخدمات
          المميزة بجودة عالية في رحلات غير إعتيادية لاكتشاف العالم.
        </p>
      </div>
      <div className="overflow-x-scroll scrollbar-hide">
        <div className="flex gap-[16px] justify-center items-center">
          {countries.map((c, i) => (
            <Link
              key={i}
              href={`/travels-programs?type=programs&country=${c.slug}`}
              className="rounded-[20px] shadow-md"
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
    </div>
  );
};

export default TouristDestinations;
