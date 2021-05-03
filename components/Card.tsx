import { Flex, Text } from "@chakra-ui/react";
// import { ImHappy } from "react-icons/im";
// import { GiKnifeFork } from "react-icons/gi";
// import { FaCalendarCheck, FaFrown } from "react-icons/fa";
import Image from "next/image";
const Card = ({ icon, text }: { icon: string; text: string }) => {
  // console.log(icon);

  return (
    <Flex
      direction="column"
      justify="center"
      align="center"
      bg="cyan.300"
      borderRadius="lg"
      h="100%"
      w="100%"
      p={6}
    >
      {/* <Icon
        as={
          icon === "1"
            ? ImHappy
            : icon === "2"
            ? GiKnifeFork
            : icon === "3"
            ? FaCalendarCheck
            : FaFrown
        }
        w={12}
        h={12}
        color="cyan.600"
        justifyItems="flex-start"
      /> */}
      <Image src={icon} width="64" height="64" />

      <Text color="cyan.700" textAlign="center" fontSize="4xl">
        {text}
      </Text>
    </Flex>
  );
};

export default Card;
