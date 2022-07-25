import { VStack, Image, Center, Heading } from "@chakra-ui/react";
import React from "react";
import { motion } from "framer-motion";

type Props = {};

const ClientTestimonials = (props: Props) => {
  return (
    <VStack pt={"4rem"}>
      <Center>
        <Heading
          mb={"6.875rem"}
          maxW={"40rem"}
          as={motion.h1}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
        >
          <span style={{ color: "#565656" }}>Client</span>{" "}
          <span style={{ color: "#FFCA1D" }}>Testimonials</span>
        </Heading>
      </Center>
      <Image
        src="assets/client_testimonials.png"
        alt="client_testimonials"
        position={"relative"}
        right={"3.5rem"}
      />
    </VStack>
  );
};

export default ClientTestimonials;
