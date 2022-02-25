import { Box, VStack, Image } from "@chakra-ui/react";
import { Link } from "remix";
import type { Poesia } from "prisma/prisma-client";

//todo: add the img thumb

export function PoesieList({ poesie }: { poesie: Poesia[] }) {
  return (
    <Box>
      <VStack spacing={3}>
        {poesie.map((poesia) => (
          <Box key={poesia.id}>
            <Link key={poesia.id} to={`/poesie/${poesia.id}`}>
              {poesia.name}
            </Link>
            <Image src={poesia.imgUrl || ""}></Image>
          </Box>
        ))}
      </VStack>
    </Box>
  );
}
