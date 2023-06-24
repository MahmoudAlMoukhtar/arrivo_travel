import {useState} from "react";
import "react-phone-number-input/style.css";
import PhoneInput, {isValidPhoneNumber} from "react-phone-number-input";
const STATUS = {
  IDLE: "IDLE",
  SUBMITTING: "SUBMITTING",
  SUBMITTED: "SUBMITTED",
  COMPLETED: "COMPLETED",
};

const PhonInput = ({label, placeholder, errorMessage, type}) => {
  //state management
  const [value, setValue] = useState("");
  const [invalid, setInvalid] = useState(false);
  const [status, setStatus] = useState(STATUS.IDLE);
  const [saveError, setSaveError] = useState(null);
  const [touched, setTouched] = useState(false);

  //Derived state
  const errors = getErrors(value);

  function handleChange(value) {
    if (invalid) {
      setInvalid(false);
    }
    setValue(value);
  }

  function handleBlur(event) {
    setTouched(true);
    setInvalid(value && isValidPhoneNumber(value) ? false : true);
  }

  function getErrors(value) {
    let result = "";
    if (!value) result = errorMessage;
    else if (!isValidPhoneNumber(value)) result = "الرجاء ادخال رقم هاتف صحيح";
    return result;
  }

  if (saveError) throw saveError;
  return (
    <div className="flex flex-col gap-[8px] w-full">
      <label
        htmlFor=""
        className={`font-bold-500 text-[12px]  ${
          invalid && touched ? "text-[#F04438]" : "text-[#3E444D]"
        }`}
      >
        {label}
        {type === "required" && <span className="text-red-500">*</span>}
      </label>
      <PhoneInput
        dir="ltr"
        international
        defaultCountry="TR"
        className={`outline-none w-full border border-[#C8CBD0] rounded-[8px] py-[16px] px-[12px] text-[14px] placeholder:text-[14px] focus:border-[#F08631] focus:bg-orange/10 duration-300 valid:border-[#12B76A] ${
          value && !isValidPhoneNumber(value)
            ? "border-[#F04438] text-[#F04438]"
            : ""
        }`}
        value={value}
        placeholder={placeholder}
        onChange={handleChange}
        onBlur={handleBlur}
        required
      />

      <p role="alert" className="text-[#F04438] text-[12px] ">
        {touched && errors}
      </p>
    </div>
  );
};

export default PhonInput;
