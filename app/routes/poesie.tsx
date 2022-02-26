import { Text, Center, Box, Divider, Heading } from "@chakra-ui/react";
import { Link, Outlet } from "remix";

export default function PoesieRoute() {
  return (
    <Box>
      <Heading size={"md"}>
        <Link prefetch="intent" to="/" aria-label="Poèsie">
          <Text color="pink">Home</Text>
        </Link>{" "}
        <Link prefetch="intent" to="/poesie" aria-label="Random Poèsia">
          <Text color="pink">Poesie</Text>
        </Link>
      </Heading>
      <Divider />
      <Center>
        <Outlet />
      </Center>
    </Box>
  );
}
