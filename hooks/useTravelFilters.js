import {useState, useEffect} from "react";

const useTravelFilters = (filters, data) => {
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    let filtered = data;

    if (filters.longTimeTravel !== undefined) {
      filtered = filtered.filter(
        item => item.longTimeTravel === filters.longTimeTravel
      );
    }

    if (filters.numberPersons !== undefined) {
      filtered = filtered.filter(
        item => item.numberPersons === filters.numberPersons
      );
    }

    if (filters.priceRange !== undefined) {
      filtered = filtered.filter(
        item =>
          item.price >= filters.priceRange[0] &&
          item.price <= filters.priceRange[1]
      );
    }

    if (filters.typeTravel !== undefined) {
      filtered = filtered.filter(
        item => item.typeTravel === filters.typeTravel
      );
    }

    setFilteredData(filtered);
  }, [filters, data]);

  return filteredData;
};

export default useTravelFilters;
