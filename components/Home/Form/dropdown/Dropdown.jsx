// import axios from "axios";
import React, { useState } from "react";

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
  const [filter, setFilter] = useState([]);

  const handleChange = (e) => {
    const { value } = e.target;
    setValue(value);
    setStepOneOpen(num);

    if (value === "") {
      setFilter([]);
      return;
    } else {
      //   filter city by value
      const filteredCity = city.filter((city) => {
        return city.city.toLowerCase().includes(value.toLowerCase());
      });

      setFilter(filteredCity);
    }
  };

  return (
    <div
      className="input-wrap input-wrap-list"
      style={{ marginBottom: "10px", width: "100%" }}
    >
      {error && (
        <span class="city_error_from error-text">
          Please enter a valid Zip or City
        </span>
      )}
      <input
        className="input q-input"
        id="city_from"
        // type="search"
        name="city_from"
        value={value}
        // autocomplete="off"
        placeholder={placeholder}
        onChange={handleChange}
      />
      <label for="city_from" className="input-label">
        {title}
      </label>
      {stepOneOpen && (
        <ul
          id="city_select"
          className="list-select"
          style={{ display: filter?.length === 0 ? "none" : "block" }}
        >
          {filter &&
            filter.map((city) => {
              return (
                <li
                  className="res"
                  key={city.zip_code}
                  onClick={() => {
                    handleCityChange(city);
                    setValue(city?.city);
                    setFilter([]);
                  }}
                  style={{ cursor: "pointer" }}
                >
                  {city?.city}, {city?.zip_code}
                </li>
              );
            })}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;

const city = [
  {
    city: "New York",
    zip_code: "10001",
  },
  {
    city: "Los Angeles",
    zip_code: "90001",
  },
  {
    city: "Chicago",
    zip_code: "60601",
  },
  {
    city: "Houston",
    zip_code: "77001",
  },
  {
    city: "Phoenix",
    zip_code: "85001",
  },
  {
    city: "Philadelphia",
    zip_code: "19019",
  },
  {
    city: "San Antonio",
    zip_code: "78201",
  },
  {
    city: "San Diego",
    zip_code: "92101",
  },
  {
    city: "Dallas",
    zip_code: "75201",
  },
  {
    city: "San Jose",
    zip_code: "95101",
  },
  {
    city: "Austin",
    zip_code: "78701",
  },
  {
    city: "Jacksonville",
    zip_code: "32201",
  },
  {
    city: "San Francisco",
    zip_code: "94101",
  },
  {
    city: "Columbus",
    zip_code: "43201",
  },
  {
    city: "Indianapolis",
    zip_code: "46201",
  },
  {
    city: "Fort Worth",
    zip_code: "76101",
  },
  {
    city: "Charlotte",
    zip_code: "28201",
  },
  {
    city: "Seattle",
    zip_code: "98101",
  },
  {
    city: "Denver",
    zip_code: "80201",
  },
  {
    city: "Washington",
    zip_code: "20001",
  },
  {
    city: "Boston",
    zip_code: "02101",
  },
  {
    city: "El Paso",
    zip_code: "79901",
  },
  {
    city: "Detroit",
    zip_code: "48201",
  },
  {
    city: "Nashville",
    zip_code: "37201",
  },
  {
    city: "Portland",
    zip_code: "97201",
  },
  {
    city: "Memphis",
    zip_code: "38101",
  },
  {
    city: "Oklahoma City",
    zip_code: "73101",
  },
  {
    city: "Las Vegas",
    zip_code: "89101",
  },
  {
    city: "Louisville",
    zip_code: "40201",
  },
  {
    city: "Baltimore",
    zip_code: "21201",
  },
  {
    city: "Milwaukee",
    zip_code: "53201",
  },
  {
    city: "Albuquerque",
    zip_code: "87101",
  },
  {
    city: "Tucson",
    zip_code: "85701",
  },
  {
    city: "Fresno",
    zip_code: "93650",
  },
  {
    city: "Sacramento",
    zip_code: "94203",
  },
  {
    city: "Mesa",
    zip_code: "85201",
  },
  {
    city: "Kansas City",
    zip_code: "64101",
  },
  {
    city: "Atlanta",
    zip_code: "30301",
  },
  {
    city: "Long Beach",
    zip_code: "90801",
  },
  {
    city: "Colorado Springs",
    zip_code: "80901",
  },
  {
    city: "Raleigh",
    zip_code: "27601",
  },
  {
    city: "Miami",
    zip_code: "33101",
  },
  {
    city: "Virginia Beach",
    zip_code: "23450",
  },
  {
    city: "Omaha",
    zip_code: "68101",
  },
  {
    city: "Oakland",
    zip_code: "94601",
  },
  {
    city: "Minneapolis",
    zip_code: "55401",
  },
  {
    city: "Tulsa",
    zip_code: "74101",
  },
  {
    city: "Arlington",
    zip_code: "22201",
  },
  {
    city: "New Orleans",
    zip_code: "70112",
  },
  {
    city: "Wichita",
    zip_code: "67201",
  },
  {
    city: "Cleveland",
    zip_code: "44101",
  },
  {
    city: "Tampa",
    zip_code: "33601",
  },
  {
    city: "Bakersfield",
    zip_code: "93301",
  },
  {
    city: "Aurora",
    zip_code: "80010",
  },
  {
    city: "Anaheim",
    zip_code: "92801",
  },
  {
    city: "Honolulu",
    zip_code: "96801",
  },
  {
    city: "Santa Ana",
    zip_code: "92701",
  },
  {
    city: "Riverside",
    zip_code: "92501",
  },
  {
    city: "Corpus Christi",
    zip_code: "78401",
  },
  {
    city: "Lexington",
    zip_code: "40502",
  },
  {
    city: "Stockton",
    zip_code: "95201",
  },
  {
    city: "Henderson",
    zip_code: "89002",
  },
  {
    city: "Saint Paul",
    zip_code: "55101",
  },
  {
    city: "St. Louis",
    zip_code: "63101",
  },
  {
    city: "Cincinnati",
    zip_code: "45201",
  },
  {
    city: "Pittsburgh",
    zip_code: "15201",
  },
  {
    city: "Greensboro",
    zip_code: "27401",
  },
  {
    city: "Anchorage",
    zip_code: "99501",
  },
  {
    city: "Plano",
    zip_code: "75023",
  },
  {
    city: "Lincoln",
    zip_code: "68501",
  },
  {
    city: "Orlando",
    zip_code: "32801",
  },
];
