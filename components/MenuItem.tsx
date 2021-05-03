import { Badge, Box, Flex, Heading, Text } from "@chakra-ui/react";
import { IZutat } from "pages/menu";
import Image from "next/image";
import formatMoney from "@/utils/formatMoney";
import Link from "next/link";

const MenuItem = ({
  name,
  slug,
  image,
  price,
  zutat,
  featured,
}: {
  name: string;
  slug: string;
  image: any;
  price: number;
  zutat: IZutat[];
  featured?: boolean;
}) => {
  if (featured) {
    return (
      <Link href={`/menu/${slug}`}>
        <Box
          cursor="pointer"
          _hover={{ boxShadow: "xl" }}
          boxShadow="md"
          borderRadius="xl"
          p={4}
        >
          <Flex direction="column">
            <Box ml={4}>
              <Heading>
                <Text casing="capitalize">{name}</Text>
              </Heading>
            </Box>
            <Image src={image.formats.thumbnail.url} width="175" height="150" />
          </Flex>
        </Box>
      </Link>
    );
  }
  return (
    <Link href={`/menu/${slug}`}>
      <Box
        cursor="pointer"
        _hover={{ boxShadow: "xl" }}
        boxShadow="md"
        borderRadius="xl"
        p={4}
      >
        <Heading>
          <Text casing="capitalize">{name}</Text>
        </Heading>
        <Flex>
          <Image src={image.formats.thumbnail.url} width="175" height="150" />

          <Box ml={4}>
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
    </Link>
  );
};

export default MenuItem;
