import ContentWrapper from "@/components/Layout/ContentWrapper";
import BookShipment from "@/components/PricePage/Form/BookShipment";
import Pickup from "@/components/PricePage/Form/Pickup";
import ThankYou from "@/components/PricePage/Form/ThankYou";
import Transport from "@/components/PricePage/Form/Transport";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  Control,
  Controller,
  FieldErrors,
  UseFormRegister,
  UseFormResetField,
  UseFormSetValue,
  useForm,
} from "react-hook-form";
import * as yup from "yup";
import ServiceTopSection from "@/components/PricePage/ServiceSection/ServiceTopSection";
import TaDa from "@/components/PricePage/TaDa";
import DueNow from "@/components/Utils/DueNow";
import InputCard from "@/components/Utils/InputCard";
import InputStepCard from "@/components/Utils/InputStepCard";
import { useState } from "react";
import { InputClickCard } from "@/components/Utils/InputClickCard";
import PencilSvg from "@/components/Svg/PencilSvg";
import Tippy from "@tippyjs/react";
import InfoSvg from "@/components/Svg/InfoSvg";
import Delivery from "@/components/PricePage/Form/Delivery";

export default function Home() {
  const [currentStep, setCurrentStep] = useState(false);
  const [priceCardActive, setPriceCardActive] = useState(1);
  const [selectedPrice, setselectedPrice] = useState(0);
  const [clickOnInputCard, setclickOnInputCard] = useState();
  const nameOfCurrentStep =
    currentStep == 1
      ? "Transport"
      : currentStep == 2
      ? "Pickup"
      : currentStep == 3
      ? "Delivery"
      : currentStep == 4
      ? "Book shipment"
      : "Thank you";

  const schema = yup.object({
    fullName: yup.string().when(`$step`, {
      is: "Transport",
      then: (schema) =>
        schema
          .required("Full name is required")
          .test(
            "has-full-name",
            "Please enter both first name and last name",
            (value) => {
              if (!value) return false;
              const names = value.trim().split(" ");
              return names.length >= 2;
            }
          ),
    }),
    email: yup.string().when(`$step`, {
      is: "Transport",
      then: (schema) =>
        schema
          .email("Email must be a valid email address")
          .required("Email is required"),
    }),
    phone: yup.string().when(`$step`, {
      is: "Transport",
      then: (schema) =>
        schema
          .required("Phone is required")
          .max(11, "Phone number should be 11 digits")
          .min(11, "Phone number should be 11 digits"),
    }),
    companyName: yup.string().when(`$step`, {
      is: "Transport",
      then: (schema) =>
        schema.test(
          "has company name",
          "Company name is required",
          function (value) {
            const type = this.parent.type;
            if (!value && type === "business") return false;
            return true;
          }
        ),
    }),
    type: yup.string().when(`$step`, {
      is: "Transport",
      then: (schema) => schema.required("Type is required"),
    }),
    streetAddress: yup.string().when(`$step`, {
      is: "Pickup",
      then: (schema) => schema.required("Street Address is required"),
    }),
    deliveryStreetAddress: yup.string().when(`$step`, {
      is: "Delivery",
      then: (schema) => schema.required("Street Address is required"),
    }),
    pickupAddress: yup.string().when(`$step`, {
      is: "Pickup",
      then: (schema) => schema.required("Pickup Address is required"),
    }),
    deliveryAddress: yup.string().when(`$step`, {
      is: "Delivery",
      then: (schema) => schema.required("Delivery Address is required"),
    }),
    businessName: yup.string().when(`$step`, {
      is: "Pickup",
      then: (schema) =>
        schema.test(
          "has business name",
          "Business name is required",
          function (value) {
            const pickupAddress = this.parent.pickupAddress;
            if (!value && pickupAddress === "business") return false;
            return true;
          }
        ),
    }),
    deliveryBusinessName: yup.string().when(`$step`, {
      is: "Delivery",
      then: (schema) =>
        schema.test(
          "has business name",
          "Business name is required",
          function (value) {
            const deliveryAddress = this.parent.deliveryAddress;
            if (!value && deliveryAddress === "business") return false;
            return true;
          }
        ),
    }),
    contact: yup.string().when(`$step`, {
      is: "Pickup",
      then: (schema) => schema.required("Contact info is required"),
    }),
    deliveryContact: yup.string().when(`$step`, {
      is: "Delivery",
      then: (schema) => schema.required("Contact info is required"),
    }),
    contactName: yup.string().when(`$step`, {
      is: "Pickup",
      then: (schema) =>
        schema.test(
          "has contact name",
          "Contact name is required",
          function (value) {
            const contact = this.parent.contact;
            if (!value && contact === "someone") return false;
            return true;
          }
        ),
    }),
    deliveryContactName: yup.string().when(`$step`, {
      is: "Delivery",
      then: (schema) =>
        schema.test(
          "has contact name",
          "Contact name is required",
          function (value) {
            const deliveryContact = this.parent.deliveryContact;
            if (!value && deliveryContact === "someone") return false;
            return true;
          }
        ),
    }),
    contactNumber: yup.string().when(`$step`, {
      is: "Pickup",
      then: (schema) =>
        schema.test(
          "has contact number",
          "Contact number is required",
          function (value) {
            const contact = this.parent.contact;
            if (!value && contact === "someone") return false;
            return true;
          }
        ),
    }),
    deliveryContactNumber: yup.string().when(`$step`, {
      is: "Delivery",
      then: (schema) =>
        schema.test(
          "has contact number",
          "Contact number is required",
          function (value) {
            const deliveryContact = this.parent.deliveryContact;
            if (!value && deliveryContact === "someone") return false;
            return true;
          }
        ),
    }),
    ccNumber: yup
      .number()
      .transform((val) => (isNaN(val) ? undefined : val))
      .when("$step", {
        is: "Book shipment",
        then: (schema) =>
          schema
            .typeError("Please enter a valid credit card number")
            .required("Credit card number is required"),
      }),
    creditName: yup.string().when("$step", {
      is: "Book shipment",
      then: (schema) =>
        schema
          .matches(/^[A-Za-z]+$/, "Enter a valid name")
          .required("Card name is required"),
    }),
    startExpiry: yup.string().when("$step", {
      is: "Book shipment",
      then: (schema) => schema.required("Start date is required"),
    }),
    endExpiry: yup.string().when("$step", {
      is: "Book shipment",
      then: (schema) => schema.required("End date is required"),
    }),
  });

  const {
    register,
    handleSubmit,
    control,
    watch,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    context: { step: nameOfCurrentStep },
    mode: "all",
  });

  const nextStep = handleSubmit((data) => {
    setCurrentStep((prev) => prev + 1);
  });

  const onSubmit = handleSubmit((data) => {
    console.log("DARA", data);
  });

  return (
    <main className="">
      {currentStep ? (
        <>
          <div className="sm:hidden w-full h-[94px] flex items-center justify-center gap-16 bg-slate-100">
            <ContentWrapper
              customStyle={"!py-0 flex items-center justify-start gap-6"}
            >
              <InputStepCard
                active={true}
                number={currentStep}
                title={nameOfCurrentStep}
              />
            </ContentWrapper>
          </div>
          <div className="max-sm:hidden w-full h-[94px] flex items-center justify-center gap-16 bg-slate-100">
            <ContentWrapper
              customStyle={"!py-0 flex items-center justify-center gap-6"}
            >
              <InputStepCard
                active={currentStep == 1}
                number={1}
                complete={currentStep - 1 >= 1}
                title={"Transport"}
              />
              <div className="w-[175px] h-[1px] bg-gray-300"></div>
              <InputStepCard
                active={currentStep == 2}
                number={2}
                complete={currentStep - 2 >= 1}
                title={"Pickup"}
              />
              <div className="w-[175px] h-[1px] bg-gray-300"></div>
              <InputStepCard
                active={currentStep == 3}
                number={3}
                complete={currentStep - 3 >= 1}
                title={"Delivery"}
              />
              <div className="w-[175px] h-[1px] bg-gray-300"></div>
              <InputStepCard
                active={currentStep == 4}
                number={4}
                complete={currentStep - 4 >= 1}
                title={"Book shipment"}
              />
              <div className="w-[175px] h-[1px] bg-gray-300"></div>
              <InputStepCard
                active={currentStep == 5}
                number={5}
                complete={currentStep - 5 == 1}
                title={"Thank you"}
              />
            </ContentWrapper>
          </div>
        </>
      ) : null}
      <ContentWrapper>
        <div className="flex w-full max-xl:gap-7 xl:gap-8 justify-between max-lg:flex-wrap">
          <form
            onSubmit={(event) => {
              currentStep === 4 ? onSubmit(event) : nextStep(event);
            }}
          >
            {currentStep == "1" ? (
              <Transport
                currentStep={currentStep}
                errors={errors}
                control={control}
                register={register}
                watch={watch}
                setCurrentStep={setCurrentStep}
              />
            ) : currentStep == "2" ? (
              <Pickup
                register={register}
                errors={errors}
                control={control}
                watch={watch}
                currentStep={currentStep}
                setCurrentStep={setCurrentStep}
              />
            ) : currentStep == "3" ? (
              <Delivery
                register={register}
                errors={errors}
                control={control}
                watch={watch}
                currentStep={currentStep}
                setCurrentStep={setCurrentStep}
                delivery={true}
              />
            ) : currentStep == "4" ? (
              <BookShipment
                currentStep={currentStep}
                register={register}
                errors={errors}
                setCurrentStep={setCurrentStep}
              />
            ) : currentStep == "5" ? (
              <ThankYou />
            ) : (
              <div className="max-lg:w-full lg:w-11/12">
                <TaDa />
                <ServiceTopSection
                  setselectedPrice={setselectedPrice}
                  priceCardActive={priceCardActive}
                  setPriceCardActive={setPriceCardActive}
                  setCurrentStep={() => setCurrentStep(1)}
                />
              </div>
            )}
          </form>

          <div className="w-full lg:max-w-[392px] flex flex-col gap-3.5 ">
            <div className="text-zinc-800 text-3xl font-bold leading-[30px]">
              Details
            </div>
            <div className="border border-stone-500 border-opacity-30">
              <InputCard title={"Distance"} name={"202mi"} />

              <div className="border-b flex items-center gap-8 px-4 py-4">
                <div className="flex items-center gap-3 min-w-[114px]">
                  <p className="font-circular-book w-[86px] text-gray-400 text-base leading-none">
                    Set Avail Date
                  </p>
                  <Tippy
                    animation=""
                    content={
                      "Your First available date is the first date that we would try to pickup your vehicle. The majority of our customers have their vehicles picked up within 1-5 days of their first available date. If time is a critical factor for your move, please call and ask about our Guaranteed Pickup Service. Price can vary based on date."
                    }
                  >
                    <span className="cursor-pointer">
                      <InfoSvg />
                    </span>
                  </Tippy>
                </div>

                <div className="w-full relative flex items-center">
                  <input
                    type="date"
                    name="availableDate"
                    value={"08/01/2023"}
                    className="opacity-0 absolute z-50 w-full input-cursor-pointer"
                  />
                  <input
                    type="text"
                    disabled
                    value={"08/01/2023"}
                    className=" bg-white border-transparent py-1 pl-0 font-semibold sm:text-sm"
                  />
                  <PencilSvg
                    className="absolute right-0"
                    onClick={setclickOnInputCard}
                  />
                </div>
              </div>
              {/* <InputCard
                setclickOnInputCard={() => setclickOnInputCard(1)}
                onClose={() => setclickOnInputCard()}
                pen={true}
                info={true}
                tooltip={
                  "Your First available date is the first date that we would try to pickup your vehicle. The majority of our customers have their vehicles picked up within 1-5 days of their first available date. If time is a critical factor for your move, please call and ask about our Guaranteed Pickup Service. Price can vary based on date."
                }
                title={"First avail date"}
                name={"08/01/2023"}
              /> */}

              <InputCard
                pen={true}
                title={"Vehicle"}
                name={"2021 Audi A5 Sportback"}
              />
              <InputCard title={"Ship from"} name={"Dallas,TX 75217"} />
              <InputCard
                pen={true}
                title={"Ship to"}
                name={"Austin, TX 78745"}
              />

              <InputCard
                info={true}
                condition={true}
                title={"Vehicle condition"}
                tooltip={
                  <p>
                    <strong>Running</strong>
                    <br />
                    The ability of the vehicle to move under its own power to be
                    driven on and off the transport trailer
                    <br />
                    <br />
                    <strong>Non-Running</strong>
                    <br />
                    The vehicle doesn't move under its own power, but it must
                    roll, break and steer.
                  </p>
                }
              />
              <InputCard
                info={true}
                transport={true}
                title={"Transport type"}
                tooltip={
                  <p>
                    <strong>Open trailers</strong> are the most cost-effective
                    and popular method to transport vehicles. Most new vehicles
                    being sent to car dealerships are transported in open
                    trailers.
                    <br />
                    <br />
                    <strong>Enclosed trailers</strong> protect vehicles from
                    weather, dirt and rock chips during transport. They are
                    popular for high value vehicles.
                  </p>
                }
              />
              <InputCard
                info={true}
                tooltip={
                  "The car will be pick up and delivered as close as legally and safely possible to any residential and/or business address."
                }
                title={"Service type"}
                name={"Door to door"}
              />
              <InputCard
                tooltip={
                  "Your vehicle is fully insured from pickup to delivery with no deductible to you."
                }
                info={true}
                title={"Insurance"}
                name={"Included"}
              />
              <InputCard
                tooltip={
                  "Transit time is calculated from the time the vehicle is picked up."
                }
                info={true}
                title={"Transit time"}
                name={"2-4 days"}
              />
              <DueNow
                priceCardActive={priceCardActive}
                selectedPrice={selectedPrice}
              />
              <div className="font-circular-book px-4 py-2">
                <span className="text-zinc-400 text-base leading-none">
                  Have a promo code?{" "}
                </span>
                <span className="text-oceanBlue font-circular text-base leading-none">
                  Enter
                </span>
              </div>
            </div>
          </div>
        </div>
      </ContentWrapper>
    </main>
  );
}
