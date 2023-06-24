import {useEffect, useState} from "react";

const useTravelFilters = (filters, data) => {
  const [filteredWithType, setFilteredWithType] = useState([]);
  const [filteredWithoutType, setFilteredWithoutType] = useState([]);

  useEffect(() => {
    let filtered = data;
    let filteredNoType = data;

    if (filters.days !== undefined) {
      filtered = filtered.filter(item => item.longTimeTravel <= filters.days);
      filteredNoType = filteredNoType.filter(
        item => item.longTimeTravel <= filters.days
      );
    }

    if (filters.numberPersons !== undefined) {
      filtered = filtered.filter(
        item =>
          item.persons.from >= filters.numberPersons.minSize &&
          item.persons.to <= filters.numberPersons.maxSize
      );
      filteredNoType = filteredNoType.filter(
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
      filteredNoType = filteredNoType.filter(
        item =>
          item.price >= filters.priceRange.minPrice &&
          item.price <= filters.priceRange.maxPrice
      );
    }

    if (filters.typeTravel !== undefined) {
      filtered = filtered.filter(item => item.subType === filters.typeTravel);
    }
    if (filters.mainType !== undefined) {
      filtered = filtered.filter(item => item.mainType === filters.mainType);
    }

    if (filters.country !== undefined) {
      filtered = filtered.filter(item => item.country === filters.country);
      filteredNoType = filteredNoType.filter(
        item => item.country === filters.country
      );
    }

    setFilteredWithType(filtered);
    setFilteredWithoutType(filteredNoType);
  }, [filters, data]);

  return {filteredWithType, filteredWithoutType};
};
export default useTravelFilters;
