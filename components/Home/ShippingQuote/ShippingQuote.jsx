"use client";
import { Box, Button, Container, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import CustomPopup from "../Dialog/CustomPopup";
import Form from "../Form/Form";
import Link from "next/link";

const ShippingQuote = () => {
  return (
    <Box
      sx={{
        // backgroundImage: "url('/images/shippingBg.png')",
        background: "#1c2431",
        width: "100%",
        height: "auto",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        padding: { sm: "100px 0px", xs: "50px 0" },
        overFlow: "hidden",
        borderBottom: "1px solid #f9f9f9",
      }}
    >
      <Container>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexDirection: {
              xs: "column",
              lg: "row",
            },
          }}
        >
          <Image src="/images/shipping.svg" alt="" width={110} height={110} />
          <Typography
            sx={{
              fontSize: {
                xs: "25px",
                lg: "40px",
              },
              mt: {
                xs: "10px",
                lg: "0px",
              },
              fontWeight: "700",
              color: "#fff",
              textAlign: "center",
            }}
          >
            Get Your Free Car <br /> Shipping Quote
          </Typography>

          {/* <CustomPopup btn={true} content={<Form />} /> */}

          <Link style={{ textDecoration: "none" }} href="/quote">
            <button
              // onClick={handleClickOpen}
              className="submit_button"
              style={{ background: "#00a1ef" }}
            >
              Get an instant quote
            </button>
          </Link>
        </Box>
      </Container>
    </Box>
  );
};

export default ShippingQuote;
