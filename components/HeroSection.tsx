import { Box, Stack, VStack, Text, Heading, Button } from "@chakra-ui/react";
import React from "react";
import NavBar from "./NavBar";

type Props = {};

const HeroSection = (props: Props) => {
  return (
    <Box as="section" bg="white">
      <Box bg="#FAFAFF">
        <Box
          minH={"100vh"}
          bg={"brand.purple"}
          clipPath={"polygon(0% 0%, 66% 0%, 49% 100%, 0% 100%)"}
          zIndex={"-1"}
        />
      </Box>
      <Box
        position={"relative"}
        bottom={"100vh"}
        zIndex={"3"}
        mt={"6rem"}
        mx={"10.9rem"}
      >
        <NavBar />
        <Stack direction={{ base: "column", md: "row" }} mt="6.47rem">
          <VStack align="flex-start" spacing={"2.5rem"}>
            <Text
              bg={"white"}
              py={"0.7rem"}
              pl={"0.5rem"}
              pr={"1.9rem"}
              borderRadius={"0.625rem"}
            >
              👋 Welcome to TeamFlow
            </Text>
            <Heading fontSize="3.4rem" color="white" maxW="35rem">
              Work the way that works for you
            </Heading>
            <svg
              width="65"
              height="6"
              viewBox="0 0 65 6"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line
                x1="3"
                y1="3"
                x2="62"
                y2="3"
                stroke="#3ADAD9"
                strokeWidth="6"
                strokeLinecap="round"
              />
            </svg>
            {/* <Text fontSize={"1.875rem"} color={"white"} maxW={"39rem"}> */}
            <Text fontSize={"2xl"} color={"white"} maxW={"30rem"}>
              Create, build, collaborate and ship products faster!
            </Text>
            <Button
              color="brand.darkgray"
              bg="brand.yellow"
              py={"1.65rem"}
              px={"2.4rem"}
              _hover={{ bg: "#ffd91d" }}
              fontSize={"xl"}
            >
              Get Started
            </Button>
          </VStack>
        </Stack>
      </Box>
    </Box>
  );
};

export default HeroSection;
