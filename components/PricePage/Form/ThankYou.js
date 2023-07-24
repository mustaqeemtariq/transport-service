import React from "react";

const ThankYou = () => {
  return (
    <div className="w-full">
      <div
        className="w-full xl:w-[607px] h-[332.40px] bg-gradient-to-b rounded-[20px] 
 from-sky-500 to-sky-50 p-px "
      >
        <div className="w-full h-full flex flex-col items-center shadow-[0_140px_120px_0px_rgba(14,14,34,0.08)]  bg-white rounded-[20px] p-8 gap-6">
          <img src="/assets/glow-tick.png" alt="" />
          <div className="flex items-center flex-col gap-3">
            <div className="w-[187px] h-[30px] text-center text-blueishGray text-3xl font-bold leading-tight">
              Thank You
            </div>
            <div className="sm:w-[448px] font-circular-book h-[68px] text-center text-zinc-400 text-xl leading-7">
              We'll be in touch shortly. For faster responses, please use the
              live chat.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThankYou;
