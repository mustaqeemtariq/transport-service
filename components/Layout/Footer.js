import React from "react";

const Footer = () => {
  return (
    <div className=" bg-zinc-800 flex flex-col items-center pt-24 gap-8 max-xl:px-6">
      <div className="xl:w-[1056px] font-poppins text-center text-white text-3xl lg:text-6xl font-semibold capitalize leading-[70px]">
        Want to know the cost of shipping a car with us?
      </div>

      <div className="flex items-center gap-10 max-sm:flex-wrap max-sm:items-center max-sm:justify-center">
        <button className="px-[30px] py-5 bg-oceanBlue rounded-[30px] justify-center items-center gap-1 inline-flex">
          <div className="text-white text-base font-semibold uppercase leading-tight">
            Get an instant quote{" "}
          </div>
        </button>
        <button className="px-[30px] py-5 bg-white rounded-[30px] justify-center items-center gap-1 inline-flex">
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.36458 4.43006L8.90542 5.39917C9.3935 6.27374 9.19757 7.42102 8.42885 8.18975C8.42884 8.18975 8.42884 8.18975 8.42884 8.18975C8.42873 8.18987 7.4965 9.12231 9.18701 10.8128C10.8769 12.5027 11.8093 11.5718 11.8101 11.571C11.8101 11.571 11.8101 11.571 11.8101 11.571C12.5788 10.8023 13.7261 10.6063 14.6007 11.0944L15.5698 11.6353C16.8904 12.3723 17.0463 14.2243 15.8856 15.3851C15.1881 16.0826 14.3336 16.6253 13.389 16.6611C11.7989 16.7214 9.09848 16.319 6.38967 13.6102C3.68086 10.9014 3.27843 8.20094 3.33871 6.61082C3.37452 5.66625 3.91725 4.81178 4.61476 4.11428C5.77555 2.95349 7.62756 3.10945 8.36458 4.43006Z"
              stroke="#25252D"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>

          <div className="text-zinc-800 text-base font-semibold capitalize leading-tight">
            (888) 666-8929
          </div>
        </button>
      </div>
      <div className="max-sm:flex-wrap max-sm:items-center max-sm:justify-center sm:w-[460px] justify-start items-start gap-5 inline-flex">
        <img src="/assets/facebook.png" alt="facebook" />
        <img src="/assets/twetter.png" alt="twetter" />
        <img src="/assets/instagram.png" alt="instagram" />
        <img src="/assets/google-plus.png" alt="google" />
        <img src="/assets/youtube.png" alt="youtube" />
        <img src="/assets/vimeo.png" alt="vimeo" />
      </div>
      <div className="font-poppins">
        <span className="text-white text-base font-medium leading-tight">
          By using our website, you agree to our{" "}
        </span>
        <a href="https://www.montway.com/terms-of-use" target="_blank">
          <span className="text-white text-base font-medium underline leading-tight">
            Terms of Use
          </span>
        </a>
        <span className="text-white text-base font-medium leading-tight">
          ,{" "}
        </span>
        <a href="https://www.montway.com/privacy-policy" target="_blank">
          <span className="text-white text-base font-medium underline leading-tight">
            Privacy Policy
          </span>
        </a>
        <span className="text-white text-base font-medium leading-tight">
          {" "}
          and{" "}
        </span>
        <a
          href="https://www.montway.com/privacy-policy#cookies"
          target="_blank"
        >
          <span className="text-white text-base font-medium underline leading-tight">
            Cookie Policy
          </span>
        </a>
        <span className="text-white text-base font-medium leading-tight">
          .
        </span>
      </div>
      <div className="text-center w-full font-poppins text-white text-base font-medium leading-tight border-t border-zinc-700 py-8">
        Copyright © 2006-2023 by Montway Inc
      </div>
    </div>
  );
};

export default Footer;
