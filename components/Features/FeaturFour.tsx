import { Stack, Image, Spacer, VStack, Heading, Text } from "@chakra-ui/react";
import React from "react";

type Props = {};

const FeatureTwo = (props: Props) => {
  return (
    <Stack
      w={"full"}
      bg={"#FAFAFF"}
      direction={{ base: "column-reverse", xl: "row" }}
      align={"center"}
      spacing={{ base: "2rem" }}
      px={{ base: "0.5rem", sm: "1.5rem", md: "11.87rem" }}
      py={{ base: "4rem", xl: "none" }}
    >
      <VStack align="left" spacing={"1.25rem"}>
        <Heading color={"#4A4A4A"} fontSize={"2.5rem"}>
          Visualize work with Views
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
        <Text color={"#575757"} fontSize={"1.5rem"} maxW={{ xl: "42rem" }}>
          View data as a map, calendar, timeline, kanban, and more. The
          easy-to-use, visual interface lets any team member jump in and get
          started, no training required.
        </Text>
      </VStack>
      <Spacer />
      <Image
        src="/assets/calendar_map_timeline.png"
        alt="calendar_map_timeline"
        h={{
          base: "12rem",
          sm: "20rem",
          md: "25rem",
          lg: "30rem",
          xl: "40rem",
        }}
      />
    </Stack>
  );
};

export default FeatureTwo;
