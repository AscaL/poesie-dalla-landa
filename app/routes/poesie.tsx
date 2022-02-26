import { Box, Center, Container, Divider, Heading } from "@chakra-ui/react";
import { Link, Outlet } from "remix";

export default function PoesieRoute() {
  return (
    <div>
      <Heading size={"md"}>
        <Link prefetch="intent" to="/" aria-label="Poèsie">
          Home
        </Link>{" "}
        <Link prefetch="intent" to="/poesie" aria-label="Random Poèsia">
          Poesie
        </Link>
      </Heading>
      <Divider />
      <Center>
        <Outlet />
      </Center>
    </div>
  );
}
