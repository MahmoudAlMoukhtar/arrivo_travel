import React, {useState} from "react";

function Slider(props) {
  const [minPrice, setMinPrice] = useState(props.min);
  const [maxPrice, setMaxPrice] = useState(props.max);

  const handleMinChange = event => {
    setMinPrice(event.target.value);
  };

  const handleMaxChange = event => {
    setMaxPrice(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    props.onFilter(minPrice, maxPrice);
  };

  const handleReset = () => {
    setMinPrice(props.min);
    setMaxPrice(props.max);
    props.onFilter(props.min, props.max);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="slider-container">
        <label htmlFor="minPrice">{props.caption}</label>
        <div className="slider-wrapper slider mt-20">
          <input
            type="range"
            min={props.min}
            max={props.max}
            step={props.step}
            value={minPrice}
            onChange={handleMinChange}
            className="slider"
            id="minPrice"
          />
          <input
            type="range"
            min={props.min}
            max={props.max}
            step={props.step}
            value={maxPrice}
            onChange={handleMaxChange}
            className="slider"
            id="maxPrice"
          />
        </div>
        <div className="tooltip">
          <span className="min-tooltip">${minPrice}</span>
          <span className="max-tooltip">${maxPrice}</span>
        </div>
      </div>
      <button type="submit">Apply filter</button>
      <button type="button" onClick={handleReset}>
        Reset
      </button>
    </form>
  );
}

export default Slider;
