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

type Props = {};

const Profiles = (props: Props) => {
  return <></>;
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
            <Heading fontSize="3.4rem" color="white" maxW="35rem">
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
          <VStack>
            <HStack spacing={0}>
              {/* Profile picture and text  */}
              <HStack>
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
              <Box>
                {/* <Text>Filler</Text> */}
                <svg
                  width="619"
                  height="397"
                  viewBox="0 0 619 397"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g filter="url(#filter0_d_4620_158)">
                    <path
                      d="M121.909 65.2819C121.909 55.3407 129.968 47.2819 139.909 47.2819H478.977C488.918 47.2819 496.977 55.3407 496.977 65.2819V168.959C496.977 178.9 488.918 186.959 478.977 186.959H160.416C156.373 186.959 152.47 188.438 149.443 191.116L143.267 196.58C134.976 203.915 121.909 198.029 121.909 186.959V186.959V65.2819Z"
                      fill="white"
                    />
                  </g>
                  <defs>
                    <filter
                      id="filter0_d_4620_158"
                      x="0.0121613"
                      y="0.398392"
                      width="618.862"
                      height="396.342"
                      filterUnits="userSpaceOnUse"
                      colorInterpolationFilters="sRGB"
                    >
                      <feFlood floodOpacity="0" result="BackgroundImageFix" />
                      <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                      />
                      <feOffset dy="75.0135" />
                      <feGaussianBlur stdDeviation="60.9485" />
                      <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0"
                      />
                      <feBlend
                        mode="normal"
                        in2="BackgroundImageFix"
                        result="effect1_dropShadow_4620_158"
                      />
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect1_dropShadow_4620_158"
                        result="shape"
                      />
                    </filter>
                  </defs>
                </svg>
              </Box>
            </HStack>
          </VStack>
        </Stack>
      </Box>
    </Box>
  );
};

export default HeroSection;
