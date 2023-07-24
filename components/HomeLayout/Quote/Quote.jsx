"use client";
import React from "react";
import Form from "../Home/Form/Form";
import { Container } from "@mui/material";
import Link from "next/link";

const Quote = () => {
  return (
    <div className="quote_wrapper">
      <Container>
        <div className="quote_logo_wrapper">
          {/* <a href="/" style={{ textDecoration: "none" }}> */}
          {/* <Link href="/" prefetch={false} style={{ cursor: "pointer" }}> */}
          <img
            src="/footerLogo.png"
            alt=""
            onClick={() => {
              // hard reload bere
              window.location.href = "/";
            }}
            style={{ cursor: "pointer" }}
          />
          {/* </Link> */}

          {/* </a> */}
        </div>

        <div className="quote_form_wrapper">
          <Form />
        </div>
      </Container>
    </div>
  );
};

export default Quote;
