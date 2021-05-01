import { Box, Grid, Heading, Text } from "@chakra-ui/react";
import Hero from "@/components/Hero";
import Card from "@/components/Card";

const HomePage = () => {
  return (
    <>
      <Hero title="home" heading="Wilkommen bei Midang" />
      <Box mx="auto" w={{ base: "90%", md: "75%" }}>
        <Text fontSize="2xl" lineHeight="10">
          Ugh VHS gentrify yuccie pickled. Chambray chillwave lumbersexual
          pop-up, palo santo tattooed iceland lomo four dollar toast. VHS
          everyday carry art party, blue bottle 90's tattooed marfa PBR&B lomo
          scenester biodiesel umami photo booth. Lumbersexual jean shorts
          humblebrag heirloom lyft, cloud bread fixie butcher. Literally
          typewriter bespoke ethical helvetica everyday carry 8-bit 90's
          single-origin coffee hot chicken green juice fanny pack. Wolf yuccie
          kombucha green juice church-key poke 3 wolf moon wayfarers squid
          asymmetrical food truck farm-to-table.
        </Text>
        <Heading as="h2" fontSize="3xl" mt={4}>
          Was uns auszeichnet!
        </Heading>
        <Grid
          my={8}
          templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(3, 1fr)" }}
          placeItems="center"
          gap={8}
        >
          <Card icon="happy" text="Zufriedene Kunden und Mitarbeiter" />
          <Card icon="fork" text="Frische Zutaten täglich" />
          <Card icon="calendar" text="jeden Tag geöffnet" />
        </Grid>
      </Box>
    </>
  );
};

export default HomePage;
