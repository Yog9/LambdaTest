import React from "react";
import PropTypes from "prop-types";

/**
 * Component that renders a select box
 * @returns JSX Element
 */
const SelectOptions = ({ options, selectedOption, setSelectedOption }) => {
  return (
    <>
      <select
        className="select_box mb-1 mr-2 pb-1 pt-1 cursor-pointer"
        value={selectedOption}
        onChange={(e) => setSelectedOption(e.target.value)}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.value}
          </option>
        ))}
      </select>
    </>
  );
};

SelectOptions.propTypes = {
  options: PropTypes.array,
  selectedOption: PropTypes.string,
  setSelectedOption: PropTypes.func,
};

export default SelectOptions;
