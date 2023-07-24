import React from "react";

const InputField = ({ errors, register, name, title, placeholder }) => {
  const errorText = errors?.[name]?.message
  return (
    <div className="w-full lg:w-[375px]">
      <div className="text-gray-500 text-base leading-tight">{title}</div>
      <input
      	{...(register?.(name) ?? {})}
        className={`w-full placeholder:text-gray-400 rounded-sm border border-gray-400 px-5 py-2.5 ${errorText && "border-2 border-red-500" } `}
        type="text"
        name={name}
        placeholder={`${placeholder ?? ""}`}
      />
      {errorText && <p className="mt-1 text-sm text-red-500">{errorText}</p>}
    </div>
  );
};

export default InputField;
