import React from "react";
import InputField from "./InputField";
import FormTitle from "./FormTitle";
import ReactiveBtn from "@/components/Utils/ReactiveBtn";
import { Controller } from "react-hook-form";

const Transport = ({
  control,
  errors,
  register,
  setCurrentStep,
  currentStep,
  watch
}) => {

  const type = watch("type")

  return (
    <div className="w-full flex flex-col gap-5">
      <div className="flex flex-col gap-3">
        <FormTitle
          setCurrentStep={() => setCurrentStep(currentStep - 1)}
          title={"Transport"}
        />
        <div className="text-gray-500 font-circular-book text-base leading-tight">
          A couple more specifics, we want to get everything right!
        </div>
      </div>
      <div className="flex flex-col gap-2 font-circular-book">
        <Controller
          name="type"
          control={control}
          render={({ field: { onChange, value } }) => {
            return (
              <>
                <div className="text-gray-500 text-base leading-tight">
                  You are
                </div>
                <label
                  className="flex cursor-pointer items-center gap-2"
                  htmlFor="individual"
                >
                  <input
                    onChange={(e) => onChange(e.target.value)}
                    value="individual"
                    checked={value === "individual"}
                    className="w-[17px] h-[17px]"
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
                  htmlFor="business"
                >
                  <input
                    onChange={(e) => onChange(e.target.value)}
                    value="business"
                    checked={value === "business"}
                    className="w-[17px] h-[17px]"
                    type="radio"
                    name="running"
                    id="business"
                  />
                  <div className="text-text-blueishGray text-base leading-none">
                    Representing a business
                  </div>
                </label>
                {errors.type && <p className="text-sm text-red-500">{errors.type.message}</p>}
              </>
            );
          }}
        />
      </div>
      <div className="flex flex-col gap-5 font-circular-book">
        {type === "business" && 
        <InputField
          errors={errors}
          register={register}
          name="companyName"
          title={"Company Name"}
        />
        }
        <InputField
          errors={errors}
          register={register}
          name="fullName"
          title={"Your Full Name"}
          placeholder={"e.g. John Doe"}
        />
        <InputField
          errors={errors}
          register={register}
          name="email"
          title={"Email"}
          placeholder={"Your Email"}
        />
        <InputField
          errors={errors}
          register={register}
          name="phone"
          title={"Phone Number"}
          placeholder={"0161116666"}
        />
        <div className="">
          <span className="text-oceanBlue text-base leading-tight">
            + add another number{" "}
          </span>
          <span className="text-gray-500 text-base leading-tight">
            (Optional)
          </span>
        </div>
      </div>

      <ReactiveBtn title={"Pickup info"} type="submit" />
      <div className="w-10/12 mt-14">
        <span className="text-gray-500 text-base leading-tight">
          By providing your information, you agree to our{" "}
        </span>
        <span className="text-oceanBlue text-base leading-tight">
          privacy policy{" "}
        </span>
        <span className="text-gray-500 text-base leading-tight">
          and SMS notifications.Up to 8msgs/mo. Msg&data rates may apply. Text
          STOP to unsubscribe.
        </span>
      </div>
    </div>
  );
};

export default Transport;
