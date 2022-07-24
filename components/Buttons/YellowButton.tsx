import { Button } from "@chakra-ui/react";
import React from "react";

type Props = {
  text: string;
};

const YellowButton = (props: Props) => {
  return (
    <Button
      color="brand.darkgray"
      bg="brand.yellow"
      px={"2rem"}
      _hover={{ bg: "#ffd91d" }}
    >
      {props.text}
    </Button>
  );
};

export default YellowButton;
