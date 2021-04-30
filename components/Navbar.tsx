import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Flex,
  Text,
} from "@chakra-ui/react";
import Link from "next/link";

interface ILinks {
  id: number;
  text: string;
  url: string;
}
const links: ILinks[] = [
  { id: 1, text: "Home 🏡", url: "/" },
  { id: 2, text: "Menu 🍽", url: "/menu" },
  { id: 3, text: "Kontakt 💌", url: "/contact" },
];

const Navbar = () => {
  return (
    <Breadcrumb separator="-">
      {links.map((link) => {
        return (
          <BreadcrumbItem key={link.id}>
            <BreadcrumbLink as={Link} href={link.url}>
              <Text cursor="pointer" color="cyan.600" fontSize="2xl">
                {link.text}
              </Text>
            </BreadcrumbLink>
          </BreadcrumbItem>
        );
      })}
    </Breadcrumb>
  );
};

export default Navbar;
