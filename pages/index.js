"use client";
// import AboutSection from "@/components/Home/AboutSection/AboutSection";
// import Faq from "@/components/Home/FAQ/Faq";
// import HeroArea from "@/components/Home/HeroArea/HeroArea";
// import HowToWorks from "@/components/Home/HowToWorks/HowToWorks";
// import Map from "@/components/Home/Map/Map";
// import ShippingQuote from "@/components/Home/ShippingQuote/ShippingQuote";
// import Layout from "@/components/Layout/Layout";

import { Box, CssBaseline } from "@mui/material";

import isEqual from "react-fast-compare";
import * as React from "react";
import dynamic from "next/dynamic";
import Loader from "@/components/common/Loanding";
import Router from "next/router";
import { useRouter } from "next/navigation";

const Layout = dynamic(() => import("@/components/HomeLayout/Layout"), {
  ssr: true,
});

const HeroArea = dynamic(() => import("@/components/Home/HeroArea/HeroArea"), {
  ssr: false,
});
const AboutSection = dynamic(
  () => import("@/components/Home/AboutSection/AboutSection"),
  {
    ssr: true,
  }
);
const HowToWorks = dynamic(
  () => import("@/components/Home/HowToWorks/HowToWorks"),
  {
    ssr: true,
  }
);
const Map = dynamic(() => import("@/components/Home/Map/Map"), {
  ssr: true,
});
const Faq = dynamic(() => import("@/components/Home/FAQ/Faq"), {
  ssr: true,
});
const ShippingQuote = dynamic(
  () => import("@/components/Home/ShippingQuote/ShippingQuote"),
  {
    ssr: true,
  }
);

const Home = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
    // hard reload
    // window.location.reload();
  }, []);
  // const resetWindowScrollPosition = React.useCallback(
  //   () => window.scrollTo(0, 0),
  //   []
  // );

  // React.useEffect(() => {
  //   Router.events.on("routeChangeComplete", resetWindowScrollPosition);

  //   return () => {
  //     Router.events.off("routeChangeComplete", resetWindowScrollPosition);
  //   };
  // }, []);

  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    const startLoading = () => setLoading(true);
    const endLoading = () => setLoading(false);

    Router.events.on("routeChangeStart", startLoading);
    Router.events.on("routeChangeComplete", endLoading);
    Router.events.on("routeChangeError", endLoading);

    // Clean up the event listeners when the component unmounts
    return () => {
      Router.events.off("routeChangeStart", startLoading);
      Router.events.off("routeChangeComplete", endLoading);
      Router.events.off("routeChangeError", endLoading);
    };
  }, []);

  return (
    <main>
      <CssBaseline />

      {loading ? (
        <Layout>
          <Box
            sx={{
              height: "60vh",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Loader />
          </Box>
        </Layout>
      ) : (
        <Layout>
          <HeroArea />
          <AboutSection />
          <HowToWorks />
          <Map />
          <Faq />
          <ShippingQuote />
        </Layout>
      )}
    </main>
  );
};

export default React.memo(Home, isEqual);
