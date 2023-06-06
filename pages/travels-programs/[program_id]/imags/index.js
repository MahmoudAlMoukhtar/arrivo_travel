import Image from "next/image";
import React from "react";

const images = [
  "GalleryOzngol.jpg",
  "GalleryOzngol.jpg",
  "GalleryOzngol.jpg",
  "GalleryOzngol.jpg",
  "GalleryOzngol.jpg",
  "GalleryOzngol.jpg",
];

function ImageGrid() {
  const rows = Math.ceil(images.length / 6); // Calculate the number of rows needed based on the number of images

  return (
    <div className="grid grid-cols-12 grid-rows-2 gap-4 lg:h-[476px]">
      <div className="col-span-12 lg:col-span-6 row-span-4 h-[389px] lg:h-auto relative">
        <Image
          src={`/images/programs/${images[0]}`}
          alt=""
          className="object-cover rounded-[12px] hover:opacity-[0.9]"
          fill
        />
      </div>
      <div className="col-span-6 lg:col-span-3 h-[300px] lg:h-auto relative">
        <Image
          src={`/images/programs/${images[1]}`}
          alt=""
          className="object-cover rounded-[12px] hover:opacity-[0.9]"
          fill
        />
      </div>
      <div className="col-span-6 lg:col-span-3 h-[300px] lg:h-auto relative">
        <Image
          src={`/images/programs/${images[2]}`}
          alt=""
          className="object-cover rounded-[12px] hover:opacity-[0.9]"
          fill
        />
      </div>
    </div>
  );
}

export default ImageGrid;
