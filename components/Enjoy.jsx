import Image from "next/image";
import React from "react";

const Enjoy = () => {
  return (
    <div className="">
      <div className="wrapper border-b">
        <div className="py-[80px]">
          <div className="flex flex-col gap-[48px]">
            <h1 className="font-bold-600 text-[24px] sm:text-[36px] text-center">
              استمتع بتجربة سياحية لا <br /> تُنسى تتضمن:
            </h1>
            <div className="grid grid-cols-12 gap-x-[25px] sm:gap-x-[20px] gap-y-[32px]">
              {/* one item */}
              <div className="col-span-12 sm:col-span-6 lg:col-span-3 flex flex-col items-center gap-[12px] p-1 md:p-2  duration-500 rounded-md ">
                <Image
                  alt=""
                  src="/icons/enjoy/support.svg"
                  height={44}
                  width={44}
                />
                <div className="w-[285px] lg:w-auto flex flex-col items-center">
                  <h4 className="font-bold-600 text-[28px]">دعم 24/7</h4>
                  <p className="text-[14px] text-grey text-center">
                    نحن بجانبك دائمًا! استمتع بمساعدتنا الودودة والمستمرة على
                    مدار الساعة لتجربة سفر لا مشاكل فيها.
                  </p>
                </div>
              </div>
              {/* one item */}
              <div className="col-span-12 sm:col-span-6 lg:col-span-3 flex flex-col items-center gap-[12px] p-1 md:p-2  duration-500 rounded-md ">
                <Image
                  alt=""
                  src="/icons/enjoy/cashy.svg"
                  height={44}
                  width={44}
                />
                <div className="w-[285px] lg:w-auto flex flex-col items-center">
                  <h4 className="font-bold-600 text-[28px]">إلغاء مرن</h4>
                  <p className="text-[14px] text-grey text-center">
                    لا تقلق بشأن تغيير الخطط. سياسات الإلغاء المرنة لدينا تمنحك
                    حرية التعديل بكل يسر.
                  </p>
                </div>
              </div>
              {/* one item */}
              <div className="col-span-12 sm:col-span-6 lg:col-span-3 flex flex-col items-center gap-[12px] p-1 md:p-2  duration-500 rounded-md ">
                <Image
                  alt=""
                  src="/icons/enjoy/stars.svg"
                  height={44}
                  width={44}
                />
                <div className="w-[285px] lg:w-auto flex flex-col items-center">
                  <h4 className="font-bold-600 text-[28px]">خبرة طويلة</h4>
                  <p className="text-[14px] text-grey text-center">
                    اترك الأمور علينا! استفد من خبرتنا الواسعة في مجال السياحة
                    لتنظيم رحلة ساحرة ومليئة بالمرح.
                  </p>
                </div>
              </div>
              {/* one item */}
              <div className="col-span-12 sm:col-span-6 lg:col-span-3 flex flex-col items-center gap-[12px] p-1 md:p-2  duration-500 rounded-md ">
                <Image
                  alt=""
                  src="/icons/enjoy/check.svg"
                  height={44}
                  width={44}
                />
                <div className="w-[285px] lg:w-auto flex flex-col items-center">
                  <h4 className="font-bold-600 text-[28px]">أمان و ضمان</h4>
                  <p className="text-[14px] text-grey text-center">
                    اطمئن واستمتع برحلتك ! نحرص على توفير تجربة سفر آمنة وموثوقة
                    مع ضمان جودة الخدمات المقدمة.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Enjoy;
