import Image from "next/image";
import React, {useState} from "react";

const faqs = [
  {
    q: "ما هي متطلبات جواز السفر والتأشيرة والدخول ؟",
    a: "ما هي متطلبات جواز السفر والتأشيرة والدخول ؟",
  },
  {
    q: "ما هي سياسة إلغاء الرحلة ؟",
    a: "ما هي متطلبات جواز السفر والتأشيرة والدخول ؟",
  },
  {
    q: "كيف أقوم بالحجز ؟",
    a: "ما هي متطلبات جواز السفر والتأشيرة والدخول ؟",
  },
  {
    q: "هل هناك عروض جديدة ؟",
    a: "ما هي متطلبات جواز السفر والتأشيرة والدخول ؟",
  },
  {
    q: "كيف يمكنني إلغاء الحجز ؟",
    a: "ما هي متطلبات جواز السفر والتأشيرة والدخول ؟",
  },
];

const FAQ = ({f}) => {
  const [showAnswer, setAnswer] = useState(false);

  const Answer = ({a}) => {
    return <p className="text-[12px] text-[#475467] mr-4">{a}</p>;
  };

  return (
    <div className="flex flex-col gap-[8px]">
      <div
        className="flex justify-between items-center gap-[8px] bg-[#F4F7FD] rounded-[8px] py-[16px] px-[12px] w-full cursor-pointer"
        onClick={() => setAnswer(!showAnswer)}
      >
        <div className="flex flex-col ">
          <h6 className="text-[12px]">{f.q}</h6>
        </div>
        <div className={showAnswer ? "rotate-90" : ""}>
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13 5.5L8 10.5L3 5.5"
              stroke="black"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
      </div>
      {showAnswer && <Answer a={f.a} />}
    </div>
  );
};

const ProgramFaq = () => {
  return (
    <div
      id="faq"
      className="flex flex-col gap-[20px] mb-[40px] md:mb-[50px] mt-[48px]"
    >
      <div className="flex items-center gap-x-[8px]">
        <Image
          alt=""
          src="/icons/map.png"
          height={24}
          width={24}
          className="shrink-0"
        />
        <h2 className="text-[24px] sm:text-[28px] lg:text-[36px] font-bold">
          أسئلة شائعة :
        </h2>
      </div>
      <div className="flex flex-col gap-[8px] w-full">
        {faqs.map((f, i) => (
          <FAQ key={i} f={f} />
        ))}
      </div>
    </div>
  );
};

export default ProgramFaq;
