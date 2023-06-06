import Image from "next/image";

const ProgramNotes = ({notes}) => {
  const Note = ({note}) => {
    return (
      <div className="flex items-center gap-[8px]">
        <div>
          <svg
            width="10"
            height="10"
            viewBox="0 0 10 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="5" cy="5" r="5" fill="#F6882F" />
          </svg>
        </div>
        <p className="text-[16px] text-[#636973]">{note}</p>
      </div>
    );
  };

  return (
    <div
      id="program"
      className="flex flex-col gap-[20px] mb-[40px] md:mb-[50px]"
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
            d="M7.5 8.25H16.5M7.5 11.25H12M2.25 12.76C2.25 14.36 3.373 15.754 4.957 15.987C6.086 16.153 7.227 16.28 8.38 16.366C8.73 16.392 9.05 16.576 9.245 16.867L12 21L14.755 16.867C14.8516 16.7233 14.9798 16.6034 15.1297 16.5166C15.2795 16.4298 15.4472 16.3783 15.62 16.366C16.7652 16.2805 17.9069 16.1541 19.043 15.987C20.627 15.754 21.75 14.361 21.75 12.759V6.741C21.75 5.139 20.627 3.746 19.043 3.513C16.711 3.17072 14.357 2.99926 12 3C9.608 3 7.256 3.175 4.957 3.513C3.373 3.746 2.25 5.14 2.25 6.741V12.759V12.76Z"
            stroke="black"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>

        <h2 className="text-[20px] font-bold">ملاحظات:</h2>
      </div>
      <div className="flex flex-col items-start gap-[12px]">
        {notes.map((note, i) => (
          <Note key={i} note={note} />
        ))}
      </div>
    </div>
  );
};

export default ProgramNotes;
