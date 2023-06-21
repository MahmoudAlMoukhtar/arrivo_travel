import Image from "next/image";
import Link from "next/link";
import React from "react";

const fbLink = "";
const igLink = "";
const twitterLink = "";

const currentYear = new Date().getFullYear();



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
                <svg
                  width="131"
                  height="40"
                  viewBox="0 0 131 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M55.5525 10.4485H59.1918C60.2692 10.4485 61.0739 10.2033 61.6126 9.70989C62.148 9.21951 62.4206 8.52379 62.4206 7.62886C62.4206 6.73392 62.1513 6.06579 61.6126 5.56315C61.0739 5.06052 60.2692 4.8092 59.1918 4.8092H55.5525V10.4485ZM61.9739 22.8182L56.9616 14.3255H55.5525V22.8182H49.6797V0.322266H59.5367C61.4352 0.322266 63.0545 0.631815 64.3946 1.25091C65.7315 1.87001 66.7365 2.71897 67.3967 3.7978C68.0635 4.87663 68.3953 6.07805 68.3953 7.40206C68.3953 8.8977 67.942 10.234 67.0354 11.4078C66.1322 12.5816 64.7986 13.4153 63.0381 13.9087L68.6022 22.8152H61.9739V22.8182Z"
                    fill="#092F44"
                  />
                  <path
                    d="M33.1629 10.4485H36.8022C37.8795 10.4485 38.6843 10.2033 39.2229 9.70989C39.7583 9.21951 40.0309 8.52379 40.0309 7.62886C40.0309 6.73392 39.7616 6.06579 39.2229 5.56315C38.6843 5.06052 37.8795 4.8092 36.8022 4.8092H33.1629V10.4485ZM39.5842 22.8182L34.572 14.3255H33.1629V22.8182H27.29V0.322266H37.1471C39.0456 0.322266 40.6649 0.631815 42.005 1.25091C43.3451 1.87001 44.3469 2.71897 45.0104 3.7978C45.6771 4.87663 46.0089 6.07805 46.0089 7.40206C46.0089 8.8977 45.5556 10.234 44.6491 11.4078C43.7458 12.5816 42.4123 13.4153 40.6517 13.9087L46.2158 22.8152H39.5875L39.5842 22.8182Z"
                    fill="#092F44"
                  />
                  <path
                    d="M15.5124 14.678L12.4906 6.3784L9.5049 14.678H15.5124ZM16.9905 18.8431H7.99071L6.54878 22.8152H0.40332L9.12389 0.322266H15.923L24.6468 22.8152H18.4324L16.9905 18.8431Z"
                    fill="#092F44"
                  />
                  <path
                    d="M77.951 0.322266H72.0781V22.8152H77.951V0.322266Z"
                    fill="#092F44"
                  />
                  <path
                    d="M86.6334 0.322266L92.608 17.3046L98.5827 0.322266H104.833L96.2835 22.8152H88.9326L80.3828 0.322266H86.6334Z"
                    fill="#092F44"
                  />
                  <path
                    d="M123.285 16.213C122.129 17.3899 120.595 17.9784 118.667 17.9784C116.739 17.9784 115.172 17.393 114.016 16.213C112.86 15.0392 112.282 13.4731 112.282 11.5054C112.282 9.5378 112.856 7.97166 114.016 6.79783C115.172 5.62093 116.722 5.03248 118.667 5.03248C120.611 5.03248 122.125 5.61786 123.285 6.79783C124.441 7.97166 125.022 9.5378 125.022 11.5054C125.022 13.4731 124.441 15.0392 123.285 16.213ZM129.365 5.57495C128.277 3.82493 126.793 2.45494 124.901 1.47419C123.016 0.49344 120.936 0 118.67 0C116.404 0 114.331 0.49344 112.439 1.47419C110.547 2.45494 109.05 3.82493 107.939 5.57495C106.829 7.32804 106.277 9.30181 106.277 11.5054C106.277 13.7091 106.829 15.6859 107.939 17.4512C108.734 18.7078 109.72 19.7652 110.912 20.6203C111.093 20.5038 111.276 20.3843 111.457 20.2648C112.784 19.3882 114.193 19.1951 115.668 19.7008L116.148 19.8663L116.384 21.2149L116.266 21.4447C116.023 21.932 115.694 22.3274 115.333 22.6553C116.391 22.9128 117.507 23.0446 118.67 23.0446C120.936 23.0446 123.012 22.5511 124.891 21.5704C126.763 20.5835 128.251 19.2135 129.348 17.4543C130.445 15.6889 131 13.706 131 11.5085C131 9.311 130.455 7.33111 129.368 5.57802"
                    fill="#092F44"
                  />
                  <path
                    d="M23.6729 24.9601C24.4874 25.1409 25.3841 25.1808 26.1002 25.524C41.0483 32.6988 57.0015 35.6104 73.8941 34.2588C81.9052 33.6183 89.6437 31.8162 97.0964 29.0884C97.5563 28.9199 98.0293 28.6195 98.4792 28.644C99.0311 28.6716 99.8226 28.8494 100.03 29.1926C100.207 29.4869 99.8686 30.3205 99.4876 30.5442C97.2607 31.8468 95.0304 33.18 92.659 34.2466C70.4519 44.2502 42.8088 40.98 24.3265 26.2167C24.0966 26.0328 23.8929 25.8213 23.6794 25.6221C23.6794 25.4014 23.6794 25.1808 23.6761 24.957"
                    fill="#F08631"
                  />
                  <path
                    d="M115.47 21.0896C115.201 21.6259 114.8 22.0335 114.347 22.3707C113.73 22.8365 113.007 23.192 112.367 23.6211C111.825 23.9889 111.532 24.3659 111.434 24.9911C111.164 26.6461 110.754 28.2858 110.53 29.9439C110.402 30.9032 109.824 31.3598 108.891 31.7246C108.773 29.8826 108.662 28.0866 108.543 26.1711C107.246 26.9771 105.988 27.5901 104.651 28.0743C103.633 28.4482 102.766 28.4482 101.925 27.7403C101.491 27.3664 100.985 27.0721 100.532 26.7166C100.355 26.5787 99.9672 26.4653 100.108 26.214C100.237 25.9872 100.555 25.837 100.913 25.8952C101.606 26.0117 102.306 26.0699 102.986 26.214C103.501 26.3243 103.896 26.214 104.319 25.9351C106.763 24.323 109.23 22.7446 111.667 21.1294C111.765 21.062 111.867 20.9976 111.966 20.9332C113.037 20.2253 114.14 20.0506 115.362 20.4735C115.398 20.6819 115.434 20.8842 115.467 21.0926"
                    fill="#F08631"
                  />
                  <path
                    d="M102.852 22.9925C104.517 21.3099 106.228 22.6676 107.939 22.7626C107.292 23.1917 106.642 23.6147 106.001 24.0529C105.837 24.1663 105.699 24.1388 105.538 24.0744C104.671 23.7219 103.804 23.3756 102.852 22.9925Z"
                    fill="#F08631"
                  />
                </svg>
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
