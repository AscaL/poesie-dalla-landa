import { Box, VStack, Image } from "@chakra-ui/react";
import type { Poesia } from "prisma/prisma-client";
import { PoesiaCardDisplay } from "./PoesiaCard";

//todo: add the img thumb

export function PoesieList({ poesie }: { poesie: Poesia[] }) {
  return (
    <Box>
      <VStack spacing={3}>
        {poesie.map((poesia) => (
          <PoesiaCardDisplay key={poesia.id} poesia={poesia} />
        ))}
      </VStack>
    </Box>
  );
}
