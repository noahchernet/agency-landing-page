import React from "react";
import {
  Box,
  Button,
  Center,
  Heading,
  HStack,
  Image,
  Link,
  Stack,
  Text,
} from "@chakra-ui/react";
import DownwardArrow from "./Buttons/DownwardArrow";
import YellowButton from "./Buttons/YellowButton";

type Props = {};

const NavBar = (props: Props) => {
  return (
    <HStack justify="space-between">
      <HStack>
        <Image src="/assets/company_logo.png" alt="teamflow-logo" />
        <Heading fontSize={"1.875rem"} color={"white"} as="h1">
          TeamFlow
        </Heading>
      </HStack>
      <HStack spacing={"2.5rem"}>
        <HStack cursor={"pointer"}>
          <Link color={"white"}>Product</Link>
          <DownwardArrow />
        </HStack>
        <HStack cursor={"pointer"}>
          <Link color={"white"}>Solution</Link>
          <DownwardArrow />
        </HStack>
        <Link color={"white"}>Enterprise</Link>
        <Link color={"white"}>Pricing</Link>
      </HStack>
      <HStack spacing={"2.813rem"}>
        <Button color="#757575" variant="link">
          Log In
        </Button>
        {/* <Button
          color="brand.darkgray"
          bg="brand.yellow"
          px={"2rem"}
          _hover={{ bg: "#ffd91d" }}
        >
          Sign Up
        </Button> */}
        <YellowButton text={"Sign Up"} />
      </HStack>
    </HStack>
  );
};

export default NavBar;
