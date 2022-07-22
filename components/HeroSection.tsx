import { Box } from "@chakra-ui/react";
import React from "react";
import NavBar from "./NavBar";

type Props = {};

const HeroSection = (props: Props) => {
  return (
    <Box as="section" bg="white">
      <Box
        minH={"100vh"}
        bg={"brand.purple"}
        clipPath={"polygon(0% 0%, 69% 0%, 52% 100%, 0% 100%)"}
        zIndex={"-1"}
      />
      <Box
        minH={"100vh"}
        bg={"#FAFAFF"}
        clipPath={"polygon(69% 0%, 100% 0%, 100% 100%, 52% 100%)"}
        zIndex={"2"}
        position={"relative"}
        bottom={"100vh"}
      />
      <Box position={"relative"} bottom={"200vh"} zIndex={"3"}>
        <NavBar />
      </Box>
    </Box>
  );
};

export default HeroSection;
