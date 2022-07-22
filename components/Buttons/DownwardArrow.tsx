import { Box } from "@chakra-ui/react";
import React from "react";

type Props = {};

const DownwardArrow = (props: Props) => {
  return (
    <Box pt={"0.3rem"}>
      <svg
        width="14"
        height="8"
        viewBox="0 0 17 10"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M1 1L8.5 8L16 1" stroke="white" strokeWidth="2" />
      </svg>
    </Box>
  );
};

export default DownwardArrow;
