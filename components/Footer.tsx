import {
  Box,
  Stack,
  VStack,
  HStack,
  Text,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import React from "react";
import { BsFacebook, BsYoutube } from "react-icons/bs";
import { RiInstagramFill } from "react-icons/ri";
import { AiFillTwitterCircle } from "react-icons/ai";

type Props = {};

const Footer = (props: Props) => {
  return (
    <Stack
      direction={{ base: "column-reverse", lg: "row" }}
      pl={{ base: "0.5rem", sm: "2.5rem", lg: "0" }}
      justify={"space-evenly"}
      spacing={{ base: "1.75rem", lg: "2.5rem" }}
      w={"full"}
      pb={"3rem"}
    >
      <VStack
        spacing={{ base: "1rem", lg: "5rem" }}
        align={"left"}
        pt={{ base: "0.5rem", lg: "0" }}
      >
        <svg
          width="175"
          height="45"
          viewBox="0 0 175 45"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M61.65 18.36C61.17 17.48 60.51 16.81 59.67 16.35C58.83 15.89 57.85 15.66 56.73 15.66C55.49 15.66 54.39 15.94 53.43 16.5C52.47 17.06 51.72 17.86 51.18 18.9C50.64 19.94 50.37 21.14 50.37 22.5C50.37 23.9 50.64 25.12 51.18 26.16C51.74 27.2 52.51 28 53.49 28.56C54.47 29.12 55.61 29.4 56.91 29.4C58.51 29.4 59.82 28.98 60.84 28.14C61.86 27.28 62.53 26.09 62.85 24.57H55.65V21.36H66.99V25.02C66.71 26.48 66.11 27.83 65.19 29.07C64.27 30.31 63.08 31.31 61.62 32.07C60.18 32.81 58.56 33.18 56.76 33.18C54.74 33.18 52.91 32.73 51.27 31.83C49.65 30.91 48.37 29.64 47.43 28.02C46.51 26.4 46.05 24.56 46.05 22.5C46.05 20.44 46.51 18.6 47.43 16.98C48.37 15.34 49.65 14.07 51.27 13.17C52.91 12.25 54.73 11.79 56.73 11.79C59.09 11.79 61.14 12.37 62.88 13.53C64.62 14.67 65.82 16.28 66.48 18.36H61.65ZM77.4773 33.27C75.8773 33.27 74.4373 32.92 73.1573 32.22C71.8773 31.5 70.8673 30.49 70.1273 29.19C69.4073 27.89 69.0473 26.39 69.0473 24.69C69.0473 22.99 69.4173 21.49 70.1573 20.19C70.9173 18.89 71.9473 17.89 73.2473 17.19C74.5473 16.47 75.9973 16.11 77.5973 16.11C79.1973 16.11 80.6473 16.47 81.9473 17.19C83.2473 17.89 84.2673 18.89 85.0073 20.19C85.7673 21.49 86.1473 22.99 86.1473 24.69C86.1473 26.39 85.7573 27.89 84.9773 29.19C84.2173 30.49 83.1773 31.5 81.8573 32.22C80.5573 32.92 79.0973 33.27 77.4773 33.27ZM77.4773 29.61C78.2373 29.61 78.9473 29.43 79.6073 29.07C80.2873 28.69 80.8273 28.13 81.2273 27.39C81.6273 26.65 81.8273 25.75 81.8273 24.69C81.8273 23.11 81.4073 21.9 80.5673 21.06C79.7473 20.2 78.7373 19.77 77.5373 19.77C76.3373 19.77 75.3273 20.2 74.5073 21.06C73.7073 21.9 73.3073 23.11 73.3073 24.69C73.3073 26.27 73.6973 27.49 74.4773 28.35C75.2773 29.19 76.2773 29.61 77.4773 29.61ZM93.4282 10.8V33H89.2282V10.8H93.4282ZM96.4978 24.63C96.4978 22.95 96.8278 21.46 97.4878 20.16C98.1678 18.86 99.0878 17.86 100.248 17.16C101.408 16.46 102.698 16.11 104.118 16.11C105.198 16.11 106.228 16.35 107.208 16.83C108.188 17.29 108.968 17.91 109.548 18.69V10.8H113.808V33H109.548V30.54C109.028 31.36 108.298 32.02 107.358 32.52C106.418 33.02 105.328 33.27 104.088 33.27C102.688 33.27 101.408 32.91 100.248 32.19C99.0878 31.47 98.1678 30.46 97.4878 29.16C96.8278 27.84 96.4978 26.33 96.4978 24.63ZM109.578 24.69C109.578 23.67 109.378 22.8 108.978 22.08C108.578 21.34 108.038 20.78 107.358 20.4C106.678 20 105.948 19.8 105.168 19.8C104.388 19.8 103.668 19.99 103.008 20.37C102.348 20.75 101.808 21.31 101.388 22.05C100.988 22.77 100.788 23.63 100.788 24.63C100.788 25.63 100.988 26.51 101.388 27.27C101.808 28.01 102.348 28.58 103.008 28.98C103.688 29.38 104.408 29.58 105.168 29.58C105.948 29.58 106.678 29.39 107.358 29.01C108.038 28.61 108.578 28.05 108.978 27.33C109.378 26.59 109.578 25.71 109.578 24.69Z"
            fill="#5565F0"
          />
          <path
            d="M129.79 22.26C130.97 22.48 131.94 23.07 132.7 24.03C133.46 24.99 133.84 26.09 133.84 27.33C133.84 28.45 133.56 29.44 133 30.3C132.46 31.14 131.67 31.8 130.63 32.28C129.59 32.76 128.36 33 126.94 33H117.91V12.06H126.55C127.97 12.06 129.19 12.29 130.21 12.75C131.25 13.21 132.03 13.85 132.55 14.67C133.09 15.49 133.36 16.42 133.36 17.46C133.36 18.68 133.03 19.7 132.37 20.52C131.73 21.34 130.87 21.92 129.79 22.26ZM122.11 20.7H125.95C126.95 20.7 127.72 20.48 128.26 20.04C128.8 19.58 129.07 18.93 129.07 18.09C129.07 17.25 128.8 16.6 128.26 16.14C127.72 15.68 126.95 15.45 125.95 15.45H122.11V20.7ZM126.34 29.58C127.36 29.58 128.15 29.34 128.71 28.86C129.29 28.38 129.58 27.7 129.58 26.82C129.58 25.92 129.28 25.22 128.68 24.72C128.08 24.2 127.27 23.94 126.25 23.94H122.11V29.58H126.34ZM144.567 33.27C142.967 33.27 141.527 32.92 140.247 32.22C138.967 31.5 137.957 30.49 137.217 29.19C136.497 27.89 136.137 26.39 136.137 24.69C136.137 22.99 136.507 21.49 137.247 20.19C138.007 18.89 139.037 17.89 140.337 17.19C141.637 16.47 143.087 16.11 144.687 16.11C146.287 16.11 147.737 16.47 149.037 17.19C150.337 17.89 151.357 18.89 152.097 20.19C152.857 21.49 153.237 22.99 153.237 24.69C153.237 26.39 152.847 27.89 152.067 29.19C151.307 30.49 150.267 31.5 148.947 32.22C147.647 32.92 146.187 33.27 144.567 33.27ZM144.567 29.61C145.327 29.61 146.037 29.43 146.697 29.07C147.377 28.69 147.917 28.13 148.317 27.39C148.717 26.65 148.917 25.75 148.917 24.69C148.917 23.11 148.497 21.9 147.657 21.06C146.837 20.2 145.827 19.77 144.627 19.77C143.427 19.77 142.417 20.2 141.597 21.06C140.797 21.9 140.397 23.11 140.397 24.69C140.397 26.27 140.787 27.49 141.567 28.35C142.367 29.19 143.367 29.61 144.567 29.61ZM160.518 10.8V33H156.318V10.8H160.518ZM169.558 19.83V27.87C169.558 28.43 169.688 28.84 169.948 29.1C170.228 29.34 170.688 29.46 171.328 29.46H173.278V33H170.638C167.098 33 165.328 31.28 165.328 27.84V19.83H163.348V16.38H165.328V12.27H169.558V16.38H173.278V19.83H169.558Z"
            fill="#FFCA1D"
          />
          <circle cx="17.5" cy="21.5" r="17.5" fill="#FFCA1D" />
          <path
            d="M24.3492 12.8088L21.0343 24.7463L9.62107 29.5662L12.936 17.6287L24.3492 12.8088Z"
            fill="white"
          />
        </svg>
        <Text color={"#5C5E87"}>All Rights Reserved</Text>
        <VStack align={"left"}>
          <Text color={"#2B3377"} fontWeight={"bold"}>
            Address
          </Text>
          <Text color={"#5C5E87"}>26 W 12th St. New York, NY 10342, NYC</Text>
        </VStack>
        <VStack align={"left"}>
          <Text color={"#2B3377"} fontWeight={"bold"}>
            Social Media
          </Text>
          <HStack spacing={{ base: "0.7rem", sm: "1.4rem" }} wrap="wrap">
            <BsFacebook color={"#373C59"} size={"2.56rem"} />
            <RiInstagramFill color={"#373C59"} size={"2.9rem"} />
            <AiFillTwitterCircle color={"#373C59"} size={"2.9rem"} />
            <BsYoutube color={"#373C59"} size={"3.1rem"} />
          </HStack>
        </VStack>
      </VStack>
      <VStack spacing={{ base: "-1rem", lg: "1.75rem" }} align={"left"}>
        <Text fontWeight="bold" color={"#2B3377"} pb={"0.75rem"}>
          Product
        </Text>
        <Stack
          direction={{ base: "row", lg: "column" }}
          spacing={{ base: "0", lg: "1.75rem" }}
          align={"flex-start"}
          wrap="wrap"
        >
          <Text
            color={"#5C5E87"}
            pr={{ base: "1.5rem", lg: "0" }}
            pt={{ base: "0.5rem", lg: "0" }}
          >
            Product
          </Text>
          <Text
            color={"#5C5E87"}
            pr={{ base: "1.5rem", lg: "0" }}
            pt={{ base: "0.5rem", lg: "0" }}
          >
            Enterprise
          </Text>
          <Text
            color={"#5C5E87"}
            pr={{ base: "1.5rem", lg: "0" }}
            pt={{ base: "0.5rem", lg: "0" }}
          >
            Partners
          </Text>
          <Text
            color={"#5C5E87"}
            pr={{ base: "1.5rem", lg: "0" }}
            pt={{ base: "0.5rem", lg: "0" }}
          >
            Affiliate
          </Text>
          <Text
            color={"#5C5E87"}
            pr={{ base: "1.5rem", lg: "0" }}
            pt={{ base: "0.5rem", lg: "0" }}
          >
            Integrations
          </Text>
          <Text
            color={"#5C5E87"}
            pr={{ base: "1.5rem", lg: "0" }}
            pt={{ base: "0.5rem", lg: "0" }}
          >
            Developers
          </Text>
          <Text
            color={"#5C5E87"}
            pr={{ base: "1.5rem", lg: "0" }}
            pt={{ base: "0.5rem", lg: "0" }}
          >
            Students
          </Text>
          <Text
            color={"#5C5E87"}
            pr={{ base: "1.5rem", lg: "0" }}
            pt={{ base: "0.5rem", lg: "0" }}
          >
            Work OS
          </Text>
        </Stack>
      </VStack>

      <VStack spacing={{ base: "-1rem", lg: "1.75rem" }} align={"left"}>
        <Text fontWeight="bold" color={"#2B3377"} pb={"0.75rem"}>
          Team
        </Text>
        <Stack
          direction={{ base: "row", lg: "column" }}
          spacing={{ base: "0", lg: "1.75rem" }}
          align={"flex-start"}
          wrap="wrap"
        >
          <Text
            color={"#5C5E87"}
            pr={{ base: "1.5rem", lg: "0" }}
            pt={{ base: "0.5rem", lg: "0" }}
          >
            About Us
          </Text>
          <Text
            color={"#5C5E87"}
            pr={{ base: "1.5rem", lg: "0" }}
            pt={{ base: "0.5rem", lg: "0" }}
          >
            Contact Us
          </Text>
          <Text
            color={"#5C5E87"}
            pr={{ base: "1.5rem", lg: "0" }}
            pt={{ base: "0.5rem", lg: "0" }}
          >
            Careers
          </Text>
          <Text
            color={"#5C5E87"}
            pr={{ base: "1.5rem", lg: "0" }}
            pt={{ base: "0.5rem", lg: "0" }}
          >
            Find a Partner
          </Text>
          <Text
            color={"#5C5E87"}
            pr={{ base: "1.5rem", lg: "0" }}
            pt={{ base: "0.5rem", lg: "0" }}
          >
            In the News
          </Text>
        </Stack>
      </VStack>

      <VStack spacing={{ base: "-1rem", lg: "1.75rem" }} align={"left"}>
        <Text fontWeight="bold" color={"#2B3377"} pb={"0.75rem"}>
          Solutions
        </Text>
        <Stack
          direction={{ base: "row", lg: "column" }}
          spacing={{ base: "0", lg: "1.75rem" }}
          align={"flex-start"}
          wrap="wrap"
        >
          <Text
            color={"#5C5E87"}
            pr={{ base: "1.5rem", lg: "0" }}
            pt={{ base: "0.5rem", lg: "0" }}
          >
            Project Management
          </Text>
          <Text
            color={"#5C5E87"}
            pr={{ base: "1.5rem", lg: "0" }}
            pt={{ base: "0.5rem", lg: "0" }}
          >
            Marketing
          </Text>
          <Text
            color={"#5C5E87"}
            pr={{ base: "1.5rem", lg: "0" }}
            pt={{ base: "0.5rem", lg: "0" }}
          >
            CRM and Sales
          </Text>
          <Text
            color={"#5C5E87"}
            pr={{ base: "1.5rem", lg: "0" }}
            pt={{ base: "0.5rem", lg: "0" }}
          >
            Software Development
          </Text>
          <Text
            color={"#5C5E87"}
            pr={{ base: "1.5rem", lg: "0" }}
            pt={{ base: "0.5rem", lg: "0" }}
          >
            Constructions
          </Text>
          <Text
            color={"#5C5E87"}
            pr={{ base: "1.5rem", lg: "0" }}
            pt={{ base: "0.5rem", lg: "0" }}
          >
            Creative Production
          </Text>
          <Text
            color={"#5C5E87"}
            pr={{ base: "1.5rem", lg: "0" }}
            pt={{ base: "0.5rem", lg: "0" }}
          >
            Remote Work
          </Text>
          <Text
            color={"#5C5E87"}
            pr={{ base: "1.5rem", lg: "0" }}
            pt={{ base: "0.5rem", lg: "0" }}
          >
            HR
          </Text>
          <Text
            color={"#5C5E87"}
            pr={{ base: "1.5rem", lg: "0" }}
            pt={{ base: "0.5rem", lg: "0" }}
          >
            IT
          </Text>
          <Text
            color={"#5C5E87"}
            pr={{ base: "1.5rem", lg: "0" }}
            pt={{ base: "0.5rem", lg: "0" }}
          >
            See More Solutions
          </Text>
        </Stack>
      </VStack>
      <VStack spacing={{ base: "-1rem", lg: "1.75rem" }} align={"left"}>
        <Text fontWeight="bold" color={"#2B3377"} pb={"0.75rem"}>
          Resources
        </Text>
        <Stack
          direction={{ base: "row", lg: "column" }}
          spacing={{ base: "0", lg: "1.75rem" }}
          align={"flex-start"}
          wrap="wrap"
        >
          <Text
            color={"#5C5E87"}
            pr={{ base: "1.5rem", lg: "0" }}
            pt={{ base: "0.5rem", lg: "0" }}
          >
            Knowledge Base
          </Text>
          <Text
            color={"#5C5E87"}
            pr={{ base: "1.5rem", lg: "0" }}
            pt={{ base: "0.5rem", lg: "0" }}
          >
            Daily Webinars
          </Text>
          <Text
            color={"#5C5E87"}
            pr={{ base: "1.5rem", lg: "0" }}
            pt={{ base: "0.5rem", lg: "0" }}
          >
            Community
          </Text>
          <Text
            color={"#5C5E87"}
            pr={{ base: "1.5rem", lg: "0" }}
            pt={{ base: "0.5rem", lg: "0" }}
          >
            Customer Stories
          </Text>
          <Text
            color={"#5C5E87"}
            pr={{ base: "1.5rem", lg: "0" }}
            pt={{ base: "0.5rem", lg: "0" }}
          >
            Templates
          </Text>
          <Text
            color={"#5C5E87"}
            pr={{ base: "1.5rem", lg: "0" }}
            pt={{ base: "0.5rem", lg: "0" }}
          >
            Profesionals Services
          </Text>
          <Text
            color={"#5C5E87"}
            pr={{ base: "1.5rem", lg: "0" }}
            pt={{ base: "0.5rem", lg: "0" }}
          >
            Video Tutorials
          </Text>
          <Text
            color={"#5C5E87"}
            pr={{ base: "1.5rem", lg: "0" }}
            pt={{ base: "0.5rem", lg: "0" }}
          >
            Blog
          </Text>
          <Text
            color={"#5C5E87"}
            pr={{ base: "1.5rem", lg: "0" }}
            pt={{ base: "0.5rem", lg: "0" }}
          >
            Podcast
          </Text>
        </Stack>
      </VStack>
    </Stack>
  );
};

export default Footer;
