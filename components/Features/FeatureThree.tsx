import { VStack, HStack, Stack, Heading, Text, Box } from "@chakra-ui/react";
import React from "react";
import { motion } from "framer-motion";

type Props = {};

const FeatureThree = (props: Props) => {
  return (
    <VStack>
      <Heading
        textAlign="center"
        mb={"6.875rem"}
        maxW={"40rem"}
        as={motion.h1}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
      >
        <span style={{ color: "#FFCA1D" }}>Integrate</span>{" "}
        <span style={{ color: "#565656" }}>
          with your existing tools in a few clicks
        </span>
      </Heading>
    </VStack>
  );
};

export default FeatureThree;
