import Image from "next/image";
import Link from "next/link";
import React from "react";

const fbLink = "";
const igLink = "";
const twitterLink = "";

const currentYear = new Date().getFullYear();

// const animateVariants = {
//   hidden: {
//     opacity: 0,
//     translateY: -40,
//   },
//   show: {
//     opacity: 1,
//     translateY: 0,
//     transition: {
//       delay: 0.2,
//       duration: 0.6,
//     },
//   },
// };

const Footer = () => {
  return (
    <div className="py-[80px] bg-[#F5F8FB]">
      <div className="wrapper">
        {/* big grid */}
        <div className="grid grid-cols-5 gap-[32px]">
          {/* first grid */}
          <div className="col-span-5 xl:col-span-3 grid grid-cols-12 gap-[20px]">
            <div className="col-span-12 md:col-span-4 flex flex-col gap-[8px]">
              <div className="logo h-[36px] w-[109.67px] relative">
                <Image src="/images/logo/logo.svg" alt="arrivo" fill />
              </div>
              <p className="text-[12px] text-grey">
                “Arrivo Travel; Just joyful moments”
              </p>
              <p className="text-[12px] text-grey">
                “اريفو للسياحة نحاول فقط صناعة لحظات سعيدة”
              </p>
            </div>
            <div className="col-span-12 sm:col-span-6 md:col-span-4 flex flex-col gap-[8px]">
              <h4 className="text-[18px] font-bold-600 text-black">
                روابط مهمة
              </h4>
              <div className="flex flex-col gap-[10px] text-[12px]">
                <Link href="/">
                  <span className="py-[4px] text-grey hover:text-orange duration-300 ease-in">
                    الرئيسية
                  </span>
                </Link>
                <Link href="/about-us">
                  <span className="py-[4px] text-grey hover:text-orange duration-300 ease-in">
                    من نحن
                  </span>
                </Link>
                <Link href="/our-services?service=programs">
                  <span className="py-[4px] text-grey hover:text-orange duration-300 ease-in">
                    الخدمات
                  </span>
                </Link>
                <Link href="/">
                  <span className="py-[4px] text-grey hover:text-orange duration-300 ease-in">
                    المدونة
                  </span>
                </Link>
                <Link href="/">
                  <span className="py-[4px] text-grey hover:text-orange duration-300 ease-in">
                    الأسئلة المتكررة
                  </span>
                </Link>
              </div>
            </div>
            <div className="col-span-12 sm:col-span-6 md:col-span-4 flex flex-col gap-[8px]">
              <h4 className="text-[18px] font-bold-600 text-black">خدماتنا</h4>
              <div className="flex flex-col gap-[10px] text-[12px]">
                <Link href="/travels-programs?type=programs">
                  <span className="py-[4px] text-grey hover:text-orange duration-300 ease-in">
                    البرامج السياحية
                  </span>
                </Link>
                <Link href="/">
                  <span className="py-[4px] text-grey hover:text-orange duration-300 ease-in">
                    فنادق ومنتجعات
                  </span>
                </Link>
                <Link href="/">
                  <span className="py-[4px] text-grey hover:text-orange duration-300 ease-in">
                    سيارة مع سائق
                  </span>
                </Link>
                <Link href="/travels-programs?type=daily-trips">
                  <span className="py-[4px] text-grey hover:text-orange duration-300 ease-in">
                    الرحلات السياحية اليومية
                  </span>
                </Link>
                <Link href="/">
                  <span className="py-[4px] text-grey hover:text-orange duration-300 ease-in">
                    حجوزات طيران
                  </span>
                </Link>
              </div>
            </div>
          </div>
          {/* second grid */}
          <div className="col-span-5 xl:col-span-2 grid grid-cols-12 gap-[20px]">
            <div className="col-span-12 md:col-span-6 flex flex-col gap-[8px]">
              <h4 className="text-[18px] font-bold-600 text-black">
                معلومات الإتصال
              </h4>
              <div className="flex flex-col gap-[4px] text-[12px]">
                <Link href="/">
                  <div className="py-[4px] text-grey hover:text-orange duration-300 ease-in flex items-center gap-x-[4px]">
                    <Image
                      alt=""
                      src="/icons/footer/loc.svg"
                      height={24}
                      width={24}
                    />
                    تواصل معنا
                  </div>
                </Link>
                  <div className="py-[4px] text-grey hover:text-orange duration-300 ease-in flex items-center gap-x-[4px]">
                    <Image
                      alt=""
                      src="/icons/footer/loc.svg"
                      height={24}
                      width={24}
                    />
                    طرابزون, بيلتلي, انيت
                  </div>
                  <div className="py-[4px] text-grey hover:text-orange duration-300 ease-in flex items-center gap-x-[4px]">
                    <Image
                      alt=""
                      src="/icons/footer/phone.svg"
                      height={24}
                      width={24}
                    />
                    <span dir="ltr">+90 222 333 4444</span>
                  </div>
                  <div className="py-[4px] text-grey hover:text-orange duration-300 ease-in flex items-center gap-x-[4px]">
                    <Image
                      alt=""
                      src="/icons/footer/mssg.svg"
                      height={24}
                      width={24}
                    />
                    support@arrivo-travel.com
                  </div>
              </div>
            </div>
            <div className="col-span-12 md:col-span-6 flex flex-col gap-[16px]">
              <h4 className="text-[18px] font-bold-600 text-black">
                القائمة البريدية
              </h4>
              <form className="flex flex-col gap-[8px]">
                <label
                  htmlFor=""
                  className="font-bold-400 text-[12px] text-[#344054]"
                >
                  البريد الالكتروني
                </label>
                <input
                  type="text"
                  placeholder="البريد الالكتروني"
                  className="outline-none w-full bg-white p-[14px] rounded-[8px] border border-solid border-[#98A2B3]  text-[#98A2B3] text-[12px]"
                />
                <button className="outline-none w-full bg-orange text-white py-[14px] px-[20px] rounded-[8px] border border-solid border-orange">
                  إشترك معنا
                </button>
              </form>
              <div className="flex gap-[12px] items-center">
                <p className="text-[#3E444D] text-[12px]">تواصل معنا</p>
                <Link href={igLink}>
                  <div className="rounded-full border-[1px] border-solid border-black p-[6px] hover:bg-orange ease-out duration-300">
                    <Image
                      alt=""
                      src="/icons/footer/ig.svg"
                      height={20}
                      width={20}
                    />
                  </div>
                </Link>
                <Link href={twitterLink}>
                  <div className="rounded-full border-[1px] border-solid border-black p-[6px] hover:bg-orange ease-out duration-300">
                    <Image
                      alt=""
                      src="/icons/footer/twitter.svg"
                      height={20}
                      width={20}
                    />
                  </div>
                </Link>
                <Link href={fbLink}>
                  <div className="rounded-full border-[1px] border-solid border-black p-[6px] hover:bg-orange ease-out duration-300">
                    <Image
                      alt=""
                      src="/icons/footer/fb.svg"
                      height={20}
                      width={20}
                    />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <hr className="h-[1px] bg-[#C8CBD0] w-full my-[24px]" />
        <p className="text-[12px] text-grey w-fit mx-auto">
          © {currentYear} Arrivo. كل الحقوق محفوظة.
        </p>
      </div>
    </div>
  );
};

export default Footer;
