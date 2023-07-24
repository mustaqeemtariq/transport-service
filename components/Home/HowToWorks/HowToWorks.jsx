"use client";
import React from "react";
import { Box, Button, Typography } from "@mui/material";
import stepOne from "../../../public/images/step-one.svg";
import stepTwo from "../../../public/images/step-two.svg";
import stepThree from "../../../public/images/step-three.svg";
import Image from "next/image";
import CustomPopup from "../Dialog/CustomPopup";
import Form from "../Form/Form";
import Link from "next/link";

const HowToWorks = () => {
  const fakeData = [
    {
      step: stepOne,
      title: "Get an instant quote",
      text: "Get an online quote in seconds, or call and speak with one of our experts. Then compare our rates and services. We're confident you'll find our prices to be quite competitive.",
    },
    {
      step: stepTwo,
      title: "We pick up your vehicle",
      text: "Schedule your pickup date, time, and an easy-to-access pickup location with your trucker. You can even release your car while you're at work.",
    },
    {
      step: stepThree,
      title: "Take delivery of your car",
      text: "Take delivery of your car. We at Priority Ships eagerly await the time when you and your car are reunited. \n When the truck is close to your house, the trucker will call to let you know so you may meet them both in your driveway (or another mutually convenient spot).",
    },
  ];

  return (
    <Box
      sx={{
        // backgroundImage: "url('images/bgImg.png')",
        width: "100%",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        padding: { sm: "100px 0px", xs: "40px 0" },
        overFlow: "hidden",
        position: "relative",
        "&::after": {
          content: '""',
          position: "absolute",
          top: "50%",
          left: 0,
          transform: "translateY(-50%)",
          background: 'url("/images/left.svg")',
          backgroundPosition: "center",
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          width: "400px",
          height: "100%",
          display: { lg: "block", md: "none", sm: "none", xs: "none" },
        },

        "&::before": {
          content: '""',
          position: "absolute",
          top: "50%",
          right: 0,
          transform: "translateY(-50%)",
          background: 'url("/images/right.svg")',
          backgroundPosition: "center",
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          width: "300px",
          height: "100%",
          display: { lg: "block", md: "none", sm: "none", xs: "none" },
        },
      }}
    >
      <Box>
        <Typography
          variant="h3"
          sx={{
            textAlign: "center",
            fontWeight: "800",
            fontSize: {
              xs: "40px",
              lg: "70px",
            },
            color: "#262626",
          }}
        >
          How It Works
        </Typography>

        <Box sx={{ mt: "40px", padding: "0px 15px" }}>
          <Box
            sx={{
              width: {
                xs: "auto",
                lg: "550px",
              },
              margin: "auto",
            }}
          >
            {fakeData.map((data, i) => (
              <Box
                key={i}
                sx={{
                  mb: {
                    xs: "20px",
                    lg: "48px",
                  },
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    mb: "20px",
                  }}
                >
                  <Image width="auto" height="auto" src={data.step} alt="" />
                </Box>
                <Box>
                  <Typography
                    sx={{
                      fontSize: { sm: "28px", xs: "24px" },
                      fontWeight: "700",
                      textAlign: "center",
                      mb: { sm: "20px", xs: "10px" },
                      fontFamily: "'Poppins', sans-serif",
                    }}
                    variant="h4"
                  >
                    {data.title}
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: { sm: "18px", xs: "16px" },
                      fontWeight: "700",
                      textAlign: "center",
                      fontFamily: "'Poppins', sans-serif",
                    }}
                    variant="h6"
                  >
                    {data.text}
                  </Typography>
                </Box>
              </Box>
            ))}
          </Box>
        </Box>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Link href="/quote" style={{ textDecoration: "none" }}>
            <button
              // onClick={handleClickOpen}
              className="submit_button"
              style={{ background: "#00a1ef" }}
            >
              Get an instant quote
            </button>
          </Link>

          {/* <CustomPopup btn={true} content={<Form />} /> */}
        </Box>
      </Box>
    </Box>
  );
};

export default HowToWorks;
