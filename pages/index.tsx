import { Box, VStack } from "@chakra-ui/react";
import type { NextPage } from "next";
import CompaniesSection from "../components/CompaniesSection";
import HeroSection from "../components/HeroSection";
import NavBar from "../components/NavBar";
import FeatureOne from "../components/Features/FeatureOne";
import WhatCanYouDoSection from "../components/WhatCanYouDoSection";
import FeatureTwo from "../components/Features/FeatureTwo";

const Home: NextPage = () => {
  return (
    <Box bg="white">
      {/* <NavBar /> */}
      <HeroSection />
      <VStack
        position={"absolute"}
        top={"100vh"}
        mx={"11.87rem"}
        spacing={"8.625rem"}
        mt={"8.625rem"}
      >
        <CompaniesSection />
        <WhatCanYouDoSection />
        <FeatureOne />
        <FeatureTwo />
      </VStack>
    </Box>
  );
};

export default Home;
