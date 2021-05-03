import { Heading, Spacer, Flex } from "@chakra-ui/react";
import Head from "next/head";
import React from "react";
import DarkModeSwitch from "./DarkModeSwitch";
import Footer from "./Footer";
import Navbar from "./Navbar";

export default function Layout({
  children,
  title = "Midang",
  description = "Das beste koreanische Restaurant in Deutschland",
  keywords = "korean, food, restaurant, tasty",
}: {
  children: React.ReactNode;
  title?: string;
  description?: string;
  keywords?: string;
}) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
      </Head>
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
}
