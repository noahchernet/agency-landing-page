import React from "react";
import {
  Box,
  Button,
  Center,
  Heading,
  HStack,
  IconButton,
  Image,
  Link,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import DownwardArrow from "./Buttons/DownwardArrow";
import YellowButton from "./Buttons/YellowButton";
import { GiHamburgerMenu } from "react-icons/gi";

type Props = {};

const NavBar = (props: Props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  return (
    <>
      <HStack justify={{ base: "center", lg: "space-between" }}>
        <IconButton
          aria-label="navigation-drawer"
          icon={
            <Center>
              <GiHamburgerMenu />
            </Center>
          }
          display={{ base: "block", xl: "none" }}
          onClick={onOpen}
          position={{ base: "absolute", lg: "inherit" }}
          left={0}
        />
        <Image src="/assets/logo_yellow.svg" alt="teamflow-logo" />
        <HStack spacing={"2.5rem"} display={{ base: "none", xl: "flex" }}>
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
        <HStack spacing={"2.813rem"} display={{ base: "none", lg: "block" }}>
          {/* bg will be purple on screens < 2xl button text will be white */}
          <Button color={{ base: "white", "2xl": "#757575" }} variant="link">
            Log In
          </Button>
          <YellowButton text={"Sign Up"} />
        </HStack>
      </HStack>

      {/* Drawer for smaller screens */}
      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />

          <DrawerBody>
            <DrawerHeader />
            <VStack spacing={"2.5rem"} align={"flex-start"}>
              <HStack
                cursor={"pointer"}
                w={"full"}
                pt={"2rem"}
                borderBottom={"0.1rem solid #757575"}
              >
                <Link color={"#4b4aef"}>Product</Link>
                <DownwardArrow />
              </HStack>
              <HStack
                cursor={"pointer"}
                w={"full"}
                pt={"2rem"}
                borderBottom={"0.1rem solid #757575"}
              >
                <Link color={"#4b4aef"}>Solution</Link>
                <DownwardArrow />
              </HStack>
              <Link
                color={"#4b4aef"}
                w={"full"}
                pt={"2rem"}
                borderBottom={"0.1rem solid #757575"}
              >
                Enterprise
              </Link>
              <Link
                color={"#4b4aef"}
                w={"full"}
                pt={"2rem"}
                borderBottom={"0.1rem solid #757575"}
              >
                Pricing
              </Link>
            </VStack>
          </DrawerBody>

          <DrawerFooter>
            <HStack spacing={"2.813rem"}>
              <Button color="#757575" variant="link">
                Log In
              </Button>
              <YellowButton text={"Sign Up"} />
            </HStack>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default NavBar;
