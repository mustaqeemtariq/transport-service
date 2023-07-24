import React from "react";
import FormTitle from "./FormTitle";
import BookShipBtn from "./BookShipBtn";
import CardSvg from "@/components/Svg/CardSvg";
import PaypalSvg from "@/components/Svg/PaypalSvg";
import ReactiveBtn from "@/components/Utils/ReactiveBtn";
import InfoSvg from "@/components/Svg/InfoSvg";

const BookShipment = ({ register, errors, setCurrentStep, currentStep }) => {
  return (
    <div className="w-full flex flex-col gap-5">
      <div className="flex flex-col gap-3">
        <FormTitle
          setCurrentStep={() => setCurrentStep(currentStep - 1)}
          title={"Last step!"}
        />
      </div>
      <div className="flex items-center border-b border-sky-500">
        <BookShipBtn active={true} svg={<CardSvg />} title={"Credit Card"} />
      </div>
      <div className="w-full lg:w-[750px] py-4 bg-sky-50 rounded-sm border border-sky-400 flex flex-col justify-center px-4">
        <div className="w-full lg:w-[582px] font-circular-book text-oceanBlue text-3xl leading-relaxed">
          $0 Due now
        </div>
        <div className="text-blueishGray text-base font-bold leading-tight">
          Your credit card will not be charged until the order is assigned to a
          carrier.
        </div>
      </div>
      <div className="flex flex-col gap-2.5">
        <div className="flex items-center gap-4">
          <img src="/assets/lock.png" />
          <div className="text-black text-base font-bold leading-tight">
            This is a secure 256-bit SSL Encrypted site. You’re safe!
          </div>
        </div>
        <div className="w-full lg:w-[749px] bg-slate-100 rounded-[3px] border border-neutral-200 p-5">
          <div className="flex flex-col gap-2.5">
            <div className="flex items-center w-full justify-between gap-2.5">
              <div className="w-[163px] text-gray-500 text-base font-bold leading-tight">
                Card number
              </div>
              <img className="w-[131px] h-[25px]" src="/assets/payment.png" />
            </div>
            <input
              className={`lg:w-[710px] h-[50px] px-2 bg-white rounded-sm border border-stone-300 ${errors.ccNumber && "border-2 border-red-500"}`}
              type="tel"
              inputmode="numeric"
              pattern="[0-9\s]{13,19}"
              maxLength="19"
              {...register("ccNumber")}
              placeholder="xxxx xxxx xxxx xxxx"
            />
            {errors.ccNumber && <p className="text-sm text-red-500">{errors.ccNumber.message}</p>}
            <div className="flex items-center gap-4 max-lg:flex-wrap xl:justify-between">
              <div className="flex flex-col gap-2 w-full">
                <div className="w-[132.80px] text-gray-500 text-base font-bold leading-tight">
                  Full name on card
                </div>
                <input
                  name="creditName"
                  {...register("creditName")}
                  type="text"
                  className="px-2 min-w-full xl:w-[346px] h-[50px] bg-white rounded-sm border border-stone-300"
                />
              </div>
              {errors.creditName && <p className="text-sm text-red-500">{errors.creditName.message}</p>}
              <div className="flex flex-col gap-2  w-full">
                <div className="text-gray-500 text-base font-bold leading-tight">
                  Expiration date
                </div>
                <input
                  name="startExpiry"
                  id="expiry"
                  {...register("startExpiry")}
                  type="month"
                  className="px-2 min-w-full xl:w-[164px] h-[50px] bg-white rounded-sm border border-stone-300"
                />
              </div>
              {errors.startExpiry && <p className="text-sm text-red-500">{errors.startExpiry.message}</p>}
              <div className="flex flex-col gap-2  w-full">
                <div className="text-gray-500 text-base font-bold leading-tight">
                  Expiration date
                </div>
                <input
                  name="endExpiry"
                  id="expiry"
                  {...register("endExpiry")}
                  type="month"
                  className="px-2 min-w-full xl:w-[164px] h-[50px] bg-white rounded-sm border border-stone-300"
                />
              </div>
              {errors.endExpiry && <p className="text-sm text-red-500">{errors.endExpiry.message}</p>}
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-3 max-xs:flex-wrap">
        <img src="/assets/4.png" />
        <img src="/assets/1.png" />
        <img src="/assets/3.png" />
        <img src="/assets/2.png" />
      </div>

      <div className="flex flex-col gap-2 mt-7 font-circular-book">
        <div className="flex items-center gap-1.5">
          <div className="text-gray-500 text-base leading-tight">
            Billing address
          </div>
          <InfoSvg />
        </div>
        <label
          className="flex cursor-pointer items-center gap-2"
          htmlFor="address1"
        >
          <input
            className="w-[17px] h-[17px]"
            type="radio"
            name="running"
            id="address1"
          />
          <div className="text-text-blueishGray text-base leading-none">
            244 ten road Dallas, TX 75217
          </div>
        </label>
        <label
          className="flex cursor-pointer items-center gap-2"
          htmlFor="address2"
        >
          <input
            className="w-[17px] h-[17px]"
            type="radio"
            name="running"
            id="address2"
          />
          <div className="text-text-blueishGray text-base leading-none">
            2444 ten five Austin, TX 78745
          </div>
        </label>
        <label
          className="flex cursor-pointer items-center gap-2"
          htmlFor="address3"
        >
          <input
            className="w-[17px] h-[17px]"
            type="radio"
            name="running"
            id="address3"
          />
          <div className="text-text-blueishGray text-base leading-none">
            Other address
          </div>
        </label>

        <div className="w-full h-[0px] border border-black border-opacity-10 my-5"></div>

        <div className="text-emerald-600 text-sm leading-tight">
          Complete your booking to get the best price now!
        </div>
      </div>
      <ReactiveBtn
        title={"Book shipment"}
        type="submit"
        showSvg={false}
      />

      <div className="lg:w-[635px] font-circular-book">
        <span className="text-gray-500 text-base leading-tight">
          By clicking “Book shipment” you agree to our{" "}
        </span>
        <span className="text-oceanBlue text-base leading-tight">
          Terms & Conditions.
        </span>
      </div>
      <div className="flex items-center gap-2 font-circular-book">
        <div className="w-[149px] text-gray-500 text-base leading-tight">
          When can I cancel?
        </div>
        <InfoSvg />
      </div>
    </div>
  );
};

export default BookShipment;
