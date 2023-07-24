import React, { useState } from "react";

const CustomPhoneInput = ({
  value,
  isEmailValid,
  onChange,
  title,
  placeholder,
  type,
}) => {
  const [phoneNumber, setPhoneNumber] = useState("");

  const maskPhone = (value) => {
    return value
      .replace(/\D/g, "")
      .replace(/(\d{3})(\d)/, "($1) $2")
      .replace(/(\d{3})(\d)/, "$1-$2")
      .replace(/(-\d{4})(\d+?)$/, "$1");
  };



  return (
    <div className="input-wrap input-grey">
      <input
        id="email_address"
        name="email_address"
        type="tel"
        pattern="\(\d{3}\) \d{3}-\d{4}"
        placeholder="Your Phone"
        maxLength="14"
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(maskPhone(e.target.value))}
        inputmode="text"
        data-gtm-form-interact-field-id="2"
      />

      <label for="email_address" className="input-label ">
        Phone <span style={{ color: "#9ba3af" }}>(optional)</span>
      </label>
    </div>
  );
};

export default CustomPhoneInput;
