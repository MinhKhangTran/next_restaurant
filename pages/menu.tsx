import Hero from "@/components/Hero";
import MenuItem from "@/components/MenuItem";
import { Box, Grid } from "@chakra-ui/react";
import axios from "axios";

export interface IZutat {
  id: number;
  zutat: string;
}

export interface IData {
  id: number;
  name: string;
  slug: string;
  image: any;
  price: number;
  zutat: IZutat[];
}

export default function MenuPage({ data }: { data: IData[] }) {
  // console.log(data);

  return (
    <>
      <Hero title="menu" heading="Unser Menü" />
      <Grid
        templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(2, 1fr)" }}
        gap={6}
        w={{ base: "90%", md: "75%" }}
        mx="auto"
        my={8}
      >
        {data.map((item) => {
          return (
            <MenuItem
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
    </>
  );
}

export async function getStaticProps() {
  const { data } = await axios.get(`${process.env.API_ENDPOINT}/items`);
  // console.log(data);
  return {
    props: { data },
  };
}
