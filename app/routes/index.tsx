import type { Poesia } from "@prisma/client";
import { Box, Center, Container, Heading } from "@chakra-ui/react";
import { LoaderFunction, MetaFunction, useLoaderData } from "remix";
import { PoesieList } from "~/components/PoesieList";
import { db } from "~/utils/db.server";

type LoaderData = Poesia[];

export const loader: LoaderFunction = async () => {
  const poesieDataList: Poesia[] | null = await db.poesia.findMany({
    take: 15,
    orderBy: { createdAt: "desc" },
    select: { id: true, name: true, imgUrl: true },
  });

  const data: LoaderData = poesieDataList;
  return data;
};

export const meta: MetaFunction = () => {
  return {
    title: `Poèsie dalla Landa`,
    description: `Le Magnifiche Poèsie`,
  };
};

export default function Index() {
  const data = useLoaderData<LoaderData>();

  return (
    <Container>
      <Center>
        <Heading>Poèsie dalla Landa</Heading>
      </Center>
      <Box>
        <PoesieList poesie={data}></PoesieList>
      </Box>
    </Container>
  );
}
