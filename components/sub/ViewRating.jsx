import Image from "next/image";
import React from "react";

const ViewRatings = ({ rating }) => {
  const { avg, count } = rating;
  return (
    <div className="text-yellow-600 flex gap-x-[1px] text-sm mb-1">
      {[...Array(5)].map((star, it) =>
        it < avg ? (
          <Image
            key={it}
            alt=""
            src="/icons/revs/star.svg"
            height={28}
            width={28}
          />
        ) : (
          ""
        )
      )}
    </div>
  );
};

export default ViewRatings;
