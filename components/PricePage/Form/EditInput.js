import React from "react";
import Select from "react-select";

export const EditInputField = ({ title, value, onChange, options, className, onValueChange }) => {

  const handleSelectChange = (selectedOption) => {
    onChange(selectedOption);
  };

  const handleInputChange = (inputValue) => {
    onValueChange?.(inputValue)
};

  return (
    <div className={`w-full lg:w-[375px] my-2 pr-2 ${className}`}>
      <div className={`font-circular-book text-gray-400 text-base flex items-center gap-x-20 w-full leading-none ${className}`}>
        {title}
        <div className="w-full lg:w-[245px]">
          <Select
            className={`bg-white outline-none rounded-sm  py-2.5  ${className}`}
            value={value}
            onInputChange={handleInputChange} // Call the handleInputChange function when the input value changes
            onChange={handleSelectChange}
            options={options}
            placeholder="Select an option"
            isSearchable
            noOptionsMessage={() => "No results found"}
          />
        </div>
      </div>
    </div>
  );
};
