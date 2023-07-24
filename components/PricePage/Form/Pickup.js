import React from "react";
import FormTitle from "./FormTitle";
import ReactiveBtn from "@/components/Utils/ReactiveBtn";
import { Controller } from "react-hook-form";

const Pickup = ({
  register,
  control,
  watch,
  errors,
  setCurrentStep,
  currentStep,
}) => {
  const pickupAddress = watch("pickupAddress");
  const contact = watch("contact")
  return (
    <div className="w-full flex flex-col gap-5">
      <div className="flex flex-col gap-3">
        <FormTitle
          setCurrentStep={() => setCurrentStep(currentStep - 1)}
          title={"Vehicle pickup details"}
        />
      </div>
      <div className="flex flex-col gap-2 font-circular-book">
        <div className="text-gray-500 text-base leading-tight">
          Pickup address
        </div>
        <div className="flex flex-col gap-y-3">
          <div>
            <input
              {...register("streetAddress")}
              className={`w-full lg:w-[375px] placeholder:text-gray-400 rounded-sm border border-gray-400 px-5 py-2.5 ${
                errors.streetAddress && "border-2 border-red-500"
              }`}
              type="text"
              name="streetAddress"
              placeholder="Street Address"
            />
            {errors.streetAddress && (
              <p className="mt-1 text-sm text-red-500">
                {errors.streetAddress.message}
              </p>
            )}
          </div>
          <input
            className="w-full lg:w-[375px] placeholder:text-gray-400 rounded-sm border border-gray-400 px-5 py-2.5"
            type="text"
            name=""
            placeholder="Apt, Suite, etc. (optional)"
            id=""
          />
        </div>
      </div>
      <div className="text-blueishGray text-base leading-tight font-circular-book">
        Dallas, TX 75217
      </div>
      <div className="flex flex-col gap-2 font-circular-book">
        <Controller
          name="pickupAddress"
          control={control}
          render={({ field: { onChange, value } }) => {
            return (
              <>
                <div className="text-gray-500 text-base leading-tight">
                  This is a
                </div>
                <label
                  className="flex cursor-pointer items-center gap-2"
                  htmlFor="residential"
                >
                  <input
                    className="w-[17px] h-[17px]"
                    type="radio"
                    value="residential"
                    onChange={(e) => onChange(e.target.value)}
                    checked={value === "residential"}
                    id="residential"
                  />
                  <div className="text-text-blueishGray text-base leading-none">
                    Residential address
                  </div>
                </label>
                <label
                  className="flex cursor-pointer items-center gap-2"
                  htmlFor="business"
                >
                  <input
                    className="w-[17px] h-[17px]"
                    type="radio"
                    value="business"
                    onChange={(e) => onChange(e.target.value)}
                    checked={value === "business"}
                    id="business"
                  />
                  <div className="text-text-blueishGray text-base leading-none">
                    Business address
                  </div>
                </label>
                {errors.pickupAddress && (
                  <p className="text-sm text-red-500">
                    {errors.pickupAddress.message}
                  </p>
                )}
              </>
            );
          }}
        />
      </div>

      {pickupAddress === "business" && (
        <div>
          <label htmlFor="businessName">Business name</label>
          <input
            {...register("businessName")}
            className={`w-full lg:w-[375px] placeholder:text-gray-400 rounded-sm border border-gray-400 px-5 py-2.5 ${
              errors.businessName && "border-2 border-red-500"
            }`}
            type="text"
            name="businessName"
          />
          {errors.businessName && (
            <p className="mt-1 text-sm text-red-500">
              {errors.businessName.message}
            </p>
          )}
        </div>
      )}

      <div className="flex flex-col gap-2 font-circular-book">
        <Controller
          name="contact"
          control={control}
          render={({ field: { onChange, value } }) => {
            return (
              <>
                <div className="text-gray-500 text-base leading-tight">
                  Contact me
                </div>

                <label
                  className="flex cursor-pointer items-center gap-2"
                  htmlFor="individual"
                >
                  <input
                    className="w-[17px] h-[17px]"
                    value="individual"
                    onChange={(e) => onChange(e.target.value)}
                    checked={value === "individual"}
                    type="radio"
                    name="running"
                    id="individual"
                  />
                  <div className="text-text-blueishGray text-base leading-none">
                    An individual
                  </div>
                </label>
                <label
                  className="flex cursor-pointer items-center gap-2"
                  htmlFor="someone"
                >
                  <input
                    className="w-[17px] h-[17px]"
                    value="someone"
                    onChange={(e) => onChange(e.target.value)}
                    checked={value === "someone"}
                    type="radio"
                    name="running"
                    id="someone"
                  />
                  <div className="text-text-blueishGray text-base leading-none">
                    Contact someone else
                  </div>
                </label>
                {errors.contact && <p className="text-sm text-red-500">{errors.contact.message}</p>}
              </>
            );
          }}
        />
      </div>

      {contact === "someone" && (
        <div>
          <label htmlFor="contactName">Pickup contact's full name</label>
          <input
            {...register("contactName")}
            className={`w-full lg:w-[375px] placeholder:text-gray-400 rounded-sm border border-gray-400 px-5 py-2.5 ${
              errors.contactName && "border-2 border-red-500"
            }`}
            type="text"
            name="contactName"
            placeholder="e.g. John Doe"
          />
          {errors.contactName && (
            <p className="mt-1 text-sm text-red-500">
              {errors.contactName.message}
            </p>
          )}
          <label htmlFor="contactNumber">Phone number</label>
          <input
            {...register("contactNumber")}
            className={`w-full lg:w-[375px] placeholder:text-gray-400 rounded-sm border border-gray-400 px-5 py-2.5 ${
              errors.contactNumber && "border-2 border-red-500"
            }`}
            type="text"
            name="contactNumber"
            placeholder="Contact Number"
          />
          {errors.contactNumber && (
            <p className="mt-1 text-sm text-red-500">
              {errors.contactNumber.message}
            </p>
          )}
        </div>
      )}

      <ReactiveBtn
        title={"Delivery info"}
        type="submit"
        showSvg={true}
      />
    </div>
  );
};

export default Pickup;
