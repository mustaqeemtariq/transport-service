import React from "react";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import TopHeader from "./Header/TopHeader";

const Layout = ({ children }) => {
  return (
    <>
      <div className="dasktop_header">
        <TopHeader />
      </div>
      <Header />
      <div className="mobile_header">
        <TopHeader />
      </div>
      {children}
      <Footer />
    </>
  );
};

export default Layout;
