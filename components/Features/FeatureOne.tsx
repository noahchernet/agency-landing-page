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

function FeatureOne({}: Props) {
  return (
    <Box
      mt={{ base: "5rem", lg: "7rem" }}
      px={{ base: "0.5rem", sm: "1.5rem", md: "11.87rem" }}
    >
      <Center>
        <Heading
          mb={"3.875rem"}
          maxW={"40rem"}
          as={motion.h1}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
        >
          <span style={{ color: "#FFCA1D" }}>Our</span>{" "}
          <span style={{ color: "#565656" }}>Features</span>
        </Heading>
      </Center>
      <Stack
        direction={{ base: "column", xl: "row" }}
        align={"center"}
        mt={{ base: "1rem", xl: "3rem" }}
        spacing={{ base: "2rem", xl: "4rem", "2xl": "7.7rem" }}
      >
        <Image
          src="/assets/our_features.svg"
          alt="our_features"
          h={{
            base: "12rem",
            sm: "20rem",
            md: "25rem",
            lg: "30rem",
            xl: "40rem",
          }}
        />
        <Spacer />
        <VStack align="left" spacing={"1.25rem"}>
          <Heading color={"#4A4A4A"} fontSize={"2.5rem"}>
            Manage everything in one workspace
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
            Planning, tracking and delivering your team&apos;s best work has
            never been easier. An integrated workspace that&apos;s simple to
            use, GoldBolt lets you spend less time managing your work and more
            time actually doing it.
          </Text>
        </VStack>
      </Stack>
    </Box>
  );
}

export default FeatureOne;
