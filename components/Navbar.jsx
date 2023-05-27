import Image from "next/image";
import Link from "next/link";
import React, {useState} from "react";

const Navbar = () => {
  const [searchDrop, setSearchDrop] = useState(false);
  const [menuDrop, setMenuDrop] = useState(false);

  const toggleSearch = () => {
    setMenuDrop(false);
    setSearchDrop(!searchDrop);
  };

  const toggleMenu = () => {
    setSearchDrop(false);
    setMenuDrop(!menuDrop);
  };

  return (
    <div className="border-b border-[#E9EAEC] duration-1000 transition-all">
      <div className="wrapper">
        <nav className="flex justify-between items-center py-[12px] gap-[17px]">
          <div className="flex-1 flex justify-between items-center">
            <div className="logo h-[56px] w-[164px] relative">
              <Image src="/images/logo/logo.svg" alt="arrivo" fill />
            </div>

            {/* menu */}
            <div className="hidden md:flex gap-x-4 md:gap-x-[20px] items-center">
              <Link href="/contact">
                <div className="text-[#636973] text-[12px] lg:text-[14px] hover:text-deep flex items-center gap-[1px]">
                  البرامج السياحية
                  <span className="text-orange border-solid border-[0.7px] rounded border-orange py-[4px] px-[10px] flex items-center justify-center h-[12px] w-[20px] text-[6px] font-bold-600">
                    جديد
                  </span>
                </div>
              </Link>
              <Link href="/services">
                <div className="text-[#636973] text-[12px] lg:text-[14px] hover:text-deep flex items-center">
                  الخدمات
                  <Image
                    alt="/"
                    src="/icons/navbar/down.svg"
                    height={24}
                    width={24}
                  />
                </div>
              </Link>
              <Link href="/services">
                <div className="text-[#636973] text-[12px] lg:text-[14px] hover:text-deep flex items-center">
                  المدونة
                  <Image
                    alt="/"
                    src="/icons/navbar/down.svg"
                    height={24}
                    width={24}
                  />
                </div>
              </Link>
              <Link href="/services">
                <div className="text-[#636973] text-[12px] lg:text-[14px] hover:text-deep flex items-center">
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

            {/* search box and contact */}
            <div className="hidden md:flex gap-x-2 items-center h-[48px] bg-white rounded-[40px] border border-[#C8CBD0] py-[12px] px-[6px] lg:pt-[10x] lg:px-[10px] lg:pr-[16px]">
              <input
                type="text"
                className="border-0 outline-none bg-transparent flex-1 text-[12px] lg:text-[16px]"
                placeholder="إلى أين تريد أن تذهب؟"
              />
              <div className="flex justify-center items-center bg-orange p-[8px] w-[28px] h-[28px] rounded-full">
                <Image
                  src="/icons/search-white.svg"
                  alt="/"
                  height={24}
                  width={24}
                />
              </div>
            </div>
          </div>
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
              <Link href="/contact">
                <div className="text-[#636973] text-[13px] hover:text-deep ">
                  تواصل معنا
                </div>
              </Link>
              <Link href="/contact">
                <div className="text-[#636973] text-[13px] hover:text-deep ">
                  تسجيل حساب جديد
                </div>
              </Link>
              <Link href="/contact">
                <button className="outline-none text-[12px] text-orange py-[5px] px-[12px] border border-orange rounded-[40px] hover:bg-orange hover:text-white duration-300 ease-out">
                  تسجيل الدخول
                </button>
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
