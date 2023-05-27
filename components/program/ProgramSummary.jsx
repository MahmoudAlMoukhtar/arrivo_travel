import React from "react";
import TripInfo from "./TripInfo";
import TripPlaces from "./TripPlaces";
import TripContent from "./TripContent";

const ProgramSummary = () => {
  return (
    <div>
      <TripInfo />
      <TripPlaces />
      <TripContent />
    </div>
  );
};

export default ProgramSummary;
