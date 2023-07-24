import React from "react";

const InputBox = ({
  value,
  isEmailValid,
  onChange,
  title,
  placeholder,
  type,
  onBlur,
}) => {
  return (
    <div className="input-wrap input-grey">
      {!isEmailValid && (
        <span className="mail_error error-text">
          Please enter a valid email address!
        </span>
      )}
      <input
        id="email_address"
        name="email_address"
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        inputmode="text"
        data-gtm-form-interact-field-id="2"
      />

      <label for="email_address" className="input-label ">
        {title}
      </label>
    </div>
  );
};

export default InputBox;
