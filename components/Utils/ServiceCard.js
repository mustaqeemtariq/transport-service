import React from "react";
import InfoSvg from "../Svg/InfoSvg";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css"; // optional

const ServiceCard = ({ serviceName, serviceType, tooltip }) => {
  return (
    <div className="flex items-center gap-5">
      <span className="text-gray-500 font-circular-book text-[15px] leading-tight">
        {serviceName}
      </span>
      <div className="flex items-center gap-1.5">
        <span className="text-blueishGray text-[15px] font-bold leading-tight">
          {serviceType}
        </span>
        <Tippy animation="" content={tooltip}>
          <span className="cursor-pointer">
            <InfoSvg />
          </span>
        </Tippy>
      </div>
    </div>
  );
};

export default ServiceCard;
