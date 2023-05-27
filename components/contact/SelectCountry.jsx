import Image from "next/image";
import React, { useState } from "react";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
const SelectCountry = () => {
  return (
    <div dir="rtl" className="">
      <PhoneInput
        international
        defaultCountry="TR"
        value={value}
        onChange={setValue}
        placeholder=""
      />
    </div>
  );
};

export default SelectCountry;
