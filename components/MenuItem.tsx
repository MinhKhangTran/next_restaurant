import { Badge, Box, Flex, Heading, Text } from "@chakra-ui/react";
import { IZutat } from "pages/menu";
import Image from "next/image";
import formatMoney from "@/utils/formatMoney";

const MenuItem = ({
  name,
  slug,
  image,
  price,
  zutat,
}: {
  name: string;
  slug: string;
  image: any;
  price: number;
  zutat: IZutat[];
}) => {
  return (
    <Box boxShadow="xl" borderRadius="xl" p={4}>
      <Flex>
        <Image src={image.formats.thumbnail.url} width="175" height="150" />

        <Box ml={4}>
          <Heading>
            <Text casing="capitalize">{name}</Text>
          </Heading>
          {zutat.map((z) => {
            return (
              <Text casing="capitalize" key={z.id}>
                {z.zutat}
              </Text>
            );
          })}
          <Badge colorScheme="blue">{formatMoney(price)}</Badge>
        </Box>
      </Flex>
    </Box>
  );
};

export default MenuItem;
