import Hero from "@/components/Hero";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  useColorModeValue,
} from "@chakra-ui/react";

const ContactPage = () => {
  const bgColor = useColorModeValue("cyan.50", "cyan.800");
  const borderColor = useColorModeValue("cyan.400", "cyan.200");
  const textColor = useColorModeValue("cyan.600", "cyan.100");
  return (
    <>
      <Hero title="contact" heading="Schreib uns" />
      <Box
        border="2px"
        p={4}
        borderRadius="lg"
        boxShadow="lg"
        borderColor={borderColor}
        background={bgColor}
        w={{ base: "90%", md: "75%" }}
        mx="auto"
        my={8}
      >
        <form action="https://formspree.io/f/xpzkqrdq" method="POST">
          <FormControl id="email" isRequired>
            <FormLabel color={textColor} fontSize="xl">
              Email Adresse
            </FormLabel>
            <Input
              variant="outline"
              type="email"
              name="_replyto"
              placeholder="Deine E-Mail Adresse"
            />
          </FormControl>
          <FormControl id="Nachricht" isRequired>
            <FormLabel color={textColor} fontSize="xl">
              Deine Nachricht
            </FormLabel>
            <Textarea
              variant="outline"
              name="message"
              placeholder="Deine Nachricht"
            ></Textarea>
          </FormControl>
          <Button type="submit" colorScheme="cyan" my={8}>
            Abschicken
          </Button>
        </form>
      </Box>
    </>
  );
};

export default ContactPage;
