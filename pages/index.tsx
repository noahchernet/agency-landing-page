import { Box, VStack } from "@chakra-ui/react";
import type { NextPage } from "next";
import CompaniesSection from "../components/CompaniesSection";
import HeroSection from "../components/HeroSection";
import FeatureOne from "../components/Features/FeatureOne";
import WhatCanYouDoSection from "../components/WhatCanYouDoSection";
import FeatureTwo from "../components/Features/FeatureTwo";
import IntegrateSection from "../components/IntegrateSection";
import FeatureFour from "../components/Features/FeatureFour";

const Home: NextPage = () => {
  return (
    <Box bg="white">
      <HeroSection />
      <VStack
        position={"absolute"}
        top={"100vh"}
        spacing={"8.625rem"}
        mt={"8.625rem"}
      >
        <CompaniesSection />
        <WhatCanYouDoSection />
        <FeatureOne />
        <Box px={"11.87rem"} bg={"#FAFAFF"}>
          <FeatureTwo />
        </Box>
        <IntegrateSection />
        <FeatureFour />
      </VStack>
    </Box>
  );
};

export default Home;
