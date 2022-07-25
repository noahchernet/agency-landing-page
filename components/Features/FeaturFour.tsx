import { Stack, Image, Spacer, VStack, Heading, Text } from "@chakra-ui/react";
import React from "react";

type Props = {};

const FeatureTwo = (props: Props) => {
  return (
    <Stack
      direction={{ base: "column-reverse", xl: "row" }}
      py={{ base: "4rem", xl: "none" }}
      align={"center"}
      spacing={{ base: "2rem" }}
      // spacing={{ bapx={"11.87rem"}se: "3rem", xl: "7.7rem" }}
      px={{ base: "3rem", xl: "11.87rem" }}
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
        <Text color={"#575757"} fontSize={"1.5rem"} maxW={"42rem"}>
          View data as a map, calendar, timeline, kanban, and more. The
          easy-to-use, visual interface lets any team member jump in and get
          started, no training required.
        </Text>
      </VStack>
      <Spacer />
      <Image
        src="/assets/calendar_map_timeline.png"
        alt="calendar_map_timeline"
        h={{ base: "20rem", md: "25rem", lg: "30rem", xl: "40rem" }}
      />
    </Stack>
  );
};

export default FeatureTwo;
