import { Box } from "@chakra-ui/react";
import type { NextPage } from "next";
import CompaniesSection from "../components/CompaniesSection";
import HeroSection from "../components/HeroSection";
import NavBar from "../components/NavBar";
import WhatCanYouDoSection from "../components/WhatCanYouDoSection";

const Home: NextPage = () => {
  return (
    <Box bg="white">
      {/* <NavBar /> */}
      <HeroSection />
      <Box position={"absolute"} top={"100vh"}>
        <CompaniesSection />
        <WhatCanYouDoSection />
      </Box>
    </Box>
  );
};

export default Home;
