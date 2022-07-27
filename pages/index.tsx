import { Box, VStack } from "@chakra-ui/react";
import type { NextPage } from "next";
import CompaniesSection from "../components/CompaniesSection";
import HeroSection from "../components/HeroSection";
import FeatureOne from "../components/Features/FeatureOne";
import WhatCanYouDoSection from "../components/WhatCanYouDoSection";
import FeatureTwo from "../components/Features/FeatureTwo";
import IntegrateSection from "../components/IntegrateSection";
import FeatureThree from "../components/Features/FeatureThree";
import FeatureFour from "../components/Features/FeaturFour";
import FeatureFive from "../components/Features/FeatureFive";
import ClientTestimonials from "../components/ClientTestimonials";
import SubscribeSection from "../components/SubscribeSection";
import Footer from "../components/Footer";

const Home: NextPage = () => {
  return (
      <VStack bg="white" w={'100vw'}>
        <HeroSection />
        <VStack
          position={"absolute"}
          top={"100vh"}
          spacing={{ base: "2rem", lg: "8.625rem" }}
          mt={{ base: "2rem", lg: "8.625rem" }}
        >
          <CompaniesSection />
          <WhatCanYouDoSection />
          <FeatureOne />
          <FeatureTwo />
          <IntegrateSection />
          <FeatureThree />
          <FeatureFour />
          <FeatureFive />
          <ClientTestimonials />  
          <Box bg={"#FAFAFF"} w={"full"}>
            <SubscribeSection />
          </Box>
          <Footer />
        </VStack>
      </VStack>
  );
};

export default Home;
