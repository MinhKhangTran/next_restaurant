import {
  Badge,
  Box,
  Heading,
  ListItem,
  Text,
  UnorderedList,
  Button,
} from "@chakra-ui/react";
import axios from "axios";
import { IData } from "pages/menu";
import Image from "next/image";
import formatMoney from "@/utils/formatMoney";
import Link from "next/link";
import { GetStaticPaths } from "next";

interface IDataWithDesc extends IData {
  description: string;
}

export default function SingleMenuPage({ item }: { item: IDataWithDesc }) {
  //   console.log(item);

  return (
    <Box w={{ base: "90%", md: "75%" }} mx="auto">
      <Button colorScheme="cyan" my={4}>
        <Link href="/menu">Zurück zum Menü</Link>
      </Button>
      <Heading as="h1">
        <Text casing="capitalize">{item.name}</Text>
      </Heading>
      <Image src={item.image.formats.medium.url} width={960} height={600} />
      <Heading as="h2">
        Was ist{" "}
        <Text as="span" casing="capitalize">
          {item.name}
        </Text>
        ?
      </Heading>
      <Text fontSize="xl">{item.description}</Text>
      <Heading as="h2">Das sind die Zutaten:</Heading>
      {item.zutat.map((z) => {
        return (
          <UnorderedList fontSize="xl" casing="capitalize" key={z.id}>
            <ListItem>
              <Text casing="capitalize">{z.zutat}</Text>
            </ListItem>
          </UnorderedList>
        );
      })}
      <Text textAlign="end" fontWeight="bold" fontSize="4xl" mt={4}>
        {formatMoney(item.price)}
      </Text>
    </Box>
  );
}

// export async function getServerSideProps({
//   query: { slug },
// }: {
//   query: { slug: string };
// }) {
//   const { data } = await axios.get(
//     `${process.env.API_ENDPOINT}/items?slug=${slug}`
//   );
//   return {
//     props: {
//       item: data[0],
//     },
//   };
// }
export async function getStaticPaths() {
  const { data } = await axios.get(`${process.env.API_ENDPOINT}/items`);

  const paths = data.map((item: any) => ({
    params: { slug: item.slug },
  }));

  return {
    paths,
    fallback: true,
  };
}

export async function getStaticProps({
  params: { slug },
}: {
  params: { slug: string };
}) {
  const { data } = await axios.get(
    `${process.env.API_ENDPOINT}/items?slug=${slug}`
  );
  return {
    props: {
      item: data[0],
    },
    revalidate: 1,
  };
}
