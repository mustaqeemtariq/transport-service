import { Box, Typography } from "@mui/material";
import Marquee from "react-fast-marquee";

import React from "react";

const TopHeader = () => {
  return (
    <Box className="top_header">
      <div className="desktop">
        <Marquee gradient={false} speed={24} direction="left">
          <Typography
            variant="subtitle1"
            color="inherit"
            className="top_header_text"
            sx={{
              fontSize: "16px",
              paddingLeft: "200px",
              fontFamily: "circular pro book",
              lineHeight: "24px",
            }}
          >
            Priority Ships is the leading provider for auto transport services .
            Get an
            <span style={{ color: "#029046", margin: "0 6px" }}>
              instant quote
            </span>{" "}
            or
            <span style={{ color: "#00a1ef", margin: "0 6px" }}>call</span>
            to speak with an expert
          </Typography>
        </Marquee>
      </div>

      <div className="mobile">
        <Marquee gradient={false} speed={24} direction="left">
          <Typography
            variant="subtitle1"
            color="inherit"
            className="top_header_text"
            sx={{
              fontSize: "16px",
              paddingLeft: "250px",
              fontFamily: "circular pro book",
              lineHeight: "24px",
            }}
          >
            Priority Ships is the leading provider for auto transport services .
            Get an
            <span style={{ color: "#029046", margin: "0 6px" }}>
              instant quote
            </span>{" "}
            or
            <span style={{ color: "#00a1ef", margin: "0 6px" }}>call</span>
            to speak with an expert
          </Typography>
        </Marquee>
      </div>
    </Box>
  );
};

export default TopHeader;
