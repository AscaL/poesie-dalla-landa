import { Box, Text, Center, Heading } from "@chakra-ui/react";
import type { Poesia } from "prisma/prisma-client";

//todo: add the img thumb

export function PoesiaDisplay({ poesia }: { poesia: Poesia }) {
  return (
    <Box>
      <Center>
        <Heading my={3}>{poesia.name}</Heading>
      </Center>
      <Text>{poesia.content}</Text>
      <br />
      <Text>Poèta: {poesia.author}</Text>
    </Box>
  );
}
