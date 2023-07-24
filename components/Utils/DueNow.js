import React from "react";
import InfoSvg from "../Svg/InfoSvg";
import Tippy from "@tippyjs/react";

const DueNow = ({ selectedPrice, priceCardActive }) => {
  return (
    <div className="w-full h-[116px] bg-slate-100 flex flex-col items-center justify-between px-4 py-4">
      <div className="flex w-full gap-9">
        <div className="flex items-center gap-3 min-w-[114px]">
          <div className="text-oceanBlue text-sm w-[86px] font-bold leading-none">
            Due now
          </div>
          <Tippy
            animation=""
            content="We charge you once the carrier has been dispatched for your order. Only if you pay with PayPal you’ll be charged at the time of booking."
          >
            <span className="cursor-pointer">
              <InfoSvg />
            </span>
          </Tippy>
        </div>
        <div className="flex items-center gap-4">
          <div className="text-oceanBlue font-circular text-[38px] font-bold leading-10">
            $0
          </div>
          <div className="w-[153px] font-circular-book font-stroke-point-3 text-mildBlack text-xs leading-[18px]">
            Don’t worry-you won’t pay until your pickup is scheduled.
          </div>
        </div>
      </div>
      <div className="flex items-center gap-9 w-full">
        <div className="text-gray-500 text-sm leading-none min-w-[114px]">
          Price option
        </div>
        <div>
          <span className="text-mildBlack font-circular text-base font-bold leading-none">
            {`$${selectedPrice}`}
          </span>
          <span className="text-mildBlack  font-stroke-point-2 font-circular-book text-sm leading-none">
            {` ${priceCardActive == 1 ? "Discounted cash" : "Regular"} price`}
          </span>
        </div>
      </div>
    </div>
  );
};

export default DueNow;
