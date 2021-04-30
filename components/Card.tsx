import { Box, Flex, Icon, Text } from "@chakra-ui/react";
import { ImHappy } from "react-icons/im";
import { GiKnifeFork } from "react-icons/gi";
import { FaCalendarCheck, FaFrown } from "react-icons/fa";
const Card = ({ icon, text }: { icon: string; text: string }) => {
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
      <Icon
        as={
          icon === "happy"
            ? ImHappy
            : icon === "fork"
            ? GiKnifeFork
            : icon === "calendar"
            ? FaCalendarCheck
            : FaFrown
        }
        w={12}
        h={12}
        color="cyan.600"
        justifyItems="flex-start"
      />
      <Text color="cyan.700" textAlign="center" fontSize="4xl">
        {text}
      </Text>
    </Flex>
  );
};

export default Card;
