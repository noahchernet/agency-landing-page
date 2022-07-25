import {
  Heading,
  VStack,
  Text,
  HStack,
  Input,
  Box,
  Button,
} from "@chakra-ui/react";
import React from "react";
import { IoIosMail } from "react-icons/io";
import { BsTelegram } from "react-icons/bs";

type Props = {};

const SubscribeSection = (props: Props) => {
  return (
    <VStack py={"8rem"} align={"center"} justify={"center"}>
      <Text color="brand.yellow" fontWeight={"bold"}>
        Support
      </Text>
      <Heading color={"#2D3150"} fontWeight={"bold"}>
        Subscribe Newsletter & get
      </Heading>
      <Text color="#2D3150" fontSize={"2rem"} fontWeight={"light"}>
        Company News
      </Text>
      <HStack
        mt={"2rem"}
        px={"1.3rem"}
        py={"0.5rem"}
        bg={"white"}
        borderRadius={"1rem"}
        spacing={"1.5rem"}
        filter={"drop-shadow(0 75px 121px rgba(0,0,0,0.35))"}
        position={"relative"}
        top={"3rem"}
      >
        <Box py={"0.5rem"}>
          <IoIosMail size={"1.5rem"} color={"#9092B0"} />
        </Box>
        <Input
          placeholder="Your email"
          w={"23rem"}
          variant={"ghost"}
          py={"0.5rem"}
        />
        <Button
          leftIcon={<BsTelegram />}
          color={"white"}
          bg={"#686DF1"}
          borderRadius={"1rem"}
          fontWeight="light"
        >
          Subscribe
        </Button>
      </HStack>
    </VStack>
  );
};

export default SubscribeSection;
