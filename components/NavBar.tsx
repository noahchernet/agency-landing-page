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

type Props = {};

const NavBar = (props: Props) => {
  return (
    <HStack pt={"6.06rem"} px={"11.875rem"} justify="space-between">
      <HStack>
        <Image src="/assets/company_logo.png" alt="teamflow-logo" />
        <Heading fontSize={"1.875rem"}>TeamFlow</Heading>
      </HStack>
      <HStack spacing={"2.5rem"}>
        <HStack cursor={"pointer"}>
          <Link>Product</Link>
          <DownwardArrow />
        </HStack>
        <HStack cursor={"pointer"}>
          <Link>Solution</Link>
          <DownwardArrow />
        </HStack>
        <Link cursor={"pointer"}>Enterprise</Link>
        <Link cursor={"pointer"}>Pricing</Link>
      </HStack>
      <HStack spacing={"2.813rem"}>
        <Button color="#757575" variant="link">
          Log In
        </Button>
        <Button color="brand.darkgray" bg="brand.yellow" px={"2rem"}>
          Sign Up
        </Button>
      </HStack>
    </HStack>
  );
};

export default NavBar;
