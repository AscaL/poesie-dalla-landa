import { Box, Text, Center, Image, Heading, Flex } from "@chakra-ui/react";
import type { Poesia } from "prisma/prisma-client";

//todo: add the img thumb

export function PoesiaDisplay({ poesia }: { poesia: Poesia }) {
  return (
    <Box>
      <Flex
        bg={"gray.600"}
        p={15}
        w="full"
        alignItems="center"
        justifyContent="center">
        <Box
          bg={"gray.800"}
          mx={{ lg: 2 }}
          display={{ lg: "flex" }}
          maxW={{ lg: "5xl" }}
          shadow={{ lg: "lg" }}
          rounded={"lg"}>
          <Box w={{ lg: "50%" }}>
            <Image
              fit={"fill"}
              rounded={"xl"}
              src={poesia.imgUrl || ""}></Image>
          </Box>

          <Box
            py={12}
            px={6}
            maxW={{ base: "xl", lg: "5xl" }}
            w={{ lg: "50%" }}>
            <Heading
              fontSize={{ base: "2xl", md: "3xl" }}
              color={"gold"}
              fontWeight="bold">
              {poesia.name}
            </Heading>
            <Text mt={4} color={"pink.600"}>
              {poesia.content}
            </Text>

            <Box mt={8}>
              <Text
                color="gray.400"
                px={5}
                py={3}
                fontWeight="semibold"
                rounded="lg">
                --{poesia.author}
              </Text>
            </Box>
          </Box>
        </Box>
      </Flex>
    </Box>
  );
}
