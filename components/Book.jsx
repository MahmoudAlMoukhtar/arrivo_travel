import Image from "next/image";
import React, {useState} from "react";
import {motion} from "framer-motion";

const items = [
  {icon: "searches/rings.svg", title: "شهر عسل"},
  {icon: "searches/car.svg", title: "رحلات عائلية"},
  {icon: "searches/world.svg", title: "رحلات فردية"},
  {icon: "searches/mintad.svg", title: "أنشطة و مغامرات"},
  {icon: "searches/khima.svg", title: "تخييم"},
];

const animateVariants = {
  hidden: {
    opacity: 0,
    y: -20,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.4,
      duration: 0.8,
    },
  },
};

const Book = () => {
  const [selectColor, setSelectColor] = useState({
    city: "#A0A4AB",
    persons: "#A0A4AB",
  });

  const setColor = e => {
    setSelectColor(selectColor => ({
      ...selectColor,
      [e.target.name]: e.target.value === "" ? "#A0A4AB" : "#000",
    }));
  };

  return (
    <div className="py-[80px]">
      <div className="wrapper">
        <div className="flex flex-col gap-[28px] md:max-w-[897px] md:mx-auto">
          {/* first box */}
          <motion.div
            variants={animateVariants}
            initial="hidden"
            whileInView="show"
            className="p-[16px] shadow-md rounded-lg"
          >
            <div className="flex flex-col md:flex-row gap-[20px]">
              <div className="flex-1 flex flex-col gap-[8px] md:gap-[13px] h-[68px]">
                <h6 className="text-[14px]">إختر المدينة</h6>
                <div className="flex group">
                  <Image
                    alt=""
                    src="/icons/book/geo.svg"
                    height={20}
                    width={20}
                  />
                  <select
                    name="city"
                    onChange={e => setColor(e)}
                    className={`flex-1 appearance-none outline-none p-2 text-[12px] text-[#98A2B3]`}
                  >
                    <option value="" className="text-[#98A2B3]">
                      المدينة
                    </option>
                    <option value="1" className="text-[#98A2B3]">
                      طرابزون
                    </option>
                    <option value="1" className="text-[#98A2B3]">
                      ريزا
                    </option>
                    <option value="1" className="text-[#98A2B3]">
                      اسطنبول
                    </option>
                  </select>
                  <Image
                    alt=""
                    src="/icons/book/select.svg"
                    height={16}
                    width={16}
                    className="transform transition-transform duration-200 group-active:rotate-[-90deg]"
                  />
                </div>
              </div>
              <div className="flex-1 flex flex-col gap-[8px] md:gap-[13px] h-[68px]">
                <h6 className="text-[14px]">إختر عدد الأشخاص</h6>
                <div className="flex group">
                  <Image
                    alt=""
                    src="/icons/book/profile.svg"
                    height={20}
                    width={20}
                  />
                  <select
                    name="persons"
                    onChange={e => setColor(e)}
                    className={`flex-1 appearance-none outline-none p-2 text-[12px] text-[#98A2B3]`}
                  >
                    <option value="" className="text-[#98A2B3]">
                      عدد الأشخاص
                    </option>
                    <option value="1" className="text-[#98A2B3]">
                      1
                    </option>
                    <option value="2" className="text-[#98A2B3]">
                      2
                    </option>
                    <option value="3" className="text-[#98A2B3]">
                      3
                    </option>
                    <option value="4" className="text-[#98A2B3]">
                      4
                    </option>
                  </select>
                  <Image
                    alt=""
                    src="/icons/book/select.svg"
                    height={16}
                    width={16}
                    className="transform transition-transform duration-200 group-active:rotate-[-90deg]"
                  />
                </div>
              </div>

              <button className="flex-1 text-white flex py-[24px] px-[20px] gap-[4px] items-center justify-center h-[68px] rounded-[8px] bg-orange hover:bg-[#D45C00] transtion duration-200">
                <Image
                  alt=""
                  src="/icons/book/calendar-white.svg"
                  height={24}
                  width={24}
                />
                <span className="text-[16px] font-bold-500">إحجز مكانك</span>
              </button>
            </div>
          </motion.div>

          {/* common searches */}
          <div className="flex flex-col gap-[8px]">
            <h6 className="text-[16px] text-center">عمليات البحث الشائعة :</h6>
            <div className="flex flex-wrap gap-[20px] justify-center">
              {items.map((item, i) => (
                <SearchedItem key={i} item={item} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Book;

const SearchedItem = ({item}) => {
  const {title, icon} = item;
  return (
    <div className="py-[8px] px-[20px] bg-[#F5F8FB] flex gap-x-[8px] items-center rounded-[8px] cursor-pointer hover:bg-primary/20">
      <Image alt="" src={`/icons/book/${icon}`} height={32} width={32} />
      <p className="text-[12px] font-bold-500 text-[#3E444D]">{title}</p>
    </div>
  );
};
