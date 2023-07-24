import React from "react";

const BookShipBtn = ({ svg, title, active, paypal }) => {
  return (
    <div
      className={`max-lg:px-5 lg:w-[143px] h-[50px] ${
        active ? "bg-oceanBlue" : "bg-slate-100"
      } rounded-tl rounded-tr flex items-center justify-center gap-2`}
    >
      {svg}
      {!paypal && (
        <div className="text-white text-base font-bold leading-tight">
          {title}
        </div>
      )}
    </div>
  );
};

export default BookShipBtn;
