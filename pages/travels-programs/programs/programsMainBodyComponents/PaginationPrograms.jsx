import {useEffect, useState} from "react";
import Tour from "./Tour";
import {motion} from "framer-motion";
const PaginationPrograms = ({
  data: programs,
  showFilters,
  setShowFilters,
  openModal,
}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [programsPerPage, setProgramsPerPage] = useState(9);
  const indexOfLastProgram = currentPage * programsPerPage;
  const indexOfFirstProgram = indexOfLastProgram - programsPerPage;
  const currentPrograms = programs.slice(
    indexOfFirstProgram,
    indexOfLastProgram
  );

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth > 640) {
        setProgramsPerPage(9);
      }
    }
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const goToPreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const goToNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const paginate = pageNumber => setCurrentPage(pageNumber);
  const totalPages = Math.ceil(programs.length / programsPerPage);
  const createPersonsArabic = persons => {
    const {from, to} = persons;
    let toReturn = "";

    //handle lower limit
    if (from == 1) {
      toReturn += "شخص";
    } else if (from == 2) {
      toReturn += "شخصين";
    } else {
      toReturn += `${from} ${to == 0 ? "أشخاص" : ""}`;
    }

    // handle upper limit
    if (to == 0) {
      toReturn += `${from == 1 ? "واحد" : ""}`;
    } else {
      toReturn += ` - ${to} أشخاص`;
    }

    return toReturn;
  };
  const handleShowMore = () => {
    // Calculate the index of the last program to display based on the new programsPerPage value
    const newIndex = currentPage * (programsPerPage + 9);
    const lastIndex = Math.min(newIndex, programs.length);

    // Update programs per page by adding 9 to it
    setProgramsPerPage(programsPerPage + 9);

    // If the new index is greater than the last index, paginate to the last page
    if (newIndex >= lastIndex) {
      const lastPage = Math.ceil(lastIndex / (programsPerPage + 9));
      setCurrentPage(lastPage);
    }
  };
  const animateVariants = {
    hidden: {
      opacity: 0,
      translateY: -30,
    },
    show: {
      opacity: 1,
      translateY: 0,
      transition: {
        delay: 0.7,
        duration: 0.4,
      },
    },
  };
  //const firstSix = filteredPrograms.slice(0, 8);
  return (
    <div className="flex flex-col w-full">
      <div className="flex items-center justify-between">
        <div className="flex items-center justify-center gap-[4px] text-[12px] text-[#475467] sm:hidden">
          <svg
            onClick={openModal}
            className="cursor-pointer"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.5 6H20.25M10.5 6C10.5 6.39782 10.342 6.77936 10.0607 7.06066C9.77936 7.34196 9.39782 7.5 9 7.5C8.60218 7.5 8.22064 7.34196 7.93934 7.06066C7.65804 6.77936 7.5 6.39782 7.5 6M10.5 6C10.5 5.60218 10.342 5.22064 10.0607 4.93934C9.77936 4.65804 9.39782 4.5 9 4.5C8.60218 4.5 8.22064 4.65804 7.93934 4.93934C7.65804 5.22064 7.5 5.60218 7.5 6M7.5 6H3.75M10.5 18H20.25M10.5 18C10.5 18.3978 10.342 18.7794 10.0607 19.0607C9.77936 19.342 9.39782 19.5 9 19.5C8.60218 19.5 8.22064 19.342 7.93934 19.0607C7.65804 18.7794 7.5 18.3978 7.5 18M10.5 18C10.5 17.6022 10.342 17.2206 10.0607 16.9393C9.77936 16.658 9.39782 16.5 9 16.5C8.60218 16.5 8.22064 16.658 7.93934 16.9393C7.65804 17.2206 7.5 17.6022 7.5 18M7.5 18H3.75M16.5 12H20.25M16.5 12C16.5 12.3978 16.342 12.7794 16.0607 13.0607C15.7794 13.342 15.3978 13.5 15 13.5C14.6022 13.5 14.2206 13.342 13.9393 13.0607C13.658 12.7794 13.5 12.3978 13.5 12M16.5 12C16.5 11.6022 16.342 11.2206 16.0607 10.9393C15.7794 10.658 15.3978 10.5 15 10.5C14.6022 10.5 14.2206 10.658 13.9393 10.9393C13.658 11.2206 13.5 11.6022 13.5 12M13.5 12H3.75"
              stroke="#475467"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <span>فلتر</span>
        </div>

        <div className="flex items-center gap-[8px] text-[12px] font-bold-[500] text-[#475467] font-bold">
          عدد العروض الإجمالية:
          <span className="text-[#F08631]">{programs.length}</span>
        </div>
      </div>

      <motion.div
        key={programs.length}
        variants={animateVariants}
        initial="hidden"
        animate="show"
        transition={{duration: 0.5}}
        className="mt-8  overflow-x-scroll scrollbar-hide pb-3 grid grid-cols-12 gap-[12px]"
      >
        {currentPrograms.map((tour, i) => (
          <Tour key={i} tour={tour} createPersonsArabic={createPersonsArabic} />
        ))}
        {/* button all */}
      </motion.div>
      {programsPerPage < programs.length && (
        <button
          className="bg-[#F08631] py-[14px] px-[20px] rounded-[8px] text-white md:hidden"
          onClick={handleShowMore}
        >
          أظهر المزيد
        </button>
      )}
      <div className="justify-end gap-[20px] my-5 hidden md:flex">
        <button
          className={`px-2 py-1 rounded text-[14px] font-bold text-[#475467]`}
          onClick={goToPreviousPage}
          disabled={currentPage === 1}
        >
          السابق
        </button>
        {Array.from({length: Math.ceil(programs.length / programsPerPage)})
          .map((_, i) => i + 1)
          .map(pageNumber => (
            <button
              key={pageNumber}
              className={` px-2 py-1 rounded text-[14px] font-bold text-[#475467] ${
                currentPage === pageNumber ? "text-[#F08631]" : ""
              }`}
              onClick={() => paginate(pageNumber)}
            >
              {pageNumber}
            </button>
          ))}
        <button
          className={`px-2 py-1 rounded text-[14px] font-bold text-[#475467]`}
          onClick={goToNextPage}
          disabled={currentPage === totalPages}
        >
          التالي
        </button>
      </div>
    </div>
  );
};
export default PaginationPrograms;
