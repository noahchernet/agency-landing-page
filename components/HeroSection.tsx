import {
  Box,
  Stack,
  VStack,
  HStack,
  Text,
  Heading,
  Button,
  Image,
} from "@chakra-ui/react";
import React from "react";
import NavBar from "./NavBar";
import { AiFillStar } from "react-icons/ai";
import { FaBeer } from "react-icons/fa";

type Props = {};

const ProfileLucy = (props: Props) => {
  return (
    <HStack spacing={0} justify={"space-between"}>
      {/* Profile picture and text  */}
      <HStack mr={"-19rem"}>
        <Text
          bg={"white"}
          color={"#494949"}
          borderRadius={"2rem"}
          py={"0.7rem"}
          px={"5.5rem"}
          fontSize={"1.875rem"}
          fontWeight={"bold"}
          position={"relative"}
          top={"4rem"}
          zIndex={"3"}
        >
          Lucy
        </Text>
        <Image
          src="/assets/picture-lucy.png"
          alt="Picture of Lucy"
          position={"relative"}
          right={"8.5rem"}
          bottom={"0.75rem"}
          zIndex={"2"}
          filter={"drop-shadow(5px 17px 41px rgba(41,43,107,0.3))"}
          bgImage={"url()"}
        />
        <Box position={"relative"} right={"26.85rem"} bottom={"1rem"}>
          <svg
            width="312"
            height="312"
            viewBox="0 0 312 312"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="156.287"
              cy="156.086"
              r="151.85"
              stroke="white"
              strokeWidth="6.90229"
              strokeDasharray="51.77 51.77"
            />
          </svg>
        </Box>
      </HStack>
      {/* Comment and rating */}
      <Box pl={"8rem"} position={"relative"}>
        <VStack
          position={"absolute"}
          top={"1rem"}
          zIndex={3}
          align="left"
          pl={"1.6rem"}
          spacing={"0.01rem"}
        >
          <Text
            color={"white"}
            bg={"#3ADAD9"}
            fontSize={"1.2rem"}
            py={"0.18rem"}
            px={"1rem"}
            borderRadius={"0.4rem"}
            ml={"12.4rem"}
            mt={"0.9rem"}
            mb={"-0.9rem"}
          >
            Done
          </Text>
          <Text fontSize="1rem" color="#6C71A1">
            Lucy Niana
          </Text>
          <Text fontSize="1.3rem" fontWeight="bold" color="#2B3377">
            Develop Communication Plan
          </Text>
          <HStack spacing={"1px"}>
            <AiFillStar size="1.38rem" color="#FFCD1A" />
            <AiFillStar size="1.38rem" color="#FFCD1A" />
            <AiFillStar size="1.38rem" color="#FFCD1A" />
            <AiFillStar size="1.38rem" color="#FFCD1A" />
            <AiFillStar size="1.38rem" color="#CCCCCC" />
          </HStack>
          <Image
            src="assets/cursor-yellow-right.svg"
            alt="mouse-cursor"
            h={"3rem"}
            pl={"14rem"}
            // pt={"2rem"}
          />
        </VStack>
        <Image
          h={"10.75rem"}
          src="/assets/message.svg"
          alt="comment_bubble"
          filter={"drop-shadow(0 75px 121px rgba(0,0,0,0.05))"}
        />
      </Box>
    </HStack>
  );
};

const ProfileMark = (props: Props) => {
  return (
    <HStack>
      <Image
        src="/assets/message-type-2.svg"
        alt="comment-view"
        filter={"drop-shadow(0 75px 121px rgba(0,0,0,0.05))"}
      />
    </HStack>
  );
};

const HeroSection = (props: Props) => {
  return (
    <Box as="section" bg="white">
      <Box bg="#FAFAFF">
        <Box
          minH={"100vh"}
          bg={"brand.purple"}
          clipPath={"polygon(0% 0%, 67% 0%, 52% 100%, 0% 100%)"}
          zIndex={"-1"}
        />
      </Box>
      <Box
        position={"relative"}
        bottom={"100vh"}
        zIndex={"1"}
        mt={"6rem"}
        mx={"10.9rem"}
      >
        <NavBar />
        <Stack
          direction={{ base: "column", md: "row" }}
          mt="6.47rem"
          spacing={"3rem"}
        >
          <VStack align="flex-start" spacing={"2.5rem"}>
            <Text
              bg={"white"}
              py={"0.7rem"}
              pl={"0.5rem"}
              pr={"1.9rem"}
              borderRadius={"0.625rem"}
            >
              👋 Welcome to TeamFlow
            </Text>
            <Heading fontSize="3.4rem" color="white" maxW="45rem">
              Work the way that works for you
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
                stroke="#3ADAD9"
                strokeWidth="6"
                strokeLinecap="round"
              />
            </svg>
            {/* <Text fontSize={"1.875rem"} color={"white"} maxW={"39rem"}> */}
            <Text fontSize={"2xl"} color={"white"} maxW={"30rem"}>
              Create, build, collaborate and ship products faster!
            </Text>
            <Button
              color="brand.darkgray"
              bg="brand.yellow"
              py={"1.65rem"}
              px={"2.4rem"}
              _hover={{ bg: "#ffd91d" }}
              fontSize={"xl"}
            >
              Get Started
            </Button>
          </VStack>
          <VStack spacing={"4.12rem"}>
            <ProfileLucy />
            <ProfileMark />
          </VStack>
        </Stack>
      </Box>
    </Box>
  );
};

export default HeroSection;
