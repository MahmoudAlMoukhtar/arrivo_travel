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

const FAQ = ({question, answer, isOpen, toggleAnswer}) => {
  const Answer = ({a}) => {
    return <p className="text-[12px] text-[#475467] mr-4">{a}</p>;
  };

  return (
    <div className="flex flex-col gap-[8px]">
      <div
        className="flex justify-between items-center gap-[8px] bg-[#F4F7FD] rounded-[8px] py-[16px] px-[12px] w-full cursor-pointer"
        onClick={toggleAnswer}
      >
        <div className="flex flex-col ">
          <h6 className="text-[12px]">{question}</h6>
        </div>
        <div className={isOpen ? "rotate-90" : ""}>
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
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
      {isOpen && <Answer a={answer} />}
    </div>
  );
};

const ProgramFaq = () => {
  const [openIndex, setOpenIndex] = useState(-1);

  const toggleAnswer = index => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <div
      id="faq"
      className="flex flex-col gap-[20px] mb-[40px] md:mb-[50px] mt-[24px]"
    >
      <div className="flex items-center gap-x-[8px]">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9.879 7.519C11.05 6.494 12.95 6.494 14.121 7.519C15.293 8.544 15.293 10.206 14.121 11.231C13.918 11.41 13.691 11.557 13.451 11.673C12.706 12.034 12.001 12.672 12.001 13.5V14.25M21 12C21 13.1819 20.7672 14.3522 20.3149 15.4442C19.8626 16.5361 19.1997 17.5282 18.364 17.364C17.5282 18.1997 16.5361 18.8626 15.4442 19.3149C14.3522 19.7672 13.1819 20 12 20C10.8181 20 9.64778 19.7672 8.55585 19.3149C7.46392 18.8626 6.47177 18.1997 5.63604 17.364C4.80031 16.5282 4.13738 15.5361 3.68508 14.4442C3.23279 13.3522 3 12.1819 3 11C3 8.61305 3.94821 6.32387 5.63604 4.63604C7.32387 2.94821 9.61305 2 12 2C14.3869 2 16.6761 2.94821 18.364 4.63604C20.0518 6.32387 21 8.61305 21 11ZM12 16.25H12.008V16.258H12V16.25Z"
            stroke="black"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>

        <h2 className="text-[24px] sm:text-[28px] lg:text-[36px] font-bold">
          أسئلة شائعة :
        </h2>
      </div>
      <div className="flex flex-col gap-[8px] w-full">
        {faqs.map((f, i) => (
          <FAQ
            key={i}
            question={f.q}
            answer={f.a}
            isOpen={openIndex === i}
            toggleAnswer={() => toggleAnswer(i)}
          />
        ))}
      </div>
    </div>
  );
};

export default ProgramFaq;
