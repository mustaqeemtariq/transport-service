/* eslint-disable @next/next/no-img-element */
"use client";
import { Box, Container, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import Link from "next/link";

const Header = () => {
  return (
    <Box
      sx={{
        py: { sm: "20px", xs: "7px" },
        borderBottom: { sm: "2px solid #ddd", xs: "none" },
        boxShadow: "none",
        // boxShadow: "0px 0px 6px -1px #333",
      }}
    >
      <Container>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {/* <Link href="/" prefetch={false}> */}
          <img
            src="/images/logo.png"
            alt=""
            className="home_logo"
            style={{ cursor: "pointer" }}
            onClick={() => {
              // hard reload bere
              window.location.href = "/";
            }}
          />
          {/* </Link> */}

          <Box
            component="a"
            href="tel:954 320-4256"
            sx={{
              textDecoration: "none",
              display: "flex",
              alignItems: "center",
              gap: "6px",
            }}
            className="header_phone"
          >
            <LocalPhoneIcon sx={{ display: { sm: "block", xs: "none" } }} />
            <Typography
              sx={{
                fontWeight: "700",
                fontSize: {
                  xs: "16px",
                  lg: "24px",
                },
                fontFamily: "circular pro book",
              }}
            >
              (954) 320-4256
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Header;
