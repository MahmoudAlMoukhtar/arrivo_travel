import {useState} from "react";

const STATUS = {
  IDLE: "IDLE",
  SUBMITTING: "SUBMITTING",
  SUBMITTED: "SUBMITTED",
  COMPLETED: "COMPLETED",
};

const CalenderInput = ({label, placeholder, errorMessage, type}) => {
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
      <input
        value={value}
        required
        onInvalid={() => setInvalid(true)}
        onChange={handleChange}
        onBlur={handleBlur}
        type="date"
        className={`outline-none w-full border border-[#C8CBD0] rounded-[8px] py-[16px] px-[12px] text-[14px] placeholder:text-[14px] focus:border-[#F08631] focus:bg-orange/10 duration-300 valid:border-[#12B76A] ${
          invalid ? "invalid:border-[#F04438] invalid:text-[#F04438]" : ""
        }`}
        placeholder={placeholder}
      />
      <p role="alert" className="text-[#F04438] text-[12px] ">
        {invalid && errors}
      </p>
    </div>
  );
};

export default CalenderInput;
