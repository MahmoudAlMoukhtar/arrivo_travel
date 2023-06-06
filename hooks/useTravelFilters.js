import {useState, useEffect} from "react";

const useTravelFilters = (filters, data) => {
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    let filtered = data;

    if (filters.days !== undefined) {
      filtered = filtered.filter(item => item.longTimeTravel <= filters.days);
    }

    if (filters.numberPersons !== undefined) {
      filtered = filtered.filter(
        item =>
          item.persons.from >= filters.numberPersons.minSize &&
          item.persons.to <= filters.numberPersons.maxSize
      );
    }

    if (filters.priceRange !== undefined) {
      filtered = filtered.filter(
        item =>
          item.price >= filters.priceRange.minPrice &&
          item.price <= filters.priceRange.maxPrice
      );
    }

    if (filters.typeTravel !== undefined) {
      filtered = filtered.filter(item => item.typeTravel == filters.typeTravel);
    }

    setFilteredData(filtered);
  }, [filters, data]);

  return filteredData;
};

export default useTravelFilters;
