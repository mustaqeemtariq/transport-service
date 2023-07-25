import ServiceCard from "@/components/Utils/ServiceCard";
import React from "react";
import PriceCard from "../PriceCard";
import ReactiveBtn from "@/components/Utils/ReactiveBtn";

const ServiceTopSection = ({
  setCurrentStep,
  setselectedPrice,
  setPriceCardActive,
  priceCardActive,
  price,
}) => {
  return (
    <div className="flex flex-col gap-12 max-sm:mt-4">
      <div className="flex flex-col gap-5">
        <div className="sm:h-9 flex items-center mt-5 border-b">
          <div className="flex items-center gap-4 sm:gap-10  max-sm:flex-wrap">
            <ServiceCard
              tooltip={
                "The car will be pick up and delivered as close as legally and safely possible to any residential and/or business address."
              }
              serviceName={"Service type"}
              serviceType={"Door to door"}
            />
            <ServiceCard
              tooltip={
                "Your vehicle is fully insured from pickup to delivery with no deductible to you."
              }
              serviceName={"Insurance"}
              serviceType={"Included"}
            />
          </div>
        </div>
        <div className="flex items-center max-xl:gap-7 xl:gap-12 max-md:flex-wrap">
          <PriceCard
            setselectedPrice={() => setselectedPrice(339)}
            title={"Discounted cash price"}
            price={price}
            setPriceCardActive={() => setPriceCardActive(1)}
            active={priceCardActive == 1}
          />
          <PriceCard
            setselectedPrice={() => setselectedPrice(349)}
            title={"Regular price"}
            price={price}
            setPriceCardActive={() => setPriceCardActive(2)}
            active={priceCardActive == 2}
          />
        </div>
      </div>
      <div className="flex flex-col gap-5">
        <ReactiveBtn
          title={"Continue to booking details"}
          onClick={setCurrentStep}
          showSvg={false}
        />
        {/* <button
          onClick={setCurrentStep}
          className="w-[280px] h-[49px] bg-redishOrange rounded-sm text-center text-white text-base font-bold leading-tight"
        >
          
        </button> */}
        <div className="flex flex-col gap-2">
          <div className="text-gray-500 font-circular-book text-sm leading-tight">
            Don't know the exact day? That's ok! You can change at any time. You
            will be still able to review your order.
          </div>
          <div className="text-gray-500 font-circular-book text-base leading-tight">
            - OR -
          </div>
          <div className="text-gray-500 font-circular text-sm font-bold leading-tight">
            Book with one of our friendly Customer Service Agents!
          </div>
          <div className="text-oceanBlue font-circular-book text-xl leading-tight">
            (888) 666-8929
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceTopSection;
