import React from "react";

const Header = () => {
  return (
    <nav className="w-full border-b border-gray-200 ">
      <div className="flex items-center justify-between py-8 xl:w-[1173px] mx-auto max-xl:w-full max-xl:px-6">
        <img
          className="w-[253px] max-sm:w-36"
          src="/assets/priorityships.png"
        />
        <div className="text-oceanBlue max-xs:text-sm sm:text-xl capitalize leading-tight">
          (888) 666-8929
        </div>
      </div>
    </nav>
  );
};

export default Header;
