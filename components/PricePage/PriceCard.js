import React from "react";
import GreenTickSvg from "../Svg/GreenTickSvg";

const PriceCard = ({
  active,
  setPriceCardActive,
  title,
  price,
  setselectedPrice,
}) => {
  return (
    <div
      onClick={() => {
        setPriceCardActive();
        setselectedPrice();
      }}
      className={`w-full lg:max-w-[321px] h-[260px] rounded-md ${
        active
          ? "border-borderGreen bg-white shadow-2xl"
          : "bg-liteGray border-[#9BA3B0]"
      } border relative flex flex-col justify-center gap-7 items-center overflow-hidden`}
    >
      {active && (
        <GreenTickSvg className="absolute -left-5 top-[4.5rem] w-20" />
      )}
      <div className="text-blueishGray text-[19px] font-bold leading-tight">
        {title}
      </div>
      <div className="w-[107px] h-14 relative antialiased">
        <div className="text-blueishGray font-stroke font-circular-book text-[56px] font-bold leading-[56px]">
          {price}
        </div>
        <div className="text-blueishGray font-circular-book text-[19px] leading-[18px] absolute top-0 -left-3">
          $
        </div>
      </div>

      <div className="w-[266px] text-center text-blueishGray text-sm leading-[21px]">
        Once the order is assigned to a carrier, a partial payment will be
        charged, the balance will be due in cash on delivery.
      </div>
    </div>
  );
};

export default PriceCard;
