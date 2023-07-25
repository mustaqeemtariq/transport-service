"use client";
import { Box, Container, Grid, Typography } from "@mui/material";
import React, { useEffect } from "react";
import coverage from "../../../public/assets/images/coverage.svg";
import payment from "../../../public/assets/images/payment.svg";
import securePayment from "../../../public/assets/images/secure-payment.svg";
import support from "../../../public/assets/images/support.svg";
import Image from "next/image";
import AOS from "aos";

const AboutSection = () => {
  const fakeData = [
    { img: coverage, text: "Insurance Coverage" },
    { img: securePayment, text: "Secure Payments" },
    { img: payment, text: "Zero Upfront payment" },
    { img: support, text: "24/7 Availability" },
  ];

  useEffect(() => {
    AOS.init({ duration: 1200, offset: 80, easing: "ease-in-out" });
  });

  return (
    <Box
      sx={{
        background: "#1C2431", //  #00a1ef
        py: {
          xs: "30px",
          lg: "50px",
        },
        overflow: "hidden",
      }}
    >
      <Container>
        <Grid
          container
          rowSpacing={3}
          alignItems={"center"}
          justifyContent={"center"}
        >
          {fakeData.map((data, i) => (
            <Grid
              container
              xs={9}
              sm={6}
              md={3}
              lg={3}
              item
              key={i}
              alignItems={"center"}
              data-aos="fade-up"
              data-aos-easing="ease-in-sine"
              data-aos-duration="300"
            >
              <Grid item md={3} xs={3}>
                {" "}
                <Image
                  alt=""
                  src={data.img}
                  width={50}
                  height={"auto"}
                  sx={{
                    transition: "transform 1s",
                    transform: "scale(1)",
                  }}
                />
              </Grid>
              <Grid
                item
                md={9}
                xs={9}
                sx={{ display: "flex", alignItems: "center" }}
              >
                <Typography
                  sx={{
                    color: "#FFF",
                    fontSize: "14px",
                    fontWeight: "700",
                    fontFamily: "'Poppins', sans-serif",
                    textTransform: "uppercase",
                  }}
                  variant="h5"
                >
                  {data.text}
                </Typography>
              </Grid>

              {/* <Box
                data-aos="fade-up"
                data-aos-easing="ease-in-sine"
                data-aos-duration="500"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: "15px",
                  transition: "transform 1s",
                  justifyContent: { sm: "flex-start", xs: "center" },
                }}
              >
                <Image
                  alt=""
                  src={data.img}
                  width="auto"
                  height={50}
                  sx={{
                    transition: "transform 1s",
                    transform: "scale(1)",
                  }}
                />
                <Typography
                  sx={{
                    color: "#FFF",
                    fontSize: "14px",
                    fontWeight: "700",
                    fontFamily: "'Lato', sans-serif",
                    textTransform: "uppercase",
                  }}
                  variant="h5"
                >
                  {data.text}
                </Typography>
              </Box> */}
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default AboutSection;
