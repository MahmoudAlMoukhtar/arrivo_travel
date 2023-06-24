import Image from "next/image";
import Link from "next/link";
import React, {useState} from "react";
import SearchAndContact from "./NavbarHelpers/SearchAndContact";
import Menu from "./NavbarHelpers/Menu";
import Logo from "./NavbarHelpers/Logo";
import {motion} from "framer-motion";

const Navbar = ({openModal, slideIn, closeModal}) => {
  const [searchDrop, setSearchDrop] = useState(false);
  const [menuDrop, setMenuDrop] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

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

  const animateVariants = {
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
          <Menu
            setShowDropdown={setShowDropdown}
            handleShowDropdown={handleShowDropdown}
            showDropdown={showDropdown}
          />
          {/* search box and contact */}
          <SearchAndContact />
          <div className="hidden md:flex">
            <Link href="/contact-us">
              <button className="outline-none text-[12px] text-orange py-[12px] px-[20px] border border-orange rounded-[8px] hover:bg-orange hover:text-white duration-300 ease-out">
                تواصل معنا
              </button>
            </Link>
          </div>

          {/* mobile buttons */}
          <div className="md:hidden flex gap-x-6">
            {searchDrop ? (
              <button
                onClick={() => toggleSearch()}
                className="oytline-none flex items-center justify-center"
              >
                <Image
                  src="/icons/navbar/Small/Icon.jpg"
                  alt="/"
                  height={24}
                  width={24}
                />
              </button>
            ) : (
              <button
                onClick={() => toggleSearch()}
                className="oytline-none flex items-center justify-center"
              >
                <Image src="/icons/search.svg" alt="/" height={24} width={24} />
              </button>
            )}
            {menuDrop ? (
              <button
                onClick={() => {
                  //openModal();
                  toggleMenu();
                }}
                className="oytline-none flex items-center justify-center"
              >
                <Image
                  src="/icons/navbar/Small/Icon.jpg"
                  alt="/"
                  height={24}
                  width={24}
                />
              </button>
            ) : (
              <button
                onClick={() => {
                  //openModal();
                  toggleMenu();
                }}
                className="oytline-none flex items-center justify-center"
              >
                <Image src="/icons/menu.svg" alt="/" height={24} width={24} />
              </button>
            )}
          </div>
        </nav>
        {/* menu drop */}
        {menuDrop && (
          <motion.div
            variants={animateVariants}
            initial="hidden"
            animate="show"
            className="mb-3"
          >
            <div className="flex flex-col gap-y-[16.5px] gap-x-2 md:gap-x-[20px] justify-between items-start md:hidden h-full">
              <Link href="/travels-programs?type=programs">
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
                </div>
              </button>
              <Link href="/services">
                <div className="text-[#636973] text-[12px] xl:text-[14px] hover:text-deep flex items-center">
                  المدونة
                </div>
              </Link>
              <Link href="/about-us">
                <div className="text-[#636973] text-[12px] xl:text-[14px] hover:text-deep flex items-center">
                  من نحن
                </div>
              </Link>
              <Link href="/contact-us" className="w-full">
                <button className="outline-none text-[12px] text-orange py-[12px] px-[20px] border border-orange rounded-[8px] hover:bg-orange hover:text-white duration-300 ease-out w-full">
                  تواصل معنا
                </button>
              </Link>
            </div>
          </motion.div>
        )}

        {/* search drop */}
        {searchDrop && (
          <motion.div
            variants={animateVariants}
            initial="hidden"
            animate="show"
            className="mb-3"
          >
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
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Navbar;

/* 

{menuDrop && (
          <div className="mb-3">
            <div className="flex flex-col gap-y-[16.5px] gap-x-2 md:gap-x-[20px] justify-between items-start md:hidden h-full">
              <Link href="/travels-programs?type=programs">
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
                </div>
              </button>
              <Link href="/services">
                <div className="text-[#636973] text-[12px] xl:text-[14px] hover:text-deep flex items-center">
                  المدونة
                </div>
              </Link>
              <Link href="/about-us">
                <div className="text-[#636973] text-[12px] xl:text-[14px] hover:text-deep flex items-center">
                  من نحن
                </div>
              </Link>
              <Link href="/contact" className="w-full">
                <button className="outline-none text-[12px] text-orange py-[12px] px-[20px] border border-orange rounded-[8px] hover:bg-orange hover:text-white duration-300 ease-out w-full">
                  تواصل معنا
                </button>
              </Link>
            </div>
          </div>
        )}
*/
/* 
  // const containerVariants = {
  //   hidden: {opacity: 0.8},
  //   show: {
  //     opacity: 1,
  //     transition: {
  //       delayChildren: 0.6,
  //       staggerChildren: 0.5,
  //       duration: 0.2,
  //     },
  //   },
  // };

*/
