import Image from "next/image";
import {useState} from "react";

const STATUS = {
  IDLE: "IDLE",
  SUBMITTING: "SUBMITTING",
  SUBMITTED: "SUBMITTED",
  COMPLETED: "COMPLETED",
};

const Select = ({label, placeholder, errorMessage, options}) => {
  //state management
  const [value, setValue] = useState("");
  const [invalid, setInvalid] = useState(false);
  const [status, setStatus] = useState(STATUS.IDLE);
  const [saveError, setSaveError] = useState(null);
  const [touche, setTouche] = useState({});
  //Derived state
  const errors = getErrors(value);
  const isValid = Object.keys(errors).length === 0;

  function handleChange(e) {
    //e.persist();
    if (invalid) {
      setInvalid(false);
    }
    setValue(e.target.value);
  }

  function handleBlur(event) {
    setTouche(true);
  }

  function getErrors(value) {
    let result = errorMessage;
    if (!value) result = errorMessage;
    return result;
  }

  if (saveError) throw saveError;
  return (
    <div className="flex flex-col gap-[8px]">
      <label
        htmlFor=""
        className={`font-bold-500 text-[12px]  ${
          invalid ? "text-[#F04438]" : "text-[#3E444D]"
        }`}
      >
        {invalid ? label + "*" : label}
      </label>
      <div className="flex gap-x-2 items-center h-[48px] bg-white rounded-[8px] border border-[#C8CBD0] py-[12px] px-[6px] lg:pt-[10x] lg:px-[10px] lg:pr-[16px]">
        <select
          value={value}
          required
          onInvalid={() => setInvalid(true)}
          onChange={handleChange}
          onBlur={handleBlur}
          className={`outline-none w-full rounded-[8px] py-[12px]  lg:pt-[10x]  text-[14px] placeholder:text-[14px] focus:border-[#F08631] duration-300 valid:border-[#12B76A] ${
            invalid ? "invalid:border-[#F04438] invalid:text-[#F04438]" : ""
          }`}
          placeholder={placeholder}
        >
          {options.map((o, i) => (
            <option key={i} value={o}>
              {o}
            </option>
          ))}
        </select>
        {/* <div className="flex flex-col justify-center items-center  p-[8px] w-[28px] ">
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="transform transition-transform duration-200"
          >
            <path
              d="M13 5.5L8 10.5L3 5.5"
              stroke="#344054"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div> */}
      </div>

      <p role="alert" className="text-[#F04438] text-[12px] ">
        {invalid && errors}
      </p>
    </div>
  );
};

export default Select;
