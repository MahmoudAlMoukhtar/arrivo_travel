const ProgramNotes = ({notes, doesNotInclude}) => {
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
      id="importantInfo"
      className="flex flex-col gap-[20px] mb-[40px] md:mb-[50px] bg-[#F4F7FD] p-[32px] rounded-[22px]"
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

        <h2 className="text-[24px] sm:text-[28px] lg:text-[36px] font-bold">
          معلومات مهمة:
        </h2>
      </div>
      <div className="flex flex-col items-start gap-[12px]">
        {notes.map((note, i) => (
          <Note key={i} note={note} />
        ))}
      </div>
      <div className="flex flex-col gap-[20px]">
        <div className="flex justify-start items-center gap-[11px]">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 6V18M9 15.182L9.879 15.841C11.05 16.72 12.949 16.72 14.121 15.841C15.293 14.962 15.293 13.538 14.121 12.659C13.536 12.219 12.768 12 12 12C11.275 12 10.55 11.78 9.997 11.341C8.891 10.462 8.891 9.038 9.997 8.159C11.103 7.28 12.897 7.28 14.003 8.159L14.418 8.489M21 12C21 13.1819 20.7672 14.3522 20.3149 15.4442C19.8626 16.5361 19.1997 17.5282 18.364 18.364C17.5282 19.1997 16.5361 19.8626 15.4442 20.3149C14.3522 20.7672 13.1819 21 12 21C10.8181 21 9.64778 20.7672 8.55585 20.3149C7.46392 19.8626 6.47177 19.1997 5.63604 18.364C4.80031 17.5282 4.13738 16.5361 3.68508 15.4442C3.23279 14.3522 3 13.1819 3 12C3 9.61305 3.94821 7.32387 5.63604 5.63604C7.32387 3.94821 9.61305 3 12 3C14.3869 3 16.6761 3.94821 18.364 5.63604C20.0518 7.32387 21 9.61305 21 12Z"
              stroke="black"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>

          <span className="text-[24px] font-bold">لايشمل السعر:</span>
        </div>
        <div className="flex flex-col gap-[20px]">
          {doesNotInclude.map((d, i) => (
            <div key={i} className="flex items-center gap-[8px]">
              <div>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.75 9.75L14.25 14.25M14.25 9.75L9.75 14.25M21 12C21 13.1819 20.7672 14.3522 20.3149 15.4442C19.8626 16.5361 19.1997 17.5282 18.364 18.364C17.5282 19.1997 16.5361 19.8626 15.4442 20.3149C14.3522 20.7672 13.1819 21 12 21C10.8181 21 9.64778 20.7672 8.55585 20.3149C7.46392 19.8626 6.47177 19.1997 5.63604 18.364C4.80031 17.5282 4.13738 16.5361 3.68508 15.4442C3.23279 14.3522 3 13.1819 3 12C3 9.61305 3.94821 7.32387 5.63604 5.63604C7.32387 3.94821 9.61305 3 12 3C14.3869 3 16.6761 3.94821 18.364 5.63604C20.0518 7.32387 21 9.61305 21 12Z"
                    stroke="#FF6666"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
              <p className="text-[16px] text-[#636973]">{d}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProgramNotes;
