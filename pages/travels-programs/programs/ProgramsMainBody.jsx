import BreadCrumb from "../../../components/BreadCrumb";
import {useEffect, useState} from "react";
import useTravelFilters from "../../../hooks/useTravelFilters";
import FilterBar from "./programsMainBodyComponents/FilterBar";
import PaginationPrograms from "./programsMainBodyComponents/PaginationPrograms";
import BlogShort from "../../../components/BlogShort";

const ProgramsMainBody = ({
  openModal,
  filteredWithType,
  filteredWithoutType,
  filters,
  setFilters,
}) => {
  const [shouldRenderMobileView, setShouldRenderMobileView] = useState(false);

  useEffect(() => {
    function handleResize() {
      const isScreenSizeBelowBreakpoint = window.innerWidth < 640;
      setShouldRenderMobileView(isScreenSizeBelowBreakpoint);
    }
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const breadcrumbs = [
    {name: "الرئيسية", path: "/"},
    {
      name: "البرامج السياحية",
      path: "/travels-programs/program/timings-prices",
    },
  ];
  return (
    <div className="px-[20px] sm:wrapper grid grid-cols-12 gap-4 translate-y-[-100px]">
      <div className="flex flex-col gap-[40px] col-span-12 md:col-span-4 xl:col-span-3">
        <BreadCrumb breadcrumbs={breadcrumbs} />
        {!shouldRenderMobileView && (
          <FilterBar
            filters={filters}
            setFilters={setFilters}
            filteredWithType={filteredWithType}
            filteredWithoutType={filteredWithoutType}
          />
        )}
      </div>
      <div className="col-span-12 md:col-span-8 xl:col-span-9">
        <PaginationPrograms data={filteredWithType} openModal={openModal} />
      </div>
    </div>
  );
};

export default ProgramsMainBody;
