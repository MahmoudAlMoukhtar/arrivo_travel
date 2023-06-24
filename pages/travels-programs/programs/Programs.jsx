import BlogShort from "../../../components/BlogShort";
import ContactShort from "../../../components/ContactShort";
import ProgramsBanner from "./ProgramsBanner";
import ProgramsMainBody from "./ProgramsMainBody";
import typiesdata from "../programsdata.json";
import {useRouter} from "next/router";
import ReactModal from "react-modal";
import FilterBar from "./programsMainBodyComponents/FilterBar";
import {useEffect, useState} from "react";
import useTravelFilters from "../../../hooks/useTravelFilters";
const Programs = ({data, openModal, modalIsOpen, closeModal, slideIn}) => {
  const router = useRouter();
  const {type, country} = router.query;
  const selectedType = typiesdata.find(t => t.slug === type);
  const [filters, setFilters] = useState({
    days: 20,
    numberPersons: {maxSize: 7, minSize: 1},
    priceRange: {maxPrice: 5000, minPrice: 1000},
    country: country,
    typeTravel: undefined,
    mainType: type,
  });

  const {filteredWithType, filteredWithoutType} = useTravelFilters(
    filters,
    data
  );
  useEffect(() => {
    setFilters({...filters, country});
  }, [country]);
  const customStyles = {
    content: {
      bottom: "0",
      left: "50%",
      right: "auto",
      top: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, 0)",
      width: "100%",
      height: "80%",
      backgroundColor: "#fff",
      zIndex: 999999,
      position: "fixed",
      borderRadius: "24px 24px 0px 0px",
      animationName: slideIn ? "slide-in" : "slide-out",
      animationDuration: "0.5s",
      animationFillMode: "both",
    },
    overlay: {
      zIndex: 88888,
      position: "fixed",
      backgroundColor: "rgba(0, 0, 0, 0.5)",
    },
  };
  const slideOut = {
    animationName: "slide-out",
    animationDuration: "0.5s",
    animationFillMode: "both",
  };
  if (!selectedType) {
    return <div></div>;
  }
  return (
    <div id="" className="flex flex-col">
      <ProgramsBanner selectedType={selectedType} country={country} />
      <ProgramsMainBody
        openModal={openModal}
        filteredWithType={filteredWithType}
        filteredWithoutType={filteredWithoutType}
        filters={filters}
        setFilters={setFilters}
      />
      <BlogShort />
      <ContactShort />

      <ReactModal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
        style={customStyles}
      >
        <div className="flex flex-col gap-[40px] ">
          {/* Add null checks for filteredWithType and filteredWithoutType */}
          {filteredWithType && filteredWithoutType && (
            <FilterBar
              closeModal={closeModal}
              filteredWithType={filteredWithType}
              filteredWithoutType={filteredWithoutType}
              filters={filters}
              setFilters={setFilters}
            />
          )}
        </div>
      </ReactModal>
    </div>
  );
};

export default Programs;
