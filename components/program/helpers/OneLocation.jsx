import Image from "next/image";
import React from "react";

const backendHost = process.env.NEXT_PUBLIC_BACKEND_HOST;

const OneLocation = ({ loc }) => {
  return (
    <div className="col-span-6 md:col-span-3 flex flex-col gap-[4px]">
      <div className="w-full aspect-square md:h-[183px] relative">
        <Image
          alt=""
          src={`${backendHost}/images/locations/${loc.img}`}
          className="object-cover rounded-[8px]"
          fill
        />
      </div>
      <h6 className="text-[16px] text-[#3E444D]">{loc.name}</h6>
    </div>
  );
};

export default OneLocation;
