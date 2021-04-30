import { Flex, Text } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Flex justify="center" w={{ base: "90%", md: "50%" }} mx="auto">
      <Text fontSize="xl">Midang (c) {new Date().getFullYear()}</Text>
    </Flex>
  );
};

export default Footer;
