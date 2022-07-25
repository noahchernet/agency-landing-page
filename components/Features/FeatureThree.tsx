import {
  Box,
  Image,
  Stack,
  HStack,
  Heading,
  Spacer,
  Text,
  VStack,
  Center,
} from "@chakra-ui/react";
import React from "react";
import { motion } from "framer-motion";

type Props = {};

function FeatureThree({}: Props) {
  return (
    <Stack
      direction={{ base: "column", xl: "row" }}
      align={"center"}
      mt={{ base: "2rem", xl: "10rem" }}
      spacing={{ base: "2rem", xl: "4rem", "2xl": "7.7rem" }}
      px={{ base: "3rem", md: "11.87rem" }}
    >
      <Image
        src="/assets/save_time_picture_woman.png"
        alt="save_time_picture_woman"
        h={{ base: "20rem", md: "25rem", lg: "30rem", xl: "40rem" }}
      />
      <Spacer />
      <VStack align="left" spacing={"1.25rem"}>
        <Heading color={"#4A4A4A"} fontSize={"2.5rem"}>
          Save time with Automations
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
            stroke="#ffca1d"
            strokeWidth="6"
            strokeLinecap="round"
          />
        </svg>
        <Text color={"#575757"} fontSize={"1.5rem"}>
          Automate the repetitive work in seconds so you can avoid human error
          and focus on what matters. It gives the impression of software that
          its highly automated which implies that it is good for client for who
          want to save time and manage team members easily.
        </Text>
      </VStack>
    </Stack>
  );
}

export default FeatureThree;
