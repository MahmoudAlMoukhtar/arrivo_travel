import Image from "next/image";
import Link from "next/link";

const Service = ({
  service,
  children,
  reverse,
  preTitle,
  title,
  description,
  imageSrc,
}) => {
  return (
    <div
      className={`flex items-center justify-between flex-col-reverse  ${
        reverse ? "lg:flex-row-reverse" : "lg:flex-row"
      }`}
    >
      <div className="flex flex-col items-start  gap-[24px]">
        <div className="flex flex-col gap-[4px]">
          <p className="text-orange font-bold-500 text-[16px]">{preTitle}</p>
          <h2 className=" text-[24px] sm:text-[28px] md:text-[36px]  font-bold-600">
            {title}
          </h2>
        </div>
        <div className="flex flex-col gap-4 lg:w-[590px]">
          <p className="text-[#475467]">{description}</p>
          {children}
          {
            <Link
              href="/travels-programs?type=programs"
              className="bg-[#F08631] w-full md:w-[154px] py-[14px] px-[20px] text-white rounded-[8px] text-center"
            >
              تصفح الحجوزات
            </Link>
          }
        </div>
      </div>
      <div>
        <Image
          alt=""
          width={590}
          height={590}
          className="w-[400px] lg:w-[590px] hidden sm:block"
          src={imageSrc}
        />
      </div>
    </div>
  );
};

export default Service;
