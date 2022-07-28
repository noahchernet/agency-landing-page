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
    <HStack position={"relative"}>
      <Box position={"relative"} bottom={"4rem"}>
        <Image
          src="/assets/message-type-2.svg"
          alt="comment-view"
          filter={"drop-shadow(0 75px 121px rgba(0,0,0,0.05))"}
        />
        <VStack
          position={"relative"}
          bottom={"10.75rem"}
          align="left"
          pl={"1.875rem"}
        >
          <Text
            color={"white"}
            bg={"#FD9B79"}
            fontSize={"1.2rem"}
            py={"0.18rem"}
            px={"1.4rem"}
            borderRadius={"0.4rem"}
            mr={"1rem"}
            ml={"18.4rem"}
            mt={"0.9rem"}
            mb={"-0.9rem"}
          >
            Pending
          </Text>
          <Text fontSize="1rem" color="#6C71A1">
            Mark Anderson{" "}
          </Text>
          <Text fontSize="1.3rem" fontWeight="bold" color="#2B3377">
            Update Contract Agreement
          </Text>
          <HStack spacing={"1px"}>
            <AiFillStar size="1.38rem" color="#FFCD1A" />
            <AiFillStar size="1.38rem" color="#FFCD1A" />
            <AiFillStar size="1.38rem" color="#FFCD1A" />
            <AiFillStar size="1.38rem" color="#FFCD1A" />
            <AiFillStar size="1.38rem" color="#FFCD1A" />
          </HStack>
        </VStack>
      </Box>
      <Box position={"relative"} bottom={"2.75rem"} left={"4rem"}>
        <Image
          src="/assets/picture-mark.png"
          alt="picture-of-mark"
          bgImage={"/assets/dotted-circle.png"}
        />

        <Image
          src="/assets/dotted-circle.svg"
          alt="dotted-circle"
          position={"relative"}
          bottom={"13rem"}
          right={"1rem"}
        />
        <Text
          position={"relative"}
          bottom={"22rem"}
          left={"10rem"}
          color={"#279E73"}
          bg={"white"}
          px={"1.25rem"}
          py={"0.3rem"}
          borderRadius={"2rem"}
          maxW={"5.7rem"}
          textAlign={"center"}
          fontWeight={"bold"}
        >
          Mark
        </Text>
      </Box>
    </HStack>
  );
};

const HeroSection = (props: Props) => {
  return (
    <Box as="section" bg="white">
      <Box bg="#FAFAFF" position="relative">
        <Box
          minH={"100vh"}
          bg={"brand.purple"}
          clipPath={{
            base: "",
            "2xl": "polygon(0% 0%, 67% 0%, 52% 100%, 0% 100%)",
          }}
          zIndex={"-1"}
        >
          {/* Cloudy svgs covering top and bootom of this box */}
          <Image
            src="/assets/first-section-bg-1.svg"
            alt="cloudy-facade"
            w={"50rem"}
            zIndex={{ base: "1", "2xl": "-1" }}
          />
          <Image
            src="/assets/first-section-bg-2.svg"
            alt="cloudy-facade"
            w={"60rem"}
            position={"absolute"}
            top={0}
            zIndex={{ base: "1", "2xl": "-1" }}
          />
          <Image
            src="/assets/first-section-bg-3.svg"
            alt="cloudy-facade"
            w={{ base: "95rem", "2xl": "75rem" }}
            position={"absolute"}
            bottom={"-9rem"}
            zIndex={{ base: "1", "2xl": "-1" }}
          />
          <Image
            src="/assets/first-section-bg-4.svg"
            alt="cloudy-facade"
            w={{ base: "95rem", "2xl": "75rem" }}
            position={"absolute"}
            bottom={"-4.5rem"}
            zIndex={{ base: "1", "2xl": "-1" }}
          />

          {/* Floating squares, circles in the middle of this box */}
          <Image
            src="/assets/purple-circle.svg"
            alt="decoration-purple-circle"
            position={"absolute"}
            left={{ base: "", lg: "33.4rem" }}
            zIndex={{ base: "1", "2xl": "-1" }}
            display={{ base: "none", lg: "block" }}
          />
          <Image
            src="/assets/blue-square.svg"
            alt="decoration-blue-square"
            position={"absolute"}
            left={"45rem"}
            mt={"2rem"}
            zIndex={{ base: "1", "2xl": "-1" }}
            display={{ base: "none", lg: "block" }}
          />
          <Image
            src="/assets/cursor-blue-left.svg"
            alt="decoration-cursor"
            h={"3rem"}
            position={"absolute"}
            top={"28rem"}
            left={"38rem"}
            zIndex={"-1"}
            display={{ base: "none", lg: "block" }}
          />
          <Image
            src="/assets/orange-triangle.svg"
            alt="decoration-triangle"
            h={"2rem"}
            position={"absolute"}
            bottom={"13rem"}
            left={"35rem"}
            display={{ base: "none", lg: "block" }}
          />
        </Box>
      </Box>
      <Box
        position={"relative"}
        bottom={"100vh"}
        zIndex={"1"}
        mt={{ base: "1rem", md: "6rem" }}
        mx={{ base: "1rem", sm: "5rem", md: "11.87rem" }}
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
            <Heading
              fontSize={{ base: "2rem", md: "3.4rem" }}
              color="white"
              maxW="45rem"
            >
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
              position={{ base: "relative", lg: "inherit" }}
              top={{ base: "5rem", lg: "0" }}
            >
              Get Started
            </Button>
          </VStack>
          <VStack
            spacing={"1.32rem"}
            display={{ base: "none", "2xl": "flex" }}
          >
            <ProfileLucy />
            <ProfileMark />
          </VStack>
          <VStack
            display={{ base: "none", xl: "flex", "2xl": "none" }}
            spacing={{ base: "0" }}
            align={"center"}
          >
            <Image src="assets/replacement_lucy.png" alt="lucy" />
            <Image src="assets/replacement_lucy_comment.png" alt="lucy" />
          </VStack>
        </Stack>
      </Box>
    </Box>
  );
};

export default HeroSection;
