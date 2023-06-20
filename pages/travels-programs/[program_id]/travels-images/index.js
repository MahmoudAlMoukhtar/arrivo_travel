import Image from "next/image";
import Link from "next/link";
import React from "react";

const imgs = [
  "Gallery.jpg",
  "Gallery-1.jpg",
  "Gallery-2.jpg",
  "Gallery-3.jpg",
  "Gallery-4.jpg",
  "Gallery-5.jpg",
];

function ImageGrid() {
  //const rows = Math.ceil(images.length / 6); // Calculate the number of rows needed based on the number of images

  return (
    <div className="bigbox wrapper py-[40px]">
      <div className="flex justify-between items-center w-full">
        <div className="flex xl:justify-center items-center gap-[20px] lg:gap-[10px]">
          <button className="flex items-center justify-center gap-2 p-[6px] md:p-[12px] rounded-[8px]">
            <svg
              width="18"
              height="20"
              viewBox="0 0 18 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.593 1.32206C15.693 1.45006 16.5 2.39906 16.5 3.50706V19.0001L9 15.2501L1.5 19.0001V3.50706C1.5 2.39906 2.306 1.45006 3.407 1.32206C7.12319 0.890694 10.8768 0.890694 14.593 1.32206Z"
                stroke="#475467"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <p className="text-[#475467]">حفظ</p>
          </button>
          <button className="flex items-center justify-center gap-2 w-full  p-[6px] md:p-[12px] rounded-[8px]">
            <svg
              width="20"
              height="22"
              viewBox="0 0 20 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.21669 9.90704C4.97455 9.47135 4.59459 9.1284 4.13646 8.93202C3.67832 8.73564 3.16794 8.69695 2.68544 8.82202C2.20293 8.94709 1.77562 9.22884 1.47057 9.62304C1.16552 10.0172 1 10.5016 1 11C1 11.4985 1.16552 11.9828 1.47057 12.377C1.77562 12.7712 2.20293 13.053 2.68544 13.1781C3.16794 13.3031 3.67832 13.2644 4.13646 13.0681C4.59459 12.8717 4.97455 12.5287 5.21669 12.093M5.21669 9.90704C5.39669 10.231 5.49969 10.603 5.49969 11C5.49969 11.397 5.39669 11.77 5.21669 12.093M5.21669 9.90704L14.7827 4.59304M5.21669 12.093L14.7827 17.407M14.7827 4.59304C14.9229 4.85718 15.1144 5.0907 15.346 5.27997C15.5776 5.46923 15.8445 5.61043 16.1313 5.69532C16.4181 5.7802 16.7189 5.80706 17.0161 5.77433C17.3134 5.7416 17.6012 5.64994 17.8626 5.5047C18.124 5.35946 18.3539 5.16356 18.5387 4.92845C18.7236 4.69334 18.8597 4.42375 18.9391 4.13542C19.0185 3.8471 19.0397 3.54583 19.0013 3.24923C18.963 2.95264 18.8659 2.66667 18.7157 2.40804C18.4198 1.89838 17.9357 1.52518 17.3675 1.36865C16.7993 1.21213 16.1924 1.28478 15.6772 1.57099C15.162 1.8572 14.7797 2.33412 14.6124 2.89923C14.4452 3.46434 14.5063 4.07252 14.7827 4.59304ZM14.7827 17.407C14.6392 17.6654 14.5479 17.9495 14.5142 18.2432C14.4804 18.5368 14.5049 18.8342 14.5861 19.1184C14.6673 19.4026 14.8037 19.668 14.9875 19.8995C15.1712 20.131 15.3988 20.324 15.6572 20.4675C15.9156 20.6111 16.1997 20.7023 16.4933 20.736C16.787 20.7698 17.0844 20.7453 17.3685 20.6641C17.6527 20.5829 17.9182 20.4465 18.1496 20.2628C18.3811 20.079 18.5742 19.8514 18.7177 19.593C19.0076 19.0712 19.0783 18.4556 18.9143 17.8817C18.7503 17.3077 18.365 16.8224 17.8432 16.5325C17.3214 16.2427 16.7058 16.1719 16.1318 16.3359C15.5579 16.4999 15.0726 16.8852 14.7827 17.407Z"
                stroke="#475467"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <p className="text-[#475467]">مشاركة</p>
          </button>
        </div>
        <Link
          href={"javascript:history.back()"}
          className="w-full text-end text-[#475467] flex justify-end gap-[8px]"
        >
          رجوع
          <Image src="/icons/arrow.png" height={20} width={20} alt="/" />
        </Link>
      </div>
      <div className="grid grid-cols-12 grid-rows-2 gap-4 ">
        <div className="col-span-12  row-span-6 h-[589px]  relative">
          <Image
            src={`/images/Program details/Large/${imgs[0]}`}
            alt=""
            className="object-cover rounded-[12px] hover:opacity-[0.9]"
            fill
          />
        </div>
        <div className="col-span-12 md:col-span-6 h-[300px]  relative">
          <Image
            src={`/images/Program details/Large/${imgs[1]}`}
            alt=""
            className="object-cover rounded-[12px] hover:opacity-[0.9]"
            fill
          />
        </div>
        <div className="col-span-12 md:col-span-6 h-[300px] relative">
          <Image
            src={`/images/Program details/Large/${imgs[2]}`}
            alt=""
            className="object-cover rounded-[12px] hover:opacity-[0.9]"
            fill
          />
        </div>
        <div className="col-span-12 md:col-span-6 h-[300px]  relative">
          <Image
            src={`/images/Program details/Large/${imgs[3]}`}
            alt=""
            className="object-cover rounded-[12px] hover:opacity-[0.9]"
            fill
          />
        </div>
        <div className="col-span-12 md:col-span-6 h-[300px] relative">
          <Image
            src={`/images/Program details/Large/${imgs[4]}`}
            alt=""
            className="object-cover rounded-[12px] hover:opacity-[0.9]"
            fill
          />
        </div>
        <div className="col-span-12  row-span-6 h-[589px]  relative">
          <Image
            src={`/images/Program details/Large/${imgs[1]}`}
            alt=""
            className="object-cover rounded-[12px] hover:opacity-[0.9]"
            fill
          />
        </div>
        <div className="grid grid-cols-12 grid-rows-2 gap-4 md:h-[600px] col-span-12">
          <div className="col-span-12 md:col-span-6 row-span-2 h-[600px] md:h-auto relative">
            <Image
              src={`/images/Program details/Large/${imgs[0]}`}
              alt=""
              className="object-cover rounded-[12px] hover:opacity-[0.9]"
              fill
            />
          </div>
          <div className="col-span-12 md:col-span-6 h-[300px] md:h-auto relative">
            <Image
              src={`/images/Program details/Large/${imgs[1]}`}
              alt=""
              className="object-cover rounded-[12px] hover:opacity-[0.9]"
              fill
            />
          </div>
          <div className="col-span-12 md:col-span-6 h-[300px] md:h-auto relative">
            <Image
              src={`/images/Program details/Large/${imgs[2]}`}
              alt=""
              className="object-cover rounded-[12px] hover:opacity-[0.9]"
              fill
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ImageGrid;
/* 
<div className="grid grid-cols-6 grid-rows-2 col-span-12 md:col-span-6 h-[300px] relative">
          <Image
            src={`/images/Program details/Large/${imgs[3]}`}
            alt=""
            className="object-cover rounded-[12px] hover:opacity-[0.9]"
            fill
          />
          <Image
            src={`/images/Program details/Large/${imgs[3]}`}
            alt=""
            className="object-cover rounded-[12px] hover:opacity-[0.9]"
            fill
          />
        </div>
*/
