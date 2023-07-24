import React from "react";
import InfoSvg from "../Svg/InfoSvg";
import PencilSvg from "../Svg/PencilSvg";
import Tippy from "@tippyjs/react";
import Select from "react-select";

const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];
const InputCard = ({
  title,
  name,
  info,
  condition,
  transport,
  pen,
  tooltip,
  setClickOnInputCard,
  onClose,
}) => {
  return (
    <div className="w-fullborder-b flex items-center gap-8 px-4 py-4">
      <div className="flex items-center gap-3 min-w-[114px]">
        <p className="font-circular-book w-[86px] text-gray-400 text-base leading-none">
          {title}
        </p>
        <Tippy animation="" content={tooltip}>
          <span className="cursor-pointer">{info && <InfoSvg />}</span>
        </Tippy>
      </div>
      {!(condition || transport) ? (
        <div className="flex items-center justify-between w-full gap-1.5">
          <p className="text-mildBlack text-base leading-none">{name}</p>
          {pen && <span onClick={() => setClickOnInputCard()}><PencilSvg  /></span>}
        </div>
      ) : condition ? (
        <div className="flex flex-col gap-2.5">
          <label
            className="flex cursor-pointer items-center gap-1.5"
            htmlFor="isRunning1"
          >
            <input
              className="w-[17px] h-[17px]"
              type="radio"
              name="running"
              id="isRunning1"
            />
            <div className="text-mildBlack text-base leading-none">Running</div>
          </label>
          <label
            className="flex cursor-pointer items-center gap-1.5"
            htmlFor="isRunning2"
          >
            <input
              className="w-[17px] h-[17px]"
              type="radio"
              name="running"
              id="isRunning2"
            />
            <div className="text-mildBlack text-base leading-none">
              Non-running
            </div>
          </label>
        </div>
      ) : (
        <div className="flex flex-col gap-2.5">
          <label
            className="flex cursor-pointer items-center gap-1.5"
            htmlFor="isOpen1"
          >
            <input
              className="w-[17px] h-[17px]"
              type="radio"
              name="open"
              id="isOpen1"
            />
            <div className="text-mildBlack text-base leading-none">Open</div>
          </label>
          <label
            className="flex cursor-pointer items-center gap-1.5"
            htmlFor="isOpen2"
          >
            <input
              className="w-[17px] h-[17px]"
              type="radio"
              name="open"
              id="isOpen2"
            />
            <div className="text-mildBlack text-base leading-none">
              Enclosed (+$220)
            </div>
          </label>
        </div>
      )}
    </div>
  );
};

export default InputCard;