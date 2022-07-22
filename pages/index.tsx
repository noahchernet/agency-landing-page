import { Box } from "@chakra-ui/react";
import type { NextPage } from "next";
import HeroSection from "../components/HeroSection";
import NavBar from "../components/NavBar";

const Home: NextPage = () => {
  return (
    <Box bg="white">
      {/* <NavBar /> */}
      <HeroSection />
    </Box>
  );
};

export default Home;
