import React from "react";
import styles from "./HeroArea.module.scss";
import { Box, Container, Grid, Typography } from "@mui/material";
// import Form from "../Form/Form";

import dynamic from "next/dynamic";

const Form = dynamic(() => import("../Form/Form"), {
  ssr: true,
});

const HeroArea = () => {
  return (
    <div className={styles._wrapper}>
      <Container>
        <Box className={styles._body}>
          <Grid container>
            <Grid item md={8} sm={12} xs={12}>
              <Box className={styles._hero_text}>
                <Typography
                  variant="h6"
                  color="inherit"
                  className={styles._title}
                >
                  Reliable Nationwide Auto Transport Company
                </Typography>
                <Typography
                  variant="subtitle1"
                  color="inherit"
                  className={styles._subtitle}
                >
                  We ship all types of Vehicles across all 50 states
                </Typography>
              </Box>
            </Grid>
          </Grid>
          <Box className={styles._form}>
            <Form />
          </Box>

          <Grid container>
            <Grid item md={10} sm={12} xs={12}>
              <Box className={styles._hero_image}>
                <img src="/images/hero.png" alt="" />
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </div>
  );
};

export default HeroArea;
