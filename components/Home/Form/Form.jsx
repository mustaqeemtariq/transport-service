"use client";
import {
  Box,
  Button,
  Card,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  Stack,
  // TextField,
  Typography,
} from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import React, { useEffect, useState } from "react";
import styles from "./Form.module.scss";
import {
  firstAvailableDateData,
  vehicleMakeData,
  vehicleModelData,
  yearsData,
} from "./fakedata";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Dropdown from "./dropdown/Dropdown";
import SelectBox from "./SelectBox/SelectBox";
import InputBox from "./InputBox/InputBox";
import CustomDatePicker from "./DatePicker/DatePicker";
import CustomStepper from "./Stepper/Stepper";
import CustomPhoneInput from "./PhoneInput/PhoneInput";
import useWindowSize from "@/components/common/useWindowSize";
// import { useWindowSize } from "@uidotdev/usehooks";

const steps = ["Destinations", "Vehicle", "Date"];

const Form = () => {
  const [formOpen, setFormOpen] = React.useState(1);

  const [activeStep, setActiveStep] = React.useState(0);
  const [fromCity, setFromCity] = React.useState({});

  const [toCity, setToCity] = React.useState({});

  const [type, setType] = React.useState("open");
  const [years, setYears] = React.useState("");
  // Vehicle make
  const [vehicleMake, setVehicleMake] = React.useState("");
  // vehicle model
  const [vehicleModel, setVehicleModel] = React.useState("");

  // operable
  const [operable, setOperable] = React.useState("yes");

  const [email, setEmail] = React.useState("");

  // delivery
  const [delivery, setDelivery] = React.useState({});

  // deliveryData , setDeliveryData

  const [deliveryData, setDeliveryData] = useState(null);

  // phone
  const [phone, setPhone] = React.useState("");

  const [isEmailValid, setIsEmailValid] = React.useState(true);

  const [emailValidTwo, setEmailValidTwo] = useState(true);

  // zip code error
  const [isZipCodeError, setIsZipCodeError] = React.useState(false);

  const [errorOne, setErrorOne] = useState(false);
  const [errorTwo, setErrorTwo] = useState(false);

  useEffect(() => {
    if (Object.keys(fromCity).length !== 0) {
      setErrorOne(false);
    }
    if (Object.keys(toCity).length !== 0) {
      setErrorTwo(false);
    }
  }, [fromCity, toCity]);

  // check step 2
  const stepTwo =
    Object.keys(years).length === 0 &&
    Object.keys(vehicleMake).length === 0 &&
    Object.keys(vehicleModel).length === 0;

  const [stepError, setStepError] = useState(true);
  // const size = useWindowSize();

  const windowSize = useWindowSize();

  useEffect(() => {
    let error = false;

    if (windowSize.width > Number(600)) {
      if (Object.keys(delivery).length === 0) {
        error = true;
      } else {
        error = false;
      }
    } else {
      if (deliveryData === null) {
        error = true;
      } else {
        error = false;
      }
    }

    let emailValid = false;

    if (email?.length > 5 && emailValidTwo === true) {
      emailValid = false;
    } else {
      emailValid = true;
    }

    if (emailValid === true && error === false) {
      setStepError(true);
    }

    if (error === true || emailValid === false) {
      setStepError(true);
    }

    if (error === false && emailValid === false) {
      setStepError(false);
    }
  }, [delivery, deliveryData, isEmailValid, emailValidTwo, email]);

  const handleEmailChange = (event) => {
    const { value } = event.target;
    setEmail(value);

    if (value === "") {
      setIsEmailValid(true);
    } else {
      if (value.length > 5) {
        const emailPattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
        const isValid = emailPattern.test(value);
        setEmailValidTwo(isValid);
      }

      // // Regular expression to validate email format
      // if (value.includes(".c")) {
      //   const emailPattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
      //   // Check if "@" is present in the email address
      //   const hasAtSymbol = value.includes(".c");
      //   // If "@" is present, check for email format validity using the regular expression
      //   const isValid = hasAtSymbol && emailPattern.test(value);
      //   setIsEmailValid(isValid);
      // }
    }
  };

  const handleEmailBlur = () => {
    if (email === "") {
      setIsEmailValid(true);
    } else {
      const emailPattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

      // If "@" is present, check for email format validity using the regular expression
      const isValid = emailPattern.test(email);
      setIsEmailValid(isValid);
    }
  };

  const handlePhoneChange = (event) => {
    const { value } = event.target;
    setPhone(value);
  };

  const handleTypeChange = (event) => {
    setType(event.target.value);
  };

  const handleOperableChange = (event) => {
    setOperable(event.target.value);
  };

  const handleFromChange = (value) => {
    setFromCity(value);
  };

  const handleToChange = (value) => {
    setToCity(value);
  };

  const handleYearsChange = (event) => {
    setYears(event);
    // setYears(event.target.value);
  };

  const handleVehicleMakeChange = (event) => {
    setVehicleMake(event);
    // setVehicleMake(event.target.value);
  };

  const handleVehicleModelChange = (event) => {
    setVehicleModel(event);
    // setVehicleModel(event.target.value);
  };

  const handleDeliveryChange = (event) => {
    setDelivery(event);
    // setDelivery(event.target.value);
  };

  //   const maxSteps = 3;
  const router = useRouter();

  // const [loading, setLoading] = useState(false);

  const handleNext = () => {
    if (activeStep === 2) {
      const date = delivery !== "" || deliveryData !== null;
      const emailValid = email !== "" || isEmailValid === true;

      if (emailValid && date) {
        // setLoading(true);

        router.push("/calculate");
      }
    } else {
      if (Object.keys(fromCity).length === 0) {
        setIsZipCodeError(true);
        setErrorOne(true);
      }
      if (Object.keys(toCity).length === 0) {
        setIsZipCodeError(true);
        setErrorTwo(true);
      }

      if (
        Object.keys(fromCity).length !== 0 &&
        Object.keys(toCity).length !== 0
      ) {
        setIsZipCodeError(false);
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
      }
    }
  };

  // console.log(delivery, "delivery");

  const [stepOneOpen, setStepOneOpen] = useState(null);

  return (
    <Card
      className={styles._card}
      sx={{
        padding: activeStep === 0 ? "10px 16px 16px 16px" : "16px",
        overflow: "inherit",
      }}
    >
      <Box className={styles._body}>
        {/* {steps[activeStep].description} */}
        {activeStep === 0 && (
          <Box>
            <Typography
              variant="h6"
              color="inherit"
              className={styles._header_title}
            >
              Get an <span className={styles._span_one}>instant quote</span>{" "}
              <br /> or
              <span className={styles._span_one}> call</span> now
              <Link href="tel:(888) 666-8929" className={styles._span_two}>
                (888) 666-8929
              </Link>
            </Typography>

            <Box className={styles._form_wrapper}>
              <Dropdown
                isZipCodeError={isZipCodeError}
                title="Transport car FROM"
                placeholder="ZIP or City"
                handleCityChange={handleFromChange}
                error={errorOne}
                stepOneOpen={stepOneOpen === 1}
                setStepOneOpen={setStepOneOpen}
                num={1}
              />

              <Box sx={{ marginTop: "-6px" }}>
                <Dropdown
                  isZipCodeError={isZipCodeError}
                  title="Transport car TO"
                  placeholder="ZIP or City"
                  handleCityChange={handleToChange}
                  error={errorTwo}
                  stepOneOpen={stepOneOpen === 2}
                  setStepOneOpen={setStepOneOpen}
                  num={2}
                />
              </Box>

              <Stack
                direction={"row"}
                spacing={{ sm: 3, xs: 1 }}
                alignItems={"center"}
              >
                <Typography
                  variant="h6"
                  color="inherit"
                  className={styles._type_title}
                >
                  Transport type
                </Typography>
                <FormControl>
                  <RadioGroup
                    aria-labelledby="demo-controlled-radio-buttons-group"
                    name="controlled-radio-buttons-group"
                    value={type}
                    onChange={handleTypeChange}
                    row
                  >
                    <FormControlLabel
                      value="open"
                      control={<Radio />}
                      label="Open"
                      sx={{
                        color: " #5B6573",
                        fontFamily: "Segoe UI",
                        fontSize: "18px",
                        fontStyle: "normal",
                        fontWeight: 400,
                        lineHeight: "31.031px",
                      }}
                    />
                    <FormControlLabel
                      value="enclosed"
                      control={<Radio />}
                      label="Enclosed"
                      sx={{
                        color: " #5B6573",
                        fontFamily: "Segoe UI",
                        fontSize: "18px",
                        fontStyle: "normal",
                        fontWeight: 400,
                        lineHeight: "31.031px",
                      }}
                    />
                  </RadioGroup>
                </FormControl>
              </Stack>
            </Box>
          </Box>
        )}
        {activeStep === 1 && (
          <Box>
            <SelectBox
              data={yearsData}
              title="Vehicle Year"
              onChange={handleYearsChange}
              formOpen={formOpen === 1}
              setFormOpen={setFormOpen}
              num={1}
            />

            <Box sx={{ marginTop: "4px" }}>
              <SelectBox
                data={vehicleMakeData}
                title="Vehicle make"
                onChange={handleVehicleMakeChange}
                formOpen={formOpen === 2}
                setFormOpen={setFormOpen}
                num={2}
                disable={Object.keys(years).length === 0 ? true : false}
              />
            </Box>
            <Box sx={{ marginTop: "4px" }}>
              <SelectBox
                data={vehicleModelData}
                title="Vehicle model"
                onChange={handleVehicleModelChange}
                formOpen={formOpen === 3}
                setFormOpen={setFormOpen}
                num={3}
                disable={Object.keys(vehicleMake).length === 0 ? true : false}
              />
            </Box>

            <br />
            <Stack
              direction={"row"}
              spacing={{ sm: 3, xs: 1 }}
              alignItems={"center"}
            >
              <Typography
                variant="h6"
                color="inherit"
                className={styles._type_title}
              >
                is it operable?
              </Typography>
              <FormControl>
                <RadioGroup
                  aria-labelledby="demo-controlled-radio-buttons-group"
                  name="controlled-radio-buttons-group"
                  value={operable}
                  onChange={handleOperableChange}
                  row
                >
                  <FormControlLabel
                    value="yes"
                    control={<Radio />}
                    label="Yes"
                  />
                  <FormControlLabel value="no" control={<Radio />} label="No" />
                </RadioGroup>
              </FormControl>
            </Stack>
          </Box>
        )}
        {activeStep === 2 && (
          <Box>
            <InputBox
              value={email}
              isEmailValid={isEmailValid}
              onChange={handleEmailChange}
              onBlur={handleEmailBlur}
              title="Send a copy of the quote to"
              placeholder="Your email"
              type="email"
            />

            <Box
              sx={{ marginTop: "6px", display: { sm: "block", xs: "none" } }}
            >
              <SelectBox
                data={firstAvailableDateData}
                title="First available date"
                onChange={handleDeliveryChange}
                formOpen={formOpen === 4}
                setFormOpen={setFormOpen}
                num={4}
                // disable={email === ""}
              />
            </Box>

            {delivery?.value === "more-then-30days" && (
              <Box
                sx={{ marginTop: "6px", display: { sm: "block", xs: "none" } }}
              >
                <CustomDatePicker
                  setStartDate={setDeliveryData}
                  startDate={deliveryData}
                />
              </Box>
            )}

            <Box
              sx={{ marginTop: "6px", display: { sm: "none", xs: "block" } }}
            >
              <CustomDatePicker
                setStartDate={setDeliveryData}
                startDate={deliveryData}
              />
            </Box>

            <Box sx={{ marginTop: "4px" }}>
              <CustomPhoneInput />
            </Box>

            {/*  */}
            <Box>
              <Typography
                variant="subtitle2"
                color="inherit"
                sx={{ fontSize: "10px", color: "#212529", padding: "10px 0" }}
              >
                By providing your phone number and clicking through, you agree
                to our{" "}
                <Link
                  href="/"
                  style={{
                    color: "#00aa6e",
                    textDecoration: "none",
                    cursor: "pointer",
                  }}
                >
                  Terms
                </Link>{" "}
                ,{" "}
                <Link
                  href="/"
                  style={{
                    color: "#00aa6e",
                    textDecoration: "none",
                    cursor: "pointer",
                  }}
                >
                  Privacy Policy
                </Link>{" "}
                , and authorize us to make or initiate sales calls, text msgs,
                and prerecorded voicemails to that number using an automated
                system. Your agreement is not a condition of purchasing
                products, goods or services. You may opt out at any time.
              </Typography>
            </Box>
          </Box>
        )}

        {activeStep !== 0 && <br />}

        {activeStep === 0 && (
          <button
            onClick={handleNext}
            // variant="contained"
            className={styles._submit_button}
            // disableRipple
            //   disabled={activeStep === maxSteps - 1}
          >
            Vehicle details <ArrowForwardIcon />
          </button>
        )}

        {activeStep === 1 && (
          <button
            onClick={handleNext}
            // variant="contained"
            className={styles._submit_button}
            disabled={stepTwo}
            //   disabled={activeStep === maxSteps - 1}
            style={{ opacity: stepTwo ? "0.5" : "1" }}
            // disableRipple
          >
            Confirmation details <ArrowForwardIcon />
          </button>
        )}

        {activeStep === 2 && (
          <button
            onClick={handleNext}
            // variant="contained"
            className={styles._submit_button}
            disabled={stepError}
            style={{ opacity: stepError ? "0.5" : "1" }}
            // disableRipple
          >
            Calculate cost <ArrowForwardIcon />
          </button>
        )}

        {activeStep !== 0 && (
          <Box sx={{ width: "100%", marginTop: "20px" }}>
            <CustomStepper step={activeStep === 2 ? true : false} />
          </Box>
        )}
      </Box>
    </Card>
  );
};

export default Form;
