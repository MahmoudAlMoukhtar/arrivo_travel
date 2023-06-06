import BreadCrumb from "../../../components/BreadCrumb";
import {useState} from "react";
import useTravelFilters from "../../../hooks/useTravelFilters";
import FilterBar from "./programsMainBodyComponents/FilterBar";
import PaginationPrograms from "./programsMainBodyComponents/PaginationPrograms";
import BlogShort from "../../../components/BlogShort";

const ProgramsMainBody = ({data}) => {
  const [filters, setFilters] = useState({
    days: 20,
    numberPersons: {maxSize: 7, minSize: 1},
    priceRange: {maxPrice: 5000, minPrice: 1000},
    typeTravel: undefined,
  });
  const [showFilters, setShowFilters] = useState(true);
  const filteredData = useTravelFilters(filters, data);

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
        {showFilters && (
          <FilterBar
            filters={filters}
            setFilters={setFilters}
            showFilters={showFilters}
            setShowFilters={setShowFilters}
          />
        )}
      </div>
      <div className="col-span-12 md:col-span-8 xl:col-span-9">
        <PaginationPrograms
          data={filteredData}
          showFilters={showFilters}
          setShowFilters={setShowFilters}
        />
      </div>
    </div>
  );
};

export default ProgramsMainBody;
