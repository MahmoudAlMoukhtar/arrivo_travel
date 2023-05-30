import React, {useEffect, useState} from "react";
import TripInfo from "./TripInfo";
import TripPlaces from "./TripPlaces";
import TripContent from "./TripContent";
import TripLocationsSlider from "./TripLocationsSlider";

const ProgramSummary = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    // Check screen size on mount and whenever it changes
    function handleResize() {
      setIsSmallScreen(window.innerWidth < 1024); // Set breakpoint as per your requirement
    }
    window.addEventListener("resize", handleResize);
    handleResize(); // Call the function initially as well
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <div id="summary">
      <TripInfo />
      {isSmallScreen ? (
        <TripLocationsSlider isSmallScreen={isSmallScreen} />
      ) : (
        <TripPlaces />
      )}
      <TripContent />
    </div>
  );
};

export default ProgramSummary;
