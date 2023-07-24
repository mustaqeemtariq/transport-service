import React from "react";

const ContentWrapper = ({ children, customStyle }) => {
  return (
    <div
      className={`xl:w-[1173px] mx-auto max-xl:w-full max-xl:px-6 py-11 ${customStyle}`}
    >
      {children}
    </div>
  );
};

export default ContentWrapper;
