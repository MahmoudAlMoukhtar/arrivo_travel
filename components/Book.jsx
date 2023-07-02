import Image from "next/image";
import {useRouter} from "next/router";
import React, {useState} from "react";
import Select from "react-select";
import {motion} from "framer-motion";
const items = [
  {icon: "searches/rings.svg", title: "شهر عسل"},
  {icon: "searches/car.svg", title: "رحلات عائلية"},
  {icon: "searches/world.svg", title: "رحلات فردية"},
  {icon: "searches/mintad.svg", title: "أنشطة و مغامرات"},
  {icon: "searches/khima.svg", title: "تخييم"},
];

const options = [
  {value: "1", label: "1"},
  {value: "2", label: "2"},
  {value: "3", label: "3"},
  {value: "4", label: "4"},
  {value: "5", label: "5"},
  {value: "6", label: "6"},
  {value: "7", label: "7"},
];

const optionsCountries = [
  {value: "trabzaon", label: "طرابزون"},
  {value: "rize", label: "ريزا"},
  {value: "anadolu", label: "اناضول"},
  {value: "ege-deniz", label: "دينيز"},
  {value: "istanbul", label: "اسطنبول"},
];

const SearchedItem = ({item}) => {
  const {title, icon} = item;
  return (
    <div className="py-[8px] px-[20px] bg-[#F5F8FB] flex gap-x-[8px] items-center rounded-[8px] cursor-pointer hover:bg-primary/20">
      <Image alt="" src={`/icons/book/${icon}`} height={32} width={32} />
      <p className="text-[12px] font-bold-500 text-[#3E444D]">{title}</p>
    </div>
  );
};

const Book = () => {
  const router = useRouter();
  const [selectColor, setSelectColor] = useState({
    city: "#A0A4AB",
    persons: "#A0A4AB",
  });
  const [selectedOption, setSelectedOption] = useState();
  const [selectedOptionCountries, setSelectedOptionCountries] = useState();
  const setColor = e => {
    setSelectColor(selectColor => ({
      ...selectColor,
      [e.target.name]: e.target.value === "" ? "#A0A4AB" : "#000",
    }));
  };
  const variants = {
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 20,
        duration: 0.5,
      },
    },
    hidden: {
      opacity: 0,
      scale: 0.5,
    },
  };

  return (
    <div className="py-[80px]">
      <div className="wrapper">
        <div className="flex flex-col gap-[28px] md:max-w-[897px] md:mx-auto">
          {/* first box */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={variants}
            className="p-[16px] shadow-md rounded-lg animate__animated animate__zoomIn"
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
                  <Select
                    placeholder="المدينة"
                    defaultValue={1}
                    onChange={setSelectedOptionCountries}
                    options={optionsCountries}
                    className="w-full"
                    styles={{
                      control: (baseStyles, state) => ({
                        ...baseStyles,
                        border: state.isFocused ? "0px" : "0px",
                        cursor: "pointer",
                      }),
                      placeholder: baseStyles => ({
                        ...baseStyles,
                        fontSize: "12px", // Change this to the desired font size
                      }),
                      option: (baseStyles, state) => ({
                        ...baseStyles,
                        color: state.isSelected ? "black" : "black",
                        fontSize: "12px", // Change this to the desired font size
                        cursor: "pointer",
                      }),
                      dropdownIndicator: provided => ({
                        ...provided,
                        color: "#F08631",
                      }),
                    }}
                    theme={theme => ({
                      ...theme,
                      borderRadius: 0,
                      border: 0,
                      colors: {
                        ...theme.colors,
                        primary25: "#F08631",
                        primary: "transpert",
                      },
                    })}
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
                  <Select
                    placeholder="عدد الأشخاص"
                    defaultValue={1}
                    onChange={setSelectedOption}
                    options={options}
                    className="w-full"
                    styles={{
                      control: (baseStyles, state) => ({
                        ...baseStyles,
                        border: state.isFocused ? "0px" : "0px",
                        cursor: "pointer",
                      }),
                      placeholder: baseStyles => ({
                        ...baseStyles,
                        fontSize: "12px", // Change this to the desired font size
                      }),
                      option: (baseStyles, state) => ({
                        ...baseStyles,
                        color: state.isSelected ? "black" : "black",
                        fontSize: "12px", // Change this to the desired font size
                        cursor: "pointer",
                      }),
                      dropdownIndicator: provided => ({
                        ...provided,
                        color: "#F08631",
                      }),
                    }}
                    theme={theme => ({
                      ...theme,
                      borderRadius: 0,
                      border: 0,
                      colors: {
                        ...theme.colors,
                        primary25: "#F08631",
                        primary: "transpert",
                      },
                    })}
                  />
                </div>
              </div>

              <button
                onClick={() => {
                  if (selectedOptionCountries && selectedOption) {
                    router.push(
                      `travels-programs?type=programs&country=${selectedOptionCountries.value}&minPersons=1&maxPersons=${selectedOption.value}`
                    );
                  } else {
                    router.push(`travels-programs?type=programs`);
                  }
                }}
                className="flex-1 text-white flex py-[24px] px-[20px] gap-[4px] items-center justify-center h-[68px] rounded-[8px] bg-orange hover:bg-[#D45C00] transtion duration-200"
              >
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
