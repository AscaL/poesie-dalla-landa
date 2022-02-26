import { Box, Text, Center, Heading, Flex, Image } from "@chakra-ui/react";
import type { Poesia } from "prisma/prisma-client";
import { Link } from "remix";

//todo: add the img thumb

export function PoesiaCardDisplay({ poesia }: { poesia: Poesia }) {
  return (
    <Box>
      <Flex
        bg={"grey.100"}
        p={2}
        w="full"
        alignItems="center"
        justifyContent="center">
        <Box
          w="fit-content"
          bg={"red"}
          shadow="sm"
          rounded="sm"
          overflow="hidden"
          mx="auto">
          <Link prefetch="intent" to={`poesie/${poesia.id}`}>
            <Image
              fit="cover"
              src={poesia.imgUrl || "https://picsum.photos/id/1084/400"}
              alt="avatar"
            />
          </Link>

          <Box py={5} textAlign="center">
            <Link
              prefetch="intent"
              to={`poesie/${poesia.id}`}
              style={{
                display: "block",
                fontSize: "2xl",
                color: "gray.800",
                fontWeight: "bold",
              }}>
              {poesia.name}
            </Link>
          </Box>
        </Box>
      </Flex>
    </Box>
  );
}
