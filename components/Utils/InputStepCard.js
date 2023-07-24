import React from "react";

const InputStepCard = ({ number, complete, title, active }) => {
  return (
    <div className="w-[42px] flex flex-col items-center gap-1">
      {complete ? (
        <img src="/assets/tick.png" alt="" />
      ) : (
        <div
          className={`w-[29px] h-[29px] flex items-center justify-center rounded-full border ${
            active ? "border-blue-400" : "border-gray-200"
          }`}
        >
          <div
            className={`${
              active ? "text-blue-400" : "text-gray-400"
            } text-base leading-tight`}
          >
            {number}
          </div>
        </div>
      )}
      <div
        className={`text-center ${
          active
            ? "text-blue-400 font-bold"
            : "text-blueishGray font-circular-book"
        } text-sm leading-tight`}
      >
        {title}
      </div>
    </div>
  );
};

export default InputStepCard;
