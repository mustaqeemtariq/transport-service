import React from "react";

const ReactiveBtn = ({ type, title, onClick, showSvg = true }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className="lg:w-fit px-7 h-[49px] flex items-center justify-center gap-2 bg-[#1c2341] rounded-sm hover:bg-opacity-90 group"
    >
      <div className="text-center text-white text-base font-bold leading-tight">
        {title}
      </div>
      {showSvg && (
        <svg
          className="group-hover:left-2 relative left-0 transition-all duration-500"
          width="11"
          height="10"
          viewBox="0 0 11 10"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 5.62451L8.36688 5.62451L4.52375 9.11826L5.5 9.99951L11 4.99951L5.5 -0.000488281L4.53063 0.880762L8.36688 4.37451L0 4.37451L0 5.62451Z"
            fill="white"
          />
        </svg>
      )}
    </button>
  );
};

export default ReactiveBtn;
