import { Box, Heading } from "@chakra-ui/react";
import type { LoaderFunction } from "remix";
import { useLoaderData, useCatch } from "remix";
import type { Poesia } from "prisma/prisma-client";
import { db } from "~/utils/db.server";
import { PoesiaDisplay } from "~/components/Poesia";

type LoaderData = Poesia;

export const loader: LoaderFunction = async () => {
  const count = await db.poesia.count();
  const randomRowNumber = Math.floor(Math.random() * count);
  const [randomPoesia] = await db.poesia.findMany({
    take: 1,
    skip: randomRowNumber,
  });
  if (!randomPoesia) {
    throw new Response("No random poesia found", {
      status: 404,
    });
  }
  const data: LoaderData = randomPoesia;
  return data;
};

export default function PoesieIndexRoute() {
  const data = useLoaderData<LoaderData>();

  return <PoesiaDisplay poesia={data}></PoesiaDisplay>;
}

export function CatchBoundary() {
  const caught = useCatch();

  if (caught.status === 404) {
    return (
      <Box>
        <Heading as="h1" bg="purple.600">
          [CatchBoundary]: {caught.status} {caught.statusText}
        </Heading>
      </Box>
    );
  }
  throw new Error(`Unexpected caught response with status: ${caught.status}`);
}

export function ErrorBoundary({ error }: { error: Error }) {
  console.error(error);

  return (
    <Box>
      <Heading as="h1" bg="blue.500">
        [ErrorBoundary]: There was an error: {error.message}
      </Heading>
    </Box>
  );
}
