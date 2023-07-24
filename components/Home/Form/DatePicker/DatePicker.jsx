import { Box } from "@mui/material";
import React, { useState } from "react";
import DatePicker from "react-datepicker";

const CustomDatePicker = ({ startDate, setStartDate }) => {
  console.log(startDate, "startDate");

  // eslint-disable-next-line react/display-name
  const CustomInput = React.forwardRef((props, ref) => {
    return (
      <input
        // className={[classes.TransparentInput, "uk-input"].join(" ")}
        onClick={props.onClick}
        value={props.value}
        type="text"
        style={{ width: "100%" }}
        placeholder="MM/DD/YYYY"
        readOnly={true}
        ref={ref}
      />
    );
  });
  return (
    <>
      <div
        className="input-wrap input-grey datepicker-wrap"
        style={{ width: "100%" }}
      >
        <span className="datepicker_error error-text"></span>

        <DatePicker
          customInput={<CustomInput />}
          value={startDate}
          onChange={(date) => setStartDate(date)}
          selected={startDate}
          style={{ width: "100%" }}
          placeholderText="MM/DD/YYYY"
        />

        {/* <DatePicker
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          style={{ width: "100%" }}
          placeholderText="MM/DD/YYYY"
          onKeyDown={(e) => {
            e.preventDefault();
          }}
          disabledKeyboardNavigation={true}
          readonly
          // withPortal
        /> */}

        <label id="datepicker-label" for="datepicker" className="input-label ">
          I prefer to ship on
        </label>
        <span className="icon-date_picker"></span>
      </div>
    </>
  );
};

export default CustomDatePicker;
