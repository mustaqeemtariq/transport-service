import shipmentService from "@/components/Services/shipment";
import axios from "axios";
import React, { useEffect, useState } from "react";

const Dropdown = ({
  title,
  handleCityChange,
  placeholder,
  isZipCodeError,
  error,
  stepOneOpen,
  setStepOneOpen,
  num,
}) => {
  const [value, setValue] = useState();
  const [city, setCity] = useState([])
  const [selectedCity, setSelectedCity] = useState()

  useEffect(() => {
    if (value && value.length >= 2) {
      shipmentService.getZipCode(value).then(res => setCity(res))
    }
    else {
      setCity([])
    }
  }, [value])

  const handleChange = (e) => {
    const { value } = e.target;
    setValue(value);
  };

  return (
    <div
      className="input-wrap input-wrap-list"
      style={{ marginBottom: "10px", width: "100%" }}
    >
      {value !== selectedCity && (
        <span class="city_error_from error-text">
          Please enter a valid Zip or City
        </span>
      )}
      <input
        className="input q-input"
        id="city_from"
        name="city_from"
        value={value}
        placeholder={placeholder}
        onChange={handleChange}
      />
      <label for="city_from" className="input-label">
        {title}
      </label>
        <ul
          id="city_select"
          className="list-select"
          style={{ display: city.length <= 0 ? "none" : "block" }}
        >
          {city.length > 0 ?
            city.map((c) => {
              return (
                <li
                  className="res"
                  key={c}
                  onClick={() => {
                    setSelectedCity(c)
                    handleCityChange(c)
                    setCity([])
                    setValue(c);
                  }}
                  style={{ cursor: "pointer" }}
                >
                  {c}
                </li>
              );
            }) : <li>No result found</li>}
        </ul>
      
    </div>
  );
};

export default Dropdown;