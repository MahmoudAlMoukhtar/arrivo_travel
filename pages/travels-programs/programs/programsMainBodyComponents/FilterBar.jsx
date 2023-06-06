import {useEffect, useRef, useState} from "react";

const FilterBar = ({filters, setFilters}) => {
  const [days, setDays] = useState(20);
  const [typiesChecked, setTypiesChecked] = useState({
    privait: false,
    groub: false,
    withDriver: false,
  });
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(3500);
  const [minSize, setMinSize] = useState(0);
  const [maxSize, setMaxSize] = useState(0);

  const filtersRef = useRef(null);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (
        filtersRef.current &&
        filtersRef.current.offsetTop <= window.pageYOffset
      ) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
      setIsSticky(true);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleChecked = e => {
    setTypiesChecked({
      ...typiesChecked,
      [e.target.id]: true,
    });
  };

  const handleDaysChange = event => {
    setDays(event.target.value);
    setFilters({...filters, days: parseInt(event.target.value)});
  };
  const handleMaxPriceChange = event => {
    setMaxPrice(event.target.value);
    setFilters({
      ...filters,
      priceRange: {
        ...filters.priceRange,
        maxPrice: parseInt(event.target.value),
      },
    });
  };
  const handleMinPriceChange = event => {
    setMinPrice(event.target.value);
    setFilters({
      ...filters,
      priceRange: {
        ...filters.priceRange,
        minPrice: parseInt(event.target.value),
      },
    });
  };
  const handleMaxSizeChange = event => {
    setMaxSize(event.target.value);
    setFilters({
      ...filters,
      numberPersons: {
        ...filters.numberPersons,
        maxSize: parseInt(event.target.value),
      },
    });
  };
  const handleMinSizeChange = event => {
    setMinSize(event.target.value);
    setFilters({
      ...filters,
      numberPersons: {
        ...filters.numberPersons,
        minSize: parseInt(event.target.value),
      },
    });
  };
  return (
    <div
      className="flex flex-col gap-[20px] sticky top-0 left-0 sm:static bg-[#fff] z-[9999]"
      ref={filtersRef}
    >
      <h4 className="text-[20px] font-bold">بحث متقدم</h4>
      <section id="filters" className="flex flex-col gap-[24px]">
        <div id="filterTime" className="flex flex-col gap-[40px]">
          <h5 className="text-[18px] text-[#344054] font-bold">مدة الرحلة</h5>
          <div className="flex flex-col gap-[20px]">
            <input
              type="range"
              className="bg-[#d6d9df] appearance-none w-full outline-none h-[4px]"
              min={1}
              max={20}
              value={days}
              onChange={handleDaysChange}
              style={{
                background: `linear-gradient(to left, #F08631 ${
                  (days / 20) * 100
                }%, #d6d9df ${(days / 20) * 100}% 100%) no-repeat`,
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
                value={days}
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
                    checked={typiesChecked.groub}
                    id="groub"
                    className={`w-[16px] h-[16px] border-[1px] border-[#98A2B3] rounded-[50%] ${
                      typiesChecked.groub && "border-[4px] border-[#F08631]"
                    }`}
                    onClick={() =>
                      setTypiesChecked({
                        ...typiesChecked,
                        groub: !typiesChecked.groub,
                      })
                    }
                  />
                  <label className="text-[12px]">رحلة جماعية</label>
                </div>
                <span className="text-[12px]">210</span>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-[12px]">
                  <button
                    checked={typiesChecked.privait}
                    id="privait"
                    onClick={() =>
                      setTypiesChecked({
                        ...typiesChecked,
                        privait: !typiesChecked.privait,
                      })
                    }
                    className={`w-[16px] h-[16px] border-[1px] border-[#98A2B3] rounded-[50%] ${
                      typiesChecked.privait && "border-[4px] border-[#F08631]"
                    }`}
                  />
                  <label className="text-[12px]">رحلة خاصة</label>
                </div>
                <span className="text-[12px]">145</span>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-[12px]">
                  <button
                    checked={typiesChecked.withDriver}
                    id="withDriver"
                    className={`w-[16px] h-[16px] border-[1px] border-[#98A2B3] rounded-[50%] ${
                      typiesChecked.withDriver &&
                      "border-[4px] border-[#F08631]"
                    }`}
                    onClick={() =>
                      setTypiesChecked({
                        ...typiesChecked,
                        withDriver: !typiesChecked.withDriver,
                      })
                    }
                  />
                  <label className="text-[12px]">رحلة مع سائق</label>
                </div>
                <span className="text-[12px]">120</span>
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
                value={minPrice}
                onChange={handleMinPriceChange}
                style={{
                  background: `linear-gradient(to left, #d6d9df ${
                    ((minPrice - 1000) / (3500 - 1000)) * 100
                  }%, #F08631 ${
                    ((minPrice - 1000) / (3500 - 1000)) * 100
                  }% 100%) no-repeat`,
                  backgroundSize: "100% 100%",
                }}
              />
              <input
                type="range"
                className="bg-[#d6d9df] appearance-none w-full outline-none h-[4px]"
                min={3500}
                max={5000}
                value={maxPrice}
                onChange={handleMaxPriceChange}
                style={{
                  background: `linear-gradient(to left, #F08631 ${
                    ((maxPrice - 3500) / (5000 - 3500)) * 100
                  }%, #d6d9df ${
                    ((maxPrice - 3500) / (5000 - 3500)) * 100
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
              <input
                type="number"
                className="p-[14px] rounded-[8px] text-[12px] text-[#344054] border-[1px] border-[#98A2B3]"
                placeholder="10"
                onChange={e => {
                  if (e.target.value >= 0) {
                    handleMinPriceChange(e);
                  }
                }}
                value={minPrice}
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
                    handleMaxPriceChange(e);
                  }
                }}
                value={maxPrice}
              />
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
                value={minSize}
                onChange={handleMinSizeChange}
                style={{
                  background: `linear-gradient(to left, #d6d9df ${
                    ((minSize - 1) / (4 - 1)) * 100
                  }%, #F08631 ${
                    ((minSize - 1) / (4 - 1)) * 100
                  }% 100%) no-repeat`,
                  backgroundSize: "100% 100%",
                }}
              />
              <input
                type="range"
                className="bg-[#d6d9df] appearance-none w-full outline-none h-[4px]"
                min={4}
                max={7}
                value={maxSize}
                onChange={handleMaxSizeChange}
                style={{
                  background: `linear-gradient(to left, #F08631 ${
                    ((maxSize - 4) / (7 - 4)) * 100
                  }%, #d6d9df ${
                    ((maxSize - 4) / (7 - 4)) * 100
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
                value={minSize}
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
                value={maxSize}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default FilterBar;
