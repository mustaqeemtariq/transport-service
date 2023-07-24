import React from "react";

const TaDa = () => {
  return (
    <div className="flex items-center gap-10">
      <div className="w-full md:h-[132px] flex flex-col gap-5">
        <div className=" text-blueishGray text-xl font-bold capitalize leading-[30px]">
          Ta-da!
        </div>
        <div className="w-full py-2 bg-sky-50 rounded-[3px] border border-l-4 border-sky-400 flex items-center px-6">
          <div className="w-full">
            <span className="text-blueishGray font-circular-book text-base leading-relaxed">
              Your quote has been e-mailed to you
              <br />
              Ready to book? Hooray!{" "}
            </span>
            <span className="text-black text-base font-bold leading-relaxed">
              NO PAYMENT REQUIRED
            </span>
            <span className="text-blueishGray font-circular-book text-base leading-relaxed">
              {" "}
              to book your shipment.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaDa;
