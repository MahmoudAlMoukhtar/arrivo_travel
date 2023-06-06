import Image from "next/image";
import Link from "next/link";
import React, {useState} from "react";
import {motion} from "framer-motion";

const Logo = () => {
  return (
    <Link href="/" className="logo h-[56px] w-[164px] relative">
      <Image src="/images/logo/logo.svg" alt="arrivo" fill />
    </Link>
  );
};

const SearchAndContact = () => {
  return (
    <div className="hidden md:flex gap-x-2 items-center h-[48px] bg-white rounded-[40px] border border-[#C8CBD0] py-[12px] px-[6px] lg:pt-[10x] lg:px-[10px] lg:pr-[16px]">
      <input
        type="text"
        className="border-0 outline-none bg-transparent flex-1 text-[12px] xl:text-[16px]"
        placeholder="إلى أين تريد أن تذهب؟"
      />
      <div className="flex justify-center items-center bg-orange p-[8px] w-[28px] h-[28px] rounded-full">
        <Image src="/icons/search-white.svg" alt="/" height={24} width={24} />
      </div>
    </div>
  );
};

const Navbar = () => {
  const [searchDrop, setSearchDrop] = useState(false);
  const [menuDrop, setMenuDrop] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [activeLink, setActiveLink] = useState({
    services: false,
    aboutUs: false,
    blogs: false,
  });

  const toggleSearch = () => {
    setMenuDrop(false);
    setSearchDrop(!searchDrop);
  };

  const toggleMenu = () => {
    setSearchDrop(false);
    setMenuDrop(!menuDrop);
  };

  const handleShowDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const containerVariants = {
    hidden: {opacity: 0.8},
    show: {
      opacity: 1,
      transition: {
        delayChildren: 0.6,
        staggerChildren: 0.5,
        duration: 0.2,
      },
    },
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
    <div className="border-b border-[#E9EAEC] duration-1000 transition-all">
      <div className="wrapper">
        <nav className="flex justify-between items-center py-[12px] gap-[17px]">
          <Logo />

          {/* menu */}

          {/* search box and contact */}
          <div className="hidden md:flex gap-x-4 md:gap-x-[20px] items-center relative  text-left">
            <div
              onBlur={handleShowDropdown}
              className={`absolute z-10 top-[45px] mt-2 right-[-200px]  lg:right-[-100px]   rounded-md bg-white shadow-lg p-[32px]  ${
                showDropdown ? "block" : "hidden"
              }`}
              style={{boxShadow: "0px 12px 20px rgba(91, 116, 130, 0.1)"}}
            >
              <div className="px-2 pt-2 pb-3 space-y-1 rounded-[16px] flex flex-row justify-center items-center gap-[32px] text-start">
                <div
                  id="Right"
                  className="flex flex-col items-start gap-[32px]"
                >
                  <div
                    id="content"
                    className="flex flex-col items-start gap-[8px]"
                  >
                    <div className="flex flex-row justify-center items-center gap-[16px]">
                      <h4 className="text-[18px] font-bold">
                        عروض خارقة لاتفوتها
                      </h4>
                      <span className="pt-[2px] px-[8px] border-[1px] text-[#F08631] border-[#F08631] rounded-[4px] text-[12px]">
                        جديد
                      </span>
                    </div>
                    <p className="text-[12px] text-[#475467]">
                      نحن هنا لتحقيق أحلامك السياحية! اختر الخدمة المفضلة من
                      قائمتنا ولنبدأ المغامرة الرائعة سويًا!
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
                <motion.div
                  initial="hidden"
                  whileInView="show"
                  className="grid grid-cols-12 gap-y-[26px] gap-x-[31px]"
                >
                  <motion.div
                    variants={serviceVariants}
                    className="col-span-12 flex flex-col"
                  >
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
                        href={"/"}
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
                      نقدم مغامرات ملهمة وتجارب مصممة بعناية لكل عميل، مع تخطيط
                      متفوق وتنظيم محكم لضمان تجربة سفر لا تُنسى.
                    </p>
                  </motion.div>
                  <motion.div
                    variants={serviceVariants}
                    className="col-span-12 flex flex-col"
                  >
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
                        href={"/"}
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
                      استمتع برحلات يومية مع سائق خاص لزيارة وجهات رائعة وأماكن
                      غير مكتشفة. مستشارون محترفون لتنظيم مسارات متناسقة توفر
                      تجربة مريحة وممتعة بأقل جهد ووقت.
                    </p>
                  </motion.div>
                  <motion.div
                    variants={serviceVariants}
                    className="col-span-12  flex flex-col"
                  >
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
                        href={"/"}
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
                      استمتع بإقامة مثالية من خبراء يوفرون اختيارات ملائمة
                      ومتنوعة، بأسعار تنافسية ومعرفة عميقة بأماكن الإقامة.
                    </p>
                  </motion.div>
                  <motion.div
                    variants={serviceVariants}
                    className="col-span-12  flex flex-col"
                  >
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
                        href={"/"}
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
                      تأجير سيارات مرن وآمن, اختيارات متنوعة، توصيل مريح، لتجربة
                      سفر لا مثيل لها.
                    </p>
                  </motion.div>
                </motion.div>
              </div>
            </div>
            <Link href="/travels-programs">
              <div className="text-[#636973] text-[12px] xl:text-[14px] hover:text-deep flex items-center gap-[1px]">
                البرامج السياحية
                <span className="text-orange border-solid border-[0.7px] rounded border-orange py-[4px] px-[10px] flex items-center justify-center h-[12px] w-[20px] text-[6px] font-bold-600">
                  جديد
                </span>
              </div>
            </Link>
            <button
              type="button"
              className="inline-flex justify-center "
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
              <div className="text-[#636973] text-[12px] xl:text-[14px] hover:text-deep flex items-center">
                الخدمات
                <Image
                  alt="/"
                  src="/icons/navbar/down.svg"
                  height={24}
                  width={24}
                />
              </div>
            </button>
            <Link href="/services">
              <div className="text-[#636973] text-[12px] xl:text-[14px] hover:text-deep flex items-center">
                المدونة
                <Image
                  alt="/"
                  src="/icons/navbar/down.svg"
                  height={24}
                  width={24}
                />
              </div>
            </Link>
            <Link href="/about-us">
              <div className="text-[#636973] text-[12px] xl:text-[14px] hover:text-deep flex items-center">
                من نحن
                <Image
                  alt="/"
                  src="/icons/navbar/down.svg"
                  height={24}
                  width={24}
                />
              </div>
            </Link>
          </div>
          <SearchAndContact />
          <div className="hidden md:flex">
            <Link href="/contact">
              <button className="outline-none text-[12px] text-orange py-[12px] px-[20px] border border-orange rounded-[8px] hover:bg-orange hover:text-white duration-300 ease-out">
                تواصل معنا
              </button>
            </Link>
          </div>

          {/* mobile buttons */}
          <div className="md:hidden flex gap-x-6">
            <button
              onClick={() => toggleSearch()}
              className="oytline-none flex items-center justify-center"
            >
              <Image src="/icons/search.svg" alt="/" height={24} width={24} />
            </button>
            <button
              onClick={() => toggleMenu()}
              className="oytline-none flex items-center justify-center"
            >
              <Image src="/icons/menu.svg" alt="/" height={24} width={24} />
            </button>
          </div>
        </nav>
        {/* menu drop */}
        {menuDrop && (
          <div className="mb-3">
            <div className="flex gap-x-2 md:gap-x-[20px] justify-between items-center md:hidden">
              <Link href="/travels-programs">
                <div className="text-[#636973] text-[12px] xl:text-[14px] hover:text-deep flex items-center gap-[1px]">
                  البرامج السياحية
                  <span className="text-orange border-solid border-[0.7px] rounded border-orange py-[4px] px-[10px] flex items-center justify-center h-[12px] w-[20px] text-[6px] font-bold-600">
                    جديد
                  </span>
                </div>
              </Link>
              <button
                type="button"
                className="inline-flex justify-center "
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
                <div className="text-[#636973] text-[12px] xl:text-[14px] hover:text-deep flex items-center">
                  الخدمات
                  <Image
                    alt="/"
                    src="/icons/navbar/down.svg"
                    height={24}
                    width={24}
                  />
                </div>
              </button>
              <Link href="/about-us">
                <div className="text-[#636973] text-[12px] xl:text-[14px] hover:text-deep flex items-center">
                  من نحن
                  <Image
                    alt="/"
                    src="/icons/navbar/down.svg"
                    height={24}
                    width={24}
                  />
                </div>
              </Link>
            </div>
          </div>
        )}

        {/* search drop */}
        {searchDrop && (
          <div className="mb-3">
            <div className="flex gap-x-2 items-center bg-white rounded-[40px] border border-[#C8CBD0] py-[10x] px-[10px] sm:pr-[16px] md:hidden">
              <input
                type="text"
                className="border-0 outline-none bg-transparent flex-1 py-[8px] pr-[6px]"
                placeholder="إلى أين تريد أن تذهب؟"
              />
              <div className="flex justify-center items-center bg-orange p-[8px] w-[28px] h-[28px] rounded-full">
                <Image
                  src="/icons/search-white.svg"
                  alt="/"
                  height={12}
                  width={12}
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
