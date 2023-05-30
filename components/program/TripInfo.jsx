import Image from "next/image";
import React from "react";

const TripInfo = () => {
  return (
    <div className="flex flex-col gap-[20px] mb-[40px] md:mb-[50px]">
      <div className="flex items-center gap-x-[8px]">
        <Image alt="" src="/icons/info.png" height={24} width={24} />
        <h2 className="text-[24px] sm:text-[28px] lg:text-[36px] font-bold">
          معلومات عن الرحلة :
        </h2>
      </div>
      <p className="text-[16px] text-[#636973]">
        انضم إلى جولة خاصة مع عائلتك إلى الشمال التركي. قم بزيارة مرتفعات سلطان
        مراد, مغار شال, دير سوميلا, قرية هامسي كوي, بحيرة أوزنجول, نهر و وادي
        الرياح, شلال بولفيت, مرتفعات دمير كابي, ..... و الكثير من الأماكن
        الرائعة الأخرى.
      </p>
    </div>
  );
};

export default TripInfo;
