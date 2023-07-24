"use client";
import {
  Box,
  Container,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
  styled,
} from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  const LinkText = styled(Typography)(({ theme }) => ({
    color: "#000",
    textDecoration: "none",
    margin: "0px 10px",
    fontWeight: "500",
    fontSize: "16px",
    [theme.breakpoints.down("md")]: {
      fontSize: "14px",
      padding: "0px",
    },
  }));

  return (
    <Box sx={{ background: "#fff", py: "30px" }}>
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
          {/* <Link href="/" prefetch={false} style={{ textDecoration: "none" }}> */}
          <Image
            width={250}
            height={50}
            src="/footerLogo.png"
            alt=""
            style={{ cursor: "pointer" }}
            onClick={() => {
              // hard reload bere
              window.location.href = "/";
            }}
          />
          {/* </Link> */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              flexDirection: {
                xs: "column",
                lg: "row",
              },
              gap: {
                xs: "10px",
                lg: "30px",
              },

              marginTop: { sm: "0", xs: "20px" },
            }}
          >
            <Typography
              sx={{
                color: "#000",
                fontSize: {
                  xs: "14px",
                  lg: "16px",
                },
                mt: {
                  xs: "10px",
                  lg: "0px",
                },
              }}
              variant="h6"
            >
              © 2023 PriorityShips. All Rights Reserved.
            </Typography>
            <Box>
              <nav aria-label="secondary mailbox folders">
                <List>
                  <LinkText component={Link} href="/">
                    Privacy Policy
                  </LinkText>
                  <LinkText component={Link} href="/" sx={{}}>
                    Terms & Conditions
                  </LinkText>
                  <LinkText component={Link} href="/">
                    Site Map
                  </LinkText>
                </List>
              </nav>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
