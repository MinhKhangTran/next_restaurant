import { Box, Grid, Heading, Text } from "@chakra-ui/react";
import Hero from "@/components/Hero";
import Card from "@/components/Card";
import axios from "axios";
import { IData } from "./menu";
import MenuItem from "@/components/MenuItem";

interface ISingleType {
  id: number;
  description?: string;
  title?: string;
}
interface ICard {
  id: number;
  text: string;
  icon: any;
}
export interface IHero {
  title: string;
  hero_img: {
    url: string;
  };
}

export default function HomePage({
  data,
  about,
  index_title_1,
  index_title_2,
  cards,
  heroes,
}: {
  data: IData[];
  about: ISingleType;
  index_title_1: ISingleType;
  index_title_2: ISingleType;
  cards: ICard[];
  heroes: IHero[];
}) {
  // console.log(data);
  // console.log(about);
  // console.log(index_title_1);
  // console.log(index_title_2);
  // console.log(cards);
  // console.log(heroes[0]);

  return (
    <>
      <Hero
        title="home"
        heading={heroes[0].title}
        // img={heroes[0].hero_img.url}
      />
      <Box mx="auto" w={{ base: "90%", md: "75%" }}>
        <Text fontSize="2xl" lineHeight="10">
          {about.description}
        </Text>
        <Heading as="h2" fontSize="3xl" mt={4}>
          {index_title_1.title}
        </Heading>
        <Grid
          my={8}
          templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(3, 1fr)" }}
          placeItems="center"
          gap={8}
        >
          {cards.map((card) => {
            return (
              <Card key={card.id} icon={card.icon.url} text={card.text}></Card>
            );
          })}
          {/* <Card icon="1" text="Zufriedene Kunden und Mitarbeiter" />
          <Card icon="2" text="Frische Zutaten täglich" />
          <Card icon="3" text="jeden Tag geöffnet" /> */}
        </Grid>
        <Heading as="h2" fontSize="3xl" mt={4}>
          {index_title_2.title}
        </Heading>
        <Grid
          templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(3, 1fr)" }}
          gap={2}
          my={8}
        >
          {data.map((item) => {
            return (
              <MenuItem
                featured
                key={item.id}
                name={item.name}
                slug={item.slug}
                image={item.image}
                price={item.price}
                zutat={item.zutat}
              ></MenuItem>
            );
          })}
        </Grid>
      </Box>
    </>
  );
}

export async function getStaticProps() {
  const { data } = await axios.get(
    `${process.env.API_ENDPOINT}/items?featured=true`
  );
  //about
  const { data: about } = await axios.get(`${process.env.API_ENDPOINT}/about`);
  //title 1
  const { data: index_title_1 } = await axios.get(
    `${process.env.API_ENDPOINT}/index-title-1`
  );
  //title 2
  const { data: index_title_2 } = await axios.get(
    `${process.env.API_ENDPOINT}/index-title-2`
  );
  //cards
  const { data: cards } = await axios.get(`${process.env.API_ENDPOINT}/cards`);
  // heroes;
  const { data: heroes } = await axios.get(
    `${process.env.API_ENDPOINT}/heroes?id=1`
  );
  return {
    props: { data, about, index_title_1, index_title_2, cards, heroes },
    revalidate: 1,
  };
}
