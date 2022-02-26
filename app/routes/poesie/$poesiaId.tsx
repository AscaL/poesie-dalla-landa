import type { LoaderFunction, ActionFunction, MetaFunction } from "remix";
import { useLoaderData, useCatch, useParams } from "remix";
import type { Poesia } from "prisma/prisma-client";
import { db } from "~/utils/db.server";
import { Box, Center, Heading, Text } from "@chakra-ui/react";
import { PoesiaDisplay } from "~/components/Poesia";

export const meta: MetaFunction = ({
  data,
}: {
  data: LoaderData | undefined;
}) => {
  if (!data) {
    return {
      title: "No poesia per te!",
      description: "Poesia non trovata",
    };
  }
  return {
    title: `"${data.name}" poesia`,
    description: `Enjoy the "${data.name}" poesia and much more`,
  };
};

type LoaderData = Poesia;

export const loader: LoaderFunction = async ({ params }) => {
  const poesia: Poesia | null = await db.poesia.findUnique({
    where: { id: params.poesiaId },
  });
  if (!poesia) {
    throw new Response("What a poesia! Not found.", {
      status: 404,
    });
  }
  const data: LoaderData = poesia;

  return data;
};

export default function PoesiaRoute() {
  const data = useLoaderData<LoaderData>();

  return (
    <Box>
      <PoesiaDisplay poesia={data} />
    </Box>
  );
}

export function CatchBoundary() {
  const caught = useCatch();
  const params = useParams();
  switch (caught.status) {
    default: {
      return (
        <Box>
          <Heading as="h1" bg="purple.600">
            [CatchBoundary]: {caught.status} {caught.statusText}{" "}
            {params.poesiaId}
          </Heading>
        </Box>
      );
    }
  }
}

export function ErrorBoundary({ error }: { error: Error }) {
  console.error(error);

  const { poesiaId } = useParams();
  return (
    <Box>
      <Heading as="h1" bg="blue.500">
        [ErrorBoundary]: There was an error with ${poesiaId}: {error.message}
      </Heading>
    </Box>
  );
}
