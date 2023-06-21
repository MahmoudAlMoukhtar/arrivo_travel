import {useState} from "react";
import Select, {components} from "react-select";
import {useSpring, animated} from "react-spring";

const options = [
  {value: "chocolate", label: "Chocolate"},
  {value: "strawberry", label: "Strawberry"},
  {value: "vanilla", label: "Vanilla"},
];

const AnimatedSelect = animated(Select);

const customStyles = {
  control: provided => ({
    ...provided,
    border: "2px solid #ccc",
    borderRadius: "none",
  }),
  dropdownIndicator: provided => ({
    ...provided,
    color: "red",
  }),
};

const SelectBook = () => {
  const [showSelect, setShowSelect] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const props = useSpring({
    opacity: showSelect ? 1 : 0,
    transform: showSelect ? "scale(1)" : "scale(0.9)",
  });

  return (
    <div>
      <button onClick={() => setShowSelect(!showSelect)}>
        {showSelect ? "Hide Select" : "Show Select"}
      </button>
      <AnimatedSelect
        options={options}
        styles={customStyles}
        className="w-full"
        components={{DropdownIndicator}}
        isClearable
        isSearchable
        value={selectedOption}
        onChange={setSelectedOption}
        style={props}
      />
    </div>
  );
};

const DropdownIndicator = props => {
  const {selectProps} = props;
  return (
    <components.DropdownIndicator {...props}>
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M10 15L5 10L6.41016 8.58984L10 12.1797L13.5898 8.58984L15 10L10 15Z"
          fill={selectProps.menuIsOpen ? "red" : "black"}
        />
      </svg>
    </components.DropdownIndicator>
  );
};
export default SelectBook;
