import Image from "next/image";
import Link from "next/link";
import {motion} from "framer-motion";
import {useRouter} from "next/router";

const Menu = ({handleShowDropdown, showDropdown, setShowDropdown}) => {
  const router = useRouter();
  const isActive = path => {
    return router.pathname === path ? "text-orange hover:text-orange" : "";
  };

  const serviceVariants = {
    hidden: {translateY: -20, opacity: 0},
    show: {
      translateY: 0,
      opacity: 1,
      transition: {duration: 0.6},
    },
  };
  return (
    <div className="hidden md:flex gap-x-4 md:gap-x-[20px] items-center relative  text-left">
      <motion.div
        initial="hidden"
        whileInView="show"
        variants={serviceVariants}
        onBlur={handleShowDropdown}
        className={`absolute z-10 top-[45px] mt-2 right-[-200px]  lg:right-[-100px]   rounded-md bg-white shadow-lg p-[32px]  ${
          showDropdown ? "block" : "hidden"
        }`}
        style={{boxShadow: "0px 12px 20px rgba(91, 116, 130, 0.1)"}}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 rounded-[16px] flex flex-row justify-center items-center gap-[32px] text-start">
          <div id="Right" className="flex flex-col items-start gap-[32px]">
            <div id="content" className="flex flex-col items-start gap-[8px]">
              <div className="flex flex-row justify-center items-center gap-[16px]">
                <h4 className="text-[18px] font-bold">عروض خارقة لاتفوتها</h4>
                <span className="pt-[2px] px-[8px] border-[1px] text-[#F08631] border-[#F08631] rounded-[4px] text-[12px]">
                  جديد
                </span>
              </div>
              <p className="text-[12px] text-[#475467]">
                نحن هنا لتحقيق أحلامك السياحية! اختر الخدمة المفضلة من قائمتنا
                ولنبدأ المغامرة الرائعة سويًا!
              </p>
            </div>
            <div id="image" className="w-[385px] h-[185px]">
              <Image
                width={385}
                height={185}
                src={"/images/img.jpg"}
                alt="services"
              />
            </div>
            <div className="flex flex-row-reverse items-center justify-end gap-[20px] mt-14">
              <div id="text" className="flex flex-col items-start">
                <h6 className="text-[14px]">مركز المساعدة</h6>
                <p>
                  تواصل معنا{" "}
                  <span className="text-[#F08631]">
                    support@arrivo-travel.com{" "}
                  </span>
                </p>
              </div>
              <div className="bg-white border-2 border-solid border-gray-700 service-shadow group-hover:border-orange group-hover:shadow-none rounded-md duration-300">
                <Image
                  alt=""
                  src="/icons/services/Help.svg"
                  height={36}
                  width={36}
                />
              </div>
            </div>
          </div>
          <div className="grid grid-cols-12 gap-y-[26px] gap-x-[31px]">
            <div className="col-span-12 flex flex-col">
              <div className="group cursor-pointer transition-all flex items-center gap-x-[20px] mb-2">
                <div className="bg-white border-2 border-solid border-gray-700 service-shadow group-hover:border-orange group-hover:shadow-none rounded-md duration-300">
                  <Image
                    alt=""
                    src="/icons/services/baloon.svg"
                    height={36}
                    width={36}
                  />
                </div>

                <Link
                  href="/our-services?service=programs"
                  className="font-bold-600 text-[16px]  group-hover:text-orange duration-300"
                >
                  برامج سياحية
                </Link>
                <Image
                  alt=""
                  src="/icons/services/up.svg"
                  height={31}
                  width={31}
                  className="hidden group-hover:flex transition-all duration-300"
                />
              </div>
              <p className="text-grey text-[12px]">
                نقدم مغامرات ملهمة وتجارب مصممة بعناية لكل عميل، مع تخطيط متفوق
                وتنظيم محكم لضمان تجربة سفر لا تُنسى.
              </p>
            </div>
            <div className="col-span-12 flex flex-col">
              <div className="group cursor-pointer transition-all flex items-center gap-x-[20px] mb-2">
                <div className=" bg-white border-2 border-solid border-gray-700 service-shadow group-hover:border-orange group-hover:shadow-none rounded-md duration-300">
                  <Image
                    alt=""
                    src="/icons/services/bus.svg"
                    height={36}
                    width={36}
                  />
                </div>
                <Link
                  href="/our-services?service=daily-trips"
                  className="font-bold-600 text-[16px] group-hover:text-orange duration-300"
                >
                  رحلات يومية
                </Link>
                <Image
                  alt=""
                  src="/icons/services/up.svg"
                  height={31}
                  width={31}
                  className="hidden group-hover:flex transition-all duration-300"
                />
              </div>
              <p className="text-grey text-[12px]">
                استمتع برحلات يومية مع سائق خاص لزيارة وجهات رائعة وأماكن غير
                مكتشفة. مستشارون محترفون لتنظيم مسارات متناسقة توفر تجربة مريحة
                وممتعة بأقل جهد ووقت.
              </p>
            </div>
            <div className="col-span-12  flex flex-col">
              <div className="group cursor-pointer transition-all flex items-center gap-x-[20px] mb-2">
                <div className=" bg-white border-2 border-solid border-gray-700 service-shadow group-hover:border-orange group-hover:shadow-none rounded-md duration-300">
                  <Image
                    alt=""
                    src="/icons/services/build.svg"
                    height={36}
                    width={36}
                  />
                </div>
                <Link
                  href="/our-services?service=stay-places"
                  className="font-bold-600 text-[16px]  group-hover:text-orange duration-300"
                >
                  حجز الإقامة
                </Link>
                <Image
                  alt=""
                  src="/icons/services/up.svg"
                  height={31}
                  width={31}
                  className="hidden group-hover:flex transition-all duration-300"
                />
              </div>
              <p className="text-grey text-[12px]">
                استمتع بإقامة مثالية من خبراء يوفرون اختيارات ملائمة ومتنوعة،
                بأسعار تنافسية ومعرفة عميقة بأماكن الإقامة.
              </p>
            </div>
            <div className="col-span-12  flex flex-col">
              <div className="group cursor-pointer transition-all flex items-center gap-x-[20px] mb-2">
                <div className=" bg-white border-2 border-solid border-gray-700 service-shadow group-hover:border-orange group-hover:shadow-none rounded-md duration-300">
                  <Image
                    alt=""
                    src="/icons/services/car.svg"
                    height={36}
                    width={36}
                  />
                </div>
                <Link
                  href="/our-services?service=cars"
                  className="font-bold-600 text-[16px] group-hover:text-orange duration-300"
                >
                  تأجير السيارات
                </Link>
                <Image
                  alt=""
                  src="/icons/services/up.svg"
                  height={31}
                  width={31}
                  className="hidden group-hover:flex transition-all duration-300"
                />
              </div>
              <p className="text-grey text-[12px]">
                تأجير سيارات مرن وآمن, اختيارات متنوعة، توصيل مريح، لتجربة سفر
                لا مثيل لها.
              </p>
            </div>
          </div>
        </div>
      </motion.div>

      <Link href="/travels-programs?type=programs">
        <div
          className={`text-[#636973] text-[12px] xl:text-[14px] hover:text-deep flex items-center gap-[1px] ${isActive(
            "/travels-programs"
          )}`}
        >
          البرامج السياحية
          <span className="text-orange border-solid border-[0.7px] rounded border-orange py-[4px] px-[10px] flex items-center justify-center h-[12px] w-[20px] text-[6px] font-bold-600">
            جديد
          </span>
        </div>
      </Link>

      <button
        type="button"
        className="inline-flex justify-center"
        id="options-menu"
        aria-haspopup="true"
        aria-expanded="true"
        onClick={() => {
          handleShowDropdown();
          // setActiveLink({
          //   ...activeLink,
          //   services: !activeLink.services,
          // });
        }}
      >
        <div
          className={`text-[#636973] text-[12px] xl:text-[14px] hover:text-deep flex items-center ${
            showDropdown ? "text-orange hover:text-orange" : ""
          }`}
        >
          الخدمات
          <Image alt="/" src="/icons/navbar/down.svg" height={24} width={24} />
        </div>
      </button>
      <Link href="/our-blogs">
        <div className="text-[#636973] text-[12px] xl:text-[14px] hover:text-deep flex items-center">
          المدونة
          <Image alt="/" src="/icons/navbar/down.svg" height={24} width={24} />
        </div>
      </Link>
      <Link href="/about-us">
        <div
          className={`text-[#636973] text-[12px] xl:text-[14px] hover:text-deep flex items-center ${isActive(
            "/about-us"
          )}`}
        >
          من نحن
          <Image alt="/" src="/icons/navbar/down.svg" height={24} width={24} />
        </div>
      </Link>
    </div>
  );
};

export default Menu;
