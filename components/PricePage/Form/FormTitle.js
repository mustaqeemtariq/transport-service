import React from "react";

const FormTitle = ({ title, setCurrentStep }) => {
  return (
    <div className="relative">
      <svg
        onClick={setCurrentStep}
        className="absolute left-0 top-0"
        width="26"
        height="26"
        viewBox="0 0 26 26"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="13" cy="13" r="12.5" stroke="#D8D8D8" />
        <g clipPath="url(#clip0_71_1539)">
          <path
            d="M17.6667 12.4166H10.5675L13.8284 9.15575L13 8.33325L8.33337 12.9999L13 17.6666L13.8225 16.8441L10.5675 13.5833H17.6667V12.4166Z"
            fill="#D8D8D8"
          />
        </g>
        <defs>
          <clipPath id="clip0_71_1539">
            <rect
              width="14"
              height="14"
              fill="white"
              transform="translate(6 6)"
            />
          </clipPath>
        </defs>
      </svg>
      <div className="ml-9 text-blueishGray text-2xl font-bold leading-tight ">
        {title}
      </div>
    </div>
  );
};

export default FormTitle;
