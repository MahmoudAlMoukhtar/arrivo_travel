import Image from "next/image";
import Link from "next/link";
import React from "react";

const BreadCrumb = ({breadcrumbs, center}) => {
  return (
    <div className="w-full">
      <div className="wrapper w-full">
        <div
          className={`flex ${
            center ? "justify-center" : "justify-start"
          } items-center gap-[4px] text-[12px] w-full`}
        >
          {breadcrumbs.map((br, i) =>
            i === 0 ? (
              <div key={i} className="stage flex gap-[4px]">
                <Link href={br.path}>{br.name}</Link>
              </div>
            ) : i === breadcrumbs.length - 1 ? (
              <div key={i} className="stage flex gap-[4px]">
                <Image src="/icons/arrow.png" height={20} width={20} alt="/" />
                <Link href={br.path} className="text-orange">
                  {br.name}
                </Link>
              </div>
            ) : (
              <div key={i} className="stage flex gap-[4px]">
                <Image src="/icons/arrow.png" height={20} width={20} alt="/" />
                <Link href={br.path} className="">
                  {br.name}
                </Link>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default BreadCrumb;
/* 
<div className="stage flex gap-[4px]">
            <span>الرئيسية</span>
          </div>
          <div className="stage flex gap-[4px]">
            <Image src="/icons/arrow.png" height={20} width={20} alt="/" />
            <span>البرامج السياحية</span>
          </div>
          <div className="stage flex gap-[4px]">
            <Image src="/icons/arrow.png" height={20} width={20} alt="/" />
            <span className="text-orange">الشمال التركي</span>
          </div>
*/
