import { Box, Skeleton, SkeletonText } from "@chakra-ui/react";

export default function SkeletonComp() {
  return (
    <Box mx="auto" w={{ base: "90%", md: "75%" }}>
      <Skeleton mt={20} height="24px"></Skeleton>
      <Skeleton mt={6} height="375px"></Skeleton>
      <Skeleton mt={6} height="24px"></Skeleton>
      <SkeletonText mt="6" noOfLines={6} spacing="4"></SkeletonText>
      <Skeleton mt={6} height="24px"></Skeleton>
      <SkeletonText mt="6" noOfLines={6} spacing="4"></SkeletonText>
    </Box>
  );
}
