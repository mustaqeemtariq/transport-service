"use client";
import { Box, Container, Typography } from "@mui/material";
// import Image from "next/image";
import React from "react";
import MapSvg from "./MapSvg";

const Map = () => {
  return (
    <Box
      sx={{
        // background: "#00A1EF",
        background: "#1c2431",
        py: { sm: "60px", xs: "30px" },
      }}
    >
      <Box>
        <Typography
          sx={{
            fontSize: {
              xs: "25px",
              lg: "38px",
            },
            fontWeight: "700",
            color: "#fff",
            textAlign: "center",
            mb: {
              xs: "10px",
              lg: "20px",
            },
          }}
        >
          We Ship Vehicles Nationwide
        </Typography>
        <Typography
          sx={{
            fontSize: {
              xs: "16px",
              lg: "20px",
            },
            fontWeight: "400",
            textAlign: "center",
            color: "#fff",
          }}
        >
          Priority Ships is the nationwide leading provider for fast and
          reliable auto shipping transportation
        </Typography>
        <Container>
          <Box
          // sx={{
          //   width: {
          //     xs: "100%",
          //     lg: "1150px",
          //   },
          //   height: {
          //     xs: "300px",
          //     lg: "800px",
          //   },
          //   position: "relative",
          // }}
          >
            <MapSvg />
            {/* <Image
              layout="fill"
              objectFit="contain"
              src="/images/map.svg"
              alt=""
            /> */}
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default Map;
