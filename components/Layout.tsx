import { Box, Heading, Spacer, Flex } from "@chakra-ui/react";
import React from "react";
import DarkModeSwitch from "./DarkModeSwitch";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Flex w={{ base: "90%", md: "75%" }} mx="auto" p={4}>
        <Heading color="cyan.700" as="h1" fontSize="4xl">
          Midang
        </Heading>
        <Spacer />
        <DarkModeSwitch color="cyan" />
      </Flex>
      <Flex justify="center" w={{ base: "90%", md: "50%" }} mx="auto">
        <Navbar />
      </Flex>

      {children}
      <Footer />
    </>
  );
};

export default Layout;
