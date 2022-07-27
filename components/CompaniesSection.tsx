import { Image, Stack, Text, VStack, Wrap, WrapItem } from "@chakra-ui/react";
import React from "react";

type Props = {};

const CompaniesSection = (props: Props) => {
  return (
    <Stack
      px={{ base: "3rem", xl: "11.87rem" }}
      direction={{ base: "column", xl: "row" }}
    >
      <VStack align="left">
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
        <Text
          color="#515151"
          fontSize={"1.875rem"}
          fontWeight="bold"
          maxW={{ xl: "33rem" }}
        >
          See why over 100,000 teams choose TeamFlow
        </Text>
      </VStack>

      <Wrap
        direction={{ base: "row" }}
        pt={"0.9rem"}
        spacing={"5.4rem"}
        justify={"center"}
        w={{ lg: "max-content" }}
      >
        <WrapItem>
          <Image src="/assets/company_hulu.png" alt="hulu_logo" h={"4rem"} />
        </WrapItem>
        <WrapItem>
          <Image src="/assets/company_bbc.png" alt="bbc_logo" h={"4rem"} />
        </WrapItem>
        <WrapItem>
          <Image
            src="/assets/company_universal.png"
            alt="universal_logo"
            h={"4rem"}
          />
        </WrapItem>
        <Image src="/assets/company_adobe.png" alt="adobe_logo" h={"4rem"} />
      </Wrap>
    </Stack>
  );
};

export default CompaniesSection;
