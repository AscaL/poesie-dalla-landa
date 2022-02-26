import type { Poesia } from "@prisma/client";
import { Box, Center, Container, Heading } from "@chakra-ui/react";
import { LoaderFunction, MetaFunction, useLoaderData } from "remix";
import { PoesieList } from "~/components/PoesieList";
import { db } from "~/utils/db.server";

type LoaderData = Poesia[];
type PoesieDataList = { id: string; name: string; imgUrl: string | null };

export const loader: LoaderFunction = async () => {
  const poesieDataList: PoesieDataList[] = await db.poesia.findMany({
    take: 15,
    select: { id: true, name: true, imgUrl: true },
  });

  const data: PoesieDataList[] = poesieDataList;
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
      <Box>
        <PoesieList poesie={data}></PoesieList>
      </Box>
    </Container>
  );
}
