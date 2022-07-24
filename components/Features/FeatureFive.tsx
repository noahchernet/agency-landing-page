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
import YellowButton from "../Buttons/YellowButton";

type Props = {};

function FeatureFive({}: Props) {
  return (
    <Stack
      direction={{ base: "column-reverse", md: "row" }}
      align={"center"}
      spacing={"7.7rem"}
      mt={"10rem"}
      px={"11.87rem"}
      position={"relative"}
    >
      <Box position={"relative"}>
        <Image
          src="/assets/dotted-lines.svg"
          alt="dotted lines"
          position={"absolute"}
          bottom={"-4.35rem"}
          right={"0"}
          zIndex={"2"}
        />
        <Image
          src="/assets/peter_profile.png"
          alt="peter_profile_picture"
          w="80rem"
          position={"relative"}
          zIndex={"-1"}
        />
      </Box>
      {/* Text banner */}
      <VStack
        position={"absolute"}
        bottom={"-3rem"}
        left={"13rem"}
        px={"2rem"}
        py={"1.25rem"}
        bg={"white"}
        borderRadius={"1rem"}
        maxW={"24rem"}
        zIndex={"3"}
        filter={"drop-shadow(0 45px 121px rgba(0,0,0,0.25))"}
      >
        <Text color={"#3C405F"}>
          “We ensure that any information you need is served immediately by
          simply contacting our team”
        </Text>
        <HStack w={"full"}>
          <Text fontWeight="bold" color={"#3C405F"}>
            Peter Fennimore
          </Text>
          <Spacer />
          <Text color={"#9C9FBB"}>Head of CS</Text>
        </HStack>
      </VStack>
      <Spacer />
      <VStack align="left" spacing={"1.25rem"} textAlign={"left"}>
        <Heading color={"#4A4A4A"} fontSize={"2.5rem"}>
          24/7 Customer Support{" "}
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
          Our team is here to give you personalized support within the hour
          available 24/7. In accordance with our commitment to providing
          superior and professional service. Join daily live webinars, watch
          our tutorials, or browse through our knowledge base
        </Text>
        <Box>
          <YellowButton text={"Read More"} />
        </Box>
      </VStack>
    </Stack>
  );
}

export default FeatureFive;
