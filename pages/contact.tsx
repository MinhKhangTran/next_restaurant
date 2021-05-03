import Hero from "@/components/Hero";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Text,
  Textarea,
  useColorModeValue,
} from "@chakra-ui/react";
import axios from "axios";
import { IHero } from "pages";

interface IContact {
  heading: string;
  title: string;
  adresse: string;
  plz: string;
  telefon: string;
  email: string;
}

const ContactPage = ({
  heroes,
  contact,
}: {
  heroes: IHero[];
  contact: IContact;
}) => {
  const bgColor = useColorModeValue("cyan.50", "cyan.800");
  const borderColor = useColorModeValue("cyan.400", "cyan.200");
  const textColor = useColorModeValue("cyan.600", "cyan.100");
  return (
    <>
      <Hero title="contact" heading={heroes[0].title} />
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
      <Box w={{ base: "90%", md: "75%" }} mx="auto" my={8}>
        <Heading color={textColor}>{contact.heading}</Heading>
        <Text fontSize="xl" fontWeight="bold">
          {contact.title}
        </Text>
        <Text fontSize="xl">{contact.adresse}</Text>
        <Text fontSize="xl">{contact.plz}</Text>
        <Text fontSize="xl">{contact.telefon}</Text>
        <Text fontSize="xl">{contact.email}</Text>
      </Box>
    </>
  );
};

export async function getStaticProps() {
  // heroes;
  const { data: heroes } = await axios.get(
    `${process.env.API_ENDPOINT}/heroes?id=3`
  );
  //contact
  const { data: contact } = await axios.get(
    `${process.env.API_ENDPOINT}/contact`
  );
  return {
    props: { heroes, contact },
    revalidate: 1,
  };
}

export default ContactPage;
