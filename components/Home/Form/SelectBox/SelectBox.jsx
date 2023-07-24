import React, { useEffect, useState } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const SelectBox = ({
  data,
  onChange,
  title,
  formOpen,
  setFormOpen,
  num,
  disable,
}) => {
  const [isYearListVisible, setIsYearListVisible] = useState(false);
  const [input, setInput] = useState("");

  const handleInputFocus = () => {
    setFormOpen(num);
    setIsYearListVisible(true);
  };

  useEffect(() => {
    if (disable === false) {
      setFormOpen(num);
      setIsYearListVisible(true);
    }
  }, [disable]);

  //   const handleInputBlur = () => {
  //     setIsYearListVisible(false);
  //   };

  const handleSelect = (value) => {
    setInput(value);
    setIsYearListVisible(false);
  };

  useEffect(() => {
    return () => {
      setIsYearListVisible(false);
    };
  }, []);

  return (
    <div className="input-wrap input-wrap-list" style={{ width: "100%" }}>
      <span className="year_error error-text"></span>
      <input
        className="input q-input"
        id="selected_year"
        type="text"
        value={input}
        // placeholder="Select"
        onFocus={handleInputFocus}
        disabled={disable}
        style={{ background: disable ? "#f4f7fa" : "#fff", width: "100%" }}
        // onBlur={handleInputBlur}
      />
      <label for="selected_year" className="input-label">
        {title}
      </label>

      {formOpen && (
        <ul
          id="year"
          className="list-select"
          style={{ display: isYearListVisible ? "block" : "none" }}
        >
          {data?.map((el, i) => (
            <li
              key={i}
              onClick={() => {
                handleSelect(el?.label);
                onChange(el);
              }}
            >
              {el?.label}
            </li>
          ))}
        </ul>
      )}

      {!input && (
        <div
          style={{ display: "flex", alignItems: "center" }}
          className="value-wrap value-placeholder d-flex align-items-center"
        >
          <span
            className="input-value input-value-year d-inline-flex select_label"
            data-placeholder="Select"
          >
            Select
          </span>
          <ExpandMoreIcon />
        </div>
      )}
    </div>
  );
};

export default SelectBox;
