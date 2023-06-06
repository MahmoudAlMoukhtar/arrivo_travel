import {useState} from "react";
import BreadCrumb from "../../../../components/BreadCrumb";
import Link from "next/link";
import Image from "next/image";

const PersonsBar = ({monthsTrip, selectedNumberOfPeople, onSelect}) => {
  //console.log(selectedNumberOfPeople);
  return (
    <div className="mt-[32px] px-2 w-fit md:mx-auto">
      <div className="overflow-x-scroll scrollbar-hide">
        <div className="flex bg-orange p-[4px] rounded-[40px]">
          {monthsTrip.map((m, i) => (
            <button
              key={i}
              onClick={() => onSelect(m)}
              className={`outline-none py-[8px] px-[8px] sm:px-[16px] h-[40px] text-[12px] sm:text-[16px] text-white rounded-[32px] flex items-center justify-center ${
                selectedNumberOfPeople.numberOfPeople === m.numberOfPeople &&
                "text-black bg-white"
              }`}
            >
              <span
                className={`${
                  selectedNumberOfPeople.numberOfPeople === m.numberOfPeople &&
                  "text-black"
                }`}
              >
                {m.numberOfPeople}
              </span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
const monthsTrip = [
  {
    numberOfPeople: "شخصين",
    datesMonths: [
      {
        monthN: "أبريل 2023",
        datesDays: [
          {day: "08 - 16 أبريل", price: 3219},
          {day: "22 - 30 أبريل", price: 3219},
          {day: "29 أبريل - 07 مايو", price: 3219},
        ],
      },
      {
        monthN: "مايو 2023",
        datesDays: [
          {day: "13 - 21 مايو", price: 3219},
          {day: "13 - 21 مايو", price: 3219},
          {day: "13 - 21 مايو", price: 3219},
        ],
      },
      // add more dates and months as needed
    ],
  },
  {
    numberOfPeople: "03 أشخاص",
    datesMonths: [
      {
        monthN: "اغسطس 2023",
        datesDays: [
          {day: "08 - 16 أبريل", price: 3219},
          {day: "08 - 16 أبريل", price: 3219},
          {day: "08 - 16 أبريل", price: 3219},
        ],
      },
      // add more dates and months as needed
    ],
  },
  {
    numberOfPeople: "04 أشخاص",
    datesMonths: [
      {
        monthN: "يناير 2023",
        datesDays: [
          {day: "13 - 21 مايو", price: 3219},
          {day: "13 - 21 مايو", price: 3219},
        ],
      },
      // add more dates and months as needed
    ],
  },
  {
    numberOfPeople: "05 أشخاص",
    datesMonths: [
      {
        monthN: "مايو 2023",
        datesDays: [
          {day: "13 - 21 مايو", price: 3219},
          {day: "13 - 21 مايو", price: 3219},
        ],
      },
      // add more dates and months as needed
    ],
  },
  // add more number of people options as needed
];
const TimingsAndPrices = () => {
  const [datesTrip, setDatesTrip] = useState([]);
  const [selectedNumberOfPeople, setSelectedNumberOfPeople] = useState(
    monthsTrip[0]
  );

  const breadcrumbs = [
    {name: "الصفحة الرئيسية", path: "/"},
    {name: "التوفر والأسعار", path: "/travels-programs/program/timings-prices"},
  ];

  const handleSelectNumberOfPeople = selected => {
    setSelectedNumberOfPeople(selected);
    setDatesTrip(selected.datesMonths);
  };

  return (
    <div className="py-[56px]">
      <div className="wrapper">
        <div className="flex flex-col items-center gap-[30px]">
          <Link
            href={"javascript:history.back()"}
            className="w-full text-end text-[#475467] flex justify-end gap-[8px]"
          >
            رجوع
            <Image src="/icons/arrow.png" height={20} width={20} alt="/" />
          </Link>
          <BreadCrumb breadcrumbs={breadcrumbs} />
          <h2 className=" text-[24px] sm:text-[36px] md:text-[56px] lg:[48px] font-bold-600">
            المواعيد والأسعار
          </h2>
          <PersonsBar
            monthsTrip={monthsTrip}
            selectedNumberOfPeople={selectedNumberOfPeople}
            onSelect={handleSelectNumberOfPeople}
          />
          {selectedNumberOfPeople && (
            <div className="w-full flex flex-col lg:px-20">
              {selectedNumberOfPeople.datesMonths.map((month, index) => (
                <div key={index}>
                  <h3 className="bg-[#F4F7FD] p-[16px] font-bold">
                    {month.monthN}
                  </h3>
                  <ul>
                    {month.datesDays.map((d, index) => (
                      <li
                        className="flex justify-between items-center py-[20px]"
                        style={{
                          borderBottom: "1px solid rgba(152, 162, 179, 0.25)",
                        }}
                        key={index}
                      >
                        <span className="w-1/3">{d.day}</span>
                        <span className="w-1/3 text-[20px] font-bold">
                          ${d.price}
                        </span>
                        <button className="w-[140px] py-[14px] px-[20px] text-[#F08631] border-[1px] border-[#F08631] rounded-[32px] duration-200 hover:bg-[#F08631] hover:text-white">
                          إتصل للحجز
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TimingsAndPrices;
