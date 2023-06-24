import {useState} from "react";

const FilterBar = ({filteredWithoutType, filters, setFilters, closeModal}) => {
  const [activeFilter, setActiveFilter] = useState("");
  // add a guard clause to check if the filters object exists
  if (!filters) {
    return null;
  }

  const handleFilterChange = type => {
    setActiveFilter(type);
    // update filters using setFilters function
    setFilters(prevFilters => ({...prevFilters, typeTravel: type}));
  };
  const handleDaysChange = event => {
    setFilters({...filters, days: parseInt(event.target.value)});
  };
  const handleMaxPriceChange = event => {
    setFilters({
      ...filters,
      priceRange: {
        ...filters.priceRange,
        maxPrice: parseInt(event.target.value),
      },
    });
  };
  const handleMinPriceChange = event => {
    setFilters({
      ...filters,
      priceRange: {
        ...filters.priceRange,
        minPrice: parseInt(event.target.value),
      },
    });
  };
  const handleMaxSizeChange = event => {
    setFilters({
      ...filters,
      numberPersons: {
        ...filters.numberPersons,
        maxSize: parseInt(event.target.value),
      },
    });
  };
  const handleMinSizeChange = event => {
    setFilters({
      ...filters,
      numberPersons: {
        ...filters.numberPersons,
        minSize: parseInt(event.target.value),
      },
    });
  };

  const groubTripsCount = filteredWithoutType.filter(
    t => t.subType === "groub"
  ).length;
  const privaitTripsCount = filteredWithoutType.filter(
    t => t.subType === "privait"
  ).length;
  const withDriverTripsCount = filteredWithoutType.filter(
    t => t.subType === "withDriver"
  ).length;

  return (
    <div className="flex flex-col gap-[20px] sticky top-0 left-0 sm:static bg-[#fff] z-[9999]">
      <div className="flex justify-between items-center">
        <h4 className="text-[24px] sm:text-[28px] md:text-[20px] font-bold">
          بحث متقدم
        </h4>
        <button onClick={closeModal} className="block sm:hidden">
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8 24L24 8M8 8L24 24"
              stroke="black"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
      </div>

      <section id="filters" className="flex flex-col gap-[24px]">
        <div id="filterTime" className="flex flex-col gap-[40px]">
          <h5 className="text-[18px] text-[#344054] font-bold">مدة الرحلة</h5>
          <div className="flex flex-col gap-[20px]">
            <input
              type="range"
              className="bg-[#d6d9df] appearance-none w-full outline-none h-[4px]"
              min={1}
              max={20}
              value={filters.days}
              onChange={handleDaysChange}
              style={{
                background: `linear-gradient(to left, #F08631 ${
                  (filters.days / 20) * 100
                }%, #d6d9df ${(filters.days / 20) * 100}% 100%) no-repeat`,
                backgroundSize: "100% 100%",
              }}
            />
            <div className="flex justify-between items-center">
              <span className="text-[12px] text-[#344054]">يوم واحد</span>
              <span className="text-[12px] text-[#344054]">20 يوم</span>
            </div>
            <div className="flex flex-col gap-[4px]">
              <label className="text-[12px] text-[#344054]">عدد الأيام</label>
              <input
                type="number"
                className="p-[14px] rounded-[8px] text-[12px] text-[#344054] border-[1px] border-[#98A2B3]"
                placeholder="10"
                onChange={e => {
                  if (e.target.value >= 0) {
                    handleDaysChange(e);
                  }
                }}
                value={filters.days}
              />
            </div>
          </div>
        </div>
        <hr />
        <div id="filterType" className="flex flex-col gap-[20px]">
          <h5 className="text-[18px] text-[#344054] font-bold">نوع الرحلة</h5>
          <div className="flex flex-col gap-[20px]">
            <div className="flex flex-col gap-[12px]">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-[12px]">
                  <button
                    checked={activeFilter === "groub"}
                    id="groub"
                    className={`w-[16px] h-[16px] border-[1px] border-[#98A2B3] rounded-[50%] ${
                      activeFilter === "groub" &&
                      "border-[4px] border-[#F08631]"
                    }`}
                    onClick={() => handleFilterChange("groub")}
                  />
                  <label className="text-[12px]">رحلة جماعية</label>
                </div>
                <span className="text-[12px]">{groubTripsCount}</span>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-[12px]">
                  <button
                    checked={activeFilter === "privait"}
                    id="privait"
                    onClick={() => handleFilterChange("privait")}
                    className={`w-[16px] h-[16px] border-[1px] border-[#98A2B3] rounded-[50%] ${
                      activeFilter === "privait" &&
                      "border-[4px] border-[#F08631]"
                    }`}
                  />
                  <label className="text-[12px]">رحلة خاصة</label>
                </div>
                <span className="text-[12px]">{privaitTripsCount}</span>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-[12px]">
                  <button
                    checked={activeFilter === "withDriver"}
                    id="withDriver"
                    className={`w-[16px] h-[16px] border-[1px] border-[#98A2B3] rounded-[50%] ${
                      activeFilter === "withDriver" &&
                      "border-[4px] border-[#F08631]"
                    }`}
                    onClick={() => handleFilterChange("withDriver")}
                  />
                  <label className="text-[12px]">رحلة مع سائق</label>
                </div>
                <span className="text-[12px]">{withDriverTripsCount}</span>
              </div>
            </div>
          </div>
        </div>
        <div id="filterPrice" className="flex flex-col gap-[40px]">
          <h5 className="text-[18px] text-[#344054] font-bold">سعر الرحلة</h5>
          <div className="flex flex-col gap-[20px]">
            <div className="flex items-center">
              <input
                type="range"
                className="bg-[#d6d9df] appearance-none w-full outline-none h-[4px]"
                min={1000}
                max={3500}
                value={filters.priceRange.minPrice}
                onChange={handleMinPriceChange}
                style={{
                  background: `linear-gradient(to left, #d6d9df ${
                    ((filters.priceRange.minPrice - 1000) / (3500 - 1000)) * 100
                  }%, #F08631 ${
                    ((filters.priceRange.minPrice - 1000) / (3500 - 1000)) * 100
                  }% 100%) no-repeat`,
                  backgroundSize: "100% 100%",
                }}
              />
              <input
                type="range"
                className="bg-[#d6d9df] appearance-none w-full outline-none h-[4px]"
                min={3500}
                max={5000}
                value={filters.priceRange.maxPrice}
                onChange={handleMaxPriceChange}
                style={{
                  background: `linear-gradient(to left, #F08631 ${
                    ((filters.priceRange.maxPrice - 3500) / (5000 - 3500)) * 100
                  }%, #d6d9df ${
                    ((filters.priceRange.maxPrice - 3500) / (5000 - 3500)) * 100
                  }% 100%) no-repeat`,
                  backgroundSize: "100% 100%",
                }}
              />
            </div>
            <div className="flex justify-between items-center">
              <span className="text-[12px] text-[#344054]">1000</span>
              <span className="text-[12px] text-[#344054]">5000</span>
            </div>
            <div className="flex flex-col gap-[4px]">
              <label className="text-[12px] text-[#344054]">يبدأ من</label>
              <div
                className={`flex gap-x-2 justify-between items-center h-[48px] bg-white text-[#344054] p-[14px]  rounded-[8px] border-[1px] border-[#98A2B3] relative text-[12px] `}
              >
                <input
                  type="number"
                  className=" py-[14px] w-full appearance-none  outline-none"
                  placeholder="10"
                  onChange={e => {
                    if (e.target.value >= 0) {
                      handleMinPriceChange(e);
                    }
                  }}
                  value={filters.priceRange.minPrice}
                />
                <span>$</span>
              </div>
            </div>
            <div className="flex flex-col gap-[4px]">
              <label className="text-[12px] text-[#344054]">إلى</label>
              <div
                className={`flex gap-x-2 justify-between items-center h-[48px] bg-white text-[#344054] p-[14px]  rounded-[8px] border-[1px] border-[#98A2B3] relative text-[12px] `}
              >
                <input
                  type="number"
                  className=" py-[14px] w-full appearance-none  outline-none"
                  placeholder="10"
                  onChange={e => {
                    if (e.target.value >= 0) {
                      handleMaxPriceChange(e);
                    }
                  }}
                  value={filters.priceRange.maxPrice}
                />
                <span>$</span>
              </div>
            </div>
          </div>
        </div>
        <div id="filterSize" className="flex flex-col gap-[40px]">
          <h5 className="text-[18px] text-[#344054] font-bold">حجم الرحلة</h5>
          <div className="flex flex-col gap-[20px]">
            <div className="flex items-center">
              <input
                type="range"
                className="bg-[#d6d9df] appearance-none w-full outline-none h-[4px]"
                min={1}
                max={4}
                value={filters.numberPersons.minSize}
                onChange={handleMinSizeChange}
                style={{
                  background: `linear-gradient(to left, #d6d9df ${
                    ((filters.numberPersons.minSize - 1) / (4 - 1)) * 100
                  }%, #F08631 ${
                    ((filters.numberPersons.minSize - 1) / (4 - 1)) * 100
                  }% 100%) no-repeat`,
                  backgroundSize: "100% 100%",
                }}
              />
              <input
                type="range"
                className="bg-[#d6d9df] appearance-none w-full outline-none h-[4px]"
                min={4}
                max={7}
                value={filters.numberPersons.maxSize}
                onChange={handleMaxSizeChange}
                style={{
                  background: `linear-gradient(to left, #F08631 ${
                    ((filters.numberPersons.maxSize - 4) / (7 - 4)) * 100
                  }%, #d6d9df ${
                    ((filters.numberPersons.maxSize - 4) / (7 - 4)) * 100
                  }% 100%) no-repeat`,
                  backgroundSize: "100% 100%",
                }}
              />
            </div>
            <div className="flex justify-between items-center">
              <span className="text-[12px] text-[#344054]">شخصين</span>
              <span className="text-[12px] text-[#344054]">07 أشخاص</span>
            </div>
            <div className="flex flex-col gap-[4px]">
              <label className="text-[12px] text-[#344054]">يبدأ من</label>
              <input
                type="number"
                className="p-[14px] rounded-[8px] text-[12px] text-[#344054] border-[1px] border-[#98A2B3]"
                placeholder="10"
                min={1}
                max={4}
                onChange={e => {
                  if (e.target.value >= 0) {
                    handleMinSizeChange(e);
                  }
                }}
                value={filters.numberPersons.minSize}
              />
            </div>
            <div className="flex flex-col gap-[4px]">
              <label className="text-[12px] text-[#344054]">إلى</label>
              <input
                type="number"
                className="p-[14px] rounded-[8px] text-[12px] text-[#344054] border-[1px] border-[#98A2B3]"
                placeholder="10"
                onChange={e => {
                  if (e.target.value >= 0) {
                    handleMaxSizeChange(e);
                  }
                }}
                value={filters.numberPersons.maxSize}
              />
            </div>
          </div>
        </div>
        <button
          onClick={closeModal}
          className="bg-[#F08631] py-[14px] px-[20px] rounded-[8px] text-white w-full sm:hidden"
        >
          تطبيق
        </button>
      </section>
    </div>
  );
};
export default FilterBar;
