import Image from "next/image";
import React from "react";

const ViewRatings = ({rating, w, h}) => {
  const {avg, count} = rating;
  return (
    <div className="text-yellow-600 flex gap-x-[1px] text-sm mb-1">
      {[...Array(5)].map((star, it) =>
        it < avg ? (
          <Image
            key={it}
            alt=""
            src="/icons/revs/star.svg"
            height={w ? w : 28}
            width={h ? h : 28}
          />
        ) : (
          ""
        )
      )}
    </div>
  );
};

export default ViewRatings;
