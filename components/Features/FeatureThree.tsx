import { VStack, HStack, Stack, Heading, Text, Box } from "@chakra-ui/react";
import React from "react";
import { motion } from "framer-motion";

type Props = {};

const FeatureThree = (props: Props) => {
  return (
    <VStack>
      <HStack
        justify={"center"}
        mb={"6.875rem"}
        as={motion.div}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
      >
        <Heading color="#565656">What can</Heading>
        <Heading color="brand.yellow">you do?</Heading>
      </HStack>
    </VStack>
  );
};

export default FeatureThree;
