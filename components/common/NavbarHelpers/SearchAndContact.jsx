import Image from "next/image";
import {motion} from "framer-motion";
import {useState} from "react";

const SearchAndContact = () => {
  const [suggestions, setSuggestions] = useState([]);
  const [inputValue, setInputValue] = useState(""); // create a state for the input value

  const handleSearchFocus = () => {
    // Set your suggested search terms here

    setSuggestions(["فريمر", "أدوبي فوتوشوب", "فيجما", "سكتش", "أدوبي أكس دي"]);
  };

  const handleSearchBlur = () => {
    // Clear the suggestions when the search input loses focus
    setSuggestions([]);
  };

  const handleInputChange = e => {
    // Set the input value state and filter the suggestions based on it
    const value = e.target.value;
    setInputValue(value);
    if (value !== "") {
      const filteredSuggestions = suggestions.filter(
        suggestion => suggestion.toLowerCase().startsWith(value.toLowerCase()) // use startsWith or includes methods
      );
      setSuggestions(filteredSuggestions);
    } else {
      // If the input value is empty, show all suggestions
      setSuggestions([
        "فريمر",
        "أدوبي فوتوشوب",
        "فيجما",
        "سكتش",
        "أدوبي أكس دي",
      ]);
    }
  };

  const animateVariants = {
    hidden: {
      opacity: 0,
      translateY: -30,
    },
    show: {
      opacity: 1,
      translateY: 0,
      transition: {
        delay: 0.4,
        duration: 0.2,
      },
    },
  };

  return (
    <div
      className={`hidden md:flex gap-x-2 items-center h-[48px] bg-white rounded-[40px] border border-[#C8CBD0] py-[12px] px-[6px] lg:pt-[10x] lg:px-[10px] lg:pr-[16px] relative ${
        suggestions.length > 0 ? "border-[#F08631]" : ""
      }`}
    >
      <input
        type="text"
        className="border-0 outline-none bg-transparent flex-1 text-[12px] xl:text-[16px] focus:invalid:border-pink-500 "
        placeholder="إلى أين تريد أن تذهب؟"
        onFocus={handleSearchFocus}
        onBlur={handleSearchBlur}
        onChange={handleInputChange} // add an onChange handler
        value={inputValue} // add a value attribute
      />
      <div className="flex justify-center items-center bg-orange p-[8px] w-[28px] h-[28px] rounded-full">
        <Image src="/icons/search-white.svg" alt="/" height={24} width={24} />
      </div>
      {suggestions.length > 0 && (
        <motion.ul
          variants={animateVariants}
          initial="hidden"
          animate="show"
          className="absolute top-[50px] left-0 right-0 bg-white border-[1px] border-[#98A2B3] rounded-[8px] p-[14px] z-[7777]"
        >
          {suggestions.map((suggestion, index) => (
            <li
              key={index}
              className="px-[12px] py-[8px] hover:bg-[#F08631] hover:text-white cursor-pointer rounded-[4px] text-[12px]"
            >
              {suggestion}
            </li>
          ))}
        </motion.ul>
      )}
    </div>
  );
};

export default SearchAndContact;
