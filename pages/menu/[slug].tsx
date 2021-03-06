import {
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
import SkeletonComp from "@/components/SkeletonComp";

interface IDataWithDesc extends IData {
  description: string;
}

export default function SingleMenuPage({ item }: { item: IDataWithDesc }) {
  //   console.log(item);
  if (!item) return <SkeletonComp />;
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
    //if there is no page yet, first make a fallback of this page
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
  //redirect if there is no page
  if (!data.length) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }
  return {
    props: {
      item: data[0],
    },
    //incremental static regeneration at least 1 every 1 s
    revalidate: 1,
  };
}
